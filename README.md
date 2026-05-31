# MAXCON Website – Estructura del Repositorio

## Archivos que debes subir al repo

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── scroll.js
└── images/
    ├── hero-logo.png     ← Imagen 1 (portada con logo MAXCON)
    └── hero-bg.png       ← Imagen 2 (sitio de construcción, fondo blur)
```

## Cómo funciona la transición

1. **Portada** (`hero-logo.png`): ocupa el 100% de la pantalla al cargar.
2. **Scroll hacia abajo**: la imagen hace un suave zoom-in mientras se desvanece (opacity 1→0).
3. **Sección Servicios**: aparece con la imagen de fondo (`hero-bg.png`) aplicando `blur + darken` via CSS, encima las tarjetas de servicios animadas con IntersectionObserver.

## Personalización rápida

| Variable CSS       | Qué controla                          |
|--------------------|---------------------------------------|
| `--gold`           | Color dorado de acentos               |
| `--blue`           | Color azul corporativo                |
| `--card-bg`        | Fondo semitransparente de las tarjetas|
| `ZOOM_MAX` (JS)    | Intensidad del zoom (default: 1.35)   |
| `TRANSITION_END`   | Distancia scroll para completar fade  |

## Notas

- Las imágenes **no necesitan convertirse a SVG**; PNG funciona perfectamente para este efecto.
- El efecto blur de la sección de servicios es 100% CSS (`filter: blur(14px)`), no requiere librerías.
- Compatible con todos los navegadores modernos. No tiene dependencias externas (solo Google Fonts).
