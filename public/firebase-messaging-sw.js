// Service Worker for OS / Mobile Web Push Notifications (Windows, macOS, Android, iOS)
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Handle background push events
self.addEventListener('push', (event) => {
  let data = { title: '📢 VS-Academy Announcement', body: 'New notice from Admin.' };
  
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body || data.message || 'Check VS-Academy for new updates.',
    icon: '/logo.png',
    badge: '/logo.png',
    vibrate: [200, 100, 200],
    data: {
      url: data.url || '/'
    },
    tag: 'vs-academy-notification',
    renotify: true
  };

  event.waitUntil(
    self.registration.showNotification(data.title || '📢 VS-Academy Announcement', options)
  );
});

// Handle user clicking OS / Mobile system notification banner
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const urlToOpen = event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
