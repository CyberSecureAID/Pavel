/**
 * PAVEL – scroll.js
 * ──────────────────────────────────────────────
 * Experiencia de scroll dinámica:
 *  1. Barra de progreso de lectura (fixed top).
 *  2. Reveal en cascada de las secciones al entrar
 *     en viewport (usa .reveal-section ya definida
 *     en hero.css, vía IntersectionObserver).
 *  3. Botón "volver arriba" en el footer.
 *  4. Año dinámico del copyright.
 * Complementa a hero.js (que ya gestiona header,
 * topbar y parallax) sin duplicar listeners.
 */

(function () {
  'use strict';

  // ── Referencias DOM ──────────────────────────
  const progressBar   = document.getElementById('scroll-progress');
  const backTopBtn     = document.getElementById('back-top');
  const yearEl          = document.getElementById('footer-year');
  const heroSection    = document.getElementById('inicio');
  const heroContent    = document.querySelector('.hero__content');
  const heroOverlay    = document.querySelector('.hero__overlay');
  const heroBgImg      = document.querySelector('.hero__bg-img');
  const revealTargets  = document.querySelectorAll(
    '.section-placeholder, .services, .site-footer'
  );

  // ── Año dinámico ─────────────────────────────
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Barra de progreso + transición cinematográfica de salida del hero ──
  let ticking = false;
  const heroH = heroSection ? heroSection.offsetHeight : 0;

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    const progress   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = progress.toFixed(2) + '%';
    }

    /* Transición notoria: al abandonar el hero, el fondo hace
       zoom-in, el overlay oscurece la escena y el contenido se
       desliza hacia arriba con blur creciente, como una salida
       de cámara (efecto perceptible incluso en scroll corto). */
    if (heroH > 0) {
      const exitProgress = Math.min(scrollTop / (heroH * 0.85), 1);

      if (heroContent) {
        heroContent.style.transform = `translateY(${exitProgress * -120}px) scale(${1 - exitProgress * 0.12})`;
        heroContent.style.opacity   = (1 - exitProgress).toFixed(3);
        heroContent.style.filter    = `blur(${(exitProgress * 6).toFixed(2)}px)`;
      }
      if (heroBgImg) {
        heroBgImg.style.transform = `scale(${1 + exitProgress * 0.18}) translateY(${scrollTop * 0.05}px)`;
      }
      if (heroOverlay) {
        heroOverlay.style.setProperty('--overlay-boost', (exitProgress * 0.6).toFixed(3));
      }
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });

  updateProgress();

  // ── Volver arriba ────────────────────────────
  if (backTopBtn) {
    backTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Reveal de secciones (clip-path + fade) ───
  if (revealTargets.length > 0) {
    revealTargets.forEach((el) => el.classList.add('reveal-section'));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));
  }

  // ── Respeta reduced-motion: sin transición, todo visible ──
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal-section').forEach((el) => {
      el.classList.add('revealed');
    });
  }

  // ── Animación de imágenes de sección (zoom-out + fade) ──────
  // Excluye .hero__bg-img (inicio) que ya tiene su propia animación.
  const sectionImgs = document.querySelectorAll(
    '.services__hero-img, .solutions__hero-img, .projects__hero-img, .about__hero-img, .contact__hero-img'
  );

  if (sectionImgs.length > 0) {
    sectionImgs.forEach((img) => img.classList.add('section-img-reveal'));

    const imgObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('img-visible');
            imgObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionImgs.forEach((img) => imgObserver.observe(img));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sectionImgs.forEach((img) => img.classList.add('img-visible'));
    }
  }

})();

// ── Filtros de Proyectos ─────────────────────
(function () {
  const filterBtns = document.querySelectorAll('.pf-btn');
  const cards      = document.querySelectorAll('.project-card[data-category]');
  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('pf-btn--active'));
      btn.classList.add('pf-btn--active');
      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('pf-hidden', !match);
      });
    });
  });
})();
