import type { Metadata } from "next";
import { LegalPageLayout } from "@/src/components/legal/LegalPageLayout";
import { LegalSection } from "@/src/components/legal/LegalSection";
import { legalProfile } from "@/src/content/legal";

export const metadata: Metadata = {
  title: "Impressum | Let It Bloom",
  description:
    "Impressum mit Anbieterkennzeichnung, Kontaktangaben und Haftungshinweisen fuer die Website.",
};

export default function ImpressumPage() {
  return (
    <LegalPageLayout
      title="Impressum"
      intro="Angaben gemaess den Informationspflichten fuer Websites in Oesterreich und Deutschland. Bitte ersetze die Platzhalter durch deine echten Unternehmensdaten."
      lastUpdated={legalProfile.lastUpdated}
    >
      <LegalSection title="Angaben zum Unternehmen">
        <dl className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-x-6 gap-y-3">
          <dt className="font-medium text-brand-dark">Firmenname</dt>
          <dd>{legalProfile.companyName}</dd>

          <dt className="font-medium text-brand-dark">Inhaber</dt>
          <dd>{legalProfile.ownerName}</dd>

          <dt className="font-medium text-brand-dark">Rechtsform</dt>
          <dd>{legalProfile.legalForm}</dd>

          <dt className="font-medium text-brand-dark">Unternehmensgegenstand</dt>
          <dd>{legalProfile.businessPurpose}</dd>
        </dl>
      </LegalSection>

      <LegalSection title="Anschrift und Kontakt">
        <address className="not-italic space-y-1">
          <p>{legalProfile.companyName}</p>
          <p>{legalProfile.street}</p>
          <p>
            {legalProfile.postalCode} {legalProfile.city}
          </p>
          <p>{legalProfile.country}</p>
        </address>
        <p>
          Telefon: {legalProfile.phone}
          <br />
          E-Mail: {legalProfile.email}
          <br />
          Website: {legalProfile.website}
        </p>
      </LegalSection>

      <LegalSection title="Unternehmensregister und Aufsicht">
        <dl className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-x-6 gap-y-3">
          <dt className="font-medium text-brand-dark">UID-Nummer</dt>
          <dd>{legalProfile.uidNumber}</dd>

          <dt className="font-medium text-brand-dark">Firmenbuchnummer</dt>
          <dd>{legalProfile.companyRegisterNumber}</dd>

          <dt className="font-medium text-brand-dark">Firmenbuchgericht</dt>
          <dd>{legalProfile.companyRegisterCourt}</dd>

          <dt className="font-medium text-brand-dark">Aufsichtsbehoerde</dt>
          <dd>{legalProfile.supervisoryAuthority}</dd>

          <dt className="font-medium text-brand-dark">Kammerzugehoerigkeit</dt>
          <dd>{legalProfile.chamber}</dd>
        </dl>
      </LegalSection>

      <LegalSection title="Haftungsausschluss">
        <p>
          Die Inhalte dieser Website wurden mit groesster Sorgfalt erstellt. Fuer die
          Richtigkeit, Vollstaendigkeit und Aktualitaet der Inhalte wird jedoch keine
          Gewaehr uebernommen.
        </p>
        <p>
          Diese Website enthaelt moeglicherweise Links zu externen Websites Dritter, auf deren
          Inhalte kein Einfluss besteht. Fuer diese fremden Inhalte wird keine Haftung
          uebernommen. Fuer die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
          oder Betreiber verantwortlich.
        </p>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <p>
          Die auf dieser Website veroeffentlichten Inhalte, Texte und Bilder unterliegen dem
          jeweils geltenden Urheberrecht. Jede Art der Verwertung ausserhalb der Grenzen des
          Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen
          Rechteinhabers.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
