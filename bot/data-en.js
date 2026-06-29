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
        'portfolio of services', 'service portfolio', 'activities'
      ],
      answer: [
        'At **JPO Contracting Unlimited Inc.** we offer professional services specialized in the commercial and residential construction sector. Our main lines are:\n\n- **Architecture and Design**: from concept to construction drawings.\n- **Structural and Civil Engineering**: design, calculation and technical supervision.\n- **Shop Drawings**: detailed fabrication and installation plans.\n- **Permit and Regulatory Management**: obtaining licenses and ensuring code compliance.\n\nEvery project receives personalized attention from the initial consultation through final delivery.',
        'We are a firm based in Oshawa, Canada, specializing in architecture, engineering, shop drawings, and permit services. We work on both residential and commercial projects, guaranteeing quality and on-time delivery.\n\nWould you like more details about any of our service areas?',
        'Our service offering covers the entire construction project cycle:\n\n- Architectural and interior design\n- Structural calculation and seismic analysis\n- Detailed shop drawings for manufacturers\n- Municipal permit and building license procurement\n\nContact us for a no-obligation consultation.'
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
        'Our business hours are **Monday to Friday, 8:00 a.m. to 6:00 p.m.** (Toronto time, EST). On Saturdays we are available from 9:00 a.m. to 1:00 p.m. for specific inquiries.\n\nOutside those hours you can leave us a message through the contact form or by email, and we will reply on the next business day.',
        'We attend from **Monday to Friday, 8:00 a.m. to 6:00 p.m.** (EST). On weekends we only handle technical emergencies or active project issues.\n\nIf you would like to schedule a consultation, you can do so at any time through this chat or the contact form.',
        'Our team is available Monday to Friday, from 8 a.m. to 6 p.m. Eastern time. On Saturdays there is limited availability until noon.\n\nFor urgent inquiries outside office hours, write to us and an advisor will get back to you at the start of the next business day.',
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
        'To prepare a technical proposal we need to understand the scope of your project. We recommend:\n\n1. Completing the form in the **Contact** section of this page.\n2. Or reaching out to our commercial team directly at **+1 (437) 830-2999** to schedule a free consultation.\n\nThat way we can prepare a proposal tailored to your specific situation.',
        'The cost of each project depends on its scale, location, and the disciplines involved (architecture, engineering, shop drawings or permits). To provide an accurate budget we need a brief prior assessment.\n\nYou can start the process by filling out the contact form or calling us. **The first consultation is free of charge**.',
        'We do not work with standard rates because every project is different. What we do guarantee is a clear, itemized proposal with no hidden charges.\n\nContact our team to receive a personalized technical proposal based on your needs.'
      ]
    },

    /* ── Geographic coverage ── */
    {
      keys: [
        'country', 'countries', 'where', 'coverage', 'operate', 'presence',
        'international', 'latin america', 'region', 'colombia', 'mexico',
        'peru', 'chile', 'argentina', 'brazil', 'ecuador', 'panama',
        'outside colombia', 'another country', 'do you work in', 'do you have offices',
        'are you in', 'which countries', 'global', 'locations',
        'canada', 'ontario', 'toronto', 'oshawa', 'east york'
      ],
      answer: [
        'Our main office is located in **Oshawa, Ontario, Canada**, at **489 Fairleigh Ave, Oshawa, ON L1J 2W7**. We primarily serve projects in the province of Ontario and across Canada, although we can also evaluate international projects under specific conditions.\n\nIf your project is in another region, contact us and we will study the feasibility.',
        'We operate from Oshawa, Canada, with coverage across the Canadian territory. We have experience in commercial and residential projects in the Ontario region, and we are open to collaborating in other provinces upon agreement.\n\nDo you have a project in a specific location you would like to ask us about?',
        'We are strategically located in Oshawa, with easy access to major Ontario highways. We serve clients throughout the metropolitan area and the rest of Ontario.\n\nFor projects outside Ontario, we can manage local teams or remote advisory depending on the scope.'
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
        'Timelines vary depending on project type and scale:\n\n- Architectural consulting and studies: **2 to 6 weeks**\n- Structural design and shop drawings: **4 to 10 weeks**\n- Full projects (design + permits): **3 to 9 months**\n- Large-scale construction projects: **1 to 2 years**\n\nWe always include a detailed schedule in the technical proposal.',
        'Execution times depend on the complexity of the project and municipal processing. As a general reference:\n\n- Architectural and engineering drawings: weeks\n- Detailed shop drawings: weeks\n- Permit management: 2 to 6 months (depending on municipality)\n- Complete construction: months to years\n\nEvery proposal includes a schedule with milestones and partial delivery dates.',
        'We do not set generic timelines because every project has its own conditions. What we do guarantee is a realistic schedule from day one and proactive communication if any variation arises.\n\nOur on-time delivery rate exceeds **95%** across completed projects.'
      ]
    },

    /* ── Technology / tools ── */
    {
      keys: [
        'software', 'tools', 'programs', 'autocad', 'revit', 'sketchup',
        'bim', 'modeling', 'digital', 'technology', 'platform',
        '3d model', 'rendering', 'visualization'
      ],
      answer: [
        'We work with the most advanced tools in the industry: **AutoCAD, Revit, SketchUp and rendering packages** to deliver high-quality drawings and 3D models that facilitate decision-making and communication with construction teams.\n\nWe also use structural calculation software to ensure safety and efficiency in our designs.',
        'Our digital workflow includes BIM modeling (Revit) to coordinate disciplines, precise shop drawings, and photorealistic renders for client presentations and authority submissions.\n\nWe can adapt to the formats your team requires.',
        'We hold licenses for the main design and calculation programs. If you need a specific format (DWG, PDF, RVT, etc.), we deliver it without problem.'
      ]
    },

    /* ── Certifications and standards ── */
    {
      keys: [
        'iso', 'certification', 'certifications', 'leed', 'sustainable',
        'sustainability', 'certified', 'standard', 'standards', 'ohsas',
        'quality', 'environmental', 'green building', 'green construction',
        'technical standard', 'accredited', 'accreditation', 'compliant',
        'what certifications', 'are you certified', 'credentials',
        'ontario building code', 'obc'
      ],
      answer: [
        'All our designs and drawings comply with local regulations, including the **Ontario Building Code (OBC)** and applicable municipal codes. We also follow quality best practices in our internal processes.\n\nAlthough we are not formally ISO certified, we apply quality management and safety practices in every project.',
        'We ensure that every project meets all Ontario and municipal construction regulations. We work with registered engineers and architects who sign off on drawings and calculation reports.\n\nIf your project requires specific certifications (LEED, etc.), we can advise and coordinate with external specialists.'
      ]
    },

    /* ── Contact and human assistance ── */
    {
      showContactCard: true,
      keys: [
        'contact', 'reach you', 'phone', 'email', 'write to you', 'call',
        'advisor', 'human', 'person', 'talk to someone', 'communicate',
        'whatsapp', 'number', 'i want to talk', 'need to speak',
        'how do i contact you', 'want someone to call me', 'schedule',
        'appointment', 'meeting', 'get in touch', 'speak with someone',
        'send me your number', 'give me your number', 'give me a contact',
        'what is your email', 'what is the email', 'pass me the number',
        'some contact', 'any contact'
      ],
      answer: [
        'You can reach us through:\n\n- **Phone / WhatsApp:** +1 (437) 830-2999\n- **Contact form** in the Contact section of this page\n- **Email** (you can request it through this chat)\n- **In-person visit:** 489 Fairleigh Ave, Oshawa, ON L1J 2W7 (by appointment)\n\nAn advisor will get back to you as soon as possible.',
        'Available contact channels:\n\n- Call or WhatsApp at **+1 (437) 830-2999**\n- The contact form on this page\n- Email\n\nIf you prefer, you can also ask us to call you at a specific time and we will arrange it.',
        'Our commercial team is available by phone, WhatsApp, email, and web form. During office hours response is immediate; outside those hours we reply on the next business day.\n\nDo not hesitate to contact us, we are here to help.'
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
        'We have a diverse portfolio including residential projects (single-family and multi-family) and commercial projects (offices, retail, mixed-use). We have completed architectural designs, structural calculations, shop drawings, and permit management in the Ontario region.\n\nVisit the **Projects** section of this page to see representative cases. If you need specific references, contact us and we will share examples similar to your project.',
        'We have executed projects for private clients, developers, and general contractors in Ontario. Our work ranges from renovation drawings to full designs for new construction.\n\nIn the **Projects** section you will find a sample of our capabilities. Would you like an advisor to present projects similar to yours?',
        'Our portfolio covers residential and commercial sectors, with an emphasis on design quality and drawing precision. We work with builders, architects, and engineers to deliver impeccable technical documentation.\n\nIf you want to see concrete examples, get in touch and we will send you relevant cases.'
      ]
    },

    /* ── Team / about us ── */
    {
      keys: [
        'team', 'who are you', 'who is behind', 'founder', 'director',
        'manager', 'professionals', 'engineers', 'staff', 'about you',
        'about the company', 'history', 'years of experience',
        'how many years', 'when were you founded', 'background', 'about us',
        'who works there', 'specialists', 'company profile'
      ],
      answer: [
        '**JPO Contracting Unlimited Inc.** was incorporated in Ontario in **September 2022**. Our team is led by **Jose Rafael Pardo Ojeda**, who has extensive experience in the construction and engineering sector.\n\nWe work with a network of collaborating professionals (architects, engineers, drafters) to offer a comprehensive and high-quality service.',
        'We are a young but knowledgeable company in architecture, structural engineering, and permit management. Our founder, Jose Rafael Pardo Ojeda, personally oversees each project to ensure excellence.\n\nYou can learn more about us in the **About** section of this site.',
        'We have a multidisciplinary team of registered professionals in Ontario. We specialize in providing agile and efficient technical solutions, adapted to each client\'s needs.\n\nOur commitment is total client satisfaction and meeting agreed deadlines.'
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
        'Our work process is structured in four phases:\n\n1. **Diagnosis and technical proposal** (initial meeting, requirement gathering).\n2. **Design and development** (architectural, structural drawings, shop drawings).\n3. **Permit management** (submission to municipalities and authorities).\n4. **Delivery and support** (final review, adjustments, post-delivery support).\n\nEach phase includes client review and approval checkpoints before moving forward.',
        'We work under a phased project methodology with defined deliverables at each stage. The client has full visibility and control over progress at all times.\n\nFrom first contact to final handover, you will have a dedicated manager as a single point of contact.',
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
        'Quality control is fundamental in our work. We review every drawing, calculation, and document before delivery. We ensure everything complies with local codes and project requirements.\n\nIf during execution an error attributable to our drawings is detected, we correct it at no additional cost.',
        'We have an internal review system that includes cross-checking between disciplines. Every deliverable goes through technical review before being sent to the client or authorities.\n\nOur goal is to minimize errors and ensure flawless documentation.',
        'Quality is non-negotiable. All our designs and drawings are meticulously reviewed to avoid issues on site or in the permit process.\n\nIf any observation arises, we address it immediately and without extra charges if it is our responsibility.'
      ]
    },

    /* ── Architecture ── */
    {
      keys: [
        'architecture', 'architect', 'architectural design', 'architectural drawings',
        'floor plans', 'elevations', 'sections', 'render', 'interior design',
        'layout', 'spaces', 'conceptualization', 'schematic design'
      ],
      answer: [
        'We offer architectural services from concept to construction drawings. We develop floor plans, elevations, sections, 3D renders, and all the documentation needed for permit applications and construction.\n\nWe work on both residential (houses, apartments) and commercial (offices, retail, mixed-use) projects.',
        'Our architecture team creates functional and aesthetically pleasing designs, tailored to client needs and the urban environment. We deliver detailed drawings, photorealistic renders, and all required graphic documentation.\n\nIf you need renovations, additions, or a project from scratch, we can help.'
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
        'Structural engineering is one of our pillars. We perform calculation and design of concrete, steel, timber, and masonry structures, in compliance with the Ontario Building Code and applicable standards.\n\nWe deliver calculation reports, reinforcement drawings, and construction details to ensure safety and durability.',
        'We design efficient and safe structures for all types of buildings. Our engineers use specialized software for load, seismic, and wind analysis.\n\nWe also offer design reviews and structural reinforcement consulting.'
      ]
    },

    /* ── Shop drawings ── */
    {
      keys: [
        'shop drawing', 'shop drawings', 'fabrication drawings', 'installation drawings',
        'construction details', 'fabrication', 'installation', 'steel detailing',
        'erection drawings', 'carpentry drawings', 'metalwork drawings',
        'structural steel drawings', 'steel plans'
      ],
      answer: [
        'We produce detailed **shop drawings** for fabrication and installation of structural, architectural, and finishing elements. We work with precision to ensure that fabricators and installers can execute without errors.\n\nWe deliver drawings in DWG, PDF, and, if required, 3D models.',
        'Our shop drawings are key to a trouble-free construction. We develop fabrication drawings for steel structures, carpentry, metalwork, installations, and any other components that need to be prefabricated.\n\nWe coordinate with site teams to ensure correct interpretation of details.'
      ]
    },

    /* ── Permits and municipal management ── */
    {
      keys: [
        'permit', 'permits', 'license', 'licenses', 'building permit',
        'zoning', 'municipality', 'city', 'toronto', 'ontario',
        'application', 'process', 'approval', 'regulations', 'building department'
      ],
      answer: [
        'We manage building permit acquisition with municipalities in Ontario, including the City of Toronto. We prepare all required technical documentation (drawings, reports, forms) and follow up until approval.\n\nOur knowledge of local codes and regulations streamlines the process and reduces the risk of rejections.',
        'We offer a comprehensive **permit and regulatory management** service. We take care of:\n\n- Zoning and land use review\n- Preparation of submission drawings\n- Filling out municipal forms\n- Follow-up and response to comments\n- Obtaining the building permit\n\nSo you can focus on construction while we navigate the bureaucracy.'
      ]
    },

    /* ── Commercial projects ── */
    {
      keys: [
        'commercial', 'offices', 'retail', 'stores', 'restaurants',
        'commercial building', 'shopping center', 'hotel', 'hospitality',
        'commercial space', 'business'
      ],
      answer: [
        'We have experience in commercial projects: offices, retail stores, restaurants, hotels, and mixed-use buildings. We offer architectural design, structural calculation, shop drawings, and permit management for these types of spaces.\n\nWe understand the particular needs of each business and adapt designs to maximize functionality and corporate image.'
      ]
    },

    /* ── Residential projects ── */
    {
      keys: [
        'residential', 'housing', 'house', 'apartment', 'condo',
        'condominium', 'single family', 'multi-family',
        'renovation', 'addition', 'extension'
      ],
      answer: [
        'For residential projects we offer architectural and structural design, drawing production, shop drawings, and permit management. We serve from single-family homes to apartment complexes.\n\nWe also carry out renovation and addition projects, adapting existing structures to new needs.'
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
        'Payment conditions are defined in the proposal and vary by project type. Our typical structure is:\n\n- Initial advance payment upon contract signing (30% - 50%)\n- Partial payments by milestone or progress\n- Final payment upon handover\n\nWe accept bank transfers (Interac e-transfer, wire transfer) and certified cheques. We issue formal invoices.',
        'Our contractual terms are transparent and negotiable. The standard structure is a 40% advance, progress-based payments, and a final payment at handover. For short consulting engagements it may be a single payment.\n\nIn all cases we issue a formal invoice and all terms are set out in the contract.'
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
        'We incorporate sustainability criteria into our designs whenever the client requests it. We can orient the project towards energy efficiency, sustainable materials, and resource optimization.\n\nIf you seek LEED or similar certification, we can advise and coordinate with external specialists to meet the requirements.'
      ]
    },

    /* ── Emergencies / damage / urgent reviews ── */
    {
      keys: [
        'emergency', 'urgent', 'urgency', 'damage', 'collapse', 'crack',
        'cracks', 'settlement', 'subsidence', 'flooding', 'earthquake',
        'structural failure', 'structural problem', 'my building', 'failure',
        'structural assessment', 'urgent inspection', 'structural damage'
      ],
      answer: [
        'We handle structural emergencies or visible damage as a priority. If your building shows cracks, settlement, or has suffered an earthquake or flooding, contact us immediately by phone or WhatsApp.\n\nWe dispatch a specialist for an assessment as quickly as possible.',
        'We offer emergency diagnosis service for structures with possible damage. The process includes visual inspection, deformation measurement, and issuance of a preliminary safety report.\n\nDo not wait for the problem to worsen — call us at **+1 (437) 830-2999**.'
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
        'We are open to collaborating with other professionals and companies in the sector. If you want to register as a supplier or propose an alliance, please write to us through the Contact form indicating your specialty.\n\nWe evaluate technical capacity and references to establish mutually beneficial working relationships.'
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
    'Thank you for reaching out to JPO Contracting Unlimited Inc. I am the virtual assistant, here to guide you through our architecture, engineering, shop drawings, and permit services. Feel free to ask anything.',
    'It is a pleasure to assist you. I am the virtual assistant for JPO Contracting Unlimited Inc., specialized in residential and commercial construction services. How can we help?',
    'Hello. This is JPO Contracting Unlimited Inc.\'s virtual assistant. You can ask me about architectural design, structural engineering, shop drawings, or building permits.',
    'Welcome to JPO Contracting Unlimited Inc.\'s digital assistance channel. I am the virtual assistant and I am available to guide you. How can I help?',
    'Thank you for your visit. JPO Contracting Unlimited Inc.\'s virtual assistant is at your service to guide you through our services. How can I help you today?',
    'Good day. I am the virtual assistant for JPO Contracting Unlimited Inc. Do you have any questions about your projects or our technical capabilities?',
    'Hi, thanks for contacting us. This channel is handled by JPO Contracting Unlimited Inc.\'s virtual assistant. I am here to guide you through our services. Go ahead with your inquiry.',
    'Great to hear from you. I am the virtual assistant for JPO Contracting Unlimited Inc. and I am here to guide you through our construction and design services.',
    'Hello. JPO Contracting Unlimited Inc. virtual assistant at your service. I am here to guide you on architecture, structural engineering, and permits. How can I help?',
    'Thank you for choosing JPO Contracting Unlimited Inc. I am the virtual assistant and I am here to guide you with anything you need about our projects and technical solutions.',
    'It is a pleasure to assist you. JPO Contracting Unlimited Inc.\'s virtual assistant is at your disposal to guide you through our architecture, engineering, and permit services.',
    'Hello, welcome. I am the virtual assistant for JPO Contracting Unlimited Inc., here to guide you on services, projects, and capabilities. Please go ahead.',
    'Glad to have your inquiry. JPO Contracting Unlimited Inc.\'s virtual assistant is available to assist you. Ask your question and we will be happy to help.',
    'Thank you for reaching out to JPO Contracting Unlimited Inc. I am the firm\'s virtual assistant and I am available to guide you on any service or project.',
    'Hi. Welcome to JPO Contracting Unlimited Inc.\'s chat. I am your virtual assistant and I am ready to help you with any questions about our construction and engineering services.',
    'Hello and welcome. I am the virtual assistant for JPO Contracting Unlimited Inc. Feel free to ask me anything about our services, projects, or team.',
    'Good to connect with you. JPO Contracting Unlimited Inc.\'s virtual assistant is here to help. Whether it\'s about our services, timelines, or technical capabilities — just ask.',
    'Hi there. Thanks for stopping by. I\'m the virtual assistant for JPO Contracting Unlimited Inc., ready to help you navigate our engineering and construction services.',
    'Welcome. I\'m here to help you learn more about JPO Contracting Unlimited Inc. — our services, projects, methodology, and how we can support your next project.',
    'Hello! JPO Contracting Unlimited Inc.\'s virtual assistant here. Ask me anything about architectural design, structural engineering, shop drawings, permits, or anything else you\'d like to know.'
  ],

  /* ════════════════════════════════════════════════
     MODE CHANGE MESSAGES
  ════════════════════════════════════════════════ */
  modeIntros: {
    empresa: [
      'Back to company mode. Ask me about services, projects, architecture, engineering, or any aspect of JPO Contracting Unlimited Inc.',
      'Sure. Let\'s continue with information about the company and our services. What would you like to know?',
      'Company mode restored. I can answer questions about services, experience, geographic coverage, permits, and more.'
    ],
    general: [
      'General conversation mode activated. You can now ask me about technology, engineering, construction, design, or any other topic of interest.',
      'Switching to general mode. Feel free to ask about technical topics, industry trends, or anything else you\'d like to explore.',
      'Open conversation mode on. The floor is yours — ask about any topic you prefer.'
    ]
  },

  /* ════════════════════════════════════════════════
     COMPANY CONTACT
  ════════════════════════════════════════════════ */
  contact: {
    name: 'JPO Contracting Unlimited Inc.',
    phoneDisplay: '+1 (437) 830-2999',
    phoneHref: '+14378302999',
    email: 'info@jpocontracting.com'   /* Change to the actual email you use */
  }

};