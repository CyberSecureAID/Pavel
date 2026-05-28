# MAXCON — Modern Website Redesign

Diseño oscuro industrial con acentos dorados, animaciones de scroll, partículas flotantes y transiciones cinematográficas.

## 📁 Estructura de archivos

```
/
├── index.html          ← Página principal (sube esto a la raíz)
├── css/
│   └── style.css       ← Todos los estilos
├── js/
│   └── main.js         ← Toda la interactividad
└── README.md
```

## 🚀 Instrucciones para subir al repo

1. Sube los 3 archivos manteniendo la misma estructura de carpetas:
   - `index.html` → raíz del repo
   - `css/style.css` → carpeta `css/`
   - `js/main.js` → carpeta `js/`

2. Si tienes GitHub Pages activado, el sitio funcionará inmediatamente.

## 🖼️ Agregar imágenes reales (opcional pero recomendado)

En `index.html`, busca `.about-img-placeholder` y agrega un `<img>` real:

```html
<div class="about-img-placeholder">
  <img src="images/team-photo.jpg" alt="MAXCON Team" />
</div>
```

También puedes cambiar el fondo del hero con una foto de obra:
En `css/style.css`, busca `.hero-bg` y agrega:
```css
.hero-bg {
  background-image: url('../images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}
```

## 📧 Activar el formulario de contacto

El formulario actualmente simula el envío. Para hacerlo funcional:

### Opción 1 — FormSubmit (gratis, sin backend):
En `index.html`, cambia `<form id="contactForm">` por:
```html
<form action="https://formsubmit.co/info@maxconinc.com" method="POST" id="contactForm">
  <input type="hidden" name="_subject" value="New contact from website">
  <input type="hidden" name="_captcha" value="false">
```

### Opción 2 — EmailJS:
Instala EmailJS y reemplaza el `setTimeout` en `js/main.js` con la llamada a su API.

## 🎨 Personalizar colores

En `css/style.css`, las primeras líneas tienen las variables:
```css
--gold:  #c9a84c;   /* Color dorado principal */
--black: #0a0a0a;   /* Fondo negro */
--white: #f5f3ee;   /* Texto claro */
```

## ✅ Features incluidas

- Loader animado con barra de progreso
- Cursor personalizado (desktop)
- Navbar sticky con blur al hacer scroll
- Menú hamburguesa en mobile
- Sección Hero con partículas flotantes y texto animado
- Grid de servicios con tilt 3D en hover
- Sección About con contador visual
- Barra de estadísticas con contadores animados
- Slider de testimonios con auto-avance
- Sección CTA
- Formulario de contacto con floating labels
- Footer completo
- Reveal animations al hacer scroll (IntersectionObserver)
- Parallax sutil en el hero
- 100% responsive (mobile-first)
