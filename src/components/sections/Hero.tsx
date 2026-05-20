import Image from "next/image";

const logoSrc = "/images/optimized/logo-mark.jpg";

const heroImages = {
  large: {
    src: "/images/hero/WhatsApp Image 2026-05-20 at 08.34.07.jpeg",
    alt: "Zart rosa Blumenarrangement in einer Vase",
  },
  small1: {
    src: "/images/hero/WhatsApp Image 2026-05-20 at 08.34.08.jpeg",
    alt: "Frischer Freesienstrauss in hellem Papier",
  },
  small2: {
    src: "/images/hero/WhatsApp Image 2026-05-20 at 08.34.07.jpeg",
    alt: "Bepflanzte Schale mit kraeftigen pinken Blueten",
  },
};

export function Hero() {
  return (
    <section className="hero-section relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 md:pt-16 md:pb-28 lg:pt-20 lg:pb-36">
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
        {/* ── Main content container ── */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="sr-only">Let It Bloom – Blumenatelier in Langenzersdorf</h1>
          <div className="mb-6 sm:mb-10 inline-flex flex-col items-center relative">
            <Image
              src={logoSrc}
              alt="Let It Bloom – Blumenatelier Logo"
              width={420}
              height={420}
              priority={true}
              fetchPriority="high"
              className="h-auto w-40 sm:w-56 md:w-64 lg:w-72 rounded-full shadow-lg drop-shadow-md"
              sizes="(min-width: 1024px) 288px, (min-width: 768px) 256px, (min-width: 640px) 224px, 160px"
            />
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-serif italic text-brand-dark mb-4 sm:mb-7 md:mb-10 max-w-xl mx-auto leading-[1.4] sm:leading-[1.45]">
            Ihr mobiler Blumen- &amp; Pflanzenhändler im Weinviertel/Langezersdorf
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-brand-dark/85 mb-8 sm:mb-12 md:mb-16 max-w-md mx-auto leading-relaxed">
            Schnittblumen, Topfpflanzen, Dekorationsartikel und Gartenpflege.
            Vorbestellung aller Produkte jederzeit möglich.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4">
            <a
              href="tel:+436642303427"
              className="w-full max-w-[230px] sm:w-auto px-6 py-2.5 sm:px-8 sm:py-4 bg-brand-turquoise text-white text-sm sm:text-base font-medium rounded-full hover:bg-brand-turquoise/90 transition-all shadow-sm sm:hover:shadow-md sm:hover:-translate-y-1"
              aria-label="Telefonisch kontaktieren: +43 664 2303427"
            >
              Anrufen
            </a>
            <a
              href="#kontakt"
              className="w-full max-w-[230px] sm:w-auto px-6 py-2.5 sm:px-8 sm:py-4 bg-brand-cream border-2 border-brand-turquoise/30 text-brand-dark text-sm sm:text-base font-medium rounded-full hover:border-brand-turquoise hover:bg-brand-turquoise/5 transition-all sm:hover:-translate-y-1"
              aria-label="Zum Kontaktformular springen"
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
            sizes="(min-width: 1280px) 280px, (min-width: 1024px) 220px, (min-width: 640px) 200px, (max-width: 359px) 140px, 150px"
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
