import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { FaCar, FaWalking, FaMapMarkerAlt } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix para los iconos de Leaflet en React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function RouteMap({ placeName, placeCoordinates }) {
    // Coordenadas del usuario (posición simulada, ej: Parque Kennedy)
    const userCoords = { lat: -12.1215, lng: -77.0298 }; 
    const isSameLocation = userCoords.lat === placeCoordinates.lat && userCoords.lng === placeCoordinates.lng;

    // Calcular el centro del mapa (punto medio entre usuario y destino)
    const center = [
        (userCoords.lat + placeCoordinates.lat) / 2,
        (userCoords.lng + placeCoordinates.lng) / 2
    ];

    // Línea de ruta (simplificada, línea recta)
    const routePositions = [
        [userCoords.lat, userCoords.lng],
        [placeCoordinates.lat, placeCoordinates.lng]
    ];

    return (
        <div className="h-full flex flex-col bg-gray-50">
            <h2 className="text-xl font-bold p-4 border-b text-gray-800">
                Ruta a {placeName}
            </h2>

            {/* Mapa Real con Leaflet */}
            <div className="flex-grow relative">
                <MapContainer 
                    center={center} 
                    zoom={13} 
                    style={{ height: '100%', width: '100%' }}
                    zoomControl={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    
                    {/* Marcador de ubicación del usuario */}
                    <Marker position={[userCoords.lat, userCoords.lng]}>
                        <Popup>
                            📍 Tu ubicación actual
                        </Popup>
                    </Marker>

                    {/* Marcador del destino */}
                    <Marker position={[placeCoordinates.lat, placeCoordinates.lng]}>
                        <Popup>
                            🎯 {placeName}
                        </Popup>
                    </Marker>

                    {/* Línea de ruta */}
                    <Polyline 
                        positions={routePositions} 
                        color="blue" 
                        weight={4}
                        opacity={0.7}
                    />
                </MapContainer>
            </div>

            {/* Información de la Ruta (Fija) */}
            <div className="p-4 bg-white border-t">
                <div className="text-lg font-semibold mb-2">
                    {isSameLocation ? '¡Ya estás aquí!' : 'Detalles de la Ruta'}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <FaCar className="text-blue-500" />
                        <span>En auto: <strong>15 min</strong> (4.5 km)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaWalking className="text-green-500" />
                        <span>Caminando: <strong>45 min</strong></span>
                    </div>
                </div>
            </div>
        </div>
    );
}