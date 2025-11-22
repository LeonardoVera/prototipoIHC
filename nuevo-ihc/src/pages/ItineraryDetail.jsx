// src/pages/ItineraryDetails.jsx

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// 1. Importar la función de datos
import { getItineraryById } from "../data/MockDataBase";

// 2. Importar Componentes UI Generales
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import TabNavigator from "../components/TabNavigator";
import TabButton from "../components/TabButton";

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

export default function ItineraryDetails() {
  const [activeTab, setActiveTab] = useState('info');
  const { id } = useParams();

  // --- LÓGICA DE ESTADO (Igual que en PlaceDetails) ---
  
  // 1. Obtenemos la data inicial
  const initialData = getItineraryById(id);
  
  // 2. Estado local para poder modificar likes/dislikes
  const [currentItinerary, setCurrentItinerary] = useState(initialData);
  
  // 3. Estado de votos del usuario
  const [userVotes, setUserVotes] = useState({});

  // 4. Efecto para cargar data si cambia el ID
  useEffect(() => {
    setCurrentItinerary(getItineraryById(id));
    setUserVotes({});
  }, [id]);

  // 5. Manejador de Votos (Adaptado para itinerary)
  const handleCommentVote = (commentId, voteType) => {
    const currentVote = userVotes[commentId];
    
    // Copia profunda de los comentarios
    let newComments = [...currentItinerary.comments];
    const commentIndex = newComments.findIndex(c => c.id === commentId);
    let commentToUpdate = { ...newComments[commentIndex] };

    let newVoteStatus = 'none';

    // Lógica de Like/Dislike (Idéntica a PlaceDetails)
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

    setCurrentItinerary(prevData => ({
      ...prevData,
      comments: newComments
    }));
  };
  // --- FIN LÓGICA DE ESTADO ---

  const handleClose = () => console.log("Volver");
  const handleShare = () => console.log("Compartir");

  if (!currentItinerary) {
    return <div className="min-h-screen flex justify-center items-center">Itinerario no encontrado.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl flex flex-col overflow-hidden min-h-[80vh]">
        
        <PageHeader onShareClick={handleShare} onCloseClick={handleClose} />
        
        <main className="p-6 pt-0 flex-grow overflow-y-auto">
          
          {/* --- PESTAÑA: INFORMACIÓN --- */}
          {activeTab === 'info' && (
            <div className="animate-fadeIn"> {/* Un fade-in simple si tienes configurado tailwind animations, si no, quítalo */}
              
              <PlaceTitle>{currentItinerary.name}</PlaceTitle>

              {/* Info Rápida */}
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
                <Button onClick={() => console.log("Iniciar!")}
                  className="w-full">
                  Iniciar Itinerario
                </Button>
              </div>

              <div className="mb-8">
                <SectionHeader>Descripción</SectionHeader>
                <BodyText>
                  {currentItinerary.description}
                </BodyText>
              </div>

              {/* Carrusel de Lugares */}
              <div className="mb-8">
                 <SectionHeader>Lugares a visitar</SectionHeader>
                 <ImageCarousel images={currentItinerary.images} />
              </div>

              {/* Linea de Tiempo de Actividades */}
              <div className="mb-8">
                <SectionHeader>Actividades</SectionHeader>
                <ActivityTimeline activities={currentItinerary.activities} />
              </div>

              <div className="flex items-center gap-4 mb-8">
                 <FaBus />
                 <Button className="flex-grow" onClick={() => console.log("Ver mapa")}>
                    Ver ruta
                 </Button>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <SecurityInfo level={currentItinerary.securityLevel}/>
              </div>
            </div>
          )}

          {/* --- PESTAÑA: COMENTARIOS --- */}
          {activeTab === 'comments' && (
            <CommentSection 
              ratings={currentItinerary.ratingsSummary}
              comments={currentItinerary.comments}
              userVotes={userVotes}
              onVote={handleCommentVote}
            />
          )}

        </main>

        {/* --- BARRA DE NAVEGACIÓN INFERIOR --- */}
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