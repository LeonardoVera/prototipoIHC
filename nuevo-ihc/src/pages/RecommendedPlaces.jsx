import React, { useState } from 'react';
// Quitamos Link porque ahora usaremos modales, no navegación
// import { Link } from 'react-router-dom'; 

import { getAllPlaces } from '../data/MockDataBase';
import { IoLocationSharp, IoTimeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

// 1. IMPORTAMOS LOS COMPONENTES QUE CREASTE
import BottomSheet from '../components/BottomSheet';
import PlaceDetails from './PlaceDetails';
import TopBar from '../components/TopBar';
import MenuOverlay from '../components/MenuOverlay';

export default function RecommendedPlaces() {
  const places = getAllPlaces();

  const [menuOpen, setMenuOpen] = useState(false);
  
  // 2. ESTADOS PARA CONTROLAR LOS MODALES
  // Si es null = cerrado. Si tiene un ID = abierto mostrando ese ID.
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
        
        <div className="max-w-md w-full bg-white shadow-xl rounded-xl overflow-hidden min-h-[80vh] flex flex-col relative">
            
            <TopBar
            onMenuToggle={() => setMenuOpen(!menuOpen)}
            title="Lugares Recomendados"
            />

            {/* Menu Overlay */}
            <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
            
            <div className="p-6 overflow-y-auto flex-grow bg-gray-50">
                
                {/* --- SECCIÓN: LUGARES --- */}
                <h2 className="text-xl font-bold mb-6 text-gray-800">
                    Lugares para ti
                </h2>
                
                <div className="space-y-6 mb-8">
                    {places.map(place => (
                        // TARJETA ESTILO GRANDE
                        <div 
                            key={place.id} 
                            onClick={() => setSelectedPlaceId(place.id)}
                            className="cursor-pointer block group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all"
                        >
                            {/* IMAGEN GRANDE */}
                            <div className="w-full h-48 relative">
                                <img 
                                    src={place.images[0]?.url} 
                                    alt={place.name} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            {/* CONTENIDO DEBAJO */}
                            <div className="p-4">
                                <h3 className="font-bold text-lg text-gray-900 mb-2">
                                    {place.name}
                                </h3>
                                
                                <div className="flex items-center justify-between text-sm text-gray-600">
                                    {/* Info de tiempo/distancia (Dummy data por ahora) */}
                                    <div className="flex items-center gap-1">
                                        <IoTimeOutline size={16} />
                                        <span>15 min</span>
                                        <span className="mx-1">•</span>
                                        <span>2.5 km</span>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center gap-1 font-semibold text-gray-800">
                                        <FaStar className="text-black" size={14} />
                                        <span>{place.ratingsSummary?.averageRating || 4.5}</span>
                                    </div>
                                </div>
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

    </div>
  );
}
