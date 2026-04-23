import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Let It Bloom | Blumenatelier im Weinviertel",
  description:
    "Ihr mobiler Blumen- und Pflanzenhaendler im Weinviertel. Handgefertigte Floristik, saisonale Arrangements und persoenlicher Service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
