import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import MenuOverlay from '../components/MenuOverlay';
import InteractiveMap from '../components/nearbyPlaces/InteractiveMap';
import LocationsList from '../components/nearbyPlaces/LocationsList';

export default function NearbyPlaces() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const locations = [
    { id: 1, name: 'Huaca Pucllana', lat: 12.096, lng: -77.189, color: 'bg-blue-500' },
    { id: 2, name: 'Museo del pisco', lat: 12.095, lng: -77.185, color: 'bg-purple-500' },
    { id: 3, name: 'Cevichería La Mar', lat: 12.091, lng: -77.182, color: 'bg-green-500' },
    { id: 4, name: 'Centro Histórico', lat: 12.046, lng: -77.039, color: 'bg-orange-500' },
  ];

  const handleMarkerClick = (id) => {
    setSelectedMarker(selectedMarker === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl flex flex-col overflow-hidden relative">
        {/* Top Bar */}
        <TopBar
          onMenuToggle={() => setMenuOpen(!menuOpen)}
          title="Lugares Cercanos"
        />

        {/* Menu Overlay */}
        <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* Contenido Principal */}
        <div className="p-6 overflow-y-auto flex-grow">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Lugares cercanos</h2>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            <span>🗺️</span>
            <span>Descubre qué hay alrededor tuyo</span>
          </p>
        </div>

        {/* Mapa Interactivo */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <InteractiveMap
            locations={locations}
            onMarkerClick={handleMarkerClick}
            selectedMarkerId={selectedMarker}
          />
        </div>

        {/* Lista de Lugares */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 px-2">Ubicaciones disponibles</h3>
          <LocationsList
            locations={locations}
            selectedId={selectedMarker}
            onLocationClick={handleMarkerClick}
          />
        </div>
        </div>
      </div>
    </div>
  );
}
