(function () {
  "use strict";

  var REQUIRED = [
    "id",
    "title",
    "summary",
    "category",
    "tags",
    "author",
    "authorHandle",
    "sourceUrl",
    "imageUrls",
    "steps",
  ];

  function $(id) {
    return document.getElementById(id);
  }

  function resolveCatalogUrl() {
    var params = new URLSearchParams(window.location.search);
    var fromQuery = params.get("data");
    if (fromQuery) return fromQuery;

    if (typeof window.PLAYS_DATA_URL === "string" && window.PLAYS_DATA_URL.trim()) {
      return window.PLAYS_DATA_URL.trim();
    }

    var meta = document.querySelector('meta[name="plays-data-url"]');
    if (meta && meta.content && meta.content.trim()) {
      return meta.content.trim();
    }

    return new URL("content/plays.json", document.baseURI).href;
  }

  function showStatus(title, lines) {
    var el = $("catalog-status");
    var app = $("catalog-app");
    el.hidden = false;
    el.innerHTML =
      "<h2>" +
      escapeHtml(title) +
      "</h2>" +
      lines.map(function (line) {
        return "<p>" + line + "</p>";
      }).join("");
    if (app) app.replaceChildren();
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function isNonEmptyString(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function isStringArray(value) {
    return Array.isArray(value) && value.every(function (item) {
      return typeof item === "string";
    });
  }

  function normalizePlay(raw, index) {
    if (!raw || typeof raw !== "object") {
      throw new Error("Entry " + index + " is not an object.");
    }
    REQUIRED.forEach(function (key) {
      if (!(key in raw)) {
        throw new Error("Entry " + index + " is missing `" + key + "`.");
      }
    });
    if (!isNonEmptyString(raw.id) || !isNonEmptyString(raw.title)) {
      throw new Error("Entry " + index + " needs a non-empty id and title.");
    }
    if (!isStringArray(raw.tags) || !isStringArray(raw.imageUrls) || !isStringArray(raw.steps)) {
      throw new Error("Entry `" + raw.id + "` must use string arrays for tags, imageUrls, and steps.");
    }
    return {
      id: raw.id.trim(),
      title: raw.title.trim(),
      summary: String(raw.summary || ""),
      category: String(raw.category || "uncategorized"),
      tags: raw.tags,
      author: String(raw.author || ""),
      authorHandle: String(raw.authorHandle || ""),
      sourceUrl: String(raw.sourceUrl || ""),
      date: isNonEmptyString(raw.date) ? raw.date.trim() : "",
      imageUrls: raw.imageUrls,
      steps: raw.steps,
    };
  }

  function missingFileHelp(url) {
    return [
      "This public frontend does not ship editorial catalog data.",
      "Tried: <code>" + escapeHtml(url) + "</code>",
      "Put a private <code>content/plays.json</code> on the host, copy <code>content/plays.example.json</code> to that path for a local shape check, or set <code>PLAYS_DATA_URL</code> / <code>?data=</code>.",
      "Serve the site over HTTP. Opening <code>index.html</code> as <code>file://</code> cannot fetch the catalog.",
    ];
  }

  async function loadCatalog(url) {
    if (window.location.protocol === "file:") {
      throw { kind: "missing", url: url };
    }
    var response;
    try {
      response = await fetch(url, { cache: "no-store" });
    } catch (error) {
      throw { kind: "missing", url: url, cause: error };
    }
    if (!response.ok) {
      throw { kind: "missing", url: url, status: response.status };
    }
    var data;
    try {
      data = await response.json();
    } catch (error) {
      throw { kind: "invalid", message: "Catalog is not valid JSON." };
    }
    if (!Array.isArray(data)) {
      throw { kind: "invalid", message: "Catalog must be a JSON array of plays." };
    }
    return data.map(normalizePlay);
  }

  function playHash(id) {
    return "#play/" + encodeURIComponent(id);
  }

  function selectedPlayId() {
    var hash = window.location.hash || "";
    if (hash.indexOf("#play/") !== 0) return "";
    try {
      return decodeURIComponent(hash.slice("#play/".length));
    } catch (error) {
      return "";
    }
  }

  function uniqueCategories(plays) {
    var seen = [];
    plays.forEach(function (play) {
      if (seen.indexOf(play.category) === -1) seen.push(play.category);
    });
    return seen;
  }

  function matchesQuery(play, query) {
    if (!query) return true;
    var hay = [
      play.title,
      play.summary,
      play.category,
      play.author,
      play.authorHandle,
      play.tags.join(" "),
    ]
      .join(" ")
      .toLowerCase();
    return hay.indexOf(query) !== -1;
  }

  function renderList(plays, state) {
    var filtered = plays.filter(function (play) {
      if (state.category !== "all" && play.category !== state.category) return false;
      return matchesQuery(play, state.query);
    });

    var categories = uniqueCategories(plays);
    var chips = ['<button type="button" class="chip" data-category="all" aria-pressed="' +
      (state.category === "all" ? "true" : "false") +
      '">全部</button>']
      .concat(
        categories.map(function (category) {
          return (
            '<button type="button" class="chip" data-category="' +
            escapeHtml(category) +
            '" aria-pressed="' +
            (state.category === category ? "true" : "false") +
            '">' +
            escapeHtml(category) +
            "</button>"
          );
        })
      )
      .join("");

    var cards = filtered
      .map(function (play) {
        return (
          '<a class="card" href="' +
          escapeHtml(playHash(play.id)) +
          '">' +
          '<span class="card-cat">' +
          escapeHtml(play.category) +
          "</span>" +
          "<h2>" +
          escapeHtml(play.title) +
          "</h2>" +
          "<p>" +
          escapeHtml(play.summary) +
          "</p>" +
          '<div class="card-meta">' +
          escapeHtml(play.author || play.authorHandle || play.id) +
          "</div>" +
          "</a>"
        );
      })
      .join("");

    return (
      '<div class="toolbar">' +
      '<label class="visually-hidden" for="play-search">搜索玩法</label>' +
      '<input id="play-search" type="search" placeholder="搜索标题、作者、标签…" value="' +
      escapeHtml(state.query) +
      '" />' +
      '<div class="chips" role="group" aria-label="分类">' +
      chips +
      "</div>" +
      "</div>" +
      '<p class="count">' +
      filtered.length +
      " / " +
      plays.length +
      "</p>" +
      (filtered.length
        ? '<div class="grid">' + cards + "</div>"
        : "<p>没有匹配的玩法。</p>")
    );
  }

  function renderDetail(play) {
    if (!play) {
      return (
        '<p class="status"><strong>找不到这条玩法。</strong> <a class="back" href="#">返回目录</a></p>'
      );
    }
    var image = play.imageUrls[0]
      ? '<img class="cover" src="' +
        escapeHtml(play.imageUrls[0]) +
        '" alt="" />'
      : "";
    var source = play.sourceUrl
      ? ' · <a href="' + escapeHtml(play.sourceUrl) + '" rel="noopener noreferrer">来源</a>'
      : "";
    var steps = play.steps
      .map(function (step) {
        return "<li>" + escapeHtml(step) + "</li>";
      })
      .join("");
    var tags = play.tags
      .map(function (tag) {
        return "<li>" + escapeHtml(tag) + "</li>";
      })
      .join("");

    return (
      '<article class="detail">' +
      '<a class="back" href="#">← 返回目录</a>' +
      '<p class="card-cat">' +
      escapeHtml(play.category) +
      "</p>" +
      "<h1>" +
      escapeHtml(play.title) +
      "</h1>" +
      '<p class="detail-meta">' +
      escapeHtml([play.author, play.authorHandle, play.date].filter(Boolean).join(" · ")) +
      source +
      "</p>" +
      image +
      "<p>" +
      escapeHtml(play.summary) +
      "</p>" +
      "<ol class=\"steps\">" +
      steps +
      "</ol>" +
      (tags ? '<ul class="tags">' + tags + "</ul>" : "") +
      "</article>"
    );
  }

  function bindList(app, state, render) {
    var search = $("play-search");
    if (search) {
      search.addEventListener("input", function () {
        state.query = search.value.trim().toLowerCase();
        render();
        var again = $("play-search");
        if (again) {
          again.focus();
          var end = again.value.length;
          again.setSelectionRange(end, end);
        }
      });
    }
    app.querySelectorAll(".chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        state.category = chip.getAttribute("data-category") || "all";
        render();
      });
    });
  }

  async function main() {
    var status = $("catalog-status");
    var app = $("catalog-app");
    if (!status || !app) return;

    var url = resolveCatalogUrl();
    var plays;
    try {
      plays = await loadCatalog(url);
    } catch (error) {
      if (error && error.kind === "invalid") {
        showStatus("Catalog is invalid", [
          escapeHtml(error.message),
          "See <code>content/plays.example.json</code> for the expected shape.",
        ]);
        return;
      }
      showStatus("Catalog not found", missingFileHelp((error && error.url) || url));
      return;
    }

    status.hidden = true;
    status.replaceChildren();

    var state = { category: "all", query: "" };

    function render() {
      var id = selectedPlayId();
      if (id) {
        var play = plays.find(function (item) {
          return item.id === id;
        });
        app.innerHTML = renderDetail(play);
        return;
      }
      app.innerHTML = renderList(plays, state);
      bindList(app, state, render);
    }

    window.addEventListener("hashchange", render);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && selectedPlayId()) {
        window.location.hash = "";
      }
    });
    render();
  }

  main();
})();
