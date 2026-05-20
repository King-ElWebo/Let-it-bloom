import type { Metadata } from "next";
import { LegalPageLayout } from "@/src/components/legal/LegalPageLayout";
import { LegalSection } from "@/src/components/legal/LegalSection";
import { legalProfile } from "@/src/content/legal";

export const metadata: Metadata = {
  title: "Cookie-Richtlinie | Let It Bloom",
  description:
    "Informationen zu eingesetzten Cookies, Cookie-Kategorien und Möglichkeiten zur Einwilligung und Verwaltung.",
};

export default function CookieRichtliniePage() {
  return (
    <LegalPageLayout
      title="Cookie-Richtlinie"
      intro="Hier finden Sie detaillierte Informationen darüber, dass diese Website auf Datenschutz ausgelegt ist, keine Tracking-Cookies einsetzt und wie Sie Ihre Datenschutzeinstellungen verwalten können."
      lastUpdated={legalProfile.lastUpdated}
    >
      <LegalSection title="1. Was sind Cookies?">
        <p>
          Cookies sind kleine Textdateien, die beim Besuch einer Website auf deinem Endgerät
          gespeichert werden. Sie enthalten Informationen, die bei späteren Besuchen wieder
          ausgelesen werden können.
        </p>
      </LegalSection>

      <LegalSection title="2. Welche Arten von Speicherung nutzen wir?">
        <h3 className="text-xl font-serif font-medium text-brand-dark">
          Technisch notwendiger lokaler Speicher
        </h3>
        <p>
          Diese Website verwendet <strong>keine Cookies</strong> im herkömmlichen Sinne. 
          Wir speichern lediglich Ihre getroffene Cookie- bzw. Datenschutz-Entscheidung direkt im lokalen Speicher Ihres Browsers 
          (<code>LocalStorage</code> unter dem Schlüssel <code>letitbloom_cookie_consent_v1</code>). Dies ist technisch erforderlich, 
          damit der Consent-Banner nicht bei jedem einzelnen Seitenaufruf erneut erscheint.
        </p>

        <h3 className="text-xl font-serif font-medium text-brand-dark pt-2">
          Statistik- und Analyse-Tools (cookieless)
        </h3>
        <p>
          Für unsere Webanalyse nutzen wir Vercel Analytics und Vercel Speed Insights. Beide Dienste arbeiten standardmäßig 
          vollkommen <strong>cookieless</strong>. Es werden keine Tracker auf Ihrem Endgerät abgelegt. Die Erfassung erfolgt 
          rein auf aggregierter Basis, ohne dass Rückschlüsse auf Ihre Person möglich sind. Die Ausführung wird erst nach Ihrer 
          freiwilligen Aktivierung („Statistik &amp; Analyse“) gestartet.
        </p>

        <h3 className="text-xl font-serif font-medium text-brand-dark pt-2">
          Marketing- und Werbe-Cookies
        </h3>
        <p>
          Wir schalten keine Werbung und betreiben kein Retargeting. Diese Website verwendet daher 
          <strong> absolut keine Marketing-, Werbe- oder Profiling-Cookies</strong>.
        </p>
      </LegalSection>

      <LegalSection title="3. Rechtsgrundlage">
        <p>
          Technisch notwendige Speicherzugriffe erfolgen auf Basis berechtigter Interessen gemäß Art. 6
          Abs. 1 lit. f DSGVO. Die freiwillige Auswertung von Nutzungs- und Telemetriedaten (Statistik &amp; Analyse)
          erfolgt ausschließlich mit Ihrer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
        </p>
      </LegalSection>

      <LegalSection title="4. Einstellungen verwalten">
        <p>
          Sie können Ihre Datenschutzeinstellungen jederzeit im Cookie-Banner bzw. Consent-Tool
          ändern oder widerrufen. Alternativ können Sie Ihren LocalStorage über Ihre Browser-Einstellungen
          leeren.
        </p>
      </LegalSection>

      <LegalSection title="5. Eingesetzte Tools">
        <p>
          Wir setzen auf dieser Website die datenschutzfreundlichen Webanalysedienste Vercel Analytics und Vercel Speed Insights ein. 
          Diese Dienste speichern keine Cookies auf Ihrem Endgerät. Weitere Informationen zur Funktionsweise und zum Datenschutz 
          dieser Dienste finden Sie in unserer Datenschutzerklärung.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
