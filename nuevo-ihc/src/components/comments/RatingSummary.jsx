import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const RatingBar = ({ label, percentage }) => (
  <div className="flex items-center gap-2 w-full">
    <span className="text-sm font-medium text-gray-700 w-4">{label}</span>
    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <div
        className="bg-blue-600 h-2 rounded-full"
        style={{ width: `${percentage}%` }}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  </div>
);

// --- Sub-componente 2: Estrellas ---
/**
 * Muestra una calificación de 5 estrellas.
 * @param {object} props
 * @param {number} props.rating - La calificación (ej. 4.4).
 * @param {string} props.className - Clases adicionales.
 */
const StarRating = ({ rating, className = '' }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} />); // Estrella llena
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} />); // Media estrella
    } else {
      stars.push(<FaRegStar key={i} />); // Estrella vacía
    }
  }
  return <div className={`flex text-yellow-400 ${className}`}>{stars}</div>;
};

// --- Componente Principal ---
/**
 * Muestra el panel completo de resumen de calificaciones.
 * @param {object} props
 * @param {object} props.ratingsData - Objeto con los datos de calificación.
 * Ej: {
 * averageRating: 4.4,
 * totalRatings: 35415,
 * ratingBreakdown: [75, 15, 5, 2, 3] // % de 5, 4, 3, 2, 1 estrellas
 * }
 */
export default function RatingSummary({ ratingsData }) {
  // Damos valores por defecto en caso de que la data no cargue
  const {
    averageRating = 0,
    totalRatings = 0,
    ratingBreakdown = [0, 0, 0, 0, 0], // 5, 4, 3, 2, 1
  } = ratingsData || {};

  // Formatear el número total con separadores de miles (ej. 35.415)
  const formattedTotal = new Intl.NumberFormat('es-ES').format(totalRatings);

  return (
    <div className="border border-gray-200 rounded-xl p-4 w-full">
      {/* Título (Coincide con el SectionHeader) */}
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Calificaciones y opiniones
      </h3>

      {/* Contenedor principal (Flexbox) */}
      <div className="flex flex-col sm:flex-row gap-6">
        
        {/* Lado Izquierdo: Promedio y Estrellas */}
        <div className="flex flex-col items-center sm:items-start flex-shrink-0">
          <p className="text-5xl font-extrabold text-gray-900">
            {averageRating.toFixed(1)}
          </p>
          <StarRating rating={averageRating} className="my-1 text-xl" />
          <p className="text-sm text-gray-500">{formattedTotal} opiniones</p>
        </div>

        {/* Lado Derecho: Desglose de Barras */}
        <div className="flex flex-col gap-1 w-full flex-grow">
          {ratingBreakdown.map((percentage, index) => (
            <RatingBar
              key={5 - index}
              label={5 - index} // 5, 4, 3, 2, 1
              percentage={percentage}
            />
          ))}
        </div>

      </div>
    </div>
  );
}