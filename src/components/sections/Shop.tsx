import { MapPin, Clock, Phone } from 'lucide-react';

export function Shop() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 xl:gap-24 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4 md:gap-6 h-[280px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
            <div className="grid grid-rows-2 gap-4 md:gap-6 min-h-0">
              <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                <img src="\images\ab hof\WhatsApp Image 2026-04-26 at 13.34.02 (1).jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Atelier Innenansicht" />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                <img src="\images\ab hof\WhatsApp Image 2026-04-26 at 13.34.02 (2).jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Frische Blumen" />
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-sm">
              <img src="\images\ab hof\WhatsApp Image 2026-04-26 at 13.34.02.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Floristische Details" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-brand-dark mb-6 sm:mb-8">
              Ab Hof Verkauf
            </h2>
            <p className="text-base sm:text-lg text-brand-dark/80 leading-relaxed mb-6 sm:mb-8">
              Ein Besuch in unserem liebevoll gestalteten „Ab Hof Verkauf“ lohnt sich immer. Entdecken Sie frische Blumen, stilvolle Dekoration und lassen Sie sich vor Ort inspirieren.
            </p>
            
            <div className="space-y-5 sm:space-y-6 bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm">
              <div className="flex items-start gap-4">
                <Clock className="text-brand-turquoise w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-brand-dark mb-1">Öffnungszeiten</h3>
                  <p className="text-brand-dark/70">Samstag - Donnerstag: 8:00 - 18:00 Uhr<br />Freitag: 13:30 - 18:00 Uhr</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-brand-turquoise w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-brand-dark mb-1">Vorankündigung erbeten</h3>
                  <p className="text-brand-dark/70">Wir bitten um kurze telefonische Vorankündigung, da in diesen Zeiten auch immer wieder Auslieferungen stattfinden.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-turquoise w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-brand-dark mb-1">Adresse</h3>
                  <p className="text-brand-dark/70">Musterstraße 12<br />2130 Mistelbach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


