/* ================================================
   PAVEL — bot/data-en.js  v1.0
   English knowledge base for the chatbot.
   Mirrors bot/data.js structure exactly.

   Motor multi-intent: detects multiple questions
   in a single message and replies to each one.

   To enrich the bot in English, edit ONLY this file.
   IMPORTANT: load AFTER data.js and BEFORE js/scroll.js in HTML.

   <script src="bot/data.js?v=1"></script>
   <script src="bot/data-en.js?v=1"></script>   ← this file
   <script src="js/hero.js?v=2"></script>
   <script src="js/scroll.js?v=3"></script>
================================================ */

window.PV_CHATBOT_DATA_EN = {

  /* ════════════════════════════════════════════════
     KNOWLEDGE BASE — "The company" mode
  ════════════════════════════════════════════════ */
  kb: [

    /* ── General services ── */
    {
      keys: [
        'service', 'services', 'offer', 'offers', 'do you do', 'what do you do',
        'what you do', 'solutions', 'can you help', 'how can you help',
        'what do you offer', 'what you offer', 'specialties', 'capabilities',
        'portfolio of services', 'service portfolio', 'activities', 'what is maxcon'
      ],
      answer: [
        'We offer four main lines of service:\n\n- **Structural Engineering**: design and analysis to international standards\n- **Project Management**: planning, scheduling and comprehensive supervision\n- **BIM Technology**: digital modeling and real-time monitoring\n- **Quality Assurance & Support**: post-delivery accompaniment and preventive maintenance\n\nOur team is available to guide you toward the solution best suited to your project.',
        'Our service portfolio covers four major areas:\n\n- Structural Engineering\n- Comprehensive Project Management\n- BIM Technology and digital modeling\n- Technical post-delivery support\n\nEvery project receives personalized attention from the initial consultation through final handover. Would you like details on any of these areas?',
        'We work across four key fronts to take every project from concept to operation:\n\n- Structural design and analysis\n- Construction supervision and project management\n- BIM modeling and digital tracking\n- Maintenance and post-delivery support\n\nWe can advise you with no obligation to help identify the service that best fits your needs.',
        'We are a firm specializing in engineering and construction. Our core services are structural engineering, project management, BIM technology, and post-delivery support. Would you like more detail on any of them?'
      ]
    },

    /* ── Business hours ── */
    {
      keys: [
        'hours', 'schedule', 'business hours', 'office hours', 'opening hours',
        'when are you open', 'when do you open', 'when can i call', 'available',
        'availability', 'monday', 'friday', 'weekend', 'saturday', 'sunday',
        'working hours', 'work hours', 'when can i reach you', 'reach you',
        'office schedule', 'contact hours', 'what time'
      ],
      answer: [
        'Our business hours are **Monday to Friday, 8:00 a.m. to 6:00 p.m.** (Colombia time, UTC-5). On Saturdays we are available from 9:00 a.m. to 1:00 p.m. for specific inquiries.\n\nOutside those hours you can leave us a message through the contact form and we will reply on the next business day.',
        'We attend from **Monday to Friday, 8:00 a.m. to 6:00 p.m.** (COT - UTC-5). On weekends we only handle emergencies for projects currently in execution.\n\nIf you would like to schedule a consultation, you can do so at any time through this chat or the contact form.',
        'Our team is available Monday to Friday, from 8 a.m. to 6 p.m. On Saturdays there is limited availability until noon.\n\nFor urgent inquiries outside office hours, write to us and an advisor will get back to you at the start of the next business day.',
        'Regular office hours are **Monday to Friday, 8:00 to 18:00**. If you need an appointment or call, you can request it through the form and we will confirm availability the same day.'
      ]
    },

    /* ── Quote / proposal ── */
    {
      keys: [
        'proposal', 'quote', 'quotation', 'budget', 'estimate', 'cost',
        'price', 'pricing', 'how much', 'how much does it cost', 'rates',
        'fees', 'investment', 'pay', 'charge', 'package', 'plan',
        'cost per square', 'project cost', 'get a quote', 'request a proposal',
        'free consultation', 'no cost'
      ],
      answer: [
        'To prepare a technical proposal we need to understand the scope of your project. We recommend:\n\n1. Completing the form in the **Contact** section of this page\n2. Or reaching out to our commercial team directly to schedule a free consultation\n\nThat way we can prepare a proposal tailored to your specific situation.',
        'The cost of each project depends on its scale, location, and the disciplines involved. To provide an accurate budget we need a brief prior assessment.\n\nYou can start the process by filling out the contact form or writing to us directly. **The first consultation is free of charge**.',
        'We do not work with standard rates because every project is different. What we do guarantee is a clear, itemized proposal with no hidden charges.\n\nContact our team to receive a personalized technical proposal.',
        'Fees vary depending on the type of service, the project size, and the specialties required. For specific consulting assignments we work on an hourly basis; for full projects we prepare a comprehensive proposal.\n\nWrite or call us and we will gladly put together a preliminary estimate with no commitment.'
      ]
    },

    /* ── Geographic coverage ── */
    {
      keys: [
        'country', 'countries', 'where', 'coverage', 'operate', 'presence',
        'international', 'latin america', 'region', 'colombia', 'mexico',
        'peru', 'chile', 'argentina', 'brazil', 'ecuador', 'panama',
        'outside colombia', 'another country', 'do you work in', 'do you have offices',
        'are you in', 'which countries', 'global', 'locations'
      ],
      answer: [
        'We have an active presence in more than 8 countries across Latin America, including Colombia, Mexico, Peru, Chile, Argentina, Brazil, Ecuador, and Panama.\n\nEvery project benefits from local supervision and centralized coordination from our main office.',
        'We operate throughout Latin America. We currently have active projects in Colombia, Mexico, Peru, Chile, Argentina, Brazil, Ecuador, and Panama, with local teams in each market.\n\nDo you have a project in a specific location you would like to ask us about?',
        'Our network spans more than 8 countries in Latin America. We have local representation and protocols adapted to the regulations of each territory.\n\nIf your project is outside these markets, we can still evaluate the feasibility of participating.',
        'Yes, we work internationally. Our headquarters are in Toronto, Canada, and our projects are primarily developed in Latin America. We have completed work in Colombia, Mexico, Peru, Chile, Argentina, and other countries in the region.'
      ]
    },

    /* ── Timelines / deadlines ── */
    {
      keys: [
        'timeline', 'deadline', 'duration', 'how long', 'how long does it take',
        'schedule', 'delivery', 'date', 'when will it be done', 'completion time',
        'weeks', 'months', 'years', 'time frame', 'timeframe', 'turnaround',
        'project duration', 'how long does a project take'
      ],
      answer: [
        'Timelines vary depending on project type and scale:\n\n- Consulting and studies: **2 to 8 weeks**\n- Medium-sized projects (up to 5,000 m²): **6 to 12 months**\n- Large infrastructure or industrial projects: **1 to 3 years**\n\nWe always include a detailed schedule in the technical proposal.',
        'Execution times depend on the complexity of the project. As a general reference:\n\n- Studies and consulting: weeks\n- Medium-scale buildings: months\n- Infrastructure or industrial projects: one to three years\n\nEvery proposal includes a schedule with milestones, partial delivery dates, and monitoring mechanisms.',
        'We do not set generic timelines because every project has its own conditions. What we do guarantee is a realistic schedule from day one and proactive communication if any variation arises.\n\nOur on-time delivery rate exceeds **98%** across completed projects.',
        'Execution time depends on the scope. A consulting engagement can be resolved in a few weeks; a major infrastructure project can take one to three years. We always agree on concrete dates in the contract and honor them.'
      ]
    },

    /* ── BIM Technology ── */
    {
      keys: [
        'bim', 'modeling', 'digital', 'technology', 'software',
        'platform', 'tools', '3d model', 'digital twin', 'digital model',
        'digital coordination', 'monitoring', 'real-time tracking',
        'visualization', 'revit', 'navisworks', 'autodesk',
        'clash detection', 'bim 360', 'digital construction'
      ],
      answer: [
        'We use **BIM 360 Modeling** on all our medium and large-scale projects. This allows us to:\n\n- Detect clashes between disciplines before construction begins\n- Reduce unforeseen issues and rework by 30 to 40 percent\n- Provide the client with real-time digital progress tracking\n\nWe also integrate IoT and automation systems in smart infrastructure projects.',
        'BIM modeling is one of our key differentiators. We work with federated models that integrate structure, architecture, mechanical, and electrical systems in a single digital environment.\n\nThis reduces errors on site, optimizes costs, and gives the client full visibility over project progress.',
        'Our BIM approach goes beyond 3D modeling. It includes information management throughout the entire project lifecycle: from design all the way through building operation and maintenance.',
        'We work with leading BIM tools including Revit, Navisworks, and Autodesk BIM 360. Clients can access real-time progress dashboards without needing to install any specialized software.'
      ]
    },

    /* ── Certifications and standards ── */
    {
      keys: [
        'iso', 'certification', 'certifications', 'leed', 'sustainable',
        'sustainability', 'certified', 'standard', 'standards', 'ohsas',
        'quality', 'environmental', 'green building', 'green construction',
        'technical standard', 'accredited', 'accreditation', 'compliant',
        'what certifications', 'are you certified', 'credentials'
      ],
      answer: [
        'We hold the following certifications:\n\n- **ISO 14001**: Environmental management\n- **ISO 9001**: Quality management\n- **LEED**: Sustainable construction\n- **OHSAS 18001**: Health and safety\n\nOur projects comply with the highest international standards for quality and sustainability.',
        'We operate under a framework of international certifications that guarantee quality, environmental responsibility, and safe working conditions on every project:\n\n- ISO 9001 and ISO 14001\n- LEED for sustainable construction projects\n- OHSAS 18001 for job-site safety\n\nThese certifications are not just formalities — they define our internal working protocols.',
        'Certification is not a label for us, it is how we operate. We keep **ISO 9001, ISO 14001, LEED, and OHSAS 18001** active, all audited periodically by independent bodies.',
        'Yes, all our operations are certified. The main ones: ISO 9001 (quality), ISO 14001 (environmental management), and LEED for sustainable building projects. We also hold OHSAS 18001 for occupational safety.'
      ]
    },

    /* ── Contact and human assistance ── */
    {
      keys: [
        'contact', 'reach you', 'phone', 'email', 'write to you', 'call',
        'advisor', 'human', 'person', 'talk to someone', 'communicate',
        'whatsapp', 'number', 'i want to talk', 'need to speak',
        'how do i contact you', 'want someone to call me', 'schedule',
        'appointment', 'meeting', 'get in touch', 'speak with someone'
      ],
      answer: [
        'You can reach us through:\n\n- **Contact form** in the Contact section of this page\n- **WhatsApp** via the green button in the bottom corner\n- **Email** to our commercial team\n\nAn advisor will get back to you as soon as possible.',
        'Available contact channels:\n\n- The contact form on this page\n- WhatsApp (button in the bottom right corner of the screen)\n- Direct phone call\n\nIf you prefer, you can also ask us to call you at a specific time and we will arrange it.',
        'Our commercial team is available by phone, WhatsApp, email, and web form. During office hours response is immediate; outside those hours we reply on the next business day.',
        'To speak directly with an advisor, use the WhatsApp button at the bottom of the screen or leave your details in the Contact form. We schedule advisory calls with no cost or commitment.'
      ]
    },

    /* ── Projects / portfolio ── */
    {
      keys: [
        'project', 'projects', 'portfolio', 'examples', 'works', 'past work',
        'what have you built', 'references', 'case studies', 'experience',
        'have you built', 'what projects', 'show me', 'see projects',
        'gallery', 'achievements', 'past clients', 'previous projects',
        'completed work', 'case study', 'track record'
      ],
      answer: [
        'We have a diverse portfolio that includes:\n\n- Residential and corporate buildings\n- Roads and bridges infrastructure\n- Industrial and logistics projects\n- Heritage interventions and structural retrofitting\n\nVisit the **Projects** section of this page to see representative cases with detailed technical sheets.',
        'We have delivered projects in more than 8 countries across Latin America, ranging from medium-scale buildings to highly complex infrastructure.\n\nIn the **Projects** section of this site you will find documented examples with photographs, technical data, and measurable outcomes.',
        'Our portfolio spans residential construction, corporate buildings, public infrastructure, and industrial projects. Each case includes BIM documentation and performance metrics.\n\nWould you like an advisor to present projects similar to yours as a concrete reference?',
        'We have references in residential, commercial, industrial, and infrastructure sectors. If you tell me the type of project you are interested in, I can point you to the most relevant cases in our portfolio.'
      ]
    },

    /* ── Team / about us ── */
    {
      keys: [
        'team', 'who are you', 'who is behind', 'founder', 'director',
        'manager', 'professionals', 'engineers', 'staff', 'about you',
        'about maxcon', 'about the company', 'history', 'years of experience',
        'how many years', 'when were you founded', 'background', 'about us',
        'who works there', 'specialists', 'company profile'
      ],
      answer: [
        'We are an engineering and construction firm with more than 15 years of experience in the Latin American market. Our team is made up of structural engineers, architects, project managers, and certified BIM specialists.\n\nWhat sets us apart is the combination of technical rigor, cutting-edge technology, and a client-focused service.',
        'The Maxcon team comprises professionals certified in structural engineering, project management (PMI/PMP), and BIM modeling. We have more than 150 active professionals across our various markets.',
        'We are a company founded in Canada with operations across Latin America. Our multidisciplinary team combines the experience of senior engineers with the most advanced digital tools in the industry.\n\nYou can learn more about us in the **About** section of this site.',
        'We have a team of more than 150 professionals: structural engineers, site managers, BIM specialists, quality auditors, and technical support staff. Every project is assigned a dedicated manager as a single point of contact.'
      ]
    },

    /* ── Work process / methodology ── */
    {
      keys: [
        'process', 'methodology', 'how do you work', 'steps', 'stages',
        'phases', 'what is the process', 'what should i do', 'where do i start',
        'how do we start', 'workflow', 'procedure', 'how it works',
        'getting started', 'first steps', 'kick off', 'kickoff'
      ],
      answer: [
        'Our work process is structured in four phases:\n\n1. **Diagnosis and technical proposal**\n2. **Design and BIM modeling**\n3. **Construction execution and supervision**\n4. **Handover and post-delivery support**\n\nEach phase includes client review and approval checkpoints before moving forward.',
        'We work under a phased project methodology with defined deliverables at each stage. The client has full visibility and control over progress at all times through reports and access to the project\'s digital platform.',
        'From first contact to final handover, the client has a dedicated project manager as a single point of contact. This eliminates confusion from multiple liaisons and ensures consistency in communication.',
        'The process begins with a free initial consultation where we assess the project and its requirements. From there we prepare a technical proposal, sign the agreement, and kick off design. The client approves each stage before moving to the next.'
      ]
    },

    /* ── Quality and control ── */
    {
      keys: [
        'quality', 'quality control', 'assurance', 'inspection', 'review',
        'audit', 'warranty', 'guarantee', 'errors', 'failures', 'defects',
        'what if something goes wrong', 'do you stand behind your work',
        'accountability', 'responsibility', 'do you guarantee', 'warranty period'
      ],
      answer: [
        'Quality control is embedded throughout our entire process: from material verification to on-site inspections and strength testing. We operate under **ISO 9001** standards.',
        'We have a quality assurance system that includes stage-by-stage checklists, certified lab testing, and periodic process audits.\n\nEvery deliverable goes through internal technical review before being presented to the client.',
        'Quality is not inspected at the end — it is built in from the design stage. Our processes include early-stage reviews to detect and correct deviations before they reach the construction site.',
        'All our projects include a post-delivery warranty period. If during that period a technical non-conformity attributable to our work is found, we address it at no additional cost.'
      ]
    },

    /* ── Structural engineering ── */
    {
      keys: [
        'structural', 'structure', 'structural analysis', 'structural design',
        'load', 'loads', 'columns', 'beams', 'slab', 'foundation', 'foundations',
        'seismic', 'earthquake resistant', 'structural retrofit', 'soil study',
        'reinforced concrete', 'steel structure', 'structural review',
        'structural inspection', 'structural assessment'
      ],
      answer: [
        'Structural engineering is our core specialty. We provide:\n\n- Structural analysis and design under international codes\n- Seismic-resistant design adapted to local soil conditions\n- Retrofit and rehabilitation of existing structures\n- Third-party design review and validation\n\nAll projects are signed off by certified engineers.',
        'In structural design we perform gravitational, seismic, and wind load analysis, applying the codes in force in the country where the project is located. We use specialized software and integrated BIM models.',
        'From foundations to roof, our structural engineers cover the full design cycle: soil studies, calculation reports, construction drawings, and on-site support to verify that execution matches the design.',
        'We deliver full structural design: seismic analysis, reinforced concrete and steel structure design, foundations, and structural integrity assessment of existing buildings. All backed by our ISO certifications.'
      ]
    },

    /* ── Project management / supervision ── */
    {
      keys: [
        'project management', 'supervision', 'project director', 'site manager',
        'construction management', 'progress monitoring', 'budget control',
        'pmi', 'pmp', 'schedule control', 'cost control', 'oversight',
        'construction oversight', 'owner\'s representative'
      ],
      answer: [
        'Our project management service covers:\n\n- Work planning and scheduling (critical path)\n- Budget and cash flow control\n- Contractor and supplier coordination\n- Periodic progress reports for the client\n- Risk management and contingency planning',
        'We apply PMI/PMP methodologies adapted to construction and infrastructure projects. Each project has an assigned manager who acts as the single point of contact between the client and all execution teams.',
        'Project management at Maxcon includes control of three key variables: scope, cost, and schedule. We use digital tracking tools that the client can query in real time.',
        'We act as Project Manager or Owner\'s Representative depending on the client\'s needs. In both roles our responsibility is to ensure the work is executed in accordance with the agreed design, budget, and schedule.'
      ]
    },

    /* ── Infrastructure and civil works ── */
    {
      keys: [
        'infrastructure', 'civil works', 'bridge', 'bridges', 'road', 'roads',
        'highway', 'pavement', 'drainage', 'water supply', 'public works',
        'road network', 'urban works', 'viaduct', 'civil engineering',
        'road infrastructure'
      ],
      answer: [
        'We have extensive experience in civil infrastructure: design and supervision of roads, bridges, utility networks, and urban works. We apply BIM technology to these projects as well to improve coordination and reduce unforeseen issues.',
        'In the infrastructure segment we work with public and private clients on road, hydraulic, and utility projects. We have experience in public tenders and government contracts in several Latin American countries.',
        'We design, supervise, and manage infrastructure projects: roads, bridges, water supply and drainage networks, and urban works. Each project includes preliminary studies, detailed design, and construction accompaniment.'
      ]
    },

    /* ── Residential sector ── */
    {
      keys: [
        'residential', 'housing', 'apartment', 'house', 'residential building',
        'condominium', 'housing unit', 'developer', 'real estate developer',
        'multifamily', 'single family', 'housing development', 'homes'
      ],
      answer: [
        'We have experience in residential projects of all types: from single-family homes to large-scale multifamily complexes. We are involved from structural design through construction supervision and final handover.',
        'For the residential sector, our services include structural design, permit management, coordination with municipal authorities, and technical construction supervision. We work with builders, developers, and private clients.',
        'We design and supervise residential projects ensuring code compliance, structural efficiency, and construction quality. If you have a housing project in mind, we would be happy to prepare a proposal for you.'
      ]
    },

    /* ── Commercial and corporate sector ── */
    {
      keys: [
        'building', 'buildings', 'corporate', 'offices', 'office building',
        'commercial', 'shopping center', 'mall', 'hotel', 'hospitality',
        'warehouse', 'industrial building', 'industrial park', 'logistics',
        'logistics facility', 'commercial real estate'
      ],
      answer: [
        'We deliver corporate and commercial building projects with a focus on structural efficiency, spatial flexibility, and compliance with sustainable construction standards.',
        'Our commercial portfolio includes office buildings, hotels, and shopping centers. Each project is designed to maximize space efficiency and minimize long-term operating costs.',
        'For corporate and commercial projects we offer integrated design: structure, façade, MEP systems, and BIM management from the schematic design stage. This reduces on-site changes and ensures greater budget control.'
      ]
    },

    /* ── Payment terms / contractual conditions ── */
    {
      keys: [
        'payment', 'payment terms', 'how do you charge', 'installments',
        'advance payment', 'deposit', 'contract', 'conditions', 'invoice',
        'billing', 'wire transfer', 'credit', 'financing', 'how to pay',
        'payment schedule', 'payment structure', 'retainer'
      ],
      answer: [
        'Payment conditions are defined in the proposal and vary by project type. Our typical structure is:\n\n- Initial advance payment upon contract signing\n- Partial payments by milestone or construction progress\n- Final payment upon handover\n\nWe accept domestic and international bank transfers.',
        'Our contractual terms are transparent and negotiable. The standard structure is a 30% advance, progress-based payments, and a final payment at handover. For short consulting engagements it may be a single payment.\n\nIn all cases we issue a formal invoice and all terms are set out in the contract.',
        'We define payment conditions on a case-by-case basis, always with a formal contract that specifies them clearly. We do not work without a contract. For large-scale projects we also operate through trust structures for added transparency.'
      ]
    },

    /* ── Sustainability / environment ── */
    {
      keys: [
        'sustainable', 'sustainability', 'green', 'eco-friendly', 'environment',
        'environmental impact', 'carbon footprint', 'energy efficiency',
        'renewable energy', 'solar panels', 'green building', 'green construction',
        'leed certification', 'bioconstruction', 'net zero', 'passive design'
      ],
      answer: [
        'Sustainability is an integral part of our approach. We hold **LEED** certification and apply energy efficiency, water management, and sustainable materials criteria to every project that requires them.',
        'We design buildings with sustainable construction criteria: high-performance thermal envelopes, rainwater harvesting systems, optimized natural lighting, and reduction of the carbon footprint across the construction supply chain.',
        'For clients seeking LEED or similar certification, we provide the complete process: preliminary assessment, credit-oriented design, technical documentation, and accompaniment throughout the certification process.'
      ]
    },

    /* ── Emergencies / damage / pathologies ── */
    {
      keys: [
        'emergency', 'urgent', 'urgency', 'damage', 'collapse', 'crack',
        'cracks', 'settlement', 'subsidence', 'flooding', 'earthquake',
        'structural failure', 'structural problem', 'my building', 'failure',
        'structural assessment', 'urgent inspection', 'structural damage'
      ],
      answer: [
        'We handle structural emergencies as a priority. If your building shows cracks, settlement, visible damage, or has experienced an earthquake or flooding, contact us immediately via WhatsApp or phone.\n\nWe dispatch a specialist for an assessment as quickly as possible.',
        'We offer emergency diagnosis service for structures with possible damage. The process includes visual inspection, deformation measurement, and issuance of a preliminary safety report.\n\nDo not wait for the problem to worsen — contact us via the WhatsApp button.',
        'Yes, we handle emergencies. If you have a structural problem requiring immediate attention, reach out by phone or WhatsApp. Our on-call team coordinates the response for critical situations.'
      ]
    },

    /* ── Alliances / suppliers / subcontractors ── */
    {
      keys: [
        'alliance', 'alliances', 'supplier', 'suppliers', 'subcontractor',
        'subcontractors', 'partner', 'partners', 'collaboration',
        'work with you', 'become a supplier', 'vendor registration',
        'joint venture', 'teaming', 'partnering'
      ],
      answer: [
        'We work with a qualified network of suppliers and subcontractors in each of the countries where we operate. If you would like to register as a supplier or explore an alliance, please write to us through the Contact form indicating your specialty.',
        'We are open to strategic alliances with engineering firms, construction companies, materials suppliers, and technology companies. The qualification process includes a review of technical and financial capacity along with project references.',
        'To register as a supplier or propose a collaboration, contact us through the Contact form. Our procurement team will reply with the requirements for the homologation process.'
      ]
    }

  ],

  /* ════════════════════════════════════════════════
     FALLBACK MESSAGES — when the bot cannot answer
  ════════════════════════════════════════════════ */
  fallback: [
    'That inquiry requires personalized attention from our technical team. Here is the direct contact:',
    'I don\'t have specific information on that right now, but our team can help you directly:',
    'To give you a precise answer on that topic, the best option is to speak with one of our specialists:',
    'That is beyond what I have on record here. Let me share our technical team\'s contact:',
    'I want to make sure you get the right answer, so the best approach is to connect you directly with the team:',
    'I don\'t have the exact details for that question, but you can reach out directly here:',
    'That is a more specific inquiry than I can handle through this channel. Here is the team\'s contact:',
    'For topics like this, our team will give you a more complete answer. Here is the direct contact:',
    'I don\'t have that information available yet, but you can contact our team directly:',
    'I\'d rather connect you with someone from the team for that specific topic. Here is their contact:',
    'Some questions deserve a direct technical answer. Here is the channel to speak with a specialist:',
    'To give you the precise information you need, it is best for one of our advisors to reach out:',
    'That level of detail is best handled directly by someone from our team. Here is how to reach them:',
    'My role is to guide you, but for this case you need to speak directly with the team. Here is the contact:',
    'I want you to receive the best possible answer, and for that topic our team is who can help you most:'
  ],

  /* ════════════════════════════════════════════════
     WELCOME MESSAGES (20 variants)
     One is chosen at random each time the user
     opens the chat for the first time in the session.
  ════════════════════════════════════════════════ */
  welcome: [
    'Thank you for reaching out. I am Maxcon\'s virtual assistant, here to guide you through our engineering, project management, and BIM technology services. Feel free to ask anything.',
    'It is a pleasure to assist you. I am Maxcon\'s virtual assistant, here to help with anything related to our projects and technical capabilities.',
    'Hello. This is Maxcon\'s virtual assistant. You can ask me about structural engineering, project management, BIM technology, or any other service we offer.',
    'Welcome to Maxcon\'s digital assistance channel. I am the virtual assistant and I am available to guide you through our services. How can I help?',
    'Thank you for your visit. Maxcon\'s virtual assistant is at your service to guide you through our engineering and construction solutions. How can I help you today?',
    'Good day. I am Maxcon\'s virtual assistant, here to guide you through our services. Do you have any questions about your projects or our technical capabilities?',
    'Hi, thanks for contacting us. This channel is handled by Maxcon\'s virtual assistant. I am here to guide you through our services. Go ahead with your inquiry.',
    'Great to hear from you. I am Maxcon\'s virtual assistant and I am here to guide you through our engineering and construction technology services.',
    'Hello. Maxcon virtual assistant at your service. I am here to guide you on structural engineering, project management, and construction technology. How can I help?',
    'Thank you for choosing Maxcon. I am the virtual assistant and I am here to guide you with anything you need about our projects and technical solutions.',
    'It is a pleasure to assist you. Maxcon\'s virtual assistant is at your disposal to guide you through our structural engineering, management, and construction technology services.',
    'Hello, welcome. I am Maxcon\'s virtual assistant, here to guide you on services, projects, and our firm\'s capabilities. Please go ahead.',
    'Glad to have your inquiry. Maxcon\'s virtual assistant is available to assist you. Ask your question and we will be happy to help.',
    'Thank you for reaching out to Maxcon. I am the firm\'s virtual assistant and I am available to guide you on any service, project, or technical capability of our team.',
    'Hi. Welcome to Maxcon\'s chat. I am your virtual assistant and I am ready to help you with any questions about our engineering and construction services.',
    'Hello and welcome. I am Maxcon\'s virtual assistant. Feel free to ask me anything about our services, projects, certifications, or team.',
    'Good to connect with you. Maxcon\'s virtual assistant is here to help. Whether it\'s about our services, timelines, or technical capabilities — just ask.',
    'Hi there. Thanks for stopping by. I\'m Maxcon\'s virtual assistant, ready to help you navigate our engineering and construction services.',
    'Welcome. I\'m here to help you learn more about Maxcon — our services, projects, methodology, and how we can support your next project.',
    'Hello! Maxcon\'s virtual assistant here. Ask me anything about our structural engineering, project management, BIM solutions, or anything else you\'d like to know.'
  ],

  /* ════════════════════════════════════════════════
     MODE CHANGE MESSAGES
  ════════════════════════════════════════════════ */
  modeIntros: {
    empresa: [
      'Back to company mode. Ask me about services, projects, BIM technology, or any aspect of our firm.',
      'Sure. Let\'s continue with information about the company and our services. What would you like to know?',
      'Company mode restored. I can answer questions about services, experience, geographic coverage, certifications, and more.'
    ],
    general: [
      'General conversation mode activated. You can now ask me about technology, engineering, science, or any other topic of interest.',
      'Switching to general mode. Feel free to ask about technical topics, industry trends, or anything else you\'d like to explore.',
      'Open conversation mode on. The floor is yours — ask about any topic you prefer.'
    ]
  },

  /* ════════════════════════════════════════════════
     COMPANY CONTACT
     Update with real data before deployment.
  ════════════════════════════════════════════════ */
  contact: {
    name: 'Engineering Team',
    phoneDisplay: '+57 300 123 4567',
    phoneHref: '+573001234567'
  }

};
