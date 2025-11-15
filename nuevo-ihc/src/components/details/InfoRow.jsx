export default function InfoRow({ children, icon, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      
      {/* Contenedor del ícono para darle un tamaño fijo */}
      <div className="w-5 h-5 text-gray-600 flex-shrink-0">
        {icon}
      </div>
      
      {/* Texto */}
      <span className="text-base text-gray-800 font-medium">
        {children}
      </span>
    </div>
  );
}