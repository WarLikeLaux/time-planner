const CACHE_NAME = 'timeplanner-v2.0.0'
const STATIC_ASSETS = ['./index.html', './manifest.json']

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        console.log('Service Worker: Skip waiting')
        self.skipWaiting()
      })
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log('Service Worker: Deleting old cache', cacheName)
              return caches.delete(cacheName)
            }
            return null
          })
        )
      })
      .then(() => {
        console.log('Service Worker: Claiming clients')
        return self.clients.claim()
      })
  )
})

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return
  if (!event.request.url.startsWith(self.location.origin)) return

  event.respondWith(
    caches.match(event.request).then(response => {
      return (
        response ||
                fetch(event.request)
                  .then(fetchResponse => {
                    if (fetchResponse.status === 200) {
                      const responseToCache = fetchResponse.clone()
                      caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseToCache)
                      })
                    }
                    return fetchResponse
                  })
                  .catch(() => {
                    if (event.request.destination === 'document') {
                      return caches.match('./index.html')
                    }
                    return null
                  })
      )
    })
  )
})

self.addEventListener('sync', event => {
  console.log('Service Worker: Background sync triggered')

  if (event.tag === 'background-sync-tasks') {
    event.waitUntil(syncTasks())
  }
})

async function syncTasks () {
  try {
    const clients = await self.clients.matchAll()
    clients.forEach(client => {
      client.postMessage({
        type: 'SYNC_TASKS',
        data: 'Background sync completed'
      })
    })
  } catch (error) {
    console.error('Background sync failed:', error)
  }
}

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }

  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({
      type: 'VERSION',
      version: CACHE_NAME
    })
  }
})

self.addEventListener('notificationclick', event => {
  event.notification.close()

  event.waitUntil(
    self.clients.matchAll().then(clients => {
      if (clients.length) {
        return clients[0].focus()
      }
      return self.clients.openWindow('/')
    })
  )
})

self.addEventListener('notificationclose', event => {
  console.log('Notification closed:', event.notification.tag)
})
