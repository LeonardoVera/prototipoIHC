export default function BulletedList({ children, className = '' }) {
  return (
    <ul
      className={`
        list-disc list-inside 
        space-y-2
        ${className}
      `}
    >
      {children}
    </ul>
  );
}