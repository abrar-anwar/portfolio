/**
 * Decorative "constellation" animation for the hero terminal window: a
 * handful of dots drift slowly and draw a line between any two that are
 * close enough, so the network keeps forming and dissolving.
 *
 * Scoped entirely to `.hero-network` canvases — see .terminal-window in
 * src/styles/components.css for how it's layered behind the terminal
 * chrome. Purely decorative (aria-hidden, pointer-events: none), so it
 * fails silently if canvas isn't supported.
 */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initCanvas(canvas) {
    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var width = 0;
    var height = 0;
    var particles = [];
    var accent = 'oklch(0.75 0.19 150)';
    var rafId = null;

    function readAccent() {
      var value = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      if (value) accent = value;
    }

    function seedParticles() {
      var count = Math.max(12, Math.min(36, Math.round((width * height) / 16000)));
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
        });
      }
    }

    function resize() {
      var rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedParticles();
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      if (!reduceMotion) {
        for (var i = 0; i < particles.length; i++) {
          var p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.x <= 0 || p.x >= width) p.vx *= -1;
          if (p.y <= 0 || p.y >= height) p.vy *= -1;
          p.x = Math.max(0, Math.min(width, p.x));
          p.y = Math.max(0, Math.min(height, p.y));
        }
      }

      var maxDist = Math.max(60, Math.min(width, height) / 4);
      ctx.lineWidth = 1;
      for (var a = 0; a < particles.length; a++) {
        for (var b = a + 1; b < particles.length; b++) {
          var dx = particles[a].x - particles[b].x;
          var dy = particles[a].y - particles[b].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.strokeStyle = accent;
            ctx.globalAlpha = (1 - dist / maxDist) * 0.138;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 0.4025;
      ctx.fillStyle = accent;
      for (var j = 0; j < particles.length; j++) {
        ctx.beginPath();
        ctx.arc(particles[j].x, particles[j].y, 1.3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function loop() {
      draw();
      if (!reduceMotion) {
        rafId = window.requestAnimationFrame(loop);
      }
    }

    function stop() {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    function start() {
      if (!reduceMotion && rafId === null) {
        loop();
      }
    }

    readAccent();
    resize();
    draw();
    start();

    window.addEventListener('resize', resize);

    new MutationObserver(readAccent).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') {
        stop();
      } else {
        start();
      }
    });
  }

  function init() {
    var canvases = document.querySelectorAll('.hero-network');
    for (var i = 0; i < canvases.length; i++) {
      initCanvas(canvases[i]);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
