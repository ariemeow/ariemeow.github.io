const staticDevCoffee = "mochammadzachri-website"
const assets = [
    "/",
    "/index.html",
    "vendor/jquery/jquery.min.js",
    "vendor/bootstrap/js/bootstrap.bundle.min.js",
    "vendor/jquery-easing/jquery.easing.min.js",
    "js/resume.min.js",
    "css/resume.min.css",
    "vendor/fontawesome-free/css/all.min.css",
    "vendor/bootstrap/css/bootstrap.min.css",
    "/img/cyberlabs.png",
    "/img/digitama.png",
    "/img/im.png",
    "/img/imceria.png",
    "/img/jovian.jpg",
    "/img/profile.JPG",
    "/img/qwords.png",
    "/img/visinesia.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})