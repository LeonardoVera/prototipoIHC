import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Importamos los datos
import { getAllPlaces, getAllItineraries } from '../data/MockDataBase';

// Iconos para decorar un poco
import { IoLocationSharp } from "react-icons/io5";
import { FaRoute, FaChevronRight } from "react-icons/fa";
import TopBar from '../components/TopBar';
import MenuOverlay from '../components/MenuOverlay';

export default function RecommendedPlaces() {
  const [menuOpen, setMenuOpen] = useState(false);
  const places = getAllPlaces();
  const itineraries = getAllItineraries();

  return (
    // 1. Contenedor Principal (Fondo gris, centrado)
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
        
        {/* 2. "Celular" (Tarjeta blanca con sombra) */}
        <div className="max-w-md w-full bg-white shadow-xl rounded-xl flex flex-col overflow-hidden relative">
            
            <TopBar
                onMenuToggle={() => setMenuOpen(!menuOpen)}
                title="Itinerario Actual"
            />

            <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
            
            <div className="p-6 overflow-y-auto flex-grow">
                
                {/* --- SECCIÓN: LUGARES --- */}
                <h2 className="text-lg font-bold mb-4 text-gray-800 flex items-center gap-2">
                    <IoLocationSharp className="text-yellow-500"/> Lugares Recomendados
                </h2>
                
                <div className="space-y-3 mb-8">
                    {places.map(place => (
                        <Link key={place.id} to={`/lugar/${place.id}`} className="block group">
                            <div className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-yellow-400 hover:shadow-md transition-all bg-white">
                                {/* Icono/Avatar */}
                                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mr-4 flex-shrink-0">
                                    <IoLocationSharp size={20} />
                                </div>
                                {/* Texto */}
                                <div className="flex-grow">
                                    <h3 className="font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                                        {place.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 line-clamp-1">{place.location}</p>
                                </div>
                                {/* Flechita */}
                                <FaChevronRight className="text-gray-300 group-hover:text-yellow-500" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* --- SECCIÓN: ITINERARIOS --- */}
                <h2 className="text-lg font-bold mb-4 text-gray-800 flex items-center gap-2">
                    <FaRoute className="text-teal-600"/> Itinerarios
                </h2>
                
                <div className="space-y-3">
                     {itineraries.map(itinerary => (
                        <Link key={itinerary.id} to={`/itinerario/${itinerary.id}`} className="block group">
                            <div className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-teal-500 hover:shadow-md transition-all bg-white">
                                {/* Icono/Avatar */}
                                <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mr-4 flex-shrink-0">
                                    <FaRoute size={18} />
                                </div>
                                {/* Texto */}
                                <div className="flex-grow">
                                    <h3 className="font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                                        {itinerary.name}
                                    </h3>
                                    <p className="text-xs text-gray-500">
                                        {itinerary.quickInfo?.duration} • {itinerary.quickInfo?.price}
                                    </p>
                                </div>
                                {/* Flechita */}
                                <FaChevronRight className="text-gray-300 group-hover:text-teal-500" />
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    </div>
  );
}