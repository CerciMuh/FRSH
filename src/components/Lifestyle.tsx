const Lifestyle = () => {
  const images = [
    '/lovable-uploads/IMG_6809.JPG',
    '/lovable-uploads/IMG_6819.JPG',
    '/lovable-uploads/IMG_6817.JPG',
    '/lovable-uploads/IMG_6813.JPG',
    '/lovable-uploads/IMG_6814.JPG',
    '/lovable-uploads/IMG_6884.JPG',
    '/lovable-uploads/IMG_6811.JPG',
    '/lovable-uploads/IMG_6810.JPG',
  ];

  // Double images for seamless infinite scroll
  const doubledImages = [...images, ...images];

  return (
    <section id="lifestyle" className="section-padding bg-frsh-green text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-calvino text-white mb-4">Lifestyle</h2>
          <p className="text-lg sm:text-xl font-labil text-white/80 leading-relaxed max-w-2xl mx-auto">
            A visual taste of what we prepare with love and deliver fresh to your doorstep.
          </p>
        </div>

        {/* Infinite scroll belt */}
        <div className="relative overflow-hidden">
          {/* Fade left */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-frsh-green/50 to-transparent z-10" />

          {/* Fade right */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-frsh-green/50 to-transparent z-10" />

          {/* Scroll belt */}
          <div className="flex w-max animate-scroll-x gap-4">
            {doubledImages.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-60 h-80 bg-white p-2 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={src}
                  alt={`Meal ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Lifestyle;
