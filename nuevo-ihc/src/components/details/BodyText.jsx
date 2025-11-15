export default function BodyText({ children, className = '' }) {
  return (
    <p
      className={`
        text-base text-gray-700 
        leading-relaxed
        ${className}
      `}
    >
      {children}
    </p>
  );
}