'use client';

import { useContext } from 'react';
import { ConsentContext } from '@/src/context/ConsentContext';

export function useConsent() {
  const context = useContext(ConsentContext);

  if (!context) {
    throw new Error('useConsent muss innerhalb des ConsentProvider verwendet werden.');
  }

  return context;
}
