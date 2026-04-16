import { Check } from 'lucide-react';

export function Decorations() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-24 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-brand-dark mb-6">
              Pflanzschalen aller Art für jeden Anlass
            </h2>
            <p className="text-lg text-brand-dark/80 leading-relaxed mb-8">
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
            
            <a href="#kontakt" className="inline-block px-8 py-3.5 bg-brand-turquoise text-white text-base font-medium rounded-full hover:bg-brand-turquoise/90 transition-colors shadow-sm hover:-translate-y-0.5">
              Anfrage stellen
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6 h-[400px] md:h-[500px]">
            <div className="relative rounded-3xl overflow-hidden shadow-sm">
              <img src="/images/karly-jones--G0zi4mqDeI-unsplash.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Pflanzschale" />
            </div>
            <div className="grid grid-rows-2 gap-4 md:gap-6 min-h-0">
              <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                <img src="/images/martin-baron-Uu1ipfa0Mqg-unsplash.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Sukkulenten Schale" />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                <img src="/images/szobota-zsuzsi-UpEyjFLuInM-unsplash.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Detail Pflanzschale" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

