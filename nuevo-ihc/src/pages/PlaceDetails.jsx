import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getPlaceById } from "../data/MockDataBase";

import TabNavigator from "../components/TabNavigator";
import TabButton from "../components/TabButton";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";

import ImageCarousel from "../components/details/ImageCarousel";
import SectionHeader from "../components/details/SectionHeader";
import BodyText from "../components/details/BodyText";
import BulletedList from "../components/details/BulletedList";
import ListItem from "../components/details/ListItem";
import PlaceTitle from "../components/details/PlaceTitle";
import InfoBlock from "../components/details/InfoBlock";
import InfoRow from "../components/details/InfoRow";
import SecurityInfo from "../components/details/SecurityInfo";

import CommentSection from "../components/comments/CommentSection";

import { IoLocationSharp, IoPricetag } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";

const LocationIcon = () => (<IoLocationSharp />);
const ClockIcon = () => (<CiClock2 />);
const TicketIcon = () => (<IoPricetag />);

export default function PlaceDetails({placeIdProp, onCloseModal}) {
  const [activeTab, setActiveTab] = useState('info');
  const { id: paramId } = useParams();

  const id = placeIdProp || paramId;
  
  const placeDataFromDB = getPlaceById(id);

  const [currentPlaceData, setCurrentPlaceData] = useState(placeDataFromDB);

  const [userVotes, setUserVotes] = useState({});

  useEffect(() => {
    setCurrentPlaceData(getPlaceById(id));
    setUserVotes({});
  }, [id]);

  const handleCommentVote = (commentId, voteType) => {
    const currentVote = userVotes[commentId];

    let newComments = [...currentPlaceData.comments];
    const commentIndex = newComments.findIndex(c => c.id === commentId);
    let commentToUpdate = { ...newComments[commentIndex] };

    let newVoteStatus = 'none';

    if (voteType === 'like') {
      if (currentVote === 'liked') {
        commentToUpdate.likes -= 1;
        newVoteStatus = 'none';
      } else if (currentVote === 'disliked') {
        commentToUpdate.likes += 1;
        commentToUpdate.dislikes -= 1;
        newVoteStatus = 'liked';
      } else {
        commentToUpdate.likes += 1;
        newVoteStatus = 'liked';
      }
    } else if (voteType === 'dislike') {
      if (currentVote === 'disliked') {
        commentToUpdate.dislikes -= 1;
        newVoteStatus = 'none';
      } else if (currentVote === 'liked') {
        commentToUpdate.dislikes += 1;
        commentToUpdate.likes -= 1;
        newVoteStatus = 'disliked';
      } else {
        commentToUpdate.dislikes += 1;
        newVoteStatus = 'disliked';
      }
    }

    newComments[commentIndex] = commentToUpdate;

    setUserVotes(prevVotes => ({
      ...prevVotes,
      [commentId]: newVoteStatus === 'none' ? undefined : newVoteStatus
    }));

    setCurrentPlaceData(prevData => ({
      ...prevData,
      comments: newComments
    }));
  };

  const handleClose = () => {
    console.log("Cerrar/Volver");
    if (onCloseModal) {
      onCloseModal();
    } else {
      console.log("Volver (Navegación normal)");
    }
  };

  const handleShare = () => {
    console.log("Compartir");
  };

  const handleNewComment = (newComment) => {
    setCurrentPlaceData(prevData => {
      const commentWithFlag = { ...newComment, isUserComment: true };
      return {
        ...prevData,
        comments: [commentWithFlag, ...prevData.comments]
      }
    });
  };

  const handleNewRating = (newRating) => {
    setCurrentPlaceData(prevData => {
      const oldSummary = prevData.ratingsSummary;
      const totalRatings = oldSummary.totalRatings + 1;
      
      // Calculamos el nuevo promedio
      const newAverage = ((oldSummary.averageRating * oldSummary.totalRatings) + newRating) / totalRatings;
      
      // Actualizamos el breakdown: sumamos 1 al índice correspondiente
      // ratingBreakdown es [5★%, 4★%, 3★%, 2★%, 1★%]
      const newBreakdown = [...oldSummary.ratingBreakdown];
      
      // Calculamos el nuevo porcentaje para cada estrella
      const recalculatedBreakdown = newBreakdown.map((percentage, index) => {
        const starValue = 5 - index;
        // Contamos cuántos comentarios tienen esta calificación
        const count = prevData.comments.filter(c => c.rating === starValue).length;
        // Si es la nueva calificación, sumamos 1
        const finalCount = starValue === newRating ? count + 1 : count;
        // Calculamos el porcentaje
        return Math.round((finalCount / totalRatings) * 100);
      });
      
      return {
        ...prevData,
        ratingsSummary: {
          averageRating: parseFloat(newAverage.toFixed(1)),
          totalRatings: totalRatings,
          ratingBreakdown: recalculatedBreakdown
        }
      };
    });
  };

  if (!currentPlaceData) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
        <h1 className="text-2xl font-bold text-gray-700">Lugar no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="h-full flex flex-col">
        
        <PageHeader onShareClick={handleShare} onCloseClick={handleClose} />
        
        <main className="p-6 pt-0 flex-grow overflow-y-auto">
          
          {activeTab === 'info' && (
            <div className="mt-6 space-y-4">
              <PlaceTitle>{currentPlaceData.name}</PlaceTitle>

              <InfoBlock>
                <InfoRow icon={<LocationIcon />}>
                  {currentPlaceData.location}
                </InfoRow>
                <InfoRow icon={<ClockIcon />}>
                  {currentPlaceData.schedule}
                </InfoRow>
                <InfoRow icon={<TicketIcon />}>
                  {currentPlaceData.price}
                </InfoRow>
              </InfoBlock>
              
              <ImageCarousel images={currentPlaceData.images} />

              <div className="my-6">
                <Button to="/itinerario">
                  Cómo llegar
                </Button>
              </div>
              
              <div>
                <SectionHeader>Descripción</SectionHeader>
                <BodyText>
                  {currentPlaceData.description}
                </BodyText>
              </div>
              
              <div>
                <SectionHeader>Qué ver y hacer</SectionHeader>
                <BulletedList>
                  {currentPlaceData.whatToDo.map((item, index)=> (
                    <ListItem key={index}>
                      {item}
                    </ListItem>
                  ))}
                </BulletedList>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100">
                <SecurityInfo level={currentPlaceData.security.level}/>
              </div>
            </div>
          )}

          {activeTab === 'comments' && (
            <CommentSection 
              ratings={currentPlaceData.ratingsSummary}
              comments={currentPlaceData.comments}
              userVotes={userVotes}
              onVote={handleCommentVote}
              onNewRating={handleNewRating}
              onNewComment={handleNewComment}
            />
          )}
        </main>

        <div className="border-t border-gray-200 sticky bottom-0 bg-white">
          <TabNavigator>
            <TabButton
              isActive={activeTab === 'info'}
              onClick={() => setActiveTab('info')}
            >
              Información
            </TabButton>
            
            <TabButton
              isActive={activeTab === 'comments'}
              onClick={() => setActiveTab('comments')}
            >
              Comentarios
            </TabButton>
          </TabNavigator>
        </div>

      </div>
    </div>
  );
}