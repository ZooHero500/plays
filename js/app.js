(function () {
  "use strict";

  var CATEGORY_ORDER = ["全部", "编制", "工程", "增长", "生活", "官方玩法"];
  var PAGE_SIZE = 12;

  var BLOBS = {
    "Ray Fernando": { c: "#E8A87C", br: "46% 54% 48% 52% / 42% 40% 60% 58%" },
    "xAI": { c: "#D8D2C8", br: "50% 50% 45% 55% / 42% 58% 42% 58%" },
    "xAI Docs": { c: "#D8D2C8", br: "50% 50% 45% 55% / 42% 58% 42% 58%" },
    "Debbie O'Brien": { c: "#7A8B6F", br: "48% 52% 60% 40% / 45% 50% 50% 55%" },
    "Elie Steinbock": { c: "#6B7C8A", br: "55% 45% 48% 52% / 40% 60% 40% 60%" },
    "eric zakariasson": { c: "#8B7355", br: "40% 60% 55% 45% / 50% 50% 45% 55%" },
    "Rhys Sullivan": { c: "#C4B8A5", br: "42% 58% 50% 50% / 55% 45% 55% 45%" },
    "Jesse Hanley": { c: "#6B7C8A", br: "58% 42% 50% 50% / 40% 55% 45% 60%" },
    "Dennis Yu": { c: "#A39E94", br: "44% 56% 48% 52% / 50% 40% 60% 50%" },
    "Promptway": { c: "#8A8A8A", br: "42% 58% 50% 50% / 40% 42% 58% 60%" }
  };

  var LOCAL_SHOTS = {
    "ray-cto-pstack": [
      { src: "assets/prompt1.png", cap: "下属 bot：Land / Convex / Auth，各管一截栈", step: 4 },
      { src: "assets/prompt2.jpg", cap: "主 bot 拉群，三个下属在同一条线程里对齐", step: 3 },
      { src: "assets/multitask.jpg", cap: "主 bot 收敛 PR：看板、派活、合可合的", step: 3 },
      { src: "assets/groups.png", cap: "Move to 分组：项目、生活、内容各一条泳道", step: 5 },
      { src: "assets/lanes.jpg", cap: "侧栏按 Health / Life 分开，避免所有 bot 挤在一起", step: 5 }
    ]
  };

  var PAGE_TITLE = "Grok Bot Plays";

  var gridEl = document.getElementById("grid");
  var pagerEl = document.getElementById("pager");
  var chipsEl = document.getElementById("chips");
  var searchEl = document.getElementById("search");
  var countEl = document.getElementById("count");
  var detailEl = document.getElementById("detail");
  var aboutEl = document.getElementById("about");
  var navAbout = document.getElementById("nav-about");
  var PLAYS = [];
  var CATEGORIES = CATEGORY_ORDER.slice();
  var byId = {};

  var state = { cat: "全部", q: "", tag: "", play: null, about: false, page: 1 };
  var lastGridHash = "#/";
  var gridScroll = 0;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function sourceLabel(url) {
    if (!url) return "来源";
    if (/docs\.x\.ai/.test(url)) return "来源 xAI Docs";
    if (/x\.ai/.test(url)) return "来源 xAI";
    if (/(^|\.)x\.com|twitter\.com/.test(url)) return "来源 X";
    if (/dev\.to/.test(url)) return "来源 DEV";
    if (/botdirectory\.ai/.test(url)) return "来源 Bot Directory";
    if (/dennisyu\.com|debbie\.codes/.test(url)) return "来源文章";
    if (/runtimewire/.test(url)) return "来源报道";
    return "来源";
  }

  function isOfficial(p) {
    return p.author === "xAI" || p.author === "xAI Docs" || p.category === "官方玩法";
  }

  function hideHandle(h) {
    return !h || h === "@bot";
  }

  function wordmarkCover(id) { return "assets/covers/" + id + ".svg"; }
  function pngCover(id) { return "assets/covers/" + id + ".png"; }
  function coverOf(p) {
    if (p.id === "ray-cto-pstack") {
      if (p.imageUrls && p.imageUrls[0]) return p.imageUrls[0];
      return "assets/cover.jpg";
    }
    return pngCover(p.id);
  }

  function coverImg(src, title, id) {
    var extra = String(src).indexOf("http") === 0 ? ' referrerpolicy="no-referrer"' : "";
    if (id && String(src).indexOf(".svg") === -1) {
      var fallback = wordmarkCover(id);
      if (id === "ray-cto-pstack" && src !== "assets/cover.jpg") fallback = "assets/cover.jpg";
      extra += " onerror=\"this.onerror=null;this.src='" + esc(fallback) + "'\"";
    }
    return '<img src="' + esc(src) + '" alt="' + esc(title || "") + '"' + extra + ">";
  }

  function isCoverSrc(src) {
    var s = String(src || "");
    if (!s) return true;
    if (/assets\/covers\//.test(s) || /\/covers\//.test(s)) return true;
    if (/^assets\/cover\.(jpg|jpeg|png|svg|webp)$/i.test(s)) return true;
    return false;
  }

  function shotsOf(p) {
    // Real in-product screenshots only. Never cover / imageUrls[0] / assets/covers/*.
    var local = LOCAL_SHOTS[p.id];
    if (!local) return [];
    return local.filter(function (s) {
      return s && s.src && !isCoverSrc(s.src);
    });
  }

  function authorUrl(p) {
    if (p.author === "xAI" || p.author === "xAI Docs") return p.sourceUrl;
    if (p.authorHandle && !hideHandle(p.authorHandle)) {
      return "https://x.com/" + p.authorHandle.replace(/^@/, "");
    }
    return p.sourceUrl;
  }

  function normalize(raw) {
    return (raw || []).map(function (p) {
      return {
        id: p.id,
        title: p.title,
        summary: p.summary,
        category: p.category,
        tags: p.tags || [],
        author: p.author,
        handle: hideHandle(p.authorHandle) ? "" : p.authorHandle,
        authorUrl: authorUrl(p),
        sourceUrl: p.sourceUrl,
        sourceLabel: sourceLabel(p.sourceUrl),
        date: p.date || "",
        steps: p.steps || [],
        audience: p.audience,
        outcome: p.outcome,
        tutorial: p.tutorial,
        commentary: p.commentary,
        prompts: p.prompts,
        cover: coverOf(p),
        shots: shotsOf(p),
        blob: BLOBS[p.author] || BLOBS["Promptway"],
        official: isOfficial(p),
        featured: p.id === "ray-cto-pstack"
      };
    });
  }

  function blobHtml(p) {
    var b = p.blob || BLOBS.Promptway;
    return '<span class="blob" style="--c:' + b.c + ";--br:" + b.br + '" aria-hidden="true"></span>';
  }

  function markHtml(p) {
    var lab = p.official ? p.sourceLabel : p.sourceLabel;
    return '<span class="mark source">' + esc(lab) + "</span>";
  }

  function tagsHtml(p, limit) {
    var tags = p.tags || [];
    if (limit) tags = tags.slice(0, limit);
    return tags.map(function (t) {
      var on = state.tag === t ? " is-on" : "";
      return '<button type="button" class="tag' + on + '" data-tag="' + esc(t) + '">' + esc(t) + "</button>";
    }).join("");
  }

  function showFeatured() {
    return state.cat === "全部" && !state.q && !state.tag && state.page === 1;
  }

  function hasText(v) {
    if (v == null) return false;
    if (Array.isArray(v)) return v.length > 0;
    return String(v).trim() !== "";
  }

  function hasLongForm(p) {
    return hasText(p.audience) || hasText(p.outcome) || hasText(p.tutorial) || hasText(p.commentary) || hasText(p.prompts);
  }

  function asLines(val) {
    if (val == null) return [];
    if (Array.isArray(val)) return val;
    return String(val).split(/\n+/).map(function (s) { return s.trim(); }).filter(Boolean);
  }

  function proseHtml(val) {
    var lines;
    if (Array.isArray(val)) lines = val;
    else if (val == null) lines = [];
    else lines = String(val).split(/\n\n+/).map(function (s) { return s.trim(); }).filter(Boolean);
    return lines.map(function (line) {
      var text = typeof line === "string" ? line : (line.body || line.text || line.title || "");
      return "<p>" + esc(text) + "</p>";
    }).join("");
  }

  function pad(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function shotsByStep(shots) {
    var map = {};
    (shots || []).forEach(function (s) {
      if (!s || !s.src || isCoverSrc(s.src)) return;
      var n = parseInt(s.step, 10);
      if (!n) return;
      if (!map[n]) map[n] = [];
      map[n].push(s);
    });
    return map;
  }

  function stepFiguresHtml(list) {
    return (list || []).map(function (s) {
      var extra = String(s.src).indexOf("http") === 0 ? ' referrerpolicy="no-referrer"' : "";
      return (
        '<figure class="shot step-shot">' +
          '<img src="' + esc(s.src) + '" alt="' + esc(s.cap || "") + '"' + extra + ">" +
          (s.cap ? "<figcaption>" + esc(s.cap) + "</figcaption>" : "") +
        "</figure>"
      );
    }).join("");
  }

  function stepsHtml(list, shots) {
    var grouped = shotsByStep(shots);
    return (list || []).map(function (s, i) {
      var title = "";
      var body = "";
      if (typeof s === "string") {
        body = s;
      } else if (s) {
        title = s.title || "";
        body = s.body || s.text || "";
      }
      var inner;
      if (title && body && title !== body) {
        inner = "<strong>" + esc(title) + "</strong><p>" + esc(body) + "</p>";
      } else {
        inner = '<p class="step-full">' + esc(body || title) + "</p>";
      }
      return (
        "<li>" +
          '<span class="step-n">' + pad(i + 1) + "</span>" +
          '<div class="step-body">' + inner + stepFiguresHtml(grouped[i + 1]) + "</div>" +
        "</li>"
      );
    }).join("");
  }

  function pageCount(n) {
    return Math.max(1, Math.ceil(n / PAGE_SIZE));
  }

  function clampPage(n, pages) {
    var page = parseInt(n, 10);
    if (!page || page < 1) return 1;
    if (page > pages) return pages;
    return page;
  }

  function matches(p) {
    if (state.cat !== "全部" && p.category !== state.cat) return false;
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

  function renderChips() {
    chipsEl.innerHTML = CATEGORIES.map(function (c) {
      var on = c === state.cat ? " is-on" : "";
      return '<button type="button" class="chip' + on + '" data-cat="' + esc(c) + '">' + esc(c) + "</button>";
    }).join("");
  }

  function cardHtml(p) {
    var feat = p.featured && showFeatured() ? " featured" : "";
    var author = esc(p.author) + (p.handle ? ' <span class="handle">' + esc(p.handle) + "</span>" : "");
    return (
      '<article class="card' + feat + '" tabindex="0" role="link" data-id="' + esc(p.id) + '" aria-label="' + esc(p.title) + '">' +
        '<div class="card-cover">' +
          coverImg(p.cover, p.title, p.id) +
          '<div class="mark-slot">' + markHtml(p) + "</div>" +
        "</div>" +
        '<div class="card-body">' +
          "<h2 class=\"card-title\">" + esc(p.title) + "</h2>" +
          '<p class="card-desc">' + esc(p.summary) + "</p>" +
          '<div class="card-tags">' + tagsHtml(p, 3) + "</div>" +
          '<div class="card-foot">' + blobHtml(p) + "<span>" + author + "</span></div>" +
        "</div>" +
      "</article>"
    );
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
      '<button type="button" class="pager-prev" data-page="' + (state.page - 1) + '"' +
      (state.page <= 1 ? " disabled" : "") + ">上一页</button>"
    );
    for (var i = 1; i <= pages; i++) {
      var on = i === state.page ? " is-on" : "";
      var cur = i === state.page ? ' aria-current="page"' : "";
      html.push(
        '<button type="button" class="pager-num' + on + '" data-page="' + i + '"' + cur + ">" + i + "</button>"
      );
    }
    html.push(
      '<button type="button" class="pager-next" data-page="' + (state.page + 1) + '"' +
      (state.page >= pages ? " disabled" : "") + ">下一页</button>"
    );
    pagerEl.innerHTML = html.join("");
  }

  function renderGrid() {
    var list = filtered();
    var pages = list.length ? pageCount(list.length) : 1;
    var nextPage = clampPage(state.page, pages);
    if (nextPage !== state.page) {
      state.page = nextPage;
      writeGridHash();
    }
    if (!list.length) {
      gridEl.innerHTML = '<div class="empty">没有匹配的玩法。换个词，或点「全部」。</div>';
      if (pagerEl) {
        pagerEl.hidden = true;
        pagerEl.innerHTML = "";
      }
    } else {
      var start = (state.page - 1) * PAGE_SIZE;
      gridEl.innerHTML = list.slice(start, start + PAGE_SIZE).map(cardHtml).join("");
      renderPager(pages);
    }
    var bits = [list.length + " 条"];
    if (state.cat !== "全部") bits.push(state.cat);
    if (state.tag) bits.push("#" + state.tag);
    if (list.length && pages > 1) bits.push(state.page + " / " + pages);
    countEl.textContent = bits.join(" · ");
  }

  function relatedHtml(p) {
    var others = PLAYS.filter(function (x) {
      return x.category === p.category && x.id !== p.id;
    }).slice(0, 4);
    if (!others.length) return "";
    return (
      '<section class="section">' +
        "<h2>同类玩法</h2>" +
        '<div class="related-grid">' +
          others.map(function (x) {
            return (
              '<button type="button" class="mini" data-id="' + esc(x.id) + '">' +
                coverImg(x.cover, x.title, x.id) +
                "<span class=\"mini-title\">" + esc(x.title) + "</span>" +
                '<span class="mini-meta">' + esc(x.category) + "</span>" +
              "</button>"
            );
          }).join("") +
        "</div>" +
      "</section>"
    );
  }

  function promptSourceHtml(source) {
    var raw = source == null ? "" : String(source);
    if (!raw) return "";
    var html;
    if (/^https?:\/\//i.test(raw)) {
      var i = 0;
      while (i < raw.length && !/\s/.test(raw.charAt(i))) i++;
      var url = raw.slice(0, i);
      var rest = raw.slice(i);
      html = '<a class="source-link" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + esc(url) + "</a>" + esc(rest);
    } else {
      html = esc(raw);
    }
    return '<p class="prompt-source">' + html + "</p>";
  }

  function promptsHtml(p) {
    if (!hasText(p.prompts)) return "";
    var quotes = asLines(p.prompts).map(function (item) {
      var title = "";
      var body = "";
      var source = "";
      if (typeof item === "string") {
        body = item;
      } else if (item) {
        title = item.title || "";
        body = item.body || item.text || "";
        source = item.source || "";
      }
      if (!title && !body) return "";
      return (
        '<figure class="prompt-wrap">' +
          '<div class="prompt-bar">' +
            (title ? '<figcaption class="prompt-title">' + esc(title) + "</figcaption>" : "<span></span>") +
            '<button type="button" class="copy-chip">复制</button>' +
          "</div>" +
          '<pre class="prompt-text">' + esc(body) + "</pre>" +
          promptSourceHtml(source) +
        "</figure>"
      );
    }).join("");
    if (!quotes) return "";
    return (
      '<section class="section">' +
        "<h2>提示词</h2>" +
        quotes +
      "</section>"
    );
  }

  function articleHtml(p) {
    if (!hasLongForm(p)) {
      return (
        '<section class="section">' +
          "<h2>怎么做</h2>" +
          '<ol class="steps">' + stepsHtml(p.steps || [], p.shots) + "</ol>" +
        "</section>"
      );
    }
    var html = "";
    if (hasText(p.audience)) {
      html +=
        '<section class="section">' +
          "<h2>给谁</h2>" +
          '<div class="article-prose">' + proseHtml(p.audience) + "</div>" +
        "</section>";
    }
    if (hasText(p.outcome)) {
      html +=
        '<section class="section">' +
          "<h2>做完的效果</h2>" +
          '<div class="article-prose">' + proseHtml(p.outcome) + "</div>" +
        "</section>";
    }
    var how = hasText(p.tutorial) ? asLines(p.tutorial) : (p.steps || []);
    if (how.length) {
      html +=
        '<section class="section">' +
          "<h2>怎么做</h2>" +
          '<ol class="steps">' + stepsHtml(how, p.shots) + "</ol>" +
        "</section>";
    }
    if (hasText(p.commentary)) {
      html +=
        '<section class="section">' +
          "<h2>点评</h2>" +
          '<div class="take">' + proseHtml(p.commentary) + "</div>" +
        "</section>";
    }
    html += promptsHtml(p);
    return html;
  }

  function renderDetail(p) {
    var handle = "";
    if (p.handle && p.authorUrl) {
      handle =
        '<a class="source-link" href="' + esc(p.authorUrl) + '" target="_blank" rel="noopener noreferrer">' +
        esc(p.handle) + "</a>";
    }

    var sourceLine =
      '<a class="source-link" href="' + esc(p.sourceUrl) + '" target="_blank" rel="noopener noreferrer">' +
      esc(p.sourceLabel) + " ↗</a>";

    var date = p.date ? '<span class="handle">' + esc(p.date.replace(/-/g, ".")) + "</span>" : "";

    detailEl.innerHTML =
      '<button type="button" class="back" id="back">← 返回目录</button>' +
      '<div class="hero-cover">' + coverImg(p.cover, p.title, p.id) + "</div>" +
      '<div class="detail-head">' +
        '<div class="detail-kicker">' + markHtml(p) + tagsHtml(p) + "</div>" +
        "<h1 class=\"detail-title\">" + esc(p.title) + "</h1>" +
        '<p class="detail-sum">' + esc(p.summary) + "</p>" +
        '<div class="byline">' +
          blobHtml(p) +
          "<span>" + esc(p.author) + "</span>" +
          handle +
          sourceLine +
          date +
          '<button type="button" class="copy-chip" data-share>分享</button>' +
        "</div>" +
      "</div>" +
      articleHtml(p) +
      '<section class="section">' +
        "<h2>相关标签</h2>" +
        '<div class="related">' + tagsHtml(p) + "</div>" +
      "</section>" +
      relatedHtml(p) +
      '<p class="note">正文按公开帖 / 官方说明改写。没有点赞、阅读或后台数字。打开来源核原文。 <a class="source-link" href="about.html">关于</a></p>';
  }

  function setView() {
    var onDetail = !!state.play;
    var onAbout = !!state.about && !onDetail;
    document.body.classList.toggle("is-detail", onDetail);
    document.body.classList.toggle("is-about", onAbout);
    detailEl.hidden = !onDetail;
    if (navAbout) navAbout.classList.toggle("is-on", onAbout);
    var navCat = document.getElementById("nav-catalog");
    if (navCat) navCat.classList.toggle("is-on", !onAbout && !onDetail);
    if (onDetail) {
      var p = byId[state.play];
      if (!p) {
        state.play = null;
        setView();
        return;
      }
      renderDetail(p);
      document.title = p.title + " · " + PAGE_TITLE;
      window.scrollTo(0, 0);
    } else if (onAbout) {
      document.title = PAGE_TITLE;
      window.scrollTo(0, 0);
    } else {
      document.title = PAGE_TITLE;
      renderChips();
      renderGrid();
      window.scrollTo(0, gridScroll);
    }
  }

  function gridHash() {
    var p = new URLSearchParams();
    if (state.cat && state.cat !== "全部") p.set("cat", state.cat);
    if (state.q) p.set("q", state.q);
    if (state.tag) p.set("tag", state.tag);
    if (state.page > 1) p.set("page", String(state.page));
    var qs = p.toString();
    return "#/" + (qs ? "?" + qs : "");
  }

  function writeGridHash() {
    var next = gridHash();
    lastGridHash = next;
    if (location.hash !== next) history.replaceState(null, "", next);
  }

  function playIdFromPath(path) {
    var slug = decodeURIComponent((path || "/").replace(/^\/+/, ""));
    if (slug.indexOf("play/") === 0) slug = slug.slice(5);
    if (!slug || slug === "about") return "";
    return byId[slug] ? slug : "";
  }

  function applyHash() {
    var raw = (location.hash || "#/").replace(/^#/, "");
    if (raw.charAt(0) !== "/") raw = "/" + raw;
    var parts = raw.split("?");
    var path = parts[0];
    var params = new URLSearchParams(parts[1] || "");
    var id = playIdFromPath(path);
    if (id) {
      state.about = false;
      state.play = id;
    } else if (path === "/about") {
      state.play = null;
      state.about = true;
    } else {
      state.play = null;
      state.about = false;
      state.cat = params.get("cat") || "全部";
      state.q = params.get("q") || "";
      state.tag = params.get("tag") || "";
      state.page = clampPage(params.get("page") || "1", 9999);
      lastGridHash = gridHash();
      if (searchEl.value !== state.q) searchEl.value = state.q;
    }
    setView();
  }

  function openPlay(id) {
    gridScroll = window.scrollY;
    lastGridHash = gridHash();
    location.hash = "#/" + encodeURIComponent(id);
  }

  function backToGrid() {
    var target = lastGridHash && lastGridHash.indexOf("/play/") === -1 && lastGridHash.indexOf("/about") === -1
      ? lastGridHash
      : "#/";
    if (location.hash === target) {
      state.play = null;
      state.about = false;
      setView();
    } else {
      location.hash = target;
    }
  }

  function setCat(cat) {
    state.cat = cat;
    state.tag = "";
    state.page = 1;
    state.play = null;
    state.about = false;
    writeGridHash();
    setView();
  }

  function setTag(tag) {
    state.tag = state.tag === tag ? "" : tag;
    state.page = 1;
    state.play = null;
    state.about = false;
    if (state.tag && CATEGORIES.indexOf(state.tag) !== -1) {
      state.cat = state.tag;
      state.tag = "";
    }
    writeGridHash();
    setView();
  }

  function setPage(n) {
    var pages = pageCount(filtered().length);
    var next = clampPage(n, pages);
    if (next === state.page && !state.play) return;
    state.page = next;
    state.play = null;
    state.about = false;
    writeGridHash();
    setView();
    var anchor = document.querySelector(".meta-row");
    if (anchor && anchor.scrollIntoView) anchor.scrollIntoView({ block: "start" });
    else window.scrollTo(0, 0);
  }

  chipsEl.addEventListener("click", function (e) {
    var b = e.target.closest("[data-cat]");
    if (!b) return;
    setCat(b.getAttribute("data-cat"));
  });

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

  if (pagerEl) {
    pagerEl.addEventListener("click", function (e) {
      var b = e.target.closest("[data-page]");
      if (!b || b.disabled) return;
      setPage(b.getAttribute("data-page"));
    });
  }

  function flashChip(btn, idleLabel) {
    btn.textContent = "已复制";
    btn.classList.add("is-on");
    setTimeout(function () {
      btn.textContent = idleLabel;
      btn.classList.remove("is-on");
    }, 1200);
  }

  function copyPromptText(btn) {
    var wrap = btn.closest(".prompt-wrap");
    var pre = wrap && wrap.querySelector(".prompt-text");
    var val = pre ? pre.textContent : "";
    function flashed() { flashChip(btn, "复制"); }
    function selectPre() {
      if (!pre) return;
      var range = document.createRange();
      range.selectNodeContents(pre);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(val).then(flashed).catch(selectPre);
    } else {
      selectPre();
    }
  }

  function copyLocation(btn) {
    var url = location.href;
    function flashed() { flashChip(btn, "分享"); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(flashed).catch(function () {});
    }
  }

  function sharePlay(btn) {
    var p = state.play ? byId[state.play] : null;
    var payload = {
      title: p ? p.title : PAGE_TITLE,
      text: p ? (p.summary || "") : "",
      url: location.href
    };
    if (typeof navigator.share === "function") {
      navigator.share(payload).catch(function () {
        copyLocation(btn);
      });
      return;
    }
    copyLocation(btn);
  }

  detailEl.addEventListener("click", function (e) {
    var shareBtn = e.target.closest("[data-share]");
    if (shareBtn) {
      e.preventDefault();
      sharePlay(shareBtn);
      return;
    }
    var copyBtn = e.target.closest(".copy-chip");
    if (copyBtn) {
      e.preventDefault();
      copyPromptText(copyBtn);
      return;
    }
    if (e.target.closest("#back")) {
      backToGrid();
      return;
    }
    var related = e.target.closest(".related-link[data-id], .mini[data-id], .related-list [data-id]");
    if (related) {
      openPlay(related.getAttribute("data-id"));
      return;
    }
    var tag = e.target.closest("[data-tag]");
    if (tag) {
      gridScroll = 0;
      setTag(tag.getAttribute("data-tag"));
    }
  });

  var qTimer;
  searchEl.addEventListener("input", function () {
    state.q = searchEl.value;
    state.page = 1;
    clearTimeout(qTimer);
    qTimer = setTimeout(function () {
      state.play = null;
      state.about = false;
      writeGridHash();
      document.body.classList.remove("is-detail", "is-about");
      detailEl.hidden = true;
      document.title = PAGE_TITLE;
      renderChips();
      renderGrid();
    }, 60);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && (state.play || state.about)) {
      e.preventDefault();
      backToGrid();
    }
    if (e.key === "/" && !state.play && !state.about && document.activeElement !== searchEl && !e.metaKey && !e.ctrlKey) {
      var tag = (document.activeElement && document.activeElement.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      e.preventDefault();
      searchEl.focus();
    }
  });

  window.addEventListener("hashchange", applyHash);

  function boot(raw) {
    PLAYS = normalize(raw);
    byId = {};
    PLAYS.forEach(function (p) { byId[p.id] = p; });
    var present = {};
    PLAYS.forEach(function (p) { present[p.category] = true; });
    CATEGORIES = CATEGORY_ORDER.filter(function (c) {
      return c === "全部" || present[c];
    });
    applyHash();
  }

  function start() {
    var embedded = typeof window.PLAYS !== "undefined" ? window.PLAYS : [];
    if (location.protocol.indexOf("http") === 0) {
      fetch("content/plays.json")
        .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
        .then(boot)
        .catch(function () { boot(embedded); });
    } else {
      boot(embedded);
    }
  }

  start();
})();
