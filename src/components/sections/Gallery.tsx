'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const galleryImages = [
  "/images/caroline-badran-_5H8TIast-I-unsplash.jpg",
  "/images/duong-ngan-RJudoZ6qJ3o-unsplash.jpg",
  "/images/haydn-golden-LfT2t-E08kw-unsplash.jpg",
  "/images/irena-carpaccio-Aqkqd6U4W4k-unsplash.jpg",
  "/images/jack-swords-BQtphmFrst4-unsplash.jpg",
  "/images/karly-jones--G0zi4mqDeI-unsplash.jpg",
  "/images/martin-baron-Uu1ipfa0Mqg-unsplash.jpg",
];

export function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const cardStep = Math.round(current.clientWidth * 0.85);
      const scrollAmount = direction === 'left' ? -cardStep : cardStep;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="galerie" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 md:gap-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-brand-dark mb-5 sm:mb-6">
            Inspiration & florale Momente
          </h2>
          <p className="text-base sm:text-lg text-brand-dark/70">Lassen Sie sich von meinen bisherigen Arbeiten inspirieren.</p>
        </div>
        <div className="flex gap-3 sm:gap-4">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark hover:bg-brand-turquoise hover:text-white hover:border-brand-turquoise transition-colors"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark hover:bg-brand-turquoise hover:text-white hover:border-brand-turquoise transition-colors"
            aria-label="Nächstes Bild"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="relative pl-4 sm:pl-6 lg:pl-8 max-w-[100vw]">
        <div 
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pr-4 sm:pr-6 lg:pr-8 pb-6 sm:pb-8"
        >
          {galleryImages.map((src, index) => (
            <div 
              key={index} 
              className="flex-none w-[78vw] max-w-[280px] sm:w-[300px] md:w-[350px] aspect-4/5 rounded-3xl overflow-hidden snap-start shadow-sm group"
            >
              <img 
                src={src} 
                alt={`Galerie Bild ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

