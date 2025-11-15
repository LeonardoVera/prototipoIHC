import { useState } from "react";
import TabNavigator from "../components/TabNavigator";
import TabButton from "../components/TabButton";
import Button from "../components/Button";
import ImageCarousel from "../components/details/ImageCarousel";
import SectionHeader from "../components/details/SectionHeader";
import BodyText from "../components/details/BodyText";
import BulletedList from "../components/details/BulletedList";
import ListItem from "../components/details/ListItem";
import PageHeader from "../components/PageHeader";

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const TicketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-1.5h5.25m-7.5 0h7.5m-7.5 0H3.375c-.621 0-1.125-.504-1.125-1.125V8.25c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125H16.5m-1.5-1.5H15" />
  </svg>
);

// 2. DATOS DE EJEMPLO (esto vendría de una API)
const placeImages = [
  { id: 1, url: 'https://wallpapers.com/images/hd/1920-x-1080-naruto-puo1nvsest4fw828.jpg', description: 'Vista de la pirámide principal' },
  { id: 2, url: 'https://wallpapers.com/images/hd/1920-x-1080-naruto-puo1nvsest4fw828.jpg', description: 'Adobes de cerca (Técnica del librero)' },
  { id: 3, url: 'https://wallpapers.com/images/hd/1920-x-1080-naruto-puo1nvsest4fw828.jpg', description: 'Recorrido superior' },
  { id: 4, url: 'https://wallpapers.com/images/hd/1920-x-1080-naruto-puo1nvsest4fw828.jpg', description: 'Restaurante con vista' },
];


export default function PlaceDetails() {
  const [activeTab, setActiveTab] = useState('info');

  const handleClose = () => {
    // Aquí usarías la navegación, por ejemplo:
    // navigate(-1); // (Si usas react-router-dom)
    console.log("Cerrar/Volver");
  };

  const handleShare = () => {
    console.log("Compartir");
    // Aquí iría la lógica para compartir (ej. Web Share API)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl flex flex-col">
        <PageHeader onShareClick={handleShare} onCloseClick={handleClose} />
        <div className="p-6 flex-grow">
          {/* Aquí iría el Título, InfoRápida (Ubicación, etc) */}
          
          <Button to="/itinerario">
            Cómo llegar
          </Button>
          
          {/* --- RENDERIZADO CONDICIONAL --- */}

          {activeTab === 'info' && (
            <div className="mt-6 space-y-4">
              {/* 3. USAR EL CAROUSEL AQUÍ */}
              <ImageCarousel images={placeImages} />
              
              <div>
                <SectionHeader>Descripción</SectionHeader>
                <BodyText>
                  La Huaca Pucllana es un importante centro ceremonial de la
                  cultura Lima (200–700 d.C.). Este complejo arqueológico...
                </BodyText>
              </div>
              
              <div>
                <SectionHeader>Qué ver y hacer</SectionHeader>
                  <BulletedList>
                  <ListItem>
                    Recorrer la pirámide y los patios ceremoniales.
                  </ListItem>
                  <ListItem>
                    Visitar el museo de sitio con piezas originales.
                  </ListItem>
                  <ListItem>
                    Disfrutar de una comida en el restaurante Huaca Pucllana.
                  </ListItem>
                  <ListItem>
                    Ideal para fotos culturales y panorámicas de Lima.
                  </ListItem>
                </BulletedList>
              </div>
              
            </div>
          )}

          {activeTab === 'comments' && (
            <div className="mt-6">
              <h2 className="text-xl font-bold mb-2">Comentarios</h2>
              <p>Aquí iría la lista de comentarios...</p>
            </div>
          )}
        </div>

        {/* --- BARRA DE NAVEGACIÓN --- */}
        <div className="border-t border-gray-200">
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