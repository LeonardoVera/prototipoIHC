import { useState } from "react";
import TabNavigator from "../components/TabNavigator";
import TabButton from "../components/TabButton";
import Button from "../components/Button";
import PageHeader from "../components/PageHeader";

import { getPlaceById } from "../data/MockDataBase";

import ImageCarousel from "../components/details/ImageCarousel";
import SectionHeader from "../components/details/SectionHeader";
import BodyText from "../components/details/BodyText";
import BulletedList from "../components/details/BulletedList";
import ListItem from "../components/details/ListItem";
import PlaceTitle from "../components/details/PlaceTitle";
import InfoBlock from "../components/details/InfoBlock"; 
import InfoRow from "../components/details/InfoRow";  
import SecurityInfo from "../components/details/SecurityInfo";
import { IoLocationSharp, IoPricetag } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { useParams } from "react-router-dom";

const LocationIcon = () => (<IoLocationSharp />);
const ClockIcon = () => (<CiClock2 />);
const TicketIcon = () => (<IoPricetag />);

export default function PlaceDetails() {
  const [activeTab, setActiveTab] = useState('info');

  const { id } = useParams();
  const placeData = getPlaceById(id);

  const handleClose = () => {
    // Aquí usarías la navegación
    console.log("Cerrar/Volver");
  };

  const handleShare = () => {
    console.log("Compartir");
    // Lógica para compartir
  };

  if (!placeData) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-500">Lugar no encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl flex flex-col overflow-hidden">
        
        <PageHeader onShareClick={handleShare} onCloseClick={handleClose} />
        
        {/* Contenido principal con padding */}
        <main className="p-6 pt-0 flex-grow">
          
          {/* --- BLOQUE DE TÍTULO E INFO (AÑADIDO) --- */}
          <PlaceTitle>{placeData.name}</PlaceTitle>

          <InfoBlock>
            <InfoRow icon={<LocationIcon />}>
              {placeData.location}
            </InfoRow>
            <InfoRow icon={<ClockIcon />}>
              {placeData.schedule}
            </InfoRow>
            <InfoRow icon={<TicketIcon />}>
              {placeData.price}
            </InfoRow>
          </InfoBlock>
          {/* --- FIN DE BLOQUE AÑADIDO --- */}

          <div className="my-6">
            <Button to="/itinerario">
              Cómo llegar
            </Button>
          </div>
          
          {/* --- RENDERIZADO CONDICIONAL --- */}

          {activeTab === 'info' && (
            <div className="mt-6 space-y-4">
              <ImageCarousel images={placeData.images} />
              
              <div>
                <SectionHeader>Descripción</SectionHeader>
                <BodyText>
                  {placeData.description}
                </BodyText>
              </div>
              
              <div>
                <SectionHeader>Qué ver y hacer</SectionHeader>
                  <BulletedList>
                    {placeData.whatToDo.map((item, index)=> (
                      <ListItem key = {index}>
                        {item}
                      </ListItem>
                    ))}
                </BulletedList>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100">
                <SecurityInfo level={placeData.security.level}/>
              </div>
              
            </div>
          )}

          {activeTab === 'comments' && (
            <div className="mt-6">
              <SectionHeader>Comentarios</SectionHeader>
              <BodyText>
                Aquí iría la lista de comentarios...
              </BodyText>
            </div>
          )}
        </main>

        {/* --- BARRA DE NAVEGACIÓN --- */}
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