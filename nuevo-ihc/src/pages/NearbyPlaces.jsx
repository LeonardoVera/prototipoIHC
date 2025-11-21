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
        <div className="overflow-y-auto flex-grow">
        {/* Card destacado de evento */}
        <div className="p-4 bg-white border-b border-gray-200">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl overflow-hidden shadow-md border border-orange-200">
            <div className="flex gap-3 p-3">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=150&h=150&fit=crop" 
                alt="Fiestas Patrias" 
                className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23f97316" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-size="60" text-anchor="middle" dy=".3em" fill="white"%3E🎉%3C/text%3E%3C/svg%3E';
                }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-orange-600 mb-1 uppercase tracking-wide">Evento</p>
                <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1">
                  Vive la emoción de las Fiestas Patrias. Disfruta de los desfiles, ferias gastronómicas y actividades culturales que llenan de alegría las calles.
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa Interactivo - Ocupa más espacio */}
        <div className="px-4 pt-4">
          <InteractiveMap
            locations={locations}
            onMarkerClick={handleMarkerClick}
            selectedMarkerId={selectedMarker}
          />
        </div>
        </div>
      </div>
    </div>
  );
}
