/* ════════════════════════════════════════════════════════════════
   METALFLAKE CANVAS — 64 Impala Candy Paint
   Deep glossy surface. No individual flakes visible.
   Slow rolling shimmer — a wave of light sweeping across
   the surface like sunlight moving across wet paint.
   Areas brighten then fade back. Nothing moves.
   Subtle. Deep. Premium.
   ════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // Shimmer wave settings
  var WAVE_COUNT = 3;         // overlapping waves for organic feel
  var WAVE_SPEED_MIN = 0.015; // pixels per ms — slow crawl
  var WAVE_SPEED_MAX = 0.035;
  var WAVE_WIDTH_MIN = 200;   // px — how wide each bright band is
  var WAVE_WIDTH_MAX = 500;
  var BASE_ALPHA = 0.0;       // fully transparent at rest
  var PEAK_ALPHA = 0.08;      // subtle brightening at wave crest
  var GOLD = 'rgba(232, 201, 122, ';
  var TEAL_LIGHT = 'rgba(40, 120, 110, ';

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
    var w = 0;
    var h = 0;
    var running = false;
    var rafId = null;
    var lastTime = 0;
    var waves = [];

    function resize() {
      w = section.offsetWidth;
      h = section.offsetHeight;
      var dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initWaves();
    }

    function initWaves() {
      waves = [];
      for (var i = 0; i < WAVE_COUNT; i++) {
        waves.push({
          // Position along diagonal axis
          pos: Math.random() * (w + h),
          // Angle of wave travel (radians) — slight variation
          angle: -0.3 + Math.random() * 0.6,
          speed: WAVE_SPEED_MIN + Math.random() * (WAVE_SPEED_MAX - WAVE_SPEED_MIN),
          width: WAVE_WIDTH_MIN + Math.random() * (WAVE_WIDTH_MAX - WAVE_WIDTH_MIN),
          peak: PEAK_ALPHA * (0.6 + Math.random() * 0.4),
          // Gold or teal-tinted shimmer
          color: Math.random() < 0.85 ? GOLD : TEAL_LIGHT,
          // Total travel distance before reset
          travel: w + h + 600
        });
      }
    }

    function draw(now) {
      if (!lastTime) lastTime = now;
      var dt = now - lastTime;
      lastTime = now;
      if (dt > 100) dt = 16;

      ctx.clearRect(0, 0, w, h);

      for (var i = 0; i < waves.length; i++) {
        var wave = waves[i];

        // Advance wave position
        wave.pos += wave.speed * dt;

        // Reset when wave has fully crossed
        if (wave.pos > wave.travel) {
          wave.pos = -wave.width * 2;
          wave.angle = -0.3 + Math.random() * 0.6;
          wave.speed = WAVE_SPEED_MIN + Math.random() * (WAVE_SPEED_MAX - WAVE_SPEED_MIN);
          wave.width = WAVE_WIDTH_MIN + Math.random() * (WAVE_WIDTH_MAX - WAVE_WIDTH_MIN);
          wave.peak = PEAK_ALPHA * (0.6 + Math.random() * 0.4);
          wave.color = Math.random() < 0.85 ? GOLD : TEAL_LIGHT;
        }

        // Draw the wave as a gradient band
        var cos = Math.cos(wave.angle);
        var sin = Math.sin(wave.angle);

        // Wave center point projected onto canvas
        var cx = wave.pos * cos;
        var cy = wave.pos * sin;

        // Gradient perpendicular to wave direction
        var halfW = wave.width;
        var x0 = cx - cos * halfW;
        var y0 = cy - sin * halfW;
        var x1 = cx + cos * halfW;
        var y1 = cy + sin * halfW;

        var grad = ctx.createLinearGradient(x0, y0, x1, y1);
        grad.addColorStop(0, wave.color + '0)');
        grad.addColorStop(0.3, wave.color + wave.peak + ')');
        grad.addColorStop(0.5, wave.color + (wave.peak * 1.2) + ')');
        grad.addColorStop(0.7, wave.color + wave.peak + ')');
        grad.addColorStop(1, wave.color + '0)');

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
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
