const staticClub = "school-club-v1"
// const lessons =  fetch('https://coursewok.herokuapp.com/').then((response)=>
// response.json()).then((lessons)=>{
//   return lessons
// })
const assets = [
  "/",
  "/index.html",
  '/manifest.json',
  
//   "/css/style.css",
//   "/js/app.js",
//   "/images/coffee1.jpg",
//   "/images/coffee2.jpg",
//   "/images/coffee3.jpg",
//   "/images/coffee4.jpg",
//   "/images/coffee5.jpg",
//   "/images/coffee6.jpg",
//   "/images/coffee7.jpg",
//   "/images/coffee8.jpg",
//   "/images/coffee9.jpg",
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
      caches.match(fetchEvent.request).then(res => {
      return res | fetch(fetchEvent.request).then((response)=>{
        return caches.open(staticClub).then((cache)=>{
          cache.put(fetchEvent.request,response.clone())
          return response
        })
      })
      })
    )

    // fetchEvent.respondWith((async ()=>{
    //   const cachedRes = await caches.match(fetchEvent.request);
    //   if(cachedRes){
    //     return cachedRes
    //   } 

    //   const response = await fetch(fetchEvent.request)

    //   // if (!response || response.status !== 200 || response.type !== 'basic') {
    //   //   return response;
    //   // }
    //   if (ENABLE_DYNAMIC_CACHING) {
    //     const responseToCache = response.clone();
    //     const cache = await caches.open(staticClub)
    //     await cache.put(event.request, response.clone());
    //   }
    
    //   return response;
    // }))
  })