import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { usePlaces } from "../context/PlacesContext";

import TabNavigator from "../components/TabNavigator";
import TabButton from "../components/TabButton";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import BottomSheet from "../components/BottomSheet";
import RouteMap from "../components/RouteMap";

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
  const { getPlaceById, addCommentToPlace, updatePlaceCommentVote } = usePlaces();
  
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [userVotes, setUserVotes] = useState({});

  const id = placeIdProp || paramId;
  
  // Obtener datos del lugar desde el contexto (siempre actualizados)
  const currentPlaceData = getPlaceById(id);

  // Resetear votos cuando cambia el lugar
  useEffect(() => {
    setUserVotes({});
  }, [id]);

  const handleDirectionsClick = () => {
    if (currentPlaceData && currentPlaceData.coordinates) {
      setIsMapOpen(true);
    } else {
      alert("Coordenadas no disponibles para este lugar.");
    }
  };

  const handleCommentVote = (commentId, voteType) => {
    const currentVote = userVotes[commentId];
    const comment = currentPlaceData.comments.find(c => c.id === commentId);
    if (!comment) return;

    let updatedComment = { ...comment };
    let newVoteStatus = 'none';

    if (voteType === 'like') {
      if (currentVote === 'liked') {
        updatedComment.likes -= 1;
        newVoteStatus = 'none';
      } else if (currentVote === 'disliked') {
        updatedComment.likes += 1;
        updatedComment.dislikes -= 1;
        newVoteStatus = 'liked';
      } else {
        updatedComment.likes += 1;
        newVoteStatus = 'liked';
      }
    } else if (voteType === 'dislike') {
      if (currentVote === 'disliked') {
        updatedComment.dislikes -= 1;
        newVoteStatus = 'none';
      } else if (currentVote === 'liked') {
        updatedComment.dislikes += 1;
        updatedComment.likes -= 1;
        newVoteStatus = 'disliked';
      } else {
        updatedComment.dislikes += 1;
        newVoteStatus = 'disliked';
      }
    }

    // Actualizar en el contexto (persistente)
    updatePlaceCommentVote(id, commentId, updatedComment);

    setUserVotes(prevVotes => ({
      ...prevVotes,
      [commentId]: newVoteStatus === 'none' ? undefined : newVoteStatus
    }));
  };

  const handleClose = () => {
    if (onCloseModal) {
      onCloseModal();
    }
  };

  const handleShare = () => {
    console.log("Compartir");
  };

  const handleNewComment = (newComment) => {
    const commentWithFlag = { ...newComment, isUserComment: true };
    // Agregar comentario al contexto (persistente)
    addCommentToPlace(id, commentWithFlag);
  };

  const handleNewRating = (newRating) => {
    console.log('Rating actualizado:', newRating);
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

              <div className="my-6 flex justify-center">
                <Button onClick={handleDirectionsClick} className="w-full">
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

      {currentPlaceData && currentPlaceData.coordinates && (
        <BottomSheet 
          isOpen={isMapOpen} 
          onClose={() => setIsMapOpen(false)}
        >
          <RouteMap 
            placeName={currentPlaceData.name}
            placeCoordinates={currentPlaceData.coordinates}
            onClose={() => setIsMapOpen(false)}
          />
        </BottomSheet>
      )}
    </div>
  );
}
