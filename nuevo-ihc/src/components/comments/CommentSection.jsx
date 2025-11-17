import RatingSummary from './RatingSummary';
import CreateCommentInput from './CreateCommentInput';
import CommentCard from './CommentCard';

import BodyText from '../details/BodyText';

/**
 * El componente contenedor para toda la pestaña de "Comentarios".
 * Organiza el resumen, la creación de comentarios y la lista de comentarios.
 *
 * @param {object} props
 * @param {object} props.ratings - Los datos para RatingSummary
 * @param {Array<object>} props.comments - El array de comentarios para CommentCard
 */
export default function CommentSection({ ratings, comments }) {
  
  // Función placeholder para el botón de "Crear comentario"
  const handleCreateComment = () => {
    // Aquí, en el futuro, podrías abrir un modal
    console.log("Abrir modal para crear comentario...");
  };

  // Verificamos si hay comentarios para mostrar
  const hasComments = comments && Array.isArray(comments) && comments.length > 0;

  return (
    // 'space-y-6' añade un espacio vertical entre cada bloque (Resumen, Crear, Lista)
    <div className="mt-6 space-y-6">
      
      {/* 1. Resumen de Calificaciones */}
      {/* Le pasamos los datos de 'ratings' */}
      <RatingSummary ratingsData={ratings} />
      
      {/* 2. Input de Crear Comentario */}
      {/* Le pasamos la función para el 'onClick' */}
      <CreateCommentInput onClick={handleCreateComment} />

      {/* 3. Lista de Comentarios */}
      <div>
        {hasComments ? (
          // Si SÍ hay comentarios, los mapeamos
          <div className="space-y-4"> {/* Espacio entre cada tarjeta de comentario */}
            {comments.map(comment => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        ) : (
          // Si NO hay comentarios, mostramos un mensaje
          <BodyText className="text-center text-gray-500">
            Todavía no hay comentarios. ¡Sé el primero en opinar!
          </BodyText>
        )}
      </div>

    </div>
  );
}