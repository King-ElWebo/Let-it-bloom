import type { Metadata } from "next";
import { LegalPageLayout } from "@/src/components/legal/LegalPageLayout";
import { LegalSection } from "@/src/components/legal/LegalSection";
import { legalProfile } from "@/src/content/legal";

export const metadata: Metadata = {
  title: "Datenschutz | Let It Bloom",
  description:
    "Datenschutzerklärung mit Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <LegalPageLayout
      title="Datenschutzerklärung"
      intro="Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten auf dieser Website gemäß den Vorgaben der Datenschutz-Grundverordnung (DSGVO)."
      lastUpdated={legalProfile.lastUpdated}
    >
      <LegalSection title="1. Verantwortlicher">
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          <br />
          {legalProfile.companyName}
          <br />
          {legalProfile.ownerName}
          <br />
          {legalProfile.street}, {legalProfile.postalCode} {legalProfile.city}
          <br />
          Telefon: {legalProfile.phone}
          <br />
          E-Mail: {legalProfile.email}
        </p>
        <p>Datenschutz-Kontakt (falls abweichend): {legalProfile.dataProtectionContact}</p>
      </LegalSection>

      <LegalSection title="2. Allgemeine Hinweise zur Datenverarbeitung">
        <p>
          Wir verarbeiten personenbezogene Daten nur im Einklang mit den anwendbaren
          Datenschutzvorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO),
          dem österreichischen Datenschutzgesetz (DSG) sowie ggf. weiteren nationalen
          Regelungen.
        </p>
      </LegalSection>

      <LegalSection title="3. Hosting">
        <p>
          Diese Website wird bei folgendem Anbieter gehostet: {legalProfile.hostingProvider}.
          Der Serverstandort befindet sich in: {legalProfile.hostingLocation}.
        </p>
        <p>
          Mit dem Hosting-Anbieter besteht ein Vertrag zur Auftragsverarbeitung, sofern dies
          rechtlich erforderlich ist.
        </p>
      </LegalSection>

      <LegalSection title="4. Server-Logfiles">
        <p>
          Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch
          Informationen in sogenannten Server-Logfiles erfasst. Dazu können z. B. gehören:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>IP-Adresse (ggf. gekürzt oder anonymisiert)</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>aufgerufene Seite / Datei</li>
          <li>Referrer-URL</li>
          <li>Browsertyp und Betriebssystem</li>
        </ul>
        <p>
          Die Verarbeitung erfolgt zur Gewährleistung von Stabilität, Sicherheit und
          Fehleranalyse auf Grundlage berechtigter Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies &amp; Lokaler Speicher">
        <p>
          Unsere Website ist darauf ausgelegt, Ihre Privatsphäre bestmöglich zu schützen. Daher verwenden wir 
          <strong> keine tracking-, profiling- oder werbebezogenen Cookies</strong>.
        </p>
        <p>
          Wir nutzen lediglich den lokalen Speicher Ihres Browsers (LocalStorage), um Ihre getroffene Cookie- bzw. Datenschutz-Entscheidung 
          zu speichern (unter dem Schlüssel <code>letitbloom_cookie_consent_v1</code>). Dieser Speicher ist technisch 
          notwendig (berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO), damit wir Ihnen den Cookie-Banner nicht bei 
          jedem einzelnen Seitenaufruf erneut anzeigen müssen.
        </p>
        <p>
          Details zur Art und Steuerung eingesetzter Speicheroptionen finden Sie in der Cookie-Richtlinie.
        </p>
      </LegalSection>

      <LegalSection title="6. Webanalyse (Vercel Analytics &amp; Speed Insights)">
        {legalProfile.analyticsEnabled ? (
          <>
            <p>
              Diese Website verwendet <strong>Vercel Analytics</strong> und <strong>Vercel Speed Insights</strong>, 
              Webanalysedienste des Hosting-Anbieters Vercel Inc. (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA), 
              zur statistischen Auswertung der Besucherzugriffe und zur Überwachung der technischen Performance (Ladezeiten, Stabilität).
            </p>
            <p>
              Beide Dienste arbeiten standardmäßig vollkommen datenschutzfreundlich und <strong>cookieless</strong>. 
              Es werden keine Tracking-Cookies auf Ihrem Endgerät gespeichert und es erfolgt kein systemübergreifendes Tracking. 
              Die erhobenen Zugriffs- und Telemetriedaten (z. B. aufgerufene Seiten, Browsertyp, Ladezeit-Metriken) werden in 
              aggregierter und anonymisierter Form verarbeitet. IP-Adressen werden unmittelbar bei der Erfassung auf Netzwerkebene 
              anonymisiert, sodass keine Rückschlüsse auf Ihre Person möglich sind.
            </p>
            <p>
              Obwohl diese Analyse-Dienste ohne Speicherung personenbezogener Daten auskommen, laden wir sie auf dieser Website 
              erst nach Ihrer freiwilligen Zustimmung über unseren Cookie- bzw. Consent-Banner (Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO). 
              Sie können diese Einwilligung jederzeit mit Wirkung für die Zukunft über die Cookie-Einstellungen widerrufen.
            </p>
          </>
        ) : (
          <p>
            Der Webanalyse-Dienst ist aktuell deaktiviert.
          </p>
        )}
      </LegalSection>

      <LegalSection title="7. Kontaktformular &amp; Datenübermittlung an Web3Forms">
        <p>
          Wenn Sie uns über das Kontaktformular kontaktieren, verarbeiten wir die von Ihnen
          eingegebenen Daten (z. B. Name, E-Mail-Adresse, Telefonnummer sowie Ihre Nachricht) ausschließlich,
          um Ihre Anfrage zu bearbeiten.
        </p>
        <p>
          Zur technischen Übertragung und Zustellung dieser Formularanfragen nutzen wir den Dienst <strong>Web3Forms</strong> 
          (bereitgestellt von Lintel Technologies Private Limited, Hyderabad, Indien). Web3Forms dient als reiner technischer 
          Zustelldienst (Auftragsverarbeiter), welcher die im Formular eingegebenen Daten entgegennimmt und sicher als E-Mail 
          an unser Postfach weiterleitet. Die Daten werden von Web3Forms nicht dauerhaft gespeichert, nicht für eigene Zwecke 
          analysiert und nicht an Dritte weitergegeben.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) oder zur Durchführung 
          vorvertraglicher Maßnahmen bzw. Erfüllung eines Vertrages (Art. 6 Abs. 1 lit. b DSGVO).
        </p>
        <p>
          Weitere Details zum Datenschutz des Dienstleisters finden Sie in der Datenschutzerklärung von Web3Forms unter:{" "}
          <a
            href="https://web3forms.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-turquoise hover:underline transition-colors font-medium"
          >
            https://web3forms.com/privacy
          </a>.
        </p>
      </LegalSection>

      <LegalSection title="8. Speicherdauer">
        <p>{legalProfile.storagePeriodGeneral}</p>
        <p>
          Daten aus Kontaktanfragen werden grundsätzlich nur so lange gespeichert, wie dies zur
          Bearbeitung erforderlich ist, sofern keine gesetzlichen Aufbewahrungspflichten
          entgegenstehen.
        </p>
      </LegalSection>

      <LegalSection title="9. Weitergabe von Daten">
        <p>
          Eine Weitergabe personenbezogener Daten erfolgt nur, wenn dies gesetzlich erlaubt ist,
          zur Vertragserfuellung erforderlich ist, eine Einwilligung vorliegt oder wir zur
          Weitergabe verpflichtet sind.
        </p>
      </LegalSection>

      <LegalSection title="10. Rechte betroffener Personen">
        <p>Du hast im Rahmen der DSGVO insbesondere folgende Rechte:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          <li>Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
      </LegalSection>

      <LegalSection title="11. Beschwerderecht bei einer Aufsichtsbehörde">
        <p>
          Wenn du der Ansicht bist, dass die Verarbeitung deiner Daten gegen Datenschutzrecht
          verstößt, hast du das Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde.
          In Österreich ist dies insbesondere die Datenschutzbehörde.
        </p>
      </LegalSection>

      <LegalSection title="12. Änderungen dieser Datenschutzerklärung">
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
          aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in
          der Datenschutzerklärung umzusetzen.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
