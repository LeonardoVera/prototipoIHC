export default function ListItem({ children, className = '' }) {
  return (
    <li
      className={`
        text-gray-700 leading-relaxed
        ${className}
      `}
    >
      {children}
    </li>
  );
}