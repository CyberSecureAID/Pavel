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
     - welcome       → mensajes de bienvenida (se elige uno al azar)
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

    /* ── Servicios generales ── */
    {
      keys: ['servicio', 'servicios', 'ofrecen', 'hacen', 'trabajan', 'que hacen', 'qué hacen', 'oferta', 'soluciones'],
      answer: [
        'Ofrecemos cuatro lineas de servicio principales:\n\n- Ingenieria Estructural: diseno y calculo con estandares internacionales\n- Gestion de Proyectos: planificacion, cronogramas y supervision integral\n- Tecnologia BIM: modelado digital y monitoreo en tiempo real\n- Garantia y Soporte: acompanamiento postentrega y mantenimiento preventivo\n\nCuenta con nuestro equipo para orientarle sobre la solucion mas adecuada a su proyecto.',
        'Nuestra oferta de servicios abarca cuatro grandes areas:\n\n- Ingenieria Estructural\n- Gestion Integral de Proyectos\n- Tecnologia BIM y modelado digital\n- Soporte tecnico postentrega\n\nCada proyecto recibe atencion personalizada desde la consulta inicial hasta la entrega final. ¿Desea informacion sobre alguna de estas areas en particular?',
        'Trabajamos en cuatro frentes principales para llevar cada proyecto desde la concepcion hasta la operacion:\n\n- Diseno y calculo estructural\n- Supervision y gestion de obras\n- Modelado BIM y seguimiento digital\n- Mantenimiento y soporte tras la entrega\n\nPodemos asesorarle sin compromiso para identificar el servicio que mejor se adapta a sus necesidades.'
      ]
    },

    /* ── Cotizacion / propuesta ── */
    {
      keys: ['propuesta', 'cotización', 'cotizacion', 'cotizar', 'presupuesto', 'solicitar', 'costo', 'precio', 'cuánto cuesta', 'cuanto cuesta', 'valor', 'tarifa'],
      answer: [
        'Para elaborar una propuesta tecnica necesitamos conocer los alcances de su proyecto. Le recomendamos:\n\n1. Completar el formulario en la seccion Contacto de esta pagina\n2. O comunicarse directamente con nuestro equipo comercial para agendar una consulta sin costo\n\nAsí podemos preparar una propuesta ajustada a su caso real.',
        'El costo de cada proyecto depende de su escala, ubicacion y especialidades involucradas. Para entregarle un presupuesto preciso necesitamos un breve diagnostico previo.\n\nPuede iniciar el proceso completando el formulario de contacto o escribiendonos directamente. La primera consulta no tiene costo.',
        'No manejamos tarifas estandar porque cada proyecto es diferente. Lo que si le garantizamos es una propuesta clara, desglosada y sin cobros ocultos.\n\nContacte a nuestro equipo para recibir una propuesta tecnica personalizada.'
      ]
    },

    /* ── Cobertura geografica ── */
    {
      keys: ['país', 'pais', 'países', 'paises', 'donde', 'dónde', 'cobertura', 'operan', 'presencia', 'internacional', 'latinoamerica', 'latinoamérica', 'region', 'región'],
      answer: [
        'Tenemos presencia activa en mas de 8 paises de America Latina, incluyendo Colombia, Mexico, Peru, Chile, Argentina, Brasil, Ecuador y Panama.\n\nCada proyecto cuenta con supervision local y coordinacion centralizada desde nuestra sede principal.',
        'Operamos en toda la region latinoamericana. Actualmente ejecutamos proyectos en Colombia, Mexico, Peru, Chile, Argentina, Brasil, Ecuador y Panama, con equipos locales en cada mercado.\n\n¿Tiene un proyecto en una ubicacion especifica sobre la que quiera consultarnos?',
        'Nuestra red de operaciones abarca mas de 8 paises de America Latina. Contamos con representacion local y protocolos adaptados a la normativa de cada territorio.\n\nSi su proyecto esta fuera de estos mercados, igualmente podemos evaluar la viabilidad de participar.'
      ]
    },

    /* ── Plazos y tiempos ── */
    {
      keys: ['tiempo', 'plazo', 'duración', 'duracion', 'cuánto tiempo', 'cuanto tiempo', 'demora', 'tarda', 'cronograma', 'calendario', 'entrega'],
      answer: [
        'El plazo varia segun el tipo y escala del proyecto:\n\n- Consultoria y estudios: 2 a 8 semanas\n- Proyectos medianos hasta 5.000 m2: 6 a 12 meses\n- Proyectos grandes de infraestructura o industrial: 1 a 3 anos\n\nSiempre entregamos un cronograma detallado en la propuesta tecnica.',
        'Los tiempos de ejecucion dependen de la complejidad del proyecto. Como referencia general:\n\n- Estudios y consultoria: semanas\n- Edificaciones de mediana escala: meses\n- Infraestructura o proyectos industriales: uno a tres anos\n\nCada propuesta incluye un cronograma con hitos, fechas de entrega parcial y mecanismos de seguimiento.',
        'No establecemos plazos genericos porque cada obra tiene sus propias condiciones. Lo que si garantizamos es un cronograma realista desde el inicio y comunicacion proactiva ante cualquier variacion.\n\nNuestra tasa de entrega a tiempo supera el 98% en proyectos completados.'
      ]
    },

    /* ── Tecnologia BIM ── */
    {
      keys: ['bim', 'modelado', 'digital', 'tecnología', 'tecnologia', 'software', 'plataforma', 'herramientas'],
      answer: [
        'Utilizamos Modelado BIM 360 en todos nuestros proyectos de mediana y gran escala. Esto nos permite:\n\n- Detectar conflictos entre disciplinas antes de la obra\n- Reducir imprevistos y retrabajos entre un 30 y un 40 por ciento\n- Ofrecer seguimiento digital en tiempo real al cliente\n\nTambien integramos IoT y sistemas de automatizacion en proyectos de infraestructura inteligente.',
        'El modelado BIM es una de nuestras capacidades diferenciadas. Trabajamos con modelos federados que integran estructura, arquitectura, instalaciones mecanicas y electricas en un solo entorno digital.\n\nEsto reduce errores en obra, optimiza costos y le da al cliente visibilidad completa sobre el avance del proyecto.',
        'Nuestro enfoque BIM va mas alla del modelado 3D. Incluye gestion de informacion a lo largo del ciclo de vida del proyecto: desde el diseno hasta la operacion y el mantenimiento de la edificacion.'
      ]
    },

    /* ── Certificaciones ── */
    {
      keys: ['iso', 'certificación', 'certificacion', 'leed', 'sostenible', 'sostenibilidad', 'certificado', 'norma', 'estandar', 'estándar'],
      answer: [
        'Contamos con las siguientes certificaciones:\n\n- ISO 14001: Gestion ambiental\n- ISO 9001: Calidad\n- LEED: Construccion sostenible\n- OHSAS 18001: Seguridad y salud\n\nNuestros proyectos cumplen con los mas altos estandares internacionales de calidad y sostenibilidad.',
        'Trabajamos bajo un marco de certificaciones internacionales que garantizan calidad, seguridad ambiental y condiciones laborales adecuadas en cada proyecto:\n\n- ISO 9001 e ISO 14001\n- LEED para proyectos de construccion sostenible\n- OHSAS 18001 para seguridad en obra\n\nEstas certificaciones no son solo formales: definen nuestros protocolos internos de trabajo.',
        'La certificacion no es un adorno, es nuestra forma de operar. Mantenemos activas las certificaciones ISO 9001, ISO 14001, LEED y OHSAS 18001, auditadas de forma periodica por entes externos.'
      ]
    },

    /* ── Contacto y atencion humana ── */
    {
      keys: ['contacto', 'contactar', 'teléfono', 'telefono', 'email', 'correo', 'escribir', 'llamar', 'asesor', 'humano', 'persona', 'hablar', 'comunicar', 'whatsapp'],
      answer: [
        'Puede contactarnos a traves de:\n\n- Formulario en la seccion Contacto de esta pagina\n- WhatsApp mediante el boton verde en la esquina inferior\n- Correo electronico de nuestro equipo comercial\n\nUn asesor se pondra en contacto con usted en el menor tiempo posible.',
        'Nuestro equipo esta disponible para atenderle directamente. Puede usar el formulario de contacto en esta misma pagina, escribirnos por WhatsApp o comunicarse por correo electronico.\n\n¿Prefiere que uno de nuestros asesores le contacte a usted?',
        'Si prefiere hablar con una persona de nuestro equipo, puede hacerlo por cualquiera de estos canales:\n\n- Formulario de contacto en la pagina\n- WhatsApp disponible en el boton verde\n- Correo electronico al area comercial\n\nAtendemos consultas en horario de oficina y respondemos dentro de las 24 horas habiles.'
      ]
    },

    /* ── Portafolio y experiencia ── */
    {
      keys: ['proyecto', 'proyectos', 'portafolio', 'obras', 'trabajo', 'ejemplos', 'experiencia', 'trayectoria', 'casos', 'referencias'],
      answer: [
        'Contamos con mas de 120 proyectos entregados en mas de 15 anos de trayectoria, con una tasa de entrega a tiempo del 98 por ciento.\n\nNuestro portafolio incluye edificaciones corporativas, infraestructura vial, plantas industriales y proyectos de construccion sostenible en toda Latinoamerica.\n\n¿Le gustaria conocer casos especificos de algun sector?',
        'A lo largo de mas de 15 anos hemos ejecutado proyectos de diversa escala y complejidad: desde edificaciones corporativas hasta plantas industriales y obras de infraestructura vial.\n\nContamos con referencias verificables en los paises donde operamos. Si necesita casos de algun sector especifico, con gusto le compartimos informacion.',
        'Nuestra experiencia acumulada supera los 120 proyectos en cinco paises, con presencia en sectores como construccion comercial, infraestructura publica, industria y edificacion sostenible.\n\nLa tasa de satisfaccion de clientes que vuelven a contratarnos supera el 70 por ciento.'
      ]
    },

    /* ── Garantia y soporte postentrega ── */
    {
      keys: ['garantía', 'garantia', 'soporte', 'postentrega', 'mantenimiento', 'posventa', 'posventaa', 'seguimiento'],
      answer: [
        'Ofrecemos acompanamiento postentrega en todos nuestros proyectos:\n\n- Garantia estructural segun normativa local\n- Mantenimiento preventivo programado\n- Soporte tecnico ante imprevistos\n\nNuestro equipo permanece disponible incluso despues de la entrega formal.',
        'La relacion con el cliente no termina en la entrega. Contamos con un programa de soporte postentrega que incluye inspeccion periodica, mantenimiento preventivo y respuesta tecnica ante eventualidades.\n\nLos terminos especificos de garantia se especifican en cada contrato segun la normativa vigente del pais.',
        'Asumimos la garantia de nuestros trabajos con un protocolo de soporte que incluye visitas de seguimiento, mantenimiento correctivo y canales de reporte directo para el cliente durante el periodo de garantia.'
      ]
    },

    /* ── Quienes somos ── */
    {
      keys: ['nosotros', 'empresa', 'historia', 'quiénes', 'quienes', 'firma', 'compania', 'compañia', 'quienes son'],
      answer: [
        'Somos una firma de ingenieria y tecnologia constructiva con mas de 15 anos de experiencia en America Latina.\n\nContamos con un equipo multidisciplinario de ingenieros, arquitectos y especialistas BIM comprometidos con la excelencia tecnica en cada proyecto.',
        'Somos una firma especializada en ingenieria estructural y gestion de proyectos de construccion, con presencia en mas de 8 paises de la region.\n\nCombinamos experiencia tecnica de mas de 15 anos con herramientas de tecnologia constructiva de ultima generacion.',
        'Nuestra firma nacio para resolver los desafios de la ingenieria moderna con rigor tecnico y tecnologia aplicada. Hoy somos un equipo con presencia regional, mas de 120 proyectos completados y un compromiso claro con la calidad y los plazos.'
      ]
    },

    /* ── Inteligencia artificial y algoritmos ── */
    {
      keys: ['inteligencia artificial', 'algoritmos predictivos', 'aprendizaje automatico', 'machine learning', 'ia', 'datos', 'analisis de datos'],
      answer: [
        'Incorporamos inteligencia artificial en etapas clave de nuestros proyectos:\n\n- Prediccion de cronogramas y desviaciones de obra\n- Optimizacion de recursos y materiales\n- Deteccion temprana de riesgos estructurales\n\nLa IA trabaja siempre junto a nuestro equipo de ingenieros como herramienta de apoyo a la decision.',
        'Usamos modelos predictivos para anticipar desviaciones en cronograma, identificar cuellos de botella en la cadena de suministro y optimizar el uso de recursos en obra.\n\nEl analisis de datos forma parte de nuestra metodologia de gestion de proyectos en todas las etapas.',
        'La inteligencia artificial nos permite tomar mejores decisiones tecnicas con mayor velocidad. La aplicamos en analisis de riesgos, optimizacion de estructuras y seguimiento predictivo de obra, siempre validada por ingenieros especializados.'
      ]
    },

    /* ── Drones e inspeccion aerea ── */
    {
      keys: ['drone', 'drones', 'dron', 'inspeccion aerea', 'inspeccion área', 'levantamiento topografico', 'fotogrametria', 'vuelo'],
      answer: [
        'Usamos drones para levantamientos topograficos, inspeccion de avance de obra y monitoreo de seguridad en sitios de dificil acceso.\n\nEsto agiliza la toma de datos y reduce riesgos para el personal en campo.',
        'La inspeccion aerea con drones es parte de nuestros protocolos de seguimiento en obra. Generamos ortofotografias, modelos de nube de puntos y reportes de avance con frecuencia configurable segun las necesidades del proyecto.',
        'Integramos vuelos de dron con nuestros modelos BIM para comparar el avance real contra el modelo digital. Esto detecta desviaciones con precision milimetrica antes de que se conviertan en problemas de obra.'
      ]
    },

    /* ── IoT y sensores ── */
    {
      keys: ['iot', 'sensores', 'internet de las cosas', 'monitoreo remoto', 'telemetria', 'datos en tiempo real'],
      answer: [
        'Instalamos sensores IoT en obra y en edificaciones entregadas para monitoreo remoto de estructuras, consumo energetico y condiciones ambientales en tiempo real.\n\nLos datos quedan disponibles en un panel digital accesible para el cliente.',
        'Nuestros sistemas de monitoreo con IoT permiten al cliente ver el estado de su infraestructura desde cualquier dispositivo. Incluimos alertas automaticas ante condiciones fuera del rango establecido.',
        'El monitoreo remoto con sensores IoT es especialmente util en infraestructura critica: puentes, plantas industriales y edificaciones expuestas a cargas dinamicas. Diseñamos redes de sensores adaptadas a cada caso.'
      ]
    },

    /* ── Eficiencia energetica y sostenibilidad ── */
    {
      keys: ['energía renovable', 'energia renovable', 'energías renovables', 'paneles solares', 'eficiencia energetica', 'eficiencia energética', 'energia solar', 'consumo energetico', 'huella de carbono', 'carbono'],
      answer: [
        'Disenamos proyectos con criterios de eficiencia energetica, incluyendo integracion de paneles solares, iluminacion LED inteligente y sistemas de climatizacion de bajo consumo, alineados con nuestras certificaciones de sostenibilidad.',
        'La eficiencia energetica es un criterio de diseno desde la etapa conceptual, no un agregado al final. Evaluamos orientacion, envolvente termica, sistemas de iluminacion y climatizacion para minimizar el consumo operativo del proyecto.',
        'Trabajamos para reducir la huella de carbono de cada proyecto mediante el uso de materiales de bajo impacto, diseno bioclimatico y sistemas de energia renovable cuando el cliente lo requiere o la normativa lo exige.'
      ]
    },

    /* ── Construccion modular y prefabricada ── */
    {
      keys: ['modular', 'prefabricado', 'prefabricados', 'construccion modular', 'construcción modular', 'industrializacion', 'industrialización'],
      answer: [
        'Ofrecemos construccion modular y prefabricada para proyectos que requieren rapidez sin sacrificar calidad:\n\n- Menores tiempos de obra\n- Menos desperdicio de material\n- Control de calidad en fabrica antes del montaje en sitio',
        'La construccion industrializada permite comprimir cronogramas de forma significativa. Combinamos elementos prefabricados con diseno estructural preciso para garantizar que el ensamblaje en obra sea eficiente y seguro.',
        'Para ciertos tipos de proyectos, la prefabricacion es la mejor decision tecnica y economica. Evaluamos con el cliente si este enfoque aplica segun su caso, cronograma disponible y condiciones del terreno.'
      ]
    },

    /* ── Normativa sismorresistente ── */
    {
      keys: ['sismo', 'sismorresistente', 'norma sismo', 'resistencia sismica', 'resistencia sísmica', 'normativa', 'terremoto', 'seismic'],
      answer: [
        'Todos nuestros disenos estructurales cumplen con la normativa sismorresistente vigente en cada pais donde operamos, con analisis de vulnerabilidad y reforzamiento cuando aplica.',
        'El diseno ante cargas sismicas forma parte de nuestro proceso estandar de ingenieria estructural. Aplicamos la normativa local de cada pais y, cuando el proyecto lo justifica, usamos analisis dinamico no lineal para mayor precision.',
        'Ejecutamos proyectos en zonas de alta amenaza sismica con metodologias de diseno avanzadas, incluyendo aisladores de base y disipadores de energia cuando la escala del proyecto lo requiere.'
      ]
    },

    /* ── Realidad virtual y gemelo digital ── */
    {
      keys: ['realidad aumentada', 'realidad virtual', 'gemelo digital', 'digital twin', 'recorrido virtual', 'visualizacion 3d', 'visualización 3d'],
      answer: [
        'Utilizamos gemelos digitales y recorridos en realidad virtual para que el cliente visualice el proyecto antes de la construccion y haga ajustes tempranos, evitando cambios costosos en obra.',
        'Los recorridos virtuales basados en el modelo BIM permiten al cliente tomar decisiones informadas sobre diseno, distribuciones y acabados antes de iniciar la construccion, reduciendo ordenes de cambio.',
        'El gemelo digital del proyecto queda disponible para el cliente incluso despues de la entrega. Sirve como base para la gestion del mantenimiento y facilita futuras intervenciones sobre la edificacion.'
      ]
    },

    /* ── Seguridad de datos ── */
    {
      keys: ['ciberseguridad', 'seguridad de datos', 'proteccion de informacion', 'privacidad', 'nube', 'cloud', 'acceso'],
      answer: [
        'La informacion de cada proyecto, planos, modelos BIM y datos del cliente, se gestiona bajo protocolos de ciberseguridad y respaldo en la nube con acceso restringido por roles.',
        'Trabajamos con plataformas de colaboracion con cifrado de extremo a extremo y control de acceso por roles. Solo el personal autorizado del cliente y nuestro equipo pueden acceder a la informacion del proyecto.',
        'La confidencialidad de la informacion del proyecto es parte de nuestros compromisos contractuales. Usamos entornos de datos comunes con registro de actividad y copias de seguridad automaticas.'
      ]
    },

    /* ── Equipo humano ── */
    {
      keys: ['equipo de trabajo', 'ingenieros', 'arquitectos', 'talento', 'quienes trabajan', 'personal', 'profesionales', 'especialistas'],
      answer: [
        'Nuestro equipo esta conformado por ingenieros civiles, arquitectos, especialistas BIM y gestores de proyecto, todos con formacion continua en nuevas tecnologias constructivas.',
        'Contamos con profesionales multidisciplinarios: ingenieros estructurales, especialistas en instalaciones, gestores de riesgo y tecnicos BIM. Cada proyecto se asigna a un equipo con la combinacion adecuada de perfiles.',
        'Nuestro capital mas valioso es el equipo. Invertimos en formacion continua, certificaciones tecnicas y actualizacion metodologica para garantizar que cada profesional este al nivel que cada proyecto requiere.'
      ]
    },

    /* ── Mision, vision, valores ── */
    {
      keys: ['misión', 'mision', 'visión', 'vision', 'valores', 'filosofía', 'filosofia', 'compromiso', 'proposito', 'propósito'],
      answer: [
        'Nuestra mision es construir mas alla de los estandares, combinando ingenieria solida con tecnologia de punta. Nos guian valores de excelencia tecnica, transparencia y compromiso con el cliente en cada etapa del proyecto.',
        'Operamos con una filosofia simple: entregar lo que prometemos, con la calidad que cada proyecto merece y dentro del plazo acordado. Eso define nuestra reputacion en el mercado.',
        'Nos comprometemos con tres principios en cada proyecto: rigor tecnico, comunicacion transparente con el cliente y cumplimiento de los estandares ambientales y de seguridad aplicables.'
      ]
    },

    /* ── Responsabilidad social ── */
    {
      keys: ['responsabilidad social', 'impacto ambiental', 'comunidad', 'rse', 'medio ambiente', 'medioambiente', 'residuos'],
      answer: [
        'Trabajamos bajo principios de responsabilidad social y ambiental: minimizamos el impacto en cada obra, gestionamos residuos de construccion y promovemos la contratacion de mano de obra local en los proyectos.',
        'La gestion ambiental en obra es parte de nuestros procesos certificados bajo ISO 14001. Incluye planes de manejo de residuos, control de emisiones y medidas de proteccion del entorno inmediato a cada proyecto.',
        'Creemos que una obra bien ejecutada debe dejar el menor impacto posible en su entorno. Aplicamos planes de gestion ambiental y promovemos practicas de compra local para generar valor en las comunidades donde operamos.'
      ]
    },

    /* ── Alianzas y proveedores ── */
    {
      keys: ['alianza', 'alianzas', 'proveedores', 'socios estratégicos', 'socios estrategicos', 'proveedores certificados'],
      answer: [
        'Contamos con alianzas estrategicas con proveedores de materiales certificados y firmas tecnologicas especializadas en BIM, IoT e ingenieria estructural, lo que garantiza calidad consistente en cada pais donde operamos.',
        'Nuestros proveedores son seleccionados con criterios tecnicos y de sostenibilidad. Trabajamos con aliados de largo plazo que conocen nuestros estandares y los de nuestros clientes.',
        'La calidad de un proyecto depende tambien de la calidad de la cadena de suministro. Por eso mantenemos relaciones contractuales con proveedores certificados y auditados periodicamente.'
      ]
    },

    /* ── Seguridad laboral en obra ── */
    {
      keys: ['seguridad laboral', 'seguridad en obra', 'riesgos laborales', 'accidentes', 'ohsas', 'epp', 'prevencion de riesgos'],
      answer: [
        'La seguridad en obra es prioridad: aplicamos protocolos OHSAS 18001, capacitacion constante a cuadrillas y monitoreo de riesgos en tiempo real para reducir accidentes laborales.',
        'Nuestros indices de accidentalidad estan por debajo del promedio del sector, resultado de una cultura de seguridad que se aplica desde la fase de planificacion hasta el ultimo dia de obra.',
        'Cada proyecto incluye un plan de seguridad y salud en el trabajo, con induccion obligatoria, dotacion de EPP, analisis de riesgo por actividad y reportes periodicos al cliente.'
      ]
    },

    /* ── Financiamiento ── */
    {
      keys: ['financiamiento', 'financiacion', 'financiación', 'formas de pago', 'credito', 'crédito', 'cuotas', 'pago'],
      answer: [
        'Podemos orientarle sobre esquemas de financiamiento y formas de pago segun el tipo de proyecto, en conjunto con entidades aliadas. Lo ideal es revisarlo directamente con nuestro equipo comercial para su caso particular.',
        'Las condiciones de pago se estructuran por hitos de avance, lo que le permite al cliente vincular los desembolsos con resultados verificables. Los detalles especificos se acuerdan en la propuesta tecnica.',
        'Ofrecemos flexibilidad en los esquemas de pago y podemos orientarle sobre opciones de financiamiento disponibles en el mercado para proyectos de construccion e infraestructura.'
      ]
    },

    /* ── Innovacion e I+D ── */
    {
      keys: ['innovación', 'innovacion', 'i+d', 'investigacion y desarrollo', 'investigación y desarrollo', 'nuevas tecnologias', 'nuevas tecnologías', 'vanguardia'],
      answer: [
        'Invertimos de forma constante en innovacion e investigacion aplicada, evaluando nuevas tecnologias constructivas antes de incorporarlas a nuestros proyectos, siempre con criterios de costo-beneficio comprobado.',
        'Nos mantenemos actualizados en metodologias de construccion avanzada, nuevos materiales y tecnologias digitales. Cada innovacion que adoptamos pasa primero por validacion interna antes de aplicarse en proyectos de clientes.',
        'La innovacion en nuestro sector es continua. Participamos en redes tecnicas internacionales, seguimos publicaciones especializadas y colaboramos con universidades para mantenernos a la vanguardia.'
      ]
    },

    /* ── Infraestructura publica y vial ── */
    {
      keys: ['infraestructura', 'vial', 'carretera', 'puente', 'puentes', 'obras civiles', 'obra civil', 'publica', 'pública'],
      answer: [
        'Tenemos amplia experiencia en proyectos de infraestructura vial y obras civiles de gran escala, incluyendo puentes, intersecciones viales y obras de drenaje urbano.\n\nTrabajamos con normativas locales e internacionales segun el tipo de obra y el pais.',
        'La infraestructura publica es uno de nuestros sectores de mayor experiencia. Hemos ejecutado proyectos viales, puentes y obras hidraulicas en varios paises de la region, con supervision rigurosa de calidad en cada etapa.',
        'Para proyectos de infraestructura publica integramos diseno estructural, estudios geotecnicos, gestion ambiental y coordinacion con autoridades locales, lo que simplifica la gestion para el cliente.'
      ]
    },

    /* ── Sector industrial ── */
    {
      keys: ['industrial', 'planta industrial', 'plantas industriales', 'bodega', 'logistica', 'logística', 'galpón', 'galpon', 'manufactura'],
      answer: [
        'Disenamos y construimos plantas industriales, bodegas logisticas y instalaciones de manufactura con estandares de eficiencia operativa, seguridad y cumplimiento normativo.\n\nIntegramos sistemas MEP, estructuras de grandes luces y plataformas de carga en un unico modelo coordinado.',
        'Los proyectos industriales requieren coordinacion tecnica entre multiples especialidades. Nuestra metodologia BIM facilita esa integracion y reduce los conflictos entre sistemas durante la ejecucion.',
        'Contamos con experiencia en proyectos para sectores como manufactura, agroindustria, logistica y mineria. Adaptamos el diseno a los requerimientos de proceso especificos de cada industria.'
      ]
    },

    /* ── Sector comercial y corporativo ── */
    {
      keys: ['edificio', 'edificios', 'corporativo', 'oficinas', 'comercial', 'centro comercial', 'hotel', 'hospitality'],
      answer: [
        'Ejecutamos proyectos de edificaciones corporativas y comerciales con enfasis en eficiencia estructural, flexibilidad de espacios y cumplimiento de los estandares de construccion sostenible.',
        'Nuestro portafolio en el sector comercial incluye edificios de oficinas, hoteles y centros comerciales. Cada proyecto se disena para maximizar la eficiencia del espacio y minimizar los costos operativos a largo plazo.',
        'Para proyectos corporativos y comerciales ofrecemos diseno integral: estructura, fachada, sistemas MEP y gestion BIM desde la etapa de anteproyecto. Esto reduce los cambios en obra y garantiza mayor control del presupuesto.'
      ]
    },

    /* ── Proceso de trabajo ── */
    {
      keys: ['proceso', 'metodología', 'metodologia', 'como trabajan', 'cómo trabajan', 'pasos', 'etapas', 'fases'],
      answer: [
        'Nuestro proceso de trabajo se estructura en cuatro fases:\n\n1. Diagnostico y propuesta tecnica\n2. Diseno y modelado BIM\n3. Ejecucion y supervision en obra\n4. Entrega y soporte postentrega\n\nCada fase incluye puntos de revision y aprobacion con el cliente antes de avanzar.',
        'Trabajamos bajo una metodologia de proyecto por fases con entregables definidos en cada etapa. El cliente tiene visibilidad y control sobre el avance en todo momento a traves de reportes y acceso a la plataforma digital del proyecto.',
        'Desde el primer contacto hasta la entrega final, el cliente cuenta con un gestor de proyecto dedicado como punto de contacto unico. Eso elimina la confusion de interlocutores multiples y garantiza coherencia en la comunicacion.'
      ]
    },

    /* ── Calidad ── */
    {
      keys: ['calidad', 'control de calidad', 'aseguramiento', 'inspeccion', 'inspección', 'revision', 'revisión', 'auditoría', 'auditoria'],
      answer: [
        'El control de calidad es transversal a todo nuestro proceso: desde la verificacion de materiales hasta las inspecciones de obra y los ensayos de resistencia. Operamos bajo los estandares ISO 9001.',
        'Contamos con un sistema de aseguramiento de calidad que incluye listas de verificacion por etapa, ensayos de laboratorio certificados y auditorias periodicas de proceso.\n\nCada entregable pasa por revision tecnica interna antes de presentarse al cliente.',
        'La calidad no se inspecciona al final, se construye desde el diseno. Nuestros procesos incluyen revisiones en etapas tempranas para detectar y corregir desviaciones antes de que lleguen a obra.'
      ]
    }

  ],

  /* ────────────────────────────────────────────
     RESPUESTAS CUANDO EL BOT NO SABE RESPONDER
     Se elige UNA al azar cada vez.
  ──────────────────────────────────────────── */
  fallback: [
    'Esa consulta requiere atencion personalizada de nuestro equipo tecnico. Le comparto el contacto directo para que lo resuelvan con gusto:',
    'No tengo informacion especifica sobre eso en este momento, pero nuestro equipo puede ayudarle directamente:',
    'Para responderle con precision sobre ese tema, lo mejor es hablar con uno de nuestros especialistas:',
    'Ese punto se sale de lo que tengo registrado aqui. Le dejo el contacto de nuestro equipo tecnico:',
    'Quiero asegurarme de darle una respuesta correcta, asi que lo mejor es conectarlo directamente con el equipo:',
    'No cuento con el detalle exacto para esa pregunta, pero puede comunicarse directamente asi:',
    'Esa es una consulta mas especifica de la que puedo resolver por este canal. Le comparto el contacto del equipo:',
    'Para temas como este, nuestro equipo le dara una respuesta mas completa. Aqui tiene el contacto directo:',
    'Aun no tengo esa informacion disponible, pero puede contactar directamente a nuestro equipo:',
    'Prefiero conectarlo con una persona del equipo para ese tema puntual. Aqui tiene su contacto:',
    'Hay preguntas que merecen una respuesta tecnica directa. Le comparto el canal para hablar con un especialista:',
    'Para darle la informacion precisa que necesita, lo mejor es que uno de nuestros asesores le contacte:',
    'Ese nivel de detalle requiere que lo maneje directamente alguien de nuestro equipo. Aqui tiene como llegar a ellos:',
    'Mi funcion es orientarle, pero para este caso necesita hablar directamente con el equipo. Le comparto el contacto:',
    'Quiero que reciba la mejor respuesta posible, y para ese tema el equipo es quien mejor puede ayudarle:'
  ],

  /* ────────────────────────────────────────────
     MENSAJES DE BIENVENIDA
     Si el motor soporta aleatoriedad, se elige uno al azar.
     Si no, se usa el primero del arreglo.
  ──────────────────────────────────────────── */
  welcome: [
    'Bienvenido. Soy el asistente virtual de esta empresa de ingenieria y construccion. Estoy aqui para responder sus preguntas sobre nuestros servicios, proyectos y tecnologias.\n\n¿En que puedo ayudarle?',
    'Hola. Este es el asistente de consultas de nuestra firma de ingenieria. Puede preguntarme sobre servicios, cobertura, tecnologia constructiva, certificaciones o cualquier otro aspecto relacionado con nuestros proyectos.',
    'Bienvenido al asistente virtual. Estoy disponible para orientarle sobre nuestros servicios de ingenieria estructural, gestion de proyectos y tecnologia BIM.\n\nHagame su consulta con confianza.',
    'Hola. Soy el asistente de esta firma especializada en ingenieria y construccion. Si tiene preguntas sobre nuestros servicios, experiencia o como podemos ayudarle en su proyecto, estoy aqui para orientarle.'
  ],

  /* ────────────────────────────────────────────
     MENSAJES AL CAMBIAR DE MODO
  ──────────────────────────────────────────── */
  modeIntros: {
    empresa: [
      'Volvemos al modo de consulta sobre la empresa. Pregunteme sobre servicios, proyectos, tecnologia BIM o cualquier aspecto de nuestra firma.',
      'Perfecto. Continuamos con informacion sobre la empresa y nuestros servicios. ¿Que desea saber?',
      'De vuelta al modo empresa. Puedo responderle sobre servicios, experiencia, cobertura geografica, certificaciones y mas.'
    ],
    general: [
      'Modo conversacion general activado. Ahora puede preguntarme sobre tecnologia, ingenieria, ciencia o cualquier otro tema de interes.',
      'Cambiamos a modo general. Puede consultar sobre temas tecnicos, tendencias del sector o cualquier otro asunto que le interese.',
      'Entramos al modo de conversacion abierta. Tiene la palabra sobre el tema que prefiera.'
    ]
  },

  /* ────────────────────────────────────────────
     CONTACTO REAL DE LA EMPRESA
     phoneHref  → formato para el enlace tel: (sin espacios)
     phoneDisplay → formato visible para el usuario
  ──────────────────────────────────────────── */
  contact: {
    name: 'Equipo de Ingenieria',
    phoneDisplay: '+57 300 123 4567',
    phoneHref: '+573001234567'
  }

};
