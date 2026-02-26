(function () {
  "use strict";

  // ─── Roller rotation on scroll ───────────────────────────
  // Target the new wireframe rollers
  var rollers = document.querySelectorAll(".printer-roller-wire, .printer-roller");
  if (rollers.length) {
    var lastY = window.scrollY;
    var rot = 0;
    var ticking = false;

    window.addEventListener("scroll", function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var delta = window.scrollY - lastY;
          rot += delta * 0.5; // Slightly slower for technical feel
          for (var i = 0; i < rollers.length; i++) {
            rollers[i].style.transform = "rotate(" + rot + "deg)";
          }
          lastY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ─── Feed status LED blink ───────────────────────────────
  var led = document.getElementById("printer-led");
  if (led) {
    var scrollTimer = null;
    window.addEventListener("scroll", function () {
      led.classList.add("is-active");
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function () {
        led.classList.remove("is-active");
      }, 300);
    }, { passive: true });
  }
})();
