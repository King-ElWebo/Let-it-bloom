import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { CookieConsentRoot } from "@/src/components/cookies/CookieConsentRoot";
import { ConsentAnalytics } from "@/src/components/ConsentAnalytics";
import { ConsentProvider } from "@/src/context/ConsentContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://DEINE-DOMAIN.at"),
  title: "Let It Bloom – Blumenatelier in Langenzersdorf",
  description:
    "Mobiler Blumen- und Pflanzenhändler in Langenzersdorf: Schnittblumen, Topfpflanzen, Dekorationsartikel und Gartenpflege. Vorbestellung aller Produkte jederzeit möglich.",
  keywords: "Blumenatelier Langenzersdorf, Blumen Langenzersdorf, Schnittblumen, Topfpflanzen, Dekoration, Gartenpflege, Blumenstrauß, Let It Bloom",
  openGraph: {
    title: "Let It Bloom – Blumenatelier in Langenzersdorf",
    description: "Mobiler Blumen- und Pflanzenhändler in Langenzersdorf: Schnittblumen, Topfpflanzen, Dekorationsartikel und Gartenpflege.",
    locale: "de_AT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Let It Bloom – Blumenatelier in Langenzersdorf",
    description: "Mobiler Blumen- und Pflanzenhändler in Langenzersdorf.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${cormorantGaramond.variable}`}>
      <body>
        <ConsentProvider>
          {children}
          <CookieConsentRoot />
          <ConsentAnalytics />
        </ConsentProvider>
      </body>
    </html>
  );
}
