export default function InfoBlock({ children, className = '' }) {
  return (
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