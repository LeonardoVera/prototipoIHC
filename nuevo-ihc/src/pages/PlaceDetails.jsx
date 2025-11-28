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
    setUserVotes({}); // Resetea los votos al cambiar de lugar
  }, [id, getPlaceById]); // Añadimos getPlaceById a las dependencias

  const handleCommentVote = (commentId, voteType) => {
    const currentVote = userVotes[commentId];

    let newComments = [...currentPlaceData.comments];
    const commentIndex = newComments.findIndex(c => c.id === commentId);
    let commentToUpdate = { ...newComments[commentIndex] };

    let newVoteStatus = 'none';

    if (voteType === 'like') {
      if (currentVote === 'liked') { // Quitar like
        commentToUpdate.likes -= 1;
        newVoteStatus = 'none';
      } else if (currentVote === 'disliked') { // Cambiar de dislike a like
        commentToUpdate.likes += 1;
        commentToUpdate.dislikes -= 1;
        newVoteStatus = 'liked';
      } else { // Añadir like
        commentToUpdate.likes += 1;
        newVoteStatus = 'liked';
      }
    } else if (voteType === 'dislike') {
      if (currentVote === 'disliked') { // Quitar dislike
        commentToUpdate.dislikes -= 1;
        newVoteStatus = 'none';
      } else if (currentVote === 'liked') { // Cambiar de like a dislike
        commentToUpdate.dislikes += 1;
        commentToUpdate.likes -= 1;
        newVoteStatus = 'disliked';
      } else { // Añadir dislike
        commentToUpdate.dislikes += 1;
        newVoteStatus = 'disliked';
      }
    }

    // Actualizamos el comentario en el array de copia
    newComments[commentIndex] = commentToUpdate;

    // Actualizamos el registro de votos del usuario
    setUserVotes(prevVotes => ({
      ...prevVotes,
      [commentId]: newVoteStatus === 'none' ? undefined : newVoteStatus
    }));

    // "Guardamos" los cambios en el estado principal
    setCurrentPlaceData(prevData => ({
      ...prevData,
      comments: newComments
    }));
  };

  const handleClose = () => {
    console.log("Cerrar/Volver");
    if (onCloseModal) {
      onCloseModal(); // Si estoy en modal, cierro el modal
    } else {
      console.log("Volver (Navegación normal)");
    }
    };

  const handleShare = () => {
    console.log("Compartir");
    // Lógica para compartir
  };

  const handleNewRating = (newRating) => {
  // Actualizar el resumen de calificaciones
    setCurrentPlaceData(prevData => {
      const oldSummary = prevData.ratingsSummary;
      const totalRatings = oldSummary.totalRatings + 1;
      const newAverage = ((oldSummary.average * oldSummary.totalRatings) + newRating) / totalRatings;
      
      // Incrementar el contador de la estrella correspondiente
      const newBreakdown = { ...oldSummary.breakdown };
      newBreakdown[newRating] = (newBreakdown[newRating] || 0) + 1;
      
      return {
        ...prevData,
        ratingsSummary: {
          average: parseFloat(newAverage.toFixed(1)),
          totalRatings: totalRatings,
          breakdown: newBreakdown
        }
      };
    });
  };

  // Manejo de error: si el ID no existe en la BD
  if (!currentPlaceData) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
        <h1 className="text-2xl font-bold text-gray-700">Lugar no encontrado</h1>
      </div>
    );
  }

  // --- Renderizado del Componente ---
  return (
    <div className="h-full flex flex-col">
      <div className="h-full flex flex-col">
        
        <PageHeader onShareClick={handleShare} onCloseClick={handleClose} />
        
        {/* Contenido principal (cambia según la pestaña) */}
        <main className="p-6 pt-0 flex-grow overflow-y-auto">
          
          {/* --- Pestaña de INFORMACIÓN --- */}
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

          {/* --- Pestaña de COMENTARIOS --- */}
          {activeTab === 'comments' && (
            <CommentSection 
              ratings={currentPlaceData.ratingsSummary}
              comments={currentPlaceData.comments}
              userVotes={userVotes}
              onVote={handleCommentVote}
              onNewRating={handleNewRating}
            />
          )}
        </main>

        {/* --- BARRA DE NAVEGACIÓN (Tabs) --- */}
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