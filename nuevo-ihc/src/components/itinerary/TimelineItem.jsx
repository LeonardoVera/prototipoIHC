import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function TimelineItem({ time, location, type, onInfoClick }) {
  const isStart = type === 'start';
  const isEnd = type === 'end';
  
  return (
    <div className="flex gap-4 pb-8 relative">
      {/* Línea vertical */}
      {!isEnd && (
        <div className="absolute left-5 top-12 w-1 h-16 bg-gradient-to-b from-yellow-400 to-yellow-200" />
      )}
      
      {/* Punto del Timeline */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg ${
          isStart ? 'bg-green-500' : isEnd ? 'bg-red-500' : 'bg-yellow-400'
        }`}>
          {isStart ? '🚩' : isEnd ? '🏁' : '📍'}
        </div>
      </div>

      {/* Contenido */}
      <div className="flex-grow">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{time}</p>
        <p className="text-lg font-bold text-gray-900 mt-1 mb-2">{location}</p>
        
        {/* Botón de información */}
        {onInfoClick && (
          <button
            onClick={onInfoClick}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm transition-colors"
          >
            <FaMapMarkerAlt className="text-red-500" />
            Info
          </button>
        )}
      </div>
    </div>
  );
}
