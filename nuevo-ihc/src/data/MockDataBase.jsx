// --- Base de Datos Simulada ---
// Usamos un objeto donde la 'key' es el ID
import imgHuacaMain from "../assets/Huaca-pucllana-piramide-principal.jpg";
import imgHuacaCerca from "../assets/huaca-pucllana-cerca.jpg";
import imgRestaurante from "../assets/Restaurante-Huaca pucllana.avif";
import centroHistorico from "../assets/centro-historico.jpg";
import barrancoAtardecer from "../assets/barranco-atardecer.jpg";
import cevicheriaMar from "../assets/cevicheria-mar.jpg";
import museoPisco from "../assets/museo-del-pisco-aqp.jpg";

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
      // % de 5, 4, 3, 2, 1 estrellas
      ratingBreakdown: [65, 20, 10, 3, 2], 
    },
    comments: [
      {
        id: 1,
        username: 'sofiaviajera',
        userAvatarUrl: 'https://placehold.co/100x100/f87171/ffffff?text=S', // Avatar de Sofia
        date: '15/09/2025',
        text: 'El recorrido estuvo muy bien organizado y los guías fueron atentos en todo momento. Me gustó que se incluyeran tanto espacios culturales como naturales. El tiempo en cada punto fue adecuado para...',
        likes: 15,
        dislikes: 2
      },
      {
        id: 2,
        username: 'carlosenruta',
        userAvatarUrl: 'https://placehold.co/100x100/60a5fa/ffffff?text=C', // Avatar de Carlos
        date: '15/09/2025',
        text: 'La ruta fue interesante, aunque en algunos lugares se quedó corta la visita. Hubiera sido ideal tener más tiempo en el Parque Kennedy. ¡El guía excelente!',
        likes: 8,
        dislikes: 0
      }
    ],
  },
  
  'parque-aguas': {
    name: 'Circuito Mágico del Agua',
    location: 'Cercado de Lima, Perú',
    schedule: 'Abierto: 3:00 PM - 10:00 PM',
    price: 'Entrada: S/ 4.00',
    security: { level: 'warning' }, // Nivel de seguridad medio
    images: [
      { id: 1, url: 'https://peru.info/archivos/publicacion/157-imagen-15292027122021.jpg', description: 'Fuente de la Fantasía' },
      { id: 2, url: 'https://circuitomagicodelagua.pe/wp-content/uploads/2025/02/history1.jpg', description: 'Funte de la Fantasía' },
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
        userAvatarUrl: null, // Probar el fallback
        date: '10/09/2025',
        text: '¡Mágico! Fui de noche y el espectáculo de luces es imperdible.',
        likes: 22,
        dislikes: 0
      }
    ],
  }
  
  // ... puedes añadir más lugares aquí
};

// src/data/MockDataBase.js

// ... (tu objeto placesData existente) ...

// --- NUEVA DATA: ITINERARIOS ---
const itinerariesData = {
  'tour-relax': {
    name: 'Tour relax',
    // Info rápida
    quickInfo: {
      photosLabel: 'Fotos, paisaje',
      duration: '8h',
      price: 'S/.60 por persona'
    },
    description: 'Un recorrido pensado para quienes quieren disfrutar lo mejor de Lima en un solo día. Inicia con la frescura de Huaca Pucllana y sigue con una experiencia única en el Museo del Pisco...',
    // La línea de tiempo de actividades
    activities: [
      { time: '09:00', placeName: 'Huaca Pucllana', placeId: 'huaca-pucllana' },
      { time: '11:00', placeName: 'Museo del Pisco', placeId: 'museo-pisco' }, // (Asumiendo que este ID existirá)
      { time: '14:00', placeName: 'Cevichería La Mar', placeId: 'cevicheria-lamar' },
      { time: '16:00', placeName: 'Centro Histórico', placeId: 'centro-historico' },
      { time: '19:00', placeName: 'Barranco', placeId: 'barranco' },
    ],
    securityLevel: 'safe',
    // ¡IMPORTANTE! Imágenes de los lugares del itinerario para el carrusel
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
      ratingBreakdown: [90, 20, 5, 3, 2],
    },
    comments: [
      {
        id: 1,
        username: 'mochilerolima',
        userAvatarUrl: 'https://placehold.co/100x100/34d399/ffffff?text=M',
        date: '20/09/2025',
        text: '¡La mejor forma de conocer Lima en un día! La parada en Barranco fue mágica.',
        likes: 45,
        dislikes: 1
      },
      {
        id: 2,
        username: 'anamaria88',
        userAvatarUrl: 'https://placehold.co/100x100/f472b6/ffffff?text=A',
        date: '18/09/2025',
        text: 'Muy completo, aunque hubiera preferido estar más tiempo en el Museo del Pisco.',
        likes: 12,
        dislikes: 0
      }
    ]
  }
  // ... puedes agregar más itinerarios
};

// ... (tu función getPlaceById existente) ...

// --- NUEVA FUNCIÓN ---
export const getItineraryById = (id) => {
  return itinerariesData[id] || null;
};

// --- Función de API Simulada ---
// Esta función simula cómo le pedirías datos a tu base de datos
export const getPlaceById = (id) => {
  // Retorna los datos del lugar que coincida con el ID,
  // o 'null' si no lo encuentra.
  return placesData[id] || null;
};