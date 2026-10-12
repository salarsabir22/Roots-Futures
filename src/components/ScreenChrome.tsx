import { Logo } from "./Logo";

export function ScreenChrome({
  children,
  onHome,
}: {
  children: React.ReactNode;
  onHome: () => void;
}) {
  return (
    <div style={{ background: "#f6efdc", color: "#17332a", minHeight: 900 }}>
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
        <button
          type="button"
          className="btn b2"
          onClick={onHome}
          style={{ padding: "10px 20px", fontSize: 16 }}
        >
          Back to home
        </button>
      </div>
      {children}
    </div>
  );
}
