export default function ImageCard({ imageUrl, description }) {
  return (
    <div
      className="
        relative w-72 h-48 
        flex-shrink-0 
        rounded-xl overflow-hidden 
        shadow-md 
        scroll-snap-align-center
        bg-gray-200
      "
    >
      <img
        src={imageUrl}
        alt={description}
        className="w-full h-full object-cover"
        loading="lazy" // Carga la imagen de forma perezosa
      />
      
      <div 
        className="
          absolute bottom-0 left-0 right-0 
          p-3 
          bg-gradient-to-t from-black/70 to-transparent
        "
      >
        <p className="text-white font-semibold text-sm truncate">
          {description}
        </p>
      </div>
    </div>
  );
}