// const staticClub = "school-club-v1"
// // const lessons =  fetch('https://coursewok.herokuapp.com/').then((response)=>
// // response.json()).then((lessons)=>{
// //   return lessons
// // })
// const assets = [
//   "/",
//   "/index.html",
//   '/manifest.json',
  
// //   "/css/style.css",
// //   "/js/app.js",
// //   "/images/coffee1.jpg",
// //   "/images/coffee2.jpg",
// //   "/images/coffee3.jpg",
// //   "/images/coffee4.jpg",
// //   "/images/coffee5.jpg",
// //   "/images/coffee6.jpg",
// //   "/images/coffee7.jpg",
// //   "/images/coffee8.jpg",
// //   "/images/coffee9.jpg",
// ]



// self.addEventListener("install", installEvent => {
//   installEvent.waitUntil(
      
//     caches.open(staticClub).then(cache => {
    
//            return cache.addAll(assets)
//     })
//   )
// })
// self.addEventListener("fetch", fetchEvent => {
//     fetchEvent.respondWith(
//       caches.match(fetchEvent.request).then(res => {
//       return res | fetch(e.request).then((response)=>{
//         return caches.open(staticClub).then((cache)=>{
//           cache.put(e.request,response.clone())
//           return response
//         })
//       })
//       })
//     )
//   })