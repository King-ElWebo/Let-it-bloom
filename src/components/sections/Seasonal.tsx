import { seasonalOffers } from '../../data/seasonal';

export function Seasonal() {
  const activeOffers = seasonalOffers.filter(offer => offer.active).slice(0, 3);

  if (activeOffers.length === 0) return null;

  return (
    <section id="saisonales" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-brand-dark mb-6">
            Saisonale Anlässe
          </h2>
          <p className="text-lg text-brand-dark/70 leading-relaxed">
            Besondere Momente erfordern besondere Blumen. Entdecken Sie meine floralen Highlights für die aktuelle Saison.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeOffers.map((offer) => (
            <div key={offer.id} className="group relative rounded-3xl overflow-hidden aspect-4/5 shadow-sm">
              <img 
                src={offer.image} 
                alt={offer.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-dark/80 via-brand-dark/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-serif font-medium mb-3">{offer.title}</h3>
                <p className="text-white/90 leading-relaxed text-sm mb-6 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
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


