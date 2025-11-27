interface GalleryImageProps {
  src: string;
  alt: string;
}

const GalleryImage = ({ src, alt }: GalleryImageProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-hover transition-smooth aspect-square">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
        <p className="text-primary-foreground font-medium">{alt}</p>
      </div>
    </div>
  );
};

export default GalleryImage;
