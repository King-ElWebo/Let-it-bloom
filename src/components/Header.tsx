import Link from 'next/link';
import Image from 'next/image';
import { MobileMenu } from '@/src/components/MobileMenu';

const navLinks = [
  { name: 'Leistungen', href: '/#leistungen' },
  { name: 'Galerie', href: '/#galerie' },
  { name: 'Saisonales', href: '/#saisonales' },
  { name: 'Über mich', href: '/#ueber-mich' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-beige/90 backdrop-blur-md border-b border-brand-turquoise/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0 relative">
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-brand-turquoise/20 rounded-full -z-10"></div>
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/images/WhatsApp Image 2026-03-25 at 05.47.05 (2).jpeg"
                alt="Let It Bloom Logo"
                width={44}
                height={44}
                priority
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border border-brand-turquoise/20 shadow-sm"
              />
              <span className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-brand-dark tracking-wide">Let It Bloom</span>
                <span className="hidden sm:block text-[10px] tracking-[0.2em] text-brand-turquoise uppercase font-medium">Blumenatelier</span>
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-dark hover:text-brand-turquoise transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#kontakt"
              className="px-6 py-2.5 bg-brand-turquoise text-white text-sm font-medium rounded-full hover:bg-brand-turquoise/90 transition-colors shadow-sm"
            >
              Kontakt
            </Link>
          </nav>

          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  );
}
