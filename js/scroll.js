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
     BASE DE CONOCIMIENTO
     A partir de esta versión, los datos del chatbot
     (preguntas/respuestas, mensajes de fallback,
     bienvenida y contacto) viven en un archivo aparte:
     js/pavel-chatbot-data.js → window.PV_CHATBOT_DATA

     Esto permite enriquecer la base de conocimiento
     SIN tocar este archivo. Para editar el contenido,
     vaya a js/pavel-chatbot-data.js.

     Red de seguridad: si por cualquier motivo ese
     archivo no llegó a cargar (orden de scripts,
     caché, etc.), se usa este set mínimo de respaldo
     para que el chat jamás se quede roto o sin datos.
  ──────────────────────────────────────────── */
  var PV_DATA_FALLBACK = {
    kb: [
      {
        keys: ['contacto', 'contactar', 'teléfono', 'telefono', 'asesor', 'humano', 'llamar'],
        answer: 'Puede contactarnos a través del formulario en la sección Contacto de esta página, o directamente por teléfono.'
      }
    ],
    fallback: [
      'No tengo esa información en este momento, pero nuestro equipo puede ayudarle directamente:',
      'Para responderle con precisión sobre ese tema, lo mejor es hablar con uno de nuestros especialistas:'
    ],
    welcome: '¡Hola! 👋 Soy el asistente virtual de Pavel. ¿En qué puedo ayudarle hoy?',
    modeIntros: {
      empresa: 'Volvemos a hablar sobre la empresa.',
      general: 'Modo conversación general activado. Pregúnteme lo que quiera.'
    },
    contact: {
      name: 'Equipo Pavel',
      phoneDisplay: '+57 300 123 4567',
      phoneHref: '+573001234567'
    }
  };

  function getData() {
    if (window.PV_CHATBOT_DATA && window.PV_CHATBOT_DATA.kb) {
      return window.PV_CHATBOT_DATA;
    }
    /* eslint-disable no-console */
    if (window.console && console.warn) {
      console.warn('[Pavel Chatbot] No se encontró pavel-chatbot-data.js — usando datos mínimos de respaldo. Verifique que el script esté incluido ANTES de scroll.js en index.html.');
    }
    return PV_DATA_FALLBACK;
  }

  /* ── Resuelve un valor que puede ser string o array de strings.
     Si es array, elige uno al azar. Si es string, lo devuelve tal cual. ── */
  function pickRandom(val) {
    if (!val) return '';
    if (Array.isArray(val)) {
      return val[Math.floor(Math.random() * val.length)];
    }
    return val;
  }

  /* ── Referencias DOM ── */
  var fab       = document.getElementById('pvChatFab');
  var panel     = document.getElementById('pvChat');
  var closeBtn  = document.getElementById('pvChatClose');
  var messages  = document.getElementById('pvChatMessages');
  var input     = document.getElementById('pvChatInput');
  var sendBtn   = document.getElementById('pvChatSend');
  var quickArea = document.getElementById('pvChatQuick');
  var badge     = document.getElementById('pvChatBadge');
  var modesBar  = document.getElementById('pvChatModes');

  if (!fab || !panel) return; // salida segura si el HTML no está

  var isOpen           = false;
  var welcomed          = false;
  var typingRow         = null;
  var currentMode       = 'empresa'; /* 'empresa' | 'general' */
  var firstMessageSent  = false;
  var wikiAbortCtrl     = null; /* controla peticiones a Wikipedia en curso */

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
      ? '<img src="images/leo.webp" alt="Leo" class="pv-av-img" />'
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
      '<div class="pv-av"><img src="images/leo.webp" alt="Leo" class="pv-av-img" /></div>' +
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

  /* ── Motor de búsqueda en la KB (modo empresa) ── */
  function findAnswer(q) {
    var data = getData();
    var kb   = data.kb || [];
    var lower = q.toLowerCase().trim();
    var best  = null;
    var score = 0;

    for (var i = 0; i < kb.length; i++) {
      var entry = kb[i];
      var hits  = 0;
      for (var j = 0; j < entry.keys.length; j++) {
        if (lower.indexOf(entry.keys[j].toLowerCase()) !== -1) hits++;
      }
      if (hits > score) { score = hits; best = entry; }
    }

    if (best && score > 0) return pickRandom(best.answer);
    return null; /* sin coincidencia → se decide el fallback en sendMessage() */
  }

  /* ── Elige un mensaje de "no sé" al azar (nunca siempre el mismo) ── */
  function pickFallbackMessage() {
    var data = getData();
    var list = (data.fallback && data.fallback.length) ? data.fallback : PV_DATA_FALLBACK.fallback;
    return list[Math.floor(Math.random() * list.length)];
  }

  /* ── Estima cuánto tarda botReply() en terminar de "escribir" un texto,
     para mostrar la tarjeta de contacto justo después, no antes ── */
  function estimateReplyDuration(text) {
    var totalLen  = text.length;
    var readDelay = Math.min(800 + totalLen * 8, 2200);
    var typeSpeed = Math.max(12, Math.min(28, 2000 / totalLen));
    return readDelay + totalLen * typeSpeed * 1.3;
  }

  /* ── Responde con un mensaje de fallback al azar + tarjeta de contacto ── */
  function sendFallbackWithContact() {
    var msg = pickFallbackMessage();
    botReply(msg);
    setTimeout(addContactCard, estimateReplyDuration(msg) + 300);
  }

  /* ── Tarjeta de contacto (estilo "contacto compartido" de WhatsApp) ── */
  function addContactCard() {
    var data    = getData();
    var contact = data.contact || PV_DATA_FALLBACK.contact;

    var row = document.createElement('div');
    row.className = 'pv-row pv-row--bot';
    var avatarSVG = '<img src="images/leo.webp" alt="Leo" class="pv-av-img" />';
    var phoneIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.76a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.72 16z"/></svg>';

    row.innerHTML =
      '<div class="pv-av">' + avatarSVG + '</div>' +
      '<div class="pv-col">' +
        '<a class="pv-contact-card pv-bubble-anim" href="tel:' + contact.phoneHref + '">' +
          '<span class="pv-contact-card__ico">' + phoneIcon + '</span>' +
          '<span class="pv-contact-card__info">' +
            '<span class="pv-contact-card__name">' + contact.name + '</span>' +
            '<span class="pv-contact-card__phone">' + contact.phoneDisplay + '</span>' +
          '</span>' +
          '<span class="pv-contact-card__action">Llamar</span>' +
        '</a>' +
        '<div class="pv-ts">' + nowTime() + '</div>' +
      '</div>';

    messages.appendChild(row);
    scrollBottom();
  }

  /* ────────────────────────────────────────────
     MODO "TECNOLOGÍA E INGENIERÍA" — Wikipedia
     Usa la API pública de Wikipedia en español
     (gratuita, sin API key). Solo se muestra TEXTO:
     sin enlaces, sin referencias, sin imágenes.
  ──────────────────────────────────────────── */
  function sanitizeWikiText(text) {
    return text
      .replace(/\[\d+\]/g, '')      /* referencias tipo [1] */
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  function fetchWikipediaAnswer(query, onSuccess, onFail) {
    if (typeof fetch !== 'function') { onFail(); return; }

    if (wikiAbortCtrl) { try { wikiAbortCtrl.abort(); } catch (e) {} }
    wikiAbortCtrl = (typeof AbortController !== 'undefined') ? new AbortController() : null;
    var signal = wikiAbortCtrl ? wikiAbortCtrl.signal : undefined;

    var searchUrl = 'https://es.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&limit=1&namespace=0&search=' + encodeURIComponent(query);

    fetch(searchUrl, { signal: signal })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var title = data && data[1] && data[1][0];
        if (!title) { onFail(); return null; }
        var summaryUrl = 'https://es.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(title);
        return fetch(summaryUrl, { signal: signal }).then(function (r2) { return r2.json(); });
      })
      .then(function (summary) {
        if (!summary) return; /* ya se llamó onFail arriba */
        if (!summary.extract || summary.type === 'disambiguation') { onFail(); return; }
        onSuccess(sanitizeWikiText(summary.extract));
      })
      .catch(function (err) {
        if (err && err.name === 'AbortError') return; /* reemplazada por una búsqueda más nueva */
        onFail();
      });
  }

  function handleGeneralQuery(text) {
    showTyping();
    fetchWikipediaAnswer(
      text,
      function (answerText) { hideTyping(); botReply(answerText); },
      function ()           { hideTyping(); sendFallbackWithContact(); }
    );
  }

  /* ────────────────────────────────────────────
     CAMBIO DE MODO DE CONVERSACIÓN
  ──────────────────────────────────────────── */
  function setMode(mode) {
    currentMode = mode;
    var data = getData();

    if (modesBar) {
      var btns = modesBar.querySelectorAll('.pv-chat__mode');
      for (var i = 0; i < btns.length; i++) {
        var active = btns[i].getAttribute('data-mode') === mode;
        btns[i].classList.toggle('is-active', active);
        btns[i].setAttribute('aria-selected', active ? 'true' : 'false');
      }
    }

    var intro = pickRandom(
                  (data.modeIntros && data.modeIntros[mode]) ||
                  (PV_DATA_FALLBACK.modeIntros && PV_DATA_FALLBACK.modeIntros[mode])
                );
    if (intro) botReply(intro);

    if (quickArea) {
      quickArea.style.display = (mode === 'empresa' && !firstMessageSent) ? 'flex' : 'none';
    }
  }

  if (modesBar) {
    modesBar.addEventListener('click', function (e) {
      var btn = e.target.closest('.pv-chat__mode');
      if (!btn) return;
      var mode = btn.getAttribute('data-mode');
      if (mode && mode !== currentMode) setMode(mode);
    });
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
      var avatarSVG = '<img src="images/leo.webp" alt="Leo" class="pv-av-img" />';
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
    firstMessageSent = true;

    /* Ocultar quick replies tras el primer mensaje */
    if (quickArea) quickArea.style.display = 'none';

    if (currentMode === 'general') {
      handleGeneralQuery(text);
    } else {
      var answer = findAnswer(text);
      if (answer) {
        botReply(answer);
      } else {
        sendFallbackWithContact();
      }
    }
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
        botReply(pickRandom(getData().welcome) || pickRandom(PV_DATA_FALLBACK.welcome));
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

