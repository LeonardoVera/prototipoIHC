export default function InfoBlock({ children, className = '' }) {
  return (
    // 'my-6' le da espacio arriba (del título) y abajo (del botón)
    <div
      className={`
        flex flex-col gap-3 
        my-6
        ${className}
      `}
    >
      {children}
    </div>
  );
}