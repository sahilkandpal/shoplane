const CACHE_NAME = "version-1";
const urlsToCache = [
"/",
"index.html",
"static/js/bundle.js",
"/static/js/2.4b2dfb64.chunk.js",
"/static/js/runtime-main.e1767024.js",
"/static/js/main.f145c92a.chunk.js",
"static/css/main.087c9e7f.chunk.css",
"/static/css/2.65f8c46c.chunk.css",
"/static/media/*"
];

const self = this;

// Install SW
self.addEventListener("install", (event) => {
  console.log(event);
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});
//Listen for Requests
self.addEventListener("fetch", (event) => {
    if(!navigator.onLine){
    event.respondWith(
      caches.match(event.request).then((res) => {
         if(res) return res;
    }));
}
 });
 // Activate the SW 
 self.addEventListener("activate", (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);
    event.waitUntil(caches.keys().then((cacheNames) => Promise.all(cacheNames.map((cacheName) => {
       if (!cacheWhitelist.includes(cacheName)) {
          return caches.delete(cacheName);
       }
    }))));
 });
