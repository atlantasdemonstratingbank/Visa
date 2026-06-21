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

## New: Visa approval PDF
Once an application is approved, a **Download Visa Document** button appears on Track Status. It generates a 2-page PDF (cover/approval letter + a plain-background details page with the applicant's biometric photo) using `visa-pdf.js`, loaded via the jsPDF CDN library.

Every page carries a tiled "SANDBOX — NOT FOR REAL USE" watermark, a red "not an official document" header banner, and an explicit disclaimer box. The details page intentionally has no security-pattern background artwork and no machine-readable zone (MRZ) — the bottom of that page has a plain, clearly-labeled reference line instead. This is meant to look like a contest demo document, not something that could function as a real one — please don't strip these safeguards out.

Positions for the photo, the details block, and the reference line are admin-configurable — see Layout Editor in the admin README.

## New: Pay later, any order
Submitting the application form no longer forces immediate payment. After submitting, the applicant gets their reference number right away, with a **Pay Now** button (optional) on the success screen. They can skip it and pay anytime later from the Track Status page.

Payment and biometric verification can now happen in **either order** — biometric.html no longer blocks scheduling if the fee hasn't been paid yet.

Track Status (`status.html`) shows a combined message depending on what's done:
- Neither done → reminder that either step can be completed first, with buttons for both
- Paid, biometric pending → "proceed to biometric verification" + button
- Biometric done, payment pending → "Pay Now" button
- Both done → Under Review / Approved (with delivery address) / Denied, set by the admin

If someone is already paid, the Pay Now button simply doesn't appear — there's no way to pay twice through the UI.

## One thing to check before going live
Go to Firebase Console → your `visa-3504e` project → Firestore → Rules, and paste in the rules below. These allow applicants to create/read applications and update their own payment & biometric fields (no login required for that), while keeping admin-only fields (review status, delivery address) protected to your admin account:

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    match /visa_applications/{ref} {
      allow create: if true;
      allow read: if true;

      allow update: if request.auth != null
                    && request.auth.token.email == 'viccylay30@gmail.com';

      allow update: if request.auth == null
                    && request.resource.data.diff(resource.data).affectedKeys().hasOnly([
                      'feePaid', 'paymentRef',
                      'biometricScheduled', 'biometricLocation', 'biometricDate', 'biometricTime',
                      'biometricPhotos', 'biometricCaptureComplete',
                      'updatedAt'
                    ]);

      allow delete: if false;
    }

    match /settings/fees {
      allow read: if true;
      allow write: if request.auth != null
                   && request.auth.token.email == 'viccylay30@gmail.com';
    }

    match /settings/visaLayout {
      allow read: if true;
      allow write: if request.auth != null
                   && request.auth.token.email == 'viccylay30@gmail.com';
    }

    match /{document=**} {
      allow read, write: if false;
    }
  }
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

