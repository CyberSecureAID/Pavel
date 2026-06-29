# 🤖 Bot — Base de Conocimiento del Asistente Virtual

Esta carpeta contiene **únicamente los datos** del asistente virtual.
El motor de funcionamiento (lógica, UI, typewriter, Wikipedia, etc.)
vive en `js/scroll.js` y **no debe tocarse** para editar contenido.

---

## Archivos

| Archivo | Descripción |
|---|---|
| `data.js` | Base de conocimiento principal. **El único archivo que debes editar** para agregar o modificar respuestas. |

### Archivos futuros sugeridos (modularización)
A medida que la KB crezca, puede dividirse por módulo. Todos deben
cargarse en `index.html` **antes** de `js/scroll.js`:

```
bot/
  data.js              ← KB principal (servicios, horarios, contacto…)
  data-proyectos.js    ← casos de éxito, portafolio detallado
  data-precios.js      ← tarifas, paquetes, condiciones comerciales
  data-equipo.js       ← perfiles del equipo, certificaciones individuales
  data-faq.js          ← preguntas frecuentes adicionales
```

Cada módulo nuevo debe declarar su contenido así:

```js
// bot/data-proyectos.js
(function () {
  var base = window.PV_CHATBOT_DATA;
  if (!base || !base.kb) return; // seguridad: data.js no cargó

  base.kb.push(
    {
      keys: ['proyecto estrella', 'mejor proyecto', ...],
      answer: ['Descripción del proyecto...', 'Variante 2...']
    }
    // agregar más entradas aquí
  );
})();
```

Y en `index.html`, cargarlo después de `data.js` y antes de `scroll.js`:

```html
<script src="bot/data.js?v=1"></script>
<script src="bot/data-proyectos.js?v=1"></script>  <!-- nuevo módulo -->
<script src="js/hero.js?v=2"></script>
<script src="js/scroll.js?v=3"></script>
```

---

## Cómo editar `data.js`

### Agregar una nueva entrada a la KB

```js
{
  keys: [
    'palabra clave', 'frase natural', 'variante coloquial',
    'otra forma de preguntar', 'sinónimo'
    // Cuantas más, mejor reconocimiento de intención
  ],
  answer: [
    'Primera variante de respuesta. El bot la elige al azar.',
    'Segunda variante. Explica lo mismo con otras palabras.',
    'Tercera variante. Puede ser más corta o más detallada.',
  ]
}
```

### Reglas importantes

- **Mínimo 3 variantes** en `answer` por entrada. El motor elige una al azar cada vez, lo que hace que el bot se sienta menos repetitivo.
- **Keys en minúsculas y sin tildes** no es obligatorio (el motor normaliza automáticamente), pero ayuda a la legibilidad.
- **Incluir frases completas** en `keys`, no solo palabras sueltas. Ejemplo: `'a qué hora puedo llamar'` es mejor que solo `'hora'`.
- **No duplicar entradas** sobre el mismo tema. Es mejor agregar más `keys` a una entrada existente que crear una nueva sobre lo mismo.
- El motor detecta **hasta 3 intenciones** por mensaje y responde a cada una por separado, separadas con `──────────`.

### Editar los mensajes de bienvenida

El array `welcome` contiene los saludos iniciales. Se elige uno al azar
cada vez que un visitante abre el chat. Para agregar más:

```js
welcome: [
  'Mensaje existente 1...',
  'Mensaje existente 2...',
  'Tu nuevo mensaje aquí. Sin género, sin nombre propio, profesional.'
]
```

### Editar los datos de contacto

```js
contact: {
  name: 'Nombre del equipo o persona de contacto',
  phoneDisplay: '+1 416 000 0000',   // formato visible
  phoneHref: '+14160000000'           // formato para el enlace tel:
}
```

---

## Cómo escalar el sistema a otra empresa

1. Duplicar la carpeta `bot/` con un nombre nuevo (ej. `bot-cliente2/`)
2. Editar `data.js` con los datos, servicios y horarios de la nueva empresa
3. Actualizar `contact` con los datos reales del cliente
4. Cambiar la ruta en `index.html`:
   ```html
   <script src="bot-cliente2/data.js?v=1"></script>
   ```
5. El motor (`scroll.js`) no requiere ningún cambio

El asistente virtual queda completamente adaptado al nuevo cliente
sin modificar una sola línea del motor.

---

## Variables de configuración del motor (en `scroll.js`)

Estas constantes controlan el comportamiento del motor de matching.
Solo modificarlas si se quiere ajustar la sensibilidad de detección:

| Variable | Valor por defecto | Descripción |
|---|---|---|
| `MIN_HITS` | `1` | Mínimo de keys que deben coincidir para activar una entrada |
| `MULTI_GAP` | `0.40` | Una 2ª intención se incluye si su score ≥ 40% del mejor |
| `MAX_INTENTS` | `3` | Máximo de intenciones a responder por mensaje |
