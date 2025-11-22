import React, { useState, useEffect } from 'react';

export default function BottomSheet({ isOpen, onClose, children }) {
  // Estado para saber si debemos renderizar el componente en el DOM
  const [shouldRender, setShouldRender] = useState(false);
  
  // Estado para controlar qué animación jugar (entrada o salida)
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Si se abre: renderizamos inmediatamente y reseteamos el cierre
      setShouldRender(true);
      setIsClosing(false);
    } else {
      // Si se cierra: NO dejamos de renderizar todavía.
      // Marcamos que estamos cerrando para que cambie la animación.
      setIsClosing(true);
    }
  }, [isOpen]);

  // Esta función se ejecuta cuando CUALQUIER animación css termina en el div
  const handleAnimationEnd = () => {
    if (isClosing) {
      // Si la animación que terminó fue la de cierre,
      // ahora sí quitamos el componente del DOM.
      setShouldRender(false);
      
      // (Opcional) Aseguramos que el padre sepa que se cerró, 
      // aunque en tu flujo actual el padre ya lo sabe.
    }
  };

  // Si no debe renderizarse, devolvemos null
  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-end">
      
      {/* Backdrop (Fondo oscuro) */}
      {/* También lo animamos: fadeIn al entrar, fadeOut al salir */}
      <div 
        className={`
          absolute inset-0 bg-black/60 backdrop-blur-none
          ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}
        `}
        onClick={onClose} 
      ></div>

      {/* La Hoja (Sheet) */}
      <div 
        className={`
          bg-white w-full max-w-md h-[90vh] rounded-t-3xl overflow-hidden relative z-10 shadow-2xl flex flex-col
          ${isClosing ? 'animate-slideDown' : 'animate-slideUp'}
        `}
        onAnimationEnd={handleAnimationEnd} // <--- ¡Aquí está la clave!
      >
        {children}
      </div>
      
    </div>
  );
}