import type { ConsentCategory } from '@/src/lib/consent/types';

export const CONSENT_STORAGE_KEY = 'letitbloom_cookie_consent_v1';
export const CONSENT_VERSION = 1;

export const CONSENT_CATEGORY_ORDER: ConsentCategory[] = [
  'necessary',
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
  marketing: {
    title: 'Statistik & Analyse',
    description:
      'Erlaubt das Sammeln von anonymisierten Nutzungsstatistiken und Performance-Daten über Vercel Analytics und Speed Insights, um unsere Website stetig zu verbessern.',
    required: false,
  },
  externalMedia: {
    title: 'Externe Medien',
    description:
      'Erlaubt das Laden eingebetteter Inhalte von Drittanbietern wie Videos oder Karten. Aktuell nur vorbereitet.',
    required: false,
  },
};
