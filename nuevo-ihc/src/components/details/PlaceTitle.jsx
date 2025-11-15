export default function PlaceTitle({ children, className = '' }) {
  return (
    <h1
      className={`
        text-3xl font-extrabold text-gray-900 
        text-center 
        my-2
        ${className}
      `}
    >
      {children}
    </h1>
  );
}