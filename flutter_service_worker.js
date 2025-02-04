'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "ae766ad2e4fe2dd586cd4565fa45593c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "61c251d4f0d4151afc97dee98083690f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "774ee7ec069e294972c5a6df501eba66",
".git/logs/refs/heads/main": "dfafb40a47e93bbe08b8af0078dd00bd",
".git/objects/02/b47bd8ba9130df1826888ac35c38492f38fe32": "75c1f542d13b51e7581355eff7bede1c",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/e3a2d3fdb1b555b6dc046aebc8138198fb25de": "32a992c3deb941e6240529cee118797c",
".git/objects/13/2949666c0dc4f5670f241461da391097ef4211": "c18572795712255e7a01ace80c5baeda",
".git/objects/1c/adbd626018f4ae26095c1ebcf0657bd8df290c": "f1caebbd8d0793db3712608efdb74b7e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/4fb5ef75fcb5bce7b1ddbd8ebed91963337424": "3b2bc3e1463636231a274687adfc8cb8",
".git/objects/21/26dc06c1cdb1153dc5f8147fa0f27abc6bdd8a": "86ebfe72ac4199b18a09c4d51308c325",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2a/8dc191698d61a4700825ed5e91b5ac113a15eb": "32cebf702fd6bcdcfff56ca435265048",
".git/objects/30/c02757838f65e29b5fa156b45bcc596d913b60": "6caa4510e51032e7352bcb69bd269b5c",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/deec44af26e43743979835da9eefd2ed245e60": "50a2d2231f65b32b0e46071b77e40c71",
".git/objects/39/f178db700c34e524d0b9dc52bd020b44d70d01": "bdb7e7d93646d92c06db466abf1c2392",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/2cb309c96da621bac96cc7fe11ca75ef79f623": "546d62fa0209959b63eb01326b9cce4a",
".git/objects/3d/895c6b06f70de4eefecc7fe92e1fa31debbe83": "3b013bd0acbf2faf6d33afc826c1030d",
".git/objects/3d/c6ace17e019c6b1072a3fd73ce6374c68a25f8": "13d9e8ce41ec73f7256404f268c4e665",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/4a/025ff64104dcae459ff8f947b7a80528f3cec3": "f2b8f14c966b7a4460b9ae6cc5186c63",
".git/objects/4a/0a1dcc85bc5f0a9434e61053fcfe02ecd5678c": "8199243f98639fcec8063a6abeb24dbe",
".git/objects/4c/7a7aabda1070f65c7cdba47ae6dc07a10f35e2": "a825ab3f7cbabd861ad8519c70ac5aee",
".git/objects/4e/eac87cf14c4b897c8295b91f22469880f89dcf": "93d13298276772f018237a6c0c42a251",
".git/objects/50/543f4f30113b782858f6f9b0c36ad3518c37c2": "38297302f68b67edc3aa417de7217579",
".git/objects/52/5edb57d4113bb115ff383dee3c67295d235918": "1687b6b968e731a516a1fbd69d8af065",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/371d09bb97b92d6cf143eaa98f01db5597efbf": "015b4e0e79aab0932f609c627809868b",
".git/objects/59/1578cf736c92203445d16397d9f2968ce8cbd0": "b3828fa99126f15347c450f806644102",
".git/objects/5c/4c54dfba7d306c00a12945a01847fc08a2af9c": "3853c992a0dc6c5ec1936910e6786564",
".git/objects/5d/384fca73e3188f20a4fb2803909dd610d11402": "925fbf01c9bdf059a8ee939cc066e7aa",
".git/objects/5f/dc60268521609eb3aec287afd0c61979d7b12b": "5a67fb73996d62064045f3b1799b7bb3",
".git/objects/65/2ebfa6d586adacbbc3cae1e494643003fb85ef": "95fec8ffd6c397db4b6eff18241a937b",
".git/objects/68/dace58f6caa701fc56b0b781322018ce91003e": "03a8b3a41e53756ce282e7e0553b8816",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/9ebb075be1288b0edf25afa9a7ffe7ecc72811": "b9c7f62d22f88f78db10245643643a91",
".git/objects/75/b19797d142e0d9c29894580e6310bb2f78fb96": "a73e6f8ccbe99d21e5276271b8956609",
".git/objects/81/ca3dcc9264054eda54892f2105a4d9f85eaf50": "cba4b9fb7fdb002b24369ec37880ce0a",
".git/objects/81/d09262ed619e30f1021b29ac20e6e4f2804ec2": "be4adabfa6b881b925aa6d079ae77082",
".git/objects/83/5bf3399f962d345729d2caa584a6da7120fc6c": "3aeca9e0ead1923b3b1707405850043c",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/e4d2f94a84252f835eba73a55f28cd38c318e3": "296f6468ece1d09fe24c688f5ce24c41",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/ed4ac39ac08053458f7da4e60460a62b2f1f58": "30fb3b5b07b3bdd4da68ed88f8dea0eb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/c9e037fc393baf2ff453d806b38a37ae0adb94": "b4f042c493a42f8f71316414742786d3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/abaa852c95a20d31ad84cf8eb0dff87d7d11d1": "e6ca7a6c522ef9ec547ee0a9e9981627",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/64f9f77f77c5a00d4350902a65c476a0c606df": "5a7a845cf3f788cc30598c61f84ec3fa",
".git/objects/97/5f4adc3166acd09741987373e81a5ffc4c91c9": "8ee583955960cd0ff768e3fc4b2e2e17",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/eb1151252cdcd3fb7e63849fd2064b65dfe923": "def9712510b36f44385a2c77263edcc3",
".git/objects/9d/b5b04defabed6227f3c7932abd15da99262034": "876a9ba1ac75cd54b070678d44059bd1",
".git/objects/9f/0f59943699cf0a2b51beb4f0b7c540dc3866cc": "8ee2ababbe34733f963be33fe253edc1",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/10d150ba19e8fc359ed1a41450c547c9afab8e": "484aa75c819dda583ffe824cc92a86c2",
".git/objects/b5/83cce7039ad9b00f94111f162a1d53d656a122": "f352c45dcb7efe02fdbb89ef0a9fd20a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f50fd28583842ef36cdb6437ad0fd33a6f717d": "0bdcec4e1e463986bfec20b1dadec4e5",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/5e310384b080cb82843a22449c06f4d61f3b10": "5ef1d69b90153568b31da58068cd412a",
".git/objects/bf/da1a8278465257692b7d1ce0ba8229d9d2ff20": "8dd6450d80949dfaa1f0a7782a2197e6",
".git/objects/c0/1629877af2428865fe6aa6b515b86e132a3199": "79a96323998ba69f8803b7e685dff678",
".git/objects/c7/d12be8e9a042d0976f1e3914efce9bfef286df": "4dfd11a946bd7e5d4da77ed9308b2bb0",
".git/objects/c9/e4e47cdc9578fa2f9cf446e1f827d9b7cef768": "08866801b8063cdd62e73919fc0c9d29",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/d31934d4cd48d8db2c0b2ec1337e4e048e9f1d": "210285da93c434dda8de80ecabb88217",
".git/objects/d4/ebf9d301e11327c029e64e7404cf4edc0729df": "467c988071ce7f280ac24b8dd0f2a3d3",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/0f62eb08afb1ae9b10db42ccadd02eec480794": "58745601484bcf8706f04d5e2519409c",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/746d1db91c737c5f55edc37279e067d0b2697f": "34019ab9fd90383c3819053d05cdd697",
".git/objects/e4/9b4da3281fe04bae8d60533a0bfecdc41eb495": "f95c854a394258c513c133c4619c1702",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/cc021dcdb57b1d94f2753a5b3596c63fd1eda9": "14b652e270acdd68769aa9f2a7892a46",
".git/objects/eb/ded41392f4e9dbf99b8113a208b9d57d4ebd13": "478a13b0e379d9a9d5dc0d966fa5abab",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/0bc494b818fab9a09958e163d7382d9a6b861e": "afb52c1b8e915b3fda93b40cfb3164ab",
".git/objects/f9/8a2dab85c9bbec24ba3351b3def565b23bb6cb": "2ad9dc288fa3d6e4c7fb364592814b6d",
".git/refs/heads/main": "a2e8858205e9991d8ed51b8762b52c68",
"assets/AssetManifest.bin": "1be6f92b38914939923ba5edc9990068",
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
"flutter_bootstrap.js": "89cfc16fbe0ed7817ea23fc22e2e59b7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf7aaf771b219fe9a81c32fd0c3cbafc",
"/": "bf7aaf771b219fe9a81c32fd0c3cbafc",
"main.dart.js": "b6984f9578713af9044b430e140f088f",
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
