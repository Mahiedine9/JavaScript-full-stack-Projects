/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/encherisseur.js":
/*!*********************************!*\
  !*** ./scripts/encherisseur.js ***!
  \*********************************/
/***/ (() => {

eval("const socket = io();\nsocket.emit('identify', 'bidder');\nsocket.on('identify', () => {\n  console.log('Identified as a bidder');\n});\nsocket.on('startData', (item, price) => auctionStarted(item, price));\nsocket.on('stopAuction', () => {\n  console.log(`fin de lenchere, merci pour la participation`);\n});\nsocket.on('alreadyAuction', () => {\n  console.log(`une enchere est deja lancé, attend ou casse toi`);\n});\nconst state = document.getElementById(\"state\");\nfunction auctionStarted(item, price) {\n  state.value = \"Une enchére vient de commencer\";\n  console.log(`start ok ${item} prix ${price}`);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL2VuY2hlcmlzc2V1ci5qcyIsIm5hbWVzIjpbInNvY2tldCIsImlvIiwiZW1pdCIsIm9uIiwiY29uc29sZSIsImxvZyIsIml0ZW0iLCJwcmljZSIsImF1Y3Rpb25TdGFydGVkIiwic3RhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC1hcHAvLi9zY3JpcHRzL2VuY2hlcmlzc2V1ci5qcz9iYzQ0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNvY2tldCA9IGlvKCk7XG5cbnNvY2tldC5lbWl0KCdpZGVudGlmeScsICdiaWRkZXInKTsgXG5cbnNvY2tldC5vbignaWRlbnRpZnknLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0lkZW50aWZpZWQgYXMgYSBiaWRkZXInKTtcbn0pO1xuXG5zb2NrZXQub24oJ3N0YXJ0RGF0YScsIChpdGVtLCBwcmljZSkgPT4gYXVjdGlvblN0YXJ0ZWQoaXRlbSwgcHJpY2UpICk7XG5cbnNvY2tldC5vbignc3RvcEF1Y3Rpb24nLCAoKSA9PiB7Y29uc29sZS5sb2coYGZpbiBkZSBsZW5jaGVyZSwgbWVyY2kgcG91ciBsYSBwYXJ0aWNpcGF0aW9uYCl9KVxuc29ja2V0Lm9uKCdhbHJlYWR5QXVjdGlvbicsICgpID0+IHtjb25zb2xlLmxvZyhgdW5lIGVuY2hlcmUgZXN0IGRlamEgbGFuY8OpLCBhdHRlbmQgb3UgY2Fzc2UgdG9pYCl9KTtcblxuY29uc3Qgc3RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXRlXCIpO1xuXG5mdW5jdGlvbiBhdWN0aW9uU3RhcnRlZChpdGVtLCBwcmljZSl7XG4gICAgc3RhdGUudmFsdWUgPSBcIlVuZSBlbmNow6lyZSB2aWVudCBkZSBjb21tZW5jZXJcIjtcbiAgICBjb25zb2xlLmxvZyhgc3RhcnQgb2sgJHtpdGVtfSBwcml4ICR7cHJpY2V9YCk7XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsRUFBRSxDQUFDLENBQUM7QUFFbkJELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUM7QUFFakNGLE1BQU0sQ0FBQ0csRUFBRSxDQUFDLFVBQVUsRUFBRSxNQUFNO0VBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztBQUN6QyxDQUFDLENBQUM7QUFFRkwsTUFBTSxDQUFDRyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUNHLElBQUksRUFBRUMsS0FBSyxLQUFLQyxjQUFjLENBQUNGLElBQUksRUFBRUMsS0FBSyxDQUFFLENBQUM7QUFFckVQLE1BQU0sQ0FBQ0csRUFBRSxDQUFDLGFBQWEsRUFBRSxNQUFNO0VBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLDhDQUE2QyxDQUFDO0FBQUEsQ0FBQyxDQUFDO0FBQzdGTCxNQUFNLENBQUNHLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNO0VBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLGlEQUFnRCxDQUFDO0FBQUEsQ0FBQyxDQUFDO0FBRW5HLE1BQU1JLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDO0FBRTlDLFNBQVNILGNBQWNBLENBQUNGLElBQUksRUFBRUMsS0FBSyxFQUFDO0VBQ2hDRSxLQUFLLENBQUNHLEtBQUssR0FBRyxnQ0FBZ0M7RUFDOUNSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLFlBQVdDLElBQUssU0FBUUMsS0FBTSxFQUFDLENBQUM7QUFDakQifQ==\n//# sourceURL=webpack-internal:///./scripts/encherisseur.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/encherisseur.js"]();
/******/ 	
/******/ })()
;