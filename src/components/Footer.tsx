import Link from 'next/link';

const navigationLinks = [
  { label: 'Leistungen', href: '/#leistungen' },
  { label: 'Galerie', href: '/#galerie' },
  { label: 'Saisonales', href: '/#saisonales' },
  { label: 'Über mich', href: '/#ueber-mich' },
  { label: 'Kontakt', href: '/#kontakt' },
];

const legalLinks = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'Cookie-Richtlinie', href: '/cookie-richtlinie' },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          <div>
            <Link href="/" className="flex flex-col mb-6 inline-block">
              <span className="font-serif text-xl sm:text-2xl font-semibold text-brand-cream tracking-wide">Let It Bloom</span>
              <span className="text-xs tracking-widest text-brand-turquoise uppercase font-medium">Blumenatelier</span>
            </Link>
            <p className="text-brand-cream/60 text-sm leading-relaxed max-w-xs">
              Ihr mobiler Blumen- & Pflanzenhändler für handgefertigte Floristik im Weinviertel.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-brand-cream/60 hover:text-brand-turquoise transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Rechtliches</h4>
            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-brand-cream/60 hover:text-brand-turquoise transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-brand-cream/40 text-sm">
            &copy; {new Date().getFullYear()} Blumenatelier Let It Bloom. Alle Rechte vorbehalten.
          </p>
          <p className="text-brand-cream/40 text-sm">Gestaltet mit Liebe in Österreich.</p>
        </div>
      </div>
    </footer>
  );
}
