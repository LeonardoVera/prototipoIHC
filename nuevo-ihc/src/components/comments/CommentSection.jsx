import React, { useState } from 'react';
import RatingSummary from './RatingSummary';
import CreateCommentInput from './CreateCommentInput';
import CommentCard from './CommentCard';
import BodyText from '../details/BodyText';
import CreateCommentModal from './CreateCommentModal';

export default function CommentSection({ ratings, comments, userVotes, onVote, onNewRating, onNewComment }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateCommentClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCommentSubmit = ({ userName, commentText, rating }) => {
    const newCommentId = `comment-${Date.now()}`; 
    const newComment = {
      id: newCommentId,
      userAvatarUrl: null,
      username: userName,
      date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }),
      text: commentText,
      likes: 0,
      dislikes: 0,
      rating: rating,
    };

    // Llamar a la función del padre para agregar el comentario
    if (onNewComment) {
      onNewComment(newComment);
    }

    if (onNewRating) {
      onNewRating(rating);
    }

    handleCloseModal();
  };

  const hasComments = comments && Array.isArray(comments) && comments.length > 0;

  return (
    <div className="mt-6 space-y-6">
      <RatingSummary ratingsData={ratings} />
      
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

      <CreateCommentModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSubmit={handleCommentSubmit} 
      />
    </div>
  );
}