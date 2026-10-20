const CACHE_NAME = 'glowup-journey-v16-auth-feedback-footer';
const ASSETS = [
  './','./index.html','./manifest.webmanifest','./icon.svg','./apple-touch-icon.png',
  './hero-art.png','./hero-character.jpg',
  './exercise-warmup.jpg','./exercise-chair-squat.jpg','./exercise-glute-bridge.jpg',
  './exercise-wall-pushup.jpg','./exercise-marching.jpg'
];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Optional artwork/icons are cached independently, so a missing asset can't block app updates.
    await Promise.all(ASSETS.map(async path => {
      try {
        const response = await fetch(path, { cache: 'reload' });
        if (response && response.ok) await cache.put(path, response.clone());
      } catch (_) { /* Continue installing even if one optional asset is unavailable. */ }
    }));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('glowup-journey-') && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request, { cache: 'no-store' }).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy)).catch(() => {});
      return response;
    }).catch(() => caches.match('./index.html').then(hit => hit || caches.match('./'))));
    return;
  }
  event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request).then(response => {
    if (response && response.ok) {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(() => {});
    }
    return response;
  }).catch(() => caches.match('./index.html'))));
});
