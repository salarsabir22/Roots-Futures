import { NextRequest, NextResponse } from "next/server";
import { PRICE } from "@/lib/types";
import { buildPayFastCheckout, isPayFastConfigured } from "@/lib/payfast";

export const runtime = "nodejs";

function appOrigin(req: NextRequest) {
  const fromEnv = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  const proto = req.headers.get("x-forwarded-proto") ?? "http";
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  return `${proto}://${host}`;
}

export async function GET() {
  return NextResponse.json({ configured: isPayFastConfigured() });
}

export async function POST(req: NextRequest) {
  try {
    if (!isPayFastConfigured()) {
      return NextResponse.json(
        {
          error:
            "PayFast is not configured. Add PAYFAST_MERCHANT_ID, PAYFAST_SECURED_KEY, and PAYFAST_MERCHANT_NAME to .env.local",
        },
        { status: 503 }
      );
    }

    const body = (await req.json()) as {
      n?: number;
      amount?: number;
      email?: string;
      phone?: string;
      name?: string;
      summary?: string;
      corp?: boolean;
      org?: string;
    };

    const n = Math.max(1, Math.floor(Number(body.n) || 1));
    const expected = n * PRICE;
    const amount = Number(body.amount);
    if (!Number.isFinite(amount) || Math.abs(amount - expected) > 0.01) {
      return NextResponse.json(
        { error: `Amount must be PKR ${expected} for ${n} tree(s).` },
        { status: 400 }
      );
    }

    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const name = String(body.name ?? "").trim();
    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { error: "Name and an email or phone number are required." },
        { status: 400 }
      );
    }
    if (!email) {
      return NextResponse.json(
        { error: "Email is required for card payments." },
        { status: 400 }
      );
    }
    if (!phone || phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json(
        { error: "A valid mobile number is required for card payments." },
        { status: 400 }
      );
    }

    const origin = appOrigin(req);
    const basketId = `RNF-${Date.now()}-${n}`;
    const summary =
      String(body.summary ?? "").trim() ||
      `Plant ${n} tree${n === 1 ? "" : "s"} via Roots & Futures`;

    const checkout = await buildPayFastCheckout(
      {
        amount,
        basketId,
        email,
        phone,
        description: summary,
        successUrl: `${origin}/payment/success?basket=${encodeURIComponent(basketId)}`,
        failureUrl: `${origin}/payment/failure?basket=${encodeURIComponent(basketId)}`,
        callbackUrl: `${origin}/api/payfast/ipn`,
      },
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? undefined
    );

    return NextResponse.json({
      basketId,
      actionUrl: checkout.actionUrl,
      fields: checkout.fields,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "PayFast checkout failed";
    console.error("[payfast/checkout]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
