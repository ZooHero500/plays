(function () {
  "use strict";
  var chips = document.getElementById("chips");
  var search = document.getElementById("search");
  var feed = document.getElementById("feed");
  if (!feed) return;

  var cat = "All";
  var q = "";

  function apply() {
    var cards = feed.querySelectorAll(".discover-card");
    var needle = q.trim().toLowerCase();
    cards.forEach(function (el) {
      var okCat = cat === "All" || el.getAttribute("data-category") === cat;
      var hay = [
        el.getAttribute("data-title") || "",
        el.getAttribute("data-author") || "",
        el.getAttribute("data-excerpt") || "",
        el.getAttribute("data-handle") || "",
      ]
        .join(" ")
        .toLowerCase();
      var okQ = !needle || hay.indexOf(needle) !== -1;
      el.hidden = !(okCat && okQ);
    });
  }

  if (chips) {
    chips.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-cat]");
      if (!btn) return;
      cat = btn.getAttribute("data-cat") || "All";
      chips.querySelectorAll("button").forEach(function (b) {
        b.classList.toggle("is-on", b === btn);
      });
      apply();
    });
  }

  if (search) {
    search.addEventListener("input", function () {
      q = search.value || "";
      apply();
    });
  }
})();
