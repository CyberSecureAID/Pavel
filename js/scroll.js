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
      { threshold: 0.05, rootMargin: '0px 0px 0px 0px' }
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
      { threshold: 0, rootMargin: '50px 0px 0px 0px' }
    );

    sectionImgs.forEach((img) => imgObserver.observe(img));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sectionImgs.forEach((img) => img.classList.add('img-visible'));
    }
  }

})();

/* ================================================
   CHATBOT WIDGET — pegar al final de js/scroll.js
   NO modificar ningún código existente arriba.
================================================ */

(function () {
  'use strict';

  /* ────────────────────────────────────────────
     BASE DE CONOCIMIENTO — personalizar con datos
     reales del cliente cuando los provea.
     Cada entrada: { keys: [...palabras clave], answer: '...' }
     El motor busca coincidencia en la pregunta del usuario.
  ──────────────────────────────────────────── */
  var PV_KB = [
    {
      keys: ['servicio', 'servicios', 'ofrecen', 'hacen', 'trabajan', 'qué hacen'],
      answer: 'Ofrecemos cuatro servicios principales:\n\n• **Ingeniería Estructural** — diseño y cálculo con estándares internacionales\n• **Gestión de Proyectos** — planificación, cronogramas y supervisión integral\n• **Tecnología BIM** — modelado digital y monitoreo en tiempo real\n• **Garantía y Soporte** — acompañamiento postentrega y mantenimiento preventivo\n\n¿Le interesa conocer más sobre alguno en particular?'
    },
    {
      keys: ['propuesta', 'cotización', 'cotizar', 'presupuesto', 'solicitar', 'costo', 'precio', 'cuánto cuesta', 'cuanto cuesta'],
      answer: 'Para elaborar una propuesta técnica necesitamos conocer su proyecto. Le recomendamos:\n\n1. Completar el formulario en la sección **Contacto** de esta página\n2. O escribirnos directamente para agendar una consulta sin costo\n\n¿Prefiere que le contactemos nosotros?'
    },
    {
      keys: ['país', 'países', 'donde', 'dónde', 'cobertura', 'operan', 'presencia', 'internacional'],
      answer: 'Tenemos presencia activa en **+8 países de América Latina**, incluyendo Colombia, México, Perú, Chile, Argentina, Brasil, Ecuador y Panamá.\n\nCada proyecto cuenta con supervisión local y coordinación centralizada desde nuestra sede principal.'
    },
    {
      keys: ['tiempo', 'plazo', 'duración', 'cuánto tiempo', 'cuanto tiempo', 'demora', 'tarda'],
      answer: 'El plazo varía según el tipo y escala del proyecto:\n\n• **Consultoría y estudios:** 2 a 8 semanas\n• **Proyectos medianos (hasta 5.000 m²):** 6 a 12 meses\n• **Proyectos grandes (infraestructura, industrial):** 1 a 3 años\n\nSiempre entregamos un cronograma detallado en la propuesta técnica.'
    },
    {
      keys: ['bim', 'modelado', 'digital', 'tecnología', 'software'],
      answer: 'Utilizamos **Modelado BIM 360°** en todos nuestros proyectos de mediana y gran escala. Esto nos permite:\n\n• Detectar conflictos entre disciplinas antes de la obra\n• Reducir imprevistos y retrabajos en un 30-40%\n• Ofrecer seguimiento digital en tiempo real al cliente\n\nTambién integramos IoT y sistemas de automatización en proyectos de infraestructura inteligente.'
    },
    {
      keys: ['iso', 'certificación', 'leed', 'sostenible', 'sostenibilidad', 'certificado'],
      answer: 'Pavel cuenta con las siguientes certificaciones:\n\n• **ISO 14001** — Gestión ambiental\n• **ISO 9001** — Calidad\n• **LEED** — Construcción sostenible\n• **OHSAS 18001** — Seguridad y salud\n\nNuestros proyectos cumplen con los más altos estándares internacionales de calidad y sostenibilidad.'
    },
    {
      keys: ['contacto', 'contactar', 'teléfono', 'telefono', 'email', 'correo', 'escribir', 'llamar', 'asesor', 'humano', 'persona'],
      answer: 'Puede contactarnos a través de:\n\n• **Formulario** en la sección Contacto de esta página\n• **WhatsApp** → botón verde en la esquina inferior\n• **Email:** contacto@empresa.com *(dato pendiente de confirmar con el cliente)*\n\n¿Prefiere que un asesor se comunique con usted?'
    },
    {
      keys: ['proyecto', 'proyectos', 'portafolio', 'obras', 'trabajo', 'ejemplos', 'experiencia'],
      answer: 'Contamos con **+120 proyectos entregados** en más de 15 años de trayectoria, con una tasa de entrega a tiempo del **98%**.\n\nNuestro portafolio incluye edificaciones corporativas, infraestructura vial, plantas industriales y proyectos de construcción sostenible en toda Latinoamérica.\n\n¿Le gustaría conocer casos específicos de algún sector?'
    },
    {
      keys: ['garantía', 'garantia', 'soporte', 'postentrega', 'mantenimiento'],
      answer: 'Ofrecemos **acompañamiento postentrega** en todos nuestros proyectos:\n\n• Garantía estructural según normativa local\n• Mantenimiento preventivo programado\n• Soporte técnico ante imprevistos\n\nNuestro equipo permanece disponible incluso después de la entrega formal.'
    },
    {
      keys: ['nosotros', 'empresa', 'historia', 'quiénes', 'quienes', 'pavel'],
      answer: 'Pavel es una firma de ingeniería y tecnología constructiva con **+15 años de experiencia**.\n\nSomos un equipo multidisciplinario de ingenieros, arquitectos y especialistas BIM comprometidos con la excelencia técnica y la confianza de cada cliente.\n\nOperamos en +8 países y hemos completado más de 120 proyectos de diversa escala y complejidad.'
    }
  ];

  /* ── Respuesta por defecto si no hay coincidencia ── */
  var PV_FALLBACK = [
    'Entiendo su consulta. Para darle una respuesta precisa, le recomiendo hablar directamente con nuestro equipo técnico a través del formulario de contacto.',
    'Esa es una buena pregunta. Nuestros asesores pueden orientarle mejor sobre ese punto específico. ¿Le dejamos sus datos para que le contactemos?',
    'Para ese tipo de consulta es mejor que uno de nuestros ingenieros le oriente personalmente. Puede escribirnos en la sección de Contacto o por WhatsApp.'
  ];

  /* Mensaje de bienvenida */
  var PV_WELCOME = '¡Hola! 👋 Soy el asistente virtual de **Pavel**. Estoy aquí para responder sus preguntas sobre nuestros servicios de ingeniería y construcción.\n\n¿En qué puedo ayudarle hoy?';

  /* ── Referencias DOM ── */
  var fab       = document.getElementById('pvChatFab');
  var panel     = document.getElementById('pvChat');
  var closeBtn  = document.getElementById('pvChatClose');
  var messages  = document.getElementById('pvChatMessages');
  var input     = document.getElementById('pvChatInput');
  var sendBtn   = document.getElementById('pvChatSend');
  var quickArea = document.getElementById('pvChatQuick');
  var badge     = document.getElementById('pvChatBadge');

  if (!fab || !panel) return; // salida segura si el HTML no está

  var isOpen    = false;
  var welcomed  = false;
  var typingRow = null;

  /* ── Helpers de tiempo ── */
  function nowTime() {
    var d = new Date();
    var h = d.getHours().toString().padStart(2,'0');
    var m = d.getMinutes().toString().padStart(2,'0');
    return h + ':' + m;
  }

  /* ── Parsear mini-markdown: **negrita** y salto de línea ── */
  function parseMarkdown(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  /* ── Agregar mensaje al panel ── */
  function addMessage(text, role, animate) {
    var row = document.createElement('div');
    row.className = 'pv-row pv-row--' + role;

    var avatarSVG = role === 'bot'
      ? '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="3" y="8" width="18" height="12" rx="3"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>';

    row.innerHTML =
      '<div class="pv-av">' + avatarSVG + '</div>' +
      '<div class="pv-col">' +
        '<div class="pv-bubble' + (animate ? ' pv-bubble-anim' : '') + '">' + parseMarkdown(text) + '</div>' +
        '<div class="pv-ts">' + nowTime() + '</div>' +
      '</div>';

    messages.appendChild(row);
    scrollBottom();
    return row;
  }

  /* ── Indicador de escritura (typing dots) ── */
  function showTyping() {
    var row = document.createElement('div');
    row.className = 'pv-row pv-row--bot';
    row.innerHTML =
      '<div class="pv-av"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="3" y="8" width="18" height="12" rx="3"/></svg></div>' +
      '<div class="pv-col"><div class="pv-typing"><span></span><span></span><span></span></div></div>';
    messages.appendChild(row);
    scrollBottom();
    typingRow = row;
  }

  function hideTyping() {
    if (typingRow) { typingRow.remove(); typingRow = null; }
  }

  /* ── Scroll al fondo ── */
  function scrollBottom() {
    messages.scrollTop = messages.scrollHeight;
  }

  /* ── Motor de búsqueda en la KB ── */
  function findAnswer(q) {
    var lower = q.toLowerCase().trim();
    var best  = null;
    var score = 0;

    for (var i = 0; i < PV_KB.length; i++) {
      var entry = PV_KB[i];
      var hits  = 0;
      for (var j = 0; j < entry.keys.length; j++) {
        if (lower.indexOf(entry.keys[j].toLowerCase()) !== -1) hits++;
      }
      if (hits > score) { score = hits; best = entry; }
    }

    if (best && score > 0) return best.answer;
    return PV_FALLBACK[Math.floor(Math.random() * PV_FALLBACK.length)];
  }

  /* ── Efecto typewriter para el bot ── */
  function typewriterInsert(bubbleEl, text, speed) {
    var parsed = parseMarkdown(text);
    var chars  = parsed.split('');
    var idx    = 0;
    bubbleEl.innerHTML = '';

    /* Velocidad variable: rápido al principio, pausa en puntuación */
    function step() {
      if (idx >= chars.length) { scrollBottom(); return; }

      /* Si es un tag HTML, insertar de golpe el tag completo */
      if (chars[idx] === '<') {
        var tagEnd = parsed.indexOf('>', idx);
        if (tagEnd !== -1) {
          bubbleEl.innerHTML += parsed.slice(idx, tagEnd + 1);
          idx = tagEnd + 1;
          scrollBottom();
          setTimeout(step, 1);
          return;
        }
      }

      bubbleEl.innerHTML += chars[idx];
      idx++;
      scrollBottom();

      var delay = speed;
      var ch = chars[idx - 1];
      if (ch === '.' || ch === '!' || ch === '?') delay = speed * 6;
      else if (ch === ',' || ch === ':') delay = speed * 3;
      else if (ch === ' ') delay = speed * 0.5;

      setTimeout(step, delay);
    }
    step();
  }

  /* ── Responder con delay + typewriter ── */
  function botReply(text) {
    var totalLen  = text.length;
    /* Delay humano: entre 800ms y 2200ms según longitud del texto */
    var readDelay = Math.min(800 + totalLen * 8, 2200);
    var typeSpeed = Math.max(12, Math.min(28, 2000 / totalLen)); /* ms/char */

    showTyping();

    setTimeout(function () {
      hideTyping();

      var row = document.createElement('div');
      row.className = 'pv-row pv-row--bot';
      var avatarSVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="3" y="8" width="18" height="12" rx="3"/></svg>';
      row.innerHTML =
        '<div class="pv-av">' + avatarSVG + '</div>' +
        '<div class="pv-col">' +
          '<div class="pv-bubble pv-bubble-anim"></div>' +
          '<div class="pv-ts">' + nowTime() + '</div>' +
        '</div>';
      messages.appendChild(row);
      scrollBottom();

      var bubble = row.querySelector('.pv-bubble');
      typewriterInsert(bubble, text, typeSpeed);

    }, readDelay);
  }

  /* ── Enviar mensaje del usuario ── */
  function sendMessage(text) {
    text = text.trim();
    if (!text) return;

    addMessage(text, 'user', true);
    input.value = '';
    resizeInput();

    /* Ocultar quick replies tras el primer mensaje */
    if (quickArea) quickArea.style.display = 'none';

    var answer = findAnswer(text);
    botReply(answer);
  }

  /* ── Auto-resize del textarea ── */
  function resizeInput() {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 100) + 'px';
  }

  /* ── Abrir / cerrar panel ── */
  function openChat() {
    isOpen = true;
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    fab.classList.add('is-open');
    fab.setAttribute('aria-expanded', 'true');
    hideBadge();

    /* Spacer para empujar mensajes al fondo */
    if (!messages.querySelector('.pv-chat__spacer')) {
      var sp = document.createElement('div');
      sp.className = 'pv-chat__spacer';
      messages.insertBefore(sp, messages.firstChild);
    }

    /* Bienvenida solo la primera vez */
    if (!welcomed) {
      welcomed = true;
      setTimeout(function () {
        botReply(PV_WELCOME);
      }, 350);
    }

    setTimeout(function () { input.focus(); }, 300);
  }

  function closeChat() {
    isOpen = false;
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    fab.classList.remove('is-open');
    fab.setAttribute('aria-expanded', 'false');
  }

  function hideBadge() {
    if (badge) badge.classList.add('hidden');
  }

  /* ── Badge aparece tras 3s de inactividad en la página ── */
  setTimeout(function () {
    if (!isOpen && badge) badge.classList.remove('hidden');
  }, 3000);

  /* ── Event listeners ── */
  fab.addEventListener('click', function () {
    isOpen ? closeChat() : openChat();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeChat);

  sendBtn.addEventListener('click', function () {
    sendMessage(input.value);
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input.value);
    }
  });

  input.addEventListener('input', resizeInput);

  /* Quick reply buttons */
  if (quickArea) {
    quickArea.addEventListener('click', function (e) {
      var btn = e.target.closest('.pv-chat__qr');
      if (!btn) return;
      sendMessage(btn.getAttribute('data-q'));
    });
  }

  /* Cerrar con ESC */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) closeChat();
  });

})();
/* ================================================
   FIN CHATBOT WIDGET
================================================ */

