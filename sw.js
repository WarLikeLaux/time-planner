const CACHE_NAME = 'timeplanner-v2.0.0';
const STATIC_ASSETS = ['./index.html', './manifest.json'];

// Install event - cache static assets
self.addEventListener('install', event => {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then(cache => {
				console.log('Service Worker: Caching static assets');
				return cache.addAll(STATIC_ASSETS);
			})
			.then(() => {
				console.log('Service Worker: Skip waiting');
				self.skipWaiting();
			})
	);
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
	event.waitUntil(
		caches
			.keys()
			.then(cacheNames => {
				return Promise.all(
					cacheNames.map(cacheName => {
						if (cacheName !== CACHE_NAME) {
							console.log('Service Worker: Deleting old cache', cacheName);
							return caches.delete(cacheName);
						}
					})
				);
			})
			.then(() => {
				console.log('Service Worker: Claiming clients');
				self.clients.claim();
			})
	);
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
	// Only handle GET requests
	if (event.request.method !== 'GET') return;

	// Skip cross-origin requests
	if (!event.request.url.startsWith(self.location.origin)) return;

	event.respondWith(
		caches.match(event.request).then(response => {
			// Return cached version or fetch from network
			return (
				response ||
				fetch(event.request)
					.then(fetchResponse => {
						// Cache successful responses
						if (fetchResponse.status === 200) {
							const responseToCache = fetchResponse.clone();
							caches.open(CACHE_NAME).then(cache => {
								cache.put(event.request, responseToCache);
							});
						}
						return fetchResponse;
					})
					.catch(() => {
						// Fallback for offline mode
						if (event.request.destination === 'document') {
							return caches.match('./index.html');
						}
					})
			);
		})
	);
});

// Background sync for data persistence
self.addEventListener('sync', event => {
	console.log('Service Worker: Background sync triggered');

	if (event.tag === 'background-sync-tasks') {
		event.waitUntil(
			// Sync tasks or settings if needed
			Promise.resolve()
		);
	}
});

// Push notifications for timer completion
self.addEventListener('push', event => {
	if (event.data) {
		const data = event.data.json();
		const options = {
			body: data.body,
			icon: 'data:image/svg+xml,%3Csvg width="192" height="192" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="96" cy="96" r="84" fill="%230f172a" stroke="%233b82f6" stroke-width="12"/%3E%3Cpath d="M96 54V96L126 114" stroke="%233b82f6" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E',
			badge:
				'data:image/svg+xml,%3Csvg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="36" cy="36" r="30" fill="%233b82f6"/%3E%3Cpath d="M36 18V36L48 42" stroke="white" stroke-width="4" stroke-linecap="round"/%3E%3C/svg%3E',
			vibrate: [200, 100, 200],
			tag: 'timer-notification',
			requireInteraction: true,
			actions: [
				{
					action: 'start-break',
					title: 'Start Break',
				},
				{
					action: 'dismiss',
					title: 'Dismiss',
				},
			],
		};

		event.waitUntil(self.registration.showNotification(data.title, options));
	}
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
	event.notification.close();

	if (event.action === 'start-break') {
		event.waitUntil(clients.openWindow('./index.html#timer'));
	} else if (event.action === 'dismiss') {
		// Just close the notification
	} else {
		// Default action - open app
		event.waitUntil(clients.openWindow('./index.html'));
	}
});
