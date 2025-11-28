import { Link } from 'react-router-dom'; // 1. IMPORTAR Link

export default function Button({
  children,
  variant = 'primary',
  onClick,
  to,
  className = '',
  disabled = false,
  type = 'button',
  ...rest
}) {
  
  const baseClasses =
    'py-3 px-8 rounded-full font-bold text-center transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2';

  // ... (variantClasses y disabledClasses quedan igual) ...

  const variantClasses = {
    primary: 'bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-400',
    secondary: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-600',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg';

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant] || variantClasses.primary}
    ${disabledClasses}
    ${className}
  `.trim();

  if (to) {
    // 1. Detectar si es un enlace EXTERNO
    const isExternal = to.startsWith('http');

    if (isExternal) {
      // 2a. Renderizar <a> para enlaces externos (esto es correcto)
      return (
        <a
          href={to}
          className={combinedClasses}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    } else {
      // 2b. Renderizar Link para enlaces INTERNOS (¡CORRECCIÓN CLAVE!)
      return (
        <Link
          to={to}
          className={combinedClasses}
          {...rest}
        >
          {children}
        </Link>
      );
    }
  }

  // 3. Si no hay 'to', renderiza un <button> normal
  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}