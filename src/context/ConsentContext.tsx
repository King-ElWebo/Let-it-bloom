'use client';

import type { ReactNode } from 'react';
import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { CONSENT_VERSION } from '@/src/lib/consent/config';
import { createDefaultConsent, loadStoredConsent, saveStoredConsent } from '@/src/lib/consent/storage';
import type { ConsentDraft, ConsentPreferences, OptionalConsentCategory } from '@/src/lib/consent/types';

export type ConsentContextValue = {
  consent: ConsentPreferences;
  hydrated: boolean;
  isPreferencesOpen: boolean;
  hasDecision: boolean;
  hasConsent: (category: OptionalConsentCategory) => boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  acceptAll: () => void;
  acceptNecessaryOnly: () => void;
  savePreferences: (draft: ConsentDraft) => void;
};

export const ConsentContext = createContext<ConsentContextValue | null>(null);

function emitConsentUpdate(consent: ConsentPreferences): void {
  if (typeof window === 'undefined') return;

  window.dispatchEvent(
    new CustomEvent('consent:updated', {
      detail: consent,
    })
  );
}

function withDecision(
  base: ConsentPreferences,
  overrides: Partial<ConsentPreferences>
): ConsentPreferences {
  return {
    ...base,
    ...overrides,
    necessary: true,
    consentGiven: true,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
}

export function ConsentProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [consent, setConsent] = useState<ConsentPreferences>(createDefaultConsent);
  const [hydrated, setHydrated] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  useEffect(() => {
    const storedConsent = loadStoredConsent();
    if (storedConsent) {
      setConsent(storedConsent);
    }
    setHydrated(true);
  }, []);

  const persistConsent = useCallback((nextConsent: ConsentPreferences) => {
    saveStoredConsent(nextConsent);
    setConsent(nextConsent);
    emitConsentUpdate(nextConsent);
  }, []);

  const acceptAll = useCallback(() => {
    persistConsent(
      withDecision(consent, {
        analytics: true,
        marketing: true,
        externalMedia: true,
      })
    );
    setIsPreferencesOpen(false);
  }, [consent, persistConsent]);

  const acceptNecessaryOnly = useCallback(() => {
    persistConsent(
      withDecision(consent, {
        analytics: false,
        marketing: false,
        externalMedia: false,
      })
    );
    setIsPreferencesOpen(false);
  }, [consent, persistConsent]);

  const savePreferences = useCallback(
    (draft: ConsentDraft) => {
      persistConsent(
        withDecision(consent, {
          analytics: draft.analytics,
          marketing: draft.marketing,
          externalMedia: draft.externalMedia,
        })
      );
      setIsPreferencesOpen(false);
    },
    [consent, persistConsent]
  );

  const value = useMemo<ConsentContextValue>(
    () => ({
      consent,
      hydrated,
      isPreferencesOpen,
      hasDecision: consent.consentGiven,
      hasConsent: (category) => consent[category],
      openPreferences: () => setIsPreferencesOpen(true),
      closePreferences: () => setIsPreferencesOpen(false),
      acceptAll,
      acceptNecessaryOnly,
      savePreferences,
    }),
    [acceptAll, acceptNecessaryOnly, consent, hydrated, isPreferencesOpen, savePreferences]
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}
