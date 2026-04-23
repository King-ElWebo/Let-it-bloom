'use client';

import type { ReactNode } from 'react';
import { useConsent } from '@/src/hooks/useConsent';

type CookieSettingsButtonProps = {
  className?: string;
  children?: ReactNode;
};

export function CookieSettingsButton({
  className,
  children = 'Cookie-Einstellungen',
}: CookieSettingsButtonProps) {
  const { openPreferences } = useConsent();

  return (
    <button type="button" onClick={openPreferences} className={className}>
      {children}
    </button>
  );
}
