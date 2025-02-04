'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1be6f92b38914939923ba5edc9990068",
"assets/AssetManifest.bin.json": "ee09e339d56df5c10170c147a1da25b4",
"assets/AssetManifest.json": "a0620b139e395dc5789c8c2a890b3dc6",
"assets/assets/file/cv.pdf": "1cd3cd4f79fc84e618081bdb8cc60e03",
"assets/assets/fonts/IBMPlexMono-Medium.ttf": "3594148d0a094b10fc8e21ae7aaef7d9",
"assets/assets/fonts/IBMPlexMono-Regular.ttf": "ea96a0afddbe8ff439be465b16cbd381",
"assets/assets/fonts/Ubuntu-Light.ttf": "c9d68f61bf89fde6a24da697bc45d6f9",
"assets/assets/fonts/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/images/arduino.svg": "8315ba8a61078f15522f0bc0ec9ab878",
"assets/assets/images/background1.png": "b6a14ed4869d8b1c8d14287b5dbb6095",
"assets/assets/images/backgroundCard.png": "715194c1535445f1a3abd5ad5ebe84db",
"assets/assets/images/bookly.png": "9d9ee0488b7948e339249692822a4d04",
"assets/assets/images/briefcase.svg": "9b8b99ec824ec416123e56a9a0a9546e",
"assets/assets/images/c.svg": "1263adc5c31943343a27917e60138578",
"assets/assets/images/certificate.svg": "a8e522b8486bc62d4498e3155bcc6287",
"assets/assets/images/cpp.svg": "1549c2e5e8cf742e0838e10aaaacdada",
"assets/assets/images/css.svg": "8f7247295a43d53a6cb70a10f463b4de",
"assets/assets/images/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/images/download.svg": "2d143d9d5214db6d4935d83de0b1f769",
"assets/assets/images/ecommerce.png": "38566c7e0149b77a8ec0c8474bfa360d",
"assets/assets/images/firebase.svg": "7f1bf2795e067daf4ac3b42a2a140496",
"assets/assets/images/flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/assets/images/git.svg": "66d6f6620b61a0a60ee766b2ca8d152b",
"assets/assets/images/github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/images/html.svg": "6f3d69949ef38223d94a5a78a0ecd6ca",
"assets/assets/images/java.svg": "2ae4636a86ab462bdd844e0bfd2835f5",
"assets/assets/images/linkedin.svg": "9419e9f024acae4e057ac247710e7e2f",
"assets/assets/images/mail.svg": "0c496d7ebd0722a264b517e441c0df25",
"assets/assets/images/map.svg": "b582b1e00dcbbd872bd5e5c2008db198",
"assets/assets/images/mvvm.svg": "1271d35f4c083da69cf96ba3ee5ecc91",
"assets/assets/images/mysql.svg": "0b5bd1b7dc517deb2b8f85e2bcb87dfb",
"assets/assets/images/noteApp.png": "c94b62fcb39a09e05b63e709bf00b0dd",
"assets/assets/images/php.svg": "ec354443764fb6f9a249b8ba5adc0e65",
"assets/assets/images/portfolio1.svg": "f86a8427a85ec5d8cdf8b821bc3885ef",
"assets/assets/images/portfolio2.svg": "e24aa36bb812719a363c1313c769fa77",
"assets/assets/images/postman.svg": "fbfb57a181ce251926d686d12e6cee5a",
"assets/assets/images/programmer.svg": "66e020f1b22e2b161b591041bc3ffec0",
"assets/assets/images/python.svg": "8dc878284c9524c80011871c32cef6e5",
"assets/assets/images/responsive.svg": "f2516047097753bb072cc51ac175173a",
"assets/assets/images/whatsapp.svg": "c1484b6850a8b2ecb7a9f9263618bc9c",
"assets/assets/lang/en.json": "0da7039d376f5233ae8d374b6f87873c",
"assets/FontManifest.json": "bf53eefda539c07618e79a7d388e76f1",
"assets/fonts/MaterialIcons-Regular.otf": "781a9cdff9a3503c2b65b9a5b046d280",
"assets/NOTICES": "c26c835c38670e6a825eb3034bfe4079",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "2b666a036582615351dc3aaabaa9d4cd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf7aaf771b219fe9a81c32fd0c3cbafc",
"/": "bf7aaf771b219fe9a81c32fd0c3cbafc",
"main.dart.js": "dee14e8105504eaed165f82ef968cce4",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
