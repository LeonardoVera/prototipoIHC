import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// 1. Importar el contexto y funciones auxiliares
import { usePlaces } from "../context/PlacesContext";
import { getPlaceById } from "../data/MockDataBase";

// 2. Importar Componentes UI Generales
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import TabNavigator from "../components/TabNavigator";
import TabButton from "../components/TabButton";
import BottomSheet from "../components/BottomSheet";
import ItineraryRouteMap from "../components/ItineraryRouteMap";

// 3. Importar Componentes de Detalle (Reutilizados)
import PlaceTitle from "../components/details/PlaceTitle";
import InfoBlock from "../components/details/InfoBlock";
import InfoRow from "../components/details/InfoRow";
import SectionHeader from "../components/details/SectionHeader";
import BodyText from "../components/details/BodyText";
import SecurityInfo from "../components/details/SecurityInfo";
import ImageCarousel from "../components/details/ImageCarousel";

// 4. Importar Componentes Específicos de Itinerario
import ActivityTimeline from "../components/details/ActivityTimeline";

// 5. Importar Sección de Comentarios
import CommentSection from "../components/comments/CommentSection";

// 6. Iconos
import { IoImageOutline, IoTimeOutline, IoCashOutline, IoMapOutline } from "react-icons/io5";
import { FaBus } from "react-icons/fa";

const PhotoIcon = () => (<IoImageOutline />);
const DurationIcon = () => (<IoTimeOutline />);
const PriceIcon = () => (<IoCashOutline />);
const RouteIcon = () => (<IoMapOutline />);

// 1. CAMBIO: Recibimos 'itineraryIdProp' en lugar de 'placeIdProp' para ser claros
export default function ItineraryDetails({ itineraryIdProp, onCloseModal }) {
  const [activeTab, setActiveTab] = useState('info');
  const { id: paramId } = useParams();
  const { getItineraryById, addCommentToItinerary, updateItineraryCommentVote } = usePlaces();

  // 2. CAMBIO: Determinamos el ID real
  const id = itineraryIdProp || paramId;

  const [userVotes, setUserVotes] = useState({});
  const [isMapOpen, setIsMapOpen] = useState(false);

  // Obtener datos del itinerario desde el contexto (siempre actualizados)
  const currentItinerary = getItineraryById(id);

  // Resetear votos cuando cambia el itinerario
  useEffect(() => {
    setUserVotes({});
  }, [id]);

  // Manejador de Votos
  const handleCommentVote = (commentId, voteType) => {
    if (!currentItinerary) return;
    
    const currentVote = userVotes[commentId];
    const comment = currentItinerary.comments.find(c => c.id === commentId);
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
    updateItineraryCommentVote(id, commentId, updatedComment);

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

  const handleShare = () => console.log("Compartir");

  const handleViewRoute = () => {
    setIsMapOpen(true);
  };

  const handleNewComment = (newComment) => {
    const commentWithFlag = { ...newComment, isUserComment: true };
    // Agregar comentario al contexto (persistente)
    addCommentToItinerary(id, commentWithFlag);
  };

  const handleNewRating = (newRating) => {
    console.log('Rating actualizado:', newRating);
  };

  if (!currentItinerary) {
    return <div className="min-h-screen flex justify-center items-center">Itinerario no encontrado.</div>;
  }

  // 4. CAMBIO: Renderizado Condicional del Contenedor
  // Si es modal (hay prop), usamos h-full.
  // Si es página normal, usamos el estilo de tarjeta gris.
  const isModal = !!itineraryIdProp;

  return (
    <div className={isModal ? "h-full flex flex-col overflow-hidden" : "min-h-screen bg-gray-100 flex justify-center items-center p-4"}>
      <div className={isModal ? "flex-grow flex flex-col overflow-hidden" : "max-w-md w-full bg-white shadow-xl rounded-xl flex flex-col overflow-hidden min-h-[80vh]"}>
        
        <PageHeader onShareClick={handleShare} onCloseClick={handleClose} />
        
        <main className="p-6 pt-0 flex-grow overflow-y-auto">
          
          {activeTab === 'info' && (
            <div className="animate-fadeIn">
              <PlaceTitle>{currentItinerary.name}</PlaceTitle>

              <InfoBlock>
                <InfoRow icon={<PhotoIcon />}>
                  {currentItinerary.quickInfo.photosLabel}
                </InfoRow>
                <InfoRow icon={<DurationIcon />}>
                  {currentItinerary.quickInfo.duration}
                </InfoRow>
                <InfoRow icon={<PriceIcon />}>
                  {currentItinerary.quickInfo.price}
                </InfoRow>
              </InfoBlock>
              
              <p className="text-xs text-gray-400 mb-6 text-center px-4 leading-tight">
                La información presentada es referencial y puede variar según la experiencia de cada usuario
              </p>

              <div className="my-6 flex justify-center">
                <Button onClick={() => console.log("Iniciar!")} className="w-full">
                  Iniciar Itinerario
                </Button>
              </div>

              <div className="mb-8">
                <SectionHeader>Descripción</SectionHeader>
                <BodyText>
                  {currentItinerary.description}
                </BodyText>
              </div>

              <div className="mb-8">
                 <SectionHeader>Lugares a visitar</SectionHeader>
                 <ImageCarousel images={currentItinerary.images} />
              </div>

              <div className="mb-8">
                <SectionHeader>Actividades</SectionHeader>
                <ActivityTimeline activities={currentItinerary.activities} />
              </div>

              <div className="flex items-center gap-4 mb-8">
                 <FaBus />
                 <Button className="flex-grow" onClick={handleViewRoute}>
                    Ver ruta
                 </Button>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <SecurityInfo level={currentItinerary.securityLevel}/>
              </div>
            </div>
          )}

          {activeTab === 'comments' && (
            <CommentSection 
              ratings={currentItinerary.ratingsSummary}
              comments={currentItinerary.comments}
              userVotes={userVotes}
              onVote={handleCommentVote}
              onNewRating={handleNewRating}
              onNewComment={handleNewComment}
            />
          )}

        </main>

        <div className="border-t border-gray-200 bg-white flex-shrink-0">
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

      {/* Mapa del itinerario */}
      {currentItinerary && (
        <BottomSheet 
          isOpen={isMapOpen} 
          onClose={() => setIsMapOpen(false)}
        >
          <ItineraryRouteMap 
            itineraryName={currentItinerary.name}
            places={currentItinerary.activities.map(activity => ({
              name: activity.placeName,
              time: activity.time,
              coordinates: getPlaceById(activity.placeId)?.coordinates || { lat: 0, lng: 0 }
            }))}
            onClose={() => setIsMapOpen(false)}
          />
        </BottomSheet>
      )}
    </div>
  );
}