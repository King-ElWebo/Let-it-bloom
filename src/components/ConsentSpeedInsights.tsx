'use client';

import dynamic from 'next/dynamic';
import { useConsent } from '@/src/hooks/useConsent';

const SpeedInsights = dynamic(
  () => import('@vercel/speed-insights/next').then((mod) => mod.SpeedInsights),
  { ssr: false }
);

export function ConsentSpeedInsights() {
  const { hydrated, hasConsent } = useConsent();

  // Load Speed Insights if user has consented to marketing/analytics cookies
  if (!hydrated || !hasConsent('marketing')) return null;

  return <SpeedInsights />;
}
