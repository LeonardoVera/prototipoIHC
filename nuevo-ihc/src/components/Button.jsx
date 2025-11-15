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

    // 2. Renderizar SIEMPRE como <a>
    return (
      <a
        href={to}
        className={combinedClasses}
        // Si es externo, ábrelo en una nueva pestaña
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  // 3. Si no hay 'to', es un <button> normal (esto no cambia)
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