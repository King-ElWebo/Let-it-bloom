import type { Metadata } from "next";
import { LegalPageLayout } from "@/src/components/legal/LegalPageLayout";
import { LegalSection } from "@/src/components/legal/LegalSection";
import { legalProfile } from "@/src/content/legal";

export const metadata: Metadata = {
  title: "Datenschutz | Let It Bloom",
  description:
    "Datenschutzerklaerung mit Informationen zur Verarbeitung personenbezogener Daten gemaess DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <LegalPageLayout
      title="Datenschutzerklaerung"
      intro="Diese Vorlage informiert ueber Art, Umfang und Zweck der Verarbeitung personenbezogener Daten auf dieser Website. Bitte ersetze alle Platzhalter durch deine realen Angaben."
      lastUpdated={legalProfile.lastUpdated}
    >
      <LegalSection title="1. Verantwortlicher">
        <p>
          Verantwortlich fuer die Datenverarbeitung auf dieser Website ist:
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
          dem oesterreichischen Datenschutzgesetz (DSG) sowie ggf. weiteren nationalen
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
          Informationen in sogenannten Server-Logfiles erfasst. Dazu koennen z. B. gehoeren:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>IP-Adresse (ggf. gekuerzt oder anonymisiert)</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>aufgerufene Seite / Datei</li>
          <li>Referrer-URL</li>
          <li>Browsertyp und Betriebssystem</li>
        </ul>
        <p>
          Die Verarbeitung erfolgt zur Gewaehrleistung von Stabilitaet, Sicherheit und
          Fehleranalyse auf Grundlage berechtigter Interessen gemaess Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies">
        <p>
          Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die auf
          deinem Endgeraet gespeichert werden. Cookies koennen technisch notwendig sein oder
          fuer Analyse- und Marketingzwecke eingesetzt werden.
        </p>
        <p>
          Details zur Art und Steuerung eingesetzter Cookies findest du in der
          Cookie-Richtlinie.
        </p>
      </LegalSection>

      <LegalSection title="6. Webanalyse mit Google Analytics (optional)">
        {legalProfile.analyticsEnabled ? (
          <>
            <p>
              Sofern aktiviert, verwendet diese Website {legalProfile.analyticsTool}, einen
              Webanalysedienst zur Auswertung des Nutzerverhaltens. Die Verarbeitung erfolgt
              nur auf Grundlage deiner Einwilligung gemaess Art. 6 Abs. 1 lit. a DSGVO.
            </p>
            <p>
              Du kannst die Erfassung durch Google Analytics z. B. ueber dieses Browser-Add-on
              deaktivieren: {legalProfile.analyticsOptOutLink}
            </p>
          </>
        ) : (
          <p>
            Dieser Abschnitt ist als Platzhalter vorgesehen. Bitte aktivieren, anpassen oder
            entfernen, je nachdem ob {legalProfile.analyticsTool} tatsaechlich eingesetzt wird.
          </p>
        )}
      </LegalSection>

      <LegalSection title="7. Kontaktformular">
        <p>
          Wenn du uns ueber das Kontaktformular kontaktierst, verarbeiten wir die von dir
          eingegebenen Daten (z. B. Name, E-Mail-Adresse, Nachricht), um deine Anfrage zu
          bearbeiten.
        </p>
        <p>
          Rechtsgrundlage ist je nach Anliegen Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
          Massnahmen) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
          Kommunikationsbearbeitung).
        </p>
      </LegalSection>

      <LegalSection title="8. Speicherdauer">
        <p>{legalProfile.storagePeriodGeneral}</p>
        <p>
          Daten aus Kontaktanfragen werden grundsaetzlich nur so lange gespeichert, wie dies zur
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
          <li>Recht auf Loeschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschraenkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenuebertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          <li>Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
      </LegalSection>

      <LegalSection title="11. Beschwerderecht bei einer Aufsichtsbehoerde">
        <p>
          Wenn du der Ansicht bist, dass die Verarbeitung deiner Daten gegen Datenschutzrecht
          verstoesst, hast du das Recht auf Beschwerde bei einer Datenschutzaufsichtsbehoerde.
          In Oesterreich ist dies insbesondere die Datenschutzbehoerde.
        </p>
      </LegalSection>

      <LegalSection title="12. Aenderungen dieser Datenschutzerklaerung">
        <p>
          Wir behalten uns vor, diese Datenschutzerklaerung anzupassen, damit sie stets den
          aktuellen rechtlichen Anforderungen entspricht oder um Aenderungen unserer Leistungen in
          der Datenschutzerklaerung umzusetzen.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
