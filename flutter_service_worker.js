'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e02752f1742fc5d09e2e1317155c1b88",
"assets/AssetManifest.bin.json": "141b17f128b607bc7c39a2453229edd0",
"assets/AssetManifest.json": "be6912e911d96aa7506ec29458257d3d",
"assets/assets/file/cv.pdf": "1cd3cd4f79fc84e618081bdb8cc60e03",
"assets/assets/fonts/Cairo-Bold.ttf": "80ada5fcee2d9415ee00ef7739eba6df",
"assets/assets/fonts/Cairo-Regular.ttf": "81b37df3b28d397659607391993eef22",
"assets/assets/fonts/IBMPlexMono-Medium.ttf": "3594148d0a094b10fc8e21ae7aaef7d9",
"assets/assets/fonts/IBMPlexMono-Regular.ttf": "ea96a0afddbe8ff439be465b16cbd381",
"assets/assets/fonts/Ubuntu-Light.ttf": "c9d68f61bf89fde6a24da697bc45d6f9",
"assets/assets/fonts/Ubuntu-Regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/images/arduino.svg": "8315ba8a61078f15522f0bc0ec9ab878",
"assets/assets/images/background1.png": "b6a14ed4869d8b1c8d14287b5dbb6095",
"assets/assets/images/backgroundCard.png": "715194c1535445f1a3abd5ad5ebe84db",
"assets/assets/images/bookly.png": "9d9ee0488b7948e339249692822a4d04",
"assets/assets/images/briefcase.svg": "07ef0de507b39c9ba8559d3cea3ead4f",
"assets/assets/images/c.svg": "1263adc5c31943343a27917e60138578",
"assets/assets/images/certificate.svg": "a8e522b8486bc62d4498e3155bcc6287",
"assets/assets/images/clean_architecture.svg": "8a096fd550e07a18684177757ecc92d8",
"assets/assets/images/cpp.svg": "1549c2e5e8cf742e0838e10aaaacdada",
"assets/assets/images/css.svg": "97e0b59800bc30b5c18a7b12dfbbaf6d",
"assets/assets/images/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/images/download.svg": "490c2015cc413844f0574df796eccb8d",
"assets/assets/images/ecommerce.png": "38566c7e0149b77a8ec0c8474bfa360d",
"assets/assets/images/firebase.svg": "cef7c97ac5ad507248af8075e5f58c50",
"assets/assets/images/flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/assets/images/full_ecommerce.png": "cda74878b76790ac3748345277fdabd6",
"assets/assets/images/git.svg": "0192560034c6b7970c926e75dff17fdf",
"assets/assets/images/github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/images/google_map.svg": "ffd379f1a749760c7861d66b84011a69",
"assets/assets/images/html.svg": "10328348fe4795e4153dd39118804af4",
"assets/assets/images/java.svg": "827341755e8528d1cb9c24f70fbde41f",
"assets/assets/images/linkedin.svg": "0659880440409cbb8306f9b25d705a99",
"assets/assets/images/mail.svg": "15faaf77fb6e401838442e04e46d254b",
"assets/assets/images/map.svg": "5a61ccd6a1d6c648e0ec51935293c773",
"assets/assets/images/mvvm.svg": "6e4b87cc65531acd1c831cb57bbd117a",
"assets/assets/images/mysql.svg": "12c85f32d11a67556487d94178f41e2c",
"assets/assets/images/noteApp.png": "c94b62fcb39a09e05b63e709bf00b0dd",
"assets/assets/images/payment.svg": "5d1f7b51d693ebf4f0975d7b90fddbdf",
"assets/assets/images/php.svg": "262a4862fa5c198d50dfa3590cdfc4b1",
"assets/assets/images/portfolio1.svg": "862fd6578620763546873ec43e9673b1",
"assets/assets/images/portfolio2.svg": "5701d69e38baad62054980ebfdc14c94",
"assets/assets/images/postman.svg": "fbfb57a181ce251926d686d12e6cee5a",
"assets/assets/images/programmer.svg": "66e020f1b22e2b161b591041bc3ffec0",
"assets/assets/images/python.svg": "8dc878284c9524c80011871c32cef6e5",
"assets/assets/images/responsive.svg": "f2516047097753bb072cc51ac175173a",
"assets/assets/images/whatsapp.svg": "c1484b6850a8b2ecb7a9f9263618bc9c",
"assets/assets/lang/ar.json": "91c7eb312350471d124ec5e7964ddad3",
"assets/assets/lang/en.json": "eb875f1ecfac8585f77a5ff59e4b1f8c",
"assets/assets/lottie/developer.json": "b6a331a54f98cd1745bd6a91a2541a48",
"assets/assets/lottie/flutter_logo.json": "0e6337e7fbc4ce8fefa9b077bd4c2fa2",
"assets/assets/lottie/projects.json": "838dee70f11609332e3cb33b2b51e272",
"assets/assets/lottie/screening.json": "6313ca64269b96dc5b8fac96e61dd41c",
"assets/assets/lottie/skills.json": "727091ccefb2f963a34bba437816351d",
"assets/assets/lottie/welcome.json": "59e69e70c2d2c84e0993ba2e979d8a52",
"assets/assets/rive/figma_flutter.riv": "587368cc301eb0b3bbcccd39139a7ac2",
"assets/assets/rive/like_explosion.riv": "94b72e5a93cef9ffbec92330e2bd3944",
"assets/assets/rive/mode_switch.riv": "896c2a9668e4acbcd509e43636dea80a",
"assets/assets/rive/reboat.riv": "dea4a0b192bc5ba81c09f6abb1d1c0b5",
"assets/assets/rive/wizcat.riv": "a6961273694b93a3c9daa09ebb7b6d57",
"assets/FontManifest.json": "ee220d2579fc8879ade7ef8e45e68881",
"assets/fonts/MaterialIcons-Regular.otf": "e74b96135abf73b9fb3633bdaa19e85c",
"assets/NOTICES": "fe94f762dcf85f2e2abc92bf3e8cb7ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8023110f652844bc12b7bf0dabacfc13",
"/": "8023110f652844bc12b7bf0dabacfc13",
"main.dart.js": "651046c7d9889239dee4b2c336ddccbb",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
