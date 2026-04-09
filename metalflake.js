/* ════════════════════════════════════════════════════════════════
   METALFLAKE CANVAS ANIMATION
   64 Impala Candy Paint — animated ellipse chip clusters
   88% gold #E8C97A, 12% teal #1A5C55
   Clusters of 2-6 flakes, ~1 cluster per 2000px²
   cos² light-catch rotation, blend-mode: screen
   ════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var GOLD = [232, 201, 122];
  var TEAL = [26, 92, 85];
  var DENSITY = 2000; // px² per cluster
  var MIN_PER_CLUSTER = 2;
  var MAX_PER_CLUSTER = 6;
  var FLAKE_MIN = 1.5;
  var FLAKE_MAX = 3.5;
  var ROTATE_SPEED = 0.0004; // radians per ms
  var CLUSTER_SPREAD = 18; // px radius

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

    function resize() {
      w = section.offsetWidth;
      h = section.offsetHeight;
      canvas.width = w * (window.devicePixelRatio || 1);
      canvas.height = h * (window.devicePixelRatio || 1);
      ctx.setTransform((window.devicePixelRatio || 1), 0, 0, (window.devicePixelRatio || 1), 0, 0);
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
          var ry = rx * (0.3 + Math.random() * 0.25); // flat ellipse

          flakes.push({
            x: cx + (Math.random() - 0.5) * CLUSTER_SPREAD * 2,
            y: cy + (Math.random() - 0.5) * CLUSTER_SPREAD * 2,
            rx: rx,
            ry: ry,
            angle: Math.random() * Math.PI * 2,
            speed: ROTATE_SPEED * (0.6 + Math.random() * 0.8),
            phase: Math.random() * Math.PI * 2,
            r: rgb[0],
            g: rgb[1],
            b: rgb[2],
            baseAlpha: 0.35 + Math.random() * 0.35
          });
        }
      }
    }

    function draw(now) {
      ctx.clearRect(0, 0, w, h);

      for (var i = 0; i < flakes.length; i++) {
        var fl = flakes[i];
        fl.angle += fl.speed * 16; // ~16ms per frame

        // cos² light-catch: flake flashes bright when face-on
        var lightCatch = Math.cos(fl.angle + fl.phase);
        lightCatch = lightCatch * lightCatch; // cos²
        var alpha = fl.baseAlpha * (0.3 + 0.7 * lightCatch);

        ctx.save();
        ctx.translate(fl.x, fl.y);
        ctx.rotate(fl.angle * 0.3);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = 'rgb(' + fl.r + ',' + fl.g + ',' + fl.b + ')';
        ctx.beginPath();
        ctx.ellipse(0, 0, fl.rx, fl.ry * (0.4 + 0.6 * Math.abs(Math.cos(fl.angle))), 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      if (running) {
        rafId = requestAnimationFrame(draw);
      }
    }

    // Intersection observer: only animate when visible
    var observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        if (!running) {
          running = true;
          rafId = requestAnimationFrame(draw);
        }
      } else {
        running = false;
        if (rafId) cancelAnimationFrame(rafId);
      }
    }, { threshold: 0 });

    observer.observe(section);

    // Debounced resize
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
