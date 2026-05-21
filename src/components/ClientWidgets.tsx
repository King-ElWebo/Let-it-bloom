'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

const CookieConsentRoot = dynamic(
  () => import('@/src/components/cookies/CookieConsentRoot').then((mod) => mod.CookieConsentRoot),
  { ssr: false }
);

const WhatsAppFloatingButton = dynamic(
  () => import('@/src/components/ui/WhatsAppFloatingButton').then((mod) => mod.WhatsAppFloatingButton),
  { ssr: false }
);

const ConsentAnalytics = dynamic(
  () => import('@/src/components/ConsentAnalytics').then((mod) => mod.ConsentAnalytics),
  { ssr: false }
);

const ConsentSpeedInsights = dynamic(
  () => import('@/src/components/ConsentSpeedInsights').then((mod) => mod.ConsentSpeedInsights),
  { ssr: false }
);

export function ClientWidgets() {
  const pathname = usePathname();
  const isAdminPath = pathname === '/admin' || pathname?.startsWith('/admin/');

  return (
    <>
      <CookieConsentRoot />
      <ConsentAnalytics />
      <ConsentSpeedInsights />
      {!isAdminPath && <WhatsAppFloatingButton />}
    </>
  );
}
