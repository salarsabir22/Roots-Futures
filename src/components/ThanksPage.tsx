import { ScreenChrome } from "./ScreenChrome";

type Props = {
  thanksPara: string;
  onHome: () => void;
};

export function ThanksPage({ thanksPara, onHome }: Props) {
  return (
    <ScreenChrome onHome={onHome}>
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "72px 32px 96px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          alignItems: "center",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <svg viewBox="0 0 120 120" style={{ width: 120, height: 120 }} aria-hidden>
          <circle cx="60" cy="60" r="56" fill="#3f9b5b" />
          <path
            d="M36 62L53 79L86 44"
            stroke="#f6efdc"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-fraunces), Fraunces, serif",
            fontSize: 46,
            lineHeight: 1.1,
          }}
        >
          Thank you for creating a positive impact in Karachi
        </h1>
        <p style={{ margin: 0, fontSize: 20, lineHeight: 1.6 }}>{thanksPara}</p>
        <div
          style={{
            background: "#fffaf0",
            border: "2px solid #e3d6b3",
            borderRadius: 24,
            padding: 32,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            width: "100%",
            boxSizing: "border-box",
            textAlign: "left",
          }}
        >
          <h3 style={{ margin: 0, fontSize: 22 }}>What happens next</h3>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6 }}>
            <b>1.</b> We review the payment receipt you uploaded.
            <br />
            <b>2.</b> We confirm your payment and plant your tree.
            <br />
            <b>3.</b> You receive a certificate with your tree&apos;s photo and location.
          </p>
        </div>
        <button type="button" className="btn b1" onClick={onHome}>
          Back to home
        </button>
      </div>
    </ScreenChrome>
  );
}
