/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["app.js","4e6a3b7a6837fad99247bf5df3617a46"],["app.json","f97bbcf9d267974da55035b8ad5abf6e"],["progressive-manifest.json","789bda66bb9a85be7de0dcd8f47dfbbe"],["resources/ED-all.css","aa11c78e07a25853e033b6b7d362b190"],["resources/Readme.md","ee40a3db36960babbd63f23e23d802f9"],["resources/ed192.png","defdd120fc7a572b644c342ec20a2c74"],["resources/ed256.png","4a79c83b25ce2a73acae58667678e9fa"],["resources/ed96.png","7f8560d55dff9bd26d7d46116b413b09"],["resources/font-awesome/fonts/FontAwesome.otf","668743fe7258676f8ef8f9b47d2a623e"],["resources/font-awesome/fonts/fontawesome-webfont.eot","45c73723862c6fc5eb3d6961db2d71fb"],["resources/font-awesome/fonts/fontawesome-webfont.svg","76a4f23c6be74fd309e0d0fd2c27a5de"],["resources/font-awesome/fonts/fontawesome-webfont.ttf","7c87870ab40d63cfb8870c1f183f9939"],["resources/font-awesome/fonts/fontawesome-webfont.woff","dfb02f8f6d0cedc009ee5887cc68f1f3"],["resources/font-awesome/fonts/fontawesome-webfont.woff2","4b5a84aaf1c9485e060c503a0ff8cadb"],["resources/font-ext/fonts/ExtJS.eot","ccb7e00f879bc5f71ed151ca41063c5d"],["resources/font-ext/fonts/ExtJS.svg","c3dbb023ef4fdd8de05c2627b1881a42"],["resources/font-ext/fonts/ExtJS.ttf","41eae31e9634366511471019e2823ae4"],["resources/font-ext/fonts/ExtJS.woff","b24c658d69f03a8875523fa21f1574c9"],["resources/fonts/OpenSans-Bold.ttf","50145685042b4df07a1fd19957275b81"],["resources/fonts/OpenSans-BoldItalic.ttf","78b08a68d05d5fabb0b8effd51bf6ade"],["resources/fonts/OpenSans-ExtraBold.ttf","8bac22ed4fd7c8a30536be18e2984f84"],["resources/fonts/OpenSans-ExtraBoldItalic.ttf","73d6bb0d4f596a91992e6be32e82e3bc"],["resources/fonts/OpenSans-Italic.ttf","c7dcce084c445260a266f92db56f5517"],["resources/fonts/OpenSans-Light.ttf","1bf71be111189e76987a4bb9b3115cb7"],["resources/fonts/OpenSans-LightItalic.ttf","6943fb6fd4200f3d073469325c6acdc9"],["resources/fonts/OpenSans-Regular.ttf","629a55a7e793da068dc580d184cc0e31"],["resources/fonts/OpenSans-Semibold.ttf","33f225b8f5f7d6b34a0926f58f96c1e9"],["resources/fonts/OpenSans-SemiboldItalic.ttf","73f7301a9cd7a086295401eefe0c998f"],["resources/images/check.png","c2de0125775a7c35b3d78186deb0ddcf"],["resources/images/clear_icon.png","20a2b45f99203d13802b851ed8496092"],["resources/images/disclosure.png","1a8504e23fa0cb02136aabefdae55d45"],["resources/images/disclosure2.png","ab9dc026b889c70cab50675db969f1d9"],["resources/images/dotgrid.png","0a6df5a1fdbed58be304b31020e3f0c4"],["resources/images/loading.gif","b642f1348686d07ed8436e6044852898"],["resources/images/pictos/action.png","c973e6e9ede739dd7048de403c182b6e"],["resources/images/pictos/add.png","222eaa3ab05a1e59e32ea20d62c003cf"],["resources/images/pictos/add1.png","4300bcea6ae56adfbc6bc5b735d8a21e"],["resources/images/pictos/add_black.png","00ec54d080ed3c397ddde274d32cfbf8"],["resources/images/pictos/address_book.png","726aba793e3cb4eee841614f52bca7a7"],["resources/images/pictos/arrow_down.png","002e630821e80e07230ea371e127c3e7"],["resources/images/pictos/arrow_left.png","9542fd3d245d127b206dae7a002a1382"],["resources/images/pictos/arrow_right.png","d4c9468a25e7fa5b08d2b5bb8f579474"],["resources/images/pictos/arrow_up.png","d5ac0f9615c1717dccc40ed340af0120"],["resources/images/pictos/at.png","6fad020515452bb99749366984b5f260"],["resources/images/pictos/atom.png","1e8f0ed8de3e18fa68b54ab492e79c13"],["resources/images/pictos/attachment.png","e864ebf79317535f915b56e347e5ae40"],["resources/images/pictos/attachment2.png","8ed10806b1dcba4caeb3855682385819"],["resources/images/pictos/attachment3.png","7db613f27dfe4ef334f2ab9311f20b05"],["resources/images/pictos/attachment_black.png","624fe0be958abc079e0b0e0fbb450ef9"],["resources/images/pictos/back.png","ba01939f641eb219ed21f71ff4bb9823"],["resources/images/pictos/backspace.png","7fbc0e11ad1d00aa0811a146c46cd055"],["resources/images/pictos/battery_full.png","4ab1b87679cfc5432398ec800b0518e8"],["resources/images/pictos/battery_low.png","ee6a7779723a40aa778232214d5241e4"],["resources/images/pictos/battery_power.png","06723acf068c77e9d009f79df82bb95b"],["resources/images/pictos/blank.png","c2c26c1ea677c3b524505eded4255442"],["resources/images/pictos/bolt.png","9c9031778a973d025f2d2c14867b25d7"],["resources/images/pictos/bolt_side.png","7707be3b75974dd317fb76f04d816130"],["resources/images/pictos/bookmark1.png","99ab7e73a920bc94ab340ce7cc704dc4"],["resources/images/pictos/bookmark2.png","632e4391ba270772f6dee77f6b06db8b"],["resources/images/pictos/bookmark_black.png","763eed159e9654faa647da1efe9af46a"],["resources/images/pictos/bookmarks.png","d940a984235722bdbe9db9e90e55307c"],["resources/images/pictos/briefcase1.png","111190b1f70a81d9fc9ffd217c6fbb32"],["resources/images/pictos/briefcase2.png","727a9de7241c5dd44939e353d56d89ba"],["resources/images/pictos/brightness1.png","9f18ee4b71cac264a19f203242f9a8b6"],["resources/images/pictos/brightness2.png","cae195f818297ffc252abb246a0e0e7c"],["resources/images/pictos/broadcast.png","c253d791cf3c5fa6c325cc762ef99af8"],["resources/images/pictos/bug.png","11d0d03053c09931597cb8888fca80c6"],["resources/images/pictos/bulb.png","41aaf56f24ac1ecadd080e54508a7a15"],["resources/images/pictos/bullseye1.png","f096008d7b53f3829d5ca00082f6654a"],["resources/images/pictos/bullseye2.png","4592f2c787d497f623e4eae97971a829"],["resources/images/pictos/calendar.png","901e2b19c353d00e3f2efdfad7eb2771"],["resources/images/pictos/calendar2.png","f34fea19a7f665c99f64eed3fb559a39"],["resources/images/pictos/calendar_add.png","f2ea55d8c447da60d9a274486483359a"],["resources/images/pictos/card1.png","e548ad8bc56da179fce6c98205c15b37"],["resources/images/pictos/card2.png","feebaec31d38c3212a5f10fad6741076"],["resources/images/pictos/chart1.png","31936085d3b9f8a952076720b8bfa307"],["resources/images/pictos/chart2.png","c1df4c541f37fe021e9993281c200fb9"],["resources/images/pictos/chart3.png","85e61654a9d25422f364faa83b7e82f4"],["resources/images/pictos/chat.png","1d464c86f69bb2dca7e2323fcc8cdc13"],["resources/images/pictos/chat1.png","888b0079ab964fefd93b02ffc05d3ce8"],["resources/images/pictos/chat2.png","c54c2e86493b2bf83a792dd852f8de2f"],["resources/images/pictos/chat3.png","7871531ae67ca3d7f2577357c1adcc84"],["resources/images/pictos/chat4.png","50727215c1db27a047517243fe60aa9e"],["resources/images/pictos/chat_black1.png","46288153d442fa75b41c0077883dd9f1"],["resources/images/pictos/chat_black2.png","35464107e3f893ab0851d029c3e460cf"],["resources/images/pictos/check1.png","dfaaf0159e63d0405d4fa39d9386b841"],["resources/images/pictos/check2.png","b419a527437cc0bb12666db0175fff43"],["resources/images/pictos/check_black1.png","8c36d0ecfabc81a32fd84aeb6151d125"],["resources/images/pictos/check_black2.png","616f341742840c73c7aeddb0171882a9"],["resources/images/pictos/check_dotted.png","51dc669738d81b5aa0c84de1d672e316"],["resources/images/pictos/circle.png","64a224ba38fb2cdcdba4ff6044b23851"],["resources/images/pictos/circle2.png","bda13426648f0cfcf9e22a960ace50d6"],["resources/images/pictos/circle3.png","a73dd1dba1da4e873038a39c0ac07b9f"],["resources/images/pictos/circle4.png","18cfc116f3ffabfb8522856cb02b022b"],["resources/images/pictos/clash.png","dab82443a8b995ce98e07fa6d2a24a4f"],["resources/images/pictos/cloud.png","59cd33cd525383076bda004aa7dec1ae"],["resources/images/pictos/cloud_black.png","05d07657c27b23de2d7eae7a57ea4cd8"],["resources/images/pictos/cloud_black_upload1.png","bd4b6ab48de51fc787a2af8287cd101a"],["resources/images/pictos/cloud_black_upload2.png","cea0421411f5566a2f49691cdf299c79"],["resources/images/pictos/cloud_bolt.png","5da19d3974150fb9c377aa70e8fd0291"],["resources/images/pictos/cloud_download.png","6feda583fa35f03b4ecac543cf4bb506"],["resources/images/pictos/code1.png","e6a7a2ba966e9ef279b871149837eace"],["resources/images/pictos/code2.png","7bdf22e39b6bd637c46323d075480010"],["resources/images/pictos/code3.png","b4eb54e73125b9becda334126e700aaf"],["resources/images/pictos/compass1.png","b521eb7640001fee406f1118e5e1d3cc"],["resources/images/pictos/compass2.png","06824eba8bfada4f1434a6b6630e9ece"],["resources/images/pictos/compass3.png","6ac61d0db940842317abb15f4a70162b"],["resources/images/pictos/compose.png","0b945a69e1797db599825e321b36f9a9"],["resources/images/pictos/compose1.png","0bd40970294fb4b84cfac8aaef096912"],["resources/images/pictos/compose2.png","20b9c2bf3791fa4b5688f973c9dc745d"],["resources/images/pictos/compose3.png","f944ee75fb5272ee0f55b8b8a4c613e6"],["resources/images/pictos/compose_black.png","a4144c096bc6f283178fb649dbf48f68"],["resources/images/pictos/contract.png","7c9383954ab030805bb663fb7b5fb745"],["resources/images/pictos/cube.png","fc828f59b8d7405e324b999e375ab92a"],["resources/images/pictos/data.png","fc445890785e11cfc01aae1931565ad0"],["resources/images/pictos/delete.png","2727db4b3d5c6b5d79f863b97eb4f7e9"],["resources/images/pictos/delete1.png","9d74c76cfa2e88d37fa1346f88740cf9"],["resources/images/pictos/delete_black1.png","73cea7b2e60f071a04a758af347d77a1"],["resources/images/pictos/delete_black2.png","0efcbb1772a19cb503d6b8e8e45f8edc"],["resources/images/pictos/doc.png","2edf03b23a722fcf9ff5131c500a2974"],["resources/images/pictos/doc2.png","9dca1910c53b402b15fca4ee3c69ba95"],["resources/images/pictos/doc_black.png","e6273e4fa83a6d53ff9f21a7ef92ee89"],["resources/images/pictos/doc_black_landscape.png","c9c373161236ba09ba09610940e54317"],["resources/images/pictos/doc_compose1.png","0e53882b8d13629e19fcefe0d912d7f2"],["resources/images/pictos/doc_compose2.png","7db6f9762044df535425c5a1ff0ebf85"],["resources/images/pictos/doc_delete.png","81c756c2e553c9b3025ae00988936945"],["resources/images/pictos/doc_down.png","a6ddafecf0acafd9d20e11c84fdcb30c"],["resources/images/pictos/doc_drawer.png","a0d7489b2d3b67951346796955f31531"],["resources/images/pictos/doc_list.png","9a70e110ea8ba924a541aeb88640711e"],["resources/images/pictos/doc_new.png","354261376deabeef78aa7360fc6bca95"],["resources/images/pictos/doc_send.png","d5834ecd8197207f4313630fa8f4dae8"],["resources/images/pictos/doc_up.png","ad591949ec639e7b1e350eaa6f5c6b85"],["resources/images/pictos/docs1.png","3e858a6667b1f3954e4a6521ce01bccd"],["resources/images/pictos/docs2.png","5ff0b91316e473d70f162c0493949f98"],["resources/images/pictos/docs_black1.png","e381bf971731dff99c099be2bb3a3692"],["resources/images/pictos/docs_black2.png","93834c80b21237efdb2022cd29ac43c2"],["resources/images/pictos/download.png","1679c7029b92a68eaf6c1e1f2b7f8878"],["resources/images/pictos/download1.png","1724cf944428e1a0ffe49e477792edc8"],["resources/images/pictos/download2.png","030670d8c496cb0f8d06cdc20ae5fe31"],["resources/images/pictos/download_screen.png","e0b500d4b2d884f34eb5c116df9f1a21"],["resources/images/pictos/eject.png","3c6550f5b37e11e28d8a26d84cb089bc"],["resources/images/pictos/empty1.png","4568be64b2d75fb484b8bc96a6ad6ef7"],["resources/images/pictos/empty2.png","05ca72f4d8675ccdb7fffadf1c606fa9"],["resources/images/pictos/equalizer1.png","29e701d3b5ce3d0beb2f96600b7c98d2"],["resources/images/pictos/equalizer2.png","d1fea2da37f303403390b1a32ceef915"],["resources/images/pictos/event_complete.png","44629ea7b64fa4d7e461c63497f0aead"],["resources/images/pictos/expand.png","0a5e2f0c3881aeba759eb8d45d99b3b4"],["resources/images/pictos/favorites.png","1240339da0a2eaf25a19447b2317cd9d"],["resources/images/pictos/favorites1.png","180e6c6ebe7fda5a389dfb3e8f3eb643"],["resources/images/pictos/favorites_circle.png","2da0272c76cfc37bdda9bf6c1f31e1b0"],["resources/images/pictos/fforward.png","b38c04481280702071fb93c40b6004b8"],["resources/images/pictos/find.png","aa6f169392a2c82de7c92f5981ea50c9"],["resources/images/pictos/flag.png","70fdd207235029c98acad7a9678941c5"],["resources/images/pictos/flickr2.png","33c3efe418dc8e3584601776b0385dc7"],["resources/images/pictos/folder.png","192cb59b9c5f00b13c3362c7d85397c6"],["resources/images/pictos/folder_add.png","382360c9d06aed56bbf1079d0ff1f05b"],["resources/images/pictos/folder_black.png","cf76e19f0fd470b62fc6ab715aa0c285"],["resources/images/pictos/folder_black_open.png","629c908e7415d63a606c1067c5dbe45b"],["resources/images/pictos/folder_delete.png","dce7a9c1339767a3d1ce941ec8c74317"],["resources/images/pictos/folder_delete2.png","fa57485d53d65c7ac8203559d95c14ea"],["resources/images/pictos/folder_lock.png","d8512e059ea4cb48948653e4dd14b589"],["resources/images/pictos/folder_open2.png","f79983ff4a585362575427ffc5d11271"],["resources/images/pictos/font.png","918b84908ca35cf10a5d5944bf936e20"],["resources/images/pictos/forbidden.png","95c26c74dd9b62590ae98a185611087a"],["resources/images/pictos/forward_black.png","567412dc73a8b462f0a6c13d079f8ee9"],["resources/images/pictos/globe1.png","5b08a49b10d62a1a353a0f4f84aed964"],["resources/images/pictos/globe2.png","f9a1c6a6bf96549487a956f0a1a1e91c"],["resources/images/pictos/globe_black.png","1d52f68b82cc48d15aecaca2218e7ce9"],["resources/images/pictos/headphones.png","8c1995326ed39dec2157abd0c4a4bda8"],["resources/images/pictos/heart.png","7dbbec492f8fbd0b88a8678a886b713c"],["resources/images/pictos/heart_circle.png","64c6c46164e7dc4d654bf3737182ddf8"],["resources/images/pictos/help.png","20505cd0fe792c804f11a35e2596d656"],["resources/images/pictos/help_black.png","fb58658cab564468016052f389354c8e"],["resources/images/pictos/home.png","166a1341b9f29b40c7c09499dfb80a45"],["resources/images/pictos/home2.png","150774bf5941f2974874e6ad4c67b74b"],["resources/images/pictos/hot.png","af6715910088f260ce41c9fde6d701ea"],["resources/images/pictos/inbox1.png","680066c57304d4b9964f8610066bc184"],["resources/images/pictos/inbox2.png","6aa1494c686d0bf7c4aedf680ba74ef9"],["resources/images/pictos/inbox3.png","35f780690e2dbe3394ee3e038d1bdc25"],["resources/images/pictos/infinite.png","c75dd667d207cdd8265e66f099e41065"],["resources/images/pictos/infinite2.png","6856dad935efc99fc3500e93344a2824"],["resources/images/pictos/info.png","73703e40484a28bea1e137fa9c49bd7c"],["resources/images/pictos/info2.png","42af01deb94f9a3c59d47936a1369235"],["resources/images/pictos/info_plain.png","6ce074340958370bc2fbc3223bc2adf1"],["resources/images/pictos/info_plain2.png","3fb5cc6248546994cdf9c5557a7b0ccc"],["resources/images/pictos/json.png","cf846c7a455968ff255b0cbd7fe76ae7"],["resources/images/pictos/lab.png","2c21a8d6368a0834f593158264fac798"],["resources/images/pictos/layout.png","2d5f88f9f05e38799c4e8be6a568c7b5"],["resources/images/pictos/link1.png","07ee1ba9fb4b85306a3be2aa23eb4fe0"],["resources/images/pictos/link2.png","a527bf12293cdac8d6e07763d9f675b9"],["resources/images/pictos/link_black.png","454332d40815c5a93b5649cbd923f204"],["resources/images/pictos/list.png","af6d927122565bc008c5c3951471ee2f"],["resources/images/pictos/locate.png","e6327d6dc073f25f4900d7fb607a16c4"],["resources/images/pictos/locate1.png","c35356108cf06dfcd86e1607a0b07fd5"],["resources/images/pictos/locate2.png","40ad8bfc98287c69133e983e39537654"],["resources/images/pictos/locate3.png","dca2a8b068ad468cde45c324d2b1a07f"],["resources/images/pictos/locate4.png","067882a724de349d310e9a3a92e04617"],["resources/images/pictos/lock_closed.png","9536de8a78ef58e4a41fffc3a5af5e68"],["resources/images/pictos/lock_open.png","f2c6baa8b18e2adba625c0ba71d968a3"],["resources/images/pictos/look.png","d5c1671a9150d8b98ffbbd2073209108"],["resources/images/pictos/loop.png","fd3f8600c962fc9e0e705e531a7682a6"],["resources/images/pictos/loop2.png","e63b55443eeea42fa6e9c5870029098a"],["resources/images/pictos/loop_circle.png","79e692063e6423a97dbb7f44f930e3e5"],["resources/images/pictos/magic.png","0f396cf8b48209db389f736cc50e3e48"],["resources/images/pictos/mail.png","2c19d16aeb3b2e416951cd1d3b6860b0"],["resources/images/pictos/mail1.png","35adae06505d6f9987b00c9cd365c4f0"],["resources/images/pictos/mail2.png","fab4df313058641b3548d246174fde8e"],["resources/images/pictos/mail3.png","6d4c9e29a96a9236cc60c592c3980c3c"],["resources/images/pictos/mail4.png","a30cf5f7e007e89146414a19d0baeb4a"],["resources/images/pictos/mail5.png","16de2a70db1815bad355d64f2234dfed"],["resources/images/pictos/maps.png","0405969d3896b7282b63595ccd366c62"],["resources/images/pictos/mic.png","b4f026afd354b791a1d7b31ed89456ed"],["resources/images/pictos/minus1.png","5603809ea24eae0da3222c857583eb10"],["resources/images/pictos/minus2.png","5e7ffa8ffd1cc31d2a61fc3b1fe9f6e1"],["resources/images/pictos/minus_black1.png","76892bd106fd653ca68c63c65b6ca348"],["resources/images/pictos/minus_black2.png","0f1120a06358036ecbb566cea912b9b1"],["resources/images/pictos/monitor1.png","83d7e1cd3b667e24f4960ace4c70debd"],["resources/images/pictos/monitor2.png","f044da7b1b3e0b2cc4d12bc8ed80953c"],["resources/images/pictos/monitor3.png","cf0d22de77930cbd9c7d4ba949d8098d"],["resources/images/pictos/monitor4.png","1ee5f4e89130e44073f979317301981f"],["resources/images/pictos/more.png","b805780b2b54d7ee3c9dccf645a91ea2"],["resources/images/pictos/more2.png","17b6fae645b218e785efc0465ce04158"],["resources/images/pictos/mouse.png","b827cffae26ebbf8f33db57c4e2b9589"],["resources/images/pictos/move.png","c948ce97752675d5bfd1aa12d02b0efa"],["resources/images/pictos/music1.png","daeb75d3e2e84605139d064baad129c6"],["resources/images/pictos/music2.png","a139525bd5e6fe8c3c99132b275049f5"],["resources/images/pictos/nodes1.png","8a54e285151352051af69fa31d58c7fb"],["resources/images/pictos/nodes2.png","c5369c3c39739815838de1439e35be7a"],["resources/images/pictos/note1.png","ca8088a42e8256c9de7c992e598a0d45"],["resources/images/pictos/note2.png","03e705c84c1fa57fd9d13532c711aec4"],["resources/images/pictos/note3.png","90f2a44eb895e1551caa6c4009b17526"],["resources/images/pictos/note_black.png","94e2eff09fcecf6b7062405acd0fe1e5"],["resources/images/pictos/nuclear.png","06ff74be7d246a73ed608b2dc3acb4ea"],["resources/images/pictos/organize.png","e2abb97f623bc06816585f277f839cc0"],["resources/images/pictos/outbox.png","d316c0928e4bcc7b19fd0dd454db4d1a"],["resources/images/pictos/pause.png","f70d0a2c7bfdbbe25291b852d0c4e1cf"],["resources/images/pictos/phone1.png","ea28ce4abaa4e0bd8caede74d62b57b2"],["resources/images/pictos/phone2.png","d23b74b4d015bad74df5f196dc7b58c4"],["resources/images/pictos/phone_black.png","9cc649caebf01169d502e7416f138639"],["resources/images/pictos/phone_ring1.png","84fc4d56bd0f5974e9e1926c98ea4ce2"],["resources/images/pictos/phone_ring2.png","3f816927bb2b002b4c01fe58e2eeef54"],["resources/images/pictos/photo1.png","fc998220b92e6c49826d51fb1bd03ced"],["resources/images/pictos/photo2.png","cd65df113b353cbb8a174ea74bc76cd6"],["resources/images/pictos/photo3.png","bec00845b4e13607fb207a754373d875"],["resources/images/pictos/photo_black1.png","3483badc871d8fe484095b28130b9527"],["resources/images/pictos/photo_black2.png","980111f4b060862afb216d35d39d268b"],["resources/images/pictos/photos1.png","3e13fc962b3efa8c11d8084fbbb875e2"],["resources/images/pictos/photos2.png","4c239d9847b81be9da333a0b355778fb"],["resources/images/pictos/photos4.png","baa037a5fe9cde63b09cd19f8782013e"],["resources/images/pictos/pictos-web.eot","69d510ae2a2d6c1debc4d42d76500294"],["resources/images/pictos/pictos-web.svg","95f76e7dc58f0194df3acd5027c72e92"],["resources/images/pictos/pictos-web.ttf","68b912acc44b577d12d012e681e9ec08"],["resources/images/pictos/pictos-web.woff","2ebff5a8dcf1fc762161e8074844181c"],["resources/images/pictos/piechart.png","de4e11f74cd99489191aa44593c19ffb"],["resources/images/pictos/play1.png","9f419d2f188b50d3ffb4d15b26d4a406"],["resources/images/pictos/play2.png","34413c77647963adaf4727df19781512"],["resources/images/pictos/play_black1.png","1bc1e02ee75a83720c26745d0150f1b4"],["resources/images/pictos/play_black2.png","29c5fa9502ffc64418e66da241cdebaf"],["resources/images/pictos/podcast.png","43d4299cdd8cbf011886fdb7e0ced1b0"],["resources/images/pictos/power_on.png","f469ffba41e5c4a8e562eb1eb533fd09"],["resources/images/pictos/power_socket.png","372b90da569a9f3db12d967829080fdb"],["resources/images/pictos/print.png","afafacb9065d83eda81c11f969fe17df"],["resources/images/pictos/print2.png","03195289f15b1865b85db120987f3ac4"],["resources/images/pictos/quote1.png","9a0a25fafd75e92d1c747f2d66b7faf4"],["resources/images/pictos/quote2.png","af12ad2727ad8bb77b74cb26f27efb4d"],["resources/images/pictos/quote_black1.png","ffb320a1e85b4ff80a30702ef8688491"],["resources/images/pictos/quote_black2.png","cb4abd766842b92e65b08212ed7d1dcf"],["resources/images/pictos/quote_black3.png","d2841dba044451ab464b4aa4e008bb85"],["resources/images/pictos/refresh.png","28493bad2436457a544c9df849d2780c"],["resources/images/pictos/refresh1.png","3a0f5906c235705ea66e65e774c79fd6"],["resources/images/pictos/refresh2.png","43d588c4b4c631ca19968baf5683f1a9"],["resources/images/pictos/refresh3.png","2567c05e0d90cd8d39b3faa48709d76d"],["resources/images/pictos/refresh5.png","58a5b86faf11154141a93512538e0708"],["resources/images/pictos/reply.png","b0a975504a0be0db448dc767c2d50890"],["resources/images/pictos/replytoall.png","3bad2346a3ce3a9afab99e4cf561417e"],["resources/images/pictos/resize.png","4d71c3dce2bd783a4354787cd1ca3224"],["resources/images/pictos/resize_black.png","90240c5a32a8104f7c0760a0f3312a96"],["resources/images/pictos/rewind.png","722969b7f5b9649b6dddd74a60a148a6"],["resources/images/pictos/right.png","d8345b1e3b7f06e1a5fbfecf1db14227"],["resources/images/pictos/right2.png","40a73fde2653bbfad5bd85b748ff7b53"],["resources/images/pictos/rss.png","4c004ffff227bc079a6d0920591c1c30"],["resources/images/pictos/rss2.png","4dd72b381299994ec8b90a34a2d8cc34"],["resources/images/pictos/rss_black.png","b0567ade3d683f9f8f77bffc654f151e"],["resources/images/pictos/rss_black1.png","9146789fc3d9ec2f7c5cc94b2c8cbccd"],["resources/images/pictos/rss_black2.png","8e64bea6aac8f84b25b613ac15fca656"],["resources/images/pictos/screens.png","32d665b51f731ab2253e31674ad803e1"],["resources/images/pictos/search.png","d400c7c3489aa42e697eb0372f74969b"],["resources/images/pictos/search1.png","b2326c94c3f6909dec3ca66a548e3506"],["resources/images/pictos/search2.png","07993ad1ab6e3aefad3f92dbb2df7eb7"],["resources/images/pictos/search_black.png","c41880a92cc1655a4b90722d19b13815"],["resources/images/pictos/server.png","7a6f55aa1f2af66fa15aaf2528cbfcd3"],["resources/images/pictos/servers.png","d2b045412335550c5c757cf48e0877c4"],["resources/images/pictos/settings.png","ed138afe6d8ef459eab14f19790f7c8a"],["resources/images/pictos/settings1.png","b7549ad9f2737cab1910e461607ede0a"],["resources/images/pictos/settings10.png","4a7c0a109f7803f96643a9875bab3540"],["resources/images/pictos/settings11.png","c7a5cd9c6ce97c82d9a1e45c36c889fe"],["resources/images/pictos/settings3.png","b315b60a408afb1a6e8be011840f3b97"],["resources/images/pictos/settings4.png","23d5472edce63ff434d42ed5979075da"],["resources/images/pictos/settings5.png","0983f2e88d679db61639dafaabefbe02"],["resources/images/pictos/settings6.png","9561f80a394bfdea7de894c267eb5bd9"],["resources/images/pictos/settings7.png","b1ff1be7cfefc1b238c31c9cdafb3bca"],["resources/images/pictos/settings8.png","4316e61e66826846486ea342519c2eab"],["resources/images/pictos/settings9.png","02dc0de52ba9be231d35df0391cbc247"],["resources/images/pictos/settings_black.png","6c6f185f5a371e26831c3f6e9926f2ea"],["resources/images/pictos/share.png","2da2265b794f4da3dcd6bd7537b6652a"],["resources/images/pictos/shield1.png","f52352b0808d287bd40d6c01adcb4ba9"],["resources/images/pictos/shield2.png","5442078a1b6570a28b04b31d9f29e7d7"],["resources/images/pictos/shop1.png","b4ec161ad1c7f6dfd3f9cbd81c130a26"],["resources/images/pictos/shop2.png","a522e60dfc10f894aff7df15b3f6971f"],["resources/images/pictos/shuffle.png","d5c37577304c2cd1febe0d6d7450c717"],["resources/images/pictos/sign_backforth.png","fbcc794b7d619536ee1b5dbbedab1dc1"],["resources/images/pictos/sign_cross.png","a8a2b849caeedafb2d725cf834c016a6"],["resources/images/pictos/sign_leftright.png","ab9b625d7a85fab2eea4346d5d844fc7"],["resources/images/pictos/sign_leftright2.png","e51e11c8e6f2313ee60c5effcfb60628"],["resources/images/pictos/sign_split.png","1ed6fa1e763f1953baf3f78e092a1c80"],["resources/images/pictos/sign_switch.png","80e3966e3a535ae9560edf9ef28d0a1c"],["resources/images/pictos/sign_uturn.png","8a08cb79763b55a62b50014dc773a36f"],["resources/images/pictos/spaces1.png","30f9dacd01dc847f8921debf976c7271"],["resources/images/pictos/spaces2.png","ee10e3a757ead65070daa84e993cb825"],["resources/images/pictos/speedometer1.png","1b61b4c591e26a021b3138eba4e6567e"],["resources/images/pictos/speedometer2.png","b66862d94f2e79a996715353ddbfa3fe"],["resources/images/pictos/speedometer_black1.png","a7ed3dfba9ab3ad2248be0a016387145"],["resources/images/pictos/speedometer_black2.png","e24999f59cdad144fbe25afa83e74360"],["resources/images/pictos/star.png","1240339da0a2eaf25a19447b2317cd9d"],["resources/images/pictos/stop.png","29a50e1d2c6d2d1a4eea986d67be0770"],["resources/images/pictos/stop1.png","3f796559f0a3f8d573acf6e3ee1e667f"],["resources/images/pictos/stop2.png","fae2c3d216bb221377d8fba41389a6fb"],["resources/images/pictos/sync.png","3e86e6d72734eddd39abb623518a193a"],["resources/images/pictos/tabbed_book.png","3be302b1b5d6d494670f76c94dc3fbbd"],["resources/images/pictos/tag.png","640f8400b394decd2505abc8e8eb1842"],["resources/images/pictos/tag_black.png","0b9388a20060f92af76368da49e70d06"],["resources/images/pictos/tags.png","b5ce0d4778f0276d6c4f5911616203c5"],["resources/images/pictos/team.png","6dbaeea9ab7de971031c2874fd917bc9"],["resources/images/pictos/team1.png","b48c9aefa33975df80868aa7a8da6450"],["resources/images/pictos/time.png","5e216814e6e68ca13df089fed4abbd70"],["resources/images/pictos/time_repeat.png","440fe4452e2b14f17b4bc68589ea2be0"],["resources/images/pictos/trash.png","8caafbd1b099a4b7e66a2d30c84ce573"],["resources/images/pictos/trash2.png","343b08dbd0df70986503b0b9540e5fd1"],["resources/images/pictos/trash_black.png","ad8d1e4d048e956b56aa78b493e4e188"],["resources/images/pictos/tree.png","867a8205e4897049974134b00209b23b"],["resources/images/pictos/tv.png","6781d34c384bd2e41d3736611df73cab"],["resources/images/pictos/tweak.png","142754e9e92de3b065a9fb92eb638f8d"],["resources/images/pictos/twitter1.png","722d94fbee0a2e3ee3407dfd6ff72b98"],["resources/images/pictos/twitter2.png","62552a3fb63c0d1e1e787f9d7fc59a83"],["resources/images/pictos/up1.png","47239122e409c04df70726af1be2531d"],["resources/images/pictos/up2.png","deb7237b72fea98540e0adcb25bffd87"],["resources/images/pictos/up_black.png","5fc4e467168cfe28d01c08dad845fb1d"],["resources/images/pictos/upload2.png","468cda7fd809b83dfe2502540aeca362"],["resources/images/pictos/user.png","e81b6b718dbfe6c9b847a0546a60ce51"],["resources/images/pictos/user3.png","5bf583a4838799ab7bd31213a97b12a6"],["resources/images/pictos/user_add.png","f3901f80cb0589c191c161e083b01dfe"],["resources/images/pictos/user_business.png","0f0cc515b6a24694502f4cc784570aed"],["resources/images/pictos/user_fave.png","948d9956321e9559267f6d283a33ccf8"],["resources/images/pictos/user_list.png","d5b259a231d50f62763530d968dbbc54"],["resources/images/pictos/user_list2.png","46189cd9fe0ca08cdeca2fcc7f92536c"],["resources/images/pictos/user_remote1.png","2ebcf24503b4502647107d8c88de1ec2"],["resources/images/pictos/user_remove2.png","eb512ece839cee0bd18ea10c22980a8e"],["resources/images/pictos/user_send.png","ece6ec5526f17cfcacd178d9acd0fe9c"],["resources/images/pictos/video.png","137c3240c8448b235b0ef52f4c2b866e"],["resources/images/pictos/video_black1.png","29d50662e5c865bbcef2ffb8d7310563"],["resources/images/pictos/video_black2.png","31aa85d4e833e6af28b2a8d092b10407"],["resources/images/pictos/volume.png","fe0f825df0b247ff23fb36447d192c7b"],["resources/images/pictos/volume_black.png","b6be6f7ef1d343c81a5abe52758422ee"],["resources/images/pictos/volume_down.png","fbd3e1ee7911450fbd5147d58cc84918"],["resources/images/pictos/volume_mute.png","f1e879e09dd85cd29cad8ced554e5554"],["resources/images/pictos/volume_up.png","f6fb584ad827bee4d9b1d32c3d88920b"],["resources/images/pictos/warning_black.png","5f775e92178bc942035341cee1cb0fcf"],["resources/images/pictos/warning_dotted.png","6f51d3f4962fc05e8e1c4f0991557d33"],["resources/images/pictos/wifi.png","cfbccae80fbbba502092c8afaebcc8a8"],["resources/images/pictos/wifi2.png","2772a5f50befa90215b8d9c81d1274ca"],["resources/images/pictos/wifi3.png","7a8b5e6266b93f8a55f1a6d132253d8c"],["resources/images/pictos/wifi4.png","72d3ba7109d7666062f38affda4e28ce"],["resources/images/pictos/window.png","707cd92b88fd3b774f394f1a8622f140"],["resources/images/pullarrow.png","7d4095e139bbdd24d6670c5b3918e0ee"],["resources/images/select_mask.png","c1625d3236064faa61353817cd48c7b3"],["resources/images/tip2_left.png","16109783ee87d0204417b23de19e3820"],["resources/images/tip2_right.png","de9c5ea3bc4fd068f3634463c7c7035e"],["resources/images/tip_bottom.png","9678e12b1b0d0c3e6f8e63c3ba5a469d"],["resources/images/tip_left.png","715c7a558c378c9bbfe5df361b48b676"],["resources/images/tip_right.png","6f833f060d4b6717c6e548781936df41"],["resources/images/tip_top.png","0b2cb894bdd1b8cfed42c6a269f2f44e"],["resources/images/togglebg.png","8f9831d181ffed126b8f25537eb02862"],["resources/images/togglemask.png","5dedd7843c209a9e166933b17aa68d1f"],["resources/images/togglethumb.png","1f3b0ffb5b98c02f95e213f8a853a261"],["resources/images/togglethumbbg.png","6a23077705cabb4322c1c04a2f2e7226"],["resources/images/togglethumbmask.png","3e6e6b0171d2a76cd71710c541c40064"],["resources/images/trackmask_outer.png","fe5b82a8eb7f41db737d11297b44e15a"],["resources/images/tree/loading.gif","576818f08387ba82a6389dc36ebcbd44"]];
var cacheName = 'sw-precache-v2-ED-3379b45e-c6bd-4adc-9f1f-12cdb7a579ea@1.0.0.0-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^(_dc|v)$/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||d.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||d.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||d.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||d.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);l=l?l.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),d.preCacheItems=d.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var l,d=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: cache first ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(t){return t?t:o.fetchAndCache(e,n)})})}var o=e("../helpers");t.exports=r},{"../helpers":1}],8:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: cache only ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e)})}var o=e("../helpers");t.exports=r},{"../helpers":1}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var o,s,a=[];if(c){var u=new Promise(function(n){o=setTimeout(function(){t.match(e).then(function(e){e&&n(e)})},1e3*c)});a.push(u)}var f=i.fetchAndCache(e,n).then(function(e){if(o&&clearTimeout(o),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(s)return s;throw r})});return a.push(f),Promise.race(a)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e){for(var t,n=[],r=0,o=0,i="";null!=(t=x.exec(e));){var c=t[0],s=t[1],a=t.index;if(i+=e.slice(o,a),o=a+c.length,s)i+=s[1];else{var f=e[o],h=t[2],p=t[3],l=t[4],d=t[5],g=t[6],m=t[7];i&&(n.push(i),i="");var v=null!=h&&null!=f&&f!==h,w="+"===g||"*"===g,y="?"===g||"*"===g,b=t[2]||"/",E=l||d||(m?".*":"[^"+b+"]+?");n.push({name:p||r++,prefix:h||"",delimiter:b,optional:y,repeat:w,partial:v,asterisk:!!m,pattern:u(E)})}}return o<e.length&&(i+=e.substr(o)),i&&n.push(i),n}function o(e){return s(r(e))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(m(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){for(var o=r(e),i=g(o,n),c=0;c<o.length;c++)"string"!=typeof o[c]&&t.push(o[c]);return f(i,t)}function g(e,t){t=t||{};for(var n=t.strict,r=t.end!==!1,o="",i=e[e.length-1],c="string"==typeof i&&/\/$/.test(i),s=0;s<e.length;s++){var u=e[s];if("string"==typeof u)o+=a(u);else{var f=a(u.prefix),p="(?:"+u.pattern+")";u.repeat&&(p+="(?:"+f+p+")*"),p=u.optional?u.partial?f+"("+p+")?":"(?:"+f+"("+p+"))?":f+"("+p+")",o+=p}}return n||(o=(c?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=r?"$":n&&c?"":"(?=\\/|$)",new RegExp("^"+o,h(t))}function m(e,t,n){return t=t||[],v(t)?n||(n={}):(n=t,t=[]),e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=m,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=g;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



function stripNoCache(request) {
    var url = request.url.replace(/_dc=\d+&?/, '');
    return new Request(url, request);
}
toolbox.networkFirst = function (request, values, options) {
    return toolbox.networkOnly(request, values, options)
        .then(function(response) {
            var cacheName = (options.cache && options.cache.name) || toolbox.options.cache.name;
            // cache response with _dc removed
            caches.open(cacheName).then(function(cache) {
                cache.put(stripNoCache(request), response)
            });
            return response.clone();
        })
        .catch(function(err) {
            return caches.match(stripNoCache(request))
        });
};
// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/data\/personnel\.json(\?|$)/, toolbox.networkFirst, {});




