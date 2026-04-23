'use client';

import Link from 'next/link';
import { useConsent } from '@/src/hooks/useConsent';

export function CookieBanner() {
  const { hydrated, hasDecision, acceptAll, acceptNecessaryOnly, openPreferences } = useConsent();

  if (!hydrated || hasDecision) return null;

  return (
    <section
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-0 bottom-0 z-[90] p-3 sm:p-4"
    >
      <div className="mx-auto max-w-7xl rounded-3xl border border-brand-turquoise/20 bg-brand-cream/95 shadow-xl backdrop-blur-md">
        <div className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-dark mb-3">
            Ihre Privatsphäre ist uns wichtig
          </h2>
          <p className="text-sm sm:text-base text-brand-dark/80 leading-relaxed">
            Wir verwenden notwendige Cookies und ähnliche Technologien, damit die Website zuverlässig
            funktioniert. Optionale Cookies für Statistik/Analytics helfen uns, unser Angebot zu
            verbessern. Details finden Sie in unserer{' '}
            <Link href="/datenschutz" className="underline underline-offset-2 hover:text-brand-turquoise">
              Datenschutzerklärung
            </Link>{' '}
            und der{' '}
            <Link
              href="/cookie-richtlinie"
              className="underline underline-offset-2 hover:text-brand-turquoise"
            >
              Cookie-Richtlinie
            </Link>
            .
          </p>
          <div className="mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <button
              type="button"
              onClick={acceptAll}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-brand-turquoise text-white text-sm font-medium hover:bg-brand-turquoise/90 transition-colors"
            >
              Alle akzeptieren
            </button>
            <button
              type="button"
              onClick={acceptNecessaryOnly}
              className="w-full sm:w-auto px-5 py-3 rounded-full border border-brand-turquoise/30 text-brand-dark text-sm font-medium hover:bg-white/70 transition-colors"
            >
              Nur notwendige
            </button>
            <button
              type="button"
              onClick={openPreferences}
              className="w-full sm:w-auto px-5 py-3 rounded-full border border-brand-dark/20 text-brand-dark text-sm font-medium hover:bg-white/70 transition-colors"
            >
              Einstellungen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
