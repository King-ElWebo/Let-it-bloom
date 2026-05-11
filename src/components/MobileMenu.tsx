'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type MobileMenuLink = {
  name: string;
  href: string;
};

type MobileMenuProps = {
  links: MobileMenuLink[];
};

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-brand-dark hover:text-brand-turquoise transition-colors p-2"
          aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-brand-cream border-b border-brand-turquoise/20 absolute top-full left-0 right-0">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
            {links.map((link) => (
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
    </>
  );
}
