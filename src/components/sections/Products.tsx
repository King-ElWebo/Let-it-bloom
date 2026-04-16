export function Products() {
  return (
    <section id="leistungen" className="py-20 md:py-28 relative overflow-hidden bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-brand-dark mb-6">
            Mein Angebot
          </h2>
          <p className="text-lg text-brand-dark/80 leading-relaxed">
            Mit Liebe zum Detail und einem Gespür für die Natur fertige ich individuelle florale Kunstwerke für jeden Anlass.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {/* Offer 1: Schnittblumen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-24 items-center">
            <div>
              <h3 className="text-3xl font-serif font-semibold text-brand-dark mb-6">Schnittblumen & Sträuße</h3>
              <p className="text-lg text-brand-dark/80 leading-relaxed mb-8">
                Frische, saisonale Blumen, liebevoll zu individuellen Sträußen gebunden. Perfekt als Geschenk, für das eigene Zuhause oder besondere Anlässe.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-brand-dark/70"><span className="w-1.5 h-1.5 rounded-full bg-brand-turquoise"></span> Individuelle Anfertigung</li>
                <li className="flex items-center gap-3 text-brand-dark/70"><span className="w-1.5 h-1.5 rounded-full bg-brand-turquoise"></span> Saisonale Blütenauswahl</li>
                <li className="flex items-center gap-3 text-brand-dark/70"><span className="w-1.5 h-1.5 rounded-full bg-brand-turquoise"></span> Vorbestellung möglich</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6 h-[360px] md:h-[460px] lg:h-[520px]">
              <div className="relative rounded-3xl overflow-hidden shadow-sm">
                <img src="/images/micheile-henderson-FAgn1RJY5jw-unsplash.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Frischer Blumenstrauß" />
              </div>
              <div className="grid grid-rows-2 gap-4 md:gap-6 min-h-0">
                <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                  <img src="/images/micheile-henderson-khu-SpA4Bl0-unsplash.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Florist bei der Arbeit" />
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                  <img src="/images/micheile-henderson-PTLBXS2zM0o-unsplash.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Detailaufnahme Blumen" />
                </div>
              </div>
            </div>
          </div>

          {/* Offer 2: Topfpflanzen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-24 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4 md:gap-6 h-[360px] md:h-[460px] lg:h-[520px]">
              <div className="grid grid-rows-2 gap-4 md:gap-6 min-h-0">
                <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                  <img src="/images/szobota-zsuzsi-UpEyjFLuInM-unsplash.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Topfpflanzen Arrangement" />
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                  <img src="/images/viacheslav-volodin-5Sq_x4fYYXA-unsplash.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Sukkulenten" />
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-sm">
                <img src="/images/WhatsApp Image 2026-04-09 at 06.44.02.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Zimmerpflanzen" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-serif font-semibold text-brand-dark mb-6">Topfpflanzen für Alle Bereiche</h3>
              <p className="text-lg text-brand-dark/80 leading-relaxed mb-8">
                „Topfpflanzen für Alle Bereiche, ob Klassisch oder Exotisch, Saisonal oder Dauerblüher."
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-brand-dark/70"><span className="w-1.5 h-1.5 rounded-full bg-brand-turquoise"></span> Für Innen & Außen</li>
                <li className="flex items-center gap-3 text-brand-dark/70"><span className="w-1.5 h-1.5 rounded-full bg-brand-turquoise"></span> Pflegeleichte Klassiker</li>
                <li className="flex items-center gap-3 text-brand-dark/70"><span className="w-1.5 h-1.5 rounded-full bg-brand-turquoise"></span> Besondere Exoten</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

