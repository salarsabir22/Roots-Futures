import { Logo } from "./Logo";
import { HeroSvg } from "./HeroSvg";
import { GrowStorySvg } from "./GrowStorySvg";
import type { AppState, Occasion } from "@/lib/types";
import { OCCASIONS } from "@/lib/types";

type Props = {
  state: AppState;
  summary: string;
  totalLabel: string;
  donateLabel: string;
  counts: number[];
  setOcc: (occ: Occasion) => void;
  setCount: (n: number) => void;
  goCheckout: () => void;
  corpCheckout: () => void;
  goContact: () => void;
};

export function HomePage({
  state,
  summary,
  totalLabel,
  donateLabel,
  counts,
  setOcc,
  setCount,
  goCheckout,
  corpCheckout,
  goContact,
}: Props) {
  return (
    <>
      <header
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          zIndex: 5,
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px max(32px, calc((100% - 1136px) / 2))",
          color: "#f6efdc",
          boxSizing: "border-box",
        }}
      >
        <a href="#top" style={{ display: "flex" }}>
          <Logo light />
        </a>
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 28,
            alignItems: "center",
            fontWeight: 500,
          }}
        >
          <a href="#ways">Plant now</a>
          <a href="#how">How it works</a>
          <a href="#why">Why Karachi</a>
          <a href="#corporate">Be our partner</a>
          <a href="#faq">FAQ</a>
          <a className="btn b1" href="#donate" style={{ padding: "12px 22px", fontSize: 16 }}>
            Donate
          </a>
        </nav>
      </header>

      <section
        id="top"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(#0d3b2c, #175a41)",
          color: "#f6efdc",
          minHeight: 760,
          display: "flex",
          alignItems: "center",
          padding: "130px max(32px, calc((100% - 1136px) / 2)) 90px",
          boxSizing: "border-box",
        }}
      >
        <HeroSvg />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 640,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontWeight: 700,
              letterSpacing: 2,
              color: "#f0b84a",
              textAlign: "start",
            }}
          >
            KARACHI · SERVICE LEARNING PROJECT
          </p>
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-fraunces), Fraunces, serif",
              fontSize: 68,
              lineHeight: 1.05,
              textAlign: "start",
            }}
          >
            Plant a tree. Educate a child.
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 22,
              lineHeight: 1.5,
              maxWidth: 560,
              textAlign: "start",
            }}
          >
            Plant it in memory of your marhoom, gift it to someone you love, or simply do
            a good deed for our city. Every tree is planted in Karachi and every donation
            teaches a child.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 30,
              fontFamily: "var(--font-noto-naskh), 'Noto Naskh Arabic', serif",
              color: "#f0b84a",
              textAlign: "end",
            }}
            dir="rtl"
          >
            ایک درخت، ایک بچہ، ایک روشن کل
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <a className="btn b1" href="#donate">
              Plant a tree
            </a>
            <a className="btn b2" href="#ways">
              Donate for your marhoom
            </a>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: 18,
              color: "#cfe3d5",
              alignSelf: "flex-start",
              textAlign: "left",
            }}
          >
            Scroll down and watch a seed grow into a tree.
          </p>
          <div style={{ maxWidth: 420, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700 }}>
              <span>Our 54-hour goal</span>
              <span>100 trees · 100 children</span>
            </div>
            <svg aria-label="Progress bar" viewBox="0 0 400 14" style={{ width: "100%", height: 14 }}>
              <rect width="400" height="14" rx="7" fill="#0b2c21" />
              <rect className="bar" width="0" height="14" rx="7" fill="#58c177" />
            </svg>
            <span style={{ fontSize: 16, color: "#cfe3d5" }}>
              Live counter goes here once donations begin.
            </span>
          </div>
        </div>
      </section>

      <section
        id="ways"
        style={{
          padding: "96px 32px",
          display: "flex",
          flexDirection: "column",
          gap: 40,
          maxWidth: 1200,
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <h2
          className="reveal"
          style={{
            margin: 0,
            fontFamily: "var(--font-fraunces), Fraunces, serif",
            fontSize: 48,
          }}
        >
          Three ways to plant
        </h2>
        <p style={{ margin: 0, fontSize: 20 }}>
          Every tree costs PKR 3,500 and also pays for one child&apos;s fees.
        </p>
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          <div
            className="card"
            style={{
              background: "#fffaf0",
              borderRadius: 24,
              padding: 36,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              border: "2px solid #e3d6b3",
            }}
          >
            <svg
              aria-label="Gift"
              viewBox="0 0 64 64"
              style={{ width: 56, height: 56 }}
              fill="none"
              stroke="#14513b"
              strokeWidth="4"
            >
              <rect x="8" y="26" width="48" height="30" />
              <rect x="4" y="16" width="56" height="10" />
              <path d="M32 16v40M32 16c-8-14-20-6-12 0M32 16c8-14 20-6 12 0" />
            </svg>
            <h3 style={{ margin: 0, fontSize: 28 }}>A gift</h3>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5, flex: 1 }}>
              Birthdays, weddings, Eid, graduations. Send a tree with a personal message
              instead of another bouquet.
            </p>
            <a className="btn b3" href="#donate">
              Gift a tree
            </a>
          </div>
          <div
            className="card"
            style={{
              background: "#14513b",
              color: "#f6efdc",
              borderRadius: 24,
              padding: 36,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <svg
              aria-label="Sapling"
              viewBox="0 0 64 64"
              style={{ width: 56, height: 56 }}
              fill="none"
              stroke="#f0b84a"
              strokeWidth="4"
            >
              <path d="M32 58V30M32 30C32 16 20 10 8 12c0 14 8 20 24 18ZM32 38c0-12 10-18 24-16 0 14-8 20-24 16Z" />
            </svg>
            <h3 style={{ margin: 0, fontSize: 28 }}>For your marhoom</h3>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5, flex: 1 }}>
              A living sadqa-e-jariya. Plant a tree in the name of a parent, grandparent or
              friend you miss, and a child learns in their memory.
            </p>
            <a className="btn b1" href="#donate">
              Plant in their memory
            </a>
          </div>
          <div
            className="card"
            style={{
              background: "#fffaf0",
              borderRadius: 24,
              padding: 36,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              border: "2px solid #e3d6b3",
            }}
          >
            <svg
              aria-label="City"
              viewBox="0 0 64 64"
              style={{ width: 56, height: 56 }}
              fill="none"
              stroke="#14513b"
              strokeWidth="4"
            >
              <path d="M6 58V30h16v28M22 58V14h20v44M42 58V34h16v24M30 24h4M30 34h4M30 44h4" />
            </svg>
            <h3 style={{ margin: 0, fontSize: 28 }}>For Karachi</h3>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5, flex: 1 }}>
              No occasion needed. Do a good deed, cool a street, clean some air and give a
              child a reason to look up.
            </p>
            <a className="btn b3" href="#donate">
              Do a good deed
            </a>
          </div>
        </div>
      </section>

      <section
        id="donate"
        style={{ background: "#e3ecdc", padding: "96px 32px", boxSizing: "border-box" }}
      >
        <div
          style={{
            maxWidth: 1136,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <h2
            className="reveal"
            style={{
              margin: 0,
              fontFamily: "var(--font-fraunces), Fraunces, serif",
              fontSize: 48,
            }}
          >
            Donate a tree now
          </h2>
          <p style={{ margin: 0, fontSize: 20 }}>
            PKR 3,500 plants one tree and pays for one child&apos;s fees. One donation → one
            tree planted → one child educated.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {OCCASIONS.map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setOcc(id)}
                className={!state.corp && state.occ === id ? "pill-on" : "pill-off"}
              >
                {label}
              </button>
            ))}
          </div>
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
          <div
            style={{
              background: "#fffaf0",
              borderRadius: 20,
              padding: 28,
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p style={{ margin: 0, fontSize: 22, fontWeight: 700, maxWidth: 560 }}>
                {summary}
              </p>
              <p
                style={{
                  margin: "6px 0 0",
                  fontSize: 34,
                  fontFamily: "var(--font-fraunces), Fraunces, serif",
                  color: "#14513b",
                }}
              >
                {totalLabel}
              </p>
            </div>
            <button type="button" className="btn b3" onClick={goCheckout}>
              {donateLabel}
            </button>
          </div>
          <p style={{ margin: 0, fontSize: 16, color: "#3e5c4e" }}>
            You get a certificate with your message, then a photo of your tree with its
            location. Pay by bank transfer on the next page.
          </p>
        </div>
      </section>

      <section
        id="how"
        style={{
          padding: "96px 32px",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 40,
          boxSizing: "border-box",
        }}
      >
        <h2
          className="reveal"
          style={{
            margin: 0,
            fontFamily: "var(--font-fraunces), Fraunces, serif",
            fontSize: 48,
          }}
        >
          Watch your donation grow
        </h2>
        <div
          className="story"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 48,
            alignItems: "flex-start",
          }}
        >
          <GrowStorySvg />
          <div style={{ flex: "1 1 420px", display: "flex", flexDirection: "column" }}>
            {(
              [
                ["01", "Donate", "Pick the occasion, add a name and message."],
                [
                  "02",
                  "We plant",
                  "Our student volunteers plant a native tree at a Karachi site [sites to confirm: Malir, Gadap, Clifton].",
                ],
                [
                  "03",
                  "A child learns",
                  "An interactive lesson on trees, clean air, food and health.",
                ],
                ["04", "You see it", "Certificate, photo and location of your tree."],
              ] as const
            ).map(([num, title, desc]) => (
              <div
                key={num}
                className="reveal"
                style={{
                  minHeight: 400,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 12,
                  borderTop: "2px solid #d9cba5",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-fraunces), Fraunces, serif",
                    fontSize: 96,
                    lineHeight: 1,
                    color: "#3f9b5b",
                  }}
                >
                  {num}
                </p>
                <h3 style={{ margin: 0, fontSize: 30 }}>{title}</h3>
                <p style={{ margin: 0, fontSize: 20, lineHeight: 1.5, maxWidth: 460 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="why"
        style={{
          background: "#0d3b2c",
          color: "#f6efdc",
          padding: "96px 32px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: 1136,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 40,
          }}
        >
          <h2
            className="reveal"
            style={{
              margin: 0,
              fontFamily: "var(--font-fraunces), Fraunces, serif",
              fontSize: 48,
              maxWidth: 760,
            }}
          >
            Karachi needs shade, and its children need school
          </h2>
          <div
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-fraunces), Fraunces, serif",
                  fontSize: 80,
                  color: "#f0b84a",
                }}
              >
                26.2M
              </p>
              <p style={{ margin: 0, fontSize: 20 }}>
                children in Pakistan are out of school (Pakistan Institute of Education)
              </p>
              <svg aria-label="Bar" viewBox="0 0 300 12" style={{ width: "100%", height: 12 }}>
                <rect className="bar" width="300" height="12" rx="6" fill="#f0b84a" />
              </svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-fraunces), Fraunces, serif",
                  fontSize: 80,
                  color: "#f0b84a",
                }}
              >
                7.63M
              </p>
              <p style={{ margin: 0, fontSize: 20 }}>of them are in Sindh</p>
              <svg aria-label="Bar" viewBox="0 0 300 12" style={{ width: "100%", height: 12 }}>
                <rect className="bar" width="195" height="12" rx="6" fill="#f0b84a" />
              </svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-fraunces), Fraunces, serif",
                  fontSize: 80,
                  color: "#58c177",
                }}
              >
                &lt;2%
              </p>
              <p style={{ margin: 0, fontSize: 20 }}>
                green cover in Karachi, a city that has also ranked among the world&apos;s
                most polluted (ProPakistani, IQAir)
              </p>
              <svg aria-label="Bar" viewBox="0 0 300 12" style={{ width: "100%", height: 12 }}>
                <rect className="bar" width="8" height="12" rx="6" fill="#58c177" />
              </svg>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <span className="btn b2" style={{ fontSize: 16 }}>
              SDG 1 · No Poverty
            </span>
            <span className="btn b2" style={{ fontSize: 16 }}>
              SDG 2 · Zero Hunger
            </span>
            <span className="btn b2" style={{ fontSize: 16 }}>
              SDG 3 · Good Health
            </span>
            <span className="btn b2" style={{ fontSize: 16 }}>
              SDG 4 · Quality Education
            </span>
          </div>
        </div>
      </section>

      <section
        id="corporate"
        style={{
          padding: "96px 32px",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 40,
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 760 }}>
          <p
            style={{
              margin: 0,
              fontWeight: 700,
              letterSpacing: 2,
              color: "#9a5b00",
            }}
          >
            FOR COMPANIES AND ORGANISATIONS
          </p>
          <h2
            className="reveal"
            style={{
              margin: 0,
              fontFamily: "var(--font-fraunces), Fraunces, serif",
              fontSize: 48,
            }}
          >
            Plant trees as a company
          </h2>
          <p style={{ margin: 0, fontSize: 20, lineHeight: 1.5 }}>
            Show your commitment to sustainability, give your CSR a face and delight your
            employees, partners and customers while a Karachi child learns.
          </p>
        </div>
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {(
            [
              [
                "Corporate planting",
                "Plant trees in the name of your company or your people, online, at events or with gift vouchers.",
              ],
              [
                "Plant with every purchase",
                "Restaurants, shops and brands plant a tree for each meal, order or booking. A tree number can even be printed on the product.",
              ],
              [
                "Team and client gifting",
                "Replace Eid hampers and event giveaways with trees carrying your message and certificate.",
              ],
              [
                "Impact reporting",
                "Certificates, geotagged photos and a summary of trees planted and children taught for your CSR report.",
              ],
            ] as const
          ).map(([title, desc]) => (
            <div
              key={title}
              style={{
                background: "#fffaf0",
                border: "2px solid #e3d6b3",
                borderRadius: 24,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <h3 style={{ margin: 0, fontSize: 24 }}>{title}</h3>
              <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5 }}>{desc}</p>
            </div>
          ))}
        </div>
        <div
          className="reveal"
          style={{
            background: "#123524",
            color: "#f6efdc",
            borderRadius: 24,
            padding: 32,
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: 2,
                color: "#e9a23b",
              }}
            >
              CORPORATE PRICING
            </p>
            <p style={{ margin: "4px 0 0", fontSize: 24 }}>
              PKR 3,500 per tree and child
            </p>
          </div>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7 }}>
            10 trees · PKR 35,000
            <br />
            50 trees · PKR 175,000
            <br />
            100 trees · PKR 350,000
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <h3 style={{ margin: 0, fontSize: 28 }}>Our partners</h3>
          <div
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 16,
            }}
          >
            {["[Partner logo]\n[__] trees", "[Partner logo]\n[__] trees", "[Partner logo]\n[__] trees", "Your company"].map(
              (label, i) => (
                <div
                  key={i}
                  style={{
                    border: "2px dashed #b9a877",
                    borderRadius: 16,
                    padding: 28,
                    textAlign: "center",
                    fontWeight: 700,
                    color: "#6b5b2e",
                    whiteSpace: "pre-line",
                  }}
                >
                  {label}
                </div>
              )
            )}
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <button type="button" className="btn b3" onClick={corpCheckout}>
            Plant as a company
          </button>
          <button type="button" className="btn b1" onClick={goContact}>
            Request a CSR proposal
          </button>
          <button type="button" className="btn b2c" onClick={goContact}>
            Be our partner
          </button>
        </div>
      </section>

      <section
        id="faq"
        style={{ background: "#fffaf0", padding: "96px 32px", boxSizing: "border-box" }}
      >
        <div
          style={{
            maxWidth: 1136,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <h2
            className="reveal"
            style={{
              margin: 0,
              fontFamily: "var(--font-fraunces), Fraunces, serif",
              fontSize: 48,
            }}
          >
            Questions
          </h2>
          <div>
            <h3 style={{ margin: "0 0 8px", fontSize: 22 }}>Where are the trees planted?</h3>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5 }}>
              In Karachi, on sites we agree with partners [to confirm]. Every tree gets an
              ID tag and a map pin.
            </p>
          </div>
          <div>
            <h3 style={{ margin: "0 0 8px", fontSize: 22 }}>
              What if a tree does not survive?
            </h3>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5 }}>
              We water and check our trees and replant where needed [care plan to confirm].
            </p>
          </div>
          <div>
            <h3 style={{ margin: "0 0 8px", fontSize: 22 }}>How is the child educated?</h3>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5 }}>
              Through a short, hands-on lesson on trees, clean air, food and health, matched
              one to one with your tree.
            </p>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        style={{
          background: "#0a2a1f",
          color: "#f6efdc",
          padding: "64px 32px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: 1136,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-fraunces), Fraunces, serif",
                fontSize: 32,
              }}
            >
              Roots &amp; Futures
            </p>
            <p style={{ margin: 0, fontSize: 16, color: "#cfe3d5" }}>
              A service-learning project by Shozab Jawwad, Umaima Raza, Sauleha Gul and
              Umair Umer · Contact: rootsandfuturespk@gmail.com · WhatsApp 03332388072
            </p>
          </div>
          <a className="btn b1" href="#donate">
            Plant a tree today
          </a>
        </div>
      </footer>
    </>
  );
}
