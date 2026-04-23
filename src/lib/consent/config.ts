import type { ConsentCategory } from '@/src/lib/consent/types';

export const CONSENT_STORAGE_KEY = 'letitbloom_cookie_consent_v1';
export const CONSENT_VERSION = 1;

export const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? '';

export const CONSENT_CATEGORY_ORDER: ConsentCategory[] = [
  'necessary',
  'analytics',
  'marketing',
  'externalMedia',
];

export const CONSENT_CATEGORY_TEXT: Record<
  ConsentCategory,
  { title: string; description: string; required: boolean }
> = {
  necessary: {
    title: 'Notwendige Cookies',
    description:
      'Diese Cookies sind für grundlegende Funktionen der Website erforderlich und können nicht deaktiviert werden.',
    required: true,
  },
  analytics: {
    title: 'Statistik / Analytics',
    description:
      'Hilft uns, die Nutzung der Website anonymisiert zu verstehen und Inhalte sowie Benutzerführung zu verbessern.',
    required: false,
  },
  marketing: {
    title: 'Marketing',
    description:
      'Wird für personalisierte Inhalte und Werbemaßnahmen genutzt. Aktuell nur vorbereitet und standardmäßig deaktiviert.',
    required: false,
  },
  externalMedia: {
    title: 'Externe Medien',
    description:
      'Erlaubt das Laden eingebetteter Inhalte von Drittanbietern wie Videos oder Karten. Aktuell nur vorbereitet.',
    required: false,
  },
};
