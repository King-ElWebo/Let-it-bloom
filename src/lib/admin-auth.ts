import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import type { NextResponse } from "next/server";

export const ADMIN_SESSION_COOKIE = "let_it_bloom_admin";

const SESSION_MAX_AGE = 60 * 60 * 8;

export function isAdminConfigured(): boolean {
  return Boolean(getAdminPassword());
}

export function isValidAdminPassword(password: unknown): boolean {
  const adminPassword = getAdminPassword();

  if (!adminPassword || typeof password !== "string") {
    return false;
  }

  return safeEqual(password, adminPassword);
}

export async function hasAdminSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  return isValidAdminToken(token);
}

export function setAdminSessionCookie(response: NextResponse): void {
  response.cookies.set(ADMIN_SESSION_COOKIE, createAdminToken(), {
    httpOnly: true,
    maxAge: SESSION_MAX_AGE,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

export function clearAdminSessionCookie(response: NextResponse): void {
  response.cookies.set(ADMIN_SESSION_COOKIE, "", {
    httpOnly: true,
    maxAge: 0,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

function isValidAdminToken(token: string | undefined): boolean {
  if (!isAdminConfigured() || !token) {
    return false;
  }

  return safeEqual(token, createAdminToken());
}

function createAdminToken(): string {
  const adminPassword = getAdminPassword() ?? "";
  const secret = process.env.ADMIN_SESSION_SECRET || adminPassword;

  return createHmac("sha256", secret)
    .update(`let-it-bloom-admin:${adminPassword}`)
    .digest("hex");
}

function getAdminPassword(): string | undefined {
  const password = process.env.ADMIN_PASSWORD?.trim();
  return password || undefined;
}

function safeEqual(left: string, right: string): boolean {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}
