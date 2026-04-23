import type { Metadata } from "next";
import { LegalPageLayout } from "@/src/components/legal/LegalPageLayout";
import { LegalSection } from "@/src/components/legal/LegalSection";
import { legalProfile } from "@/src/content/legal";

export const metadata: Metadata = {
  title: "Cookie-Richtlinie | Let It Bloom",
  description:
    "Informationen zu eingesetzten Cookies, Cookie-Kategorien und Moeglichkeiten zur Einwilligung und Verwaltung.",
};

export default function CookieRichtliniePage() {
  return (
    <LegalPageLayout
      title="Cookie-Richtlinie"
      intro="Hier findest du Informationen darueber, welche Arten von Cookies auf dieser Website eingesetzt werden und wie du deine Einstellungen verwalten kannst."
      lastUpdated={legalProfile.lastUpdated}
    >
      <LegalSection title="1. Was sind Cookies?">
        <p>
          Cookies sind kleine Textdateien, die beim Besuch einer Website auf deinem Endgeraet
          gespeichert werden. Sie enthalten Informationen, die bei spaeteren Besuchen wieder
          ausgelesen werden koennen.
        </p>
      </LegalSection>

      <LegalSection title="2. Welche Arten von Cookies gibt es?">
        <h3 className="text-xl font-serif font-medium text-brand-dark">
          Technisch notwendige Cookies
        </h3>
        <p>
          Diese Cookies sind erforderlich, damit die Website grundlegende Funktionen bereitstellen
          kann, z. B. Seitennavigation oder Sicherheitsfunktionen.
        </p>

        <h3 className="text-xl font-serif font-medium text-brand-dark pt-2">
          Statistik- und Analyse-Cookies
        </h3>
        <p>
          Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.
          Sie werden nur mit entsprechender Einwilligung gesetzt.
        </p>

        <h3 className="text-xl font-serif font-medium text-brand-dark pt-2">
          Marketing-Cookies
        </h3>
        <p>
          Diese Cookies koennen genutzt werden, um Besucher ueber Websites hinweg zu verfolgen und
          personalisierte Werbung auszuspielen. Auch sie werden nur nach Einwilligung gesetzt.
        </p>
      </LegalSection>

      <LegalSection title="3. Rechtsgrundlage">
        <p>
          Technisch notwendige Cookies werden auf Basis berechtigter Interessen gemaess Art. 6
          Abs. 1 lit. f DSGVO verwendet. Alle optionalen Cookies (z. B. Analyse oder Marketing)
          werden nur mit deiner Einwilligung gemaess Art. 6 Abs. 1 lit. a DSGVO gesetzt.
        </p>
      </LegalSection>

      <LegalSection title="4. Cookie-Einstellungen verwalten">
        <p>
          Du kannst deine Cookie-Einstellungen jederzeit im Cookie-Banner bzw. Consent-Tool
          aendern oder widerrufen. Alternativ kannst du Cookies ueber deine Browser-Einstellungen
          loeschen oder blockieren.
        </p>
      </LegalSection>

      <LegalSection title="5. Eingesetzte Tools">
        <p>
          Falls auf dieser Website Analyse- oder Marketingdienste eingesetzt werden (z. B.
          {` ${legalProfile.analyticsTool}`}), findest du weitere Informationen dazu in der
          Datenschutzerklaerung.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
