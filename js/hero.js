/* ===============================================
   PAVEL — hero.js
   Nav scroll behavior · Hamburger · Parallax
   Partículas canvas · Contadores animados
   Reutiliza AOS ya cargado en el HTML.
=============================================== */

(function () {
  'use strict';

  /* ---- Init AOS ---- */
  AOS.init({
    duration: 750,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
  });

  /* ---- Referencias DOM ---- */
  const topbar    = document.getElementById('topbar');
  const header    = document.getElementById('site-header');
  const hamburger = document.getElementById('hamburger');
  const nav       = document.getElementById('main-nav');
  const bgImg     = document.querySelector('.hero__bg-img');
  const canvas    = document.getElementById('hero-particles');
  const navLinks  = document.querySelectorAll('.nav-link');
  const sections  = document.querySelectorAll('section[id]');

  let lastScroll  = 0;
  let ticking     = false;
  let headerH     = header ? header.offsetHeight : 72;
  const serviciosSec = document.getElementById('servicios');
  const headerTrigger = document.getElementById('header-trigger');
  let headerForceHidden = false; /* true una vez se cruza la sección Servicios */

  /* ---- Fade-in de la imagen de fondo al cargar ---- */
  if (bgImg) {
    const heroBg = bgImg.closest('.hero__bg');
    const clearPlaceholder = () => {
      bgImg.classList.add('loaded');
      if (heroBg) heroBg.style.backgroundImage = 'none';
    };
    if (bgImg.complete) {
      clearPlaceholder();
    } else {
      bgImg.addEventListener('load', clearPlaceholder, { once: true });
    }
  }

  /* ================================================
     SCROLL — header sticky + topbar hide + parallax
  ================================================ */
  function onScroll() {
    const sy = window.scrollY;

    /* Header scrolled class */
    if (header) {
      header.classList.toggle('scrolled', sy > 40);
    }

    /* Header se oculta por completo al entrar a la sección Servicios.
       Vuelve a su comportamiento normal si el usuario sube antes de llegar ahí. */
    if (header && serviciosSec) {
      const enteredServicios = sy >= serviciosSec.offsetTop - headerH;
      headerForceHidden = enteredServicios;

      /* Si estaba revelado por clic y el usuario sigue bajando, retoma el auto-hide */
      if (header.classList.contains('header--revealed') && sy > lastScroll) {
        header.classList.remove('header--revealed');
      }
      if (!header.classList.contains('header--revealed')) {
        header.classList.toggle('header--hidden', headerForceHidden);
      }
      if (headerTrigger) {
        headerTrigger.style.pointerEvents = headerForceHidden ? 'auto' : 'none';
      }
    }

    /* Topbar oculta al bajar, reaparece al subir */
    if (topbar) {
      if (sy > lastScroll && sy > 80) {
        topbar.classList.add('hidden');
      } else {
        topbar.classList.remove('hidden');
      }
    }

    /* Parallax + zoom de la imagen de fondo: controlado por scroll.js
       (incluye el efecto de zoom-out cinematográfico al salir del hero) */

    /* Active nav link por sección visible */
    let current = '';
    sections.forEach((sec) => {
      if (sy >= sec.offsetTop - headerH - 10) current = sec.id;
    });
    navLinks.forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });

    lastScroll = sy;
    ticking    = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  /* ================================================
     HEADER OCULTO — clic en la franja superior invisible
     revela el header completo (sin estado intermedio).
  ================================================ */
  if (header && headerTrigger) {
    headerTrigger.addEventListener('click', () => {
      if (headerForceHidden) {
        header.classList.remove('header--hidden');
        header.classList.add('header--revealed');
      }
    });
  }

  /* ================================================
     HAMBURGER MENU
  ================================================ */
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Cierra al hacer clic en un enlace */
    nav.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    /* Cierra al clic fuera del drawer */
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('open') &&
          !nav.contains(e.target) &&
          !hamburger.contains(e.target)) {
        nav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ================================================
     CANVAS PARTÍCULAS — cubre toda la página
  ================================================ */
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();

  /* Respeta reduced-motion */
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) return;

  /* Número de partículas según ancho */
  const COUNT = window.innerWidth < 768 ? 28 : 55;

  function rand(a, b) { return a + Math.random() * (b - a); }

  function createParticle() {
    return {
      x:     rand(0, W),
      y:     rand(0, H),
      r:     rand(0.6, 2.2),
      vx:    rand(-0.18, 0.18),
      vy:    rand(-0.22, -0.06),
      alpha: rand(0.15, 0.55),
    };
  }

  for (let i = 0; i < COUNT; i++) particles.push(createParticle());

  /* Paleta: blanco + acento cian */
  const COLORS = ['rgba(255,255,255,{a})', 'rgba(15,163,224,{a})'];

  function draw() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach((p, i) => {
      const color = COLORS[i % 2].replace('{a}', p.alpha);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;

      /* Rebote suave */
      if (p.y < -10) { p.y = H + 10; p.x = rand(0, W); }
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
    });

    /* Líneas de conexión entre partículas cercanas */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(26,110,187,${(1 - dist / 90) * 0.18})`;
          ctx.lineWidth   = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  draw();

})();
