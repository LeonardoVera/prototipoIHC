import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function LocationsList({ locations, selectedId, onLocationClick }) {
  return (
    <div className="space-y-3">
      {locations.map((loc) => (
        <button
          key={loc.id}
          onClick={() => onLocationClick(loc.id)}
          className={`
            w-full p-4 rounded-lg transition-all duration-300 shadow-md
            ${selectedId === loc.id
              ? `${loc.color} text-white shadow-lg transform scale-105`
              : 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-200'
            }
          `}
        >
          <div className="flex items-center gap-3 justify-between">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className={selectedId === loc.id ? 'text-white' : 'text-red-500'} size={20} />
              <span className="font-semibold text-left">{loc.name}</span>
            </div>
            <span className={`text-sm ${selectedId === loc.id ? 'opacity-100' : 'opacity-50'}`}>
              →
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
