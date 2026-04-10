/* ════════════════════════════════════════════════════════════════
   METALFLAKE CANVAS — 64 Impala Candy Paint
   Flakes are EMBEDDED in the paint. Not floating. Not confetti.
   They live inside the background color and only flash when
   light catches them — like real metalflake in a candy base coat.
   Flat metal chips. Cos² light catch. Micro-rotation only.
   ════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Color Palettes ──
  var GOLD = [
    [232, 201, 122],  // #E8C97A — matches logo gold
    [215, 168, 18],
    [200, 152, 8],
    [248, 200, 38],
    [225, 172, 22],
    [205, 142, 12]
  ];
  var TEAL = [
    [42, 198, 140],
    [28, 175, 118]
  ];

  // ── Flake generation helpers ──

  function pickColor() {
    if (Math.random() < 0.88) {
      return GOLD[Math.floor(Math.random() * GOLD.length)];
    }
    return TEAL[Math.floor(Math.random() * TEAL.length)];
  }

  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  function createFlake(cx, cy, isShowcase) {
    var rx, ry, baseOpacity;
    if (isShowcase) {
      rx = rand(2.5, 6.5);
      ry = rand(0.15, 0.9);
      baseOpacity = rand(0.22, 0.82);
    } else {
      rx = rand(1.8, 4.5);
      ry = rand(0.08, 0.5);
      baseOpacity = rand(0.12, 0.55);
    }
    return {
      x: cx,
      y: cy,
      rx: rx,
      ry: ry,
      angle: Math.random() * Math.PI * 2,
      baseOpacity: baseOpacity,
      color: pickColor()
    };
  }

  function generateFlakes(w, h) {
    var flakes = [];
    var clusterCount = Math.floor((w * h) / 2000);
    var showcaseCount = Math.floor((w * h) / 5000);
    var i, j, clusterSize, cx, cy, fx, fy;

    // Clustered flakes
    for (i = 0; i < clusterCount; i++) {
      cx = Math.random() * w;
      cy = Math.random() * h;
      clusterSize = Math.floor(rand(2, 7)); // 2–6 flakes per cluster
      for (j = 0; j < clusterSize; j++) {
        fx = cx + rand(-15, 15);
        fy = cy + rand(-15, 15);
        flakes.push(createFlake(fx, fy, false));
      }
    }

    // Showcase flakes — larger, scattered
    for (i = 0; i < showcaseCount; i++) {
      fx = Math.random() * w;
      fy = Math.random() * h;
      flakes.push(createFlake(fx, fy, true));
    }

    return flakes;
  }

  // ── Canvas setup & animation ──

  function init() {
    var canvas = document.createElement('canvas');
    canvas.style.mixBlendMode = 'screen';
    canvas.style.position = 'fixed';
    canvas.style.inset = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '2';
    document.body.appendChild(canvas);

    var ctx = canvas.getContext('2d');
    var w = 0;
    var h = 0;
    var dpr = 1;
    var flakes = [];
    var rafId = null;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      flakes = generateFlakes(w, h);
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      for (var i = 0; i < flakes.length; i++) {
        var f = flakes[i];

        // Micro-rotation — stationary, only angle drifts
        f.angle += (Math.random() - 0.5) * 0.002;

        // Cos² light catch — bright face-on, vanishes edge-on
        var lightCatch = Math.pow(Math.abs(Math.cos(f.angle * 2)), 1.8) * 0.88 + 0.12;
        var alpha = f.baseOpacity * lightCatch;

        // Draw rotated ellipse (flat metal chip)
        ctx.save();
        ctx.translate(f.x, f.y);
        ctx.rotate(f.angle);
        ctx.beginPath();
        ctx.ellipse(0, 0, f.rx, f.ry, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + f.color[0] + ',' + f.color[1] + ',' + f.color[2] + ',' + alpha + ')';
        ctx.fill();
        ctx.restore();
      }

      rafId = requestAnimationFrame(draw);
    }

    // Debounced resize
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    });

    resize();
    rafId = requestAnimationFrame(draw);
  }

  // ── Boot ──
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
