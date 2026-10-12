import { ScreenChrome } from "./ScreenChrome";
import type { AppState } from "@/lib/types";

type Props = {
  state: AppState;
  cMailLink: string;
  cWaLink: string;
  setField: (field: keyof AppState, value: string) => void;
  onHome: () => void;
};

export function ContactPage({ state, cMailLink, cWaLink, setField, onHome }: Props) {
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
            flex: "1 1 360px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-fraunces), Fraunces, serif",
              fontSize: 48,
            }}
          >
            Let&apos;s plant together
          </h1>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.6 }}>
            Request our CSR proposal or ask about corporate planting, plant-with-every-purchase
            and team gifting. Every tree is PKR 3,500 and also covers one child&apos;s fees.
          </p>
          <div
            style={{
              background: "#123524",
              color: "#f6efdc",
              borderRadius: 24,
              padding: 28,
              fontSize: 18,
              lineHeight: 1.8,
            }}
          >
            <b>rootsandfuturespk@gmail.com</b>
            <br />
            WhatsApp 03332388072
            <br />
            Karachi, Pakistan
          </div>
        </div>

        <div
          style={{
            flex: "1 1 520px",
            background: "#fffaf0",
            border: "2px solid #e3d6b3",
            borderRadius: 24,
            padding: 32,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <label
            style={{
              fontWeight: 700,
              fontSize: 15,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            Your name
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
            Company name
            <input
              type="text"
              className="input-field"
              value={state.org}
              onChange={(e) => setField("org", e.target.value)}
              placeholder="Company or organisation"
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
              placeholder="you@company.com"
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
          <label
            style={{
              fontWeight: 700,
              fontSize: 15,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            Message
            <textarea
              rows={4}
              className="input-field"
              value={state.cmsg}
              onChange={(e) => setField("cmsg", e.target.value)}
              placeholder="How can we help?"
              style={{ resize: "vertical" }}
            />
          </label>
          <a
            className="btn b3"
            href={cMailLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textAlign: "center" }}
          >
            Send by email
          </a>
          <a
            className="btn b2c"
            href={cWaLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textAlign: "center" }}
          >
            Send on WhatsApp
          </a>
          <p style={{ margin: 0, fontSize: 15, color: "#4a6356" }}>
            Gmail or WhatsApp opens with your message ready. Press send there.
          </p>
        </div>
      </div>
    </ScreenChrome>
  );
}
