// src/components/itinerary/ActivityItem.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Usaremos Link para "Ver más"

export default function ActivityItem({ time, placeName, placeId }) {
  return (
    <div className="flex items-baseline justify-between py-2 border-b border-gray-100 last:border-0">
      {/* Lado izquierdo: Hora y Nombre */}
      <div className="flex items-baseline gap-3">
        <span className="text-sm font-medium text-gray-500 min-w-[45px]">
          {time}
        </span>
        <span className="text-base font-bold text-gray-900">
          - {placeName}
        </span>
      </div>
      
      {/* Lado derecho: Enlace "Ver más" */}
      {/* Esto llevará al detalle del lugar específico */}
      <Link 
        to={`/lugar/${placeId}`} 
        className="text-sm font-medium text-gray-600 hover:text-blue-600 underline underline-offset-2"
      >
        Ver más
      </Link>
    </div>
  );
}