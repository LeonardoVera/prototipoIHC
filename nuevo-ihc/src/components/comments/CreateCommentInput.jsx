import { FaUserCircle } from 'react-icons/fa'; 

export default function CreateCommentInput({ userAvatarUrl, onClick }) {
  
  const currentUserName = "Tú"; // O podrías pasarlo como prop

  return (
    <div className="w-full my-4">
      
      {/* --- Fila de Identidad del Usuario --- */}
      <div className="flex items-center gap-2 mb-2">
        {userAvatarUrl ? (
          <img
            src={userAvatarUrl}
            alt={currentUserName}
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          // Ícono de fallback si el usuario no tiene avatar
          <FaUserCircle className="w-8 h-8 text-gray-400" />
        )}
        <span className="font-semibold text-sm text-gray-900">
          {currentUserName}
        </span>
      </div>

      {/* --- Botón de "Crear Comentario" --- */}
      {/* Usamos un <button> que se ve como un input.
        Es mejor para la accesibilidad.
      */}
      <button
        onClick={onClick}
        className="
          w-full 
          bg-slate-700 
          text-slate-300 
          hover:bg-slate-600
          p-3 
          rounded-xl 
          text-left 
          text-sm
          font-medium
          transition-colors
        "
      >
        Crear comentario
      </button>
    </div>
  );
}