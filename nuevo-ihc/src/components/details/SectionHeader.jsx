export default function SectionHeader({ children, className = '' }) {
  return (
    <h2
      className={`
        text-xl font-bold text-gray-900 
        mb-2
        ${className}
      `}
    >
      {children}
    </h2>
  );
}