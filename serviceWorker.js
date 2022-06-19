const staticClub = "school-club-v1"

const assets = [
  "/",
  "/index.html",
  '/manifest.json',

]


self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
      
    caches.open(staticClub).then(cache => {
    
           return cache.addAll(assets)
    })
  )
})


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.open(staticClub).then(function(cache) {
        return cache.match(fetchEvent.request).then(function(response) {
          var fetchPromise = fetch(fetchEvent.request).then(function(networkResponse) {
            cache.put(fetchEvent.request, networkResponse.clone());
            return networkResponse;
          })
          return response || fetchPromise;
        })
      })
    );
  })

