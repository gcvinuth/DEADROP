const CACHE_NAME = 'cipher-msg-v2';
const ASSETS = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700;900&display=swap',
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@700,0&display=swap',
  'https://cdn.jsdelivr.net/npm/qr-code-styling@1.6.1/lib/qr-code-styling.min.js',
  'https://cdn.jsdelivr.net/npm/simple-peer@9.11.1/simplepeer.min.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
