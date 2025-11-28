import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import MenuOverlay from '../components/MenuOverlay';
import TimelineItem from '../components/itinerary/TimelineItem';
import PlaceDetails from './PlaceDetails';
import BottomSheet from '../components/BottomSheet';

export default function CurrentItinerary() {

  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const itineraryData = [
    { time: '9:00', location: 'Huaca Pucllana', type: 'start', id: 'huaca-pucllana' },
    { time: '11:00', location: 'Museo del pisco', type: 'middle', id: 'museo-pisco' },
    { time: '14:00', location: 'Cevichería La Mar', type: 'middle', id: 'cevicheria-la-mar' },
    { time: '16:00', location: 'Centro Histórico', type: 'middle', id: 'centro-historico' },
    { time: '19:00', location: 'Barranco', type: 'end', id: 'barranco' },
  ];

  const handleInfoClick = (placeId) => {
    setSelectedPlaceId(placeId);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl flex flex-col overflow-hidden relative">
        {/* Top Bar */}
        <TopBar
          onMenuToggle={() => setMenuOpen(!menuOpen)}
          title="Itinerario Actual"
        />

        {/* Menu Overlay */}
        <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* Contenido Principal */}
        <div className="p-6 overflow-y-auto flex-grow">
        {/* Header del Itinerario */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Tour Relax</h2>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            <span>📅</span>
            <span>vie., 10 oct. - vie., 10 oct. 2025</span>
          </p>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="space-y-2">
            {itineraryData.map((item, idx) => (
              <TimelineItem
                key={idx}
                time={item.time}
                location={item.location}
                type={item.type}
                onInfoClick={() => handleInfoClick(item.id)}
              />
            ))}
          </div>
        </div>

        </div>

        {/* Botón flotante para compartir */}
        <button className="absolute bottom-6 right-6 bg-teal-600 text-white p-4 rounded-full shadow-2xl hover:bg-teal-700 transition-colors z-30">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" 
            />
          </svg>
        </button>
      </div>

      <BottomSheet
        isOpen={!!selectedPlaceId} // Es true si hay un ID seleccionado
        onClose={() => setSelectedPlaceId(null)}
      >
        <PlaceDetails
          placeIdProp={selectedPlaceId}
          onCloseModal={() => setSelectedPlaceId(null)}
        />
      </BottomSheet>
    </div>
  );
}
