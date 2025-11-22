export default function BottomSheet({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    // 1. Contenedor Z-Index alto (para estar encima de todo)
    <div className="fixed inset-0 z-50 flex justify-center items-end">
      
      {/* 2. Backdrop (Fondo oscuro) */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-none transition-opacity"
        onClick={onClose} // Clic afuera cierra el modal
      ></div>

      {/* 3. La Hoja (Sheet) */}
      {/* h-[90vh] significa: Ocupa el 90% de la altura de la pantalla */}
      {/* rounded-t-3xl: Bordes redondeados solo arriba */}
      <div className="bg-white w-full max-w-md h-[90vh] rounded-t-3xl overflow-hidden relative z-10 shadow-2xl flex flex-col animate-slideUp">
        {/* Aquí va el contenido (PlaceDetails, ItineraryDetails, etc.) */}
        {children}
      </div>
      
    </div>
  );
}