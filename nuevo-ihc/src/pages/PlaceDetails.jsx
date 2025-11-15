import { useState } from "react";
import TabNavigator from "../components/TabNavigator";
import TabButton from "../components/TabButton";
import Button from "../components/Button";
import ImageCarousel from "../components/details/ImageCarousel";
import SectionHeader from "../components/details/SectionHeader";
import BodyText from "../components/details/BodyText";

// 2. DATOS DE EJEMPLO (esto vendría de una API)
const placeImages = [
  { id: 1, url: 'https://wallpapers.com/images/hd/1920-x-1080-naruto-puo1nvsest4fw828.jpg', description: 'Vista de la pirámide principal' },
  { id: 2, url: 'https://wallpapers.com/images/hd/1920-x-1080-naruto-puo1nvsest4fw828.jpg', description: 'Adobes de cerca (Técnica del librero)' },
  { id: 3, url: 'https://wallpapers.com/images/hd/1920-x-1080-naruto-puo1nvsest4fw828.jpg', description: 'Recorrido superior' },
  { id: 4, url: 'https://wallpapers.com/images/hd/1920-x-1080-naruto-puo1nvsest4fw828.jpg', description: 'Restaurante con vista' },
];


export default function PlaceDetails() {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl flex flex-col">
        
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
                <BodyText>
                  Aquí iría la lista de viñetas, o puedes usar BodyText
                  si es un párrafo. (Luego crearemos el BulletedList).
                </BodyText>
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