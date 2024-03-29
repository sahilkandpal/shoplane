const CACHE_NAME = "version-1";
const urlsToCache = [
"/",
"index.html",
"static/js/bundle.js",
"/static/js/0.chunk.js",
"/static/js/main.chunk.js",
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
