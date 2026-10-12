export function HeroSvg() {
  return (
    <svg
      className="herosvg heroslide"
      aria-label="A child waters a sapling while another reads under a grown tree in Karachi"
      viewBox="0 0 600 520"
      preserveAspectRatio="xMaxYMax meet"
      style={{
        position: "absolute",
        right: 0,
        bottom: 0,
        width: "58%",
        height: "92%",
      }}
    >
      <defs>
        <radialGradient id="hglow">
          <stop offset="0" stopColor="#ffe3a0" stopOpacity=".9" />
          <stop offset="1" stopColor="#f0b84a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle className="sun" cx="330" cy="150" r="125" fill="url(#hglow)" />
      <g className="spin" style={{ transformOrigin: "330px 150px" }}>
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <path
            key={deg}
            d="M330 150m0-78v-26"
            stroke="#f0b84a"
            strokeWidth="6"
            strokeLinecap="round"
            transform={`rotate(${deg} 330 150)`}
            opacity=".8"
          />
        ))}
      </g>
      <circle cx="330" cy="150" r="54" fill="#ffd27a" />
      <g className="drift">
        <g fill="#fffaf0" opacity=".9">
          <circle cx="90" cy="110" r="16" />
          <circle cx="116" cy="98" r="22" />
          <circle cx="144" cy="110" r="16" />
          <rect x="90" y="108" width="54" height="18" rx="9" />
        </g>
      </g>
      <g className="drift" style={{ animationDelay: "-12s" }}>
        <g fill="#fffaf0" opacity=".75">
          <circle cx="270" cy="60" r="12" />
          <circle cx="292" cy="50" r="17" />
          <circle cx="314" cy="60" r="12" />
          <rect x="270" y="58" width="44" height="14" rx="7" />
        </g>
      </g>
      <path
        d="M0 400Q140 340 280 385T600 372V520H0Z"
        fill="#1a5c40"
        opacity=".75"
      />
      <path
        d="M30 420V372h26v-26h20v26h24V420ZM130 420V340h20v-20h14v20h20V420ZM190 420V380h30V420ZM330 420V376h84V420ZM340 376Q372 328 404 376Z"
        fill="#0f3d2c"
        opacity=".85"
      />
      <path d="M0 452Q150 412 300 442T600 430V520H0Z" fill="#2f8049" />
      <path d="M0 482Q200 456 400 480T600 470V520H0Z" fill="#14513b" />
      <g transform="translate(470 472) scale(1.75) translate(-100 -288)">
        <g className="hgrow" style={{ animationDelay: "1s" }}>
          <path
            d="M91 288C94 250 96 190 97 138L103 138C104 190 106 250 109 288Z"
            fill="#7a4f27"
          />
          <path
            d="M103 190C114 182 126 174 138 162M97 207C86 200 76 192 66 180"
            stroke="#7a4f27"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <g className="sway">
            <circle cx="100" cy="102" r="44" fill="#2f8049" />
            <circle cx="60" cy="124" r="30" fill="#2a7344" />
            <circle cx="140" cy="124" r="30" fill="#2a7344" />
            <circle cx="78" cy="92" r="30" fill="#3a9157" />
            <circle cx="124" cy="90" r="30" fill="#3a9157" />
            <circle cx="100" cy="78" r="28" fill="#4cb36c" />
            <circle cx="84" cy="104" r="20" fill="#5cc27a" />
            <circle cx="118" cy="68" r="14" fill="#6fcf88" />
            <circle cx="76" cy="78" r="12" fill="#6fcf88" />
            <circle cx="82" cy="112" r="5" fill="#f0b84a" />
            <circle cx="120" cy="102" r="5" fill="#ff8a65" />
            <circle cx="100" cy="132" r="5" fill="#f0b84a" />
            <circle cx="64" cy="128" r="5" fill="#ff8a65" />
            <circle cx="138" cy="126" r="5" fill="#f0b84a" />
          </g>
        </g>
      </g>
      <g className="hgrow" style={{ animationDelay: ".3s" }}>
        <path
          d="M345 470C345 452 346 438 345 424"
          stroke="#3f9b5b"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <g className="sway">
          <ellipse
            cx="334"
            cy="438"
            rx="13"
            ry="6"
            transform="rotate(-30 334 438)"
            fill="#4cb36c"
          />
          <ellipse
            cx="357"
            cy="430"
            rx="13"
            ry="6"
            transform="rotate(30 357 430)"
            fill="#5cc27a"
          />
          <ellipse
            cx="336"
            cy="422"
            rx="12"
            ry="5"
            transform="rotate(-35 336 422)"
            fill="#5cc27a"
          />
          <ellipse
            cx="355"
            cy="414"
            rx="12"
            ry="5"
            transform="rotate(35 355 414)"
            fill="#4cb36c"
          />
          <ellipse
            cx="345"
            cy="406"
            rx="5"
            ry="12"
            transform="rotate(0 345 406)"
            fill="#6fcf88"
          />
        </g>
      </g>
      <rect x="247" y="446" width="7" height="24" fill="#14513b" />
      <rect x="258" y="446" width="7" height="24" fill="#14513b" />
      <path
        d="M244 448V420Q244 412 256 412Q268 412 268 420V448Z"
        fill="#e9a23b"
      />
      <path
        d="M266 424L292 432"
        stroke="#c68642"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="256" cy="398" r="13" fill="#c68642" />
      <path
        d="M243 396Q244 382 256 383Q268 382 269 396Q262 389 243 396Z"
        fill="#2b1a0b"
      />
      <rect
        x="288"
        y="424"
        width="26"
        height="18"
        rx="3"
        fill="#7aa6c9"
        transform="rotate(-18 300 433)"
      />
      <path
        d="M312 429L328 440"
        stroke="#7aa6c9"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle
        className="drop"
        cx="331"
        cy="442"
        r="3"
        fill="#7ec8f0"
        style={{ animationDelay: "0s" }}
      />
      <circle
        className="drop"
        cx="336"
        cy="442"
        r="3"
        fill="#7ec8f0"
        style={{ animationDelay: "0.4s" }}
      />
      <circle
        className="drop"
        cx="340"
        cy="442"
        r="3"
        fill="#7ec8f0"
        style={{ animationDelay: "0.8s" }}
      />
      <path
        d="M508 470V452Q508 441 520 441Q532 441 532 452V470Z"
        fill="#d9534f"
      />
      <circle cx="520" cy="429" r="12" fill="#c68642" />
      <path
        d="M508 427Q509 415 520 416Q531 415 532 427Q525 421 508 427Z"
        fill="#2b1a0b"
      />
      <rect
        x="511"
        y="452"
        width="22"
        height="14"
        rx="2"
        fill="#f6efdc"
        stroke="#14513b"
        strokeWidth="2"
      />
      <ellipse
        className="fall"
        cx="450"
        cy="250"
        rx="8"
        ry="4"
        fill="#58c177"
        style={{ animationDelay: "0s" }}
      />
      <ellipse
        className="fall"
        cx="500"
        cy="230"
        rx="8"
        ry="4"
        fill="#f0b84a"
        style={{ animationDelay: "3s" }}
      />
      <ellipse
        className="fall"
        cx="420"
        cy="270"
        rx="8"
        ry="4"
        fill="#4cb36c"
        style={{ animationDelay: "6s" }}
      />
      <path
        className="bird"
        d="M0 0q9-9 18 0q9-9 18 0"
        stroke="#f6efdc"
        strokeWidth="2.5"
        fill="none"
      />
      {[40, 70, 200, 300, 400, 560].map((x, i) => (
        <path
          key={x}
          className="blade"
          d={`M${x} 478q3-18 9-28`}
          stroke="#58c177"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
    </svg>
  );
}
