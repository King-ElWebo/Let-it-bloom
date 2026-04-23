export type OptionalConsentCategory = 'analytics' | 'marketing' | 'externalMedia';

export type ConsentCategory = 'necessary' | OptionalConsentCategory;

export type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  externalMedia: boolean;
  consentGiven: boolean;
  timestamp: string;
  version: number;
};

export type ConsentDraft = Pick<ConsentPreferences, OptionalConsentCategory>;
