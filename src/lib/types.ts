export type Screen = "home" | "checkout" | "thanks" | "contact";
export type Occasion = "gift" | "memory" | "karachi";

export type AppState = {
  screen: Screen;
  occ: Occasion;
  corp: boolean;
  n: number;
  name: string;
  email: string;
  phone: string;
  org: string;
  recipient: string;
  message: string;
  err: boolean;
  cmsg: string;
};

export const PRICE = 3500;
export const EMAIL = "rootsandfuturespk@gmail.com";
export const WHATSAPP = "923332388072";

export const OCCASIONS: [Occasion, string][] = [
  ["gift", "A gift"],
  ["memory", "For my marhoom"],
  ["karachi", "For Karachi"],
];

export function fmt(x: number) {
  return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function buildDerived(st: AppState) {
  const n = st.n;
  const corp = st.corp;
  const tot = n * PRICE;
  const lab: Record<Occasion, string> = {
    gift: "as a gift",
    memory: "in memory of someone dear",
    karachi: "for Karachi",
  };
  const trees = n + (n === 1 ? " tree" : " trees");
  const kids = n + (n === 1 ? " child" : " children");
  const summary = corp
    ? `Plant ${trees} for ${st.org || "your company"} and educate ${kids}.`
    : `Plant ${trees} ${lab[st.occ]} and educate ${kids}.`;
  const valid = !!(st.name.trim() && (st.email.trim() || st.phone.trim()));
  const who = (st.name || "") + (corp && st.org ? ` (${st.org})` : "");
  const body =
    `Assalam o Alaikum, I have contributed PKR ${fmt(tot)} to Roots & Futures: ${summary} Name: ${who}. Contact: ${st.email || ""} ${st.phone || ""}.` +
    (st.recipient && !corp ? ` In the name of: ${st.recipient}.` : "") +
    (st.message ? ` Certificate message: ${st.message}` : "") +
    " My payment receipt is attached.";
  const e = encodeURIComponent;
  const cb = `Hello Roots & Futures, ${st.cmsg} Name: ${st.name}. Company: ${st.org}. Email: ${st.email}. Phone: ${st.phone}.`;

  return {
    n,
    kids,
    trees,
    tot,
    valid,
    summary,
    totalLabel: `PKR ${fmt(tot)}`,
    unitLine: `${n} x PKR 3,500`,
    noteLine: `Please transfer PKR ${fmt(tot)} and use your name as the payment reference. Your tree is planted and your certificate sent once we confirm the payment.`,
    thanksPara: `Thank you, ${st.name ? st.name.split(" ")[0] : "friend"}. Your contribution of PKR ${fmt(tot)} will plant ${trees} and open a classroom door for ${kids}. Together we are making our city greener and its children brighter.`,
    donateLabel: `Donate PKR ${fmt(tot)}`,
    counts: corp ? [10, 25, 50, 100] : [1, 5, 10, 25],
    waLink: `https://wa.me/${WHATSAPP}?text=${e(body)}`,
    mailLink: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${e(`Roots & Futures: PKR ${fmt(tot)} contribution`)}&body=${e(body)}`,
    cMailLink: `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${e("CSR proposal request")}&body=${e(cb)}`,
    cWaLink: `https://wa.me/${WHATSAPP}?text=${e(cb)}`,
  };
}
