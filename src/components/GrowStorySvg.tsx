export function GrowStorySvg() {
  return (
    <div
      className="pl-sky"
      style={{
        flex: "1 1 380px",
        position: "sticky",
        top: 96,
        height: 520,
        borderRadius: 28,
        overflow: "hidden",
        background: "#d9ecd6",
      }}
    >
      <svg
        viewBox="0 0 200 360"
        preserveAspectRatio="xMidYMax meet"
        style={{ width: "100%", height: "100%", display: "block", overflow: "visible" }}
      >
        <defs>
          <radialGradient id="halo">
            <stop offset="0" stopColor="#f6efdc" stopOpacity=".55" />
            <stop offset="1" stopColor="#f6efdc" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="190" r="104" fill="url(#halo)" />
        <g className="pl-cloud" style={{ animationDelay: "0s" }}>
          <g transform="translate(-40 40) scale(0.8)" fill="#fffaf0" opacity=".9">
            <circle cx="20" cy="30" r="14" />
            <circle cx="44" cy="20" r="20" />
            <circle cx="68" cy="30" r="14" />
            <rect x="20" y="28" width="48" height="16" rx="8" />
          </g>
        </g>
        <g className="pl-cloud" style={{ animationDelay: "-9s" }}>
          <g transform="translate(110 95) scale(0.6)" fill="#fffaf0" opacity=".9">
            <circle cx="20" cy="30" r="14" />
            <circle cx="44" cy="20" r="20" />
            <circle cx="68" cy="30" r="14" />
            <rect x="20" y="28" width="48" height="16" rx="8" />
          </g>
        </g>
        <g className="pl-sun">
          <circle cx="160" cy="46" r="15" fill="#f0b84a" />
        </g>
        <rect x="-300" y="288" width="800" height="200" fill="#7a5230" />
        <ellipse cx="40" cy="330" rx="8" ry="3" fill="#5e3d20" />
        <ellipse cx="160" cy="320" rx="10" ry="3" fill="#5e3d20" />
        <ellipse cx="150" cy="342" rx="7" ry="3" fill="#5e3d20" />
        <path
          className="pl-root"
          pathLength={1}
          d="M100 304C100 322 98 334 96 346"
          stroke="#d8b985"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="pl-root"
          pathLength={1}
          d="M99 314C88 322 76 326 66 336"
          stroke="#d8b985"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="pl-root"
          pathLength={1}
          d="M101 316C112 322 124 326 134 334"
          stroke="#d8b985"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="pl-root"
          pathLength={1}
          d="M97 330C90 336 84 340 80 348"
          stroke="#d8b985"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="-300" y="283" width="800" height="11" fill="#4cb36c" />
        <ellipse className="pl-seed" cx="100" cy="306" rx="7" ry="5" fill="#3b2412" />
        <path
          className="pl-tr"
          d="M91 288C94 250 96 190 97 138L103 138C104 190 106 250 109 288Z"
          fill="#7a4f27"
        />
        <g className="pl-br1">
          <path
            d="M103 190C114 182 126 174 138 162"
            stroke="#7a4f27"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse
            cx="142"
            cy="158"
            rx="9"
            ry="4.5"
            transform="rotate(-40 142 158)"
            fill="#3a9157"
          />
          <ellipse
            cx="134"
            cy="168"
            rx="9"
            ry="4.5"
            transform="rotate(20 134 168)"
            fill="#3a9157"
          />
        </g>
        <g className="pl-br2">
          <path
            d="M97 207C86 200 76 192 66 180"
            stroke="#7a4f27"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse
            cx="62"
            cy="176"
            rx="9"
            ry="4.5"
            transform="rotate(40 62 176)"
            fill="#3a9157"
          />
          <ellipse
            cx="72"
            cy="186"
            rx="9"
            ry="4.5"
            transform="rotate(-20 72 186)"
            fill="#3a9157"
          />
        </g>
        <g className="pl-br3">
          <path
            d="M97 242C88 238 80 234 72 226"
            stroke="#7a4f27"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse
            cx="68"
            cy="222"
            rx="9"
            ry="4.5"
            transform="rotate(30 68 222)"
            fill="#3a9157"
          />
          <ellipse
            cx="78"
            cy="234"
            rx="9"
            ry="4.5"
            transform="rotate(-15 78 234)"
            fill="#3a9157"
          />
        </g>
        <g className="pl-cr">
          <g className="pl-A">
            <ellipse
              cx="92"
              cy="134"
              rx="9"
              ry="4.5"
              transform="rotate(-25 92 134)"
              fill="#7fd68f"
            />
            <ellipse
              cx="108"
              cy="134"
              rx="9"
              ry="4.5"
              transform="rotate(25 108 134)"
              fill="#7fd68f"
            />
          </g>
          <g className="pl-B">
            <ellipse
              cx="86"
              cy="142"
              rx="12"
              ry="5"
              transform="rotate(-30 86 142)"
              fill="#4cb36c"
            />
            <ellipse
              cx="114"
              cy="134"
              rx="12"
              ry="5"
              transform="rotate(30 114 134)"
              fill="#5cc27a"
            />
            <ellipse
              cx="88"
              cy="126"
              rx="12"
              ry="5"
              transform="rotate(-35 88 126)"
              fill="#5cc27a"
            />
            <ellipse
              cx="112"
              cy="119"
              rx="12"
              ry="5"
              transform="rotate(35 112 119)"
              fill="#4cb36c"
            />
            <ellipse
              cx="100"
              cy="108"
              rx="5"
              ry="12"
              transform="rotate(0 100 108)"
              fill="#6fcf88"
            />
          </g>
          <g className="pl-can">
            <g className="pl-sway">
              <circle cx="100" cy="102" r="44" fill="#2f8049" />
              <circle cx="60" cy="124" r="30" fill="#2a7344" />
              <circle cx="140" cy="124" r="30" fill="#2a7344" />
              <circle cx="78" cy="92" r="30" fill="#3a9157" />
              <circle cx="124" cy="90" r="30" fill="#3a9157" />
              <circle cx="100" cy="78" r="28" fill="#4cb36c" />
              <circle cx="84" cy="104" r="20" fill="#5cc27a" />
              <circle cx="118" cy="68" r="14" fill="#6fcf88" />
              <circle cx="76" cy="78" r="12" fill="#6fcf88" />
              <circle className="pl-f0" cx="82" cy="112" r="5" fill="#f0b84a" />
              <circle className="pl-f1" cx="120" cy="102" r="5" fill="#ff8a65" />
              <circle className="pl-f2" cx="100" cy="132" r="5" fill="#f0b84a" />
              <circle className="pl-f3" cx="64" cy="128" r="5" fill="#ff8a65" />
              <circle className="pl-f4" cx="138" cy="126" r="5" fill="#f0b84a" />
            </g>
          </g>
        </g>
        {(
          [
            ["pl-l0", "Seed"],
            ["pl-l1", "Sprout"],
            ["pl-l2", "Sapling"],
            ["pl-l3", "Young tree"],
            ["pl-l4", "A full tree"],
          ] as const
        ).map(([cls, label]) => (
          <text
            key={cls}
            className={`pl-lab ${cls}`}
            x="100"
            y="328"
            textAnchor="middle"
            fontFamily="DM Sans,sans-serif"
            fontSize="13"
            fontWeight="700"
            fill="#f6efdc"
          >
            {label}
          </text>
        ))}
        <g className="pl-kid">
          <circle cx="158" cy="262" r="7" fill="#c68642" />
          <path d="M148 284L150 270Q158 265 166 270L168 284Z" fill="#e9a23b" />
          <rect
            x="161"
            y="274"
            width="13"
            height="8"
            rx="1"
            fill="#f6efdc"
            stroke="#14513b"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}
