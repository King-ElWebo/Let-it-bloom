'use client';

import Link from 'next/link';
import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import {
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Truck,
  Copy,
  Check,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface FormState {
  name: string;
  email: string;
  phone: string;
  occasion: string;
  subject: string;
  message: string;
  privacy: boolean;
  // Honeypot – hidden from real users, filled only by bots
  website: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
  privacy?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error' | 'inactive';

type ContactApiResponse = {
  success: boolean;
  message: string;
  inactive?: boolean;
};

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_API_ENDPOINT = '/api/contact';
const SUCCESS_MESSAGE = 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.';
const ERROR_MESSAGE =
  'Leider konnte Ihre Nachricht nicht gesendet werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.';
const INACTIVE_MESSAGE =
  'Das Kontaktformular ist aktuell nicht verfügbar. Bitte kontaktieren Sie uns direkt per E-Mail oder Telefon.';

const OCCASION_OPTIONS = [
  { value: '', label: 'Anlass auswählen (optional)' },
  { value: 'general', label: 'Allgemeine Anfrage' },
  { value: 'bouquet', label: 'Blumenstrauß' },
  { value: 'wedding', label: 'Hochzeit' },
  { value: 'funeral', label: 'Trauerfloristik' },
  { value: 'seasonal', label: 'Saisonale Angebote' },
  { value: 'other', label: 'Sonstiges' },
];

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  occasion: '',
  subject: '',
  message: '',
  privacy: false,
  website: '',
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function Contact() {
  // ── Copy-to-clipboard state ───────────────────────────────────────────────
  const [copied, setCopied] = useState<'phone' | 'email' | null>(null);

  const copyToClipboard = async (value: string, type: 'phone' | 'email') => {
    await navigator.clipboard.writeText(value);
    setCopied(type);
    window.setTimeout(() => setCopied(null), 1600);
  };

  // ── Form state ──────────────────────────────────────────────────────────
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [serverMessage, setServerMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  // ── Field change handlers ────────────────────────────────────────────────
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    // Clear error on change
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  // ── Client-side validation ─────────────────────────────────────────────
  const validate = (): boolean => {
    const errors: FieldErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      errors.name = 'Bitte geben Sie Ihren Namen ein (mindestens 2 Zeichen).';
    }
    if (!form.email.trim() || !EMAIL_REGEX.test(form.email.trim())) {
      errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      errors.message = 'Bitte geben Sie eine Nachricht ein (mindestens 10 Zeichen).';
    }
    if (!form.privacy) {
      errors.privacy = 'Bitte stimmen Sie der Datenschutzerklärung zu.';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // ── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitStatus('loading');
    setServerMessage('');

    try {
      const res = await fetch(CONTACT_API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          occasion: form.occasion.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          privacyAccepted: form.privacy,
          website: form.website, // Honeypot
        }),
      });

      const data = (await res.json()) as ContactApiResponse;

      if (res.ok && data.success) {
        setSubmitStatus('success');
        setServerMessage(data.message || SUCCESS_MESSAGE);
        setForm(INITIAL_FORM);
        setFieldErrors({});
      } else {
        if (data.inactive) {
          setSubmitStatus('inactive');
        } else {
          setSubmitStatus('error');
        }
        setServerMessage(data.message || ERROR_MESSAGE);
      }
    } catch {
      setSubmitStatus('error');
      setServerMessage(ERROR_MESSAGE);
    }
  };

  // ── Input / textarea base classes ───────────────────────────────────────
  const inputClass = (hasError?: string) =>
    `w-full px-5 py-4 rounded-full bg-white/60 border transition-all focus:outline-none focus:ring-2 focus:bg-white ${hasError
      ? 'border-red-400/60 focus:ring-red-300/50'
      : 'border-brand-turquoise/20 focus:ring-brand-turquoise/50'
    }`;

  const textareaClass = (hasError?: string) =>
    `w-full px-5 py-4 rounded-3xl bg-white/60 border transition-all focus:outline-none focus:ring-2 focus:bg-white resize-none ${hasError
      ? 'border-red-400/60 focus:ring-red-300/50'
      : 'border-brand-turquoise/20 focus:ring-brand-turquoise/50'
    }`;

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <section id="kontakt" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-turquoise/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blush/20 shape-blob blur-2xl translate-y-1/4 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 xl:gap-24">

          {/* Left column: contact info */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-brand-dark mb-6 sm:mb-8">
              Kontakt &amp; Service
            </h2>
            <p className="text-base sm:text-lg text-brand-dark/90 leading-relaxed mb-8 sm:mb-10 md:mb-12">
              Haben Sie Fragen, Wünsche oder möchten Sie eine Bestellung aufgeben? Ich bin gerne für Sie da.
            </p>

            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0 border border-brand-turquoise/20">
                  <Phone className="text-brand-turquoise w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark text-base sm:text-lg mb-1">Telefon</h3>
                  <div className="flex items-center gap-2">
                    <a href="tel:+436642303427" className="text-brand-dark/85 hover:text-brand-turquoise transition-colors">
                      +43 664 2303427
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('+43 664 2303427', 'phone')}
                      className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center text-brand-dark/60 hover:bg-brand-turquoise hover:text-white transition-colors border border-brand-turquoise/20"
                      aria-label="Telefonnummer kopieren"
                    >
                      {copied === 'phone' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0 border border-brand-turquoise/20">
                  <Mail className="text-brand-turquoise w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark text-base sm:text-lg mb-1">E-Mail</h3>
                  <div className="flex items-center gap-2">
                    <a href="mailto:wgruber@outlook.at" className="text-brand-dark/85 hover:text-brand-turquoise transition-colors">
                      wgruber@outlook.at
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('wgruber@outlook.at', 'email')}
                      className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center text-brand-dark/60 hover:bg-brand-turquoise hover:text-white transition-colors border border-brand-turquoise/20"
                      aria-label="E-Mail-Adresse kopieren"
                    >
                      {copied === 'email' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0 border border-brand-turquoise/20">
                  <Truck className="text-brand-turquoise w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark text-base sm:text-lg mb-1">Freitag &amp; Samstag</h3>
                  <p className="text-brand-dark/85">
                    Lieferung in Langenzersdorf u.U. kostenlos<br />sowie Abholung möglich
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0 border border-brand-turquoise/20">
                  <Clock className="text-brand-turquoise w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark text-base sm:text-lg mb-1">Sonntag – Mittwoch</h3>
                  <p className="text-brand-dark/85">Lieferung und Abholung nach Vereinbarung möglich</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10 sm:mt-12 flex gap-3 sm:gap-4">
              <a
                href="https://www.instagram.com/_letitbloom_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-dark hover:bg-brand-turquoise hover:text-white transition-colors border border-brand-turquoise/20"
                aria-label="Instagram in neuem Tab öffnen"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/p/Blumen-Atelier-Let-It-Bloom-61572277304454/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-dark hover:bg-brand-turquoise hover:text-white transition-colors border border-brand-turquoise/20"
                aria-label="Facebook in neuem Tab öffnen"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right column: form */}
          <div className="bg-brand-cream rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-14 shadow-sm relative">
            {/* Decorative corner */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-turquoise/20 rounded-full -z-10" />

            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-brand-dark mb-6 sm:mb-8">
              Nachricht senden
            </h3>

            {/* Success state */}
            {submitStatus === 'success' && (
              <div className="flex flex-col items-center text-center py-10 gap-4">
                <CheckCircle2 className="w-14 h-14 text-brand-turquoise" strokeWidth={1.5} />
                <p className="text-brand-dark font-medium text-lg">{serverMessage}</p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-2 text-sm text-brand-turquoise hover:underline"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            )}

            {/* Inactive / Error banner */}
            {(submitStatus === 'inactive' || submitStatus === 'error') && (
              <div
                className={`flex items-start gap-3 rounded-2xl p-4 mb-6 text-sm ${submitStatus === 'inactive'
                  ? 'bg-amber-50 border border-amber-200 text-amber-800'
                  : 'bg-red-50 border border-red-200 text-red-700'
                  }`}
                role="alert"
              >
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <p>{serverMessage}</p>
                  {submitStatus === 'inactive' && (
                    <p className="mt-2 font-medium">
                      📞{' '}
                      <a href="tel:+436642303427" className="underline hover:no-underline">
                        +43 664 2303427
                      </a>
                      &nbsp;·&nbsp;✉️{' '}
                      <a href="mailto:wgruber@outlook.at" className="underline hover:no-underline">
                        wgruber@outlook.at
                      </a>
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Form (hidden on success) */}
            {submitStatus !== 'success' && (
              <form
                ref={formRef}
                className="space-y-5 sm:space-y-6"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Honeypot – visually hidden, accessible-hidden */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
                  <label htmlFor="website-hp">Website leer lassen</label>
                  <input
                    type="text"
                    id="website-hp"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name (required) */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-brand-dark/80 mb-2">
                    Name <span className="text-brand-turquoise" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass(fieldErrors.name)}
                    placeholder="Ihr Name"
                    autoComplete="name"
                    required
                  />
                  {fieldErrors.name && (
                    <p className="mt-1.5 text-xs text-red-600" role="alert">{fieldErrors.name}</p>
                  )}
                </div>

                {/* Email (required) */}
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-brand-dark/80 mb-2">
                    E-Mail <span className="text-brand-turquoise" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass(fieldErrors.email)}
                    placeholder="ihre.email@beispiel.at"
                    autoComplete="email"
                    required
                  />
                  {fieldErrors.email && (
                    <p className="mt-1.5 text-xs text-red-600" role="alert">{fieldErrors.email}</p>
                  )}
                </div>

                {/* Phone (optional) */}
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-brand-dark/80 mb-2">
                    Telefon <span className="text-brand-dark/40 text-xs font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass()}
                    placeholder="+43 664 …"
                    autoComplete="tel"
                  />
                </div>

                {/* Occasion (optional) */}
                <div>
                  <label htmlFor="contact-occasion" className="block text-sm font-medium text-brand-dark/80 mb-2">
                    Anlass <span className="text-brand-dark/40 text-xs font-normal">(optional)</span>
                  </label>
                  <div className="relative">
                    <select
                      id="contact-occasion"
                      name="occasion"
                      value={form.occasion}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-full bg-white/60 border border-brand-turquoise/20 focus:outline-none focus:ring-2 focus:ring-brand-turquoise/50 focus:bg-white transition-all appearance-none pr-10 text-brand-dark"
                    >
                      {OCCASION_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {/* Custom arrow */}
                    <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-brand-dark/40">
                      ▾
                    </span>
                  </div>
                </div>

                {/* Subject (optional) */}
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-brand-dark/80 mb-2">
                    Betreff <span className="text-brand-dark/40 text-xs font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass()}
                    placeholder="Worum geht es?"
                  />
                </div>

                {/* Message (required) */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-brand-dark/80 mb-2">
                    Nachricht <span className="text-brand-turquoise" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={textareaClass(fieldErrors.message)}
                    placeholder="Wie kann ich Ihnen helfen?"
                    required
                  />
                  {fieldErrors.message && (
                    <p className="mt-1.5 text-xs text-red-600" role="alert">{fieldErrors.message}</p>
                  )}
                </div>

                {/* Privacy checkbox */}
                <div>
                  <label
                    htmlFor="contact-privacy"
                    className={`flex items-start gap-3 cursor-pointer group ${fieldErrors.privacy ? 'text-red-700' : 'text-brand-dark/70'}`}
                  >
                    <div className="relative flex-shrink-0 mt-0.5">
                      <input
                        type="checkbox"
                        id="contact-privacy"
                        name="privacy"
                        checked={form.privacy}
                        onChange={handleChange}
                        className="sr-only peer"
                        required
                      />
                      {/* Custom checkbox UI */}
                      <div
                        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${form.privacy
                            ? 'bg-brand-turquoise border-brand-turquoise'
                            : fieldErrors.privacy
                              ? 'border-red-400 bg-white/60'
                              : 'border-brand-turquoise/40 bg-white/60 group-hover:border-brand-turquoise'
                          }`}
                      >
                        {form.privacy && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                      </div>
                    </div>
                    <span className="text-sm leading-snug">
                      Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden.
                      Weitere Informationen finden Sie in unserer{' '}
                      <Link href="/datenschutz" className="text-brand-turquoise hover:underline">
                        Datenschutzerklärung
                      </Link>
                      .{' '}
                      <span className="text-brand-turquoise" aria-hidden="true">*</span>
                    </span>
                  </label>
                  {fieldErrors.privacy && (
                    <p className="mt-1.5 text-xs text-red-600 pl-8" role="alert">{fieldErrors.privacy}</p>
                  )}
                </div>

                {/* Error banner inside form (non-inactive errors) */}
                {submitStatus === 'error' && (
                  <div className="flex items-start gap-3 rounded-2xl p-4 bg-red-50 border border-red-200 text-red-700 text-sm" role="alert">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p>{serverMessage}</p>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  id="contact-submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full py-4 bg-brand-turquoise text-white font-medium rounded-full hover:bg-brand-turquoise/90 transition-all shadow-sm hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                >
                  {submitStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Nachricht absenden
                    </>
                  )}
                </button>

                <p className="text-xs text-brand-dark/40 text-center">
                  Mit <span className="text-brand-turquoise">*</span> markierte Felder sind Pflichtfelder.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
