import React from 'react';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import iconHome from '../assets/icono-PantallaPrincipal.png';
import iconItinerarios from '../assets/icono-VerItinerarios.png';
import iconItinerarioActual from '../assets/icono-VerItinerarioActual.png';
import iconLugaresCercanos from '../assets/Icono-LugaresCercanos.png';
import iconPerfil from '../assets/icono-VerPerfil.png';
import iconLogout from '../assets/icono-CerrarSesion.png';

function MenuLink({ icon, label, onClick, isImage }) {
  return (
    <button 
      onClick={onClick}
      className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
    >
      {isImage ? (
        <img src={icon} alt={label} className="w-6 h-6" />
      ) : (
        <span className="text-2xl">{icon}</span>
      )}
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
            icon={iconHome}
            isImage={true}
            label="Pantalla principal" 
            onClick={() => handleNavigation('/home')}
          />
          <MenuLink 
            icon={iconItinerarios}
            isImage={true}
            label="Ver itinerarios" 
            onClick={() => handleNavigation('/itinerarios')}
          />
          <MenuLink 
            icon={iconItinerarioActual}
            isImage={true}
            label="Ver itinerario actual" 
            onClick={() => handleNavigation('/itinerario-actual')}
          />
          <MenuLink 
            icon={iconLugaresCercanos}
            isImage={true}
            label="Lugares cercanos" 
            onClick={() => handleNavigation('/lugares-cercanos')}
          />
          <MenuLink 
            icon={iconPerfil}
            isImage={true}
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
             className="w-full flex items-center gap-3 bg-red-500 text-white py-2 px-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            <img src={iconLogout} alt="Cerrar sesión" className="w-5 h-5" />
            Cerrar sesión
          </button>
        </div>
      </div>
    </>
  );
}
