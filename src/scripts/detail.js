(function () {
  "use strict";

  var back = document.getElementById("back");
  if (back) {
    try {
      var locale = back.getAttribute("data-locale") || "";
      var key = locale ? "plays-catalog-" + locale : "plays-catalog";
      var saved = sessionStorage.getItem(key);
      var base = back.getAttribute("data-base") || "/";
      if (saved) {
        var root = base.endsWith("/") ? base : base + "/";
        if (saved.charAt(0) === "?") back.setAttribute("href", root + saved);
        else if (saved) back.setAttribute("href", root + saved.replace(/^\//, ""));
      }
    } catch (e) {}
  }

  function idleOf(btn, fallback) {
    return btn.getAttribute("data-idle") || fallback;
  }

  function copiedOf(btn) {
    return btn.getAttribute("data-copied") || "Copied";
  }

  function flashChip(btn, idleLabel) {
    btn.textContent = copiedOf(btn);
    btn.classList.add("is-on");
    setTimeout(function () {
      btn.textContent = idleLabel;
      btn.classList.remove("is-on");
    }, 1200);
  }

  function copyText(btn, val, idle) {
    function flashed() {
      flashChip(btn, idle);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(val).then(flashed).catch(function () {});
    }
  }

  var preview = document.getElementById("preview");
  var previewImg = document.getElementById("preview-img");
  var previewCap = document.getElementById("preview-cap");
  var previewPrev = document.querySelector("[data-preview-prev]");
  var previewNext = document.querySelector("[data-preview-next]");
  var shots = [];
  var shotIndex = 0;

  function collectShots() {
    shots = Array.prototype.slice.call(document.querySelectorAll("[data-preview]"));
  }

  function renderPreview() {
    var btn = shots[shotIndex];
    if (!btn || !previewImg) return;
    var img = btn.querySelector("img");
    var src = (img && (img.currentSrc || img.src)) || "";
    var cap = btn.getAttribute("data-caption") || "";
    previewImg.src = src;
    previewImg.alt = cap || (img && img.alt) || "";
    if (previewCap) {
      previewCap.textContent = cap;
      previewCap.hidden = !cap;
    }
    var many = shots.length > 1;
    if (previewPrev) previewPrev.hidden = !many;
    if (previewNext) previewNext.hidden = !many;
  }

  function openPreview(btn) {
    collectShots();
    var i = shots.indexOf(btn);
    shotIndex = i < 0 ? 0 : i;
    renderPreview();
    if (preview && typeof preview.showModal === "function" && !preview.open) {
      preview.showModal();
    }
  }

  function closePreview() {
    if (preview && preview.open) preview.close();
  }

  function stepPreview(delta) {
    if (shots.length < 2) return;
    shotIndex = (shotIndex + delta + shots.length) % shots.length;
    renderPreview();
  }

  if (preview) {
    preview.addEventListener("click", function (e) {
      if (e.target === preview) closePreview();
    });
  }
  if (previewPrev) {
    previewPrev.addEventListener("click", function (e) {
      e.stopPropagation();
      stepPreview(-1);
    });
  }
  if (previewNext) {
    previewNext.addEventListener("click", function (e) {
      e.stopPropagation();
      stepPreview(1);
    });
  }
  var previewClose = document.querySelector("[data-preview-close]");
  if (previewClose) {
    previewClose.addEventListener("click", function (e) {
      e.stopPropagation();
      closePreview();
    });
  }

  document.addEventListener("click", function (e) {
    var closeBtn = e.target.closest("[data-preview-close]");
    if (closeBtn) {
      e.preventDefault();
      closePreview();
      return;
    }
    var prevBtn = e.target.closest("[data-preview-prev]");
    if (prevBtn) {
      e.preventDefault();
      stepPreview(-1);
      return;
    }
    var nextBtn = e.target.closest("[data-preview-next]");
    if (nextBtn) {
      e.preventDefault();
      stepPreview(1);
      return;
    }
    if (preview && preview.open && e.target === preview) {
      closePreview();
      return;
    }
    var shotBtn = e.target.closest("[data-preview]");
    if (shotBtn && !(preview && preview.contains(shotBtn))) {
      e.preventDefault();
      openPreview(shotBtn);
      return;
    }

    var shareBtn = e.target.closest("[data-share]");
    if (shareBtn) {
      e.preventDefault();
      var shareIdle = idleOf(shareBtn, shareBtn.textContent);
      var payload = { title: document.title, url: location.href };
      if (typeof navigator.share === "function") {
        navigator.share(payload).catch(function () {
          copyText(shareBtn, location.href, shareIdle);
        });
      } else {
        copyText(shareBtn, location.href, shareIdle);
      }
      return;
    }
    var copyBtn = e.target.closest("[data-copy]");
    if (copyBtn) {
      e.preventDefault();
      var wrap = copyBtn.closest(".prompt-wrap");
      var pre = wrap && wrap.querySelector(".prompt-text");
      var val = pre ? pre.textContent : "";
      var copyIdle = idleOf(copyBtn, copyBtn.textContent);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(val).then(function () {
          flashChip(copyBtn, copyIdle);
        }).catch(function () {
          if (pre) {
            var range = document.createRange();
            range.selectNodeContents(pre);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
          }
        });
      }
    }
  });

  document.addEventListener("keydown", function (e) {
    if (!preview || !preview.open) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      stepPreview(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      stepPreview(1);
    } else if (e.key === "Escape") {
      closePreview();
    }
  });
})();
