"use client";

import { useCallback, useMemo, useState } from "react";
import { HomePage } from "./HomePage";
import { CheckoutPage } from "./CheckoutPage";
import { ThanksPage } from "./ThanksPage";
import { ContactPage } from "./ContactPage";
import {
  buildDerived,
  type AppState,
  type Occasion,
  type Screen,
} from "@/lib/types";

const initial: AppState = {
  screen: "home",
  occ: "memory",
  corp: false,
  n: 1,
  name: "",
  email: "",
  phone: "",
  org: "",
  recipient: "",
  message: "",
  err: false,
  cmsg:
    "Hello, we would like to receive your CSR proposal and discuss a corporate partnership.",
};

export function RootsFuturesApp() {
  const [state, setState] = useState<AppState>(initial);
  const derived = useMemo(() => buildDerived(state), [state]);

  const go = useCallback((screen: Screen, extra?: Partial<AppState>) => {
    setState((s) => ({ ...s, screen, err: false, ...extra }));
    try {
      window.scrollTo(0, 0);
    } catch {
      /* ignore */
    }
  }, []);

  const setOcc = useCallback((occ: Occasion) => {
    setState((s) => ({
      ...s,
      occ,
      corp: false,
      n: s.corp ? 1 : s.n,
    }));
  }, []);

  const setCount = useCallback((n: number) => {
    setState((s) => ({ ...s, n }));
  }, []);

  const setField = useCallback((field: keyof AppState, value: string) => {
    setState((s) => ({ ...s, [field]: value }));
  }, []);

  const onDone = useCallback(() => {
    setState((s) => {
      const d = buildDerived(s);
      if (d.valid) {
        try {
          window.scrollTo(0, 0);
        } catch {
          /* ignore */
        }
        return { ...s, screen: "thanks", err: false };
      }
      return { ...s, err: true };
    });
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", background: "#f6efdc" }}>
      {state.screen === "home" && (
        <HomePage
          state={state}
          summary={derived.summary}
          totalLabel={derived.totalLabel}
          donateLabel={derived.donateLabel}
          counts={derived.counts}
          setOcc={setOcc}
          setCount={setCount}
          goCheckout={() => go("checkout", { corp: false })}
          corpCheckout={() => go("checkout", { corp: true, n: 10 })}
          goContact={() => go("contact")}
        />
      )}
      {state.screen === "checkout" && (
        <CheckoutPage
          state={state}
          summary={derived.summary}
          totalLabel={derived.totalLabel}
          unitLine={derived.unitLine}
          noteLine={derived.noteLine}
          counts={derived.counts}
          waLink={derived.waLink}
          mailLink={derived.mailLink}
          valid={derived.valid}
          setOcc={setOcc}
          setCount={setCount}
          setField={setField}
          onDone={onDone}
          onHome={() => go("home", { corp: false })}
        />
      )}
      {state.screen === "thanks" && (
        <ThanksPage
          thanksPara={derived.thanksPara}
          waLink={derived.waLink}
          onHome={() => go("home", { corp: false })}
        />
      )}
      {state.screen === "contact" && (
        <ContactPage
          state={state}
          cMailLink={derived.cMailLink}
          cWaLink={derived.cWaLink}
          setField={setField}
          onHome={() => go("home", { corp: false })}
        />
      )}
    </div>
  );
}
