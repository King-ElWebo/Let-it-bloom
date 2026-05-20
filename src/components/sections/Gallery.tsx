import Image from 'next/image';

const galleryImages = [
  "/images/galerie/WhatsApp Image 2026-05-20 at 08.47.28 (1).jpeg",
  "/images/galerie/WhatsApp Image 2026-05-20 at 08.47.28.jpeg",
  "/images/galerie/WhatsApp Image 2026-05-20 at 08.47.29 (1).jpeg",
  "/images/galerie/WhatsApp Image 2026-05-20 at 08.47.29.jpeg",
  "/images/galerie/WhatsApp Image 2026-05-20 at 08.47.30 (1).jpeg",
  "/images/galerie/WhatsApp Image 2026-05-20 at 08.47.30 (2).jpeg",
];

export function Gallery() {
  const loopImages = [...galleryImages, ...galleryImages];

  return (
    <section id="galerie" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-brand-dark mb-5 sm:mb-6">
            Inspiration & florale Momente
          </h2>
          <p className="text-base sm:text-lg text-brand-dark/70">By Blumenatelier "Let It Bloom"</p>
        </div>
      </div>

      <div className="relative max-w-[100vw] group/gallery">
        <div className="flex w-max gap-4 sm:gap-6 pb-6 sm:pb-8 animate-gallery-scroll group-hover/gallery:[animation-play-state:paused]">
          {loopImages.map((src, index) => (
            <div 
              key={index} 
              className="relative flex-none w-[78vw] max-w-[280px] sm:w-[300px] md:w-[350px] aspect-4/5 rounded-3xl overflow-hidden shadow-sm group"
            >
              <Image 
                src={src} 
                alt={`Galerie Bild ${(index % galleryImages.length) + 1}`} 
                fill
                sizes="(max-width: 640px) 78vw, (max-width: 768px) 300px, 350px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
