/* ════════════════════════════════════════════════════════════════
   METALFLAKE CANVAS — 64 Impala Candy Paint
   Diamonds embedded in glass. You look INTO the paint.
   Deep solid color with tiny flat mirror chips inside.
   Nothing moves. Individual flakes randomly flash bright
   then go dark — like sunlight hitting a parked car as
   you walk past it. Fast flash, then back to dark.
   88% gold #E8C97A, 12% teal #1A5C55
   ════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var GOLD = [232, 201, 122];
  var TEAL = [26, 92, 85];
  var DENSITY = 1800;       // px² per cluster — tight coverage
  var MIN_PER_CLUSTER = 2;
  var MAX_PER_CLUSTER = 6;
  var FLAKE_MIN = 1.0;      // tiny mirror chips
  var FLAKE_MAX = 2.8;
  var CLUSTER_SPREAD = 16;

  // Flash timing
  var FLASH_CHANCE = 0.003;  // probability per flake per frame to start flashing
  var FLASH_IN = 80;         // ms to reach peak brightness
  var FLASH_HOLD = 40;       // ms at peak
  var FLASH_OUT = 300;       // ms to fade back to dark

  function initMetalflake() {
    var sections = document.querySelectorAll('.metalflake');
    for (var i = 0; i < sections.length; i++) {
      setupCanvas(sections[i]);
    }
  }

  function setupCanvas(section) {
    var canvas = document.createElement('canvas');
    canvas.className = 'metalflake-canvas';
    section.insertBefore(canvas, section.firstChild);

    var ctx = canvas.getContext('2d');
    var flakes = [];
    var w = 0;
    var h = 0;
    var running = false;
    var rafId = null;
    var lastTime = 0;

    function resize() {
      w = section.offsetWidth;
      h = section.offsetHeight;
      var dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      generateFlakes();
    }

    function generateFlakes() {
      flakes = [];
      var area = w * h;
      var clusterCount = Math.max(4, Math.round(area / DENSITY));

      for (var c = 0; c < clusterCount; c++) {
        var cx = Math.random() * w;
        var cy = Math.random() * h;
        var count = MIN_PER_CLUSTER + Math.floor(Math.random() * (MAX_PER_CLUSTER - MIN_PER_CLUSTER + 1));

        for (var f = 0; f < count; f++) {
          var isGold = Math.random() < 0.88;
          var rgb = isGold ? GOLD : TEAL;
          var rx = FLAKE_MIN + Math.random() * (FLAKE_MAX - FLAKE_MIN);
          var ry = rx * (0.25 + Math.random() * 0.2); // very flat ellipse

          flakes.push({
            x: cx + (Math.random() - 0.5) * CLUSTER_SPREAD * 2,
            y: cy + (Math.random() - 0.5) * CLUSTER_SPREAD * 2,
            rx: rx,
            ry: ry,
            rotation: Math.random() * Math.PI * 2,
            r: rgb[0],
            g: rgb[1],
            b: rgb[2],
            // Rest state: almost invisible, embedded deep in paint
            restAlpha: 0.04 + Math.random() * 0.06,
            // Flash state
            flashTime: -1,  // -1 = not flashing
            flashPeak: 0.5 + Math.random() * 0.5  // how bright this flake can get
          });
        }
      }
    }

    function draw(now) {
      if (!lastTime) lastTime = now;
      var dt = now - lastTime;
      lastTime = now;
      if (dt > 100) dt = 16; // cap after tab switch

      ctx.clearRect(0, 0, w, h);

      for (var i = 0; i < flakes.length; i++) {
        var fl = flakes[i];

        // Randomly trigger a flash
        if (fl.flashTime < 0 && Math.random() < FLASH_CHANCE) {
          fl.flashTime = 0;
        }

        // Calculate alpha
        var alpha = fl.restAlpha;

        if (fl.flashTime >= 0) {
          fl.flashTime += dt;
          var t = fl.flashTime;

          if (t < FLASH_IN) {
            // Ramp up — fast
            var p = t / FLASH_IN;
            alpha = fl.restAlpha + (fl.flashPeak - fl.restAlpha) * p * p;
          } else if (t < FLASH_IN + FLASH_HOLD) {
            // Hold at peak
            alpha = fl.flashPeak;
          } else if (t < FLASH_IN + FLASH_HOLD + FLASH_OUT) {
            // Fade out — slower
            var p = (t - FLASH_IN - FLASH_HOLD) / FLASH_OUT;
            alpha = fl.flashPeak - (fl.flashPeak - fl.restAlpha) * p;
          } else {
            // Done
            fl.flashTime = -1;
            alpha = fl.restAlpha;
          }
        }

        ctx.save();
        ctx.translate(fl.x, fl.y);
        ctx.rotate(fl.rotation);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = 'rgb(' + fl.r + ',' + fl.g + ',' + fl.b + ')';
        ctx.beginPath();
        ctx.ellipse(0, 0, fl.rx, fl.ry, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      if (running) {
        rafId = requestAnimationFrame(draw);
      }
    }

    var observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        if (!running) {
          running = true;
          lastTime = 0;
          rafId = requestAnimationFrame(draw);
        }
      } else {
        running = false;
        if (rafId) cancelAnimationFrame(rafId);
      }
    }, { threshold: 0 });

    observer.observe(section);

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    });

    resize();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMetalflake);
  } else {
    initMetalflake();
  }
})();
