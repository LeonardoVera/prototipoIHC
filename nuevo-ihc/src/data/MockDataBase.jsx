// --- Base de Datos Simulada ---
// Usamos un objeto donde la 'key' es el ID
const placesData = {
  
  'huaca-pucllana': {
    name: 'Huaca Pucllana',
    location: 'Miraflores, Lima, Perú',
    schedule: 'Abierto: 9:00 AM - 5:00 PM',
    price: 'Entrada: S/ 15.00',
    security: { level: 'safe' },
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1588623259480-cf6f3e1374d2', description: 'Vista de la pirámide principal' },
      { id: 2, url: 'https://images.unsplash.com/photo-1543389886-c1c55047f6d7', description: 'Adobes de cerca' },
      { id: 3, url: 'https://images.unsplash.com/photo-1621591823908-b193630a6c20', description: 'Recorrido superior' },
    ],
    description: 'La Huaca Pucllana es un importante centro ceremonial de la cultura Lima (200–700 d.C.). Este complejo arqueológico...',
    whatToDo: [
      'Recorrer la pirámide y los patios ceremoniales.',
      'Visitar el museo de sitio con piezas originales.',
      'Disfrutar de una comida en el restaurante Huaca Pucllana.',
      'Ideal para fotos culturales y panorámicas de Lima.',
    ],
  },
  
  'parque-aguas': {
    name: 'Circuito Mágico del Agua',
    location: 'Cercado de Lima, Perú',
    schedule: 'Abierto: 3:00 PM - 10:00 PM',
    price: 'Entrada: S/ 4.00',
    security: { level: 'warning' }, // Nivel de seguridad medio
    images: [
      { id: 1, url: 'https://images.unsplash.com/photo-1602002347738-163e41982823', description: 'Fuente de la Fantasía' },
      { id: 2, url: 'https://images.unsplash.com/photo-1599818464003-87b68672d1f7', description: 'Túnel de las Sorpresas' },
    ],
    description: 'Conocido como el "Parque de las Aguas", es un conjunto de trece fuentes ornamentales que ofrecen un espectáculo de agua, luz y música.',
    whatToDo: [
      'Ver el espectáculo de luces en la Fuente de la Fantasía.',
      'Mojarte en la Fuente de los Niños (si te atreves).',
      'Caminar por el Túnel de las Sorpresas.',
    ],
  }
  
  // ... puedes añadir más lugares aquí
};

// --- Función de API Simulada ---
// Esta función simula cómo le pedirías datos a tu base de datos
export const getPlaceById = (id) => {
  // Retorna los datos del lugar que coincida con el ID,
  // o 'null' si no lo encuentra.
  return placesData[id] || null;
};