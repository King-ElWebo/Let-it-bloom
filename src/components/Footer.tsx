import Link from 'next/link';
import { CookieSettingsButton } from '@/src/components/cookies/CookieSettingsButton';

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
    <footer className="bg-[var(--color-brand-turquoise-footer)] text-brand-cream py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          <div>
            <Link href="/" className="flex flex-col mb-6 inline-block" aria-label="Zur Startseite – Let It Bloom">
              <span className="font-serif text-xl sm:text-2xl font-semibold text-brand-cream tracking-wide">Let It Bloom</span>
              <span className="text-xs tracking-widest text-brand-cream uppercase font-medium">Blumenatelier</span>
            </Link>
            <p className="text-brand-cream/90 text-sm leading-relaxed max-w-xs">
              Ihr mobiler Blumen- &amp; Pflanzenhändler im Weinviertel.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-brand-cream/90 hover:text-white hover:underline transition-colors text-sm"
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
                    className="text-brand-cream/90 hover:text-white hover:underline transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookieSettingsButton className="text-brand-cream/90 hover:text-white hover:underline transition-colors text-sm text-left cursor-pointer">
                  Cookie-Einstellungen
                </CookieSettingsButton>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-brand-cream/15 flex flex-col md:flex-row items-center md:items-end justify-between gap-4 md:gap-8">
          <p className="text-brand-cream/80 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Blumenatelier Let It Bloom. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-1">
            <p className="text-brand-cream/70 text-xs">
              Website erstellt von Benjamin Wilk
            </p>
            <p className="text-brand-cream/55 text-[11px] leading-relaxed max-w-xs sm:max-w-md">
              Für Inhalte, spätere Änderungen sowie technische Ausfälle durch Drittanbieter wird keine Haftung übernommen.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
