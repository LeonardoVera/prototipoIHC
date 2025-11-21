import RatingSummary from './RatingSummary';
import CreateCommentInput from './CreateCommentInput';
import CommentCard from './CommentCard';
import BodyText from '../details/BodyText';

export default function CommentSection({ ratings, comments, userVotes, onVote }) {
  
  const handleCreateComment = () => {
    console.log("Abrir modal para crear comentario...");
  };

  const hasComments = comments && Array.isArray(comments) && comments.length > 0;

  return (
    <div className="mt-6 space-y-6">
      <RatingSummary ratingsData={ratings} />
      <CreateCommentInput onClick={handleCreateComment} />
      <div>
        {hasComments ? (
          <div className="space-y-4">
            {comments.map(comment => (
              <CommentCard 
                key={comment.id} 
                comment={comment}
                // Le pasamos el voto actual del usuario
                userVote={userVotes[comment.id]} 
                // Le pasamos la función para votar, "atada" a este commentId
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
    </div>
  );
}