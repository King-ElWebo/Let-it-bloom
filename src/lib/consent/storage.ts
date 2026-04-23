import { CONSENT_STORAGE_KEY, CONSENT_VERSION } from '@/src/lib/consent/config';
import type { ConsentPreferences } from '@/src/lib/consent/types';

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

export function createDefaultConsent(): ConsentPreferences {
  return {
    necessary: true,
    analytics: false,
    marketing: false,
    externalMedia: false,
    consentGiven: false,
    timestamp: '',
    version: CONSENT_VERSION,
  };
}

function normalizeConsent(input: Partial<ConsentPreferences>): ConsentPreferences {
  return {
    necessary: true,
    analytics: Boolean(input.analytics),
    marketing: Boolean(input.marketing),
    externalMedia: Boolean(input.externalMedia),
    consentGiven: Boolean(input.consentGiven),
    timestamp: typeof input.timestamp === 'string' ? input.timestamp : '',
    version: CONSENT_VERSION,
  };
}

export function saveStoredConsent(consent: ConsentPreferences): void {
  if (typeof window === 'undefined') return;

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
}

export function loadStoredConsent(): ConsentPreferences | null {
  if (typeof window === 'undefined') return null;

  const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!isObject(parsed)) return null;
    return normalizeConsent(parsed as Partial<ConsentPreferences>);
  } catch {
    return null;
  }
}
