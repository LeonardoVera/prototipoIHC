// --- Base de Datos Simulada ---
const imgHuacaMain = "/images/amanecer.jpg";
const imgHuacaCerca = "/images/catedral.jpg";
const imgRestaurante = "/images/barranco-lima.jpg";
const centroHistorico = "/images/catedral.jpg";
const barrancoAtardecer = "/images/barranco-lima.jpg";
const cevicheriaMar = "/images/la-punta.jpg";
const museoPisco = "/images/parque-kennedy.jpg";
const catacumbas = "/images/catedral.jpg";
const barrancosalida = "/images/barranco-lima.jpg";

const placesData = {
  
  'huaca-pucllana': {
    name: 'Huaca Pucllana',
    location: 'Miraflores, Lima, Perú',
    schedule: 'Abierto: 9:00 AM - 5:00 PM',
    price: 'Entrada: S/ 15.00',
    security: { level: 'safe' },
    coordinates: { lat: -12.1108, lng: -77.0292 },
    images: [
      { id: 1, url: imgHuacaMain, description: 'Vista de la pirámide principal' },
      { id: 2, url: imgHuacaCerca, description: 'Adobes de cerca' },
      { id: 3, url: imgRestaurante, description: 'Restaurante Pucllano' },
    ],
    description: 'La Huaca Pucllana es un importante centro ceremonial de la cultura Lima (200–700 d.C.). Este complejo arqueológico...',
    whatToDo: [
      'Recorrer la pirámide y los patios ceremoniales.',
      'Visitar el museo de sitio con piezas originales.',
      'Disfrutar de una comida en el restaurante Huaca Pucllana.',
      'Ideal para fotos culturales y panorámicas de Lima.',
    ],
    ratingsSummary: {
      averageRating: 4.4,
      totalRatings: 35415,
      ratingBreakdown: [65, 20, 10, 3, 2], // 5★, 4★, 3★, 2★, 1★
    },
    comments: [
      {
        id: 1,
        username: 'sofiaviajera',
        userAvatarUrl: 'https://placehold.co/100x100/f87171/ffffff?text=S',
        date: '15/09/2025',
        text: 'El recorrido estuvo muy bien organizado y los guías fueron atentos en todo momento. Me gustó que se incluyeran tanto espacios culturales como naturales. El tiempo en cada punto fue adecuado para...',
        likes: 16,
        dislikes: 2,
        rating: 5
      },
      {
        id: 2,
        username: 'carlosenruta',
        userAvatarUrl: 'https://placehold.co/100x100/60a5fa/ffffff?text=C',
        date: '15/09/2025',
        text: 'La ruta fue interesante, aunque en algunos lugares se quedó corta la visita. Hubiera sido ideal tener más tiempo en el Parque Kennedy. ¡El guía excelente!',
        likes: 8,
        dislikes: 0,
        rating: 4
      },
      {
        id: 3,
        username: 'aldanachavez',
        userAvatarUrl: 'https://placehold.co/100x100/60a5fa/ffffff?text=C',
        date: '15/09/2025',
        text: 'Decepcionante, esperaba más del lugar.',
        likes: 25,
        dislikes: 10,
        rating: 2
      }
    ],
  },
  
  'parque-aguas': {
    name: 'Circuito Mágico del Agua',
    location: 'Cercado de Lima, Perú',
    schedule: 'Abierto: 3:00 PM - 10:00 PM',
    price: 'Entrada: S/ 4.00',
    security: { level: 'warning' },
    coordinates: { lat: -12.0738, lng: -77.0524 },
    images: [
      { id: 1, url: 'https://peru.info/archivos/publicacion/157-imagen-15292027122021.jpg', description: 'Fuente de la Fantasía' },
      { id: 2, url: 'https://circuitomagicodelagua.pe/wp-content/uploads/2025/02/history1.jpg', description: 'Fuente de la Fantasía' },
    ],
    description: 'Conocido como el "Parque de las Aguas", es un conjunto de trece fuentes ornamentales que ofrecen un espectáculo de agua, luz y música.',
    whatToDo: [
      'Ver el espectáculo de luces en la Fuente de la Fantasía.',
      'Mojarte en la Fuente de los Niños (si te atreves).',
      'Caminar por el Túnel de las Sorpresas.',
    ],
    ratingsSummary: {
      averageRating: 4.8,
      totalRatings: 52100,
      ratingBreakdown: [85, 10, 3, 1, 1],
    },
    comments: [
      {
        id: 1,
        username: 'luzdelsur',
        userAvatarUrl: null,
        date: '10/09/2025',
        text: '¡Mágico! Fui de noche y el espectáculo de luces es imperdible.',
        likes: 22,
        dislikes: 0,
        rating: 5
      }
    ],
  },

  'museo-pisco': {
    name: 'Museo del Pisco',
    location: 'Jirón Carabaya, Centro Histórico de Lima',
    schedule: 'Abierto: 11:00 AM - 1:00 AM',
    price: 'Consumo promedio: S/ 45.00',
    security: { level: 'safe' },
    coordinates: { lat: -12.0464, lng: -77.0283 },
    images: [
      { id: 1, url: museoPisco, description: 'Barra principal y cata' },
      { id: 2, url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b', description: 'Barra principal y cata' },
      { id: 3, url: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc', description: 'Variedad de chilcanos' },
    ],
    description: 'Más que un bar, es una experiencia cultural dedicada a nuestra bebida bandera. Ofrece catas, clases de coctelería y una carta impresionante de piscos de todas las regiones.',
    whatToDo: [
      'Tomar una clase de preparación de Pisco Sour.',
      'Realizar una cata guiada de diferentes cepas.',
      'Disfrutar de tapas peruanas con música en vivo.',
    ],
    ratingsSummary: {
      averageRating: 4.7,
      totalRatings: 8540,
      ratingBreakdown: [80, 15, 4, 1, 0],
    },
    comments: [
      {
        id: 1,
        username: 'pisco_lover',
        userAvatarUrl: null,
        date: '05/09/2025',
        text: 'El ambiente es increíble. Aprendí muchísimo sobre la diferencia entre el pisco Quebranta y el Italia. ¡Recomendado!',
        likes: 34,
        dislikes: 0,
        rating: 5
      }
    ],
  },

  'cevicheria-lamar': {
    name: 'Cevicheria La Mar',
    location: 'Av. La Mar 770, Miraflores',
    schedule: 'Abierto: 12:00 PM - 5:00 PM',
    price: 'Platos desde: S/ 65.00',
    security: { level: 'safe' },
    coordinates: { lat: -12.1189, lng: -77.0335 },
    images: [
      { id: 1, url: cevicheriaMar, description: 'Ceviche clásico' },
      { id: 2, url: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3', description: 'Ceviche clásico' }
    ],
    description: 'La aclamada propuesta de Gastón Acurio. Un templo a la pesca del día donde se celebra la frescura del mar peruano en un ambiente relajado pero de alta cocina.',
    whatToDo: [
      'Probar la pesca del día en diferentes preparaciones.',
      'Pedir el clásico ceviche carretillero.',
      'Disfrutar de sus cócteles de autor.',
    ],
    ratingsSummary: {
      averageRating: 4.6,
      totalRatings: 15200,
      ratingBreakdown: [70, 20, 5, 3, 2],
    },
    comments: [
      {
        id: 1,
        username: 'foodie_lima',
        userAvatarUrl: 'https://placehold.co/100x100/fbbf24/ffffff?text=F',
        date: '12/09/2025',
        text: 'Es caro, pero vale cada centavo. El pescado se siente fresquísimo. Hay que ir temprano porque se llena rápido.',
        likes: 56,
        dislikes: 2,
        rating: 5
      }
    ],
  },

  'centro-historico': {
    name: 'Centro Histórico de Lima',
    location: 'Lima Cercado',
    schedule: 'Abierto: 24 horas',
    price: 'Gratis (Museos costo aparte)',
    security: { level: 'warning' },
    coordinates: { lat: -12.0464, lng: -77.0428 },
    images: [
      { id: 1, url: centroHistorico, description: 'Plaza de Armas' },
      { id: 2, url: catacumbas, description: 'Balcones coloniales' },
      { id: 3, url: 'https://images.unsplash.com/photo-1531968455001-5c5272a41129', description: 'Plaza de Armas' },
    ],
    description: 'El corazón de la ciudad de los reyes. Declarado Patrimonio de la Humanidad, alberga la Plaza Mayor, la Catedral y hermosos balcones coloniales que narran la historia del virreinato.',
    whatToDo: [
      'Ver el cambio de guardia en Palacio de Gobierno (mediodía).',
      'Visitar las Catacumbas de San Francisco.',
      'Admirar la arquitectura de la Catedral de Lima.',
    ],
    ratingsSummary: {
      averageRating: 4.5,
      totalRatings: 45000,
      ratingBreakdown: [60, 25, 10, 3, 2],
    },
    comments: [
      {
        id: 1,
        username: 'caminante_urbano',
        userAvatarUrl: null,
        date: '01/09/2025',
        text: 'Mucha historia en cada esquina. Recomiendo ir con guía para entender bien la arquitectura. Ojo con el celular en las calles aledañas.',
        likes: 89,
        dislikes: 1,
        rating: 4
      }
    ],
  },

  'barranco': {
    name: 'Distrito de Barranco',
    location: 'Barranco, Lima',
    schedule: 'Abierto: 24 horas (Zona turística)',
    price: 'Gratis (Locales costo aparte)',
    security: { level: 'safe' },
    coordinates: { lat: -12.1467, lng: -77.0208 },
    images: [
      { id: 1, url: barrancosalida, description: 'Bajada de Baños y murales' },
      { id: 2, url: barrancoAtardecer, description: 'Puente de los Suspiros' },
    ],
    description: 'El barrio bohemio de Lima por excelencia. Lleno de arte callejero, casonas antiguas republicanas, museos y una vibrante vida nocturna. Es el lugar perfecto para ver el atardecer frente al mar.',
    whatToDo: [
      'Cruzar el Puente de los Suspiros pidiendo un deseo.',
      'Caminar por la Bajada de Baños hasta la playa.',
      'Visitar el Museo MATE o el Museo de la Electricidad.',
      'Disfrutar de la vida nocturna en sus bares y peñas.',
    ],
    ratingsSummary: {
      averageRating: 4.8,
      totalRatings: 28900,
      ratingBreakdown: [85, 10, 3, 1, 1],
    },
    comments: [
      {
        id: 1,
        username: 'art_lover',
        userAvatarUrl: 'https://placehold.co/100x100/8b5cf6/ffffff?text=A',
        date: '25/09/2025',
        text: 'Los murales son impresionantes. Es el lugar más "instagrammable" de Lima. Recomiendo ir al atardecer para las mejores fotos.',
        likes: 120,
        dislikes: 3,
        rating: 5
      },
      {
        id: 2,
        username: 'party_guy',
        userAvatarUrl: null,
        date: '22/09/2025',
        text: 'Excelente ambiente nocturno. Ayahuasca Bar es una parada obligatoria si te gusta la arquitectura y los buenos tragos.',
        likes: 45,
        dislikes: 1,
        rating: 5
      }
    ],
  },
};

// --- ITINERARIOS ---
const itinerariesData = {
  'tour-relax': {
    name: 'Tour relax',
    category: 'popular', // Para "Más visitados de la semana"
    quickInfo: {
      photosLabel: 'Fotos, paisaje',
      duration: '8h',
      price: 'S/.60 por persona'
    },
    description: 'Un recorrido pensado para quienes quieren disfrutar lo mejor de Lima en un solo día. Inicia con la frescura de Huaca Pucllana y sigue con una experiencia única en el Museo del Pisco...',
    activities: [
      { time: '09:00', placeName: 'Huaca Pucllana', placeId: 'huaca-pucllana' },
      { time: '11:00', placeName: 'Museo del Pisco', placeId: 'museo-pisco' },
      { time: '14:00', placeName: 'Cevichería La Mar', placeId: 'cevicheria-lamar' },
      { time: '16:00', placeName: 'Centro Histórico', placeId: 'centro-historico' },
      { time: '19:00', placeName: 'Barranco', placeId: 'barranco' },
    ],
    securityLevel: 'safe',
    images: [
      { id: 1, url: imgHuacaMain, description: 'Parada 1: Huaca Pucllana' },
      { id: 2, url: museoPisco, description: 'Parada 2: Museo del pisco' },
      { id: 3, url: cevicheriaMar, description: 'Parada 3: Cevicheria la mar' },
      { id: 4, url: centroHistorico, description: 'Parada 4: Centro Histórico' },
      { id: 5, url: barrancoAtardecer, description: 'Parada 5: Barranco al atardecer' }
    ],
    ratingsSummary: {
      averageRating: 4.9,
      totalRatings: 120,
      ratingBreakdown: [90, 8, 1, 1, 0],
    },
    comments: [
      {
        id: 1,
        username: 'mochilerolima',
        userAvatarUrl: 'https://placehold.co/100x100/34d399/ffffff?text=M',
        date: '20/09/2025',
        text: '¡La mejor forma de conocer Lima en un día! La parada en Barranco fue mágica.',
        likes: 45,
        dislikes: 1,
        rating: 5
      },
      {
        id: 2,
        username: 'anamaria88',
        userAvatarUrl: 'https://placehold.co/100x100/f472b6/ffffff?text=A',
        date: '18/09/2025',
        text: 'Muy completo, aunque hubiera preferido estar más tiempo en el Museo del Pisco.',
        likes: 12,
        dislikes: 0,
        rating: 4
      }
    ]
  },
  'centro-historico-tour': {
    name: 'Centro Histórico Colonial',
    category: 'popular',
    quickInfo: {
      photosLabel: 'Historia, arquitectura',
      duration: '5h',
      price: 'S/.35 por persona'
    },
    description: 'Descubre la riqueza histórica del Centro de Lima, Patrimonio de la Humanidad. Recorre plazas coloniales, iglesias centenarias y las famosas catacumbas de San Francisco.',
    activities: [
      { time: '09:00', placeName: 'Plaza Mayor', placeId: 'centro-historico' },
      { time: '10:30', placeName: 'Catacumbas San Francisco', placeId: 'centro-historico' },
      { time: '12:00', placeName: 'Museo del Pisco', placeId: 'museo-pisco' },
      { time: '14:00', placeName: 'Almuerzo típico', placeId: 'cevicheria-lamar' },
    ],
    securityLevel: 'warning',
    images: [
      { id: 1, url: centroHistorico, description: 'Plaza Mayor de Lima' },
      { id: 2, url: catacumbas, description: 'Catacumbas de San Francisco' },
      { id: 3, url: museoPisco, description: 'Museo del Pisco' }
    ],
    ratingsSummary: {
      averageRating: 4.7,
      totalRatings: 89,
      ratingBreakdown: [75, 18, 5, 1, 1],
    },
    comments: [
      {
        id: 1,
        username: 'historiador_pe',
        userAvatarUrl: 'https://placehold.co/100x100/6366f1/ffffff?text=H',
        date: '22/09/2025',
        text: 'Increíble recorrido por la historia de Lima. Las catacumbas son impresionantes.',
        likes: 32,
        dislikes: 2,
        rating: 5
      }
    ]
  },
  'barranco-bohemio': {
    name: 'Barranco Bohemio',
    category: 'popular',
    quickInfo: {
      photosLabel: 'Arte, murales',
      duration: '4h',
      price: 'S/.25 por persona'
    },
    description: 'Sumérgete en el barrio más artístico de Lima. Murales coloridos, galerías de arte, el icónico Puente de los Suspiros y los mejores atardeceres frente al mar.',
    activities: [
      { time: '15:00', placeName: 'Puente de los Suspiros', placeId: 'barranco' },
      { time: '16:00', placeName: 'Bajada de Baños', placeId: 'barranco' },
      { time: '17:30', placeName: 'Museo MATE', placeId: 'barranco' },
      { time: '19:00', placeName: 'Atardecer en malecón', placeId: 'barranco' },
    ],
    securityLevel: 'safe',
    images: [
      { id: 1, url: barrancoAtardecer, description: 'Atardecer en Barranco' },
      { id: 2, url: barrancosalida, description: 'Murales de Barranco' },
      { id: 3, url: '/images/barranco-lima.jpg', description: 'Bajada de Baños' }
    ],
    ratingsSummary: {
      averageRating: 4.8,
      totalRatings: 156,
      ratingBreakdown: [82, 14, 3, 1, 0],
    },
    comments: [
      {
        id: 1,
        username: 'artista_urbano',
        userAvatarUrl: 'https://placehold.co/100x100/ec4899/ffffff?text=A',
        date: '25/09/2025',
        text: 'El mejor lugar para fotos en Lima. Los murales son espectaculares.',
        likes: 67,
        dislikes: 1,
        rating: 5
      }
    ]
  },
  'gastronomico-miraflores': {
    name: 'Tour Gastronómico',
    category: 'popular',
    quickInfo: {
      photosLabel: 'Comida, cultura',
      duration: '6h',
      price: 'S/.120 por persona'
    },
    description: 'Experimenta los sabores de la gastronomía peruana, reconocida como una de las mejores del mundo. Ceviche, pisco sour y mucho más.',
    activities: [
      { time: '11:00', placeName: 'Mercado de Surquillo', placeId: 'cevicheria-lamar' },
      { time: '13:00', placeName: 'Cevichería La Mar', placeId: 'cevicheria-lamar' },
      { time: '15:00', placeName: 'Museo del Pisco', placeId: 'museo-pisco' },
      { time: '17:00', placeName: 'Café en Barranco', placeId: 'barranco' },
    ],
    securityLevel: 'safe',
    images: [
      { id: 1, url: cevicheriaMar, description: 'Ceviche peruano' },
      { id: 2, url: museoPisco, description: 'Pisco Sour' },
      { id: 3, url: barrancoAtardecer, description: 'Café en Barranco' }
    ],
    ratingsSummary: {
      averageRating: 4.9,
      totalRatings: 203,
      ratingBreakdown: [88, 10, 2, 0, 0],
    },
    comments: [
      {
        id: 1,
        username: 'foodie_world',
        userAvatarUrl: 'https://placehold.co/100x100/f97316/ffffff?text=F',
        date: '20/09/2025',
        text: '¡El ceviche más fresco que he probado! Vale cada sol.',
        likes: 89,
        dislikes: 0,
        rating: 5
      }
    ]
  },
  'lima-cultural': {
    name: 'Lima Cultural',
    category: 'forYou',
    quickInfo: {
      photosLabel: 'Museos, historia',
      duration: '7h',
      price: 'S/.55 por persona'
    },
    description: 'Un viaje por la rica cultura limeña. Desde la época precolombina en Huaca Pucllana hasta el arte contemporáneo en los museos de Barranco.',
    activities: [
      { time: '09:00', placeName: 'Huaca Pucllana', placeId: 'huaca-pucllana' },
      { time: '11:30', placeName: 'Centro Histórico', placeId: 'centro-historico' },
      { time: '14:00', placeName: 'Almuerzo', placeId: 'cevicheria-lamar' },
      { time: '16:00', placeName: 'Museo MATE', placeId: 'barranco' },
    ],
    securityLevel: 'safe',
    images: [
      { id: 1, url: imgHuacaMain, description: 'Huaca Pucllana' },
      { id: 2, url: centroHistorico, description: 'Centro Histórico' },
      { id: 3, url: barrancoAtardecer, description: 'Museo MATE' }
    ],
    ratingsSummary: {
      averageRating: 4.6,
      totalRatings: 78,
      ratingBreakdown: [70, 22, 6, 1, 1],
    },
    comments: [
      {
        id: 1,
        username: 'cultura_viva',
        userAvatarUrl: 'https://placehold.co/100x100/8b5cf6/ffffff?text=C',
        date: '18/09/2025',
        text: 'Perfecto para conocer la historia de Lima en un día.',
        likes: 34,
        dislikes: 1,
        rating: 5
      }
    ]
  },
  'nocturno-lima': {
    name: 'Lima de Noche',
    category: 'forYou',
    quickInfo: {
      photosLabel: 'Nocturno, luces',
      duration: '5h',
      price: 'S/.45 por persona'
    },
    description: 'Descubre la magia de Lima cuando se encienden las luces. El Circuito Mágico del Agua y los bares de Barranco te esperan.',
    activities: [
      { time: '18:00', placeName: 'Circuito Mágico del Agua', placeId: 'parque-aguas' },
      { time: '20:00', placeName: 'Cena en Miraflores', placeId: 'cevicheria-lamar' },
      { time: '22:00', placeName: 'Bares de Barranco', placeId: 'barranco' },
    ],
    securityLevel: 'warning',
    images: [
      { id: 1, url: '/images/parque-kennedy.jpg', description: 'Circuito del Agua' },
      { id: 2, url: barrancoAtardecer, description: 'Noche en Barranco' },
      { id: 3, url: cevicheriaMar, description: 'Cena nocturna' }
    ],
    ratingsSummary: {
      averageRating: 4.5,
      totalRatings: 112,
      ratingBreakdown: [65, 25, 7, 2, 1],
    },
    comments: [
      {
        id: 1,
        username: 'nightlife_pe',
        userAvatarUrl: 'https://placehold.co/100x100/06b6d4/ffffff?text=N',
        date: '23/09/2025',
        text: 'El show de luces en el Parque de las Aguas es imperdible.',
        likes: 56,
        dislikes: 3,
        rating: 5
      }
    ]
  },
  'express-miraflores': {
    name: 'Miraflores Express',
    category: 'quick',
    quickInfo: {
      photosLabel: 'Rápido, esencial',
      duration: '3h',
      price: 'S/.20 por persona'
    },
    description: 'Conoce lo esencial de Miraflores en pocas horas. Perfecto si tienes poco tiempo pero quieres llevarte lo mejor.',
    activities: [
      { time: '10:00', placeName: 'Huaca Pucllana', placeId: 'huaca-pucllana' },
      { time: '11:30', placeName: 'Malecón de Miraflores', placeId: 'barranco' },
      { time: '12:30', placeName: 'Parque Kennedy', placeId: 'museo-pisco' },
    ],
    securityLevel: 'safe',
    images: [
      { id: 1, url: imgHuacaMain, description: 'Huaca Pucllana' },
      { id: 2, url: '/images/la-punta.jpg', description: 'Malecón' },
      { id: 3, url: museoPisco, description: 'Parque Kennedy' }
    ],
    ratingsSummary: {
      averageRating: 4.4,
      totalRatings: 234,
      ratingBreakdown: [60, 30, 7, 2, 1],
    },
    comments: [
      {
        id: 1,
        username: 'viajero_rapido',
        userAvatarUrl: 'https://placehold.co/100x100/22c55e/ffffff?text=V',
        date: '26/09/2025',
        text: 'Perfecto para una escala corta en Lima. Lo esencial bien organizado.',
        likes: 45,
        dislikes: 2,
        rating: 4
      }
    ]
  },
  'paseo-costero': {
    name: 'Paseo Costero',
    category: 'quick',
    quickInfo: {
      photosLabel: 'Mar, vistas',
      duration: '2h',
      price: 'S/.15 por persona'
    },
    description: 'Un paseo relajante por el malecón con las mejores vistas al océano Pacífico. Ideal para despejarse y tomar aire fresco.',
    activities: [
      { time: '16:00', placeName: 'Malecón de Miraflores', placeId: 'barranco' },
      { time: '17:00', placeName: 'Parque del Amor', placeId: 'barranco' },
      { time: '17:45', placeName: 'Atardecer en Larcomar', placeId: 'barranco' },
    ],
    securityLevel: 'safe',
    images: [
      { id: 1, url: '/images/la-punta.jpg', description: 'Vista al mar' },
      { id: 2, url: barrancoAtardecer, description: 'Atardecer costero' }
    ],
    ratingsSummary: {
      averageRating: 4.7,
      totalRatings: 189,
      ratingBreakdown: [78, 17, 4, 1, 0],
    },
    comments: [
      {
        id: 1,
        username: 'sunset_lover',
        userAvatarUrl: 'https://placehold.co/100x100/f43f5e/ffffff?text=S',
        date: '24/09/2025',
        text: 'Los atardeceres desde aquí son de otro nivel. Muy recomendado.',
        likes: 78,
        dislikes: 0,
        rating: 5
      }
    ]
  },
  'cafe-arte': {
    name: 'Café y Arte',
    category: 'quick',
    quickInfo: {
      photosLabel: 'Café, galerías',
      duration: '2.5h',
      price: 'S/.30 por persona'
    },
    description: 'Para los amantes del café y el arte. Recorre las mejores cafeterías de especialidad y galerías escondidas de Barranco.',
    activities: [
      { time: '10:00', placeName: 'Cafetería de especialidad', placeId: 'barranco' },
      { time: '11:00', placeName: 'Galería de arte', placeId: 'barranco' },
      { time: '12:00', placeName: 'Murales de Barranco', placeId: 'barranco' },
    ],
    securityLevel: 'safe',
    images: [
      { id: 1, url: barrancosalida, description: 'Murales artísticos' },
      { id: 2, url: barrancoAtardecer, description: 'Café en Barranco' }
    ],
    ratingsSummary: {
      averageRating: 4.6,
      totalRatings: 98,
      ratingBreakdown: [72, 20, 6, 1, 1],
    },
    comments: [
      {
        id: 1,
        username: 'coffee_art',
        userAvatarUrl: 'https://placehold.co/100x100/a855f7/ffffff?text=C',
        date: '21/09/2025',
        text: 'El café estaba delicioso y las galerías tienen obras muy interesantes.',
        likes: 23,
        dislikes: 1,
        rating: 5
      }
    ]
  },
  'aventura-lima': {
    name: 'Lima Aventura',
    category: 'quick',
    quickInfo: {
      photosLabel: 'Deporte, adrenalina',
      duration: '3h',
      price: 'S/.80 por persona'
    },
    description: 'Para los más aventureros. Parapente sobre los acantilados de Miraflores y paseo en bicicleta por el malecón.',
    activities: [
      { time: '09:00', placeName: 'Parapente en Miraflores', placeId: 'barranco' },
      { time: '11:00', placeName: 'Ciclismo por malecón', placeId: 'barranco' },
    ],
    securityLevel: 'safe',
    images: [
      { id: 1, url: '/images/la-punta.jpg', description: 'Vista aérea' },
      { id: 2, url: barrancoAtardecer, description: 'Malecón' }
    ],
    ratingsSummary: {
      averageRating: 4.8,
      totalRatings: 145,
      ratingBreakdown: [85, 12, 2, 1, 0],
    },
    comments: [
      {
        id: 1,
        username: 'extreme_pe',
        userAvatarUrl: 'https://placehold.co/100x100/ef4444/ffffff?text=E',
        date: '19/09/2025',
        text: '¡El parapente es una experiencia única! Las vistas de Lima desde arriba son increíbles.',
        likes: 92,
        dislikes: 1,
        rating: 5
      }
    ]
  }
};

// --- FUNCIONES DE API ---
export const getPlaceById = (id) => {
  return placesData[id] || null;
};

export const getAllPlaces = () => {
  return Object.entries(placesData).map(([key, data]) => ({
    id: key,
    ...data
  }));
};

export const getItineraryById = (id) => {
  return itinerariesData[id] || null;
};

export const getAllItineraries = () => {
  return Object.entries(itinerariesData).map(([key, data]) => ({
    id: key,
    ...data
  }));
};

// Calcula el rating promedio y desglose basado en los comentarios
export const calculateRatingsFromComments = (comments) => {
  if (!comments || comments.length === 0) {
    return {
      averageRating: 0,
      totalRatings: 0,
      ratingBreakdown: [0, 0, 0, 0, 0]
    };
  }

  // Contar cuántos comentarios tienen cada rating (5, 4, 3, 2, 1)
  const ratingCounts = [0, 0, 0, 0, 0]; // [5★, 4★, 3★, 2★, 1★]
  let totalStars = 0;

  comments.forEach(comment => {
    if (comment.rating >= 1 && comment.rating <= 5) {
      ratingCounts[5 - comment.rating]++; // Index 0 = 5★, Index 4 = 1★
      totalStars += comment.rating;
    }
  });

  const totalRatings = comments.length;
  const averageRating = totalStars / totalRatings;

  // Convertir conteos a porcentajes
  const ratingBreakdown = ratingCounts.map(count => 
    Math.round((count / totalRatings) * 100)
  );

  return {
    averageRating: Number.parseFloat(averageRating.toFixed(1)),
    totalRatings,
    ratingBreakdown
  };
};