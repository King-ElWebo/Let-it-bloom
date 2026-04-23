'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Leistungen', href: '/#leistungen' },
    { name: 'Galerie', href: '/#galerie' },
    { name: 'Saisonales', href: '/#saisonales' },
    { name: 'Über mich', href: '/#ueber-mich' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-beige/90 backdrop-blur-md border-b border-brand-turquoise/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0 relative">
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-brand-turquoise/20 rounded-full -z-10"></div>
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <img
                src="/images/WhatsApp Image 2026-03-25 at 05.47.05 (2).jpeg"
                alt="Let It Bloom Logo Platzhalter"
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

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-brand-turquoise transition-colors p-2"
              aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-brand-cream border-b border-brand-turquoise/20 absolute top-full left-0 right-0">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-brand-dark hover:bg-brand-beige rounded-2xl transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 px-4 pb-2">
              <Link
                href="/#kontakt"
                onClick={() => setIsOpen(false)}
                className="block w-full py-3 bg-brand-turquoise text-white text-center font-medium rounded-full hover:bg-brand-turquoise/90 transition-colors shadow-sm"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
