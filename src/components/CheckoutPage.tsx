"use client";

import { useState } from "react";
import { ScreenChrome } from "./ScreenChrome";
import type { AppState, Occasion } from "@/lib/types";
import { OCCASIONS, PRICE } from "@/lib/types";

type Props = {
  state: AppState;
  summary: string;
  totalLabel: string;
  unitLine: string;
  noteLine: string;
  counts: number[];
  valid: boolean;
  setOcc: (occ: Occasion) => void;
  setCount: (n: number) => void;
  setField: (field: keyof AppState, value: string) => void;
  onDone: () => void;
  onHome: () => void;
};

function submitPayFastForm(actionUrl: string, fields: Record<string, string>) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = actionUrl;
  form.style.display = "none";
  for (const [key, value] of Object.entries(fields)) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = value;
    form.appendChild(input);
  }
  document.body.appendChild(form);
  form.submit();
}

export function CheckoutPage({
  state,
  summary,
  totalLabel,
  unitLine,
  noteLine,
  counts,
  valid,
  setOcc,
  setCount,
  setField,
  onDone,
  onHome,
}: Props) {
  const showRecipient = !state.corp && state.occ !== "karachi";
  const [cardBusy, setCardBusy] = useState(false);
  const [cardError, setCardError] = useState("");
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [receiptBusy, setReceiptBusy] = useState(false);
  const [receiptError, setReceiptError] = useState("");
  const [receiptOk, setReceiptOk] = useState("");

  async function uploadReceipt() {
    setReceiptError("");
    setReceiptOk("");
    if (!valid) {
      setReceiptError("Please add your name and an email or phone number first.");
      return;
    }
    if (!receiptFile) {
      setReceiptError("Choose a receipt photo or PDF first.");
      return;
    }

    setReceiptBusy(true);
    try {
      const body = new FormData();
      body.set("receipt", receiptFile);
      body.set("name", state.name);
      body.set("email", state.email);
      body.set("phone", state.phone);
      body.set("org", state.org);
      body.set("recipient", state.recipient);
      body.set("message", state.message);
      body.set("summary", summary);
      body.set("totalLabel", totalLabel);

      const res = await fetch("/api/receipts", { method: "POST", body });
      const data = (await res.json()) as { error?: string; message?: string; id?: string };
      if (!res.ok) throw new Error(data.error || "Upload failed.");
      setReceiptOk(data.message || "Receipt uploaded.");
      setReceiptFile(null);
    } catch (err) {
      setReceiptError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setReceiptBusy(false);
    }
  }

  async function payWithCard() {
    setCardError("");
    if (!state.name.trim() || !(state.email.trim() || state.phone.trim())) {
      setCardError("Please add your name and an email or phone number.");
      return;
    }
    if (!state.email.trim()) {
      setCardError("Email is required for card payments.");
      return;
    }
    if (state.phone.replace(/\D/g, "").length < 10) {
      setCardError("A valid mobile number is required for card payments.");
      return;
    }

    setCardBusy(true);
    try {
      const res = await fetch("/api/payfast/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          n: state.n,
          amount: state.n * PRICE,
          email: state.email,
          phone: state.phone,
          name: state.name,
          summary,
          corp: state.corp,
          org: state.org,
        }),
      });
      const data = (await res.json()) as {
        error?: string;
        actionUrl?: string;
        fields?: Record<string, string>;
      };
      if (!res.ok || !data.actionUrl || !data.fields) {
        throw new Error(data.error || "Could not start PayFast checkout.");
      }
      submitPayFastForm(data.actionUrl, data.fields);
    } catch (err) {
      setCardError(err instanceof Error ? err.message : "Card payment failed to start.");
      setCardBusy(false);
    }
  }

  return (
    <ScreenChrome onHome={onHome}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "48px 32px 96px",
          boxSizing: "border-box",
          display: "flex",
          flexWrap: "wrap",
          gap: 32,
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            flex: "1 1 520px",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-fraunces), Fraunces, serif",
              fontSize: 48,
            }}
          >
            Checkout
          </h1>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.5 }}>
            Tell us who is planting, then pay by card (PayFast) or bank transfer. We plant
            your tree and a child learns.
          </p>

          <div
            style={{
              background: "#fffaf0",
              border: "2px solid #e3d6b3",
              borderRadius: 24,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <h3 style={{ margin: 0, fontSize: 22 }}>1. Your plan</h3>
            {!state.corp && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {OCCASIONS.map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setOcc(id)}
                    className={state.occ === id ? "pill-on" : "pill-off"}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {counts.map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setCount(k)}
                  className={state.n === k ? "pill-on" : "pill-off"}
                >
                  {k === 1 ? "1 tree" : `${k} trees`}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "#fffaf0",
              border: "2px solid #e3d6b3",
              borderRadius: 24,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <h3 style={{ margin: 0, fontSize: 22 }}>2. Your details</h3>
            <label
              style={{
                fontWeight: 700,
                fontSize: 15,
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              Full name
              <input
                type="text"
                className="input-field"
                value={state.name}
                onChange={(e) => setField("name", e.target.value)}
                placeholder="Your name"
              />
            </label>
            <label
              style={{
                fontWeight: 700,
                fontSize: 15,
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              Email
              <input
                type="email"
                className="input-field"
                value={state.email}
                onChange={(e) => setField("email", e.target.value)}
                placeholder="you@example.com"
              />
            </label>
            <label
              style={{
                fontWeight: 700,
                fontSize: 15,
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              WhatsApp / phone
              <input
                type="text"
                className="input-field"
                value={state.phone}
                onChange={(e) => setField("phone", e.target.value)}
                placeholder="03xx xxxxxxx"
              />
            </label>
            {state.corp && (
              <label
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                Company name
                <input
                  type="text"
                  className="input-field"
                  value={state.org}
                  onChange={(e) => setField("org", e.target.value)}
                  placeholder="Company or organisation"
                />
              </label>
            )}
            {showRecipient && (
              <label
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                Plant the tree in the name of
                <input
                  type="text"
                  className="input-field"
                  value={state.recipient}
                  onChange={(e) => setField("recipient", e.target.value)}
                  placeholder="e.g. my late father, or a friend"
                />
              </label>
            )}
            <label
              style={{
                fontWeight: 700,
                fontSize: 15,
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              Message for the certificate (optional)
              <textarea
                rows={3}
                className="input-field"
                value={state.message}
                onChange={(e) => setField("message", e.target.value)}
                placeholder="A few words to go with your tree"
                style={{ resize: "vertical" }}
              />
            </label>
            {state.err && (
              <p style={{ margin: 0, color: "#b3261e", fontWeight: 700 }}>
                Please add your name and an email or phone number.
              </p>
            )}
          </div>
        </div>

        <div
          style={{
            flex: "1 1 380px",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              background: "#123524",
              color: "#f6efdc",
              borderRadius: 24,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <h3 style={{ margin: 0, fontSize: 22, color: "#e9a23b" }}>Order summary</h3>
            <p style={{ margin: 0, fontSize: 18 }}>{summary}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 17,
                borderTop: "1px solid #2f6a50",
                paddingTop: 12,
              }}
            >
              <span>{unitLine}</span>
              <span>one tree + one child&apos;s fees each</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <span style={{ fontSize: 18 }}>Total</span>
              <span
                style={{
                  fontFamily: "var(--font-fraunces), Fraunces, serif",
                  fontSize: 44,
                  color: "#f0b84a",
                }}
              >
                {totalLabel}
              </span>
            </div>
          </div>

          <div
            style={{
              background: "#fffaf0",
              border: "2px solid #e3d6b3",
              borderRadius: 24,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <h3 style={{ margin: 0, fontSize: 22 }}>3. Pay by card</h3>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5 }}>
              Visa, Mastercard, PayPak and wallets via PayFast. Card details are entered on
              PayFast&apos;s secure page — not on this site.
            </p>
            <button
              type="button"
              className="btn b3"
              onClick={payWithCard}
              disabled={cardBusy}
              style={{
                textAlign: "center",
                opacity: cardBusy ? 0.7 : 1,
              }}
            >
              {cardBusy ? "Redirecting to PayFast…" : `Pay ${totalLabel} by card`}
            </button>
            {cardError && (
              <p style={{ margin: 0, color: "#b3261e", fontWeight: 700 }}>{cardError}</p>
            )}
          </div>

          <div
            style={{
              background: "#fffaf0",
              border: "2px solid #e3d6b3",
              borderRadius: 24,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <h3 style={{ margin: 0, fontSize: 22 }}>Or pay by bank transfer</h3>
            <div
              style={{
                background: "#e3ecdc",
                borderRadius: 16,
                padding: 20,
                fontSize: 18,
                lineHeight: 1.7,
              }}
            >
              <b>Bank Alfalah</b>
              <br />
              Account Title: <b>SHOZAB JAWWAD</b>
              <br />
              Account Number: <b>56385001785569</b>
            </div>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5 }}>
              <b>Note:</b> {noteLine}
            </p>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5 }}>
              After you transfer, upload a photo or PDF of your payment receipt here
              (max 4.5 MB).
            </p>
            <label
              style={{
                fontWeight: 700,
                fontSize: 15,
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              Payment receipt
              <input
                type="file"
                accept="image/*,.pdf,application/pdf"
                className="input-field"
                onChange={(e) => {
                  setReceiptError("");
                  setReceiptOk("");
                  setReceiptFile(e.target.files?.[0] ?? null);
                }}
              />
            </label>
            {receiptFile && (
              <p style={{ margin: 0, fontSize: 15, color: "#3e5c4e" }}>
                Selected: <b>{receiptFile.name}</b>
              </p>
            )}
            <button
              type="button"
              className="btn b3"
              onClick={uploadReceipt}
              disabled={receiptBusy}
              style={{ textAlign: "center", opacity: receiptBusy ? 0.7 : 1 }}
            >
              {receiptBusy ? "Uploading…" : "Upload receipt"}
            </button>
            {receiptError && (
              <p style={{ margin: 0, color: "#b3261e", fontWeight: 700 }}>{receiptError}</p>
            )}
            {receiptOk && (
              <p style={{ margin: 0, color: "#14513b", fontWeight: 700 }}>{receiptOk}</p>
            )}
            <button
              type="button"
              className="btn b1"
              onClick={() => {
                if (!receiptOk) {
                  setReceiptError("Please upload your payment receipt first.");
                  return;
                }
                onDone();
              }}
              style={{
                textAlign: "center",
                opacity: valid && receiptOk ? 1 : 0.55,
              }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </ScreenChrome>
  );
}
