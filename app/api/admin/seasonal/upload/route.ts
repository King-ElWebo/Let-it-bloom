import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { hasAdminSession } from "@/src/lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_FILE_SIZE = 8 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

export async function POST(request: Request): Promise<NextResponse> {
  if (!(await hasAdminSession())) {
    return NextResponse.json({ error: "Nicht angemeldet." }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Kein Bild gefunden." }, { status: 400 });
  }

  if (!ALLOWED_TYPES.has(file.type)) {
    return NextResponse.json(
      { error: "Bitte ein JPG-, PNG- oder WebP-Bild hochladen." },
      { status: 400 },
    );
  }

  if (file.size > MAX_FILE_SIZE) {
    return NextResponse.json(
      { error: "Das Bild darf maximal 8 MB gross sein." },
      { status: 400 },
    );
  }

  try {
    const blob = await put(`seasonal/${createSafeFileName(file.name)}`, file, {
      access: "public",
      addRandomSuffix: true,
      contentType: file.type,
    });

    return NextResponse.json({ url: blob.url });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Das Bild konnte nicht hochgeladen werden.",
      },
      { status: 500 },
    );
  }
}

function createSafeFileName(name: string): string {
  const fallback = "bild.jpg";
  const cleanName =
    name
      .toLowerCase()
      .replace(/[^a-z0-9._-]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 90) || fallback;

  return `${Date.now()}-${cleanName}`;
}
