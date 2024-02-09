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

eval("const socket = io();\nsocket.emit('identify', 'auctioneer');\nsocket.on('identify', () => {\n  console.log('Identified as a auctioneer');\n});\nconst errorMessage = document.getElementById('error-message');\nconst auctionControls = document.querySelector('.auction-controls');\nconst returnLink = document.querySelector('.return-link');\nsocket.on('alreadyAuctioneer', () => {\n  errorMessage.style.display = 'block';\n  auctionControls.style.display = 'none';\n  returnLink.style.display = 'none';\n});\nconst validMessage = document.getElementById('valid-message');\nsocket.on('youAreAuctioneer', () => {\n  validMessage.style.display = 'block';\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL2NvbW1pc3NhaXJlLXByaXNldXIuanMiLCJuYW1lcyI6WyJzb2NrZXQiLCJpbyIsImVtaXQiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvck1lc3NhZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXVjdGlvbkNvbnRyb2xzIiwicXVlcnlTZWxlY3RvciIsInJldHVybkxpbmsiLCJzdHlsZSIsImRpc3BsYXkiLCJ2YWxpZE1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC1hcHAvLi9zY3JpcHRzL2NvbW1pc3NhaXJlLXByaXNldXIuanM/OTdjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzb2NrZXQgPSBpbygpO1xuXG5cbnNvY2tldC5lbWl0KCdpZGVudGlmeScsICdhdWN0aW9uZWVyJyk7IFxuc29ja2V0Lm9uKCdpZGVudGlmeScsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnSWRlbnRpZmllZCBhcyBhIGF1Y3Rpb25lZXInKTtcbn0pO1xuXG5cbmNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvci1tZXNzYWdlJyk7XG5jb25zdCBhdWN0aW9uQ29udHJvbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVjdGlvbi1jb250cm9scycpO1xuY29uc3QgcmV0dXJuTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXR1cm4tbGluaycpO1xuc29ja2V0Lm9uKCdhbHJlYWR5QXVjdGlvbmVlcicsICgpID0+IHtcbiAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgYXVjdGlvbkNvbnRyb2xzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcmV0dXJuTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5jb25zdCB2YWxpZE1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmFsaWQtbWVzc2FnZScpO1xuc29ja2V0Lm9uKCd5b3VBcmVBdWN0aW9uZWVyJywgKCkgPT4ge1xuICAgIHZhbGlkTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn0pO1xuXG5cblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsRUFBRSxDQUFDLENBQUM7QUFHbkJELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUM7QUFDckNGLE1BQU0sQ0FBQ0csRUFBRSxDQUFDLFVBQVUsRUFBRSxNQUFNO0VBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQztBQUM3QyxDQUFDLENBQUM7QUFHRixNQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsQ0FBQztBQUM3RCxNQUFNQyxlQUFlLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLG1CQUFtQixDQUFDO0FBQ25FLE1BQU1DLFVBQVUsR0FBR0osUUFBUSxDQUFDRyxhQUFhLENBQUMsY0FBYyxDQUFDO0FBQ3pEVixNQUFNLENBQUNHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNO0VBQ2pDRyxZQUFZLENBQUNNLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87RUFDcENKLGVBQWUsQ0FBQ0csS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtFQUN0Q0YsVUFBVSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0FBQ3JDLENBQUMsQ0FBQztBQUNGLE1BQU1DLFlBQVksR0FBR1AsUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUFDO0FBQzdEUixNQUFNLENBQUNHLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hDVyxZQUFZLENBQUNGLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87QUFDeEMsQ0FBQyxDQUFDIn0=\n//# sourceURL=webpack-internal:///./scripts/commissaire-priseur.js\n");

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