import { createClient as createKvClient, type VercelKV } from "@vercel/kv";
import { unstable_noStore as noStore } from "next/cache";
import { createClient as createRedisClient } from "redis";
import { seasonalOffers as fallbackSeasonalOffers } from "@/src/data/seasonal";

export type SeasonalOffer = {
  id: string;
  title: string;
  description: string;
  image: string;
  active: boolean;
};

export const SEASONAL_OFFERS_KEY = "let-it-bloom:seasonal-offers";

const SLOT_COUNT = 3;
type RedisProtocolClient = ReturnType<typeof createRedisClient>;
type SeasonalStore =
  | { kind: "rest"; client: VercelKV }
  | { kind: "protocol"; client: RedisProtocolClient };

let seasonalStorePromise: Promise<SeasonalStore> | null = null;

const fallbackSlots: SeasonalOffer[] = fallbackSeasonalOffers
  .filter((offer) => offer.active)
  .slice(0, SLOT_COUNT)
  .map((offer, index) => ({
    id: toCleanString(offer.id, `seasonal-${index + 1}`, 80),
    title: toCleanString(offer.title, "", 120),
    description: toCleanString(offer.description, "", 500),
    image: toImageSource(offer.image, ""),
    active: true,
  }));

export function getDefaultSeasonalOffers(): SeasonalOffer[] {
  return normalizeSeasonalOffers(fallbackSlots);
}

export function normalizeSeasonalOffers(value: unknown): SeasonalOffer[] {
  const offers = Array.isArray(value) ? value : [];

  return Array.from({ length: SLOT_COUNT }, (_, index) => {
    const fallback = fallbackSlots[index] ?? {
      id: `seasonal-${index + 1}`,
      title: "",
      description: "",
      image: "",
      active: true,
    };
    const offer = isRecord(offers[index]) ? offers[index] : {};

    return {
      id: toCleanString(offer.id, fallback.id, 80),
      title: toCleanString(offer.title, fallback.title, 120),
      description: toCleanString(offer.description, fallback.description, 500),
      image: toImageSource(offer.image, fallback.image),
      active: true,
    };
  });
}

export async function getSeasonalOffers(): Promise<SeasonalOffer[]> {
  noStore();

  try {
    const offers = await readSeasonalOffersFromStore();
    return normalizeSeasonalOffers(offers);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Seasonal KV fallback:", error);
    }

    return getDefaultSeasonalOffers();
  }
}

export async function saveSeasonalOffers(offers: unknown): Promise<SeasonalOffer[]> {
  const normalizedOffers = normalizeSeasonalOffers(offers);
  await writeSeasonalOffersToStore(normalizedOffers);
  return normalizedOffers;
}

async function readSeasonalOffersFromStore(): Promise<unknown> {
  const store = await getSeasonalStore();

  if (store.kind === "rest") {
    return store.client.get<SeasonalOffer[]>(SEASONAL_OFFERS_KEY);
  }

  const value = await store.client.get(SEASONAL_OFFERS_KEY);
  return value ? JSON.parse(value) : null;
}

async function writeSeasonalOffersToStore(offers: SeasonalOffer[]): Promise<void> {
  const store = await getSeasonalStore();

  if (store.kind === "rest") {
    await store.client.set(SEASONAL_OFFERS_KEY, offers);
    return;
  }

  await store.client.set(SEASONAL_OFFERS_KEY, JSON.stringify(offers));
}

async function getSeasonalStore(): Promise<SeasonalStore> {
  if (!seasonalStorePromise) {
    seasonalStorePromise = createSeasonalStore();
  }

  return seasonalStorePromise;
}

async function createSeasonalStore(): Promise<SeasonalStore> {
  const url = getStorageEnvValue(["KV_REST_API_URL", "UPSTASH_REDIS_REST_URL"]);
  const token = getStorageEnvValue([
    "KV_REST_API_TOKEN",
    "UPSTASH_REDIS_REST_TOKEN",
  ]);

  if (url && token) {
    return {
      kind: "rest",
      client: createKvClient({ url, token }),
    };
  }

  const redisUrl = getStorageEnvValue(["REDIS_URL", "KV_URL"]);

  if (redisUrl) {
    const client = createRedisClient({ url: redisUrl });
    await client.connect();

    return {
      kind: "protocol",
      client,
    };
  }

  throw new Error(
    "Redis/KV ist noch nicht korrekt konfiguriert. Bitte entweder REDIS_URL setzen oder KV_REST_API_URL und KV_REST_API_TOKEN bzw. UPSTASH_REDIS_REST_URL und UPSTASH_REDIS_REST_TOKEN setzen und den Dev-Server neu starten.",
  );
}

function getStorageEnvValue(names: string[]): string | undefined {
  for (const name of names) {
    const value = process.env[name]?.trim();

    if (value && !isPlaceholderValue(value)) {
      return value;
    }
  }

  return undefined;
}

function isPlaceholderValue(value: string): boolean {
  return /example|change-me|MY_|your-|\.\.\./i.test(value);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function toCleanString(value: unknown, fallback: string, maxLength: number): string {
  if (typeof value !== "string") return fallback;

  const cleanValue = value.trim();
  if (!cleanValue) return fallback;

  return cleanValue.slice(0, maxLength);
}

function toImageSource(value: unknown, fallback: string): string {
  const image = toCleanString(value, fallback, 1200);

  if (image.startsWith("/") || image.startsWith("https://")) {
    return image;
  }

  return fallback;
}
