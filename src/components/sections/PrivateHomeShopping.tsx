import { ShoppingBag } from 'lucide-react';

export function PrivateHomeShopping() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-16 border border-brand-turquoise/10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 xl:gap-24 items-center">
            <div>
              <div className="w-12 h-12 bg-brand-turquoise/20 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="w-6 h-6 text-brand-turquoise" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-brand-dark mb-6 sm:mb-8">
                Private Home Shopping
              </h2>
              <p className="text-base sm:text-lg text-brand-dark/80 leading-relaxed mb-6 sm:mb-8">
                „Du bist nicht Mobil, hast einen stressigen Alltag mit Job oder Kind oder möchtest Dir den Pflanzeneinkauf einfach und bequem gestalten. Wir nehmen uns Zeit, besuchen Dich mit unserem gesamten Sortiment und geben Dir somit die Möglichkeit die passenden Pflanzen für Garten & Terrasse bei Dir vor Ort in aller Ruhe auszuwählen“
              </p>
              <a href="#kontakt" className="inline-block px-7 py-3.5 sm:px-8 sm:py-4 bg-brand-turquoise text-white text-sm sm:text-base font-medium rounded-full hover:bg-brand-turquoise/90 transition-colors shadow-sm hover:-translate-y-0.5">
                Termin vereinbaren
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6 h-[280px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
              <div className="grid grid-rows-2 gap-4 md:gap-6 min-h-0">
                <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                  <img src="\images\private\WhatsApp Image 2026-04-26 at 13.38.23.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Floristin berät" />
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                  <img src="/images/WhatsApp Image 2026-04-09 at 06.44.02.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Zimmerpflanzen" />
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-sm">
                <img src="/images/WhatsApp Image 2026-04-09 at 06.44.03 (1).jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Pflanzen im Zuhause" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


