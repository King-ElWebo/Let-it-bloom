import { NextResponse } from "next/server";
import { clearAdminSessionCookie } from "@/src/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(): Promise<NextResponse> {
  const response = NextResponse.json({ ok: true });
  clearAdminSessionCookie(response);

  return response;
}
