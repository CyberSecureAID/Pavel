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
      keys: [
        'servicio', 'servicios', 'ofrecen', 'hacen', 'trabajan',
        'que hacen', 'qué hacen', 'oferta', 'soluciones', 'pueden ayudar',
        'en que ayudan', 'cómo ayudan', 'como ayudan', 'qué ofrecen',
        'que ofrecen', 'a qué se dedican', 'a que se dedican',
        'actividades', 'especialidades', 'capacidades', 'portafolio de servicios'
      ],
      answer: [
        'Ofrecemos cuatro líneas de servicio principales:\n\n- **Ingeniería Estructural**: diseño y cálculo con estándares internacionales\n- **Gestión de Proyectos**: planificación, cronogramas y supervisión integral\n- **Tecnología BIM**: modelado digital y monitoreo en tiempo real\n- **Garantía y Soporte**: acompañamiento postentrega y mantenimiento preventivo\n\nCuenta con nuestro equipo para orientarle sobre la solución más adecuada a su proyecto.',
        'Nuestra oferta de servicios abarca cuatro grandes áreas:\n\n- Ingeniería Estructural\n- Gestión Integral de Proyectos\n- Tecnología BIM y modelado digital\n- Soporte técnico postentrega\n\nCada proyecto recibe atención personalizada desde la consulta inicial hasta la entrega final. ¿Desea información sobre alguna de estas áreas en particular?',
        'Trabajamos en cuatro frentes principales para llevar cada proyecto desde la concepción hasta la operación:\n\n- Diseño y cálculo estructural\n- Supervisión y gestión de obras\n- Modelado BIM y seguimiento digital\n- Mantenimiento y soporte tras la entrega\n\nPodemos asesorarle sin compromiso para identificar el servicio que mejor se adapta a sus necesidades.',
        'Somos una firma especializada en ingeniería y construcción. Nuestros servicios principales son ingeniería estructural, gestión de proyectos, tecnología BIM y soporte postentrega. ¿Le gustaría conocer más detalle sobre alguno de ellos?'
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
        'Nuestro horario de atención es de **lunes a viernes de 8:00 a.m. a 6:00 p.m.** (hora de Colombia). Los sábados atendemos de 9:00 a.m. a 1:00 p.m. para consultas puntuales.\n\nFuera de ese horario puede dejarnos un mensaje a través del formulario de contacto y le responderemos en el siguiente día hábil.',
        'Atendemos de **lunes a viernes de 8:00 a.m. a 6:00 p.m.** (COT - UTC-5). Los fines de semana solo atendemos emergencias de proyectos en ejecución.\n\nSi desea agendar una consulta, puede hacerlo en cualquier momento por este chat o por el formulario de contacto.',
        'Nuestro equipo está disponible de lunes a viernes, de 8 de la mañana a 6 de la tarde. El sábado hay atención limitada hasta el mediodía.\n\nPara consultas urgentes fuera de horario, puede escribirnos y un asesor se comunicará con usted al inicio del próximo día hábil.',
        'El horario regular de oficina es **lunes a viernes de 8:00 a 18:00 horas**. Si necesita una cita o llamada, puede solicitarla por el formulario y le confirmamos disponibilidad el mismo día.'
      ]
    },

    /* ── Cotización / propuesta ── */
    {
      keys: [
        'propuesta', 'cotización', 'cotizacion', 'cotizar', 'presupuesto',
        'solicitar', 'costo', 'precio', 'cuánto cuesta', 'cuanto cuesta',
        'valor', 'tarifa', 'tarifas', 'cuánto cobran', 'cuanto cobran',
        'cuánto vale', 'cuanto vale', 'honorarios', 'inversión', 'inversion',
        'pagar', 'cobro', 'cobran', 'paquete', 'plan', 'precio por metro',
        'costo de proyecto', 'cuánto me cuesta', 'cuanto me cuesta'
      ],
      answer: [
        'Para elaborar una propuesta técnica necesitamos conocer los alcances de su proyecto. Le recomendamos:\n\n1. Completar el formulario en la sección **Contacto** de esta página\n2. O comunicarse directamente con nuestro equipo comercial para agendar una consulta sin costo\n\nAsí podemos preparar una propuesta ajustada a su caso real.',
        'El costo de cada proyecto depende de su escala, ubicación y especialidades involucradas. Para entregarle un presupuesto preciso necesitamos un breve diagnóstico previo.\n\nPuede iniciar el proceso completando el formulario de contacto o escribiéndonos directamente. **La primera consulta no tiene costo**.',
        'No manejamos tarifas estándar porque cada proyecto es diferente. Lo que sí le garantizamos es una propuesta clara, desglosada y sin cobros ocultos.\n\nContacte a nuestro equipo para recibir una propuesta técnica personalizada.',
        'Los honorarios varían según el tipo de servicio, el tamaño del proyecto y las especialidades requeridas. Para proyectos de consultoría puntual trabajamos por horas; para proyectos completos elaboramos una propuesta global.\n\nEscríbanos o llámenos y con gusto le preparamos una estimación preliminar sin compromiso.'
      ]
    },

    /* ── Cobertura geográfica ── */
    {
      keys: [
        'país', 'pais', 'países', 'paises', 'donde', 'dónde', 'cobertura',
        'operan', 'presencia', 'internacional', 'latinoamerica', 'latinoamérica',
        'region', 'región', 'colombia', 'mexico', 'méxico', 'peru', 'perú',
        'chile', 'argentina', 'brasil', 'ecuador', 'panama', 'panamá',
        'fuera de colombia', 'otro pais', 'otro país', 'trabajan en',
        'tienen oficina', 'tienen presencia', 'están en', 'estan en'
      ],
      answer: [
        'Tenemos presencia activa en más de 8 países de América Latina, incluyendo Colombia, México, Perú, Chile, Argentina, Brasil, Ecuador y Panamá.\n\nCada proyecto cuenta con supervisión local y coordinación centralizada desde nuestra sede principal.',
        'Operamos en toda la región latinoamericana. Actualmente ejecutamos proyectos en Colombia, México, Perú, Chile, Argentina, Brasil, Ecuador y Panamá, con equipos locales en cada mercado.\n\n¿Tiene un proyecto en una ubicación específica sobre la que quiera consultarnos?',
        'Nuestra red de operaciones abarca más de 8 países de América Latina. Contamos con representación local y protocolos adaptados a la normativa de cada territorio.\n\nSi su proyecto está fuera de estos mercados, igualmente podemos evaluar la viabilidad de participar.',
        'Sí, trabajamos a nivel internacional. Nuestra sede está en Toronto, Canadá, y nuestros proyectos se desarrollan principalmente en América Latina. Hemos completado obras en Colombia, México, Perú, Chile, Argentina y otros países de la región.'
      ]
    },

    /* ── Plazos y tiempos ── */
    {
      keys: [
        'tiempo', 'plazo', 'duración', 'duracion', 'cuánto tiempo', 'cuanto tiempo',
        'demora', 'tarda', 'cronograma', 'calendario', 'entrega', 'fecha',
        'cuándo terminan', 'cuando terminan', 'tiempo de ejecución', 'tiempo de ejecucion',
        'cuánto demora', 'cuanto demora', 'cuánto dura', 'cuanto dura',
        'semanas', 'meses', 'años', 'anos'
      ],
      answer: [
        'El plazo varía según el tipo y escala del proyecto:\n\n- Consultoría y estudios: **2 a 8 semanas**\n- Proyectos medianos (hasta 5.000 m²): **6 a 12 meses**\n- Proyectos grandes de infraestructura o industrial: **1 a 3 años**\n\nSiempre entregamos un cronograma detallado en la propuesta técnica.',
        'Los tiempos de ejecución dependen de la complejidad del proyecto. Como referencia general:\n\n- Estudios y consultoría: semanas\n- Edificaciones de mediana escala: meses\n- Infraestructura o proyectos industriales: uno a tres años\n\nCada propuesta incluye un cronograma con hitos, fechas de entrega parcial y mecanismos de seguimiento.',
        'No establecemos plazos genéricos porque cada obra tiene sus propias condiciones. Lo que sí garantizamos es un cronograma realista desde el inicio y comunicación proactiva ante cualquier variación.\n\nNuestra tasa de entrega a tiempo supera el **98%** en proyectos completados.',
        'El tiempo de ejecución depende del alcance. Una consultoría puede resolverse en pocas semanas; un proyecto de infraestructura mayor puede tomar entre uno y tres años. Siempre acordamos fechas concretas en el contrato y las respetamos.'
      ]
    },

    /* ── Tecnología BIM ── */
    {
      keys: [
        'bim', 'modelado', 'digital', 'tecnología', 'tecnologia', 'software',
        'plataforma', 'herramientas', 'modelo 3d', 'modelo tridimensional',
        'coordinacion digital', 'coordinación digital', 'monitoreo', 'seguimiento digital',
        'visualizacion', 'visualización', 'revit', 'navisworks', 'autodesk',
        'maqueta digital', 'gemelo digital', 'clash detection', 'bim 360'
      ],
      answer: [
        'Utilizamos **Modelado BIM 360** en todos nuestros proyectos de mediana y gran escala. Esto nos permite:\n\n- Detectar conflictos entre disciplinas antes de la obra\n- Reducir imprevistos y retrabajos entre un 30 y un 40 por ciento\n- Ofrecer seguimiento digital en tiempo real al cliente\n\nTambién integramos IoT y sistemas de automatización en proyectos de infraestructura inteligente.',
        'El modelado BIM es una de nuestras capacidades diferenciadas. Trabajamos con modelos federados que integran estructura, arquitectura, instalaciones mecánicas y eléctricas en un solo entorno digital.\n\nEsto reduce errores en obra, optimiza costos y le da al cliente visibilidad completa sobre el avance del proyecto.',
        'Nuestro enfoque BIM va más allá del modelado 3D. Incluye gestión de información a lo largo del ciclo de vida del proyecto: desde el diseño hasta la operación y el mantenimiento de la edificación.',
        'Trabajamos con herramientas BIM de última generación, incluyendo Revit, Navisworks y la plataforma BIM 360 de Autodesk. El cliente puede acceder a dashboards de seguimiento en tiempo real sin necesidad de instalar software especializado.'
      ]
    },

    /* ── Certificaciones y normas ── */
    {
      keys: [
        'iso', 'certificación', 'certificacion', 'leed', 'sostenible',
        'sostenibilidad', 'certificado', 'norma', 'estandar', 'estándar',
        'ohsas', 'calidad', 'ambiental', 'green building', 'construccion verde',
        'construcción verde', 'norma tecnica', 'norma técnica', 'acreditado',
        'acreditacion', 'acreditación', 'cumple normas', 'que normas'
      ],
      answer: [
        'Contamos con las siguientes certificaciones:\n\n- **ISO 14001**: Gestión ambiental\n- **ISO 9001**: Calidad\n- **LEED**: Construcción sostenible\n- **OHSAS 18001**: Seguridad y salud\n\nNuestros proyectos cumplen con los más altos estándares internacionales de calidad y sostenibilidad.',
        'Trabajamos bajo un marco de certificaciones internacionales que garantizan calidad, seguridad ambiental y condiciones laborales adecuadas en cada proyecto:\n\n- ISO 9001 e ISO 14001\n- LEED para proyectos de construcción sostenible\n- OHSAS 18001 para seguridad en obra\n\nEstas certificaciones no son solo formales: definen nuestros protocolos internos de trabajo.',
        'La certificación no es un adorno, es nuestra forma de operar. Mantenemos activas las certificaciones **ISO 9001, ISO 14001, LEED y OHSAS 18001**, auditadas de forma periódica por entes externos.',
        'Sí, todas nuestras operaciones están certificadas. Las principales: ISO 9001 (calidad), ISO 14001 (gestión ambiental) y LEED para proyectos de edificación sostenible. Contamos también con OHSAS 18001 en materia de seguridad ocupacional.'
      ]
    },

    /* ── Contacto y atención humana ── */
    {
      keys: [
        'contacto', 'contactar', 'teléfono', 'telefono', 'email', 'correo',
        'escribir', 'llamar', 'asesor', 'humano', 'persona', 'hablar',
        'comunicar', 'whatsapp', 'número', 'numero', 'quiero hablar',
        'necesito hablar', 'me comunico', 'cómo los contacto', 'como los contacto',
        'quiero que me llamen', 'me llamen', 'agendar', 'cita', 'reunion', 'reunión'
      ],
      answer: [
        'Puede contactarnos a través de:\n\n- **Formulario** en la sección Contacto de esta página\n- **WhatsApp** mediante el botón verde en la esquina inferior\n- **Correo electrónico** de nuestro equipo comercial\n\nUn asesor se pondrá en contacto con usted en el menor tiempo posible.',
        'Las vías de contacto disponibles son:\n\n- El formulario de contacto en esta misma página\n- WhatsApp (botón en la esquina inferior derecha de la pantalla)\n- Llamada telefónica directa\n\nSi prefiere, también puede solicitarnos que le llamemos en un horario específico y con gusto lo organizamos.',
        'Nuestro equipo comercial atiende por teléfono, WhatsApp, correo electrónico y formulario web. En horario de oficina la respuesta es inmediata; fuera de horario le respondemos al siguiente día hábil.',
        'Para hablar directamente con un asesor, use el botón de WhatsApp en la esquina inferior de la pantalla o déjenos sus datos en el formulario de Contacto. Agendamos llamadas de asesoría sin costo ni compromiso.'
      ]
    },

    /* ── Proyectos / portafolio / ejemplos ── */
    {
      keys: [
        'proyecto', 'proyectos', 'portafolio', 'ejemplos', 'obras', 'trabajos',
        'que han hecho', 'qué han hecho', 'referencias', 'casos', 'experiencia',
        'han construido', 'han diseñado', 'han diseñado', 'que han construido',
        'que proyectos', 'qué proyectos', 'mostrar', 'ver proyectos',
        'galeria', 'galería', 'logros', 'realizaciones', 'clientes anteriores',
        'proyectos anteriores', 'trabajos realizados', 'obra realizada'
      ],
      answer: [
        'Contamos con un portafolio diverso que incluye:\n\n- Edificaciones residenciales y corporativas\n- Infraestructura vial y puentes\n- Proyectos industriales y logísticos\n- Intervenciones en patrimonio y refuerzo estructural\n\nPuede visitar la sección **Proyectos** de esta página para ver casos representativos con fichas técnicas detalladas.',
        'Hemos ejecutado proyectos en más de 8 países de América Latina, con obras que van desde edificaciones de mediana escala hasta infraestructura de gran complejidad.\n\nEn la sección **Proyectos** de este sitio encontrará ejemplos documentados con fotografías, datos técnicos y resultados medibles.',
        'Nuestro portafolio abarca sectores como construcción residencial, edificaciones corporativas, infraestructura pública y proyectos industriales. Cada caso incluye documentación BIM y métricas de desempeño.\n\n¿Le gustaría que un asesor le presente proyectos similares al suyo para que tenga una referencia concreta?',
        'Tenemos referencias en residencial, comercial, industrial e infraestructura. Si me indica el tipo de proyecto que le interesa, puedo orientarle hacia los casos más relevantes de nuestro portafolio.'
      ]
    },

    /* ── Equipo / quiénes somos ── */
    {
      keys: [
        'equipo', 'quienes son', 'quiénes son', 'quien está', 'quién está',
        'fundador', 'director', 'gerente', 'profesionales', 'ingenieros',
        'staff', 'personal', 'nosotros', 'empresa', 'sobre ustedes',
        'historia', 'años de experiencia', 'cuántos años', 'cuantos años',
        'cuando fundaron', 'cuándo fundaron', 'trayectoria', 'acerca de',
        'quienes trabajan', 'quiénes trabajan', 'especialistas'
      ],
      answer: [
        'Somos una firma de ingeniería y construcción con más de 15 años de experiencia en el mercado latinoamericano. Nuestro equipo está formado por ingenieros estructurales, arquitectos, gestores de proyectos y especialistas BIM certificados.\n\nNos diferencia la combinación de rigor técnico, tecnología de punta y un servicio orientado al cliente.',
        'El equipo de Maxcon está integrado por profesionales certificados en ingeniería estructural, gestión de proyectos (PMI/PMP) y modelado BIM. Contamos con más de 150 profesionales activos distribuidos en nuestros diferentes mercados.',
        'Somos una empresa fundada en Canadá con operaciones en América Latina. Nuestro equipo multidisciplinario combina la experiencia de ingenieros senior con las herramientas digitales más avanzadas del sector.\n\nPuede conocernos mejor en la sección **Nosotros** de este sitio.',
        'Contamos con un equipo de más de 150 profesionales: ingenieros estructurales, gestores de obra, especialistas en BIM, auditores de calidad y personal de soporte técnico. Cada proyecto es asignado a un gestor dedicado como punto de contacto único.'
      ]
    },

    /* ── Proceso de trabajo / metodología ── */
    {
      keys: [
        'proceso', 'metodología', 'metodologia', 'como trabajan', 'cómo trabajan',
        'pasos', 'etapas', 'fases', 'como es el proceso', 'cómo es el proceso',
        'que debo hacer', 'qué debo hacer', 'por donde empiezo', 'cómo empezamos',
        'como empezamos', 'flujo de trabajo', 'steps', 'procedimiento'
      ],
      answer: [
        'Nuestro proceso de trabajo se estructura en cuatro fases:\n\n1. **Diagnóstico y propuesta técnica**\n2. **Diseño y modelado BIM**\n3. **Ejecución y supervisión en obra**\n4. **Entrega y soporte postentrega**\n\nCada fase incluye puntos de revisión y aprobación con el cliente antes de avanzar.',
        'Trabajamos bajo una metodología de proyecto por fases con entregables definidos en cada etapa. El cliente tiene visibilidad y control sobre el avance en todo momento a través de reportes y acceso a la plataforma digital del proyecto.',
        'Desde el primer contacto hasta la entrega final, el cliente cuenta con un gestor de proyecto dedicado como punto de contacto único. Eso elimina la confusión de interlocutores múltiples y garantiza coherencia en la comunicación.',
        'El proceso comienza con una consulta inicial sin costo, donde evaluamos el proyecto y sus requerimientos. A partir de ahí elaboramos una propuesta técnica, firmamos el acuerdo y arrancamos con el diseño. El cliente aprueba cada etapa antes de pasar a la siguiente.'
      ]
    },

    /* ── Calidad y control ── */
    {
      keys: [
        'calidad', 'control de calidad', 'aseguramiento', 'inspeccion', 'inspección',
        'revision', 'revisión', 'auditoría', 'auditoria', 'garantía', 'garantia',
        'errores', 'fallas', 'defectos', 'que pasa si falla', 'respaldan',
        'qué pasa si algo sale mal', 'que pasa si algo sale mal',
        'respaldo', 'responsabilidad', 'garantizan'
      ],
      answer: [
        'El control de calidad es transversal a todo nuestro proceso: desde la verificación de materiales hasta las inspecciones de obra y los ensayos de resistencia. Operamos bajo los estándares **ISO 9001**.',
        'Contamos con un sistema de aseguramiento de calidad que incluye listas de verificación por etapa, ensayos de laboratorio certificados y auditorías periódicas de proceso.\n\nCada entregable pasa por revisión técnica interna antes de presentarse al cliente.',
        'La calidad no se inspecciona al final, se construye desde el diseño. Nuestros procesos incluyen revisiones en etapas tempranas para detectar y corregir desviaciones antes de que lleguen a obra.',
        'Todos nuestros proyectos incluyen un período de garantía postentrega. Si durante ese período se detecta alguna no conformidad técnica atribuible a nuestro trabajo, la atendemos sin costo adicional.'
      ]
    },

    /* ── Ingeniería estructural ── */
    {
      keys: [
        'estructural', 'estructura', 'calculo', 'cálculo', 'diseño estructural',
        'diseno estructural', 'resistencia', 'carga', 'cargas', 'columnas',
        'vigas', 'losa', 'cimentacion', 'cimentación', 'fundaciones',
        'sismorresistente', 'sismico', 'sísmico', 'refuerzo estructural',
        'estudio de suelos', 'analisis estructural', 'análisis estructural'
      ],
      answer: [
        'La ingeniería estructural es nuestra especialidad central. Realizamos:\n\n- Análisis y cálculo estructural bajo normativas internacionales\n- Diseño sismorresistente y adaptado a las condiciones del suelo\n- Refuerzo y rehabilitación de estructuras existentes\n- Revisión y validación de diseños de terceros\n\nTodos los proyectos son firmados por ingenieros certificados.',
        'En diseño estructural trabajamos con análisis de cargas gravitacionales, sísmicas y de viento, aplicando las normas vigentes del país donde se ubica el proyecto. Usamos software especializado y modelos BIM integrados.',
        'Desde cimentaciones hasta cubierta, nuestros ingenieros estructurales cubren todo el ciclo de diseño: estudio de suelos, memorias de cálculo, planos constructivos y acompañamiento en obra para verificar que la ejecución corresponda al diseño.',
        'Realizamos el diseño estructural completo: análisis sísmico, diseño de concreto reforzado y estructura metálica, cimentaciones y revisión de integridad estructural para edificaciones existentes. Todo respaldado por nuestras certificaciones ISO.'
      ]
    },

    /* ── Gestión de proyectos / supervisión ── */
    {
      keys: [
        'gestion', 'gestión', 'supervision', 'supervisión', 'gerencia de proyecto',
        'director de proyecto', 'residente', 'interventoría', 'interventoria',
        'control de obra', 'seguimiento de obra', 'control de avance',
        'project management', 'pmi', 'pmp', 'scrum', 'agile'
      ],
      answer: [
        'Nuestro servicio de gestión de proyectos abarca:\n\n- Planificación y cronograma de obra (ruta crítica)\n- Control de presupuesto y flujo de caja\n- Coordinación de contratistas y proveedores\n- Reportes periódicos de avance para el cliente\n- Gestión de riesgos y planes de contingencia',
        'Aplicamos metodologías PMI/PMP adaptadas a proyectos de construcción e infraestructura. Cada proyecto tiene un gestor asignado que opera como punto único de contacto entre el cliente y todos los equipos de ejecución.',
        'La gestión de proyectos en Maxcon incluye el control de tres variables clave: alcance, costo y plazo. Trabajamos con herramientas digitales de seguimiento que el cliente puede consultar en tiempo real.',
        'Actuamos como Gerencia de Proyecto o como Interventoría, según la necesidad del cliente. En ambos casos nuestra responsabilidad es garantizar que la obra se ejecute según el diseño, el presupuesto y el cronograma acordados.'
      ]
    },

    /* ── Infraestructura y obras civiles ── */
    {
      keys: [
        'infraestructura', 'obra civil', 'obras civiles', 'puente', 'puentes',
        'carretera', 'vía', 'via', 'vias', 'vías', 'pavimento', 'alcantarillado',
        'acueducto', 'obra publica', 'obra pública', 'red vial',
        'urbanismo', 'obras de urbanismo', 'infraestructura vial'
      ],
      answer: [
        'Tenemos amplia experiencia en infraestructura civil: diseño y supervisión de vías, puentes, redes de servicios públicos y obras de urbanismo. Aplicamos tecnología BIM también a este tipo de proyectos para mejorar la coordinación y reducir imprevistos.',
        'En el segmento de infraestructura trabajamos con clientes públicos y privados en proyectos viales, hidráulicos y de servicios públicos. Contamos con experiencia en licitaciones y contratos estatales en varios países de América Latina.',
        'Diseñamos, supervisamos y gestionamos proyectos de infraestructura: carreteras, puentes, redes de acueducto y alcantarillado, y obras de urbanismo. Cada proyecto incluye estudios previos, diseño detallado y acompañamiento en la ejecución.'
      ]
    },

    /* ── Sector residencial ── */
    {
      keys: [
        'residencial', 'vivienda', 'apartamento', 'casa', 'edificio residencial',
        'conjunto', 'unidad habitacional', 'propiedad horizontal',
        'constructora', 'desarrollador', 'urbanizacion', 'urbanización',
        'multifamiliar', 'unifamiliar'
      ],
      answer: [
        'Tenemos experiencia en proyectos residenciales de todos los tipos: desde viviendas unifamiliares hasta conjuntos multifamiliares de gran escala. Participamos desde el diseño estructural hasta la supervisión de obra y la entrega final.',
        'En el sector residencial, nuestros servicios incluyen el diseño estructural, la gestión de licencias, la coordinación con las entidades municipales y la supervisión técnica de la construcción. Trabajamos con constructoras, promotoras y particulares.',
        'Diseñamos y supervisamos proyectos residenciales garantizando cumplimiento normativo, eficiencia estructural y calidad de construcción. Si tiene un proyecto habitacional en mente, con gusto le preparamos una propuesta.'
      ]
    },

    /* ── Sector comercial y corporativo ── */
    {
      keys: [
        'edificio', 'edificios', 'corporativo', 'oficinas', 'comercial',
        'centro comercial', 'hotel', 'hospitality', 'bodega', 'nave industrial',
        'parque industrial', 'logístico', 'logistico', 'galpón', 'galpon'
      ],
      answer: [
        'Ejecutamos proyectos de edificaciones corporativas y comerciales con énfasis en eficiencia estructural, flexibilidad de espacios y cumplimiento de los estándares de construcción sostenible.',
        'Nuestro portafolio en el sector comercial incluye edificios de oficinas, hoteles y centros comerciales. Cada proyecto se diseña para maximizar la eficiencia del espacio y minimizar los costos operativos a largo plazo.',
        'Para proyectos corporativos y comerciales ofrecemos diseño integral: estructura, fachada, sistemas MEP y gestión BIM desde la etapa de anteproyecto. Esto reduce los cambios en obra y garantiza mayor control del presupuesto.'
      ]
    },

    /* ── Formas de pago / condiciones contractuales ── */
    {
      keys: [
        'pago', 'pagos', 'forma de pago', 'como pagan', 'cómo pagan',
        'cuotas', 'anticipo', 'adelanto', 'contrato', 'condiciones',
        'factura', 'facturacion', 'facturación', 'transferencia',
        'crédito', 'credito', 'financiamiento', 'financiación', 'fiducia'
      ],
      answer: [
        'Las condiciones de pago se establecen en la propuesta y varían según el tipo de proyecto. En general trabajamos con:\n\n- Anticipo inicial al firmar el contrato\n- Pagos parciales por hitos o avance de obra\n- Liquidación final a la entrega\n\nAceptamos transferencias bancarias nacionales e internacionales.',
        'Nuestras condiciones contractuales son claras y negociables. El esquema típico es un anticipo del 30%, pagos por avance y un pago final a la entrega. Para proyectos de consultoría corta puede ser un pago único.\n\nEn todos los casos emitimos factura y los términos quedan definidos en el contrato.',
        'Definimos las condiciones de pago caso a caso, pero siempre con un contrato formal que las especifica claramente. No trabajamos sin contrato. Para proyectos de gran escala también operamos con fiducias de administración para mayor transparencia.'
      ]
    },

    /* ── Sostenibilidad / medio ambiente ── */
    {
      keys: [
        'sostenible', 'sostenibilidad', 'verde', 'ecológico', 'ecologico',
        'medio ambiente', 'impacto ambiental', 'huella de carbono',
        'eficiencia energética', 'eficiencia energetica', 'energia renovable',
        'paneles solares', 'construccion verde', 'construcción verde',
        'certificacion verde', 'certificación verde', 'bioconstruccion'
      ],
      answer: [
        'La sostenibilidad es parte integral de nuestro enfoque. Tenemos certificación **LEED** y aplicamos criterios de eficiencia energética, manejo de aguas y materiales sostenibles en todos los proyectos que lo requieren.',
        'Diseñamos edificaciones con criterios de construcción sostenible: envolventes de alta eficiencia térmica, sistemas de aprovechamiento de agua lluvia, iluminación natural optimizada y reducción de la huella de carbono en la cadena constructiva.',
        'Para clientes que buscan certificación LEED o similares, ofrecemos el proceso completo: evaluación preliminar, diseño orientado a puntos de crédito, documentación técnica y acompañamiento durante la certificación.'
      ]
    },

    /* ── Emergencias / daños / patologías ── */
    {
      keys: [
        'emergencia', 'urgente', 'urgencia', 'daño', 'daños', 'colapso',
        'fisura', 'grieta', 'hundimiento', 'asentamiento', 'inundacion', 'inundación',
        'sismo', 'terremoto', 'patologia', 'patología', 'diagnostico urgente',
        'revisión urgente', 'mi edificio', 'problema estructural', 'falla'
      ],
      answer: [
        'Para emergencias estructurales atendemos con carácter prioritario. Si su edificación presenta grietas, asentamientos, daños visibles o sufrió un evento como un sismo o inundación, contáctenos de inmediato por WhatsApp o teléfono.\n\nEnviamos un especialista para diagnóstico en el menor tiempo posible.',
        'Ofrecemos servicio de diagnóstico de urgencia para estructuras con posibles daños. El proceso incluye inspección visual, medición de deformaciones y emisión de un informe preliminar de seguridad.\n\nNo espere a que el problema avance: contáctenos por el botón de WhatsApp.',
        'Sí, atendemos emergencias. Si tiene un problema estructural que requiere atención inmediata, comuníquese con nosotros por teléfono o WhatsApp. Nuestro equipo de guardia coordina la respuesta para casos críticos.'
      ]
    },

    /* ── Alianzas / proveedores / subcontratistas ── */
    {
      keys: [
        'alianza', 'alianzas', 'proveedor', 'proveedores', 'subcontratista',
        'subcontratistas', 'partner', 'partners', 'asociado', 'asociados',
        'colaboracion', 'colaboración', 'trabajar con ustedes', 'ser proveedor',
        'quiero ser proveedor', 'registro de proveedores'
      ],
      answer: [
        'Trabajamos con una red calificada de proveedores y subcontratistas en cada uno de los países donde operamos. Si desea registrarse como proveedor o explorar una alianza, puede escribirnos a través del formulario de Contacto indicando su especialidad.',
        'Estamos abiertos a alianzas estratégicas con firmas de ingeniería, constructoras, proveedores de materiales y empresas de tecnología. El proceso de calificación incluye revisión de capacidad técnica, financiera y referencias de proyectos anteriores.',
        'Para registrarse como proveedor o proponer una colaboración, contáctenos por el formulario de Contacto. Nuestro equipo de compras le responderá con los requisitos del proceso de homologación.'
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
    'Gracias por comunicarse con nosotros. Soy el asistente virtual de Maxcon, disponible para orientarle sobre nuestros servicios de ingeniería, gestión de proyectos y tecnología BIM. Haga su consulta con confianza.',
    'Es un gusto atenderle. Soy el asistente virtual especializado en los servicios de Maxcon. Estoy aquí para orientarle en todo lo relacionado con nuestros proyectos y capacidades técnicas.',
    'Buen día. Soy el asistente virtual de Maxcon y estoy aquí para orientarle sobre nuestros servicios. No dude en hacer su consulta.',
    'Hola. Este es el asistente virtual de Maxcon. Puede consultarme sobre ingeniería estructural, gestión de proyectos, tecnología BIM o cualquier otro servicio de nuestra firma.',
    'Le damos la bienvenida al canal de atención digital de Maxcon. Soy el asistente virtual y estoy disponible para orientarle sobre nuestros servicios. ¿En qué puedo ayudarle?',
    'Gracias por su visita. El asistente virtual de Maxcon está a su disposición para orientarle sobre nuestros servicios de ingeniería y construcción. Haga su consulta, estaremos encantados de atenderle.',
    'Buenos días. Soy el asistente virtual de Maxcon, aquí para orientarle sobre nuestros servicios. ¿Tiene alguna consulta sobre sus proyectos o nuestras capacidades técnicas?',
    'Bienvenida la oportunidad de atenderle. Soy el asistente virtual de Maxcon, disponible para orientarle sobre ingeniería estructural, gestión de obras y tecnología BIM.',
    'Hola, gracias por contactarnos. Este canal es atendido por el asistente virtual de Maxcon. Estoy aquí para orientarle sobre nuestros servicios. Proceda con su consulta.',
    'Qué bien contar con su visita. Soy el asistente virtual de Maxcon y estoy aquí para orientarle sobre nuestros servicios de ingeniería y tecnología en la construcción.',
    'Buen día, gracias por comunicarse. El asistente virtual de Maxcon está disponible para orientarle. Puede consultar sobre servicios, proyectos o capacidades técnicas de nuestra firma.',
    'Hola. Asistente virtual de Maxcon al servicio. Estoy aquí para orientarle sobre ingeniería estructural, gestión de proyectos y tecnología constructiva. Adelante con su consulta.',
    'Gracias por visitarnos. Este es el asistente virtual de Maxcon, disponible para orientarle sobre nuestros servicios y resolver sus dudas técnicas o comerciales.',
    'Le saludamos desde el canal digital de Maxcon. El asistente virtual está aquí para orientarle sobre nuestros servicios. No dude en realizar su consulta.',
    'Hola. El asistente virtual de Maxcon tiene el agrado de atenderle. Estoy aquí para orientarle sobre servicios de ingeniería, construcción y tecnología BIM.',
    'Gracias por elegir Maxcon. Soy el asistente virtual y estoy aquí para orientarle en todo lo que necesite sobre nuestros proyectos y soluciones técnicas.',
    'Es un placer atenderle. Asistente virtual de Maxcon a su disposición para orientarle sobre nuestros servicios de ingeniería estructural, gestión y tecnología constructiva.',
    'Hola, bienvenida su consulta. Soy el asistente virtual de Maxcon, aquí para orientarle sobre servicios, proyectos y capacidades de nuestra firma. Adelante.',
    'Qué gusto contar con su contacto. El asistente virtual de Maxcon está disponible para orientarle. Haga su consulta y con gusto le atenderemos.',
    'Gracias por comunicarse con Maxcon. Soy el asistente virtual de la firma y estoy disponible para orientarle sobre cualquier servicio, proyecto o capacidad técnica de nuestro equipo.'
  ],

  /* ════════════════════════════════════════════════
     MENSAJES AL CAMBIAR DE MODO
  ════════════════════════════════════════════════ */
  modeIntros: {
    empresa: [
      'Volvemos al modo de consulta sobre la empresa. Pregúnteme sobre servicios, proyectos, tecnología BIM o cualquier aspecto de nuestra firma.',
      'Perfecto. Continuamos con información sobre la empresa y nuestros servicios. ¿Qué desea saber?',
      'De vuelta al modo empresa. Puedo responderle sobre servicios, experiencia, cobertura geográfica, certificaciones y más.'
    ],
    general: [
      'Modo conversación general activado. Ahora puede preguntarme sobre tecnología, ingeniería, ciencia o cualquier otro tema de interés.',
      'Cambiamos a modo general. Puede consultar sobre temas técnicos, tendencias del sector o cualquier otro asunto que le interese.',
      'Entramos al modo de conversación abierta. Tiene la palabra sobre el tema que prefiera.'
    ]
  },

  /* ════════════════════════════════════════════════
     CONTACTO REAL DE LA EMPRESA
     Actualizar con los datos reales antes del deploy.
  ════════════════════════════════════════════════ */
  contact: {
    name: 'Equipo de Ingeniería',
    phoneDisplay: '+57 300 123 4567',
    phoneHref: '+573001234567'
  }

};
