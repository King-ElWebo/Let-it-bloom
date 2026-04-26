export function Hero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Playful background shapes inspired by the flyer */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[70vh] bg-brand-turquoise/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[80vh] bg-brand-blush/30 shape-blob blur-2xl"></div>
        {/* Solid curved shape like on the flyer */}
        <div className="absolute top-0 left-0 w-[30vw] h-full bg-brand-turquoise/10 rounded-r-[100%] -translate-x-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-5 sm:mb-8 inline-flex flex-col items-center relative">
          {/* Decorative circle behind title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 bg-brand-cream rounded-full -z-10 shadow-sm"></div>
          <span className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-brand-dark tracking-tight mb-2 relative z-10">
            Let It Bloom
          </span>
          <span className="text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] text-brand-turquoise uppercase font-medium mt-3 sm:mt-4">
            Blumenatelier
          </span>
        </div>
        
        <h1 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-brand-dark/90 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-[1.45]">
          Ihr mobiler Blumen- & Pflanzenhändler im Weinviertel
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg text-brand-dark/70 mb-8 sm:mb-10 md:mb-12 max-w-lg mx-auto leading-[1.5] sm:leading-relaxed">
          Schnittblumen, Topfpflanzen, Dekorationsartikel und Gartenpflege. 
          Vorbestellung aller Produkte jederzeit möglich.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4">
          <a
            href="tel:+43123456789"
            className="w-full max-w-[260px] sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-brand-turquoise text-white text-sm sm:text-base font-medium rounded-full hover:bg-brand-turquoise/90 transition-all shadow-sm sm:hover:shadow-md sm:hover:-translate-y-1"
          >
            Anrufen
          </a>
          <a
            href="#kontakt"
            className="w-full max-w-[260px] sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-brand-cream border-2 border-brand-turquoise/30 text-brand-dark text-sm sm:text-base font-medium rounded-full hover:border-brand-turquoise hover:bg-brand-turquoise/5 transition-all sm:hover:-translate-y-1"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
}
