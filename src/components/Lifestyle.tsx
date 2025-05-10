
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

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
    '/lovable-uploads/IMG_6809.JPG',
  ];

  return (
    <section id="lifestyle" className="section-padding bg-frsh-green text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-calvino text-white mb-4">
            Lifestyle
          </h2>
          <p className="text-lg sm:text-xl font-labil text-white/80 leading-relaxed max-w-2xl mx-auto">
            A visual taste of what we prepare with love and deliver fresh to your doorstep.
          </p>
        </div>

      {/* Mobile Carousel */}
      <div className="block md:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={src}
                  alt={`Meal ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={src}
                alt={`Meal ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
