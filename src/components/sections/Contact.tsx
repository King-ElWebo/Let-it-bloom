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
// Constants
// ---------------------------------------------------------------------------

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Using direct Web3Forms submission as requested to restore functionality
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = 'db6e1604-e8e7-460e-88f3-004b6878dd98';

const SUCCESS_MESSAGE = 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.';
const ERROR_MESSAGE =
  'Leider konnte Ihre Nachricht nicht gesendet werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.';

const OCCASION_OPTIONS = [
  { value: '', label: 'Anlass auswählen (optional)' },
  { value: 'general', label: 'Allgemeine Anfrage' },
  { value: 'bouquet', label: 'Blumenstrauß' },
  { value: 'wedding', label: 'Hochzeit' },
  { value: 'funeral', label: 'Trauerfloristik' },
  { value: 'seasonal', label: 'Saisonale Angebote' },
  { value: 'other', label: 'Sonstiges' },
];

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
  website: string; // Honeypot
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
  privacy?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

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
  const [copied, setCopied] = useState<'phone' | 'email' | null>(null);
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [serverMessage, setServerMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const copyToClipboard = async (value: string, type: 'phone' | 'email') => {
    await navigator.clipboard.writeText(value);
    setCopied(type);
    window.setTimeout(() => setCopied(null), 1600);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
  };

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    if (!validate()) return;

    setSubmitStatus('loading');
    setServerMessage('');

    // Honeypot check
    if (form.website.trim()) {
      setSubmitStatus('success');
      setServerMessage(SUCCESS_MESSAGE);
      setForm(INITIAL_FORM);
      setFieldErrors({});
      return;
    }

    try {
      // Use exact Web3Forms approach
      const formData = new FormData(formElement);
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: json,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setServerMessage(SUCCESS_MESSAGE);
        setForm(INITIAL_FORM);
        setFieldErrors({});
        formElement.reset(); // Reset the form natively
      } else {
        setSubmitStatus('error');
        setServerMessage(data.message || ERROR_MESSAGE);
      }
    } catch (error) {
      console.error('Web3Forms submission failed:', error);
      setSubmitStatus('error');
      setServerMessage(ERROR_MESSAGE);
    }
  };

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

  return (
    <section id="kontakt" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white relative overflow-hidden">
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
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0 border border-brand-turquoise/20">
                  <Phone className="text-brand-turquoise w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark text-base sm:text-lg mb-1">Telefon</h3>
                  <div className="flex items-center gap-2">
                    <a href="tel:+436642303427" className="text-brand-dark hover:text-brand-turquoise transition-colors font-medium" aria-label="Telefonisch kontaktieren: +43 664 2303427">
                      +43 664 2303427
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('+43 664 2303427', 'phone')}
                      className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center text-brand-dark/70 hover:bg-brand-turquoise hover:text-white transition-colors border border-brand-turquoise/20 cursor-pointer"
                      aria-label="Telefonnummer in die Zwischenablage kopieren"
                    >
                      {copied === 'phone' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0 border border-brand-turquoise/20">
                  <Mail className="text-brand-turquoise w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark text-base sm:text-lg mb-1">E-Mail</h3>
                  <div className="flex items-center gap-2">
                    <a href="mailto:wgruber@outlook.at" className="text-brand-dark hover:text-brand-turquoise transition-colors font-medium" aria-label="E-Mail an wgruber@outlook.at senden">
                      wgruber@outlook.at
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('wgruber@outlook.at', 'email')}
                      className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center text-brand-dark/70 hover:bg-brand-turquoise hover:text-white transition-colors border border-brand-turquoise/20 cursor-pointer"
                      aria-label="E-Mail-Adresse in die Zwischenablage kopieren"
                    >
                      {copied === 'email' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0 border border-brand-turquoise/20">
                  <Truck className="text-brand-turquoise w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark text-base sm:text-lg mb-1">Montag &amp; Sonntag</h3>
                  <p className="text-brand-dark">
                    Lieferung in Langenzersdorf und Umgebung kostenlos<br />sowie Abholung möglich
                  </p>
                </div>
              </div>

              {/* <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0 border border-brand-turquoise/20">
                  <Clock className="text-brand-turquoise w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark text-base sm:text-lg mb-1">Sonntag – Mittwoch</h3>
                  <p className="text-brand-dark/85">Lieferung und Abholung nach Vereinbarung möglich</p>
                </div>
              </div> */}
            </div>

            <div className="mt-10 sm:mt-12 flex gap-3 sm:gap-4">
              <a href="https://www.instagram.com/_letitbloom_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-dark hover:bg-brand-turquoise hover:text-white transition-colors border border-brand-turquoise/20" aria-label="Let It Bloom auf Instagram besuchen">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/p/Blumen-Atelier-Let-It-Bloom-61572277304454/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-dark hover:bg-brand-turquoise hover:text-white transition-colors border border-brand-turquoise/20" aria-label="Let It Bloom auf Facebook besuchen">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right column: form */}
          <div className="bg-brand-cream rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-8 md:p-10 lg:p-14 shadow-sm relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-turquoise/20 rounded-full -z-10" />
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-brand-dark mb-6 sm:mb-8">
              Nachricht senden
            </h3>

            {submitStatus === 'success' && (
              <div className="flex flex-col items-center text-center py-10 gap-4">
                <CheckCircle2 className="w-14 h-14 text-brand-turquoise" strokeWidth={1.5} />
                <p className="text-brand-dark font-medium text-lg">{serverMessage}</p>
                <button type="button" onClick={() => setSubmitStatus('idle')} className="mt-2 text-sm text-brand-turquoise hover:underline cursor-pointer">
                  Weitere Nachricht senden
                </button>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-start gap-3 rounded-2xl p-4 mb-6 text-sm bg-red-50 border border-red-200 text-red-700" role="alert">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p>{serverMessage}</p>
              </div>
            )}

            {submitStatus !== 'success' && (
              <form ref={formRef} className="space-y-5 sm:space-y-6" onSubmit={handleSubmit} noValidate>
                {/* Honeypot */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
                  <input type="text" name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" aria-label="Website Honeypot" />
                </div>

                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-brand-dark/80 mb-2">Name *</label>
                  <input type="text" id="contact-name" name="name" value={form.name} onChange={handleChange} className={inputClass(fieldErrors.name)} placeholder="Ihr Name" required />
                  {fieldErrors.name && <p className="mt-1.5 text-xs text-red-600">{fieldErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-brand-dark/80 mb-2">E-Mail *</label>
                  <input type="email" id="contact-email" name="email" value={form.email} onChange={handleChange} className={inputClass(fieldErrors.email)} placeholder="ihre.email@beispiel.at" required />
                  {fieldErrors.email && <p className="mt-1.5 text-xs text-red-600">{fieldErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-brand-dark/80 mb-2">Telefon (optional)</label>
                  <input type="tel" id="contact-phone" name="phone" value={form.phone} onChange={handleChange} className={inputClass()} placeholder="+43 664 …" />
                </div>

                <div>
                  <label htmlFor="contact-occasion" className="block text-sm font-medium text-brand-dark/80 mb-2">Anlass (optional)</label>
                  <select id="contact-occasion" name="occasion" value={form.occasion} onChange={handleChange} className="w-full px-5 py-4 rounded-full bg-white/60 border border-brand-turquoise/20 text-brand-dark">
                    {OCCASION_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-brand-dark/80 mb-2">Nachricht *</label>
                  <textarea id="contact-message" name="message" rows={4} value={form.message} onChange={handleChange} className={textareaClass(fieldErrors.message)} placeholder="Wie kann ich Ihnen helfen?" required />
                  {fieldErrors.message && <p className="mt-1.5 text-xs text-red-600">{fieldErrors.message}</p>}
                </div>

                <div>
                  <label htmlFor="contact-privacy" className="flex items-start gap-3 cursor-pointer group text-sm text-brand-dark/70">
                    <input type="checkbox" id="contact-privacy" name="privacy" checked={form.privacy} onChange={handleChange} className="mt-1" required />
                    <span>
                      Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden.
                      Weitere Informationen in der <Link href="/datenschutz" className="text-brand-turquoise hover:underline">Datenschutzerklärung</Link>. *
                    </span>
                  </label>
                  {fieldErrors.privacy && <p className="mt-1.5 text-xs text-red-600">{fieldErrors.privacy}</p>}
                </div>

                <button type="submit" disabled={submitStatus === 'loading'} className="w-full py-4 bg-brand-turquoise text-white font-medium rounded-full hover:bg-brand-turquoise/90 transition-all flex items-center justify-center gap-2">
                  {submitStatus === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-4 h-4" />}
                  {submitStatus === 'loading' ? 'Wird gesendet...' : 'Nachricht absenden'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
