import React from 'react';
import { FaBars } from 'react-icons/fa';

export default function TopBar({ onMenuToggle, title }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg">
      <button
        onClick={onMenuToggle}
        className="p-2 hover:bg-teal-500 rounded-full transition-colors"
        aria-label="Abrir menú"
      >
        <FaBars size={24} />
      </button>
      <h1 className="text-lg font-bold">{title}</h1>
      <div className="w-10" /> {/* Espaciador para centrar el título */}
    </div>
  );
}
