'use client';

import { X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CONSENT_CATEGORY_ORDER, CONSENT_CATEGORY_TEXT } from '@/src/lib/consent/config';
import type { ConsentDraft, OptionalConsentCategory } from '@/src/lib/consent/types';
import { useConsent } from '@/src/hooks/useConsent';

export function CookiePreferencesModal() {
  const {
    consent,
    isPreferencesOpen,
    closePreferences,
    savePreferences,
    acceptAll,
    acceptNecessaryOnly,
  } = useConsent();

  const [draft, setDraft] = useState<ConsentDraft>({
    analytics: false,
    marketing: false,
    externalMedia: false,
  });

  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPreferencesOpen) return;

    const nextDraft: ConsentDraft = {
      analytics: consent.analytics,
      marketing: consent.marketing,
      externalMedia: consent.externalMedia,
    };
    setDraft(nextDraft);

    const previousOverflow = document.body.style.overflow;
    const previousActiveElement = document.activeElement as HTMLElement | null;

    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePreferences();
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousActiveElement?.focus();
    };
  }, [closePreferences, consent, isPreferencesOpen]);

  const categoryRows = useMemo(
    () =>
      CONSENT_CATEGORY_ORDER.map((category) => ({
        category,
        meta: CONSENT_CATEGORY_TEXT[category],
      })),
    []
  );

  const toggleCategory = (category: OptionalConsentCategory) => {
    setDraft((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSave = () => {
    savePreferences(draft);
  };

  if (!isPreferencesOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-brand-dark/50 backdrop-blur-[2px] p-3 sm:p-6"
      onClick={(event) => {
        if (event.target === event.currentTarget) closePreferences();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-title"
        aria-describedby="cookie-settings-description"
        tabIndex={-1}
        className="mx-auto mt-4 sm:mt-8 max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white border border-brand-turquoise/20 shadow-2xl focus:outline-none"
      >
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-brand-turquoise/15 px-4 py-4 sm:px-6 sm:py-5 flex items-start justify-between gap-4 rounded-t-3xl">
          <div>
            <h2 id="cookie-settings-title" className="font-serif text-2xl sm:text-3xl font-semibold text-brand-dark">
              Cookie-Einstellungen
            </h2>
            <p id="cookie-settings-description" className="mt-2 text-sm sm:text-base text-brand-dark/75 leading-relaxed">
              Sie entscheiden, welche optionalen Cookies verwendet werden dürfen. Notwendige Cookies
              bleiben immer aktiv.
            </p>
          </div>
          <button
            type="button"
            onClick={closePreferences}
            className="w-10 h-10 rounded-full border border-brand-dark/20 flex items-center justify-center text-brand-dark hover:bg-brand-cream transition-colors"
            aria-label="Cookie-Einstellungen schließen"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-4 py-4 sm:px-6 sm:py-6 space-y-4">
          {categoryRows.map(({ category, meta }) => {
            const isRequired = meta.required;
            const isEnabled = isRequired ? true : draft[category as OptionalConsentCategory];

            return (
              <section
                key={category}
                className="rounded-2xl border border-brand-turquoise/15 bg-brand-cream/40 p-4 sm:p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-brand-dark">{meta.title}</h3>
                    <p className="mt-1 text-sm sm:text-base text-brand-dark/75 leading-relaxed">
                      {meta.description}
                    </p>
                  </div>
                  {isRequired ? (
                    <span className="inline-flex items-center rounded-full bg-brand-turquoise/20 text-brand-dark text-xs font-medium px-3 py-1 whitespace-nowrap">
                      Immer aktiv
                    </span>
                  ) : (
                    <button
                      type="button"
                      role="switch"
                      aria-checked={isEnabled}
                      aria-label={`${meta.title} ${isEnabled ? 'aktiviert' : 'deaktiviert'}`}
                      onClick={() => toggleCategory(category as OptionalConsentCategory)}
                      className={`relative shrink-0 h-8 w-14 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-turquoise/50 ${
                        isEnabled ? 'bg-brand-turquoise' : 'bg-brand-dark/20'
                      }`}
                    >
                      <span
                        className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow transition-transform duration-200 ${
                          isEnabled ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  )}
                </div>
              </section>
            );
          })}
        </div>

        <div className="px-4 pb-5 sm:px-6 sm:pb-6">
          <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed mb-4">
            Weitere Informationen finden Sie in unserer{' '}
            <Link href="/datenschutz" className="underline underline-offset-2 hover:text-brand-turquoise">
              Datenschutzerklärung
            </Link>{' '}
            und in der{' '}
            <Link
              href="/cookie-richtlinie"
              className="underline underline-offset-2 hover:text-brand-turquoise"
            >
              Cookie-Richtlinie
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <button
              type="button"
              onClick={acceptNecessaryOnly}
              className="w-full sm:w-auto px-5 py-3 rounded-full border border-brand-turquoise/30 text-brand-dark text-sm font-medium hover:bg-brand-cream transition-colors"
            >
              Nur notwendige
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="w-full sm:w-auto px-5 py-3 rounded-full border border-brand-dark/20 text-brand-dark text-sm font-medium hover:bg-brand-cream transition-colors"
            >
              Auswahl speichern
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-brand-turquoise text-white text-sm font-medium hover:bg-brand-turquoise/90 transition-colors"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
