'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d7eaeace1d479784ddd920c1275878f9",
"version.json": "22c80d440d4a2b639e12fa33782d22ab",
"index.html": "66b58cfacf0f965e019169e497879838",
"/": "66b58cfacf0f965e019169e497879838",
"CNAME": "28b1755465eeb5615dcc29e63e3d747f",
"main.dart.js": "77197e22c5174f356670b8234c4ff5b8",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "00c81dda74af3892f7394f36c57c8a75",
"icons/Icon-192.png": "cbf645dbe0a6101a7e57d0ddc18b2bc6",
"icons/Icon-maskable-192.png": "cbf645dbe0a6101a7e57d0ddc18b2bc6",
"icons/Icon-maskable-512.png": "bb713d725550e91c71870ccaa777d533",
"icons/Icon-512.png": "bb713d725550e91c71870ccaa777d533",
"manifest.json": "fb86faa7b235751362480711b26da7ff",
".git/config": "6d1ffc8ebf62ddc68a73b468984d1c68",
".git/objects/57/b181f97ca7425fb879294a8e84fd7c560a2d13": "b4ea120b28091d00879db44b2d2f4197",
".git/objects/34/c5fe2d87ca01e7cabf9c4b3d2f48502597f017": "eba4910cd0a8e62c2f507e5622085095",
".git/objects/cf/07286ef532fdb2e7ad6972946317b95d2148d2": "320e7add8b26e1f8f9d294992ffdfb6a",
".git/objects/c1/9b4b8787fb587d9ac3c033b9fd6c92a3e05212": "8520eb61f6589560c9fdb4766e47bf6f",
".git/objects/ec/7f5796b3d3f3454b23a929a18d587259a76104": "25eb0b9d685061a181d70ea127cacf8e",
".git/objects/44/651f10c44ba69889250e62e2688f23d9daae5c": "43336313e21866f3891eaa92ab5de2b7",
".git/objects/44/48741b3762e211ee0c7388e93777e12b99986c": "f2e0f6ce66abf305395e86f20f92191c",
".git/objects/90/72d92ae88f04ebe6c6f526e715eb204cee0a39": "e1ce8bd7c4fa2c18e7fd9714bc90d309",
".git/objects/a6/a108e936bc6ffdbd634f246ac3007013d02338": "181c4e1694b95a5766e508d3830114ab",
".git/objects/f8/e45028cabc68ccf6d0849f06cf9a6f32447878": "536d5441682a9441d19fbfb7d349c686",
".git/objects/48/7fdd58b7feeff2414f615a9d4fe5dba03c5743": "6fe2188cb0de5936bddb15785c49d2ee",
".git/objects/82/9e5cb60a8e6b70a72a3dfea45df8ba7e5de639": "20aed7fad70dd2dd49f49dc315277f8c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b34d4371606e32c7fb2edec13d208c25",
".git/logs/refs/heads/main": "b34d4371606e32c7fb2edec13d208c25",
".git/logs/refs/remotes/origin/main": "ecf044a5db41b8fea92d12923689e0fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a6999c8c89426ca0627f2e265edce0b8",
".git/refs/remotes/origin/main": "c56f0ffea7617d43bcccc42190bcc40d",
".git/index": "701182bc8581d27867a628bbb2d3d80e",
".git/COMMIT_EDITMSG": "537e17a7d86269fa8012dc15cd44494b",
"assets/AssetManifest.json": "2e956ff82f32b84be18bf0fab6416183",
"assets/NOTICES": "c1d64d9bad9b1fa3757d9a928198b393",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "b99783132943e2379f1d388c82fa7dc3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7c502f5a1131c5394fda3ca84964868c",
"assets/fonts/MaterialIcons-Regular.otf": "5356c2178fb80e4c65a3955783bdd52c",
"assets/assets/images/smenor.png": "62fc116fa3a8069c114ca7f19f4a7b77",
"assets/assets/videos/introductionSubtitles.srt": "5fc0d7d623e2d3f6b6ebabd574a46090",
"assets/assets/videos/introductionSubtitles.vtt": "4c976ca81e835ae8626d1f696fb51808",
"assets/assets/audio/pop.caf": "905b49c963b5f0012ef66dd17669083f",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
