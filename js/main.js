/**
 * MAXCON — main.js
 * Loader · Custom Cursor · Navbar · Particles · Reveal on Scroll
 * Stats Counter · Testimonial Slider · Contact Form · Smooth Scroll
 */

/* ── LOADER ─────────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');

  // Animate loader letters
  const loaderText = loader.querySelector('.loader-text');
  if (loaderText) {
    const text = loaderText.textContent;
    loaderText.innerHTML = '';
    text.split('').forEach((char, i) => {
      const s = document.createElement('span');
      s.textContent = char;
      s.style.animationDelay = `${0.06 * i}s`;
      loaderText.appendChild(s);
    });
  }

  // Hide loader after 1.8s
  setTimeout(() => {
    loader.classList.add('done');
    document.body.classList.add('loaded');
    initReveal();
    initStatsCounter();
  }, 1800);
});

/* ── CUSTOM CURSOR ──────────────────────────────────────────── */
const cursor         = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');

if (cursor && cursorFollower) {
  let mx = -100, my = -100;
  let fx = -100, fy = -100;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  (function animateFollower() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    cursorFollower.style.left = fx + 'px';
    cursorFollower.style.top  = fy + 'px';
    requestAnimationFrame(animateFollower);
  })();

  document.querySelectorAll('a, button, .service-card, .t-btn, .t-dot, .social-link').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorFollower.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorFollower.style.opacity = '1';
  });
}

/* ── NAVBAR ─────────────────────────────────────────────────── */
const navbar     = document.getElementById('navbar');
const hamburger  = document.getElementById('hamburger');
const navLinks   = document.getElementById('nav-links');

// Scroll state
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// Mobile menu
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// Active nav link on scroll
const sections   = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
  });
  navLinkEls.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

/* ── PARTICLES ──────────────────────────────────────────────── */
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const count = 28;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${40 + Math.random() * 50}%;
      --dur:   ${6 + Math.random() * 10}s;
      --delay: ${-Math.random() * 12}s;
      width:   ${1 + Math.random() * 2}px;
      height:  ${1 + Math.random() * 2}px;
      opacity: ${0.2 + Math.random() * 0.5};
    `;
    container.appendChild(p);
  }
}
initParticles();

/* ── REVEAL ON SCROLL (IntersectionObserver) ────────────────── */
function initReveal() {
  const targets = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-card');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => io.observe(el));
}

/* ── STATS COUNTER ──────────────────────────────────────────── */
function initStatsCounter() {
  const statNums = document.querySelectorAll('.stat-num[data-target]');
  if (!statNums.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const dur    = 2000;
      const start  = performance.now();

      function tick(now) {
        const pct  = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - pct, 3); // ease-out cubic
        el.textContent = Math.floor(ease * target);
        if (pct < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }

      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => io.observe(el));
}

/* ── TESTIMONIAL SLIDER ─────────────────────────────────────── */
(function () {
  const track  = document.getElementById('testimonialsTrack');
  const dotWrap = document.getElementById('tDots');
  const prevBtn = document.getElementById('tPrev');
  const nextBtn = document.getElementById('tNext');
  if (!track) return;

  const slides = Array.from(track.querySelectorAll('.testimonial-slide'));
  let current  = 0;
  let autoTimer;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 't-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotWrap.appendChild(dot);
  });

  function goTo(idx) {
    if (idx === current) return;
    const prev = current;
    current = (idx + slides.length) % slides.length;

    slides[prev].classList.remove('active');
    slides[prev].classList.add('exit');
    setTimeout(() => slides[prev].classList.remove('exit'), 700);

    slides[current].classList.add('active');

    dotWrap.querySelectorAll('.t-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  prevBtn && prevBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  nextBtn && nextBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  }

  resetAuto();
})();

/* ── CONTACT FORM ───────────────────────────────────────────── */
(function () {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = form.querySelector('[type="submit"]');
    btn.classList.add('loading');

    // Simulate async send (replace with your API call / FormSubmit / EmailJS etc.)
    await new Promise(r => setTimeout(r, 1600));

    btn.classList.remove('loading');
    form.reset();
    if (success) {
      success.style.display = 'block';
      setTimeout(() => { success.style.display = 'none'; }, 6000);
    }
  });
})();

/* ── SMOOTH SCROLL (anchor links) ──────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── PARALLAX: hero grid subtle shift ───────────────────────── */
(function () {
  const heroGrid = document.querySelector('.hero-grid');
  if (!heroGrid) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroGrid.style.transform = `translateY(${y * 0.25}px)`;
  }, { passive: true });
})();

/* ── TILT on service cards (desktop only) ───────────────────── */
(function () {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('.service-card:not(.service-card--cta)').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x  = (e.clientX - rect.left) / rect.width  - 0.5;
      const y  = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateZ(4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();
