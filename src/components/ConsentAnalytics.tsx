'use client';

import dynamic from 'next/dynamic';
import { useConsent } from '@/src/hooks/useConsent';

const Analytics = dynamic(
  () => import('@vercel/analytics/react').then((mod) => mod.Analytics),
  { ssr: false }
);

export function ConsentAnalytics() {
  const { hydrated, hasConsent } = useConsent();

  if (!hydrated || !hasConsent('marketing')) return null;

  return <Analytics />;
}
