const CACHE_NAME = 'glowup-journey-v10-evening-treadmill';
const ASSETS = [
  './','./index.html','./manifest.webmanifest','./icon.svg','./apple-touch-icon.png',
  './hero-art.png','./hero-character.jpg',
  './exercise-warmup.jpg','./exercise-chair-squat.jpg','./exercise-glute-bridge.jpg',
  './exercise-wall-pushup.jpg','./exercise-marching.jpg'
];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', event => { if (event.request.method !== 'GET') return; event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request).then(response => { const copy=response.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy)); return response; }).catch(()=>caches.match('./index.html')))); });
