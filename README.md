# Roots & Futures

Next.js landing page for planting trees in Karachi and educating children.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## PayFast card payments (Pakistan)

Donors can pay by card on checkout via [PayFast](https://gopayfast.com/) hosted checkout (Visa / Mastercard / PayPak / wallets). Card details are entered on PayFast — not on this site.

### 1. Create a merchant account

1. Sign up: [https://getstarted.apps.net.pk/signup](https://getstarted.apps.net.pk/signup)
2. Upload docs: **NTN**, **CNIC**, utility bill
3. After approval, PayFast emails **sandbox** `MERCHANT_ID` + `SECURED_KEY`
4. Run test payments, then request **live** credentials
5. Help: `info@gopayfast.com` · `+92 21 37132793`

Fees (typical): ~2.75% local cards, ~3% international (see [pricing](https://gopayfast.com/pricing-payfast/)). No setup fee.

### 2. Configure env

```bash
cp .env.example .env.local
```

Fill in:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
PAYFAST_MERCHANT_ID=...
PAYFAST_SECURED_KEY=...
PAYFAST_MERCHANT_NAME=Roots and Futures
PAYFAST_API_URL=https://ipg1.apps.net.pk/Ecommerce/api/
```

Use your public HTTPS URL for `NEXT_PUBLIC_APP_URL` in production (PayFast redirects need a reachable domain).

### 3. Test

1. `npm run dev`
2. Checkout → fill name, email, phone → **Pay by card**
3. Complete payment on PayFast’s page
4. You return to `/payment/success` or `/payment/failure`
5. Server notifications land on `POST /api/payfast/ipn` (check server logs)

Bank transfer remains available as a backup on the same checkout page.
