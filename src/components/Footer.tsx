export function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#" className="flex flex-col mb-6 inline-block">
              <span className="font-serif text-2xl font-semibold text-brand-cream tracking-wide">Let It Bloom</span>
              <span className="text-xs tracking-widest text-brand-turquoise uppercase font-medium">Blumenatelier</span>
            </a>
            <p className="text-brand-cream/60 text-sm leading-relaxed max-w-xs">
              Ihr mobiler Blumen- & Pflanzenhändler für handgefertigte Floristik im Weinviertel.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Navigation</h4>
            <ul className="space-y-3">
              {['Leistungen', 'Galerie', 'Saisonales', 'Über mich', 'Kontakt'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-brand-cream/60 hover:text-brand-turquoise transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Rechtliches</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-brand-cream/60 hover:text-brand-turquoise transition-colors text-sm">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-brand-cream/60 hover:text-brand-turquoise transition-colors text-sm">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="text-brand-cream/60 hover:text-brand-turquoise transition-colors text-sm">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-cream/40 text-sm">
            &copy; {new Date().getFullYear()} Blumenatelier Let It Bloom. Alle Rechte vorbehalten.
          </p>
          <p className="text-brand-cream/40 text-sm">
            Gestaltet mit Liebe in Österreich.
          </p>
        </div>
      </div>
    </footer>
  );
}
