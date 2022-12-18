const CACHE_NAME = "version-1";
const urlsToCache = [
"/",
"index.html",
"/static/css/main.bc3830f3.chunk.css",
"/static/js/main.bef5de00.chunk.js",
"/static/js/runtime-main.e1767024.js",
"static/css/2.65f8c46c.chunk.css",
"static/js/2.83414947.chunk.js",
"/static/media/*"
];

const self = this;

// Listen for Install Event
self.addEventListener("install", (event) => {
  console.log(event);
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});
//Listen for Fetch Event
self.addEventListener("fetch", (event) => {
    if(!navigator.onLine){
    event.respondWith(
      caches.match(event.request).then((res) => {
         if(res) return res;
    }));
}
 });
 // Listen for Activate Event
 self.addEventListener("activate", (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);
    event.waitUntil(caches.keys().then((cacheNames) => Promise.all(cacheNames.map((cacheName) => {
       if (!cacheWhitelist.includes(cacheName)) {
          return caches.delete(cacheName);
       }
    }))));
 });
