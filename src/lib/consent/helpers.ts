import type { ConsentPreferences, OptionalConsentCategory } from '@/src/lib/consent/types';

export function hasOptionalConsent(
  consent: ConsentPreferences,
  category: OptionalConsentCategory
): boolean {
  return Boolean(consent[category]);
}

export function canLoadAnalytics(consent: ConsentPreferences): boolean {
  return hasOptionalConsent(consent, 'analytics');
}
