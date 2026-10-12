import { put } from "@vercel/blob";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

/** Vercel serverless body limit is ~4.5MB for server uploads */
const MAX_BYTES = 4.5 * 1024 * 1024;
const ALLOWED = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
  "application/pdf",
]);

function safeName(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80);
}

export async function POST(req: NextRequest) {
  try {
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      return NextResponse.json(
        {
          error:
            "Receipt storage is not configured. Add BLOB_READ_WRITE_TOKEN from your Vercel Blob store.",
        },
        { status: 503 }
      );
    }

    const form = await req.formData();
    const file = form.get("receipt");
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Please choose a receipt file." }, { status: 400 });
    }
    if (!ALLOWED.has(file.type)) {
      return NextResponse.json(
        { error: "Upload a JPG, PNG, WEBP, HEIC, or PDF receipt." },
        { status: 400 }
      );
    }
    if (file.size <= 0 || file.size > MAX_BYTES) {
      return NextResponse.json(
        { error: "Receipt must be under 4.5 MB." },
        { status: 400 }
      );
    }

    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const summary = String(form.get("summary") ?? "").trim();
    const totalLabel = String(form.get("totalLabel") ?? "").trim();
    const org = String(form.get("org") ?? "").trim();
    const recipient = String(form.get("recipient") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { error: "Name and an email or phone number are required." },
        { status: 400 }
      );
    }

    const id = `RNF-${Date.now()}`;
    const ext =
      path.extname(file.name) || (file.type === "application/pdf" ? ".pdf" : ".jpg");
    const base = safeName(path.basename(file.name, path.extname(file.name))) || "receipt";
    const pathname = `receipts/${id}-${base}${ext}`;

    const blob = await put(pathname, file, {
      access: "private",
      addRandomSuffix: true,
      contentType: file.type,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    const meta = {
      id,
      pathname: blob.pathname,
      url: blob.url,
      downloadUrl: blob.downloadUrl,
      originalName: file.name,
      mimeType: file.type,
      size: file.size,
      uploadedAt: new Date().toISOString(),
      donor: { name, email, phone, org, recipient, message },
      order: { summary, totalLabel },
    };

    await put(`receipts/meta/${id}.json`, JSON.stringify(meta, null, 2), {
      access: "private",
      addRandomSuffix: false,
      contentType: "application/json",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    console.info("[receipts] uploaded to Vercel Blob", id, blob.pathname, name, totalLabel);

    return NextResponse.json({
      ok: true,
      id,
      pathname: blob.pathname,
      message: "Receipt uploaded. We will confirm your payment soon.",
    });
  } catch (err) {
    console.error("[receipts]", err);
    const message = err instanceof Error ? err.message : "Could not upload receipt.";
    return NextResponse.json(
      { error: message.includes("token") ? message : "Could not upload receipt. Please try again." },
      { status: 500 }
    );
  }
}
