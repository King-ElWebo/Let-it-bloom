import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { About } from "@/src/components/sections/About";
import { Contact } from "@/src/components/sections/Contact";
import { CtaSection } from "@/src/components/sections/CtaSection";
import { Decorations } from "@/src/components/sections/Decorations";
import { Funeral } from "@/src/components/sections/Funeral";
import { Gallery } from "@/src/components/sections/Gallery";
import { Hero } from "@/src/components/sections/Hero";
import { Intro } from "@/src/components/sections/Intro";
import { PrivateHomeShopping } from "@/src/components/sections/PrivateHomeShopping";
import { Products } from "@/src/components/sections/Products";
import { Seasonal } from "@/src/components/sections/Seasonal";
import { Shop } from "@/src/components/sections/Shop";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Intro />
        <Products />
        <PrivateHomeShopping />
        <Decorations />
        <Funeral />
        <Shop />
        <Gallery />
        <Seasonal />
        <About />
        <Contact />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
