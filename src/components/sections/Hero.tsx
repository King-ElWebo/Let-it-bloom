import Image from "next/image";

const logoSrc = "/images/WhatsApp Image 2026-03-25 at 05.47.05 (2).jpeg";

const heroImages = {
  large: {
    src: "/images/mein angebot/WhatsApp Image 2026-04-26 at 13.23.23.jpeg",
    alt: "Zart rosa Blumenarrangement in einer Vase",
  },
  small1: {
    src: "/images/mein angebot/WhatsApp Image 2026-04-26 at 13.23.24.jpeg",
    alt: "Frischer Freesienstrauss in hellem Papier",
  },
  small2: {
    src: "/images/final/WhatsApp Image 2026-04-26 at 13.21.30.jpeg",
    alt: "Bepflanzte Schale mit kraeftigen pinken Blueten",
  },
};

export function Hero() {
  return (
    <section className="hero-section relative overflow-hidden pt-20 pb-10 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-48 lg:pb-32">
      {/* ── Background decorative elements ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {/* Left turquoise branding strip */}
        <div className="hero-left-brand-strip" />
        {/* Warm off-white curved separator between turquoise and background */}
        <div className="hero-left-separator" />
        {/* Subtle warm glow bottom-right */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[60vh] bg-brand-blush/20 rounded-full blur-3xl" />
      </div>

      {/* ── Main content container ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Centered text block ── */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 sm:mb-8 inline-flex flex-col items-center relative">
            <Image
              src={logoSrc}
              alt=""
              width={420}
              height={420}
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-auto w-36 -translate-x-1/2 -translate-y-[52%] rounded-full opacity-[0.18] mix-blend-multiply shadow-sm sm:w-56 md:w-64 lg:w-72"
              sizes="(min-width: 1024px) 288px, (min-width: 768px) 256px, (min-width: 640px) 224px, 144px"
            />
            <span className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-brand-dark tracking-normal mb-2 relative z-10">
              Let It Bloom
            </span>
            <span className="text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] text-brand-turquoise uppercase font-medium mt-2 sm:mt-4">
              Blumenatelier
            </span>
          </div>

          <h1 className="text-lg sm:text-2xl md:text-3xl font-serif italic text-brand-dark/90 mb-3 sm:mb-6 md:mb-8 max-w-xl mx-auto leading-[1.4] sm:leading-[1.45]">
            Ihr mobiler Blumen- &amp; Pflanzenhändler im Langenzersdorf
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-brand-dark/70 mb-5 sm:mb-10 md:mb-14 max-w-md mx-auto leading-[1.5] sm:leading-relaxed">
            Schnittblumen, Topfpflanzen, Dekorationsartikel und Gartenpflege.
            Vorbestellung aller Produkte jederzeit möglich.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4">
            <a
              href="tel:+43123456789"
              className="w-full max-w-[230px] sm:w-auto px-6 py-2.5 sm:px-8 sm:py-4 bg-brand-turquoise text-white text-sm sm:text-base font-medium rounded-full hover:bg-brand-turquoise/90 transition-all shadow-sm sm:hover:shadow-md sm:hover:-translate-y-1"
            >
              Anrufen
            </a>
            <a
              href="#kontakt"
              className="w-full max-w-[230px] sm:w-auto px-6 py-2.5 sm:px-8 sm:py-4 bg-brand-cream border-2 border-brand-turquoise/30 text-brand-dark text-sm sm:text-base font-medium rounded-full hover:border-brand-turquoise hover:bg-brand-turquoise/5 transition-all sm:hover:-translate-y-1"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>

      {/* ── Image composition: 1 large + 1 accent circle ── */}
      <div className="hero-image-composition pointer-events-none" aria-hidden="true">
        {/* Large primary circle */}
        <div className="hero-img hero-img--primary">
          <Image
            src={heroImages.large.src}
            alt={heroImages.large.alt}
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="(min-width: 1280px) 280px, (min-width: 1024px) 220px, (min-width: 640px) 200px, 150px"
          />
        </div>
        {/* Smaller accent circle */}
        <div className="hero-img hero-img--accent">
          <Image
            src={heroImages.small1.src}
            alt={heroImages.small1.alt}
            fill
            loading="lazy"
            className="object-cover"
            sizes="(min-width: 1280px) 120px, (min-width: 1024px) 100px, 72px"
          />
        </div>
      </div>
    </section>
  );
}
