importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBGcS26jpNyf0PKbYQLAqb-wvFnTUJP5ok",
  authDomain: "tripmate-6bad3.firebaseapp.com",
  projectId: "tripmate-6bad3",
  storageBucket: "tripmate-6bad3.firebasestorage.app",
  messagingSenderId: "139737662997",
  appId: "1:139737662997:web:7e04a256ed0e4e6706301c"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title || 'TripMate', {
    body: body || 'Your trip was updated!',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: 'tripmate-update',
    renotify: true
  });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});
