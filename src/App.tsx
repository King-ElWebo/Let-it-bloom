/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { Intro } from './components/sections/Intro';
import { Products } from './components/sections/Products';
import { PrivateHomeShopping } from './components/sections/PrivateHomeShopping';
import { Decorations } from './components/sections/Decorations';
import { Funeral } from './components/sections/Funeral';
import { Shop } from './components/sections/Shop';
import { Gallery } from './components/sections/Gallery';
import { Seasonal } from './components/sections/Seasonal';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { CtaSection } from './components/sections/CtaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* 1. Hero – Erster Eindruck */}
        <Hero />
        {/* 2. Intro – Markenbotschaft & Emotion */}
        <Intro />
        {/* 3. Mein Angebot – Leistungsübersicht */}
        <Products />
        {/* 4. Private Home Shopping – Featured Highlight */}
        <PrivateHomeShopping />
        {/* 5. Pflanzschalen – Zusatz-Leistung */}
        <Decorations />
        {/* 6. Trauerfloristik – Zusatz-Leistung */}
        <Funeral />
        {/* 7. Ab Hof Verkauf – Zusatz-Leistung */}
        <Shop />
        {/* 8. Galerie – Inspiration & Vertrauen */}
        <Gallery />
        {/* 9. Saisonales – Aktuelle Highlights */}
        <Seasonal />
        {/* 10. Über mich – Vertrauen aufbauen */}
        <About />
        {/* 11. Kontakt – Konversion */}
        <Contact />
        {/* 12. CTA – Abschlussmotivation */}
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
