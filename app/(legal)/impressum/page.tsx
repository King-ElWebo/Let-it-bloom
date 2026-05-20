import type { Metadata } from "next";
import { LegalPageLayout } from "@/src/components/legal/LegalPageLayout";
import { LegalSection } from "@/src/components/legal/LegalSection";
import { legalProfile } from "@/src/content/legal";

export const metadata: Metadata = {
  title: "Impressum | Let It Bloom",
  description:
    "Impressum mit Anbieterkennzeichnung, Kontaktangaben und Haftungshinweisen für die Website.",
};

export default function ImpressumPage() {
  return (
    <LegalPageLayout
      title="Impressum"
      intro="Angaben gemäß den gesetzlichen Informationspflichten für Websites in Österreich."
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

          <dt className="font-medium text-brand-dark">Aufsichtsbehörde</dt>
          <dd>{legalProfile.supervisoryAuthority}</dd>

          <dt className="font-medium text-brand-dark">Kammerzugehörigkeit</dt>
          <dd>{legalProfile.chamber}</dd>

          <dt className="font-medium text-brand-dark">Berufsrechtliche Vorschriften</dt>
          <dd>
            Gewerbeordnung (GewO) – abrufbar im Rechtsinformationssystem des Bundes (RIS) unter{" "}
            <a
              href="https://www.ris.bka.gv.at"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-turquoise hover:underline transition-colors font-medium"
            >
              www.ris.bka.gv.at
            </a>
          </dd>
        </dl>
      </LegalSection>

      <LegalSection title="Informationspflichten nach dem Mediengesetz">
        <dl className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-x-6 gap-y-3">
          <dt className="font-medium text-brand-dark">Blattlinie</dt>
          <dd>{legalProfile.blattlinie}</dd>
        </dl>
      </LegalSection>

      <LegalSection title="EU-Streitschlichtung & Verbraucherstreitbeilegung">
        <p>
          Angaben zur Online-Streitbeilegung: Verbraucher haben die Möglichkeit,
          Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten:{" "}
          <a
            href="https://ec.europa.eu/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-turquoise hover:underline transition-colors"
          >
            https://ec.europa.eu/odr
          </a>
          .
        </p>
        <p>
          Sie können allfällige Beschwerden auch an die im Impressum angegebene
          E-Mail-Adresse richten. Wir sind nicht bereit oder verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </LegalSection>

      <LegalSection title="Haftungsausschluss">
        <p>
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
          Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine
          Gewähr übernommen.
        </p>
        <p>
          Diese Website enthält möglicherweise Links zu externen Websites Dritter, auf deren
          Inhalte kein Einfluss besteht. Für diese fremden Inhalte wird keine Haftung
          übernommen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
          oder Betreiber verantwortlich.
        </p>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <p>
          Die auf dieser Website veröffentlichten Inhalte, Texte und Bilder unterliegen dem
          jeweils geltenden Urheberrecht. Jede Art der Verwertung außerhalb der Grenzen des
          Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen
          Rechteinhabers.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
