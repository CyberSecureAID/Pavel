/* ================================================
   PAVEL — pavel-chatbot-data.js  v2.0
   Base de conocimiento del chatbot (modularizada)
   ─────────────────────────────────────────────────
   Motor multi-intención: detecta varias preguntas
   en un solo mensaje y responde a cada una.

   Para enriquecer el bot, edite SOLO este archivo.
   IMPORTANTE: cargar ANTES de js/scroll.js en HTML.
================================================ */

window.PV_CHATBOT_DATA = {

  /* ════════════════════════════════════════════════
     BASE DE CONOCIMIENTO — modo "La empresa"
     Cada entrada:
       keys   → palabras o frases que activan la entrada
                (cuanto más variadas, mejor reconocimiento)
       answer → array de variantes; el motor elige una
                al azar cada vez que responde
  ════════════════════════════════════════════════ */
  kb: [

    /* ── Servicios generales ── */
    {
      section: 'servicios',
      keys: [
        'servicio', 'servicios', 'ofrecen', 'hacen', 'trabajan',
        'que hacen', 'qué hacen', 'oferta', 'soluciones', 'pueden ayudar',
        'en que ayudan', 'cómo ayudan', 'como ayudan', 'qué ofrecen',
        'que ofrecen', 'a qué se dedican', 'a que se dedican',
        'actividades', 'especialidades', 'capacidades', 'portafolio de servicios'
      ],
      answer: [
        'En **JPO Contracting Unlimited Inc.** ofrecemos servicios profesionales especializados en el sector comercial y residencial de la construcción. Nuestras líneas principales son:\n\n- **Arquitectura y Diseño**: desde la conceptualización hasta los planos de ejecución.\n- **Ingeniería Estructural y Civil**: diseño, cálculo y supervisión técnica.\n- **Shop Drawings**: planos de taller detallados para fabricación e instalación.\n- **Permisos y Gestión con Autoridades**: tramitación de licencias y cumplimiento normativo.\n\nCada proyecto recibe atención personalizada desde la consulta inicial hasta la entrega final.',
        'Somos una firma con sede en Oshawa, Canadá, especializada en servicios de arquitectura, ingeniería, planos de taller y gestión de permisos. Trabajamos tanto en proyectos residenciales como comerciales, garantizando calidad y cumplimiento de plazos.\n\n¿Le gustaría conocer más detalles sobre alguna de nuestras áreas de servicio?',
        'Nuestra oferta de servicios está diseñada para cubrir todo el ciclo de un proyecto de construcción:\n\n- Diseño arquitectónico y de interiores\n- Cálculo estructural y análisis sísmico\n- Elaboración de shop drawings para fabricantes\n- Obtención de permisos municipales y licencias de obra\n\nContáctenos para una asesoría sin compromiso.'
      ]
    },

    /* ── Horarios de atención ── */
    {
      keys: [
        'horario', 'horarios', 'hora', 'horas', 'atencion', 'atención',
        'cuando atienden', 'cuándo atienden', 'abren', 'cierran', 'disponible',
        'disponibles', 'cuando puedo llamar', 'cuándo puedo llamar',
        'a que hora', 'a qué hora', 'dias de trabajo', 'días de trabajo',
        'lunes', 'viernes', 'fin de semana', 'sabado', 'sábado', 'domingo',
        'jornada', 'oficina', 'cuando los encuentro', 'cuándo los encuentro',
        'horario de oficina', 'horario laboral', 'comunicarme', 'comunicar'
      ],
      answer: [
        'Nuestro horario de atención es de **lunes a viernes de 8:00 a.m. a 6:00 p.m.** (hora de Toronto, EST). Los sábados atendemos de 9:00 a.m. a 1:00 p.m. para consultas puntuales.\n\nFuera de ese horario puede dejarnos un mensaje a través del formulario de contacto o por correo electrónico, y le responderemos en el siguiente día hábil.',
        'Atendemos de **lunes a viernes de 8:00 a.m. a 6:00 p.m.** (EST). Los fines de semana solo atendemos emergencias técnicas o de proyectos en ejecución.\n\nSi desea agendar una consulta, puede hacerlo en cualquier momento por este chat o por el formulario de contacto.',
        'Estamos disponibles de lunes a viernes, de 8 de la mañana a 6 de la tarde (hora del este). El sábado hay atención limitada hasta el mediodía.\n\nPara consultas urgentes fuera de horario, escríbanos y un asesor se comunicará con usted al inicio del próximo día hábil.',
        'El horario regular de oficina es **lunes a viernes de 8:00 a 18:00 horas**. Si necesita una cita o llamada, puede solicitarla por el formulario y le confirmamos disponibilidad el mismo día.'
      ]
    },

    /* ── Cotización / propuesta ── */
    {
      section: 'contacto',
      keys: [
        'propuesta', 'cotización', 'cotizacion', 'cotizar', 'presupuesto',
        'solicitar', 'costo', 'precio', 'cuánto cuesta', 'cuanto cuesta',
        'valor', 'tarifa', 'tarifas', 'cuánto cobran', 'cuanto cobran',
        'cuánto vale', 'cuanto vale', 'honorarios', 'inversión', 'inversion',
        'pagar', 'cobro', 'cobran', 'paquete', 'plan', 'precio por metro',
        'costo de proyecto', 'cuánto me cuesta', 'cuanto me cuesta'
      ],
      answer: [
        'Para elaborar una propuesta técnica necesitamos conocer los alcances de su proyecto. Le recomendamos:\n\n1. Completar el formulario en la sección **Contacto** de esta página.\n2. O comunicarse directamente con nuestro equipo comercial al **+1 (437) 830-2999** para agendar una consulta sin costo.\n\nAsí podemos preparar una propuesta ajustada a su caso real.',
        'El costo de cada proyecto depende de su escala, ubicación y especialidades involucradas (arquitectura, ingeniería, shop drawings o permisos). Para entregarle un presupuesto preciso necesitamos un breve diagnóstico previo.\n\nPuede iniciar el proceso completando el formulario de contacto o llamándonos. **La primera consulta no tiene costo**.',
        'No manejamos tarifas estándar porque cada proyecto es diferente. Lo que sí le garantizamos es una propuesta clara, desglosada y sin cobros ocultos.\n\nContacte a nuestro equipo para recibir una propuesta técnica personalizada según sus necesidades.'
      ]
    },

    /* ── Cobertura geográfica ── */
    {
      section: 'contacto',
      keys: [
        'país', 'pais', 'países', 'paises', 'donde', 'dónde', 'cobertura',
        'operan', 'presencia', 'internacional', 'latinoamerica', 'latinoamérica',
        'region', 'región', 'colombia', 'mexico', 'méxico', 'peru', 'perú',
        'chile', 'argentina', 'brasil', 'ecuador', 'panama', 'panamá',
        'fuera de colombia', 'otro pais', 'otro país', 'trabajan en',
        'tienen oficina', 'tienen presencia', 'están en', 'estan en',
        'canadá', 'canada', 'ontario', 'toronto', 'oshawa'
      ],
      answer: [
        'Nuestra sede principal está en **Oshawa, Ontario, Canadá**, en la dirección **489 Fairleigh Ave, Oshawa, ON L1J 2W7**. Atendemos principalmente proyectos en la provincia de Ontario y en todo Canadá, aunque también podemos evaluar proyectos internacionales bajo condiciones específicas.\n\nSi su proyecto está en otra región, contáctenos y estudiaremos la viabilidad.',
        'Operamos desde Oshawa, Canadá, con cobertura en todo el territorio canadiense. Tenemos experiencia en proyectos comerciales y residenciales en la región de Ontario, y estamos abiertos a colaborar en otras provincias previo acuerdo.\n\n¿Tiene un proyecto en una ubicación específica sobre la que quiera consultarnos?',
        'Estamos ubicados estratégicamente en Oshawa, con fácil acceso a las principales vías de Ontario. Atendemos clientes en toda el área metropolitana y en el resto de Ontario.\n\nPara proyectos fuera de Ontario, podemos gestionar equipos locales o asesoría remota según el alcance.'
      ]
    },

    /* ── Plazos y tiempos ── */
    {
      section: 'soluciones',
      keys: [
        'tiempo', 'plazo', 'duración', 'duracion', 'cuánto tiempo', 'cuanto tiempo',
        'demora', 'tarda', 'cronograma', 'calendario', 'entrega', 'fecha',
        'cuándo terminan', 'cuando terminan', 'tiempo de ejecución', 'tiempo de ejecucion',
        'cuánto demora', 'cuanto demora', 'cuánto dura', 'cuanto dura',
        'semanas', 'meses', 'años', 'anos'
      ],
      answer: [
        'El plazo varía según el tipo y escala del proyecto:\n\n- Consultoría y estudios arquitectónicos: **2 a 6 semanas**\n- Diseño estructural y shop drawings: **4 a 10 semanas**\n- Proyectos completos (diseño + permisos): **3 a 9 meses**\n- Proyectos de gran escala con construcción: **1 a 2 años**\n\nSiempre entregamos un cronograma detallado en la propuesta técnica.',
        'Los tiempos de ejecución dependen de la complejidad del proyecto y de los trámites municipales. Como referencia general:\n\n- Planos de arquitectura e ingeniería: semanas\n- Shop drawings detallados: semanas\n- Gestión de permisos: de 2 a 6 meses (dependiendo del municipio)\n- Obra completa: meses a años\n\nCada propuesta incluye un cronograma con hitos y fechas de entrega parcial.',
        'No establecemos plazos genéricos porque cada obra tiene sus propias condiciones. Lo que sí garantizamos es un cronograma realista desde el inicio y comunicación proactiva ante cualquier variación.\n\nNuestra tasa de entrega a tiempo supera el **95%** en proyectos completados.'
      ]
    },

    /* ── Tecnología / herramientas ── */
    {
      section: 'servicios',
      keys: [
        'software', 'herramientas', 'programas', 'autocad', 'revit', 'sketchup',
        'bim', 'modelado', 'digital', 'tecnología', 'tecnologia', 'plataforma',
        'modelo 3d', 'rendering', 'visualización', 'visualizacion'
      ],
      answer: [
        'Trabajamos con las herramientas más avanzadas del sector: **AutoCAD, Revit, SketchUp y paquetes de renderizado** para entregar planos de alta calidad y modelos 3D que facilitan la toma de decisiones y la comunicación con los equipos de obra.\n\nTambién utilizamos software de cálculo estructural para garantizar la seguridad y eficiencia de nuestros diseños.',
        'Nuestro flujo de trabajo digital incluye modelado BIM (Revit) para coordinar disciplinas, elaboración de shop drawings precisos y renders fotorrealistas para presentación a clientes y autoridades.\n\nPodemos adaptarnos a los formatos que su equipo requiera.',
        'Contamos con licencias de los principales programas de diseño y cálculo. Si necesita un formato específico (DWG, PDF, RVT, etc.), lo entregamos sin problema.'
      ]
    },

    /* ── Certificaciones y normas ── */
    {
      section: 'servicios',
      keys: [
        'iso', 'certificación', 'certificacion', 'leed', 'sostenible',
        'sostenibilidad', 'certificado', 'norma', 'estandar', 'estándar',
        'ohsas', 'calidad', 'ambiental', 'green building', 'construccion verde',
        'construcción verde', 'norma tecnica', 'norma técnica', 'acreditado',
        'acreditacion', 'acreditación', 'cumple normas', 'que normas',
        'ontario building code', 'código de construcción'
      ],
      answer: [
        'Todos nuestros diseños y planos cumplen con las normativas locales, incluyendo el **Ontario Building Code (OBC)** y los códigos municipales aplicables. Además, seguimos estándares de calidad en nuestros procesos internos.\n\nAunque no estamos certificados formalmente en ISO, aplicamos buenas prácticas de gestión de calidad y seguridad en cada proyecto.',
        'Nos aseguramos de que cada proyecto cumpla con todas las regulaciones de construcción de Ontario y de los municipios correspondientes. Trabajamos con ingenieros y arquitectos registrados que firman los planos y memorias de cálculo.\n\nSi su proyecto requiere certificaciones específicas (LEED, etc.), podemos asesorarle y coordinar con especialistas externos.'
      ]
    },

    /* ── Contacto y atención humana ── */
    {
      showContactCard: true,
      section: 'contacto',
      keys: [
        'contacto', 'contactar', 'teléfono', 'telefono', 'email', 'correo',
        'escribir', 'llamar', 'asesor', 'humano', 'persona', 'hablar',
        'comunicar', 'whatsapp', 'número', 'numero', 'quiero hablar',
        'necesito hablar', 'me comunico', 'cómo los contacto', 'como los contacto',
        'quiero que me llamen', 'me llamen', 'agendar', 'cita', 'reunion', 'reunión',
        'pasame el numero', 'pásame el número', 'dame el numero', 'dame el número',
        'cual es el correo', 'cuál es el correo', 'algun contacto', 'algún contacto'
      ],
      answer: [
        'Puede contactarnos a través de:\n\n- **Teléfono / WhatsApp:** +1 (437) 830-2999\n- **Formulario** en la sección Contacto de esta página\n- **Correo electrónico** (puede solicitarlo por este chat)\n- **Visita en persona:** 489 Fairleigh Ave, Oshawa, ON L1J 2W7 (con cita previa)\n\nUn asesor se pondrá en contacto con usted en el menor tiempo posible.',
        'Las vías de contacto disponibles son:\n\n- Llamada o WhatsApp al **+1 (437) 830-2999**\n- El formulario de contacto en esta misma página\n- Correo electrónico\n\nSi prefiere, también puede solicitarnos que le llamemos en un horario específico y con gusto lo organizamos.',
        'Nuestro equipo comercial atiende por teléfono, WhatsApp, correo electrónico y formulario web. En horario de oficina la respuesta es inmediata; fuera de horario le respondemos al siguiente día hábil.\n\nNo dude en comunicarse, estamos para ayudarle.'
      ]
    },

    /* ── Proyectos / portafolio / ejemplos ── */
    {
      section: 'proyectos',
      keys: [
        'proyecto', 'proyectos', 'portafolio', 'ejemplos', 'obras', 'trabajos',
        'que han hecho', 'qué han hecho', 'referencias', 'casos', 'experiencia',
        'han construido', 'han diseñado', 'han diseñado', 'que han construido',
        'que proyectos', 'qué proyectos', 'mostrar', 'ver proyectos',
        'galeria', 'galería', 'logros', 'realizaciones', 'clientes anteriores',
        'proyectos anteriores', 'trabajos realizados', 'obra realizada'
      ],
      answer: [
        'Contamos con un portafolio diverso que incluye proyectos residenciales (viviendas unifamiliares y multifamiliares) y comerciales (oficinas, locales, edificios mixtos). Hemos realizado diseños arquitectónicos, cálculos estructurales, shop drawings y gestiones de permisos en la región de Ontario.\n\nPuede visitar la sección **Proyectos** de esta página para ver casos representativos. Si necesita referencias específicas, contáctenos y le compartiremos ejemplos similares a su proyecto.',
        'Hemos ejecutado proyectos para clientes particulares, desarrolladores y contratistas generales en Ontario. Nuestros trabajos incluyen desde planos de renovación hasta diseños completos para nuevas construcciones.\n\nEn la sección **Proyectos** encontrará una muestra de nuestra capacidad. ¿Le gustaría que un asesor le presente proyectos similares al suyo?',
        'Nuestro portafolio abarca el sector residencial y comercial, con énfasis en la calidad del diseño y la precisión de los planos. Trabajamos con constructores, arquitectos e ingenieros para entregar documentación técnica impecable.\n\nSi desea ver ejemplos concretos, póngase en contacto con nosotros y le enviaremos casos relevantes.'
      ]
    },

    /* ── Equipo / quiénes somos ── */
    {
      section: 'nosotros',
      keys: [
        'equipo', 'quienes son', 'quiénes son', 'quien está', 'quién está',
        'fundador', 'director', 'gerente', 'profesionales', 'ingenieros',
        'staff', 'personal', 'nosotros', 'empresa', 'sobre ustedes',
        'historia', 'años de experiencia', 'cuántos años', 'cuantos años',
        'cuando fundaron', 'cuándo fundaron', 'trayectoria', 'acerca de',
        'quienes trabajan', 'quiénes trabajan', 'especialistas'
      ],
      answer: [
        '**JPO Contracting Unlimited Inc.** es una firma constituida en Ontario desde **septiembre de 2022**. Nuestro equipo está liderado por **Jose Rafael Pardo Ojeda**, quien cuenta con amplia experiencia en el sector de la construcción y la ingeniería.\n\nTrabajamos con una red de profesionales colaboradores (arquitectos, ingenieros, dibujantes) para ofrecer un servicio integral y de alta calidad.',
        'Somos una empresa joven pero con sólidos conocimientos en arquitectura, ingeniería estructural y gestión de permisos. Nuestro fundador, Jose Rafael Pardo Ojeda, supervisa personalmente cada proyecto para garantizar la excelencia.\n\nPuede conocer más sobre nosotros en la sección **Nosotros** de este sitio.',
        'Contamos con un equipo multidisciplinario de profesionales registrados en Ontario. Nos especializamos en brindar soluciones técnicas ágiles y eficientes, adaptadas a las necesidades de cada cliente.\n\nNuestro compromiso es la satisfacción total del cliente y el cumplimiento de los plazos acordados.'
      ]
    },

    /* ── Proceso de trabajo / metodología ── */
    {
      section: 'soluciones',
      keys: [
        'proceso', 'metodología', 'metodologia', 'como trabajan', 'cómo trabajan',
        'pasos', 'etapas', 'fases', 'como es el proceso', 'cómo es el proceso',
        'que debo hacer', 'qué debo hacer', 'por donde empiezo', 'cómo empezamos',
        'como empezamos', 'flujo de trabajo', 'steps', 'procedimiento'
      ],
      answer: [
        'Nuestro proceso de trabajo se estructura en cuatro fases:\n\n1. **Diagnóstico y propuesta técnica** (reunión inicial, levantamiento de requerimientos).\n2. **Diseño y desarrollo** (planos arquitectónicos, estructurales, shop drawings).\n3. **Gestión de permisos** (tramitación ante municipios y autoridades).\n4. **Entrega y acompañamiento** (revisión final, ajustes y soporte postentrega).\n\nCada fase incluye puntos de revisión y aprobación con el cliente antes de avanzar.',
        'Trabajamos bajo una metodología de proyecto por fases con entregables definidos en cada etapa. El cliente tiene visibilidad y control sobre el avance en todo momento.\n\nDesde el primer contacto hasta la entrega final, contará con un gestor dedicado como punto de contacto único.',
        'El proceso comienza con una consulta inicial sin costo, donde evaluamos el proyecto y sus requerimientos. A partir de ahí elaboramos una propuesta técnica, firmamos el acuerdo y arrancamos con el diseño. El cliente aprueba cada etapa antes de pasar a la siguiente.'
      ]
    },

    /* ── Calidad y control ── */
    {
      section: 'soluciones',
      keys: [
        'calidad', 'control de calidad', 'aseguramiento', 'inspeccion', 'inspección',
        'revision', 'revisión', 'auditoría', 'auditoria', 'garantía', 'garantia',
        'errores', 'fallas', 'defectos', 'que pasa si falla', 'respaldan',
        'qué pasa si algo sale mal', 'que pasa si algo sale mal',
        'respaldo', 'responsabilidad', 'garantizan'
      ],
      answer: [
        'El control de calidad es fundamental en nuestro trabajo. Revisamos cada plano, cálculo y documento antes de entregarlo al cliente. Nos aseguramos de que todo cumpla con las normas locales y los requisitos del proyecto.\n\nSi durante la ejecución se detecta algún error imputable a nuestros planos, lo corregimos sin costo adicional.',
        'Contamos con un sistema de revisión interna que incluye verificaciones cruzadas entre disciplinas. Cada entregable pasa por una revisión técnica antes de ser enviado al cliente o a las autoridades.\n\nNuestro objetivo es minimizar errores y garantizar que la documentación esté impecable.',
        'La calidad no se negocia. Todos nuestros diseños y planos son revisados meticulosamente para evitar problemas en obra o en la tramitación de permisos.\n\nSi surge alguna observación, la atendemos de inmediato y sin cargos adicionales si es responsabilidad nuestra.'
      ]
    },

    /* ── Arquitectura ── */
    {
      section: 'servicios',
      keys: [
        'arquitectura', 'arquitecto', 'diseño arquitectonico', 'diseno arquitectonico',
        'planos de arquitectura', 'plantas', 'fachadas', 'cortes', 'render',
        'diseño de interiores', 'distribucion', 'espacios', 'conceptualizacion',
        'anteproyecto', 'proyecto arquitectonico'
      ],
      answer: [
        'Ofrecemos servicios de arquitectura que van desde la conceptualización hasta la elaboración de planos de construcción. Desarrollamos plantas, fachadas, cortes, renders 3D y toda la documentación necesaria para la obtención de permisos y la ejecución de la obra.\n\nTrabajamos tanto en proyectos residenciales (casas, apartamentos) como comerciales (oficinas, locales, edificios mixtos).',
        'Nuestro equipo de arquitectura crea diseños funcionales y estéticamente atractivos, adaptados a las necesidades del cliente y al entorno urbano. Entregamos planos detallados, renders fotorrealistas y toda la documentación gráfica requerida.\n\nSi necesita reformas, ampliaciones o un proyecto desde cero, podemos ayudarle.'
      ]
    },

    /* ── Ingeniería estructural ── */
    {
      section: 'servicios',
      keys: [
        'estructural', 'estructura', 'calculo', 'cálculo', 'diseño estructural',
        'diseno estructural', 'resistencia', 'carga', 'cargas', 'columnas',
        'vigas', 'losa', 'cimentacion', 'cimentación', 'fundaciones',
        'sismorresistente', 'sismico', 'sísmico', 'refuerzo estructural',
        'estudio de suelos', 'analisis estructural', 'análisis estructural'
      ],
      answer: [
        'La ingeniería estructural es uno de nuestros pilares. Realizamos el cálculo y diseño de estructuras de concreto, acero, madera y mampostería, cumpliendo con el Ontario Building Code y las normas aplicables.\n\nEntregamos memorias de cálculo, planos de refuerzo y detalles constructivos para garantizar la seguridad y durabilidad de la obra.',
        'Diseñamos estructuras eficientes y seguras para todo tipo de edificaciones. Nuestros ingenieros utilizan software especializado para el análisis de cargas, sismos y vientos.\n\nTambién ofrecemos revisión de diseños existentes y asesoría en refuerzos estructurales.'
      ]
    },

    /* ── Shop drawings ── */
    {
      section: 'servicios',
      keys: [
        'shop drawing', 'shop drawings', 'planos de taller', 'planos de fabricacion',
        'detalles constructivos', 'fabricacion', 'instalacion', 'steel detailing',
        'planos de montaje', 'planos de carpinteria', 'planos de herreria',
        'planos de estructuras metalicas', 'planos de acero'
      ],
      answer: [
        'Elaboramos **shop drawings** (planos de taller) detallados para la fabricación e instalación de elementos estructurales, arquitectónicos y de acabados. Trabajamos con precisión milimétrica para que los fabricantes y montajistas puedan ejecutar sin errores.\n\nEntregamos planos en formatos DWG, PDF y, si se requiere, modelos 3D.',
        'Nuestros shop drawings son la clave para una construcción sin contratiempos. Desarrollamos planos de fabricación para estructuras metálicas, carpintería, herrería, instalaciones y cualquier otro componente que necesite ser prefabricado.\n\nCoordinamos con los equipos de obra para asegurar la correcta interpretación de los detalles.'
      ]
    },

    /* ── Permisos y gestión municipal ── */
    {
      section: 'servicios',
      keys: [
        'permiso', 'permisos', 'licencia', 'licencias', 'building permit',
        'zoning', 'zonificación', 'municipio', 'ciudad', 'toronto', 'ontario',
        'tramite', 'trámite', 'gestion', 'gestión', 'aprobación', 'aprobacion',
        'regulaciones', 'normativas', 'departamento de construccion'
      ],
      answer: [
        'Gestionamos la obtención de permisos de construcción ante los municipios de Ontario, incluyendo la ciudad de Toronto. Preparamos toda la documentación técnica requerida (planos, memorias, formularios) y realizamos el seguimiento del expediente hasta la aprobación.\n\nNuestro conocimiento de los códigos y regulaciones locales agiliza el proceso y reduce el riesgo de rechazos.',
        'Ofrecemos un servicio integral de **permisos y gestión con autoridades**. Nos encargamos de:\n\n- Revisión de zonificación y usos de suelo\n- Elaboración de planos de presentación\n- Llenado de formularios municipales\n- Seguimiento y respuesta a observaciones\n- Obtención del building permit\n\nAsí usted puede concentrarse en la construcción mientras nosotros navegamos la burocracia.'
      ]
    },

    /* ── Proyectos comerciales ── */
    {
      section: 'servicios',
      keys: [
        'comercial', 'oficinas', 'locales', 'tiendas', 'restaurantes',
        'edificio comercial', 'centro comercial', 'hotel', 'hospitality',
        'espacio comercial', 'negocio', 'retail'
      ],
      answer: [
        'Tenemos experiencia en proyectos comerciales: oficinas, locales comerciales, restaurantes, hoteles y edificios mixtos. Ofrecemos diseño arquitectónico, cálculo estructural, shop drawings y gestión de permisos para este tipo de espacios.\n\nEntendemos las necesidades particulares de cada negocio y adaptamos los diseños para maximizar la funcionalidad y la imagen corporativa.'
      ]
    },

    /* ── Proyectos residenciales ── */
    {
      section: 'servicios',
      keys: [
        'residencial', 'vivienda', 'casa', 'apartamento', 'condominio',
        'propiedad horizontal', 'vivienda unifamiliar', 'vivienda multifamiliar',
        'renovacion', 'renovación', 'ampliacion', 'ampliación'
      ],
      answer: [
        'Para proyectos residenciales ofrecemos diseño arquitectónico y estructural, elaboración de planos, shop drawings y gestión de permisos. Atendemos desde casas particulares hasta conjuntos de apartamentos.\n\nTambién realizamos proyectos de renovación y ampliación, adaptando las estructuras existentes a las nuevas necesidades.'
      ]
    },

    /* ── Formas de pago / condiciones ── */
    {
      section: 'contacto',
      keys: [
        'pago', 'pagos', 'forma de pago', 'como pagan', 'cómo pagan',
        'cuotas', 'anticipo', 'adelanto', 'contrato', 'condiciones',
        'factura', 'facturacion', 'facturación', 'transferencia',
        'crédito', 'credito', 'financiamiento', 'financiación'
      ],
      answer: [
        'Las condiciones de pago se establecen en la propuesta y varían según el tipo de proyecto. En general trabajamos con:\n\n- Anticipo inicial al firmar el contrato (30% - 50%)\n- Pagos parciales por hitos o avance\n- Liquidación final a la entrega\n\nAceptamos transferencias bancarias (interac e-transfer, wire transfer) y cheques certificados. Emitimos facturas formales.',
        'Nuestras condiciones contractuales son claras y negociables. El esquema típico es un anticipo del 40%, pagos por avance y un pago final a la entrega. Para proyectos de consultoría corta puede ser un pago único.\n\nEn todos los casos emitimos factura y los términos quedan definidos en el contrato.'
      ]
    },

    /* ── Sostenibilidad / medio ambiente ── */
    {
      section: 'servicios',
      keys: [
        'sostenible', 'sostenibilidad', 'verde', 'ecológico', 'ecologico',
        'medio ambiente', 'impacto ambiental', 'huella de carbono',
        'eficiencia energética', 'eficiencia energetica', 'energia renovable',
        'paneles solares', 'construccion verde', 'construcción verde',
        'certificacion verde', 'certificación verde'
      ],
      answer: [
        'Incorporamos criterios de sostenibilidad en nuestros diseños siempre que el cliente lo solicite. Podemos orientar el proyecto hacia la eficiencia energética, el uso de materiales sostenibles y la optimización de recursos.\n\nSi busca certificación LEED o similar, podemos asesorarle y coordinar con especialistas externos para cumplir con los requisitos.'
      ]
    },

    /* ── Emergencias / daños / revisiones urgentes ── */
    {
      section: 'servicios',
      keys: [
        'emergencia', 'urgente', 'urgencia', 'daño', 'daños', 'colapso',
        'fisura', 'grieta', 'hundimiento', 'asentamiento', 'inundacion', 'inundación',
        'sismo', 'terremoto', 'patologia', 'patología', 'diagnostico urgente',
        'revisión urgente', 'mi edificio', 'problema estructural', 'falla'
      ],
      answer: [
        'Para emergencias estructurales o daños visibles, atendemos con carácter prioritario. Si su edificio presenta grietas, asentamientos o ha sufrido un evento como un sismo o inundación, contáctenos de inmediato por teléfono o WhatsApp.\n\nEnviamos un especialista para diagnóstico en el menor tiempo posible.',
        'Ofrecemos servicio de diagnóstico de urgencia para estructuras con posibles daños. El proceso incluye inspección visual, medición de deformaciones y emisión de un informe preliminar de seguridad.\n\nNo espere a que el problema avance: llámenos al **+1 (437) 830-2999**.'
      ]
    },

    /* ── Alianzas / proveedores ── */
    {
      section: 'contacto',
      keys: [
        'alianza', 'alianzas', 'proveedor', 'proveedores', 'subcontratista',
        'subcontratistas', 'partner', 'partners', 'asociado', 'asociados',
        'colaboracion', 'colaboración', 'trabajar con ustedes', 'ser proveedor',
        'quiero ser proveedor', 'registro de proveedores'
      ],
      answer: [
        'Estamos abiertos a colaborar con otros profesionales y empresas del sector. Si desea registrarse como proveedor o proponer una alianza, puede escribirnos a través del formulario de Contacto indicando su especialidad.\n\nEvaluamos la capacidad técnica y las referencias para establecer relaciones de trabajo mutuamente beneficiosas.'
      ]
    }

  ],

  /* ════════════════════════════════════════════════
     RESPUESTAS CUANDO EL BOT NO SABE RESPONDER
     Se elige UNA al azar cada vez.
  ════════════════════════════════════════════════ */
  fallback: [
    'Esa consulta requiere atención personalizada de nuestro equipo técnico. Le comparto el contacto directo para que lo resuelvan con gusto:',
    'No tengo información específica sobre eso en este momento, pero nuestro equipo puede ayudarle directamente:',
    'Para responderle con precisión sobre ese tema, lo mejor es hablar con uno de nuestros especialistas:',
    'Ese punto se sale de lo que tengo registrado aquí. Le dejo el contacto de nuestro equipo técnico:',
    'Quiero asegurarme de darle una respuesta correcta, así que lo mejor es conectarlo directamente con el equipo:',
    'No cuento con el detalle exacto para esa pregunta, pero puede comunicarse directamente así:',
    'Esa es una consulta más específica de la que puedo resolver por este canal. Le comparto el contacto del equipo:',
    'Para temas como este, nuestro equipo le dará una respuesta más completa. Aquí tiene el contacto directo:',
    'Aún no tengo esa información disponible, pero puede contactar directamente a nuestro equipo:',
    'Prefiero conectarlo con una persona del equipo para ese tema puntual. Aquí tiene su contacto:',
    'Hay preguntas que merecen una respuesta técnica directa. Le comparto el canal para hablar con un especialista:',
    'Para darle la información precisa que necesita, lo mejor es que uno de nuestros asesores le contacte:',
    'Ese nivel de detalle requiere que lo maneje directamente alguien de nuestro equipo. Aquí tiene cómo llegar a ellos:',
    'Mi función es orientarle, pero para este caso necesita hablar directamente con el equipo. Le comparto el contacto:',
    'Quiero que reciba la mejor respuesta posible, y para ese tema el equipo es quien mejor puede ayudarle:'
  ],

  /* ════════════════════════════════════════════════
     MENSAJES DE BIENVENIDA (20 variantes)
     Se elige uno al azar cada vez que el usuario
     abre el chat por primera vez en la sesión.
  ════════════════════════════════════════════════ */
  welcome: [
    'Gracias por comunicarse con JPO Contracting Unlimited Inc. Soy el asistente virtual, disponible para orientarle sobre nuestros servicios de arquitectura, ingeniería, shop drawings y permisos. Haga su consulta con confianza.',
    'Es un gusto atenderle. Soy el asistente virtual de JPO Contracting Unlimited Inc., especializado en servicios de construcción residencial y comercial. ¿En qué podemos ayudarle?',
    'Buen día. Soy el asistente virtual de JPO Contracting Unlimited Inc. Estoy aquí para orientarle sobre todo lo relacionado con nuestros servicios técnicos. No dude en preguntar.',
    'Hola. Este es el asistente virtual de JPO Contracting Unlimited Inc. Puede consultarme sobre diseño arquitectónico, ingeniería estructural, planos de taller o permisos de construcción.',
    'Le damos la bienvenida al canal de atención digital de JPO Contracting Unlimited Inc. Soy el asistente virtual y estoy disponible para guiarle. ¿En qué puedo ayudarle?',
    'Gracias por su visita. El asistente virtual de JPO Contracting Unlimited Inc. está a su disposición para orientarle sobre nuestros servicios. Haga su consulta, estaremos encantados de atenderle.',
    'Buenos días. Soy el asistente virtual de JPO Contracting Unlimited Inc. ¿Tiene alguna consulta sobre sus proyectos o nuestras capacidades técnicas?',
    'Bienvenida la oportunidad de atenderle. Soy el asistente virtual de JPO Contracting Unlimited Inc., aquí para guiarle sobre arquitectura, ingeniería y gestión de permisos.',
    'Hola, gracias por contactarnos. Este canal es atendido por el asistente virtual de JPO Contracting Unlimited Inc. Estoy aquí para orientarle. Proceda con su consulta.',
    'Qué bien contar con su visita. Soy el asistente virtual de JPO Contracting Unlimited Inc. y estoy aquí para orientarle sobre nuestros servicios de construcción y diseño.',
    'Buen día, gracias por comunicarse. El asistente virtual de JPO Contracting Unlimited Inc. está disponible. Puede consultar sobre servicios, proyectos o capacidades técnicas.',
    'Hola. Asistente virtual de JPO Contracting Unlimited Inc. al servicio. Estoy aquí para orientarle sobre arquitectura, ingeniería estructural y permisos. Adelante con su consulta.',
    'Gracias por visitarnos. Este es el asistente virtual de JPO Contracting Unlimited Inc., disponible para resolver sus dudas técnicas o comerciales.',
    'Le saludamos desde el canal digital de JPO Contracting Unlimited Inc. El asistente virtual está aquí para orientarle. No dude en realizar su consulta.',
    'Hola. El asistente virtual de JPO Contracting Unlimited Inc. tiene el agrado de atenderle. Estoy aquí para orientarle sobre servicios de construcción y tecnología.',
    'Gracias por elegir JPO Contracting Unlimited Inc. Soy el asistente virtual y estoy aquí para orientarle en todo lo que necesite sobre nuestros proyectos y soluciones técnicas.',
    'Es un placer atenderle. Asistente virtual de JPO Contracting Unlimited Inc. a su disposición para orientarle sobre nuestros servicios de arquitectura, ingeniería y permisos.',
    'Hola, bienvenida su consulta. Soy el asistente virtual de JPO Contracting Unlimited Inc., aquí para orientarle sobre servicios, proyectos y capacidades. Adelante.',
    'Qué gusto contar con su contacto. El asistente virtual de JPO Contracting Unlimited Inc. está disponible para orientarle. Haga su consulta y con gusto le atenderemos.',
    'Gracias por comunicarse con JPO Contracting Unlimited Inc. Soy el asistente virtual de la firma y estoy disponible para orientarle sobre cualquier servicio o proyecto.'
  ],

  /* ════════════════════════════════════════════════
     MENSAJES AL CAMBIAR DE MODO
  ════════════════════════════════════════════════ */
  modeIntros: {
    empresa: [
      'Volvemos al modo de consulta sobre la empresa. Pregúnteme sobre servicios, proyectos, arquitectura, ingeniería o cualquier aspecto de JPO Contracting Unlimited Inc.',
      'Perfecto. Continuamos con información sobre la empresa y nuestros servicios. ¿Qué desea saber?',
      'De vuelta al modo empresa. Puedo responderle sobre servicios, experiencia, cobertura geográfica, permisos y más.'
    ],
    general: [
      'Modo conversación general activado. Ahora puede preguntarme sobre tecnología, construcción, diseño o cualquier otro tema de interés.',
      'Cambiamos a modo general. Puede consultar sobre temas técnicos, tendencias del sector o cualquier otro asunto que le interese.',
      'Entramos al modo de conversación abierta. Tiene la palabra sobre el tema que prefiera.'
    ]
  },

  /* ════════════════════════════════════════════════
     CONTACTO REAL DE LA EMPRESA
  ════════════════════════════════════════════════ */
  contact: {
    name: 'JPO Contracting Unlimited Inc.',
    phoneDisplay: '+1 (437) 830-2999',
    phoneHref: '+14378302999',
    email: 'official@jpocontracting.com'
  }

};