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