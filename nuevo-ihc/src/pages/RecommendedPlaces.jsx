import React, { useState } from 'react';
// Quitamos Link porque ahora usaremos modales, no navegación
// import { Link } from 'react-router-dom'; 

import { getAllPlaces, getAllItineraries } from '../data/MockDataBase';
import { IoLocationSharp } from "react-icons/io5";
import { FaRoute, FaChevronRight } from "react-icons/fa";

// 1. IMPORTAMOS LOS COMPONENTES QUE CREASTE
import BottomSheet from '../components/BottomSheet';
import PlaceDetails from './PlaceDetails';
import ItineraryDetails from './ItineraryDetail'; // Asumo que harás lo mismo con este

export default function RecommendedPlaces() {
  const places = getAllPlaces();
  const itineraries = getAllItineraries();

  // 2. ESTADOS PARA CONTROLAR LOS MODALES
  // Si es null = cerrado. Si tiene un ID = abierto mostrando ese ID.
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const [selectedItineraryId, setSelectedItineraryId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
        
        <div className="max-w-md w-full bg-white shadow-xl rounded-xl overflow-hidden min-h-[80vh] flex flex-col relative">
            
            <div className="bg-teal-700 p-5 text-white">
                <h1 className="text-xl font-bold">Explorar Lima</h1>
                <p className="text-teal-100 text-sm">Selecciona una opción</p>
            </div>
            
            <div className="p-6 overflow-y-auto flex-grow">
                
                {/* --- SECCIÓN: LUGARES --- */}
                <h2 className="text-lg font-bold mb-4 text-gray-800 flex items-center gap-2">
                    <IoLocationSharp className="text-yellow-500"/> Lugares Recomendados
                </h2>
                
                <div className="space-y-3 mb-8">
                    {places.map(place => (
                        // 3. CAMBIO CLAVE: Usamos div + onClick
                        <div 
                            key={place.id} 
                            onClick={() => setSelectedPlaceId(place.id)} // <--- Al hacer clic, guardamos el ID
                            className="cursor-pointer block group"
                        >
                            <div className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-yellow-400 hover:shadow-md transition-all bg-white">
                                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mr-4 flex-shrink-0">
                                    <IoLocationSharp size={20} />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                                        {place.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 line-clamp-1">{place.location}</p>
                                </div>
                                <FaChevronRight className="text-gray-300 group-hover:text-yellow-500" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- SECCIÓN: ITINERARIOS --- */}
                <h2 className="text-lg font-bold mb-4 text-gray-800 flex items-center gap-2">
                    <FaRoute className="text-teal-600"/> Itinerarios
                </h2>
                
                <div className="space-y-3">
                     {itineraries.map(itinerary => (
                        <div 
                            key={itinerary.id} 
                            onClick={() => setSelectedItineraryId(itinerary.id)} // <--- Al hacer clic, guardamos el ID
                            className="cursor-pointer block group"
                        >
                            <div className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-teal-500 hover:shadow-md transition-all bg-white">
                                <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mr-4 flex-shrink-0">
                                    <FaRoute size={18} />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                                        {itinerary.name}
                                    </h3>
                                    <p className="text-xs text-gray-500">
                                        {itinerary.quickInfo?.duration} • {itinerary.quickInfo?.price}
                                    </p>
                                </div>
                                <FaChevronRight className="text-gray-300 group-hover:text-teal-500" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>

        {/* 4. AQUÍ INYECTAMOS LOS MODALES AL FINAL */}
        
        {/* Modal para Lugares */}
        {/* isOpen es true si hay un ID seleccionado */}
        <BottomSheet 
            isOpen={!!selectedPlaceId} 
            onClose={() => setSelectedPlaceId(null)}
        >
            {/* Solo renderizamos PlaceDetails si tenemos un ID */}
            {selectedPlaceId && (
                <PlaceDetails 
                    placeIdProp={selectedPlaceId} 
                    onCloseModal={() => setSelectedPlaceId(null)} 
                />
            )}
        </BottomSheet>

        {/* Modal para Itinerarios */}
        <BottomSheet 
            isOpen={!!selectedItineraryId} 
            onClose={() => setSelectedItineraryId(null)}
        >
            {selectedItineraryId && (
                <ItineraryDetails 
                    // NOTA: Asegúrate de hacer en ItineraryDetails lo mismo que hiciste en PlaceDetails
                    // (recibir itineraryIdProp y onCloseModal)
                    itineraryIdProp={selectedItineraryId} 
                    onCloseModal={() => setSelectedItineraryId(null)} 
                />
            )}
        </BottomSheet>

    </div>
  );
}