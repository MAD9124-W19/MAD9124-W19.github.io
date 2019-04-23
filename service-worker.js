/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e988354bf909127f3b34f493976d2d34"
  },
  {
    "url": "assets/css/0.styles.084d7c4c.css",
    "revision": "4b7334511d9538d14a82d61467e78adb"
  },
  {
    "url": "assets/img/attendance-er-diagram.49c5cde0.png",
    "revision": "49c5cde043824fb9f0b028dbf3718ea7"
  },
  {
    "url": "assets/img/client-server.bf583183.jpeg",
    "revision": "bf583183cd7e501ef0e3cc3d57f9710a"
  },
  {
    "url": "assets/img/event-loop.7133af68.png",
    "revision": "7133af68cda38aa899f443f0f5e54bbf"
  },
  {
    "url": "assets/img/js-engine.8f82fcea.png",
    "revision": "8f82fceaa053880462f8e6271346c7c0"
  },
  {
    "url": "assets/img/middleware-pipeline.44b69194.jpeg",
    "revision": "44b69194bb56fb220d8ff6a6d5467354"
  },
  {
    "url": "assets/img/MongoDB_Gray_Logo_FullColor_RGB-01.e23e16db.jpg",
    "revision": "e23e16dbe61a5d49fea2144bbb6e7488"
  },
  {
    "url": "assets/img/mongoose-logo.b9e79b6d.png",
    "revision": "b9e79b6dad45cbee1b80ea0a43a29a1a"
  },
  {
    "url": "assets/img/mvc.85e01f97.jpeg",
    "revision": "85e01f97591d271dbef9f6243a84f837"
  },
  {
    "url": "assets/img/nodejs-new-pantone-black.627a71ea.jpg",
    "revision": "627a71eaa61b8e2b44ac822ca8a27eb0"
  },
  {
    "url": "assets/img/runtime-environment.36f8eeb8.png",
    "revision": "36f8eeb8a390f9772f9656dd32af12b3"
  },
  {
    "url": "assets/img/screenshot-app-api.337696a1.png",
    "revision": "337696a13f0c1069134e9a15bd483bfe"
  },
  {
    "url": "assets/img/screenshot-app-root.85f4c13a.png",
    "revision": "85f4c13a588526a0a67212c0ea3e3ba9"
  },
  {
    "url": "assets/img/screenshot-compass-collection-list.545687be.png",
    "revision": "545687becb260d24c3dd78da760016a8"
  },
  {
    "url": "assets/img/screenshot-compass-collection-name.493ca9eb.png",
    "revision": "493ca9ebc364145c81743c74da3b3d6b"
  },
  {
    "url": "assets/img/screenshot-compass-connect.8a3ca582.png",
    "revision": "8a3ca582219ffd0f3f090dfdd88ee06a"
  },
  {
    "url": "assets/img/screenshot-compass-create-collection.7097a793.png",
    "revision": "7097a793413074340d9cf58abf6cc303"
  },
  {
    "url": "assets/img/screenshot-compass-download.85a1c56d.png",
    "revision": "85a1c56df04d0ef03c38f93f77b3ec25"
  },
  {
    "url": "assets/img/screenshot-compass-insert-document.88b525e0.png",
    "revision": "88b525e0394b12eb0ce4b486725f7a27"
  },
  {
    "url": "assets/img/screenshot-compass-person-document.16e100d4.png",
    "revision": "16e100d4fd8805d6a81a124b53bfbc87"
  },
  {
    "url": "assets/img/screenshot-compass-version.88f79c1f.png",
    "revision": "88f79c1f95e27bc5cebbf582f80130e1"
  },
  {
    "url": "assets/img/screenshot-compass.737178b0.png",
    "revision": "737178b05f9dadccac25ddc597264c15"
  },
  {
    "url": "assets/img/screenshot-create-repo.ca2eaf18.png",
    "revision": "ca2eaf18d0a4bec59b24b30c12b76e63"
  },
  {
    "url": "assets/img/screenshot-cyberduck-connection.99723c29.png",
    "revision": "99723c29e196bc48d81d76e01cca7939"
  },
  {
    "url": "assets/img/screenshot-cyberduck-login.098c1985.png",
    "revision": "098c1985bde7c49490ffd862428cf517"
  },
  {
    "url": "assets/img/screenshot-cyberduck-root-folder.404a3975.png",
    "revision": "404a3975aab3eaf21add4437291e1410"
  },
  {
    "url": "assets/img/screenshot-cyberduck-security-warning.a677fd82.png",
    "revision": "a677fd824371d99f14a13a14946f5d70"
  },
  {
    "url": "assets/img/screenshot-dev-tools.867564a7.png",
    "revision": "867564a7c8c104784615ddcf5da13344"
  },
  {
    "url": "assets/img/screenshot-exercise-submission.7f23daf8.png",
    "revision": "7f23daf86a67b53bb2d39f2a59d5dda2"
  },
  {
    "url": "assets/img/screenshot-finder-file-selection.964b3266.png",
    "revision": "964b32662a9479d6dda8b106dade80a8"
  },
  {
    "url": "assets/img/screenshot-github-collaborator.f63c9ffa.png",
    "revision": "f63c9ffa578ab9236a4efb75ed06cfcb"
  },
  {
    "url": "assets/img/screenshot-github-repo-clone-link.c50986e7.png",
    "revision": "c50986e743b6015a5a7d8f27f3f74474"
  },
  {
    "url": "assets/img/screenshot-jwt-debugger.02b8ada3.png",
    "revision": "02b8ada335576929e1b5e92ff1be9007"
  },
  {
    "url": "assets/img/screenshot-link-remote.13616945.png",
    "revision": "13616945665ec825406b10d206daa9e0"
  },
  {
    "url": "assets/img/screenshot-mongo-products.03a7f95d.png",
    "revision": "03a7f95d2d7d931ef2480418cacdac53"
  },
  {
    "url": "assets/img/screenshot-mongoose-connect.cd925298.png",
    "revision": "cd92529808e581d78f09b52f819d32c4"
  },
  {
    "url": "assets/img/screenshot-mongoose-website.7c3f3a07.png",
    "revision": "7c3f3a075affa2bc85558855323c8f04"
  },
  {
    "url": "assets/img/screenshot-node-npm-version.3a8739ba.png",
    "revision": "3a8739ba229bcb5033053daf184941aa"
  },
  {
    "url": "assets/img/screenshot-node-server-api.1c34bfd7.png",
    "revision": "1c34bfd79ede1798fa2a747aefeb3014"
  },
  {
    "url": "assets/img/screenshot-node-server.00adad52.png",
    "revision": "00adad52a2ea7442c329134ee4033726"
  },
  {
    "url": "assets/img/screenshot-plesk-login.a0a7367d.png",
    "revision": "a0a7367d835395b88cde0523bb26bfbb"
  },
  {
    "url": "assets/img/screenshot-plesk-main-panel.b9a5c968.png",
    "revision": "b9a5c9689fe2f263fc31eb424dd887a2"
  },
  {
    "url": "assets/img/screenshot-plesk-node-app-npm.71b9e878.png",
    "revision": "71b9e8786c0ef500f295e01c8aeb06a2"
  },
  {
    "url": "assets/img/screenshot-plesk-node-app.70f9fd8d.png",
    "revision": "70f9fd8d899259912b38e9c3b77f6843"
  },
  {
    "url": "assets/img/screenshot-postman-authorization-header.a049c04a.png",
    "revision": "a049c04a2dd68e9ba4b3bcee3e8d4159"
  },
  {
    "url": "assets/img/screenshot-postman-collection-folders.18adcece.png",
    "revision": "18adcece656693de8e4223161d16859a"
  },
  {
    "url": "assets/img/screenshot-postman-collections-list.79138708.png",
    "revision": "791387081437ec61066294e4ee78cce7"
  },
  {
    "url": "assets/img/screenshot-postman-create-collection.2701ceae.png",
    "revision": "2701ceae7c4b71ddd71f58d425670bd4"
  },
  {
    "url": "assets/img/screenshot-postman-create-user-bcrypt.ab3bd09e.png",
    "revision": "ab3bd09eec4bebda3e67958f43ddf59e"
  },
  {
    "url": "assets/img/screenshot-postman-create-user.72d82c64.png",
    "revision": "72d82c644d9cf1ece4b7de53e5e09279"
  },
  {
    "url": "assets/img/screenshot-postman-create-workspace.493fd80b.png",
    "revision": "493fd80b4d27900d61879f4a3326c70d"
  },
  {
    "url": "assets/img/screenshot-postman-delete.20daa5e9.png",
    "revision": "20daa5e93c4e4dc21b6ef3ff2849a792"
  },
  {
    "url": "assets/img/screenshot-postman-environment-buttons.d75f7cdc.png",
    "revision": "d75f7cdc95a10eca8647517171a0f2c4"
  },
  {
    "url": "assets/img/screenshot-postman-environment-variables.8ba8009b.png",
    "revision": "8ba8009bd0e535d6e417e26852112055"
  },
  {
    "url": "assets/img/screenshot-postman-get-car.1ac00981.png",
    "revision": "1ac00981a0dd95d7b844b47e46bed599"
  },
  {
    "url": "assets/img/screenshot-postman-get-cars-3.a568c2fb.png",
    "revision": "a568c2fb5ee16723885132ddd5b49bfc"
  },
  {
    "url": "assets/img/screenshot-postman-get-cars.f00a1802.png",
    "revision": "f00a18024a7cddb9f082f1ae4df5102c"
  },
  {
    "url": "assets/img/screenshot-postman-get-user.fac4f4db.png",
    "revision": "fac4f4db4a42aa2fef75b0fb9a71edc9"
  },
  {
    "url": "assets/img/screenshot-postman-login-fake-token.6b7506b2.png",
    "revision": "6b7506b29f217a5f95c8059c4764d4f7"
  },
  {
    "url": "assets/img/screenshot-postman-login-jwt.61175ef5.png",
    "revision": "61175ef5ff68eb6c1fd0bd178128e36c"
  },
  {
    "url": "assets/img/screenshot-postman-patch-owner.d7dba67f.png",
    "revision": "d7dba67f002718f0db1c0f45349fb384"
  },
  {
    "url": "assets/img/screenshot-postman-patch.bd83251e.png",
    "revision": "bd83251e995fd7354d7bb69c0e51f1a0"
  },
  {
    "url": "assets/img/screenshot-postman-post.28400b6d.png",
    "revision": "28400b6d69543c475e5ca2f1562d8fd3"
  },
  {
    "url": "assets/img/screenshot-postman-put.5dc14808.png",
    "revision": "5dc14808f1b56d3f0538374a281b337d"
  },
  {
    "url": "assets/img/screenshot-postman-tests.e0773ce0.png",
    "revision": "e0773ce047a873ff25ea1729fb616cd4"
  },
  {
    "url": "assets/img/screenshot-postman-variables-quick-look.fd8ae4bc.png",
    "revision": "fd8ae4bc7f05b0307f7680c8c199e028"
  },
  {
    "url": "assets/img/screenshot-postman-workspaces.521ddf2f.png",
    "revision": "521ddf2f197a3c223fc8c0a5f0335b0c"
  },
  {
    "url": "assets/img/screenshot-postman-xss-test-array.e6a684b2.png",
    "revision": "e6a684b294416ec978858975c870312c"
  },
  {
    "url": "assets/img/screenshot-postman-xss-test-object.7f133f65.png",
    "revision": "7f133f65c8c0a99caaca5e8976abbb73"
  },
  {
    "url": "assets/img/screenshot-postman-xss-test.72d9c06c.png",
    "revision": "72d9c06c65e1fc27510f2ec4284edbcc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/ternary-expression-with-default-value.9f56af5a.png",
    "revision": "9f56af5a59210ec1113bcaf9dc598f80"
  },
  {
    "url": "assets/img/uri.57075a0a.jpeg",
    "revision": "57075a0a83a7b63cec4d73f06bac323c"
  },
  {
    "url": "assets/img/web-app-evolution.522997b1.jpeg",
    "revision": "522997b1a60a771e867bed8359ad4fe5"
  },
  {
    "url": "assets/img/yuuuuge-problem.6d3c8309.jpg",
    "revision": "6d3c830940207eb46a0842a964c54b17"
  },
  {
    "url": "assets/js/10.0fd3f93c.js",
    "revision": "604a805a671db5f8fc888538b9bc9cd9"
  },
  {
    "url": "assets/js/11.ae8c26a3.js",
    "revision": "c4660adf0cb4a90c581ebb38fe261bfc"
  },
  {
    "url": "assets/js/12.57f9b125.js",
    "revision": "621105fc0fcfb8dde9aa69e25ed34034"
  },
  {
    "url": "assets/js/13.a589cf42.js",
    "revision": "9a4b7214e41b7a7717c26156e9aef17b"
  },
  {
    "url": "assets/js/14.3119106c.js",
    "revision": "5e53d137164834c87d4cef0f48104f0d"
  },
  {
    "url": "assets/js/15.c6f416e9.js",
    "revision": "81b1d583f8f943cb130387b5942921b6"
  },
  {
    "url": "assets/js/16.60cf80b9.js",
    "revision": "704dc0d7887c6481b35a65bec078ffb1"
  },
  {
    "url": "assets/js/17.e03883a2.js",
    "revision": "a1fa7f9283d688247e23f1bea9f28857"
  },
  {
    "url": "assets/js/18.ca360324.js",
    "revision": "cafea5f662c41dc40f8baa0990e63de2"
  },
  {
    "url": "assets/js/19.59eeaff9.js",
    "revision": "297b000dc7806272ca755a16edda7640"
  },
  {
    "url": "assets/js/2.6573b30c.js",
    "revision": "8a338534aaf4adb4019c5fa0b1d9b76d"
  },
  {
    "url": "assets/js/20.0d907809.js",
    "revision": "aa2b37725023d09cff74101bf31d1ce2"
  },
  {
    "url": "assets/js/21.d1a45bec.js",
    "revision": "da8f70d257c5be8acce4a162cd172593"
  },
  {
    "url": "assets/js/22.56312e0c.js",
    "revision": "0aa27790d0692ee69c470628d735ccb2"
  },
  {
    "url": "assets/js/23.901d07dd.js",
    "revision": "b8f6b6bcca20ae5b1beffaf94b4c27a9"
  },
  {
    "url": "assets/js/24.c90462b4.js",
    "revision": "f680a3c46537c765fab72c0daaadb948"
  },
  {
    "url": "assets/js/25.0c2b62eb.js",
    "revision": "758c1acfb87ac12cc63b06680c151e58"
  },
  {
    "url": "assets/js/26.4bdddc91.js",
    "revision": "4ab092de41ba5dbeb5d824bee05ece50"
  },
  {
    "url": "assets/js/27.894b645a.js",
    "revision": "136eb5e9752d8c9b5ad491c73cf78921"
  },
  {
    "url": "assets/js/28.82a5b267.js",
    "revision": "ca1360a947e64fdab7991cb6a69f8a81"
  },
  {
    "url": "assets/js/29.a60cef02.js",
    "revision": "42c9cf3f57928d90fe1e72922358c483"
  },
  {
    "url": "assets/js/3.bf2a64fb.js",
    "revision": "8ab8b2bc4d4444e5ee27861cf24e73e7"
  },
  {
    "url": "assets/js/30.21c01a63.js",
    "revision": "46368fd3938d939953f9987a3e3c4461"
  },
  {
    "url": "assets/js/31.607866af.js",
    "revision": "9d364edf29e10ecc1cc6e746aee551ce"
  },
  {
    "url": "assets/js/32.59c25f3c.js",
    "revision": "a3c2be0dca90aea32510f20aa634d57a"
  },
  {
    "url": "assets/js/33.996c9705.js",
    "revision": "941f2996736803417d78cd7b1b9d2e25"
  },
  {
    "url": "assets/js/34.6923aabe.js",
    "revision": "1271dd425ae1a2b126d96d972341232f"
  },
  {
    "url": "assets/js/35.089a238b.js",
    "revision": "efae53698f4c8835eb206789a56dfa00"
  },
  {
    "url": "assets/js/36.17d82978.js",
    "revision": "d98a4b385f987346198a57716bd80391"
  },
  {
    "url": "assets/js/4.db9b657e.js",
    "revision": "180845415e6c96901dd330af952b8c0c"
  },
  {
    "url": "assets/js/5.d875dd4e.js",
    "revision": "34732414794087cc13128d89b4a50a4d"
  },
  {
    "url": "assets/js/6.c8e95fd0.js",
    "revision": "5f8fbbc1d96f197815b7c0b873732ce3"
  },
  {
    "url": "assets/js/7.38090071.js",
    "revision": "c845fbe9d9cbd830509ba491bcd745bc"
  },
  {
    "url": "assets/js/8.bbb7f9ec.js",
    "revision": "b3d393f32926caa62bc82f8377a69da0"
  },
  {
    "url": "assets/js/9.4519aded.js",
    "revision": "cef725052fd5d8b35a084a1594542370"
  },
  {
    "url": "assets/js/app.71c37e52.js",
    "revision": "c37c1177c0720a2e77a51a6cc839e8cf"
  },
  {
    "url": "deliverables/assignment1.html",
    "revision": "1d8f107e6b3081253c03a68da5b05e3c"
  },
  {
    "url": "deliverables/assignment2.html",
    "revision": "1d74b04f638a3d33a971fac096be1102"
  },
  {
    "url": "deliverables/assignment3.html",
    "revision": "02f42e64838707186c48ec340daddacd"
  },
  {
    "url": "deliverables/final.html",
    "revision": "9fd6a7747139cb41fdd25c84db9183b4"
  },
  {
    "url": "deliverables/index.html",
    "revision": "a541857160c1ebddb5f18d61e76c43de"
  },
  {
    "url": "HeadshotPlaceholder.png",
    "revision": "dd905cc985945c4b067ad8e177bbefe0"
  },
  {
    "url": "hero.jpg",
    "revision": "520e0825e8469893c32087ac577325d1"
  },
  {
    "url": "index.html",
    "revision": "768b57ae9ba5ff3028ea77fb205b4ae9"
  },
  {
    "url": "modules/break-week/index.html",
    "revision": "a6f79ecdf7d1d5454361bdc94608f175"
  },
  {
    "url": "modules/index.html",
    "revision": "59624bb4708cd390afbd089d01c35ad4"
  },
  {
    "url": "modules/week1/index.html",
    "revision": "be943c194010bc661f2831ceb0779770"
  },
  {
    "url": "modules/week10/index.html",
    "revision": "f28273164628df1a6b84d32f9eb2f182"
  },
  {
    "url": "modules/week10/testing.html",
    "revision": "a4c3c9703cb8e6a8b822ff39f46bcbca"
  },
  {
    "url": "modules/week11/index.html",
    "revision": "413d171b61f41adde09c81c1d96157ea"
  },
  {
    "url": "modules/week12/index.html",
    "revision": "d12bd7cff7869b02c5c6c903ada9e296"
  },
  {
    "url": "modules/week13/index.html",
    "revision": "e6072ff745909c93989da4d1bcb27bc8"
  },
  {
    "url": "modules/week14/index.html",
    "revision": "6cfc87afd22fe151541b8db10bdaa541"
  },
  {
    "url": "modules/week15/index.html",
    "revision": "c3d063fdfcafbac1032a7f2a57e77e4a"
  },
  {
    "url": "modules/week2/index.html",
    "revision": "2dcfb0e1bbf69cd43fa51d9d3032edb1"
  },
  {
    "url": "modules/week3/index.html",
    "revision": "a90134a48ab8dbe9e489d9826e4de324"
  },
  {
    "url": "modules/week4/index.html",
    "revision": "cf0ac1ce11e5a5759e297f2e8baeb6ee"
  },
  {
    "url": "modules/week5/index.html",
    "revision": "38d9534fd1f5b2cc21b77ad9f079cfdc"
  },
  {
    "url": "modules/week6/index.html",
    "revision": "86ec27b4537a1deca7710ebc75d89e2d"
  },
  {
    "url": "modules/week7/index.html",
    "revision": "88d0683061d5d214d0e8214a0293b3a8"
  },
  {
    "url": "modules/week8/index.html",
    "revision": "8c340d035801c840e8ab4fe4840958b7"
  },
  {
    "url": "modules/week9/hybrid-tutorial.html",
    "revision": "0bf78df76bfb58c91cdc93accc3c5298"
  },
  {
    "url": "modules/week9/index.html",
    "revision": "a5747372e563945cfadba896fcedfd67"
  },
  {
    "url": "overview/contacts.html",
    "revision": "7654595167b8852476e6b0004ec495da"
  },
  {
    "url": "overview/course-section-information.html",
    "revision": "384ee4ca9ff0e694f106d37f22e0ae55"
  },
  {
    "url": "overview/index.html",
    "revision": "c3dd9dac13bd0f966ed09ec768039cc4"
  },
  {
    "url": "questions.html",
    "revision": "e4f052f4653d947c1d0e5badefcd5e13"
  },
  {
    "url": "resources/index.html",
    "revision": "700dc56a54c3367592eb231433c581a4"
  },
  {
    "url": "robert-mckenney.jpeg",
    "revision": "d0b4818428ad0bfce6dc3dff6197b80f"
  },
  {
    "url": "steve-griffith.jpeg",
    "revision": "3fb81c0d91a190afe01fd27de65080f2"
  },
  {
    "url": "weekly-plan.html",
    "revision": "60173af593fb21283444d745503a0648"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
