'use client';

import { useState, useEffect } from 'react';
import { useConsent } from '@/src/hooks/useConsent';

// Reusable config defaults
const DEFAULT_PHONE = '436642303427';
const DEFAULT_MESSAGE = 'Hallo, ich interessiere mich für Ihre Blumenarrangements.';

interface WhatsAppFloatingButtonProps {
  /** Configurable phone number in international format (without '+' or leading zeros) */
  phoneNumber?: string;
  /** Optional prefilled message */
  message?: string;
  /** Optional tooltip label for desktop hover */
  desktopTooltipText?: string;
  /** Optional tooltip label for mobile first-load brief animation */
  mobileTooltipText?: string;
}

export function WhatsAppFloatingButton({
  phoneNumber = DEFAULT_PHONE,
  message = DEFAULT_MESSAGE,
  desktopTooltipText = 'Schreiben Sie mir auf WhatsApp!',
  mobileTooltipText = 'Haben Sie Fragen? Schreiben Sie mir!',
}: WhatsAppFloatingButtonProps) {
  const { hydrated, hasDecision } = useConsent();
  const [showMobileTooltip, setShowMobileTooltip] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // Set mounted state and trigger the mobile brief tooltip
  useEffect(() => {
    setHasMounted(true);

    // Show mobile tooltip briefly after 1.5 seconds, then hide after 6 seconds (4.5s visibility)
    const showTimer = setTimeout(() => {
      setShowMobileTooltip(true);
    }, 1500);

    const hideTimer = setTimeout(() => {
      setShowMobileTooltip(false);
    }, 6000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Prevent rendering anything during SSR to avoid hydration mismatch
  if (!hasMounted) return null;

  // The cookie banner is visible if hydrated is true and hasDecision is false
  const isBannerActive = hydrated && !hasDecision;

  // URL encode the prefilled message
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div
      className={`fixed right-4 sm:right-6 z-40 transition-all duration-500 ease-in-out group ${
        isBannerActive
          ? 'bottom-[290px] sm:bottom-[176px]'
          : 'bottom-[max(20px,env(safe-area-inset-bottom))] sm:bottom-6'
      }`}
    >
      {/* ── MOBILE BRIEF TOOLTIP ── */}
      <div
        className={`absolute right-0 bottom-full mb-4.5 whitespace-nowrap px-4 py-2.5 rounded-2xl bg-brand-cream/95 border border-brand-turquoise/20 text-brand-dark shadow-[0_8px_30px_rgba(61,51,41,0.15)] text-sm font-medium backdrop-blur-sm flex items-center gap-2 sm:hidden transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
          showMobileTooltip
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
        }`}
        role="alert"
      >
        <span>{mobileTooltipText}</span>
        {/* Tiny dropdown arrow */}
        <div className="absolute top-full right-6 w-3 h-3 bg-brand-cream/95 border-r border-b border-brand-turquoise/20 rotate-45 -translate-y-1.5" />
      </div>

      {/* ── DESKTOP HOVER TOOLTIP ── */}
      <div
        className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 translate-x-3 scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 pointer-events-none transition-all duration-300 ease-out hidden sm:flex items-center px-4 py-2.5 rounded-full bg-brand-cream/95 border border-brand-turquoise/20 text-brand-dark shadow-[0_8px_30px_rgba(61,51,41,0.15)] text-sm font-medium backdrop-blur-sm"
      >
        <span className="flex items-center gap-2">
          {/* Subtle green dot indicator */}
          <span className="w-2 h-2 rounded-full bg-[#5A8272] animate-pulse" />
          {desktopTooltipText}
        </span>
      </div>

      {/* ── BUTTON LINK CONTAINER ── */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Let It Bloom WhatsApp Chat kontaktieren"
        className="relative flex items-center justify-center rounded-full bg-[#5A8272] hover:bg-[#4D7061] text-brand-cream w-[58px] h-[58px] sm:w-16 sm:h-16 shadow-[0_8px_30px_rgba(61,51,41,0.22)] hover:shadow-[0_12px_36px_rgba(61,51,41,0.32)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-95 focus:outline-none focus:ring-3 focus:ring-[#5A8272]/50 focus:ring-offset-2 focus:ring-offset-brand-beige"
      >
        {/* Elegant Outer Ripple Pulsing Glow */}
        <div className="absolute inset-0 rounded-full bg-[#5A8272] animate-elegant-ripple -z-10" />

        {/* Custom SVG Official WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current"
          aria-hidden="true"
        >
          <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.76.46 3.42 1.26 4.88L2 22l5.3-1.22c1.4.74 2.98 1.16 4.7 1.16 5.52 0 10-4.48 10-10C22.004 6.48 17.52 2 12.004 2zm.006 17.5c-1.56 0-3.1-.42-4.44-1.21l-.32-.19-3.29.76.77-3.12-.21-.34c-.87-1.39-1.33-3-1.33-4.66 0-4.7 3.82-8.52 8.52-8.52s8.52 3.82 8.52 8.52-3.82 8.52-8.52 8.52zm4.68-6.31c-.26-.13-1.52-.75-1.76-.84-.24-.09-.41-.13-.58.13-.17.26-.66.84-.81 1.01-.15.17-.3.19-.56.06-.26-.13-1.1-.41-2.1-1.3-.78-.7-1.3-1.56-1.46-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.17.17-.28.26-.46.09-.17.04-.32-.02-.45-.06-.13-.58-1.39-.79-1.91-.21-.5-.45-.43-.62-.44-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.28s.98 2.64 1.11 2.81c.14.17 1.93 2.94 4.67 4.12.65.28 1.16.45 1.56.57.66.21 1.26.18 1.73.11.53-.08 1.63-.66 1.86-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.17-.51-.3z" />
        </svg>
      </a>
    </div>
  );
}
