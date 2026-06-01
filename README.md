# TripMate 🏕️ – Live Shared Travel Planner

Now powered by **Firebase Firestore** with real-time sync and push notifications.

---

## What's New
- ✅ **Live sync** — all group members see changes instantly
- 🔔 **Push notifications** — get notified when someone adds or ticks an item
- ☁️ **Cloud storage** — data safe on Firebase, not just local device
- 🔗 **Deep links** — invite link auto-opens the join screen

---

## Deploy in 5 Minutes (Netlify – Free)

1. Go to **netlify.com** → sign up free
2. Drag the entire `tripmate/` folder onto Netlify
3. You get a URL like `https://tripmate-abc.netlify.app`
4. **IMPORTANT**: In Netlify settings → go to **Site configuration → Headers** and add:
   ```
   /*
     Service-Worker-Allowed: /
   ```
   (This allows the notification service worker to run)

5. Share your URL with friends — they open it in Chrome → "Add to Home Screen" = installed like an app!

---

## Firebase Console — One-time Setup

Go to **Firebase Console → Firestore Database → Rules** and set:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```
(This is fine for personal use — tighten later if needed)

---

## How Notifications Work

1. User opens the app → taps **Enable Notifications**
2. Browser asks permission → user taps Allow
3. FCM token is saved to their profile in Firebase
4. When anyone adds/ticks an item → an activity log is written to Firestore
5. For full push delivery to background devices → set up a **Firebase Cloud Function** (optional upgrade)

---

## Files
- `index.html` — Full app (Firebase SDK loaded from CDN)
- `manifest.json` — PWA metadata
- `firebase-messaging-sw.js` — Service worker for background notifications

---

## Google Play Store (later)
Use **pwabuilder.com** with your Netlify URL → generates APK → submit to Play Store ($25 one-time fee).
