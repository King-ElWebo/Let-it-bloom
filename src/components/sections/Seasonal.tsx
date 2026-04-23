import { seasonalOffers } from '../../data/seasonal';

export function Seasonal() {
  const activeOffers = seasonalOffers.filter(offer => offer.active).slice(0, 3);

  if (activeOffers.length === 0) return null;

  return (
    <section id="saisonales" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 md:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-brand-dark mb-5 sm:mb-6">
            Saisonale Anlässe
          </h2>
          <p className="text-base sm:text-lg text-brand-dark/70 leading-relaxed">
            Besondere Momente erfordern besondere Blumen. Entdecken Sie meine floralen Highlights für die aktuelle Saison.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {activeOffers.map((offer) => (
            <div key={offer.id} className="group relative rounded-3xl overflow-hidden aspect-4/5 shadow-sm">
              <img 
                src={offer.image} 
                alt={offer.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-dark/80 via-brand-dark/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-serif font-medium mb-2 sm:mb-3">{offer.title}</h3>
                <p className="text-white/90 leading-relaxed text-sm mb-5 sm:mb-6 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 transition-all duration-300 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                  {offer.description}
                </p>
                <a 
                  href="#kontakt" 
                  className="inline-block px-6 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium rounded-full hover:bg-white hover:text-brand-dark transition-colors"
                >
                  Anfragen
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


