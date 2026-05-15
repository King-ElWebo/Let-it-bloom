import { NextRequest, NextResponse } from 'next/server';

type ContactRequestBody = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  occasion?: unknown;
  subject?: unknown;
  message?: unknown;
  privacy?: unknown;
  privacyAccepted?: unknown;
  website?: unknown;
  botcheck?: unknown;
};

type ContactResponseBody = {
  success: boolean;
  message: string;
  inactive?: boolean;
};

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const SUCCESS_MESSAGE = 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.';
const ERROR_MESSAGE =
  'Leider konnte Ihre Nachricht nicht gesendet werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.';
const INACTIVE_MESSAGE =
  'Das Kontaktformular ist aktuell nicht verfügbar. Bitte kontaktieren Sie uns direkt per E-Mail oder Telefon.';
const WEB3FORMS_SUBJECT = 'Neue Anfrage über Let It Bloom Website';

const PLACEHOLDER_KEYS = new Set([
  'DEIN_WEB3FORMS_ACCESS_KEY',
  'dein_web3forms_access_key',
  'YOUR_WEB3FORMS_ACCESS_KEY',
  'change-me',
  '',
]);

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function asBoolean(value: unknown): boolean {
  return value === true || value === 'true' || value === 'on';
}

function json(
  body: ContactResponseBody,
  init?: ResponseInit,
): NextResponse<ContactResponseBody> {
  return NextResponse.json(body, init);
}

export async function POST(req: NextRequest): Promise<NextResponse<ContactResponseBody>> {
  let body: ContactRequestBody;

  try {
    body = (await req.json()) as ContactRequestBody;
  } catch {
    return json({ success: false, message: 'Ungültige Anfrage.' }, { status: 400 });
  }

  const website = asString(body.website);
  const botcheck = asString(body.botcheck);

  if (website || botcheck) {
    return json({ success: true, message: SUCCESS_MESSAGE });
  }

  const name = asString(body.name);
  const email = asString(body.email);
  const phone = asString(body.phone);
  const occasion = asString(body.occasion);
  const submittedSubject = asString(body.subject);
  const message = asString(body.message);
  const privacyAccepted = asBoolean(body.privacyAccepted) || asBoolean(body.privacy);

  if (name.length < 2) {
    return json({ success: false, message: 'Bitte geben Sie Ihren Namen ein.' }, { status: 422 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return json(
      { success: false, message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
      { status: 422 },
    );
  }

  if (message.length < 10) {
    return json({ success: false, message: 'Bitte geben Sie eine Nachricht ein.' }, { status: 422 });
  }

  if (!privacyAccepted) {
    return json(
      { success: false, message: 'Bitte stimmen Sie der Datenschutzerklärung zu.' },
      { status: 422 },
    );
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();

  if (!accessKey || PLACEHOLDER_KEYS.has(accessKey)) {
    return json({ success: false, message: INACTIVE_MESSAGE, inactive: true }, { status: 503 });
  }

  const web3FormsPayload = new FormData();
  web3FormsPayload.append('access_key', accessKey);
  web3FormsPayload.append('name', name);
  web3FormsPayload.append('email', email);
  web3FormsPayload.append('subject', WEB3FORMS_SUBJECT);
  web3FormsPayload.append('message', message);
  web3FormsPayload.append('from_name', 'Let It Bloom Website');
  web3FormsPayload.append('botcheck', '');
  web3FormsPayload.append('Datenschutz akzeptiert', 'Ja');

  if (phone) {
    web3FormsPayload.append('phone', phone);
  }

  if (submittedSubject) {
    web3FormsPayload.append('Betreff aus Formular', submittedSubject);
  }

  if (occasion) {
    web3FormsPayload.append('Anlass', occasion);
  }

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: web3FormsPayload,
    });

    const result = (await response.json()) as Web3FormsResponse;

    if (response.status === 401 || response.status === 403) {
      console.error(`[contact] Web3Forms rejected the access key with status ${response.status}.`);
      return json({ success: false, message: INACTIVE_MESSAGE, inactive: true }, { status: 503 });
    }

    if (!response.ok || result.success !== true) {
      console.error(`[contact] Web3Forms request failed with status ${response.status}.`);
      return json({ success: false, message: ERROR_MESSAGE }, { status: 502 });
    }
  } catch {
    console.error('[contact] Web3Forms request could not be completed.');
    return json({ success: false, message: ERROR_MESSAGE }, { status: 502 });
  }

  return json({ success: true, message: SUCCESS_MESSAGE });
}
