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

eval("const socket = io();\nsocket.emit('identify', 'auctioneer');\nsocket.on('identify', () => {\n  console.log('Identified as a auctioneer');\n});\nconst errorMessage = document.getElementById('error-message');\nconst auctionControls = document.querySelector('.auction-controls');\nconst returnLink = document.querySelector('.return-link');\nsocket.on('alreadyAuctioneer', () => {\n  errorMessage.style.display = 'block';\n  auctionControls.style.display = 'none';\n  returnLink.style.display = 'none';\n});\nconst validMessage = document.getElementById('valid-message');\nsocket.on('youAreAuctioneer', () => {\n  validMessage.style.display = 'block';\n});\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const startAuctionButton = document.querySelector(\".start-auction\");\n  const auctionItemInput = document.getElementById(\"auction-item\");\n  const startPriceInput = document.getElementById(\"start-price\");\n  startAuctionButton.disabled = true;\n  function checkInputs() {\n    if (auctionItemInput.value.trim() !== \"\" && startPriceInput.value.trim() !== \"\") {\n      startAuctionButton.disabled = false;\n    } else {\n      startAuctionButton.disabled = true;\n    }\n  }\n  auctionItemInput.addEventListener(\"input\", checkInputs);\n  startPriceInput.addEventListener(\"input\", checkInputs);\n  startAuctionButton.addEventListener(\"click\", () => startAuction(auctionItemInput, startPriceInput));\n});\nfunction startAuction(item, price) {\n  console.log(`je suis dans la méthode start du client ${item.value}  ${price.value} `);\n  socket.emit('auctionStarted', item.value, price.value);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL2NvbW1pc3NhaXJlLXByaXNldXIuanMiLCJuYW1lcyI6WyJzb2NrZXQiLCJpbyIsImVtaXQiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvck1lc3NhZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXVjdGlvbkNvbnRyb2xzIiwicXVlcnlTZWxlY3RvciIsInJldHVybkxpbmsiLCJzdHlsZSIsImRpc3BsYXkiLCJ2YWxpZE1lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRBdWN0aW9uQnV0dG9uIiwiYXVjdGlvbkl0ZW1JbnB1dCIsInN0YXJ0UHJpY2VJbnB1dCIsImRpc2FibGVkIiwiY2hlY2tJbnB1dHMiLCJ2YWx1ZSIsInRyaW0iLCJzdGFydEF1Y3Rpb24iLCJpdGVtIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC1hcHAvLi9zY3JpcHRzL2NvbW1pc3NhaXJlLXByaXNldXIuanM/OTdjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzb2NrZXQgPSBpbygpO1xuXG5cbnNvY2tldC5lbWl0KCdpZGVudGlmeScsICdhdWN0aW9uZWVyJyk7IFxuc29ja2V0Lm9uKCdpZGVudGlmeScsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnSWRlbnRpZmllZCBhcyBhIGF1Y3Rpb25lZXInKTtcbn0pO1xuXG5cbmNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvci1tZXNzYWdlJyk7XG5jb25zdCBhdWN0aW9uQ29udHJvbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVjdGlvbi1jb250cm9scycpO1xuY29uc3QgcmV0dXJuTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXR1cm4tbGluaycpO1xuc29ja2V0Lm9uKCdhbHJlYWR5QXVjdGlvbmVlcicsICgpID0+IHtcbiAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgYXVjdGlvbkNvbnRyb2xzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcmV0dXJuTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5jb25zdCB2YWxpZE1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmFsaWQtbWVzc2FnZScpO1xuc29ja2V0Lm9uKCd5b3VBcmVBdWN0aW9uZWVyJywgKCkgPT4ge1xuICAgIHZhbGlkTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn0pO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBzdGFydEF1Y3Rpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWF1Y3Rpb25cIik7XG4gICAgY29uc3QgYXVjdGlvbkl0ZW1JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXVjdGlvbi1pdGVtXCIpO1xuICAgIGNvbnN0IHN0YXJ0UHJpY2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtcHJpY2VcIik7XG5cbiAgICBzdGFydEF1Y3Rpb25CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tJbnB1dHMoKSB7XG4gICAgICAgIGlmIChhdWN0aW9uSXRlbUlucHV0LnZhbHVlLnRyaW0oKSAhPT0gXCJcIiAmJiBzdGFydFByaWNlSW5wdXQudmFsdWUudHJpbSgpICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBzdGFydEF1Y3Rpb25CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0QXVjdGlvbkJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhdWN0aW9uSXRlbUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBjaGVja0lucHV0cyk7XG4gICAgc3RhcnRQcmljZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBjaGVja0lucHV0cyk7XG4gICAgc3RhcnRBdWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzdGFydEF1Y3Rpb24oYXVjdGlvbkl0ZW1JbnB1dCwgc3RhcnRQcmljZUlucHV0KSk7XG59KTtcblxuZnVuY3Rpb24gc3RhcnRBdWN0aW9uKGl0ZW0sIHByaWNlKSB7XG4gICAgY29uc29sZS5sb2coYGplIHN1aXMgZGFucyBsYSBtw6l0aG9kZSBzdGFydCBkdSBjbGllbnQgJHtpdGVtLnZhbHVlfSAgJHtwcmljZS52YWx1ZX0gYCk7XG4gICAgc29ja2V0LmVtaXQoJ2F1Y3Rpb25TdGFydGVkJywgaXRlbS52YWx1ZSwgcHJpY2UudmFsdWUpO1xufVxuXG5cblxuIFxuXG5cblxuXG5cblxuIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxDQUFDO0FBR25CRCxNQUFNLENBQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDO0FBQ3JDRixNQUFNLENBQUNHLEVBQUUsQ0FBQyxVQUFVLEVBQUUsTUFBTTtFQUN4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLENBQUM7QUFDN0MsQ0FBQyxDQUFDO0FBR0YsTUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLENBQUM7QUFDN0QsTUFBTUMsZUFBZSxHQUFHRixRQUFRLENBQUNHLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztBQUNuRSxNQUFNQyxVQUFVLEdBQUdKLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUN6RFYsTUFBTSxDQUFDRyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsTUFBTTtFQUNqQ0csWUFBWSxDQUFDTSxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO0VBQ3BDSixlQUFlLENBQUNHLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07RUFDdENGLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtBQUNyQyxDQUFDLENBQUM7QUFDRixNQUFNQyxZQUFZLEdBQUdQLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsQ0FBQztBQUM3RFIsTUFBTSxDQUFDRyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoQ1csWUFBWSxDQUFDRixLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO0FBQ3hDLENBQUMsQ0FBQztBQUdGTixRQUFRLENBQUNRLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDaEQsTUFBTUMsa0JBQWtCLEdBQUdULFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGdCQUFnQixDQUFDO0VBQ25FLE1BQU1PLGdCQUFnQixHQUFHVixRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUM7RUFDaEUsTUFBTVUsZUFBZSxHQUFHWCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7RUFFOURRLGtCQUFrQixDQUFDRyxRQUFRLEdBQUcsSUFBSTtFQUVsQyxTQUFTQyxXQUFXQSxDQUFBLEVBQUc7SUFDbkIsSUFBSUgsZ0JBQWdCLENBQUNJLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUlKLGVBQWUsQ0FBQ0csS0FBSyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtNQUM3RU4sa0JBQWtCLENBQUNHLFFBQVEsR0FBRyxLQUFLO0lBQ3ZDLENBQUMsTUFBTTtNQUNISCxrQkFBa0IsQ0FBQ0csUUFBUSxHQUFHLElBQUk7SUFDdEM7RUFDSjtFQUVBRixnQkFBZ0IsQ0FBQ0YsZ0JBQWdCLENBQUMsT0FBTyxFQUFFSyxXQUFXLENBQUM7RUFDdkRGLGVBQWUsQ0FBQ0gsZ0JBQWdCLENBQUMsT0FBTyxFQUFFSyxXQUFXLENBQUM7RUFDdERKLGtCQUFrQixDQUFDRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTVEsWUFBWSxDQUFDTixnQkFBZ0IsRUFBRUMsZUFBZSxDQUFDLENBQUM7QUFDdkcsQ0FBQyxDQUFDO0FBRUYsU0FBU0ssWUFBWUEsQ0FBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUU7RUFDL0JyQixPQUFPLENBQUNDLEdBQUcsQ0FBRSwyQ0FBMENtQixJQUFJLENBQUNILEtBQU0sS0FBSUksS0FBSyxDQUFDSixLQUFNLEdBQUUsQ0FBQztFQUNyRnJCLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLGdCQUFnQixFQUFFc0IsSUFBSSxDQUFDSCxLQUFLLEVBQUVJLEtBQUssQ0FBQ0osS0FBSyxDQUFDO0FBQzFEIn0=\n//# sourceURL=webpack-internal:///./scripts/commissaire-priseur.js\n");

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