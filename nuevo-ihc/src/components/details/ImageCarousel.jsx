import ImageCard from './ImageCard'; // Importamos el componente hijo

export default function ImageCarousel({ images = [] }) {
  // Si no hay imágenes, no renderizamos nada
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div
      className="
        flex gap-4 
        overflow-x-auto 
        scroll-snap-type-x mandatory 
        scroll-smooth
        pb-4
      "
    >
      {images.map((image) => (
        <ImageCard
          key={image.id}
          imageUrl={image.url}
          description={image.description}
        />
      ))}
    </div>
  );
}