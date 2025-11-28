import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix para los iconos de Leaflet en React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Icono personalizado rojo para lugares
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Icono personalizado amarillo para ubicación del usuario
const yellowIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Componente para centrar el mapa cuando se selecciona un marcador
function MapController({ selectedLocation, userCoords }) {
  const map = useMap();
  
  React.useEffect(() => {
    if (selectedLocation) {
      map.flyTo([selectedLocation.lat, selectedLocation.lng], 15, {
        duration: 1
      });
    }
  }, [selectedLocation, map]);
  
  return null;
}

export default function InteractiveMap({ locations, onMarkerClick, selectedMarkerId }) {
  // Ubicación del usuario (simulada - Miraflores)
  const userCoords = { lat: -12.1215, lng: -77.0298 };
  
  // Encontrar la ubicación seleccionada
  const selectedLocation = locations.find(loc => loc.id === selectedMarkerId);
  
  // Calcular el centro del mapa (promedio de todas las ubicaciones)
  const centerLat = locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length;
  const centerLng = locations.reduce((sum, loc) => sum + loc.lng, 0) / locations.length;
  
  return (
    <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg z-0">
      <MapContainer 
        center={[centerLat, centerLng]} 
        zoom={13} 
        style={{ height: '100%', width: '100%', zIndex: 0 }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Controlador para centrar el mapa */}
        <MapController selectedLocation={selectedLocation} userCoords={userCoords} />
        
        {/* Marcador de ubicación del usuario */}
        <Marker position={[userCoords.lat, userCoords.lng]} icon={yellowIcon}>
          <Popup>
            <div className="text-center">
              <span className="font-bold">📍 Tu ubicación</span>
            </div>
          </Popup>
        </Marker>

        {/* Marcadores de los lugares */}
        {locations.map((loc) => (
          <Marker 
            key={loc.id}
            position={[loc.lat, loc.lng]} 
            icon={redIcon}
            eventHandlers={{
              click: () => onMarkerClick(loc.id),
            }}
          >
            <Popup>
              <div className="text-center">
                <span className="font-bold">{loc.name}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Botón de Ver lugar (aparece cuando hay selección) */}
      {selectedMarkerId && selectedLocation && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-2.5 px-6 rounded-full shadow-xl transition-all duration-300 hover:scale-105 text-sm">
            Ver {selectedLocation.name}
          </button>
        </div>
      )}
    </div>
  );
}
