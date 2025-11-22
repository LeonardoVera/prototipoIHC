// src/pages/ItineraryDetails.jsx

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// 1. Importar la nueva función de datos
import { getItineraryById } from "../data/MockDataBase";

// 2. Importar Componentes Reutilizables (¡Son un montón!)
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import PlaceTitle from "../components/details/PlaceTitle"; // Reutilizamos el estilo del título
import InfoBlock from "../components/details/InfoBlock";
import InfoRow from "../components/details/InfoRow";
import SectionHeader from "../components/details/SectionHeader";
import BodyText from "../components/details/BodyText";
import SecurityInfo from "../components/details/SecurityInfo";
import ImageCarousel from "../components/details/ImageCarousel"; // ¡Para las fotos con etiqueta!

// 3. Importar los NUEVOS Componentes de Itinerario
import ActivityTimeline from "../components/details/ActivityTimeline";

// 4. Importar Nuevos Iconos para esta vista
import { IoImageOutline, IoTimeOutline, IoCashOutline, IoMapOutline } from "react-icons/io5";

// Wrappers de iconos
const PhotoIcon = () => (<IoImageOutline />);
const DurationIcon = () => (<IoTimeOutline />);
const PriceIcon = () => (<IoCashOutline />);
const RouteIcon = () => (<IoMapOutline />);


export default function ItineraryDetails() {
  const { id } = useParams();
  const [itineraryData, setItineraryData] = useState(null);

  // Cargar datos (simple, sin hook complejo por ahora)
  useEffect(() => {
    const data = getItineraryById(id);
    setItineraryData(data);
  }, [id]);


  const handleClose = () => console.log("Volver");
  const handleShare = () => console.log("Compartir");

  if (!itineraryData) {
    return <div className="min-h-screen flex justify-center items-center">Itinerario no encontrado.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl flex flex-col overflow-hidden min-h-[80vh]">
        
        {/* Usamos el mismo header */}
        <PageHeader onShareClick={handleShare} onCloseClick={handleClose} />
        
        <main className="p-6 pt-0 flex-grow overflow-y-auto">
          
          {/* Título (Reutilizado) */}
          <PlaceTitle>{itineraryData.name}</PlaceTitle>

          {/* Bloque de Info Rápida (Reutilizado con nuevos datos/iconos) */}
          <InfoBlock>
            <InfoRow icon={<PhotoIcon />}>
              {itineraryData.quickInfo.photosLabel}
            </InfoRow>
            <InfoRow icon={<DurationIcon />}>
              {itineraryData.quickInfo.duration}
            </InfoRow>
            <InfoRow icon={<PriceIcon />}>
              {itineraryData.quickInfo.price}
            </InfoRow>
          </InfoBlock>
          
          {/* Nota pequeña del prototipo */}
          <p className="text-xs text-gray-400 mb-6 text-center px-4 leading-tight">
            La información presentada es referencial y puede variar según la experiencia de cada usuario
          </p>

          {/* Botón Principal "Iniciar Itinerario" (Reutilizado) */}
          <div className="my-6">
             {/* Este botón probablemente iniciaría un flujo de navegación */}
            <Button onClick={() => console.log("Iniciar!")}>
              Iniciar Itinerario
            </Button>
          </div>

          {/* Descripción (Reutilizado) */}
          <div className="mb-8">
            <SectionHeader>Descripción</SectionHeader>
            <BodyText>
              {itineraryData.description}
            </BodyText>
          </div>

          {/* --- CARRUSEL DE IMÁGENES (Pedido tuyo) --- */}
          {/* Muestra los lugares que se visitarán con sus etiquetas */}
          <div className="mb-8">
             <SectionHeader>Lugares a visitar</SectionHeader>
             <ImageCarousel images={itineraryData.images} />
          </div>

          {/* --- NUEVA SECCIÓN: Actividades --- */}
          <div className="mb-8">
            <SectionHeader>Actividades</SectionHeader>
            <ActivityTimeline activities={itineraryData.activities} />
          </div>

          {/* Botón Secundario "Ver ruta" e Icono (Reutilizado) */}
          <div className="flex items-center gap-4 mb-8">
             <RouteIcon className="w-8 h-8 text-gray-600" />
             {/* Usamos el mismo botón pero podríamos cambiarle el estilo si quisieras */}
             <Button className="flex-grow" onClick={() => console.log("Ver mapa")}>
                Ver ruta
             </Button>
          </div>

          {/* Seguridad (Reutilizado) */}
          <div className="pt-4 border-t border-gray-100">
            <SecurityInfo level={itineraryData.securityLevel}/>
          </div>

        </main>
      </div>
    </div>
  );
}