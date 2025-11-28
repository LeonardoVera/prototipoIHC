import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import MenuOverlay from '../components/MenuOverlay';
import InteractiveMap from '../components/nearbyPlaces/InteractiveMap';
import LocationsList from '../components/nearbyPlaces/LocationsList';
import BottomSheet from '../components/BottomSheet';
import PlaceDetails from './PlaceDetails';
import { getAllPlaces } from '../data/MockDataBase';

export default function NearbyPlaces() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  // Obtener lugares reales de la base de datos
  const allPlaces = getAllPlaces();
  
  // Transformar los lugares al formato que necesita el mapa
  const locations = allPlaces.map(place => ({
    id: place.id,
    name: place.name,
    lat: place.coordinates?.lat || -12.1108,
    lng: place.coordinates?.lng || -77.0292,
  }));

  const handleMarkerClick = (id) => {
    setSelectedMarker(selectedMarker === id ? null : id);
  };

  const handleViewPlace = (id) => {
    setSelectedPlaceId(id);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl flex flex-col overflow-hidden relative h-[90vh]">
        {/* Top Bar */}
        <TopBar
          onMenuToggle={() => setMenuOpen(!menuOpen)}
          title="Lugares Cercanos"
        />

        {/* Menu Overlay */}
        <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* Contenido Principal */}
        <div className="overflow-y-auto flex-grow">
        
          {/* Mapa Interactivo Real */}
          <div className="px-4 pt-4">
            <InteractiveMap
              locations={locations}
              onMarkerClick={handleMarkerClick}
              selectedMarkerId={selectedMarker}
            />
          </div>

          <div className="p-4 pb-6">
            <h2 className="text-lg font-bold mb-3 text-gray-800">Explorar zona</h2>
            <LocationsList 
              locations={locations}
              selectedId={selectedMarker}
              onLocationClick={handleMarkerClick}
              onViewPlace={handleViewPlace}
            />
          </div>
        </div>
      </div>

      {/* Modal para ver detalles del lugar */}
      <BottomSheet 
        isOpen={!!selectedPlaceId} 
        onClose={() => setSelectedPlaceId(null)}
      >
        {selectedPlaceId && (
          <PlaceDetails 
            placeIdProp={selectedPlaceId} 
            onCloseModal={() => setSelectedPlaceId(null)} 
          />
        )}
      </BottomSheet>
    </div>
  );
}
