import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export default function CreateCommentModal({ isOpen, onClose, onSubmit }) {
  const [commentText, setCommentText] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const currentUserName = "Tu nombre"; // O podrías pasarlo como prop

  const handleSubmit = () => {
    // Validación básica
    if (!commentText.trim()) {
      alert('Por favor escribe un comentario');
      return;
    }
    if (selectedRating === 0) {
      alert('Por favor selecciona una calificación');
      return;
    }

    // Enviar el comentario
    onSubmit({
      userName: currentUserName,
      commentText: commentText.trim(),
      rating: selectedRating
    });

    // Limpiar el formulario
    setCommentText('');
    setSelectedRating(0);
  };

  const handleCancel = () => {
    setCommentText('');
    setSelectedRating(0);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 bg-opacity-20 flex items-center justify-center z-50 p-4"
      onClick={handleCancel}
    >
      <div 
        className="bg-white rounded-2xl shadow-xl w-full max-w-sm relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar */}
        <button
          onClick={handleCancel}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <IoClose size={24} />
        </button>

        {/* Contenido del modal */}
        <div className="p-6">
          {/* Usuario */}
          <div className="flex items-center gap-2 mb-4">
            <FaUserCircle className="w-8 h-8 text-blue-500" />
            <span className="font-semibold text-sm text-gray-900">
              {currentUserName}
            </span>
          </div>

          {/* Textarea para el comentario */}
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Agregue un comentario"
            className="
              w-full 
              bg-teal-100
              border border-gray-900
              text-gray-800
              placeholder-black/40
              p-3 
              rounded-xl 
              text-sm
              resize-none
              focus:outline-none
              focus:ring-2
              focus:ring-teal-300
              mb-4
            "
            rows={3}
          />

          {/* Estrellas de calificación */}
          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setSelectedRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="transition-transform hover:scale-110"
              >
                <svg
                  className={`w-10 h-10 ${
                        star <= selectedRating // Si la estrella ya está seleccionada (prioridad 1)
                            ? 'fill-gray-900 stroke-gray-900' // COLOR NEGRO DEFINITIVO
                        : star <= hoveredRating // Si no está seleccionada, pero está bajo el mouse (prioridad 2)
                            ? 'fill-gray-400 stroke-gray-400' // COLOR GRIS OSCURO SUAVE
                            : 'fill-none stroke-gray-400' // Inactivo (prioridad 3)
                    }`}
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </button>
            ))}
          </div>

          {/* Botones de acción */}
          <div className="flex gap-3">
            <button
              onClick={handleSubmit}
              className="
                flex-1
                bg-green-500
                hover:bg-green-600
                text-white
                font-semibold
                py-3
                rounded-full
                transition-colors
                shadow-sm
              "
            >
              Confirmar
            </button>
            <button
              onClick={handleCancel}
              className="
                flex-1
                bg-red-500
                hover:bg-red-600
                text-white
                font-semibold
                py-3
                rounded-full
                transition-colors
                shadow-sm
              "
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}