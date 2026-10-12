import { ScreenChrome } from "./ScreenChrome";
import type { AppState, Occasion } from "@/lib/types";
import { OCCASIONS } from "@/lib/types";

type Props = {
  state: AppState;
  summary: string;
  totalLabel: string;
  unitLine: string;
  noteLine: string;
  counts: number[];
  waLink: string;
  mailLink: string;
  valid: boolean;
  setOcc: (occ: Occasion) => void;
  setCount: (n: number) => void;
  setField: (field: keyof AppState, value: string) => void;
  onDone: () => void;
  onHome: () => void;
};

export function CheckoutPage({
  state,
  summary,
  totalLabel,
  unitLine,
  noteLine,
  counts,
  waLink,
  mailLink,
  valid,
  setOcc,
  setCount,
  setField,
  onDone,
  onHome,
}: Props) {
  const showRecipient = !state.corp && state.occ !== "karachi";

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
            Tell us who is planting, pay by bank transfer, then share your receipt. We plant
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
            <h3 style={{ margin: 0, fontSize: 22 }}>3. Pay by bank transfer</h3>
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
              Then send your payment receipt or screenshot on WhatsApp <b>03332388072</b> or
              by email.
            </p>
            <a
              className="btn b3"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textAlign: "center" }}
            >
              Send receipt on WhatsApp
            </a>
            <a
              className="btn b2c"
              href={mailLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textAlign: "center" }}
            >
              Email the receipt
            </a>
            <button
              type="button"
              className="btn b1"
              onClick={onDone}
              style={{ textAlign: "center", opacity: valid ? 1 : 0.55 }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </ScreenChrome>
  );
}
