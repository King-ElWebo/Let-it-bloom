'use client';

import { Phone, Mail, Clock, Instagram, Facebook, Truck, CalendarDays } from 'lucide-react';

export function Contact() {
  return (
    <section id="kontakt" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-turquoise/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blush/20 shape-blob blur-2xl translate-y-1/4 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 xl:gap-24">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-brand-dark mb-6 sm:mb-8">
              Kontakt & Service
            </h2>
            <p className="text-base sm:text-lg text-brand-dark/80 leading-relaxed mb-8 sm:mb-10 md:mb-12">
              Haben Sie Fragen, Wünsche oder möchten Sie eine Bestellung aufgeben? Ich bin gerne für Sie da.
            </p>
            
            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0 border border-brand-turquoise/20">
                  <Phone className="text-brand-turquoise w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark text-base sm:text-lg mb-1">Telefon</h3>
                  <a href="tel:+43123456789" className="text-brand-dark/70 hover:text-brand-turquoise transition-colors">+43 123 456 789</a>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0 border border-brand-turquoise/20">
                  <Mail className="text-brand-turquoise w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark text-base sm:text-lg mb-1">E-Mail</h3>
                  <a href="mailto:hallo@letitbloom.at" className="text-brand-dark/70 hover:text-brand-turquoise transition-colors">hallo@letitbloom.at</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0 border border-brand-turquoise/20">
                  <CalendarDays className="text-brand-turquoise w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark text-base sm:text-lg mb-1">Donnerstag</h3>
                  <p className="text-brand-dark/70">Wochenmarkt Langenzersdorf<br/><span className="text-sm italic">(ab April 2025)</span></p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0 border border-brand-turquoise/20">
                  <Truck className="text-brand-turquoise w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark text-base sm:text-lg mb-1">Freitag & Samstag</h3>
                  <p className="text-brand-dark/70">
                    Lieferung in Langenzersdorf u.U. kostenlos<br/>sowie Abholung möglich
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0 border border-brand-turquoise/20">
                  <Clock className="text-brand-turquoise w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark text-base sm:text-lg mb-1">Sonntag - Mittwoch</h3>
                  <p className="text-brand-dark/70">
                    Lieferung und Abholung nach Vereinbarung möglich
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 sm:mt-12 flex gap-3 sm:gap-4">
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-dark hover:bg-brand-turquoise hover:text-white transition-colors border border-brand-turquoise/20">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-dark hover:bg-brand-turquoise hover:text-white transition-colors border border-brand-turquoise/20">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="bg-brand-cream rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-14 shadow-sm relative">
            {/* Decorative corner */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-turquoise/20 rounded-full -z-10"></div>
            
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-brand-dark mb-6 sm:mb-8">Nachricht senden</h3>
            <form className="space-y-5 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-dark/80 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-5 py-4 rounded-full bg-white/60 border border-brand-turquoise/20 focus:outline-none focus:ring-2 focus:ring-brand-turquoise/50 focus:bg-white transition-all"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-dark/80 mb-2">E-Mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-5 py-4 rounded-full bg-white/60 border border-brand-turquoise/20 focus:outline-none focus:ring-2 focus:ring-brand-turquoise/50 focus:bg-white transition-all"
                  placeholder="ihre.email@beispiel.at"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-dark/80 mb-2">Nachricht</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-5 py-4 rounded-3xl bg-white/60 border border-brand-turquoise/20 focus:outline-none focus:ring-2 focus:ring-brand-turquoise/50 focus:bg-white transition-all resize-none"
                  placeholder="Wie kann ich Ihnen helfen?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-brand-turquoise text-white font-medium rounded-full hover:bg-brand-turquoise/90 transition-colors shadow-sm hover:-translate-y-0.5"
              >
                Nachricht absenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


