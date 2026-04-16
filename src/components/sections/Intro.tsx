import { Heart, MapPin, Leaf } from 'lucide-react';

export function Intro() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-24 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4 md:gap-6 h-[400px] md:h-[600px]">
            <div className="relative rounded-3xl overflow-hidden shadow-sm">
              <img 
                src="/images/haydn-golden-LfT2t-E08kw-unsplash.jpg" 
                alt="Floristin bei der Arbeit" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-4 md:gap-6 min-h-0">
              <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                <img 
                  src="/images/irena-carpaccio-Aqkqd6U4W4k-unsplash.jpg" 
                  alt="Detail" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-sm min-h-0">
                <img 
                  src="/images/jack-swords-BQtphmFrst4-unsplash.jpg" 
                  alt="Frische Blumen" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-brand-dark mb-8 leading-tight">
              Blumen sind das Lächeln der Erde
            </h2>
            <p className="text-lg text-brand-dark/80 leading-relaxed mb-10">
              In meinem Atelier in Mistelbach verbinde ich handwerkliches Können mit kreativer Leidenschaft. Jedes Werkstück wird individuell und mit viel Liebe zum Detail gefertigt – passend zu Ihren Wünschen und dem jeweiligen Anlass.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-blush/50 flex items-center justify-center shrink-0">
                  <Heart className="text-brand-dark w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark text-lg mb-1">Persönlich & Handgemacht</h3>
                  <p className="text-brand-dark/70 text-sm leading-relaxed">Individuelle Beratung und liebevolle Handarbeit für jedes einzelne Werkstück.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-turquoise/20 flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-dark w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark text-lg mb-1">Regional im Weinviertel</h3>
                  <p className="text-brand-dark/70 text-sm leading-relaxed">Als mobiler Händler bringe ich florale Freude direkt zu Ihnen in der Region.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-beige flex items-center justify-center shrink-0 border border-brand-turquoise/20">
                  <Leaf className="text-brand-dark w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark text-lg mb-1">Natürlich & Saisonal</h3>
                  <p className="text-brand-dark/70 text-sm leading-relaxed">Fokus auf saisonale Blumen und natürliche Materialien für authentische Floristik.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
