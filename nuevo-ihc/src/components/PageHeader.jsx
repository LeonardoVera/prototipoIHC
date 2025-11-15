import React from 'react';
import IconButton from './details/IconButton';
import { FaShareAlt } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';

// --- Iconos de Ejemplo (puedes moverlos a su propio archivo) ---
const ShareIcon = () => (
  <FaShareAlt size={20} color="#1C274C" />
);

const CloseIcon = () => (
  <IoCloseOutline size={24} color="#1C274C" />
);

export default function PageHeader({ onShareClick, onCloseClick }) {
  return (
    <header className="flex justify-between items-center p-4">
      <IconButton onClick={onShareClick} ariaLabel="Compartir lugar">
        <ShareIcon />
      </IconButton>
      
      <IconButton onClick={onCloseClick} ariaLabel="Cerrar y volver">
        <CloseIcon />
      </IconButton>
    </header>
  );
}