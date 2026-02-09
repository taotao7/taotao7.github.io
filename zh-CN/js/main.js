(function () {
  "use strict";

  var preferredLangKey = "preferredLang";
  var pathname = window.location.pathname || "/";
  var preferredLang = null;
  try {
    preferredLang = window.localStorage.getItem(preferredLangKey);
  } catch (e) {
    preferredLang = null;
  }

  var langSwitch = document.getElementById("lang-switch");
  if (langSwitch) {
    var defaultLang = langSwitch.getAttribute("data-default-lang") || "en";
    var currentLang =
      langSwitch.getAttribute("data-current-lang") || defaultLang;
    var otherLang =
      langSwitch.getAttribute("data-other-lang") ||
      (currentLang === "zh-CN" ? "en" : "zh-CN");

    if (
      (pathname === "/" || pathname === "/index.html") &&
      preferredLang &&
      preferredLang !== defaultLang
    ) {
      window.location.replace("/" + preferredLang + "/");
      return;
    }

    langSwitch.addEventListener("click", function () {
      var nextLang = otherLang;
      try {
        window.localStorage.setItem(preferredLangKey, nextLang);
      } catch (e) {}

      var nextPath = pathname;
      var currentPrefix = "/" + currentLang + "/";
      if (nextPath.indexOf(currentPrefix) === 0) {
        nextPath = nextPath.slice(currentPrefix.length - 1);
      }

      if (nextLang !== defaultLang) {
        if (nextPath === "/") {
          nextPath = "/" + nextLang + "/";
        } else {
          nextPath = "/" + nextLang + nextPath;
        }
      }

      window.location.href = nextPath;
    });
  }

  // Mobile nav toggle
  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("is-open");
    });
  }

  // TOC toggle
  var tocToggle = document.getElementById("toc-toggle");
  var toc = document.getElementById("toc");
  if (tocToggle && toc) {
    tocToggle.addEventListener("click", function () {
      toc.classList.toggle("is-open");
    });
  }

  // Back to top
  var btn = document.createElement("button");
  btn.className = "back-to-top";
  var docLang =
    (document.documentElement &&
      document.documentElement.getAttribute("lang")) ||
    "en";
  btn.setAttribute(
    "aria-label",
    docLang.indexOf("zh") === 0 ? "返回顶部" : "Back to top",
  );
  btn.innerHTML = "&uarr;";
  document.body.appendChild(btn);

  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > 400) {
        btn.classList.add("is-visible");
      } else {
        btn.classList.remove("is-visible");
      }
    },
    { passive: true },
  );

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
