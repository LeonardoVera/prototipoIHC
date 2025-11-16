// --- Base de Datos Simulada ---
// Usamos un objeto donde la 'key' es el ID
import imgHuacaMain from "../assets/Huaca-pucllana-piramide-principal.jpg";
import imgHuacaCerca from "../assets/huaca-pucllana-cerca.jpg";
import imgRestaurante from "../assets/Restaurante-Huaca pucllana.avif";

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