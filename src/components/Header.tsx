import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Leistungen', href: '#leistungen' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'Saisonales', href: '#saisonales' },
    { name: 'Über mich', href: '#ueber-mich' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-beige/90 backdrop-blur-md border-b border-brand-turquoise/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 relative">
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-brand-turquoise/20 rounded-full -z-10"></div>
            <a href="#" className="flex flex-col">
              <span className="font-serif text-3xl font-semibold text-brand-dark tracking-wide">Let It Bloom</span>
              <span className="text-[10px] tracking-[0.2em] text-brand-turquoise uppercase font-medium">Blumenatelier</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-dark hover:text-brand-turquoise transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#kontakt"
              className="px-6 py-2.5 bg-brand-turquoise text-white text-sm font-medium rounded-full hover:bg-brand-turquoise/90 transition-colors shadow-sm"
            >
              Kontakt
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-brand-turquoise transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-brand-cream border-b border-brand-turquoise/20 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-brand-dark hover:bg-brand-beige rounded-2xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 px-4 pb-2">
              <a
                href="#kontakt"
                onClick={() => setIsOpen(false)}
                className="block w-full py-3 bg-brand-turquoise text-white text-center font-medium rounded-full hover:bg-brand-turquoise/90 transition-colors shadow-sm"
              >
                Kontakt
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
