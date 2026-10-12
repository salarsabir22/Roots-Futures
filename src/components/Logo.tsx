export function LogoMark({ size = 38 }: { size?: number }) {
  return (
    <svg viewBox="0 0 120 120" style={{ width: size, height: size }} aria-hidden>
      <circle cx="60" cy="60" r="60" fill="#123524" />
      <path d="M60 70C38 70 25 54 28 34C46 33 60 47 60 70Z" fill="#4cb36c" />
      <path d="M60 70C82 70 95 54 92 34C74 33 60 47 60 70Z" fill="#6fcf88" />
      <path d="M60 58C51 47 53 33 60 24C67 33 69 47 60 58Z" fill="#f0b84a" />
      <path
        d="M60 68V90"
        stroke="#4cb36c"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M22 90Q41 81 60 90Q79 81 98 90V98Q79 89 60 98Q41 89 22 98Z"
        fill="#f6efdc"
      />
      <path
        d="M60 98V110M60 100L49 108M60 100L71 108"
        stroke="#e9a23b"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span
      className="logo"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "var(--font-fraunces), Fraunces, serif",
        fontSize: 26,
        fontWeight: 800,
        color: light ? "#f6efdc" : undefined,
      }}
    >
      <LogoMark />
      Roots &amp; Futures
    </span>
  );
}
