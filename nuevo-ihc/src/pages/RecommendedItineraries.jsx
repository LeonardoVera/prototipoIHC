import React, { useState, useRef } from 'react';
import { getAllItineraries } from '../data/MockDataBase';

// Componentes reutilizados
import BottomSheet from '../components/BottomSheet';
import ItineraryDetails from './ItineraryDetail';
import TopBar from '../components/TopBar';
import MenuOverlay from '../components/MenuOverlay';

export default function RecommendedItineraries() {
  const itineraries = getAllItineraries();
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedItineraryId, setSelectedItineraryId] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselRef = useRef(null);

  // Filtrar itinerarios por categoría
  const popularItineraries = itineraries.filter(it => it.category === 'popular');
  const forYouItineraries = itineraries.filter(it => it.category === 'forYou');
  const quickItineraries = itineraries.filter(it => it.category === 'quick');

  // Manejar scroll del carrusel
  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const itemWidth = carouselRef.current.offsetWidth * 0.85;
      const newSlide = Math.round(scrollLeft / itemWidth);
      setCurrentSlide(newSlide);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-xl overflow-hidden h-[90vh] flex flex-col relative">
        
        <TopBar
          onMenuToggle={() => setMenuOpen(!menuOpen)}
          title="Itinerarios recomendados"
        />

        {/* Menu Overlay */}
        <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        <div className="flex-grow overflow-y-auto bg-white">
          
          {/* === SECCIÓN: Más visitados de la semana === */}
          <section className="pt-4 pb-2">
            <h2 className="text-lg font-bold text-gray-800 px-4 mb-3 flex items-center gap-2">
              Más visitados de la semana
              <span className="text-xl">🔥</span>
            </h2>
            
            {/* Carrusel Horizontal */}
            <div 
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory gap-3 px-4 pb-3 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {popularItineraries.map((itinerary) => (
                <div
                  key={itinerary.id}
                  onClick={() => setSelectedItineraryId(itinerary.id)}
                  className="flex-shrink-0 w-[85%] snap-center cursor-pointer group"
                >
                  <div className="relative h-44 rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={itinerary.images[0]?.url}
                      alt={itinerary.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Overlay con nombre */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-base drop-shadow-lg">
                        {itinerary.name}
                      </h3>
                      <p className="text-white/80 text-xs mt-0.5">
                        {itinerary.quickInfo.duration} • {itinerary.quickInfo.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Indicadores del carrusel */}
            <div className="flex justify-center gap-1.5 mt-1">
              {popularItineraries.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-teal-600 w-4' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </section>

          {/* === SECCIÓN: Para ti === */}
          <section className="px-4 py-4">
            <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              Para ti
              <span className="text-xl">❤️</span>
            </h2>
            
            <div className="grid grid-cols-2 gap-3">
              {forYouItineraries.map((itinerary) => (
                <div
                  key={itinerary.id}
                  onClick={() => setSelectedItineraryId(itinerary.id)}
                  className="cursor-pointer group"
                >
                  <div className="relative h-28 rounded-xl overflow-hidden shadow-sm">
                    <img
                      src={itinerary.images[0]?.url}
                      alt={itinerary.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <h3 className="text-white font-semibold text-sm drop-shadow-md line-clamp-1">
                        {itinerary.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* === SECCIÓN: Itinerarios ligeros === */}
          <section className="px-4 py-4 pb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              Itinerarios ligeros
              <span className="text-xl">🕐</span>
            </h2>
            
            <div className="grid grid-cols-2 gap-3">
              {quickItineraries.map((itinerary) => (
                <div
                  key={itinerary.id}
                  onClick={() => setSelectedItineraryId(itinerary.id)}
                  className="cursor-pointer group"
                >
                  <div className="relative h-28 rounded-xl overflow-hidden shadow-sm">
                    <img
                      src={itinerary.images[0]?.url}
                      alt={itinerary.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <h3 className="text-white font-semibold text-sm drop-shadow-md line-clamp-1">
                        {itinerary.name}
                      </h3>
                      <p className="text-white/75 text-xs mt-0.5">
                        {itinerary.quickInfo.duration}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Modal BottomSheet para detalle del itinerario */}
      <BottomSheet 
        isOpen={!!selectedItineraryId} 
        onClose={() => setSelectedItineraryId(null)}
      >
        {selectedItineraryId && (
          <ItineraryDetails 
            itineraryIdProp={selectedItineraryId} 
            onCloseModal={() => setSelectedItineraryId(null)} 
          />
        )}
      </BottomSheet>

    </div>
  );
}

