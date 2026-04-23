export function CtaSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-turquoise/10 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blush/20 shape-blob blur-3xl -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-4 sm:left-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-brand-turquoise/30 -z-10"></div>
        <div className="absolute bottom-10 right-4 sm:right-10 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-brand-cream/50 -z-10"></div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-brand-dark mb-6 sm:mb-8 leading-tight">
          Lassen Sie uns gemeinsam etwas Schönes gestalten
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-brand-dark/70 mb-8 sm:mb-10 max-w-2xl mx-auto">
          Ich freue mich darauf, Ihre floralen Wünsche in die Tat umzusetzen.
        </p>
        <a 
          href="#kontakt" 
          className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-brand-turquoise text-white text-base sm:text-lg font-medium rounded-full hover:bg-brand-turquoise/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
        >
          Jetzt kontaktieren
        </a>
      </div>
    </section>
  );
}

