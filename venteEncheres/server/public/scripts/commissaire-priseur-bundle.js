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

eval("const socket = io();\nsocket.emit('identify', 'auctioneer');\n\n// Écoute des événements 'identify', 'offerReceived' et 'alreadyAuctioneer'\nsocket.on('identify', () => {\n  console.log('Identified as an auctioneer');\n});\nsocket.on('offerReceived', (socketId, price) => {\n  console.log(\"je suis dans la on du commissaire priseur\");\n  const message = `Offre reçue de ${socketId}, prix : ${price}`;\n  displayOfferMessage(message);\n  updateCurrentBid(price);\n});\nsocket.on('alreadyAuctioneer', () => {\n  console.log('Another auctioneer is already connected');\n  errorMessage.style.display = 'block';\n  auctionControls.style.display = 'none';\n  returnLink.style.display = 'none';\n});\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const startAuctionButton = document.querySelector(\".start-auction\");\n  const auctionItemInput = document.getElementById(\"auction-item\");\n  const startPriceInput = document.getElementById(\"start-price\");\n  const stopAuctionButton = document.querySelector(\".stop-auction\");\n  startAuctionButton.disabled = true;\n  const currentPrice = document.getElementById(\"current-bid\");\n  currentPrice.textContent = startPriceInput.value.trim();\n  function checkInputs() {\n    if (auctionItemInput.value.trim() !== \"\" && startPriceInput.value.trim() !== \"\") {\n      startAuctionButton.disabled = false;\n    } else {\n      startAuctionButton.disabled = true;\n    }\n  }\n  auctionItemInput.addEventListener(\"input\", checkInputs);\n  startPriceInput.addEventListener(\"input\", checkInputs);\n  startAuctionButton.addEventListener(\"click\", () => {\n    auctionStarted = true;\n    startAuctionButton.disabled = true;\n    auctionItemInput.disabled = true;\n    startPriceInput.disabled = true;\n    startAuction(auctionItemInput, startPriceInput);\n  });\n  stopAuctionButton.addEventListener(\"click\", () => {\n    auctionStarted = false;\n    startAuctionButton.disabled = false;\n    auctionItemInput.disabled = false;\n    startPriceInput.disabled = false;\n    stopAuction();\n  });\n});\nfunction startAuction(item, price) {\n  socket.emit('auctionStarted', item.value.trim(), price.value.trim());\n}\nfunction stopAuction() {\n  const auctionItemInput = document.getElementById(\"auction-item\");\n  const currentBid = document.getElementById('current-bid');\n  displayOfferMessage(`Fin de l/'enchére. un ${auctionItemInput.value} conclus a ${currentBid.textContent}$`);\n  socket.emit('stop');\n}\nfunction displayOfferMessage(message) {\n  const offerMessage = document.getElementById('offer-message');\n  offerMessage.textContent = message;\n}\nfunction updateCurrentBid(price) {\n  const currentBid = document.getElementById('current-bid');\n  currentBid.textContent = parseInt(currentBid.textContent) + parseInt(price);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL2NvbW1pc3NhaXJlLXByaXNldXIuanMiLCJuYW1lcyI6WyJzb2NrZXQiLCJpbyIsImVtaXQiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJzb2NrZXRJZCIsInByaWNlIiwibWVzc2FnZSIsImRpc3BsYXlPZmZlck1lc3NhZ2UiLCJ1cGRhdGVDdXJyZW50QmlkIiwiZXJyb3JNZXNzYWdlIiwic3R5bGUiLCJkaXNwbGF5IiwiYXVjdGlvbkNvbnRyb2xzIiwicmV0dXJuTGluayIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0QXVjdGlvbkJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJhdWN0aW9uSXRlbUlucHV0IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdGFydFByaWNlSW5wdXQiLCJzdG9wQXVjdGlvbkJ1dHRvbiIsImRpc2FibGVkIiwiY3VycmVudFByaWNlIiwidGV4dENvbnRlbnQiLCJ2YWx1ZSIsInRyaW0iLCJjaGVja0lucHV0cyIsImF1Y3Rpb25TdGFydGVkIiwic3RhcnRBdWN0aW9uIiwic3RvcEF1Y3Rpb24iLCJpdGVtIiwiY3VycmVudEJpZCIsIm9mZmVyTWVzc2FnZSIsInBhcnNlSW50Il0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQtYXBwLy4vc2NyaXB0cy9jb21taXNzYWlyZS1wcmlzZXVyLmpzPzk3Y2YiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc29ja2V0ID0gaW8oKTtcblxuc29ja2V0LmVtaXQoJ2lkZW50aWZ5JywgJ2F1Y3Rpb25lZXInKTtcblxuLy8gw4ljb3V0ZSBkZXMgw6l2w6luZW1lbnRzICdpZGVudGlmeScsICdvZmZlclJlY2VpdmVkJyBldCAnYWxyZWFkeUF1Y3Rpb25lZXInXG5zb2NrZXQub24oJ2lkZW50aWZ5JywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdJZGVudGlmaWVkIGFzIGFuIGF1Y3Rpb25lZXInKTtcbn0pO1xuXG5zb2NrZXQub24oJ29mZmVyUmVjZWl2ZWQnLCAoc29ja2V0SWQsIHByaWNlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJqZSBzdWlzIGRhbnMgbGEgb24gZHUgY29tbWlzc2FpcmUgcHJpc2V1clwiKTtcbiAgICBjb25zdCBtZXNzYWdlID0gYE9mZnJlIHJlw6d1ZSBkZSAke3NvY2tldElkfSwgcHJpeCA6ICR7cHJpY2V9YDtcbiAgICBkaXNwbGF5T2ZmZXJNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIHVwZGF0ZUN1cnJlbnRCaWQocHJpY2UpO1xufSk7XG5cbnNvY2tldC5vbignYWxyZWFkeUF1Y3Rpb25lZXInLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0Fub3RoZXIgYXVjdGlvbmVlciBpcyBhbHJlYWR5IGNvbm5lY3RlZCcpO1xuICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBhdWN0aW9uQ29udHJvbHMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICByZXR1cm5MaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0QXVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtYXVjdGlvblwiKTtcbiAgICBjb25zdCBhdWN0aW9uSXRlbUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdWN0aW9uLWl0ZW1cIik7XG4gICAgY29uc3Qgc3RhcnRQcmljZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1wcmljZVwiKTtcbiAgICBjb25zdCBzdG9wQXVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RvcC1hdWN0aW9uXCIpO1xuICAgIHN0YXJ0QXVjdGlvbkJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgY29uc3QgY3VycmVudFByaWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LWJpZFwiKTtcbiAgICBjdXJyZW50UHJpY2UudGV4dENvbnRlbnQgPSBzdGFydFByaWNlSW5wdXQudmFsdWUudHJpbSgpOyBcblxuICAgIGZ1bmN0aW9uIGNoZWNrSW5wdXRzKCkge1xuICAgICAgICBpZiAoYXVjdGlvbkl0ZW1JbnB1dC52YWx1ZS50cmltKCkgIT09IFwiXCIgJiYgc3RhcnRQcmljZUlucHV0LnZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgICAgICAgc3RhcnRBdWN0aW9uQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFydEF1Y3Rpb25CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXVjdGlvbkl0ZW1JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgY2hlY2tJbnB1dHMpO1xuICAgIHN0YXJ0UHJpY2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgY2hlY2tJbnB1dHMpO1xuXG4gICAgc3RhcnRBdWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGF1Y3Rpb25TdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgc3RhcnRBdWN0aW9uQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgYXVjdGlvbkl0ZW1JbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHN0YXJ0UHJpY2VJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHN0YXJ0QXVjdGlvbihhdWN0aW9uSXRlbUlucHV0LCBzdGFydFByaWNlSW5wdXQpO1xuICAgIH0pO1xuXG4gICAgc3RvcEF1Y3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYXVjdGlvblN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgc3RhcnRBdWN0aW9uQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIGF1Y3Rpb25JdGVtSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgc3RhcnRQcmljZUlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHN0b3BBdWN0aW9uKCk7XG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gc3RhcnRBdWN0aW9uKGl0ZW0sIHByaWNlKSB7XG4gICAgc29ja2V0LmVtaXQoJ2F1Y3Rpb25TdGFydGVkJywgaXRlbS52YWx1ZS50cmltKCksIHByaWNlLnZhbHVlLnRyaW0oKSk7XG59XG5cbmZ1bmN0aW9uIHN0b3BBdWN0aW9uKCkge1xuICAgIGNvbnN0IGF1Y3Rpb25JdGVtSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1Y3Rpb24taXRlbVwiKTtcbiAgICBjb25zdCBjdXJyZW50QmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtYmlkJyk7XG4gICAgZGlzcGxheU9mZmVyTWVzc2FnZShgRmluIGRlIGwvJ2VuY2jDqXJlLiB1biAke2F1Y3Rpb25JdGVtSW5wdXQudmFsdWV9IGNvbmNsdXMgYSAke2N1cnJlbnRCaWQudGV4dENvbnRlbnR9JGAgKTtcbiAgICBzb2NrZXQuZW1pdCgnc3RvcCcpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5T2ZmZXJNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBvZmZlck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2ZmZXItbWVzc2FnZScpO1xuICAgIG9mZmVyTWVzc2FnZS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRCaWQocHJpY2UpIHtcbiAgICBjb25zdCBjdXJyZW50QmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtYmlkJyk7XG4gICAgY3VycmVudEJpZC50ZXh0Q29udGVudCA9IHBhcnNlSW50KGN1cnJlbnRCaWQudGV4dENvbnRlbnQpICsgcGFy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\n//# sourceURL=webpack-internal:///./scripts/commissaire-priseur.js\n");

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