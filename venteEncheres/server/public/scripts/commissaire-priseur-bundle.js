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

/***/ "./scripts/commissaire-priseur.js":
/*!****************************************!*\
  !*** ./scripts/commissaire-priseur.js ***!
  \****************************************/
/***/ (() => {

eval("const socket = io();\nsocket.emit('identify', 'auctioneer');\nsocket.on('identify', () => {\n  console.log('Identified as an auctioneer');\n});\nsocket.on('offerReceived', (socketId, price) => {\n  console.log(\"je suis dans la on du commissaire priseur\");\n  const message = `Offre reçue de ${socketId}, prix : ${price}`;\n  displayOfferMessage(message);\n  updateCurrentBid(price);\n});\nsocket.on('alreadyAuctioneer', () => {\n  console.log('Another auctioneer is already connected');\n  errorMessage.style.display = 'block';\n  auctionControls.style.display = 'none';\n  returnLink.style.display = 'none';\n});\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const startAuctionButton = document.querySelector(\".start-auction\");\n  const auctionItemInput = document.getElementById(\"auction-item\");\n  const startPriceInput = document.getElementById(\"start-price\");\n  const stopAuctionButton = document.querySelector(\".stop-auction\");\n  startAuctionButton.disabled = true;\n  const currentPrice = document.getElementById(\"current-bid\");\n  currentPrice.textContent = startPriceInput.value.trim();\n  function checkInputs() {\n    if (auctionItemInput.value.trim() !== \"\" && startPriceInput.value.trim() !== \"\") {\n      startAuctionButton.disabled = false;\n    } else {\n      startAuctionButton.disabled = true;\n    }\n  }\n  auctionItemInput.addEventListener(\"input\", checkInputs);\n  startPriceInput.addEventListener(\"input\", checkInputs);\n  startAuctionButton.addEventListener(\"click\", () => {\n    auctionStarted = true;\n    startAuctionButton.disabled = true;\n    auctionItemInput.disabled = true;\n    startPriceInput.disabled = true;\n    startAuction(auctionItemInput, startPriceInput);\n  });\n  stopAuctionButton.addEventListener(\"click\", () => {\n    auctionStarted = false;\n    startAuctionButton.disabled = false;\n    auctionItemInput.disabled = false;\n    startPriceInput.disabled = false;\n    stopAuction();\n  });\n});\nfunction startAuction(item, price) {\n  socket.emit('auctionStarted', item.value.trim(), price.value.trim());\n}\nfunction stopAuction() {\n  const auctionItemInput = document.getElementById(\"auction-item\");\n  const currentBid = document.getElementById('current-bid');\n  displayOfferMessage(`Fin de lenchére. un ${auctionItemInput.value} conclus a ${currentBid.textContent}$`);\n  socket.emit('stop');\n}\nfunction displayOfferMessage(message) {\n  const offerMessage = document.getElementById('offer-message');\n  offerMessage.textContent = message;\n}\nfunction updateCurrentBid(price) {\n  const currentBid = document.getElementById('current-bid');\n  currentBid.textContent = parseInt(currentBid.textContent) + parseInt(price);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL2NvbW1pc3NhaXJlLXByaXNldXIuanMiLCJuYW1lcyI6WyJzb2NrZXQiLCJpbyIsImVtaXQiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJzb2NrZXRJZCIsInByaWNlIiwibWVzc2FnZSIsImRpc3BsYXlPZmZlck1lc3NhZ2UiLCJ1cGRhdGVDdXJyZW50QmlkIiwiZXJyb3JNZXNzYWdlIiwic3R5bGUiLCJkaXNwbGF5IiwiYXVjdGlvbkNvbnRyb2xzIiwicmV0dXJuTGluayIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0QXVjdGlvbkJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJhdWN0aW9uSXRlbUlucHV0IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdGFydFByaWNlSW5wdXQiLCJzdG9wQXVjdGlvbkJ1dHRvbiIsImRpc2FibGVkIiwiY3VycmVudFByaWNlIiwidGV4dENvbnRlbnQiLCJ2YWx1ZSIsInRyaW0iLCJjaGVja0lucHV0cyIsImF1Y3Rpb25TdGFydGVkIiwic3RhcnRBdWN0aW9uIiwic3RvcEF1Y3Rpb24iLCJpdGVtIiwiY3VycmVudEJpZCIsIm9mZmVyTWVzc2FnZSIsInBhcnNlSW50Il0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQtYXBwLy4vc2NyaXB0cy9jb21taXNzYWlyZS1wcmlzZXVyLmpzPzk3Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc29ja2V0ID0gaW8oKTtcblxuc29ja2V0LmVtaXQoJ2lkZW50aWZ5JywgJ2F1Y3Rpb25lZXInKTtcblxuc29ja2V0Lm9uKCdpZGVudGlmeScsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnSWRlbnRpZmllZCBhcyBhbiBhdWN0aW9uZWVyJyk7XG59KTtcblxuc29ja2V0Lm9uKCdvZmZlclJlY2VpdmVkJywgKHNvY2tldElkLCBwcmljZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiamUgc3VpcyBkYW5zIGxhIG9uIGR1IGNvbW1pc3NhaXJlIHByaXNldXJcIik7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBPZmZyZSByZcOndWUgZGUgJHtzb2NrZXRJZH0sIHByaXggOiAke3ByaWNlfWA7XG4gICAgZGlzcGxheU9mZmVyTWVzc2FnZShtZXNzYWdlKTtcbiAgICB1cGRhdGVDdXJyZW50QmlkKHByaWNlKTtcbiAgICBcbn0pO1xuXG5cblxuc29ja2V0Lm9uKCdhbHJlYWR5QXVjdGlvbmVlcicsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQW5vdGhlciBhdWN0aW9uZWVyIGlzIGFscmVhZHkgY29ubmVjdGVkJyk7XG4gICAgZXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGF1Y3Rpb25Db250cm9scy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHJldHVybkxpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRBdWN0aW9uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1hdWN0aW9uXCIpO1xuICAgIGNvbnN0IGF1Y3Rpb25JdGVtSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1Y3Rpb24taXRlbVwiKTtcbiAgICBjb25zdCBzdGFydFByaWNlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LXByaWNlXCIpO1xuICAgIGNvbnN0IHN0b3BBdWN0aW9uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdG9wLWF1Y3Rpb25cIik7XG4gICAgc3RhcnRBdWN0aW9uQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBjb25zdCBjdXJyZW50UHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtYmlkXCIpO1xuICAgIGN1cnJlbnRQcmljZS50ZXh0Q29udGVudCA9IHN0YXJ0UHJpY2VJbnB1dC52YWx1ZS50cmltKCk7IFxuXG4gICAgZnVuY3Rpb24gY2hlY2tJbnB1dHMoKSB7XG4gICAgICAgIGlmIChhdWN0aW9uSXRlbUlucHV0LnZhbHVlLnRyaW0oKSAhPT0gXCJcIiAmJiBzdGFydFByaWNlSW5wdXQudmFsdWUudHJpbSgpICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBzdGFydEF1Y3Rpb25CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0QXVjdGlvbkJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhdWN0aW9uSXRlbUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBjaGVja0lucHV0cyk7XG4gICAgc3RhcnRQcmljZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBjaGVja0lucHV0cyk7XG5cbiAgICBzdGFydEF1Y3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYXVjdGlvblN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICBzdGFydEF1Y3Rpb25CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBhdWN0aW9uSXRlbUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgc3RhcnRQcmljZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgc3RhcnRBdWN0aW9uKGF1Y3Rpb25JdGVtSW5wdXQsIHN0YXJ0UHJpY2VJbnB1dCk7XG4gICAgfSk7XG5cbiAgICBzdG9wQXVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBhdWN0aW9uU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICBzdGFydEF1Y3Rpb25CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgYXVjdGlvbkl0ZW1JbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBzdGFydFByaWNlSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgc3RvcEF1Y3Rpb24oKTtcbiAgICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBzdGFydEF1Y3Rpb24oaXRlbSwgcHJpY2UpIHtcbiAgICBzb2NrZXQuZW1pdCgnYXVjdGlvblN0YXJ0ZWQnLCBpdGVtLnZhbHVlLnRyaW0oKSwgcHJpY2UudmFsdWUudHJpbSgpKTtcbn1cblxuZnVuY3Rpb24gc3RvcEF1Y3Rpb24oKSB7XG4gICAgY29uc3QgYXVjdGlvbkl0ZW1JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXVjdGlvbi1pdGVtXCIpO1xuICAgIGNvbnN0IGN1cnJlbnRCaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1iaWQnKTtcbiAgICBkaXNwbGF5T2ZmZXJNZXNzYWdlKGBGaW4gZGUgbGVuY2jDqXJlLiB1biAke2F1Y3Rpb25JdGVtSW5wdXQudmFsdWV9IGNvbmNsdXMgYSAke2N1cnJlbnRCaWQudGV4dENvbnRlbnR9JGAgKTtcbiAgICBzb2NrZXQuZW1pdCgnc3RvcCcpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5T2ZmZXJNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBvZmZlck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2ZmZXItbWVzc2FnZScpO1xuICAgIG9mZmVyTWVzc2FnZS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG59XG5cblxuZnVuY3Rpb24gdXBkYXRlQ3VycmVudEJpZChwcmljZSkge1xuICAgIGNvbnN0IGN1cnJlbnRCaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1iaWQnKTtcbiAgICBjdXJyZW50QmlkLnRleHRDb250ZW50ID0gcGFyc2VJbnQoY3VycmVudEJpZC50ZXh0Q29udGVudCkgKyBwYXJzZUludChwcmljZSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsRUFBRSxDQUFDLENBQUM7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\n//# sourceURL=webpack-internal:///./scripts/commissaire-priseur.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/commissaire-priseur.js"]();
/******/ 	
/******/ })()
;