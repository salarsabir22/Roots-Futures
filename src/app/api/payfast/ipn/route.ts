import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * PayFast posts transaction status here (CHECKOUT_URL / IPN).
 * Log the payload for now; wire DB / email once merchant credentials are live.
 */
async function handleIpn(req: NextRequest) {
  const contentType = req.headers.get("content-type") ?? "";
  let payload: Record<string, string> = {};

  if (contentType.includes("application/json")) {
    payload = (await req.json()) as Record<string, string>;
  } else {
    const form = await req.formData();
    form.forEach((value, key) => {
      payload[key] = String(value);
    });
  }

  console.info("[payfast/ipn]", JSON.stringify(payload));

  return NextResponse.json({ ok: true });
}

export async function POST(req: NextRequest) {
  try {
    return await handleIpn(req);
  } catch (err) {
    console.error("[payfast/ipn]", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  // Some gateways bounce browsers here with query params
  console.info("[payfast/ipn:get]", req.nextUrl.search);
  return NextResponse.json({ ok: true });
}
