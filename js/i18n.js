/**
 * PAVEL – i18n.js  v1.0
 * ──────────────────────────────────────────────
 * Motor de idioma del sitio (independiente del motor
 * del chatbot, pero sincronizado con él).
 *
 * - Idioma por defecto: INGLÉS.
 * - El texto en inglés ya vive directamente en el HTML
 *   (index.html), así que no se requiere diccionario EN:
 *   este script captura el inglés original la primera
 *   vez que corre y lo reutiliza para volver a EN.
 * - El español vive en window.PV_I18N_ES (bot/i18n-data.js
 *   o js/i18n-data.js, debe cargarse ANTES que este archivo).
 * - Persiste la elección en localStorage ('pv_site_lang').
 * - Dispara un evento 'pv:langchange' en window para que
 *   otros módulos (scroll.js / chatbot) puedan sincronizarse.
 *
 * CONTRATO PÚBLICO:
 *   window.PV_I18N.getLang()        → 'en' | 'es'
 *   window.PV_I18N.setLang(lang)    → cambia y aplica el idioma
 * ──────────────────────────────────────────────
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'pv_site_lang';
  var ES = (window.PV_I18N_ES) || { text: {}, html: {}, ariaLabel: {}, placeholder: {}, meta: {} };

  /* Caché del contenido ORIGINAL en inglés, para poder
     restaurarlo exactamente al volver a EN. */
  var ORIGINAL_EN = {
    text: {},
    html: {},
    ariaLabel: {},
    placeholder: {}
  };
  var captured = false;

  function captureOriginal() {
    if (captured) return;
    captured = true;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (!(k in ORIGINAL_EN.text)) ORIGINAL_EN.text[k] = el.textContent;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      if (!(k in ORIGINAL_EN.html)) ORIGINAL_EN.html[k] = el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-aria-label');
      if (!(k in ORIGINAL_EN.ariaLabel)) ORIGINAL_EN.ariaLabel[k] = el.getAttribute('aria-label') || '';
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-placeholder');
      if (!(k in ORIGINAL_EN.placeholder)) ORIGINAL_EN.placeholder[k] = el.getAttribute('placeholder') || '';
    });

    ORIGINAL_EN.metaTitle = document.title;
    var descEl = document.getElementById('pvPageDesc');
    ORIGINAL_EN.metaDesc = descEl ? descEl.getAttribute('content') : '';
  }

  function getSavedLang() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      return (v === 'es' || v === 'en') ? v : 'en';
    } catch (e) {
      return 'en';
    }
  }

  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  var currentLang = 'en';

  function applyLang(lang) {
    captureOriginal();
    currentLang = (lang === 'es') ? 'es' : 'en';

    var dict = currentLang === 'es' ? ES : null;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      var val = dict ? (dict.text && dict.text[k]) : ORIGINAL_EN.text[k];
      if (val === undefined || val === null) val = ORIGINAL_EN.text[k];
      if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      var val = dict ? (dict.html && dict.html[k]) : ORIGINAL_EN.html[k];
      if (val === undefined || val === null) val = ORIGINAL_EN.html[k];
      if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-aria-label');
      var val = dict ? (dict.ariaLabel && dict.ariaLabel[k]) : ORIGINAL_EN.ariaLabel[k];
      if (val === undefined || val === null) val = ORIGINAL_EN.ariaLabel[k];
      if (val !== undefined) el.setAttribute('aria-label', val);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-placeholder');
      var val = dict ? (dict.placeholder && dict.placeholder[k]) : ORIGINAL_EN.placeholder[k];
      if (val === undefined || val === null) val = ORIGINAL_EN.placeholder[k];
      if (val !== undefined) el.setAttribute('placeholder', val);
    });

    /* <title> y <meta name="description"> */
    if (currentLang === 'es' && ES.meta) {
      if (ES.meta.title) document.title = ES.meta.title;
      var descEl = document.getElementById('pvPageDesc');
      if (descEl && ES.meta.description) descEl.setAttribute('content', ES.meta.description);
    } else {
      document.title = ORIGINAL_EN.metaTitle;
      var descEl2 = document.getElementById('pvPageDesc');
      if (descEl2) descEl2.setAttribute('content', ORIGINAL_EN.metaDesc);
    }

    document.documentElement.setAttribute('lang', currentLang);
    document.body && document.body.setAttribute('data-site-lang', currentLang);

    /* Botones del selector de idioma del topbar */
    document.querySelectorAll('#pvSiteLang .lang-toggle__btn').forEach(function (btn) {
      var active = btn.getAttribute('data-site-lang') === currentLang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    saveLang(currentLang);

    /* Avisar a otros módulos (chatbot) del cambio de idioma */
    try {
      window.dispatchEvent(new CustomEvent('pv:langchange', { detail: { lang: currentLang } }));
    } catch (e) {
      /* navegadores muy antiguos sin soporte de CustomEvent */
    }
  }

  function init() {
    captureOriginal();
    var initial = window.__PV_INITIAL_LANG || getSavedLang();
    applyLang(initial);

    var toggle = document.getElementById('pvSiteLang');
    if (toggle) {
      toggle.addEventListener('click', function (e) {
        var btn = e.target.closest('.lang-toggle__btn');
        if (!btn) return;
        var lang = btn.getAttribute('data-site-lang');
        if (lang && lang !== currentLang) applyLang(lang);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.PV_I18N = {
    getLang: function () { return currentLang; },
    setLang: function (lang) { applyLang(lang); }
  };

})();
/* FIN i18n.js */
