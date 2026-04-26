export function Funeral() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 xl:gap-24 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4 md:gap-6 h-[280px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
            <div className="grid grid-rows-2 gap-4 md:gap-6 min-h-0">
              <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                <img src="\images\grabfloristik\WhatsApp Image 2026-04-09 at 06.44.02.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Ruhiges Grabgesteck" />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                <img src="\images\grabfloristik\WhatsApp Image 2026-04-09 at 06.44.03 (1).jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Detail Trauerfloristik" />
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-sm">
              <img src="\images\grabfloristik\WhatsApp Image 2026-04-09 at 06.44.03 (3).jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Klassischer Trauerkranz" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-brand-dark mb-5 sm:mb-6">
              Trauer & Grabfloristik
            </h2>
            <p className="text-base sm:text-lg text-brand-dark/80 leading-relaxed mb-5 sm:mb-6">
              „Der Abschied eines geliebten Menschen sollte Stil-und würdevoll sein und das Leben des Verstorbenen wiederspiegeln. Ob Kranz, Bukett oder Gesteck, klassisch oder ausgefallen. Gemeinsam gestalten wir einen passenden, floralen Abschied. Gerne gestalten wir auch Ihre gewünschte saisonale Grabfloristik wie zb. Schalen und Arrangements für Ostern , Advent, Weihnachten etc.“
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-brand-dark/70"><span className="w-1.5 h-1.5 rounded-full bg-brand-turquoise"></span> Kränze & Buketts</li>
              <li className="flex items-center gap-3 text-brand-dark/70"><span className="w-1.5 h-1.5 rounded-full bg-brand-turquoise"></span> Individuelle Gestecke</li>
              <li className="flex items-center gap-3 text-brand-dark/70"><span className="w-1.5 h-1.5 rounded-full bg-brand-turquoise"></span> Saisonale Grabfloristik</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

