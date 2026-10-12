import { createHash } from "crypto";

const DEFAULT_API_BASE = "https://ipg1.apps.net.pk/Ecommerce/api/";

export type PayFastCheckoutInput = {
  amount: number;
  basketId: string;
  email: string;
  phone: string;
  description: string;
  successUrl: string;
  failureUrl: string;
  callbackUrl: string;
};

export type PayFastCheckoutPayload = {
  actionUrl: string;
  fields: Record<string, string>;
};

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing ${name}. Add PayFast credentials to .env.local`);
  }
  return value;
}

export function isPayFastConfigured() {
  return Boolean(
    process.env.PAYFAST_MERCHANT_ID?.trim() &&
      process.env.PAYFAST_SECURED_KEY?.trim() &&
      process.env.PAYFAST_MERCHANT_NAME?.trim()
  );
}

export function getPayFastApiBase() {
  const base =
    process.env.PAYFAST_API_URL?.trim() ||
    process.env.PAYFAST_SANDBOX_URL?.trim() ||
    DEFAULT_API_BASE;
  return base.endsWith("/") ? base : `${base}/`;
}

export function createPayFastSignature(
  merchantId: string,
  merchantName: string,
  amount: string,
  basketId: string
) {
  return createHash("md5")
    .update(`${merchantId}:${merchantName}:${amount}:${basketId}`)
    .digest("hex");
}

export async function getPayFastAccessToken(customerIp?: string) {
  const merchantId = requireEnv("PAYFAST_MERCHANT_ID");
  const securedKey = requireEnv("PAYFAST_SECURED_KEY");
  const grantType = process.env.PAYFAST_GRANT_TYPE?.trim() || "client_credentials";
  const url = `${getPayFastApiBase()}token`;

  const body = new URLSearchParams({
    merchant_id: merchantId,
    secured_key: securedKey,
    grant_type: grantType,
  });
  if (customerIp) body.set("customer_ip", customerIp);

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });

  const raw = await res.text();
  let data: Record<string, unknown> = {};
  try {
    data = JSON.parse(raw) as Record<string, unknown>;
  } catch {
    throw new Error(`PayFast token response was not JSON: ${raw.slice(0, 200)}`);
  }

  const token =
    (typeof data.token === "string" && data.token) ||
    (typeof (data.data as { token?: string } | undefined)?.token === "string"
      ? (data.data as { token: string }).token
      : "");

  const code = String(data.code ?? (data as { status_code?: string }).status_code ?? "");
  if (!token || (code && code !== "00")) {
    throw new Error(
      `PayFast token failed${code ? ` (code ${code})` : ""}: ${
        String(data.message ?? data.err_msg ?? raw).slice(0, 200)
      }`
    );
  }

  return token;
}

export async function buildPayFastCheckout(
  input: PayFastCheckoutInput,
  customerIp?: string
): Promise<PayFastCheckoutPayload> {
  const merchantId = requireEnv("PAYFAST_MERCHANT_ID");
  const merchantName = requireEnv("PAYFAST_MERCHANT_NAME");
  const amount = Number(input.amount).toFixed(2);
  const token = await getPayFastAccessToken(customerIp);
  const signature = createPayFastSignature(
    merchantId,
    merchantName,
    amount,
    input.basketId
  );

  const fields: Record<string, string> = {
    MERCHANT_ID: merchantId,
    MERCHANT_NAME: merchantName,
    TOKEN: token,
    PROCCODE: "00",
    TXNAMT: amount,
    CUSTOMER_MOBILE_NO: input.phone.replace(/\D/g, "").slice(-11),
    CUSTOMER_EMAIL_ADDRESS: input.email,
    SIGNATURE: signature,
    VERSION: "ROOTS-FUTURES-1.0",
    TXNDESC: input.description.slice(0, 120),
    SUCCESS_URL: encodeURIComponent(input.successUrl),
    FAILURE_URL: encodeURIComponent(input.failureUrl),
    BASKET_ID: input.basketId,
    ORDER_DATE: new Date().toISOString().slice(0, 19).replace("T", " "),
    // Server IPN / status callback (browser still returns via SUCCESS/FAILURE_URL)
    CHECKOUT_URL: encodeURIComponent(input.callbackUrl),
  };

  if (process.env.PAYFAST_STORE_ID?.trim()) {
    fields.STORE_ID = process.env.PAYFAST_STORE_ID.trim();
  }

  return {
    actionUrl: `${getPayFastApiBase()}checkout`,
    fields,
  };
}
