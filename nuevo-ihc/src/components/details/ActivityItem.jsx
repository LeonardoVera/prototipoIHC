// src/components/itinerary/ActivityItem.jsx
import React from 'react';

export default function ActivityItem({ time, placeName, placeId, onPlaceClick }) {

    const handleInfoClick = (e) => {
        e.preventDefault(); 
        if (onPlaceClick) {
            onPlaceClick(placeId);
        }
    };

    return (
        // 1. Contenedor de la Fila: Usamos grid para definir 3 columnas
        <div className="grid grid-cols-[50px_1fr_60px] gap-2 py-3 border-b border-gray-100 last:border-0 items-start">
            
            {/* 2. Columna 1: HORA (Ancho fijo de 50px) */}
            <span className="text-sm font-medium text-gray-500 text-left">
                {time}
            </span>
            
            {/* 3. Columna 2: NOMBRE DEL LUGAR (Ocupa el espacio restante) */}
            <span className="text-base font-bold text-gray-900 leading-tight">
                {/* Agregamos whitespace-nowrap al guión para que no salte de línea si hay poco espacio */}
                - <span className="inline break-words">{placeName}</span> 
            </span>
            
            {/* 4. Columna 3: BOTÓN (Ancho fijo, nunca se rompe) */}
            <button 
                onClick={handleInfoClick} 
                className="
                    text-sm font-medium text-blue-600 hover:text-blue-800 underline underline-offset-2 
                    flex-shrink-0 
                    text-right 
                    whitespace-nowrap 
                "
            >
                Ver más
            </button>
        </div>
    );
}