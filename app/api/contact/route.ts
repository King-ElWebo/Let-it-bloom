import { NextRequest, NextResponse } from 'next/server';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ContactRequestBody {
  name: string;
  email: string;
  phone?: string;
  occasion?: string;
  subject?: string;
  message: string;
  privacy: boolean;
  // Honeypot – must be empty
  website?: string;
}

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PLACEHOLDER_KEYS = [
  'DEIN_WEB3FORMS_ACCESS_KEY',
  'YOUR_WEB3FORMS_ACCESS_KEY',
  'change-me',
  '',
];

function isPlaceholderKey(key: string | undefined): boolean {
  if (!key) return true;
  return PLACEHOLDER_KEYS.some((p) => key.trim() === p);
}

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------

export async function POST(req: NextRequest): Promise<NextResponse> {
  // ── 1. Parse body ─────────────────────────────────────────────────────────
  let body: ContactRequestBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Ungültige Anfrage.' },
      { status: 400 },
    );
  }

  // ── 2. Honeypot check ────────────────────────────────────────────────────
  // If the hidden "website" field is filled, silently succeed (bot traffic).
  if (body.website && body.website.trim() !== '') {
    return NextResponse.json({ success: true, message: 'Vielen Dank für Ihre Nachricht!' });
  }

  // ── 3. Server-side validation ────────────────────────────────────────────
  const errors: string[] = [];

  if (!body.name || body.name.trim().length < 2) {
    errors.push('Bitte geben Sie Ihren Namen ein (mindestens 2 Zeichen).');
  }
  if (!body.email || !EMAIL_REGEX.test(body.email.trim())) {
    errors.push('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
  }
  if (!body.message || body.message.trim().length < 10) {
    errors.push('Bitte geben Sie eine Nachricht ein (mindestens 10 Zeichen).');
  }
  if (!body.privacy) {
    errors.push('Bitte stimmen Sie der Datenschutzerklärung zu.');
  }

  if (errors.length > 0) {
    return NextResponse.json(
      { success: false, message: errors[0] },
      { status: 422 },
    );
  }

  // ── 4. Access key check ──────────────────────────────────────────────────
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (isPlaceholderKey(accessKey)) {
    return NextResponse.json(
      {
        success: false,
        message:
          'Das Kontaktformular ist derzeit noch nicht aktiviert. Bitte kontaktieren Sie uns direkt per E-Mail oder Telefon.',
        inactive: true,
      },
      { status: 503 },
    );
  }

  // ── 5. Build subject ──────────────────────────────────────────────────────
  const occasionLabels: Record<string, string> = {
    general: 'Allgemeine Anfrage',
    bouquet: 'Blumenstrauß',
    wedding: 'Hochzeit',
    funeral: 'Trauerfloristik',
    seasonal: 'Saisonale Angebote',
    other: 'Sonstiges',
  };

  const occasionLabel = body.occasion ? occasionLabels[body.occasion] ?? body.occasion : null;
  const emailSubject =
    body.subject?.trim() ||
    (occasionLabel ? `Anfrage: ${occasionLabel}` : 'Neue Anfrage über Let it Bloom Website');

  // ── 6. Send via Web3Forms ─────────────────────────────────────────────────
  const payload: Record<string, string | boolean> = {
    access_key: accessKey as string,
    name: body.name.trim(),
    email: body.email.trim(),
    subject: emailSubject,
    message: body.message.trim(),
    from_name: 'Let it Bloom Website',
    // Web3Forms botcheck – must be false for real users
    botcheck: false,
  };

  if (body.phone?.trim()) {
    payload['phone'] = body.phone.trim();
  }
  if (occasionLabel) {
    payload['occasion'] = occasionLabel;
  }

  let web3Response: Web3FormsResponse;
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });

    web3Response = (await res.json()) as Web3FormsResponse;
  } catch (err) {
    console.error('[contact/route] Web3Forms fetch error:', err);
    return NextResponse.json(
      {
        success: false,
        message:
          'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.',
      },
      { status: 502 },
    );
  }

  if (!web3Response.success) {
    console.error('[contact/route] Web3Forms returned failure:', web3Response);
    return NextResponse.json(
      {
        success: false,
        message:
          'Ihre Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es später erneut.',
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    success: true,
    message: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich bald bei Ihnen.',
  });
}
