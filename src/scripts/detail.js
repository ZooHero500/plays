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

  document.addEventListener("click", function (e) {
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
})();
