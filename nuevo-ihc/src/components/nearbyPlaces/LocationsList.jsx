import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoChevronForward } from 'react-icons/io5';

export default function LocationsList({ locations, selectedId, onLocationClick, onViewPlace }) {
  return (
    <div className="space-y-3">
      {locations.map((loc) => (
        <div
          key={loc.id}
          onClick={() => onLocationClick(loc.id)}
          className={`
            w-full p-4 rounded-xl transition-all duration-300 cursor-pointer
            ${selectedId === loc.id
              ? 'bg-amber-50 border-2 border-amber-400 shadow-md'
              : 'bg-white border border-gray-200 hover:bg-gray-50 shadow-sm'
            }
          `}
        >
          <div className="flex items-center gap-3 justify-between">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" size={20} />
              <span className="font-semibold text-gray-800">{loc.name}</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onViewPlace) {
                  onViewPlace(loc.id);
                }
              }}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <IoChevronForward size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
