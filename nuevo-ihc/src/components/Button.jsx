// src/components/Button.jsx (Versión Temporal sin React-Router)

import React from 'react';
// ¡Ya no importamos { Link } de 'react-router-dom'!

/**
 * Un botón que funciona como <button> o como <a>.
 * VERSIÓN TEMPORAL: Usa <a> para todos los 'to' hasta que se configure el router.
 *
 * @param {object} props
 * @param {'primary' | 'secondary'} [props.variant='primary'] - Variante de color.
 * @param {function} [props.onClick] - Función para un <button>.
 * @param {string} [props.to] - El enlace (URL o ruta interna).
 * @param {React.ReactNode} props.children - El contenido del botón.
 * @param {string} [props.className] - Clases adicionales.
 * @param {boolean} [props.disabled] - Si está deshabilitado.
 * @param {string} [props.type='button'] - Tipo del botón (ej. 'submit').
 */
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
  
  // --- Estilos (Estos no cambian) ---
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

  // --- Lógica de Renderizado (Modificada) ---

  // Si se proporciona 'to'
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