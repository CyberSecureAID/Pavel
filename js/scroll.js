/**
 * MAXCON – scroll.js
 * ──────────────────────────────────────────────
 * Controla la transición de parallax + zoom de la
 * imagen hero al hacer scroll, usando requestAnimationFrame
 * para máxima suavidad (sin jank).
 */

(function () {
  'use strict';

  // ── Referencias DOM ──────────────────────────
  const heroImg    = document.getElementById('heroImg');
  const scrollHint = document.getElementById('scrollHint');
  const cards      = document.querySelectorAll('.service-card');
  const heroSection = document.getElementById('hero');

  // ── Estado ───────────────────────────────────
  let ticking = false;
  let lastScrollY = 0;

  // Zoom máximo de la imagen hero (1 = normal, 1.35 = 35% más grande)
  const ZOOM_MAX = 1.35;
  // Punto de scroll (px) en que la transición se completa
  const TRANSITION_END = window.innerHeight * 0.8;

  // ── Función principal ─────────────────────────
  function update() {
    const scrollY = window.scrollY;
    lastScrollY = scrollY;

    // Progreso: 0 (inicio) → 1 (transición completa)
    const progress = Math.min(scrollY / TRANSITION_END, 1);

    // 1. Zoom + fade de la imagen hero
    if (heroImg) {
      const scale   = 1 + (ZOOM_MAX - 1) * progress;        // 1.0 → 1.35
      const opacity = 1 - progress;                          // 1 → 0

      heroImg.style.transform = `scale(${scale.toFixed(4)})`;
      heroImg.style.opacity   = opacity.toFixed(4);
    }

    // 2. Ocultar indicador de scroll
    if (scrollHint) {
      if (scrollY > 40) {
        scrollHint.classList.add('hidden');
      } else {
        scrollHint.classList.remove('hidden');
      }
    }

    ticking = false;
  }

  // ── Scroll listener (throttle con rAF) ────────
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // Primer render
  update();

  // ── IntersectionObserver para tarjetas ────────
  // Las tarjetas aparecen con animación cuando entran en viewport
  if (cards.length > 0) {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            cardObserver.unobserve(entry.target); // solo una vez
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    cards.forEach((card) => cardObserver.observe(card));
  }

  // ── Resize: recalcular TRANSITION_END ─────────
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      update();
    }, 100);
  });

})();
