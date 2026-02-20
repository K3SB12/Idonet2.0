const CACHE_NAME = 'idonet-premium-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Instalación
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activación
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache first, then network
      return response || fetch(event.request).then((fetchResponse) => {
        // Cache new requests
        if (event.request.method === 'GET') {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, fetchResponse.clone());
          });
        }
        return fetchResponse;
      });
    }).catch(() => {
      // Fallback para offline
      if (event.request.destination === 'document') {
        return caches.match('/index.html');
      }
    })
  );
});

// Sync en background (para cuando recupera conexión)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-evaluaciones') {
    event.waitUntil(syncEvaluacionesPendientes());
  }
});

async function syncEvaluacionesPendientes() {
  // Lógica para sincronizar datos pendientes
  console.log('Sincronizando evaluaciones pendientes...');
}
