/* ================================================
   PAVEL — pavel-chatbot-data.js
   Base de conocimiento del chatbot (modularizada)
   ------------------------------------------------
   Este archivo NO contiene lógica del widget, solo
   los datos que el motor en scroll.js consume.

   Para enriquecer el chatbot, edite SOLO este archivo:
     - kb            → preguntas y respuestas de la empresa
     - fallback      → mensajes cuando el bot no sabe responder
                        (se elige uno al azar cada vez)
     - welcome       → mensaje de bienvenida
     - modeIntros    → mensaje al cambiar de modo de chat
     - contact       → datos de contacto reales de la empresa

   IMPORTANTE: este archivo debe cargarse en index.html
   ANTES de js/scroll.js, así:
     <script src="js/pavel-chatbot-data.js"></script>
     <script src="js/scroll.js"></script>
================================================ */

window.PV_CHATBOT_DATA = {

  /* ────────────────────────────────────────────
     BASE DE CONOCIMIENTO — modo "La empresa"
     Cada entrada: { keys: [...palabras clave], answer: '...' }
     El motor busca coincidencias de palabras clave en el
     mensaje del usuario y responde con la entrada que más
     coincidencias tenga.
  ──────────────────────────────────────────── */
  kb: [
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
    },

    /* ── Ampliación: tecnología e ingeniería aplicadas a la empresa ── */
    {
      keys: ['inteligencia artificial', 'algoritmos predictivos', 'aprendizaje automático', 'machine learning'],
      answer: 'Incorporamos **inteligencia artificial** en etapas clave de nuestros proyectos:\n\n• Predicción de cronogramas y desviaciones de obra\n• Optimización de recursos y materiales\n• Detección temprana de riesgos estructurales\n\nLa IA trabaja siempre junto a nuestro equipo de ingenieros, nunca lo reemplaza.'
    },
    {
      keys: ['drone', 'drones', 'dron', 'inspección aérea', 'levantamiento topográfico'],
      answer: 'Usamos **drones** para levantamientos topográficos, inspección de avance de obra y monitoreo de seguridad en sitios de difícil acceso.\n\nEsto agiliza la toma de datos y reduce riesgos para el personal en campo.'
    },
    {
      keys: ['iot', 'sensores', 'internet de las cosas', 'monitoreo remoto'],
      answer: 'Instalamos **sensores IoT** en obra y en edificaciones entregadas para monitoreo remoto de estructuras, consumo energético y condiciones ambientales en tiempo real.\n\nLos datos quedan disponibles en un panel digital para el cliente.'
    },
    {
      keys: ['energía renovable', 'energías renovables', 'paneles solares', 'eficiencia energética', 'energía solar'],
      answer: 'Diseñamos proyectos con criterios de **eficiencia energética**, incluyendo integración de paneles solares, iluminación LED inteligente y sistemas de climatización de bajo consumo, alineados con nuestras certificaciones de sostenibilidad.'
    },
    {
      keys: ['modular', 'prefabricado', 'prefabricados', 'construcción modular'],
      answer: 'Ofrecemos **construcción modular y prefabricada** para proyectos que requieren rapidez sin sacrificar calidad:\n\n• Menores tiempos de obra\n• Menos desperdicio de material\n• Control de calidad en fábrica antes del montaje'
    },
    {
      keys: ['sismo', 'sismorresistente', 'norma sismo', 'resistencia sísmica', 'normativa'],
      answer: 'Todos nuestros diseños estructurales cumplen con la **normativa sismorresistente** vigente en cada país donde operamos, con análisis de vulnerabilidad y reforzamiento cuando aplica.'
    },
    {
      keys: ['realidad aumentada', 'realidad virtual', 'gemelo digital', 'digital twin'],
      answer: 'Utilizamos **gemelos digitales (digital twin)** y recorridos en realidad virtual para que el cliente visualice el proyecto antes de la construcción y haga ajustes tempranos, evitando cambios costosos en obra.'
    },
    {
      keys: ['ciberseguridad', 'seguridad de datos', 'protección de información'],
      answer: 'La información de cada proyecto —planos, modelos BIM y datos del cliente— se gestiona bajo protocolos de **ciberseguridad** y respaldo en la nube, con acceso restringido por roles.'
    },
    {
      keys: ['equipo de trabajo', 'ingenieros', 'arquitectos', 'talento', 'quiénes trabajan', 'personal'],
      answer: 'Nuestro equipo está conformado por **ingenieros civiles, arquitectos, especialistas BIM y gestores de proyecto**, todos con formación continua en nuevas tecnologías constructivas.'
    },
    {
      keys: ['misión', 'visión', 'valores', 'filosofía', 'compromiso'],
      answer: 'Nuestra misión es construir más allá de los estándares, combinando ingeniería sólida con tecnología de punta. Nos guían valores de **excelencia técnica, transparencia y compromiso con el cliente** en cada etapa del proyecto.'
    },
    {
      keys: ['responsabilidad social', 'impacto ambiental', 'comunidad', 'rse'],
      answer: 'Trabajamos bajo principios de **responsabilidad social y ambiental**: minimizamos el impacto en cada obra, gestionamos residuos de construcción y promovemos contratación de mano de obra local en los proyectos.'
    },
    {
      keys: ['alianza', 'alianzas', 'proveedores', 'socios estratégicos'],
      answer: 'Contamos con **alianzas estratégicas** con proveedores de materiales certificados y firmas tecnológicas especializadas en BIM, IoT e ingeniería estructural, lo que garantiza calidad consistente en cada país donde operamos.'
    },
    {
      keys: ['seguridad laboral', 'seguridad en obra', 'riesgos laborales', 'accidentes'],
      answer: 'La seguridad en obra es prioridad: aplicamos protocolos **OHSAS 18001**, capacitación constante a cuadrillas y monitoreo de riesgos en tiempo real para reducir accidentes laborales.'
    },
    {
      keys: ['financiamiento', 'financiación', 'formas de pago', 'crédito'],
      answer: 'Podemos orientarle sobre **esquemas de financiamiento** y formas de pago según el tipo de proyecto, en conjunto con entidades aliadas. Lo ideal es revisarlo directamente con nuestro equipo comercial para su caso particular.'
    },
    {
      keys: ['innovación', 'i+d', 'investigación y desarrollo', 'nuevas tecnologías'],
      answer: 'Invertimos de forma constante en **innovación e investigación aplicada**, evaluando nuevas tecnologías constructivas antes de incorporarlas a nuestros proyectos, siempre con criterios de costo-beneficio comprobado.'
    }
  ],

  /* ────────────────────────────────────────────
     RESPUESTAS CUANDO EL BOT NO SABE RESPONDER
     Se elige UNA al azar cada vez, para que no se
     repita siempre el mismo mensaje. Después de
     este mensaje se muestra la tarjeta de contacto.
  ──────────────────────────────────────────── */
  fallback: [
    'Esa consulta requiere atención personalizada de nuestro equipo técnico. Le comparto el contacto directo para que lo resuelvan con gusto:',
    'No tengo información específica sobre eso en este momento, pero nuestro equipo puede ayudarle directamente:',
    'Para responderle con precisión sobre ese tema, lo mejor es hablar con uno de nuestros especialistas:',
    'Ese punto se sale un poco de lo que tengo registrado por aquí. Le dejo el contacto de nuestro equipo:',
    'Quiero asegurarme de darle una respuesta correcta, así que lo mejor es conectarlo directamente con el equipo:',
    'No cuento con el detalle exacto para esa pregunta, pero puede comunicarse directamente así:',
    'Esa es una consulta más específica de la que puedo resolver por este chat. Le comparto el contacto de Pavel:',
    'Para temas como este, nuestro equipo le dará una respuesta más completa. Aquí tiene el contacto directo:',
    'Aún no tengo esa información cargada, pero puede contactar directamente a nuestro equipo:',
    'Prefiero conectarlo con una persona del equipo para ese tema puntual. Aquí tiene su contacto:'
  ],

  /* ── Mensaje de bienvenida (modo empresa, por defecto) ── */
  welcome: '¡Hola! 👋 Soy el asistente virtual de **Pavel**. Estoy aquí para responder sus preguntas sobre nuestros servicios de ingeniería y construcción.\n\n¿En qué puedo ayudarle hoy?',

  /* ── Mensajes al cambiar de modo de conversación ── */
  modeIntros: {
    empresa: 'Volvemos a hablar sobre **Pavel** 🏢 Pregúnteme sobre servicios, proyectos, tecnología BIM o cualquier tema de la empresa.',
    general: 'Modo conversación general activado 🌐 Ahora puede preguntarme sobre tecnología, ingeniería, ciencia o cualquier otro tema de interés.'
  },

  /* ────────────────────────────────────────────
     CONTACTO REAL DE LA EMPRESA
     phoneHref  → formato para el enlace tel: (sin espacios)
     phoneDisplay → formato visible para el usuario
  ──────────────────────────────────────────── */
  contact: {
    name: 'Equipo Pavel',
    phoneDisplay: '+57 300 123 4567',
    phoneHref: '+573001234567'
  }

};
