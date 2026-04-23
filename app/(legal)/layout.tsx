import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";

export default function LegalRouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
