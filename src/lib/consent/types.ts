export type OptionalConsentCategory = 'marketing' | 'externalMedia';

export type ConsentCategory = 'necessary' | OptionalConsentCategory;

export type ConsentPreferences = {
  necessary: true;
  marketing: boolean;
  externalMedia: boolean;
  consentGiven: boolean;
  timestamp: string;
  version: number;
};

export type ConsentDraft = Pick<ConsentPreferences, OptionalConsentCategory>;
