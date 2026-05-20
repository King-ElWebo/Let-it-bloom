import Image from 'next/image';

const mosaicImageSizes = "(max-width: 640px) 160px, (max-width: 1024px) 240px, 25vw";

export function Products() {
  return (
    <section id="leistungen" className="py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-brand-dark mb-5 sm:mb-6">
            Mein Angebot
          </h2>
          <p className="text-base sm:text-lg text-brand-dark/90 leading-relaxed">
          Alle floralen Kunstwerke werden von befugten Gewerbetreibenden mit viel Liebe zum Detail gefertigt.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
          {/* Offer 1: Schnittblumen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 xl:gap-24 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-brand-dark mb-5 sm:mb-6">Schnittblumen & Sträuße</h3>
              <p className="text-base sm:text-lg text-brand-dark/90 leading-relaxed mb-6 sm:mb-8">
                Frische, saisonale Blumen, liebevoll zu individuellen Sträußen gebunden. Perfekt als Geschenk, für das eigene Zuhause oder besondere Anlässe.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-brand-dark/85"><span className="w-1.5 h-1.5 rounded-full bg-brand-turquoise"></span> Individuelle Anfertigung</li>
                <li className="flex items-center gap-3 text-brand-dark/85"><span className="w-1.5 h-1.5 rounded-full bg-brand-turquoise"></span> Saisonale Blütenauswahl</li>
                <li className="flex items-center gap-3 text-brand-dark/85"><span className="w-1.5 h-1.5 rounded-full bg-brand-turquoise"></span> Vorbestellung möglich</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6 h-[280px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
              <div className="relative rounded-3xl overflow-hidden shadow-sm">
                <Image src="/images/mein angebot/WhatsApp Image 2026-05-20 at 08.35.40.jpeg" fill sizes={mosaicImageSizes} className="object-cover" alt="Frischer Blumenstrauß" loading="lazy" quality={72} />
              </div>
              <div className="grid grid-rows-2 gap-4 md:gap-6 min-h-0">
                <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                  <Image src="/images/mein angebot/WhatsApp Image 2026-04-26 at 13.23.23.jpeg" fill sizes={mosaicImageSizes} className="object-cover" alt="Florist bei der Arbeit" loading="lazy" quality={70} />
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                  <Image src="/images/mein angebot/WhatsApp Image 2026-05-20 at 08.35.40 (1).jpeg" fill sizes={mosaicImageSizes} className="object-cover" alt="Frischer Blumenstrauß" loading="lazy" quality={70} />
                </div>
              </div>
            </div>
          </div>

          {/* Offer 2: Topfpflanzen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 xl:gap-24 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4 md:gap-6 h-[280px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
              <div className="grid grid-rows-2 gap-4 md:gap-6 min-h-0">
                <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                  <Image src="/images/Topfpflanzen/WhatsApp Image 2026-05-20 at 08.37.26 (1).jpeg" fill sizes={mosaicImageSizes} className="object-cover" alt="Topfpflanzen Arrangement" loading="lazy" quality={70} />
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                  <Image src="/images/Topfpflanzen/WhatsApp Image 2026-05-20 at 08.37.26.jpeg" fill sizes={mosaicImageSizes} className="object-cover" alt="Sukkulenten" loading="lazy" quality={70} />
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-sm">
                <Image src="/images/Topfpflanzen/WhatsApp Image 2026-05-20 at 08.37.27.jpeg" fill sizes={mosaicImageSizes} className="object-cover" alt="Zimmerpflanzen" loading="lazy" quality={72} />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-brand-dark mb-5 sm:mb-6">Topfpflanzen für alle Bereiche</h3>
              <p className="text-base sm:text-lg text-brand-dark/90 leading-relaxed mb-6 sm:mb-8">
                „Ob klassisch oder exotisch, saisonal oder Dauerblüher.“
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-brand-dark/85"><span className="w-1.5 h-1.5 rounded-full bg-brand-turquoise"></span> Für Innen & Außen</li>
                <li className="flex items-center gap-3 text-brand-dark/85"><span className="w-1.5 h-1.5 rounded-full bg-brand-turquoise"></span> Pflegeleichte Klassiker</li>
                <li className="flex items-center gap-3 text-brand-dark/85"><span className="w-1.5 h-1.5 rounded-full bg-brand-turquoise"></span> Besondere Exoten</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
