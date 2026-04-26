import { Check } from 'lucide-react';

export function Decorations() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 xl:gap-24 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-brand-dark mb-5 sm:mb-6">
              Pflanzschalen aller Art für jeden Anlass
            </h2>
            <p className="text-base sm:text-lg text-brand-dark/80 leading-relaxed mb-6 sm:mb-8">
              „Geht Nicht-Gibt´s Nicht“ Bei der Gestaltung deiner gewünschten Pflanzenschale sind Deiner Fantasie keine Grenzen gesetzt .Jede angefertigte Pflanzenschale ist ein Unikat.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Für den Innenbereich', 'Wetterfeste Arrangements für Außen', 'Individuelle Gestaltung nach Ihren Wünschen', 'Saisonale Bepflanzung'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-turquoise/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-brand-turquoise" strokeWidth={3} />
                  </div>
                  <span className="text-brand-dark/80">{item}</span>
                </li>
              ))}
            </ul>
            
            <a href="#kontakt" className="inline-block px-7 py-3.5 sm:px-8 bg-brand-turquoise text-white text-sm sm:text-base font-medium rounded-full hover:bg-brand-turquoise/90 transition-colors shadow-sm hover:-translate-y-0.5">
              Anfrage stellen
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6 h-[300px] sm:h-[360px] md:h-[460px] lg:h-[500px]">
            <div className="relative rounded-3xl overflow-hidden shadow-sm">
              <img src="/images/pflanzschalen/WhatsApp Image 2026-04-26 at 13.29.53 (2).jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Pflanzschale" />
            </div>
            <div className="grid grid-rows-2 gap-4 md:gap-6 min-h-0">
              <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                <img src="\images\pflanzschalen\WhatsApp Image 2026-04-26 at 13.29.53 (1).jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Sukkulenten Schale" />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                <img src="/images/pflanzschalen/WhatsApp Image 2026-04-26 at 13.29.52 (2).jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Detail Pflanzschale" />
              </div>
            </div>
            {/* <div className="grid grid-rows-2 gap-4 md:gap-6 min-h-0">
              <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                <img src="/images/pflanzschalen/WhatsApp Image 2026-04-26 at 13.29.52.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Sukkulenten Schale" />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                <img src="/images/pflanzschalen/WhatsApp Image 2026-04-26 at 13.29.53 (2).jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Detail Pflanzschale" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

