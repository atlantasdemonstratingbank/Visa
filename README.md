# U.S. Visa Processing Portal — User Site

## What's inside
- `index.html` — Homepage with visa types, how-it-works, hero tracker
- `apply.html` — 5-step application form (Personal → Travel → Background → Documents → Review/Pay)
- `status.html` — Application status tracker with timeline
- `biometric.html` — Biometric appointment scheduler

## Already configured
- **Firebase project:** `visa-3504e` — applications save to a Firestore collection called `visa_applications` (created automatically on first submission)
- **Cloudinary:** cloud name `dbgxllxdb`, upload preset `efootball_screenshots` (reused from your X Club project — unsigned preset, already live)
- **Flutterwave:** existing public key, currently in test mode

## New: Multi-language (auto-detected)
All four pages now auto-detect the visitor's country by IP (via ipapi.co, a free API — no key needed) and switch language automatically:
- Portugal + Portuguese-speaking countries (Brazil, Angola, Mozambique, etc.) → Portuguese
- Spain + Spanish-speaking countries (Mexico, Argentina, Colombia, etc.) → Spanish
- Everyone else → English

There's also a manual EN / PT / ES switcher in the nav on every page — once someone picks a language manually it's remembered (stored in their browser) and overrides auto-detection on future visits. Translations live in `i18n.js`, shared across all pages — edit that one file to update wording in any language.

## New: Admin-configurable pricing
Visa fees are no longer hardcoded. `apply.html` and the homepage both read current pricing from a `settings/fees` Firestore document, which your admin panel's **Manage Pricing** screen writes to. If that document doesn't exist yet (e.g. before you've saved pricing once from the admin panel), built-in defaults are used as a fallback — nothing breaks.

## One thing to check before going live
Go to Firebase Console → your `visa-3504e` project → Firestore → Rules, and make sure `visa_applications` allows public **create** (so applicants can submit) and public **read** (so `status.html`/`biometric.html` can look up by reference number), but blocks public **update** — only your admin panel should be able to change status. The `settings/fees` document also needs public **read** so pricing displays correctly for visitors. Suggested rules:

```
match /visa_applications/{ref} {
  allow create: if true;
  allow read: if true;
  allow update: if request.auth != null
                && request.auth.token.email == 'viccylay30@gmail.com';
  allow delete: if false;
}

match /settings/fees {
  allow read: if true;
  allow write: if request.auth != null
               && request.auth.token.email == 'viccylay30@gmail.com';
}
```

## Switching Flutterwave to live
When ready to accept real payments, replace the test public key in `apply.html` with your live `FLWPUBK-...` key from your Flutterwave dashboard.

## Deploy
Upload this whole folder to Vercel (or drag-and-drop the zip into the Vercel dashboard). No build step needed — it's static HTML/JS.

## Notes
- Reference numbers are generated client-side as `US-YYYY-XXXXXX`.
- Visa fees by category are defined in the `FEES` object inside `apply.html`.
- Embassy/consulate locations for biometric booking are in the `LOCATIONS` array inside `biometric.html` — edit as needed.
- **Biometric photo capture:** `biometric.html` now includes a guided camera step before scheduling — it asks the applicant to look straight, turn right, turn left, then blink, capturing a photo at each prompt. Photos upload to Cloudinary under `x_kyc/{reference}` and are saved to the application's Firestore doc as `biometricPhotos`. This is a UX-guided capture only — it does not verify the user actually performed each action (no real face-tracking), it just walks them through the steps and records what the camera saw. The admin panel shows these photos in each applicant's detail view.

