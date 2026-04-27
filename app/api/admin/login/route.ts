import { NextResponse } from "next/server";
import { isValidAdminPassword, setAdminSessionCookie } from "@/src/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<NextResponse> {
  const body = await request.json().catch(() => null);
  const password = isRecord(body) ? body.password : undefined;

  if (!isValidAdminPassword(password)) {
    return NextResponse.json(
      { error: "Das Passwort ist nicht korrekt." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  setAdminSessionCookie(response);

  return response;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
