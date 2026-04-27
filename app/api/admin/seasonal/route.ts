import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { hasAdminSession } from "@/src/lib/admin-auth";
import { getSeasonalOffers, saveSeasonalOffers } from "@/src/lib/seasonal";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(): Promise<NextResponse> {
  if (!(await hasAdminSession())) {
    return unauthorizedResponse();
  }

  const offers = await getSeasonalOffers();
  return NextResponse.json({ offers });
}

export async function PUT(request: Request): Promise<NextResponse> {
  if (!(await hasAdminSession())) {
    return unauthorizedResponse();
  }

  const body = await request.json().catch(() => null);
  const offers = isRecord(body) ? body.offers : undefined;

  try {
    const savedOffers = await saveSeasonalOffers(offers);
    revalidatePath("/");

    return NextResponse.json({ offers: savedOffers });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Die Daten konnten nicht gespeichert werden.",
      },
      { status: 500 },
    );
  }
}

function unauthorizedResponse(): NextResponse {
  return NextResponse.json({ error: "Nicht angemeldet." }, { status: 401 });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
