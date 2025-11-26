import React from 'react';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function MenuLink({ icon, label, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
    >
      <span className="text-2xl">{icon}</span>
      <span className="font-medium text-gray-800">{label}</span>
    </button>
  );
}

export default function MenuOverlay({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="absolute inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Menu Sidebar */}
      <div
        className={`
          absolute left-0 top-0 h-full w-64 bg-white shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Header del Menu */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">Menú</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Cerrar menú"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Items del Menu */}
        <nav className="p-4 space-y-4">
          <MenuLink 
            icon="🏠" 
            label="Pantalla principal" 
            onClick={() => handleNavigation('/home')}
          />
          <MenuLink 
            icon="📋" 
            label="Ver itinerarios" 
            onClick={() => handleNavigation('/itinerarios')}
          />
          <MenuLink 
            icon="📍" 
            label="Ver itinerario actual" 
            onClick={() => handleNavigation('/itinerario-actual')}
          />
          <MenuLink 
            icon="🗺️" 
            label="Lugares cercanos" 
            onClick={() => handleNavigation('/lugares-cercanos')}
          />
          <MenuLink 
            icon="⭐" 
            label="Lugares favoritos" 
            onClick={() => handleNavigation('/favoritos')}
          />
          <MenuLink 
            icon="👤" 
            label="Ver perfil" 
            onClick={() => handleNavigation('/perfil')}
          />
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-full p-4 border-t">
          <button 
             onClick={() => {
               navigate('/');
               onClose();
             }}
             className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </>
  );
}
