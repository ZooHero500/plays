(function () {
  "use strict";

  var CONFIG = window.__CATALOG || {};
  var PLAYS = CONFIG.plays || window.__PLAYS || [];
  var PAGE_SIZE = CONFIG.pageSize || 12;
  var FEATURED_ID = CONFIG.featuredId || "ray-cto-pstack";
  var CATEGORY_ORDER = CONFIG.categories || ["全部"];
  var ALL_CAT = CONFIG.allCat || CATEGORY_ORDER[0] || "全部";
  var BASE = CONFIG.base || "/";
  var PLAY_BASE = CONFIG.playBase || "/play/";
  var STR = CONFIG.strings || {};
  var LOCALE = CONFIG.locale || "zh";
  var STORE_KEY = "plays-catalog-" + LOCALE;

  var gridEl = document.getElementById("grid");
  var pagerEl = document.getElementById("pager");
  var chipsEl = document.getElementById("chips");
  var searchEl = document.getElementById("search");
  var countEl = document.getElementById("count");

  var state = { cat: ALL_CAT, q: "", tag: "", page: 1 };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function showFeatured() {
    return state.cat === ALL_CAT && !state.q && !state.tag && state.page === 1;
  }

  // Featured spans a full grid row. Page 1 therefore takes one extra card
  // so the remaining 3-col (and 2-col) rows fill when another page exists.
  function featuredPaging(list) {
    return state.cat === ALL_CAT && !state.q && !state.tag && list.some(function (p) {
      return p.featured;
    });
  }

  function firstPageSize(list) {
    return featuredPaging(list) ? PAGE_SIZE + 1 : PAGE_SIZE;
  }

  function pageStart(list, page) {
    var first = firstPageSize(list);
    if (page <= 1) return 0;
    return first + (page - 2) * PAGE_SIZE;
  }

  function pageSlice(list, page) {
    var start = pageStart(list, page);
    var size = page <= 1 ? firstPageSize(list) : PAGE_SIZE;
    return list.slice(start, start + size);
  }

  function matches(p) {
    if (state.cat !== ALL_CAT && p.category !== state.cat) return false;
    if (state.tag && p.tags.indexOf(state.tag) === -1) return false;
    var q = state.q.trim().toLowerCase();
    if (!q) return true;
    var hay = [p.title, p.summary, p.category, p.author, p.handle || ""]
      .concat(p.tags)
      .join(" ")
      .toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  function filtered() {
    return PLAYS.filter(matches);
  }

  function pageCount(list) {
    var n = list.length;
    if (!n) return 1;
    var first = firstPageSize(list);
    if (n <= first) return 1;
    return 1 + Math.ceil((n - first) / PAGE_SIZE);
  }

  function clampPage(n, pages) {
    var page = parseInt(n, 10);
    if (!page || page < 1) return 1;
    if (page > pages) return pages;
    return page;
  }

  function queryString() {
    var p = new URLSearchParams();
    if (state.cat && state.cat !== ALL_CAT) p.set("cat", state.cat);
    if (state.q) p.set("q", state.q);
    if (state.tag) p.set("tag", state.tag);
    if (state.page > 1) p.set("p", String(state.page));
    return p.toString();
  }

  function catalogUrl(qs) {
    var root = BASE.endsWith("/") ? BASE : BASE + "/";
    return qs ? root + "?" + qs : BASE;
  }

  function writeQuery() {
    var qs = queryString();
    var next = catalogUrl(qs);
    if (location.pathname + location.search !== next) {
      history.replaceState(null, "", next);
    }
    try {
      sessionStorage.setItem(STORE_KEY, qs ? "?" + qs : "");
    } catch (e) {}
  }

  function readQuery() {
    var params = new URLSearchParams(location.search);
    state.cat = params.get("cat") || ALL_CAT;
    state.q = params.get("q") || "";
    state.tag = params.get("tag") || "";
    state.page = clampPage(params.get("p") || "1", 9999);
    if (searchEl && searchEl.value !== state.q) searchEl.value = state.q;
  }

  function coverImg(p) {
    var extra = String(p.cover).indexOf("http") === 0 ? ' referrerpolicy="no-referrer"' : "";
    extra += " data-fallback=\"" + esc(p.fallback) + "\" onerror=\"this.onerror=null;this.src=this.dataset.fallback\"";
    return '<img src="' + esc(p.cover) + '" alt="' + esc(p.title) + '"' + extra + ">";
  }

  function tagsHtml(p, limit) {
    var tags = p.tags || [];
    if (limit) tags = tags.slice(0, limit);
    return tags
      .map(function (t) {
        var on = state.tag === t ? " is-on" : "";
        return '<button type="button" class="tag' + on + '" data-tag="' + esc(t) + '">' + esc(t) + "</button>";
      })
      .join("");
  }

  function cardHtml(p) {
    var feat = p.featured && showFeatured() ? " featured" : "";
    var author = esc(p.author) + (p.handle ? ' <span class="handle">' + esc(p.handle) + "</span>" : "");
    return (
      '<article class="card' +
      feat +
      '" tabindex="0" role="link" data-id="' +
      esc(p.id) +
      '" aria-label="' +
      esc(p.title) +
      '">' +
      '<div class="card-cover">' +
      coverImg(p) +
      '<div class="mark-slot"><span class="mark source">' +
      esc(p.sourceLabel) +
      "</span></div></div>" +
      '<div class="card-body">' +
      '<h2 class="card-title">' +
      esc(p.title) +
      "</h2>" +
      '<p class="card-desc">' +
      esc(p.summary) +
      "</p>" +
      '<div class="card-tags">' +
      tagsHtml(p, 3) +
      "</div>" +
      '<div class="card-foot"><span class="blob" style="--c:' +
      p.blob.c +
      ";--br:" +
      p.blob.br +
      '" aria-hidden="true"></span><span>' +
      author +
      "</span></div></div></article>"
    );
  }

  function renderChips() {
    if (!chipsEl) return;
    chipsEl.innerHTML = CATEGORY_ORDER.map(function (c) {
      var on = c === state.cat ? " is-on" : "";
      return '<button type="button" class="chip' + on + '" data-cat="' + esc(c) + '">' + esc(c) + "</button>";
    }).join("");
  }

  function renderPager(pages) {
    if (!pagerEl) return;
    if (pages <= 1) {
      pagerEl.hidden = true;
      pagerEl.innerHTML = "";
      return;
    }
    pagerEl.hidden = false;
    var html = [];
    html.push(
      '<button type="button" class="pager-prev" data-page="' +
        (state.page - 1) +
        '"' +
        (state.page <= 1 ? " disabled" : "") +
        ">‹</button>"
    );
    for (var i = 1; i <= pages; i++) {
      var on = i === state.page ? " is-on" : "";
      var cur = i === state.page ? ' aria-current="page"' : "";
      html.push(
        '<button type="button" class="pager-num' +
          on +
          '" data-page="' +
          i +
          '"' +
          cur +
          ">" +
          i +
          "</button>"
      );
    }
    html.push(
      '<button type="button" class="pager-next" data-page="' +
        (state.page + 1) +
        '"' +
        (state.page >= pages ? " disabled" : "") +
        ">›</button>"
    );
    pagerEl.innerHTML = html.join("");
  }

  function renderGrid() {
    if (!gridEl || !countEl) return;
    var list = filtered();
    var pages = list.length ? pageCount(list) : 1;
    var nextPage = clampPage(state.page, pages);
    if (nextPage !== state.page) {
      state.page = nextPage;
      writeQuery();
    }
    if (!list.length) {
      var msg = PLAYS.length === 0
        ? (STR.emptyCatalog || "")
        : (STR.emptyFilter || "");
      gridEl.innerHTML = '<div class="empty">' + esc(msg) + "</div>";
      if (pagerEl) {
        pagerEl.hidden = true;
        pagerEl.innerHTML = "";
      }
      countEl.textContent = "0 / 0";
      return;
    }
    var slice = pageSlice(list, state.page);
    var start = pageStart(list, state.page);
    gridEl.innerHTML = slice.map(cardHtml).join("");
    renderPager(pages);
    var from = start + 1;
    var to = start + slice.length;
    var bits = [from + "–" + to + " / " + list.length];
    if (state.cat !== ALL_CAT) bits.push(state.cat);
    if (state.tag) bits.push("#" + state.tag);
    countEl.textContent = bits.join(" · ");
  }

  function paint() {
    renderChips();
    renderGrid();
  }

  function setCat(cat) {
    state.cat = cat;
    state.tag = "";
    state.page = 1;
    writeQuery();
    paint();
  }

  function setTag(tag) {
    state.tag = state.tag === tag ? "" : tag;
    state.page = 1;
    if (state.tag && CATEGORY_ORDER.indexOf(state.tag) !== -1) {
      state.cat = state.tag;
      state.tag = "";
    }
    writeQuery();
    paint();
  }

  function setPage(n) {
    var pages = pageCount(filtered());
    var next = clampPage(n, pages);
    if (next === state.page) return;
    state.page = next;
    writeQuery();
    paint();
    var anchor = document.querySelector(".meta-row");
    if (anchor && anchor.scrollIntoView) anchor.scrollIntoView({ block: "start" });
    else window.scrollTo(0, 0);
  }

  function openPlay(id) {
    try {
      sessionStorage.setItem(STORE_KEY, location.search || "");
    } catch (e) {}
    location.href = PLAY_BASE + encodeURIComponent(id);
  }

  if (chipsEl) {
    chipsEl.addEventListener("click", function (e) {
      var b = e.target.closest("[data-cat]");
      if (!b) return;
      setCat(b.getAttribute("data-cat"));
    });
  }

  if (gridEl) {
    gridEl.addEventListener("click", function (e) {
      var tag = e.target.closest("[data-tag]");
      if (tag) {
        e.preventDefault();
        e.stopPropagation();
        setTag(tag.getAttribute("data-tag"));
        return;
      }
      var card = e.target.closest("[data-id]");
      if (card) openPlay(card.getAttribute("data-id"));
    });

    gridEl.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      var card = e.target.closest("[data-id]");
      if (!card || e.target.closest("[data-tag]")) return;
      e.preventDefault();
      openPlay(card.getAttribute("data-id"));
    });
  }

  if (pagerEl) {
    pagerEl.addEventListener("click", function (e) {
      var b = e.target.closest("[data-page]");
      if (!b || b.disabled) return;
      setPage(b.getAttribute("data-page"));
    });
  }

  var qTimer;
  if (searchEl) {
    searchEl.addEventListener("input", function () {
      state.q = searchEl.value;
      state.page = 1;
      clearTimeout(qTimer);
      qTimer = setTimeout(function () {
        writeQuery();
        paint();
      }, 60);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && document.activeElement !== searchEl && !e.metaKey && !e.ctrlKey) {
        var tag = (document.activeElement && document.activeElement.tagName) || "";
        if (tag === "INPUT" || tag === "TEXTAREA") return;
        e.preventDefault();
        searchEl.focus();
      }
    });
  }

  window.addEventListener("popstate", function () {
    readQuery();
    paint();
  });

  readQuery();
  writeQuery();
  paint();
})();
