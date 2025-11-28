// components/CommentSection.jsx
import React, { useState } from 'react'; // Asegúrate de importar useState
import RatingSummary from './RatingSummary';
import CreateCommentInput from './CreateCommentInput';
import CommentCard from './CommentCard';
import BodyText from '../details/BodyText'; // Asegúrate de que la ruta sea correcta

// Importamos el nuevo modal
import CreateCommentModal from './CreateCommentModal'; // Ajusta la ruta si es necesario

export default function CommentSection({ ratings, comments: initialComments, userVotes, onVote, onNewRating }) {
  // Usamos `initialComments` como prop para que podamos manipular la lista internamente
  const [comments, setComments] = useState(initialComments);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal de creación

  // Función para abrir el modal
  const handleCreateCommentClick = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Función para manejar el envío de un nuevo comentario
  const handleCommentSubmit = ({ userName, commentText, rating }) => {
    // Aquí deberías generar un ID único para el nuevo comentario
    const newCommentId = `comment-${Date.now()}`; 
    const newComment = {
      id: newCommentId,
      userAvatarUrl: null, // Podrías tener una URL por defecto o null
      username: userName,
      date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }),
      text: commentText,
      likes: 0,
      dislikes: 0,
      rating: rating, // Agregamos la calificación al comentario
    };

    // Agrega el nuevo comentario al inicio de la lista
    setComments([newComment, ...comments]);

    // (Opcional) Si necesitas actualizar la calificación promedio del lugar
    // tendrías que pasar una función `onNewRating` desde el padre (PlaceDetails)
    if (onNewRating) {
      onNewRating(rating);
    }

    handleCloseModal(); // Cerrar el modal
  };

  const hasComments = comments && Array.isArray(comments) && comments.length > 0;

  return (
    <div className="mt-6 space-y-6">
      <RatingSummary ratingsData={ratings} />
      
      {/* Pasamos la nueva función para abrir el modal */}
      <CreateCommentInput onClick={handleCreateCommentClick} /> 

      <div>
        {hasComments ? (
          <div className="space-y-4">
            {comments.map(comment => (
              <CommentCard 
                key={comment.id} 
                comment={comment}
                userVote={userVotes[comment.id]} 
                onVote={(voteType) => onVote(comment.id, voteType)}
              />
            ))}
          </div>
        ) : (
          <BodyText className="text-center text-gray-500">
            Todavía no hay comentarios. ¡Sé el primero en opinar!
          </BodyText>
        )}
      </div>

      {/* Renderizamos el modal de creación de comentario */}
      <CreateCommentModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSubmit={handleCommentSubmit} 
      />
    </div>
  );
}