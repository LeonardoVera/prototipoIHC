import React, { useState } from 'react';

export default function InteractiveMap({ locations, onMarkerClick, selectedMarkerId }) {
  return (
    <div className="space-y-4">
      {/* Botón Iniciar Ruta */}
      <button className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors shadow-md">
        Iniciar Ruta
      </button>

      {/* Mapa Simulado */}
      <div className="relative w-full h-72 bg-gradient-to-br from-blue-200 to-green-200 rounded-xl overflow-hidden shadow-md border-2 border-gray-200">
        {/* Imagen de fondo estilo mapa */}
        <svg className="w-full h-full" viewBox="0 0 400 280">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e0e0e0" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="400" height="280" fill="url(#grid)" opacity="0.3" />
          
          {/* Líneas de ruta conectando los puntos */}
          <path
            d="M 80 140 Q 150 120 180 130 T 280 150"
            stroke="#fbbf24"
            strokeWidth="3"
            fill="none"
            strokeDasharray="8,4"
            opacity="0.8"
          />
        </svg>

        {/* Marcadores */}
        {locations.map((loc) => (
          <button
            key={loc.id}
            onClick={() => onMarkerClick(loc.id)}
            className={`
              absolute transform -translate-x-1/2 -translate-y-1/2 
              transition-all duration-300 hover:scale-125
              ${loc.color} text-white rounded-full w-12 h-12 flex items-center justify-center
              font-bold text-lg shadow-xl
              ${selectedMarkerId === loc.id ? 'ring-4 ring-white scale-125 z-10' : 'z-0'}
            `}
            style={{
              left: `${20 + (loc.lng + 77.2) * 15}%`,
              top: `${50 - (loc.lat - 12.04) * 60}%`,
            }}
            aria-label={`Marcador ${loc.name}`}
          >
            {loc.id}
          </button>
        ))}

        {/* Marcador de ubicación actual */}
        <div 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ left: '50%', top: '50%' }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full w-6 h-6 animate-ping opacity-75"></div>
            <div className="relative bg-blue-600 rounded-full w-6 h-6 border-4 border-white shadow-lg"></div>
          </div>
        </div>
      </div>

      {/* Info del Marcador Seleccionado */}
      {selectedMarkerId && (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Ubicación:</strong> {locations.find(l => l.id === selectedMarkerId)?.name}
          </p>
          <p className="text-xs text-gray-500 mt-1">Toca de nuevo para deseleccionar</p>
        </div>
      )}
    </div>
  );
}
