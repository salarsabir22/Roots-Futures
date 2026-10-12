import Link from "next/link";
import { Logo } from "@/components/Logo";

export default async function PaymentFailurePage({
  searchParams,
}: {
  searchParams: Promise<{ basket?: string }>;
}) {
  const { basket } = await searchParams;

  return (
    <div style={{ background: "#f6efdc", color: "#17332a", minHeight: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          padding: "20px max(32px, calc((100% - 1136px) / 2))",
          background: "#0d3b2c",
          color: "#f6efdc",
        }}
      >
        <Logo light />
        <Link className="btn b2" href="/" style={{ padding: "10px 20px", fontSize: 16 }}>
          Back to home
        </Link>
      </div>

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
        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-fraunces), Fraunces, serif",
            fontSize: 46,
            lineHeight: 1.1,
          }}
        >
          Payment was not completed
        </h1>
        <p style={{ margin: 0, fontSize: 20, lineHeight: 1.6 }}>
          Your card was not charged, or the payment was cancelled. You can try again, or pay
          by bank transfer from checkout.
        </p>
        {basket && (
          <p style={{ margin: 0, fontSize: 16, color: "#4a6356" }}>
            Reference: <b>{basket}</b>
          </p>
        )}
        <Link className="btn b1" href="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}
