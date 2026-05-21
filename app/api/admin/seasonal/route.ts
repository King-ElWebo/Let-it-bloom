import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { hasAdminSession } from "@/src/lib/admin-auth";
import { getSeasonalConfig, saveSeasonalConfig } from "@/src/lib/seasonal";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(): Promise<NextResponse> {
  if (!(await hasAdminSession())) {
    return unauthorizedResponse();
  }

  const config = await getSeasonalConfig();
  return NextResponse.json(config);
}

export async function PUT(request: Request): Promise<NextResponse> {
  if (!(await hasAdminSession())) {
    return unauthorizedResponse();
  }

  const body = await request.json().catch(() => null);
  const offers = isRecord(body) ? body.offers : undefined;
  const enabled = isRecord(body) && typeof body.enabled === "boolean" ? body.enabled : true;

  try {
    const savedConfig = await saveSeasonalConfig({ enabled, offers });
    revalidatePath("/");

    return NextResponse.json(savedConfig);
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
