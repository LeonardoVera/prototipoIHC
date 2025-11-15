export default function IconButton({ children, onClick, ariaLabel, className = '' }) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      type="button"
      className={`
        p-2 rounded-full 
        text-gray-600 
        hover:bg-gray-100 hover:text-gray-900
        focus:outline-none focus:ring-2 focus:ring-purple-500 
        transition-colors
        ${className}
      `}
    >
      {children}
    </button>
  );
}