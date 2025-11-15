import { FaLock, FaCircle } from 'react-icons/fa';

export default function SecurityInfo({ level = 'safe', className = '' }) {
  
  const colorMap = {
    safe: 'text-green-500',     // Seguridad Buena (Verde)
    warning: 'text-yellow-500', // Seguridad Media (Amarillo)
    danger: 'text-red-500',       // Seguridad Mala (Rojo)
  };

  const colorClass = colorMap[level] || colorMap.safe;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      
      <div className="text-gray-600">
        <FaLock className="w-5 h-5" />
      </div>

      <span className="text-base font-medium text-gray-800">
        Seguridad:
      </span>

      <FaCircle className={`w-5 h-5 ${colorClass}`} />
      
    </div>
  );
}