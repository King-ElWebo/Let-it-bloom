export function About() {
  return (
    <section id="ueber-mich" className="py-20 md:py-28 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 xl:gap-24 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-lg relative z-10">
               <img 
                  src="/images/WhatsApp Image 2026-03-25 at 05.47.05 (2).jpeg" 
                  alt="Portrait der Floristin" 
                  className="w-full h-full object-cover"
                />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-turquoise/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-blush/20 rounded-full -z-10"></div>
          </div>
          
          <div className="lg:col-span-7 lg:pl-10">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-brand-dark mb-8">
              Über Mich
            </h2>
            <div className="space-y-6 text-lg text-brand-dark/80 leading-relaxed relative">
              <span className="absolute -top-10 -left-6 text-8xl text-brand-turquoise/10 font-serif leading-none">"</span>
              <p className="relative z-10 font-medium text-xl text-brand-dark">
                „Schon mein Großvater besaß in den 70iger Jahren eine große Gärtnerei & Landschaftsgestaltung, somit wurde mir die Liebe und Passion zu allem Blühenden von Klein auf mit auf den Weg gegeben.“
              </p>
              <p>
                Aber erst sehr spät mit 47 Jahren hab ich mir meinen Kindheitstraum von einer eigenen Selbstständigkeit mit Pflanzen erfüllt.
              </p>
              <p>
                Mit "Let It Bloom" möchte ich diese Leidenschaft weitergeben. Jedes Werkstück, das mein Atelier verlässt, trägt ein Stück dieser Geschichte in sich – gefertigt mit Respekt vor der Natur und dem Wunsch, Freude zu bereiten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

