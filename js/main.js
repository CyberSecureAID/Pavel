/**
 * MAXCON — main.js
 * Canvas FX · Loader · Cursor · Nav · Reveal · Stats · Testimonials · Form
 */

'use strict';

/* ═══════════════════════════════════════════════════════════════
   UTILS
═══════════════════════════════════════════════════════════════ */
const qs  = s => document.querySelector(s);
const qsa = s => document.querySelectorAll(s);

/* ═══════════════════════════════════════════════════════════════
   LOADER CANVAS — animated grid lines
═══════════════════════════════════════════════════════════════ */
(function loaderCanvas() {
  const canvas = qs('#loaderCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let raf;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const lines = [];
  const count = 12;
  for (let i = 0; i < count; i++) {
    lines.push({
      x: Math.random() * canvas.width,
      speed: 0.3 + Math.random() * 0.6,
      opacity: 0.02 + Math.random() * 0.04
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lines.forEach(l => {
      ctx.strokeStyle = `rgba(200,168,75,${l.opacity})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(l.x, 0);
      ctx.lineTo(l.x, canvas.height);
      ctx.stroke();
      l.x += l.speed;
      if (l.x > canvas.width) l.x = 0;
    });
    raf = requestAnimationFrame(draw);
  }
  draw();

  window.addEventListener('loaderDone', () => cancelAnimationFrame(raf));
})();

/* ═══════════════════════════════════════════════════════════════
   LOADER
═══════════════════════════════════════════════════════════════ */
(function loader() {
  const el      = qs('#loader');
  const fill    = qs('#loaderFill');
  const pct     = qs('#loaderPercent');
  const lines   = qsa('.h-line');
  if (!el) return;

  let p = 0;
  const iv = setInterval(() => {
    p += Math.random() * 18 + 8;
    if (p >= 100) {
      p = 100;
      clearInterval(iv);
      setTimeout(() => {
        el.classList.add('done');
        window.dispatchEvent(new Event('loaderDone'));
        lines.forEach(l => l.classList.add('animate'));
        initReveal();
        initStats();
      }, 300);
    }
    fill.style.width  = p + '%';
    pct.textContent   = Math.floor(p) + '%';
  }, 60);
})();

/* ═══════════════════════════════════════════════════════════════
   HERO CANVAS — floating particles + grid
═══════════════════════════════════════════════════════════════ */
(function heroCanvas() {
  const canvas = qs('#heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Grid
  const GRID = 72;

  // Particles
  const particles = [];
  const PCOUNT = 60;
  for (let i = 0; i < PCOUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -0.2 - Math.random() * 0.4,
      r: 0.5 + Math.random() * 1.5,
      life: Math.random(),
      maxLife: 0.6 + Math.random() * 0.4
    });
  }

  let mouseX = -1000, mouseY = -1000;
  window.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  let time = 0;

  function drawGrid() {
    ctx.strokeStyle = 'rgba(200,168,75,0.03)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += GRID) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += GRID) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  }

  function drawParticles() {
    particles.forEach(p => {
      p.life += 0.003;
      if (p.life >= p.maxLife) {
        p.x = Math.random() * canvas.width;
        p.y = canvas.height + 10;
        p.life = 0;
        p.maxLife = 0.6 + Math.random() * 0.4;
        p.vx = (Math.random() - 0.5) * 0.3;
        p.vy = -0.2 - Math.random() * 0.4;
      }

      // Mouse attraction
      const dx = mouseX - p.x;
      const dy = mouseY - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        p.vx += dx / dist * 0.01;
        p.vy += dy / dist * 0.01;
      }

      p.vx *= 0.99;
      p.vy *= 0.99;
      p.x += p.vx;
      p.y += p.vy;

      const alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.5;
      ctx.fillStyle = `rgba(200,168,75,${alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function drawGlows() {
    // Central glow
    const gx = canvas.width * 0.65;
    const gy = canvas.height * 0.35;
    const gr = ctx.createRadialGradient(gx, gy, 0, gx, gy, canvas.width * 0.5);
    gr.addColorStop(0, 'rgba(200,168,75,0.04)');
    gr.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gr;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    drawGlows();
    drawParticles();
    time++;
    requestAnimationFrame(frame);
  }
  frame();
})();

/* ═══════════════════════════════════════════════════════════════
   ABOUT CANVAS — subtle diagonal lines
═══════════════════════════════════════════════════════════════ */
(function aboutCanvas() {
  const canvas = qs('#aboutCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  let offset = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(200,168,75,0.03)';
    ctx.lineWidth = 1;
    const spacing = 60;
    for (let i = -canvas.height; i < canvas.width + canvas.height; i += spacing) {
      ctx.beginPath();
      ctx.moveTo(i + offset, 0);
      ctx.lineTo(i + offset + canvas.height, canvas.height);
      ctx.stroke();
    }
    offset = (offset + 0.15) % spacing;
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ═══════════════════════════════════════════════════════════════
   CTA CANVAS — wave
═══════════════════════════════════════════════════════════════ */
(function ctaCanvas() {
  const canvas = qs('#ctaCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let w = 0; w < 3; w++) {
      ctx.strokeStyle = `rgba(200,168,75,${0.04 - w * 0.01})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 4) {
        const y = canvas.height / 2 +
          Math.sin((x / canvas.width) * 4 * Math.PI + t + w * 0.8) * (20 + w * 12) +
          Math.sin((x / canvas.width) * 2 * Math.PI + t * 0.7) * 10;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    t += 0.015;
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ═══════════════════════════════════════════════════════════════
   STATS CANVAS
═══════════════════════════════════════════════════════════════ */
(function statsCanvas() {
  const canvas = qs('#statsCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const dots = [];
  for (let i = 0; i < 40; i++) {
    dots.push({
      x: Math.random() * 1380,
      y: Math.random() * 400,
      r: Math.random() * 2,
      a: Math.random() * Math.PI * 2,
      speed: 0.003 + Math.random() * 0.005
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach(d => {
      d.a += d.speed;
      const x = d.x + Math.cos(d.a) * 20;
      const y = d.y + Math.sin(d.a) * 10;
      ctx.fillStyle = `rgba(200,168,75,0.15)`;
      ctx.beginPath();
      ctx.arc(x, y, d.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ═══════════════════════════════════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════════════════════════════════ */
(function cursor() {
  const dot  = qs('.cursor-dot');
  const ring = qs('.cursor-ring');
  if (!dot || !ring) return;

  let mx = -100, my = -100;
  let rx = -100, ry = -100;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  (function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  const hoverEls = qsa('a, button, .service-featured, .tn-btn, .pillar');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cur-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cur-hover'));
  });

  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
})();

/* ═══════════════════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════════════════ */
(function navbar() {
  const nav  = qs('#navbar');
  const ham  = qs('#hamburger');
  const menu = qs('#mobileMenu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  if (ham && menu) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      menu.classList.toggle('open');
    });
    qsa('.mm-link').forEach(l => {
      l.addEventListener('click', () => {
        ham.classList.remove('open');
        menu.classList.remove('open');
      });
    });
  }

  // Active link
  const sections  = qsa('section[id]');
  const navLinks  = qsa('.nav-link');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) cur = s.id;
    });
    navLinks.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === `#${cur}`);
    });
  }, { passive: true });
})();

/* ═══════════════════════════════════════════════════════════════
   REVEAL ON SCROLL
═══════════════════════════════════════════════════════════════ */
function initReveal() {
  const targets = qsa('.reveal, .reveal-left, .reveal-right');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(el => io.observe(el));
}

/* ═══════════════════════════════════════════════════════════════
   STATS COUNTER
═══════════════════════════════════════════════════════════════ */
function initStats() {
  const nums = qsa('.stat-num[data-target]');
  const io   = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el     = e.target;
      const target = +el.dataset.target;
      const dur    = 2200;
      const start  = performance.now();
      function tick(now) {
        const p  = Math.min((now - start) / dur, 1);
        const ep = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.floor(ep * target);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  nums.forEach(el => io.observe(el));
}

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════════════════════════════ */
(function testimonials() {
  const track  = qs('#testiTrack');
  const dots   = qs('#tDots');
  const prev   = qs('#tPrev');
  const next   = qs('#tNext');
  if (!track) return;

  const slides = Array.from(track.querySelectorAll('.testi-slide'));
  let cur = 0, timer;

  slides.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'tn-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => go(i));
    dots.appendChild(d);
  });

  function go(idx) {
    if (idx === cur) return;
    const old = cur;
    cur = (idx + slides.length) % slides.length;
    slides[old].classList.remove('active');
    slides[old].classList.add('exit');
    setTimeout(() => slides[old].classList.remove('exit'), 700);
    slides[cur].classList.add('active');
    dots.querySelectorAll('.tn-dot').forEach((d, i) => d.classList.toggle('active', i === cur));
  }

  function reset() {
    clearInterval(timer);
    timer = setInterval(() => go(cur + 1), 5500);
  }

  prev && prev.addEventListener('click', () => { go(cur - 1); reset(); });
  next && next.addEventListener('click', () => { go(cur + 1); reset(); });
  reset();
})();

/* ═══════════════════════════════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════════════════════════════ */
(function form() {
  const frm     = qs('#contactForm');
  const success = qs('#formSuccess');
  const btn     = qs('#submitBtn');
  const bText   = btn && btn.querySelector('.bs-text');
  const bLoad   = btn && btn.querySelector('.bs-loading');
  if (!frm) return;

  frm.addEventListener('submit', async e => {
    e.preventDefault();
    if (bText) bText.style.display = 'none';
    if (bLoad) bLoad.style.display = 'inline';
    btn.disabled = true;

    await new Promise(r => setTimeout(r, 1600));

    if (bText) bText.style.display = 'inline';
    if (bLoad) bLoad.style.display = 'none';
    btn.disabled = false;
    frm.reset();
    if (success) {
      success.style.display = 'block';
      setTimeout(() => { success.style.display = 'none'; }, 6000);
    }
  });
})();

/* ═══════════════════════════════════════════════════════════════
   SMOOTH SCROLL
═══════════════════════════════════════════════════════════════ */
qsa('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ═══════════════════════════════════════════════════════════════
   SERVICE CARD TILT
═══════════════════════════════════════════════════════════════ */
(function tilt() {
  if (window.matchMedia('(pointer:coarse)').matches) return;
  qsa('.service-featured').forEach(card => {
    card.addEventListener('mousemove', e => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width  - 0.5;
      const y = (e.clientY - top)  / height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg) translateZ(6px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
})();

/* ═══════════════════════════════════════════════════════════════
   PARALLAX HERO
═══════════════════════════════════════════════════════════════ */
(function parallax() {
  const hc = qs('#heroCanvas');
  if (!hc) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    hc.style.transform = `translateY(${y * 0.3}px)`;
  }, { passive: true });
})();
