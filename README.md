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

## One thing to check before going live
Go to Firebase Console → your `visa-3504e` project → Firestore → Rules, and make sure `visa_applications` allows public **create** (so applicants can submit) and public **read** (so `status.html`/`biometric.html` can look up by reference number), but blocks public **update** — only your admin panel should be able to change status. Suggested rule:

```
match /visa_applications/{ref} {
  allow create: if true;
  allow read: if true;
  allow update: if request.auth != null
                && request.auth.token.email == 'viccylay30@gmail.com';
  allow delete: if false;
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

