import type { ReactNode } from "react";

type LegalPageLayoutProps = {
  title: string;
  intro: string;
  lastUpdated?: string;
  children: ReactNode;
};

export function LegalPageLayout({
  title,
  intro,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <header className="mb-14">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-brand-dark mb-6">
            {title}
          </h1>
          <p className="text-lg text-brand-dark/80 leading-relaxed max-w-3xl">{intro}</p>
          {lastUpdated ? (
            <p className="mt-6 text-sm text-brand-dark/60">Stand: {lastUpdated}</p>
          ) : null}
        </header>

        <article className="space-y-10 text-brand-dark/80 leading-relaxed">{children}</article>
      </div>
    </section>
  );
}
