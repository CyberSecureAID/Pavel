/**
 * PAVEL – footer-map.js
 * ──────────────────────────────────────────────
 * Mapa de ubicación en el pie de página.
 *  - Leaflet.js + tiles CARTO "Dark Matter" (gratuitos,
 *    sin API key) para un mapa en modo oscuro real.
 *  - El mapa es puramente visual (pointer-events: none):
 *    todo el bloque vive dentro de un <a> que abre
 *    Google Maps en una pestaña nueva al hacer clic.
 *  - Sin atribución, sin controles, sin marco: se ve
 *    como un fragmento propio del sitio, no un widget.
 *  - Se inicializa solo cuando el footer entra en
 *    viewport (mismo patrón de IntersectionObserver
 *    que usa scroll.js para las imágenes de sección).
 */

(function () {
  'use strict';

  const mapEl     = document.getElementById('footer-map');       // div interno (tiles)
  const wrapperEl = mapEl ? mapEl.closest('.site-footer__map') : null; // <a> clicable
  if (!mapEl || !wrapperEl || typeof L === 'undefined') return;

  // Ubicación: Toronto, Canadá
  const LAT = 43.6532;
  const LNG = -79.3832;

  function initFooterMap() {
    const map = L.map(mapEl, {
      center: [LAT, LNG],
      zoom: 13,
      zoomControl: false,
      attributionControl: false, // sin "Leaflet | OpenStreetMap | CARTO"
      scrollWheelZoom: false,
      dragging: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      touchZoom: false,
      tap: false,
    });

    // CARTO Dark Matter: tiles oscuros gratuitos, sin API key.
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    // Marcador simple, sin popup, coherente con el acento cyan del sitio.
    const icon = L.divIcon({
      className: 'footer-map__pin',
      html: '<span></span>',
      iconSize: [12, 12],
    });
    L.marker([LAT, LNG], { icon }).addTo(map);

    requestAnimationFrame(() => {
      map.invalidateSize();
      wrapperEl.classList.add('map-visible');
    });
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    initFooterMap();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          initFooterMap();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '80px 0px 0px 0px' }
  );

  observer.observe(wrapperEl);
})();
