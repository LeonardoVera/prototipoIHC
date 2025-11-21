// Importaciones de React y React Router
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Importación de la "Base de Datos"
import { getPlaceById } from "../data/MockDataBase";

// --- Importaciones de Componentes UI ---
// (Rutas basadas en tu último código)
import TabNavigator from "../components/TabNavigator";
import TabButton from "../components/TabButton";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";

// Componentes de la pestaña "Información"
import ImageCarousel from "../components/details/ImageCarousel";
import SectionHeader from "../components/details/SectionHeader";
import BodyText from "../components/details/BodyText";
import BulletedList from "../components/details/BulletedList";
import ListItem from "../components/details/ListItem";
import PlaceTitle from "../components/details/PlaceTitle";
import InfoBlock from "../components/details/InfoBlock";
import InfoRow from "../components/details/InfoRow";
import SecurityInfo from "../components/details/SecurityInfo";

// Componentes de la pestaña "Comentarios"
import CommentSection from "../components/comments/CommentSection";

// Importaciones de Iconos
import { IoLocationSharp, IoPricetag } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";

// --- Componentes de Iconos (Wrappers) ---
const LocationIcon = () => (<IoLocationSharp />);
const ClockIcon = () => (<CiClock2 />);
const TicketIcon = () => (<IoPricetag />);
// --- Fin Iconos ---

export default function PlaceDetails() {
  const [activeTab, setActiveTab] = useState('info');
  const { id } = useParams();
  
  // Obtenemos la data "limpia" de la base de datos simulada
  const placeDataFromDB = getPlaceById(id);

  // --- Lógica de Estado para Likes/Dislikes ---

  //    Esto nos permite "guardar" los cambios (ej. +1 like).
  const [currentPlaceData, setCurrentPlaceData] = useState(placeDataFromDB);

  // 2. Estado para recordar los votos del usuario (un voto por comentario)
  const [userVotes, setUserVotes] = useState({});

  // 3. Efecto para resetear el estado si el ID de la URL cambia
  useEffect(() => {
    setCurrentPlaceData(getPlaceById(id));
    setUserVotes({}); // Resetea los votos al cambiar de lugar
  }, [id, getPlaceById]); // Añadimos getPlaceById a las dependencias

  // 4. Función para manejar los votos
  const handleCommentVote = (commentId, voteType) => {
    const currentVote = userVotes[commentId];

    // Copiamos los comentarios para no mutar el estado directamente
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
    // Aquí podrías usar: navigate(-1); si usas useNavigate
  };

  const handleShare = () => {
    console.log("Compartir");
    // Lógica para compartir
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
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl flex flex-col overflow-hidden">
        
        <PageHeader onShareClick={handleShare} onCloseClick={handleClose} />
        
        {/* Contenido principal (cambia según la pestaña) */}
        <main className="p-6 pt-0 flex-grow">
          
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