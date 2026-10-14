export type Lang = 'es' | 'en'

export type ServiceKey = 'homes' | 'rentals' | 'agencies' | 'prep'

const es = {
  meta: {
    title: 'G&C Pinturas · Pintores en Elche, Santa Pola, Gran Alacant y Vega Baja',
    description:
      'Pintura profesional para viviendas, apartamentos turísticos y propiedades en Elche, Santa Pola, Gran Alacant y Vega Baja. Presupuesto gratis y sin compromiso.',
  },
  nav: {
    home: 'Inicio',
    work: 'Antes y después',
    services: 'Servicios',
    about: 'Nosotros',
    area: 'Zona',
    contact: 'Contacto',
    menu: 'Menú',
    language: 'Idioma',
  },
  cta: {
    quote: 'Solicita tu presupuesto gratis',
    quoteShort: 'Presupuesto gratis',
    whatsapp: 'Habla con nosotros por WhatsApp',
    whatsappShort: 'WhatsApp',
  },
  hero: {
    eyebrow: 'Pintura profesional · Costa Blanca',
    titleA: 'Calidad que',
    titleHighlight: 'se ve.',
    titleB: 'Confianza que se siente.',
    text: 'Pintura profesional para viviendas, apartamentos turísticos y propiedades en Elche, Santa Pola, Gran Alacant y Vega Baja. Puntualidad, rapidez, limpieza y acabados de primera.',
    trust: ['Presupuesto gratis', 'Protección y limpieza', 'Atención en español e inglés'],
    mediaBadge: 'Acabado de un proyecto en Canadá',
    floatingTitle: 'Experiencia norteamericana',
    floatingText: 'Ahora en la Costa Blanca',
  },
  work: {
    eyebrow: 'Antes y después',
    title: 'La diferencia se ve.',
    text: 'Trabajos reales de G&C Pinturas en España. Desliza para comparar.',
    before: 'Antes',
    after: 'Después',
    sliderLabel: 'Desliza para comparar antes y después',
    items: [
      {
        title: 'Pasillo renovado',
        text: 'Pintura blanca y cambio de focos a LED. Nuestro primer cliente en España.',
      },
      {
        title: 'Reparación y pintura',
        text: 'Preparación de paredes, reparación de desperfectos y acabado final a gusto del cliente.',
      },
    ],
    reelTitle: 'Mira la transformación',
    reelText: 'Del amarillo de siempre a un blanco limpio y luminoso.',
    play: 'Reproducir vídeo',
    pause: 'Pausar vídeo',
  },
  services: {
    eyebrow: 'Servicios',
    title: 'Pintura para cada tipo de propiedad',
    text: 'Desde una habitación hasta una vivienda completa. Nos adaptamos a ti, a tu calendario y a tu propiedad.',
    items: {
      homes: {
        title: 'Pintura de viviendas',
        text: 'Habitaciones, paredes, techos y viviendas completas.',
      },
      rentals: {
        title: 'Apartamentos turísticos',
        text: 'Renovación y preparación de alojamientos entre reservas, según calendario y alcance del trabajo.',
      },
      agencies: {
        title: 'Inmobiliarias y propietarios',
        text: 'Preparación de viviendas para venta o alquiler y renovación entre inquilinos.',
      },
      prep: {
        title: 'Preparación de paredes',
        text: 'Reparación de pequeños desperfectos, alisado y preparación de superficies antes de pintar.',
      },
    } satisfies Record<ServiceKey, { title: string; text: string }>,
    ask: 'Pedir presupuesto',
  },
  why: {
    eyebrow: 'Por qué elegir G&C',
    title: 'Un trabajo bien hecho empieza mucho antes de pintar.',
    items: [
      { title: 'Acabados cuidados', text: 'Preparamos cada superficie para un resultado uniforme y duradero.' },
      { title: 'Puntualidad', text: 'Planificación realista y compromiso con los plazos acordados.' },
      { title: 'Rapidez', text: 'Trabajamos con agilidad, sin saltarnos ningún paso necesario.' },
      { title: 'Protección y limpieza', text: 'Cubrimos suelos, muebles y ventanas, y lo dejamos todo recogido.' },
      { title: 'Trato cercano', text: 'Comunicación clara de principio a fin, en español o en inglés.' },
    ],
    imageAlt: 'Salón con suelo y ventanales totalmente protegidos con plástico antes de pintar',
    imageCaption: 'Todo protegido antes de empezar',
  },
  story: {
    eyebrow: 'Nuestra historia',
    title: 'De Canadá a la Costa Blanca',
    paragraphs: [
      'Hace seis años, mi esposa y yo comenzamos nuestra aventura en el sector de la pintura en Canadá. Allí desarrollamos nuestra experiencia y aprendimos una forma de trabajar basada en la preparación, la organización y el cuidado de cada detalle.',
      'Decidimos volver a España para estar cerca de nuestra familia y poner en práctica todo lo aprendido en Norteamérica. Así nace G&C Pinturas: un proyecto cercano y profesional, comprometido con la puntualidad, la limpieza y los acabados de primera.',
    ],
    signature: 'G&C Pinturas',
    stats: [
      { value: '+6', label: 'años en el sector' },
      { value: 'CA → ES', label: 'método norteamericano' },
      { value: '0 €', label: 'presupuesto sin compromiso' },
    ],
    galleryTitle: 'Así protegemos cada obra',
    gallery: {
      'obra-pasillo': 'Pasillo recién pintado con el suelo cubierto y las puertas protegidas',
      'obra-habitacion': 'Habitación pintada con suelo y ventana protegidos',
      'obra-ventana': 'Ventana cubierta con plástico y cinta antes de pintar',
    },
  },
  process: {
    eyebrow: 'Cómo trabajamos',
    title: 'Cuatro pasos, sin sorpresas',
    steps: [
      { title: 'Cuéntanos tu proyecto', text: 'Contacta por WhatsApp y envía fotografías si las tienes.' },
      { title: 'Valoramos el trabajo', text: 'Revisamos la información y, si hace falta, concertamos una visita.' },
      { title: 'Recibe tu presupuesto', text: 'Acordamos el alcance del trabajo y las condiciones antes de empezar.' },
      { title: 'Pintamos y revisamos', text: 'Trabajamos de forma organizada y revisamos los detalles al finalizar.' },
    ],
  },
  area: {
    eyebrow: 'Zona de servicio',
    title: 'Cerca de ti, en el sur de Alicante',
    text: 'Trabajamos en Elche, Santa Pola, Gran Alacant y Vega Baja, incluyendo Torrevieja, Guardamar del Segura, Ciudad Quesada/Rojales, Almoradí y Orihuela, según el proyecto.',
    main: 'Zona principal',
    also: 'También en',
    sea: 'Mar Mediterráneo',
    mapLabel: 'Mapa de la zona de servicio de G&C Pinturas en el sur de la provincia de Alicante',
    ask: '¿Tu localidad no aparece? Pregúntanos.',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo que suelen preguntarnos',
    items: [
      {
        q: '¿El presupuesto tiene algún coste?',
        a: 'No. El presupuesto es gratuito y sin compromiso. Puedes enviarnos fotos por WhatsApp para una primera valoración.',
      },
      {
        q: '¿Trabajáis en apartamentos turísticos entre reservas?',
        a: 'Sí. Nos adaptamos a tu calendario y al alcance del trabajo para que el alojamiento esté listo para los próximos huéspedes.',
      },
      {
        q: '¿Protegéis los muebles y los suelos?',
        a: 'Siempre. Cubrimos suelos, muebles, ventanas y enchufes antes de empezar, y dejamos todo limpio al terminar.',
      },
      {
        q: '¿Cuánto tiempo tarda un trabajo?',
        a: 'Depende del tamaño y del estado de las superficies. Junto con el presupuesto te damos una planificación realista.',
      },
      {
        q: '¿Habláis inglés?',
        a: 'Sí. Atendemos en español y en inglés, ideal para propietarios extranjeros y gestores de alquiler vacacional.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: '¿Hablamos de tu proyecto?',
    text: 'Solicita tu presupuesto gratuito y sin compromiso. Cuéntanos qué necesitas y te ayudaremos a dar el siguiente paso.',
    form: {
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      town: 'Localidad',
      townPlaceholder: 'Ej. Santa Pola',
      service: '¿Qué necesitas?',
      message: 'Cuéntanos más',
      messagePlaceholder: 'Qué estancias, metros aproximados, plazos…',
      submit: 'Enviar por WhatsApp',
      hint: 'Se abrirá WhatsApp con tu mensaje listo para enviar. Si tienes fotos, adjúntalas allí.',
      required: 'Indícanos tu nombre',
      greeting: 'Hola G&C Pinturas, me gustaría pedir un presupuesto.',
    },
    channels: {
      whatsappEs: 'WhatsApp · Español',
      whatsappEn: 'WhatsApp · English',
      email: 'Correo electrónico',
      instagram: 'Síguenos en Instagram',
    },
  },
  footer: {
    tagline: 'Calidad que se ve. Confianza que se siente.',
    line: 'Pintura profesional · Elche · Santa Pola · Gran Alacant · Vega Baja',
    rights: 'Todos los derechos reservados.',
    backToTop: 'Volver arriba',
  },
}

export type Dictionary = typeof es

const en: Dictionary = {
  meta: {
    title: 'G&C Pinturas · Painters in Elche, Santa Pola, Gran Alacant & Vega Baja',
    description:
      'Professional painting for homes, holiday rentals and properties in Elche, Santa Pola, Gran Alacant and Vega Baja. Free, no-obligation quotes.',
  },
  nav: {
    home: 'Home',
    work: 'Before & after',
    services: 'Services',
    about: 'About us',
    area: 'Area',
    contact: 'Contact',
    menu: 'Menu',
    language: 'Language',
  },
  cta: {
    quote: 'Get your free quote',
    quoteShort: 'Free quote',
    whatsapp: 'Chat with us on WhatsApp',
    whatsappShort: 'WhatsApp',
  },
  hero: {
    eyebrow: 'Professional painting · Costa Blanca',
    titleA: 'Quality you',
    titleHighlight: 'can see.',
    titleB: 'Trust you can feel.',
    text: 'Professional painting for homes, holiday rentals and properties in Elche, Santa Pola, Gran Alacant and Vega Baja. Punctual, fast, clean and with a first-class finish.',
    trust: ['Free quote', 'Full protection & clean-up', 'English & Spanish spoken'],
    mediaBadge: 'A finished project in Canada',
    floatingTitle: 'North American experience',
    floatingText: 'Now on the Costa Blanca',
  },
  work: {
    eyebrow: 'Before & after',
    title: 'See the difference.',
    text: 'Real G&C Pinturas projects in Spain. Drag to compare.',
    before: 'Before',
    after: 'After',
    sliderLabel: 'Drag to compare before and after',
    items: [
      {
        title: 'Hallway refresh',
        text: 'Fresh white paint and new LED downlights. Our very first client in Spain.',
      },
      {
        title: 'Repair & repaint',
        text: 'Wall preparation, repair of damaged areas and a final finish chosen by the client.',
      },
    ],
    reelTitle: 'Watch the transformation',
    reelText: 'From tired yellow to a clean, bright white.',
    play: 'Play video',
    pause: 'Pause video',
  },
  services: {
    eyebrow: 'Services',
    title: 'Painting for every kind of property',
    text: 'From a single room to a whole home. We work around you, your schedule and your property.',
    items: {
      homes: {
        title: 'Home painting',
        text: 'Rooms, walls, ceilings and complete homes.',
      },
      rentals: {
        title: 'Holiday rentals',
        text: 'Refreshing and preparing rentals between bookings, around your calendar and the scope of work.',
      },
      agencies: {
        title: 'Estate agents & landlords',
        text: 'Getting properties ready for sale or rent, and refreshes between tenants.',
      },
      prep: {
        title: 'Wall preparation',
        text: 'Repairing minor damage, smoothing and preparing surfaces before painting.',
      },
    },
    ask: 'Ask for a quote',
  },
  why: {
    eyebrow: 'Why choose G&C',
    title: 'A great paint job starts long before the first coat.',
    items: [
      { title: 'Careful finish', text: 'Every surface is prepared for an even, long-lasting result.' },
      { title: 'Punctual', text: 'Realistic planning and a real commitment to agreed timings.' },
      { title: 'Fast', text: 'We work efficiently, without skipping any necessary step.' },
      { title: 'Protection & clean-up', text: 'Floors, furniture and windows are covered, and we leave everything tidy.' },
      { title: 'Personal service', text: 'Clear communication from start to finish, in English or Spanish.' },
    ],
    imageAlt: 'Living room with floor and windows fully wrapped in plastic before painting',
    imageCaption: 'Everything protected before we start',
  },
  story: {
    eyebrow: 'Our story',
    title: 'From Canada to the Costa Blanca',
    paragraphs: [
      'Six years ago, my wife and I started our journey in the painting trade in Canada. That is where we built our experience and learned a way of working based on preparation, organisation and care for every detail.',
      'We decided to come back to Spain to be close to our family and put everything we learned in North America into practice. That is how G&C Pinturas was born: a friendly, professional business committed to punctuality, cleanliness and a first-class finish.',
    ],
    signature: 'G&C Pinturas',
    stats: [
      { value: '6+', label: 'years in the trade' },
      { value: 'CA → ES', label: 'North American method' },
      { value: '€0', label: 'no-obligation quote' },
    ],
    galleryTitle: 'How we protect every job',
    gallery: {
      'obra-pasillo': 'Freshly painted hallway with the floor covered and doors protected',
      'obra-habitacion': 'Painted bedroom with floor and window protected',
      'obra-ventana': 'Window covered with plastic and tape before painting',
    },
  },
  process: {
    eyebrow: 'How we work',
    title: 'Four steps, no surprises',
    steps: [
      { title: 'Tell us about your project', text: 'Message us on WhatsApp and send photos if you have them.' },
      { title: 'We assess the job', text: 'We review the details and, if needed, arrange a visit.' },
      { title: 'Get your quote', text: 'We agree the scope of work and the terms before we start.' },
      { title: 'We paint and check', text: 'We work in an organised way and check every detail at the end.' },
    ],
  },
  area: {
    eyebrow: 'Service area',
    title: 'Local to you, across southern Alicante',
    text: 'We work in Elche, Santa Pola, Gran Alacant and Vega Baja, including Torrevieja, Guardamar del Segura, Ciudad Quesada/Rojales, Almoradí and Orihuela, depending on the project.',
    main: 'Main area',
    also: 'Also covering',
    sea: 'Mediterranean Sea',
    mapLabel: 'Map of the G&C Pinturas service area in southern Alicante province',
    ask: "Don't see your town? Just ask.",
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions we often get',
    items: [
      {
        q: 'Is there a charge for the quote?',
        a: 'No. Quotes are free and with no obligation. You can send us photos on WhatsApp for a first estimate.',
      },
      {
        q: 'Do you work on holiday rentals between bookings?',
        a: 'Yes. We plan around your calendar and the scope of work so the property is ready for your next guests.',
      },
      {
        q: 'Do you protect furniture and floors?',
        a: 'Always. We cover floors, furniture, windows and sockets before starting, and leave everything clean when we finish.',
      },
      {
        q: 'How long does a job take?',
        a: 'It depends on the size and condition of the surfaces. Along with your quote, we give you a realistic schedule.',
      },
      {
        q: 'Do you speak English?',
        a: 'Yes. We work in English and Spanish, ideal for overseas owners and holiday-let managers.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk about your project",
    text: 'Ask for your free, no-obligation quote. Tell us what you need and we will help you take the next step.',
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      town: 'Town',
      townPlaceholder: 'e.g. Gran Alacant',
      service: 'What do you need?',
      message: 'Tell us more',
      messagePlaceholder: 'Which rooms, approximate size, timing…',
      submit: 'Send via WhatsApp',
      hint: 'WhatsApp will open with your message ready to send. If you have photos, attach them there.',
      required: 'Please tell us your name',
      greeting: "Hi G&C Pinturas, I'd like to request a quote.",
    },
    channels: {
      whatsappEs: 'WhatsApp · Español',
      whatsappEn: 'WhatsApp · English',
      email: 'Email',
      instagram: 'Follow us on Instagram',
    },
  },
  footer: {
    tagline: 'Quality you can see. Trust you can feel.',
    line: 'Professional painting · Elche · Santa Pola · Gran Alacant · Vega Baja',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
}

export const dictionaries: Record<Lang, Dictionary> = { es, en }
