import type { ReactNode } from "react";

type LegalSectionProps = {
  title: string;
  children: ReactNode;
};

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-serif font-semibold text-brand-dark">{title}</h2>
      <div className="space-y-4 text-base">{children}</div>
    </section>
  );
}
