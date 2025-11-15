import { useState } from "react";
import TabNavigator from "../components/TabNavigator";
import TabButton from "../components/TabButton";

export default function PlaceDetails() {
  // Estado para saber qué pestaña está activa
  const [activeTab, setActiveTab] = useState('info'); // 'info' o 'comments'

  return (
    // Este es el contenedor principal que centra todo en la web
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      
      {/* Esta es la tarjeta/modal que simula tu app */}
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl flex flex-col">
        
        {/* 1. Contenido Principal */}
        <div className="p-6 flex-grow">
          {/* Aquí iría todo el contenido (Título, Fotos, Descripción, etc.)
          */}

          {/* Renderizado Condicional del Contenido */}
          {activeTab === 'info' && (
            <div>
              <h2 className="text-xl font-bold mb-2">Información del Lugar</h2>
              <p>Aquí va toda la descripción, "Qué ver y hacer", etc.</p>
              {/* <InfoContent /> */}
            </div>
          )}

          {activeTab === 'comments' && (
            <div>
              <h2 className="text-xl font-bold mb-2">Comentarios</h2>
              <p>Aquí iría la lista de comentarios de los usuarios...</p>
              {/* <CommentsContent /> */}
            </div>
          )}
        </div>

        {/* 2. Barra de Navegación (Tabs) */}
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