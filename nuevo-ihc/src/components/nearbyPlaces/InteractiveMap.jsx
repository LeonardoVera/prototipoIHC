import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function InteractiveMap({ locations, onMarkerClick, selectedMarkerId }) {
  return (
    <div className="relative w-full h-96 bg-gray-100 rounded-xl overflow-hidden shadow-lg">
      {/* Fondo de mapa estilo calles */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200">
        {/* Simulación de calles */}
        <svg className="w-full h-full opacity-30" viewBox="0 0 400 400">
          {/* Calles horizontales */}
          <line x1="0" y1="80" x2="400" y2="80" stroke="#9ca3af" strokeWidth="3" />
          <line x1="0" y1="160" x2="400" y2="160" stroke="#9ca3af" strokeWidth="4" />
          <line x1="0" y1="240" x2="400" y2="240" stroke="#9ca3af" strokeWidth="3" />
          <line x1="0" y1="320" x2="400" y2="320" stroke="#9ca3af" strokeWidth="2" />
          
          {/* Calles verticales */}
          <line x1="100" y1="0" x2="100" y2="400" stroke="#9ca3af" strokeWidth="2" />
          <line x1="180" y1="0" x2="180" y2="400" stroke="#9ca3af" strokeWidth="4" />
          <line x1="260" y1="0" x2="260" y2="400" stroke="#9ca3af" strokeWidth="3" />
          <line x1="340" y1="0" x2="340" y2="400" stroke="#9ca3af" strokeWidth="2" />
          
          {/* Áreas verdes (parques) */}
          <rect x="20" y="200" width="60" height="60" fill="#86efac" opacity="0.4" rx="4" />
          <rect x="280" y="100" width="80" height="70" fill="#86efac" opacity="0.4" rx="4" />
          <rect x="120" y="280" width="50" height="50" fill="#86efac" opacity="0.3" rx="4" />
        </svg>

        {/* Etiquetas de zonas */}
        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow">
          San Borja
        </div>
        <div className="absolute bottom-20 left-6 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow">
          Surquillo
        </div>
        <div className="absolute top-12 right-8 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow">
          San Borja
        </div>
      </div>

      {/* Marcadores de ubicación */}
      {locations.map((loc, index) => {
        // Posiciones predefinidas para que se vean bien distribuidas
        const positions = [
          { left: '25%', top: '30%' },   // Huaca Pucllana
          { left: '65%', top: '20%' },   // Museo del pisco
          { left: '15%', top: '65%' },   // Cevichería La Mar
          { left: '75%', top: '70%' },   // Centro Histórico
        ];
        
        const position = positions[index] || { left: '50%', top: '50%' };
        const isSelected = selectedMarkerId === loc.id;
        
        return (
          <button
            key={loc.id}
            onClick={() => onMarkerClick(loc.id)}
            className="absolute transform -translate-x-1/2 -translate-y-full transition-all duration-300 hover:scale-110 z-10"
            style={position}
            aria-label={`Marcador ${loc.name}`}
          >
            {/* Pin de ubicación estilo Google Maps */}
            <div className="relative">
              <svg
                className={`w-10 h-10 transition-all duration-300 ${
                  isSelected ? 'scale-125 drop-shadow-2xl' : 'drop-shadow-lg'
                }`}
                viewBox="0 0 24 36"
                fill="none"
              >
                {/* Sombra del pin */}
                <ellipse cx="12" cy="34" rx="6" ry="2" fill="black" opacity="0.2" />
                
                {/* Cuerpo del pin */}
                <path
                  d="M12 0C7.58 0 4 3.58 4 8c0 5.5 8 17 8 17s8-11.5 8-17c0-4.42-3.58-8-8-8z"
                  fill="#DC2626"
                  className={isSelected ? 'animate-bounce' : ''}
                />
                
                {/* Círculo interior del pin */}
                <circle cx="12" cy="8" r="3" fill="white" />
              </svg>
              
              {/* Etiqueta con nombre del lugar */}
              {isSelected && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap text-sm font-semibold text-gray-900 border border-gray-200">
                  {loc.name}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white border-l border-t border-gray-200 rotate-45"></div>
                </div>
              )}
            </div>
          </button>
        );
      })}

      {/* Marcador de ubicación actual (usuario) */}
      <div 
        className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
        style={{ left: '50%', top: '55%' }}
      >
        <div className="relative">
          {/* Pulso animado */}
          <div className="absolute inset-0 bg-yellow-400 rounded-full w-8 h-8 animate-ping opacity-60"></div>
          {/* Punto central */}
          <div className="relative bg-yellow-500 rounded-full w-8 h-8 border-4 border-white shadow-2xl flex items-center justify-center">
            <div className="bg-yellow-600 rounded-full w-3 h-3"></div>
          </div>
        </div>
      </div>

      {/* Botón de Ver lugar (aparece cuando hay selección) */}
      {selectedMarkerId && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-2xl transition-all duration-300 hover:scale-105">
            Ver lugar
          </button>
        </div>
      )}

      {/* Logo Google Maps simulado */}
      <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded text-xs font-bold text-gray-600 shadow opacity-50">
        Google Maps
      </div>
    </div>
  );
}
