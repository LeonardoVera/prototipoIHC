import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { FaCar, FaWalking, FaTimes } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix para los iconos de Leaflet en React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Iconos personalizados para los números de paradas
const createNumberedIcon = (number) => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="
      background-color: #3b82f6;
      color: white;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 14px;
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    ">${number}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
};

export default function ItineraryRouteMap({ itineraryName, places, onClose }) {
    // Calcular el centro del mapa (promedio de todas las coordenadas)
    const center = places.reduce((acc, place) => {
        acc.lat += place.coordinates.lat;
        acc.lng += place.coordinates.lng;
        return acc;
    }, { lat: 0, lng: 0 });
    
    center.lat /= places.length;
    center.lng /= places.length;

    // Crear el array de posiciones para la polilínea (ruta)
    const routePositions = places.map(place => [
        place.coordinates.lat,
        place.coordinates.lng
    ]);

    // Calcular distancia y tiempo aproximados
    const totalStops = places.length;
    const estimatedTime = totalStops * 2; // 2 horas por parada aproximadamente

    return (
        <div className="h-full flex flex-col bg-gray-50">
            <div className="p-4 border-b bg-white flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">
                        Ruta del Itinerario
                    </h2>
                    <p className="text-sm text-gray-600">{itineraryName}</p>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Cerrar mapa"
                >
                    <FaTimes className="w-6 h-6 text-gray-600" />
                </button>
            </div>

            {/* Mapa Real con Leaflet */}
            <div className="flex-grow relative">
                <MapContainer 
                    center={[center.lat, center.lng]} 
                    zoom={12} 
                    style={{ height: '100%', width: '100%' }}
                    zoomControl={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    
                    {/* Marcadores numerados para cada parada */}
                    {places.map((place, index) => (
                        <Marker 
                            key={index}
                            position={[place.coordinates.lat, place.coordinates.lng]}
                            icon={createNumberedIcon(index + 1)}
                        >
                            <Popup>
                                <div className="text-center">
                                    <strong>Parada {index + 1}</strong>
                                    <br />
                                    {place.name}
                                    <br />
                                    <span className="text-xs text-gray-600">{place.time}</span>
                                </div>
                            </Popup>
                        </Marker>
                    ))}

                    {/* Línea de ruta conectando todos los lugares */}
                    <Polyline 
                        positions={routePositions} 
                        color="#3b82f6" 
                        weight={4}
                        opacity={0.7}
                        dashArray="10, 10"
                    />
                </MapContainer>
            </div>

            {/* Información de la Ruta */}
            <div className="p-4 bg-white border-t">
                <div className="text-lg font-semibold mb-2">
                    Recorrido Completo
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">{totalStops} paradas</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCar className="text-blue-500" />
                        <span>Duración: <strong>~{estimatedTime}h</strong></span>
                    </div>
                </div>
                
                {/* Lista de paradas */}
                <div className="max-h-32 overflow-y-auto space-y-1">
                    {places.map((place, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-gray-700">
                            <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-[10px]">
                                {index + 1}
                            </div>
                            <span className="font-medium">{place.time}</span>
                            <span>-</span>
                            <span>{place.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
