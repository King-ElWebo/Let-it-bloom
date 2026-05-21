"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ImageUp, Loader2, LogOut, Save } from "lucide-react";
import Link from "next/link";
import type { FormEvent } from "react";
import type { SeasonalOffer } from "@/src/lib/seasonal";

type AdminDashboardProps = {
  initialIsAuthenticated: boolean;
  initialEnabled: boolean;
  initialOffers: SeasonalOffer[];
  isConfigured: boolean;
};

export function AdminDashboard({
  initialIsAuthenticated,
  initialEnabled,
  initialOffers,
  isConfigured,
}: AdminDashboardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(initialIsAuthenticated);
  const [offers, setOffers] = useState<SeasonalOffer[]>(initialOffers);
  const [enabled, setEnabled] = useState(initialEnabled);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [uploadingId, setUploadingId] = useState<string | null>(null);

  const canSave = useMemo(() => {
    if (!enabled) return true;
    return offers.every(
      (offer) =>
        !offer.active ||
        (offer.title.trim() && offer.description.trim() && offer.image.trim()),
    );
  }, [offers, enabled]);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setIsLoggingIn(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Login fehlgeschlagen.");
      }

      const seasonalResponse = await fetch("/api/admin/seasonal");
      const seasonalData = await seasonalResponse.json().catch(() => ({}));

      if (!seasonalResponse.ok) {
        throw new Error(seasonalData.error || "Daten konnten nicht geladen werden.");
      }

      setOffers(seasonalData.offers);
      setEnabled(seasonalData.enabled ?? true);
      setPassword("");
      setIsAuthenticated(true);
      setMessage("Angemeldet.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Login fehlgeschlagen.");
    } finally {
      setIsLoggingIn(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setIsAuthenticated(false);
    setOffers([]);
    setEnabled(true);
    setMessage("");
  }

  async function handleSave() {
    setMessage("");
    setIsSaving(true);

    try {
      const response = await fetch("/api/admin/seasonal", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ offers, enabled }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Speichern fehlgeschlagen.");
      }

      setOffers(data.offers);
      setEnabled(data.enabled ?? true);
      setMessage("Gespeichert.");
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Speichern fehlgeschlagen.",
      );
    } finally {
      setIsSaving(false);
    }
  }

  async function handleUpload(offerId: string, file: File | undefined) {
    if (!file) return;

    setMessage("");
    setUploadingId(offerId);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/admin/seasonal/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Upload fehlgeschlagen.");
      }

      updateOffer(offerId, "image", data.url);
      setMessage("Bild hochgeladen. Bitte speichern.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Upload fehlgeschlagen.");
    } finally {
      setUploadingId(null);
    }
  }

  function updateOffer<K extends keyof SeasonalOffer>(
    id: string,
    field: K,
    value: SeasonalOffer[K],
  ) {
    setOffers((currentOffers) =>
      currentOffers.map((offer) =>
        offer.id === id ? { ...offer, [field]: value } : offer,
      ),
    );
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-brand-cream px-4 py-10 text-brand-dark sm:px-6">
        <section className="mx-auto max-w-sm rounded-lg border border-brand-dark/10 bg-white p-6 shadow-sm">
          <h1 className="mb-6 text-3xl font-serif font-semibold">Admin</h1>

          {!isConfigured ? (
            <p className="rounded-md bg-brand-blush/40 p-3 text-sm">
              ADMIN_PASSWORD ist noch nicht gesetzt.
            </p>
          ) : (
            <form className="space-y-4" onSubmit={handleLogin}>
              <label className="block text-sm font-medium" htmlFor="admin-password">
                Passwort
              </label>
              <input
                id="admin-password"
                className="w-full rounded-md border border-brand-dark/20 px-3 py-2 text-sm outline-none focus:border-brand-turquoise"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
              />
              <button
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-dark px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-darker disabled:cursor-not-allowed disabled:opacity-60"
                type="submit"
                disabled={isLoggingIn || !password}
              >
                {isLoggingIn ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : null}
                Einloggen
              </button>
            </form>
          )}

          {message ? <p className="mt-4 text-sm text-brand-dark/70">{message}</p> : null}

          <div className="mt-6 border-t border-brand-dark/10 pt-4 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-brand-dark/60 hover:text-brand-turquoise transition-colors"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Zurück zur Startseite
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-cream px-4 py-8 text-brand-dark sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase text-brand-dark/50">
              Let It Bloom
            </p>
            <h1 className="text-3xl font-serif font-semibold sm:text-4xl">
              Saisonale Kacheln
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md border border-brand-dark/15 bg-white px-4 py-2 text-sm font-medium transition-colors hover:border-brand-dark/30"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Zur Website
            </Link>
            <button
              className="inline-flex items-center gap-2 rounded-md border border-brand-dark/15 bg-white px-4 py-2 text-sm font-medium transition-colors hover:border-brand-dark/30"
              type="button"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" aria-hidden="true" />
              Logout
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-md bg-brand-dark px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-darker disabled:cursor-not-allowed disabled:opacity-60"
              type="button"
              onClick={handleSave}
              disabled={isSaving || !canSave}
            >
              {isSaving ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <Save className="h-4 w-4" aria-hidden="true" />
              )}
              Speichern
            </button>
          </div>
        </div>

        {/* Master Toggle */}
        <div className="mb-6 rounded-xl border border-brand-turquoise/20 bg-brand-turquoise/5 p-5 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-lg font-serif font-semibold text-brand-dark mb-1">
              Saisonale Angebote auf der Website anzeigen
            </h2>
            <p className="text-sm text-brand-dark/70">
              Deaktivieren Sie diesen Schalter, um die gesamte Sektion „Saisonale Anlässe“ sofort auf der Website und in der Navigation auszublenden, unabhängig von den einzelnen Angeboten.
            </p>
          </div>
          <div className="flex items-center shrink-0">
            <label className="relative inline-flex items-center cursor-pointer select-none">
              <input
                type="checkbox"
                checked={enabled}
                onChange={(event) => setEnabled(event.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-brand-dark/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-brand-dark/20 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-turquoise"></div>
              <span className="ms-3 text-sm font-medium text-brand-dark">
                {enabled ? "Aktiviert" : "Deaktiviert"}
              </span>
            </label>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <article
              className={`rounded-lg border bg-white p-4 shadow-sm transition-all duration-300 ${
                offer.active
                  ? "border-brand-dark/10"
                  : "border-brand-dark/5 bg-gray-50/50 opacity-80"
              }`}
              key={offer.id}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-dark/50">
                  Angebot {index + 1}
                </span>
                <label className="relative inline-flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={offer.active}
                    onChange={(event) =>
                      updateOffer(offer.id, "active", event.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-brand-dark/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-brand-dark/20 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-turquoise"></div>
                  <span className="ms-2 text-xs font-medium text-brand-dark">Aktiv</span>
                </label>
              </div>

              <div className="mb-4 overflow-hidden rounded-md bg-brand-beige">
                {offer.image ? (
                  <img
                    alt=""
                    className="aspect-4/5 w-full object-cover"
                    src={offer.image}
                  />
                ) : (
                  <div className="aspect-4/5" />
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    className="mb-1 block text-sm font-medium"
                    htmlFor={`${offer.id}-title`}
                  >
                    Titel
                  </label>
                  <input
                    id={`${offer.id}-title`}
                    className="w-full rounded-md border border-brand-dark/20 px-3 py-2 text-sm outline-none focus:border-brand-turquoise"
                    maxLength={120}
                    value={offer.title}
                    onChange={(event) =>
                      updateOffer(offer.id, "title", event.target.value)
                    }
                  />
                </div>

                <div>
                  <label
                    className="mb-1 block text-sm font-medium"
                    htmlFor={`${offer.id}-description`}
                  >
                    Text
                  </label>
                  <textarea
                    id={`${offer.id}-description`}
                    className="min-h-28 w-full resize-y rounded-md border border-brand-dark/20 px-3 py-2 text-sm leading-relaxed outline-none focus:border-brand-turquoise"
                    maxLength={500}
                    value={offer.description}
                    onChange={(event) =>
                      updateOffer(offer.id, "description", event.target.value)
                    }
                  />
                </div>

                <div>
                  <label
                    className="mb-1 block text-sm font-medium"
                    htmlFor={`${offer.id}-image`}
                  >
                    Bild
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      id={`${offer.id}-image`}
                      className="block w-full text-sm file:mr-3 file:rounded-md file:border-0 file:bg-brand-dark file:px-3 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-brand-darker"
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={(event) =>
                        handleUpload(offer.id, event.target.files?.[0])
                      }
                    />
                    {uploadingId === offer.id ? (
                      <Loader2
                        className="h-4 w-4 shrink-0 animate-spin"
                        aria-hidden="true"
                      />
                    ) : (
                      <ImageUp className="h-4 w-4 shrink-0" aria-hidden="true" />
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {message ? (
          <p className="mt-6 rounded-md bg-white px-4 py-3 text-sm text-brand-dark/70 shadow-sm">
            {message}
          </p>
        ) : null}
      </div>
    </main>
  );
}
