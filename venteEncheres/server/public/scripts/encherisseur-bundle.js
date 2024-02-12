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

eval("const socket = io();\nsocket.emit('identify', 'bidder');\nsocket.on('identify', () => {\n  console.log('Identified as a bidder');\n});\nsocket.on('startOk', () => {\n  console.log(`start ok`);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL2VuY2hlcmlzc2V1ci5qcyIsIm5hbWVzIjpbInNvY2tldCIsImlvIiwiZW1pdCIsIm9uIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50LWFwcC8uL3NjcmlwdHMvZW5jaGVyaXNzZXVyLmpzP2JjNDQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc29ja2V0ID0gaW8oKTtcblxuc29ja2V0LmVtaXQoJ2lkZW50aWZ5JywgJ2JpZGRlcicpOyBcblxuc29ja2V0Lm9uKCdpZGVudGlmeScsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnSWRlbnRpZmllZCBhcyBhIGJpZGRlcicpO1xufSk7XG5cbnNvY2tldC5vbignc3RhcnRPaycsICgpID0+IHtjb25zb2xlLmxvZyhgc3RhcnQgb2tgKX0gKTtcblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsRUFBRSxDQUFDLENBQUM7QUFFbkJELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUM7QUFFakNGLE1BQU0sQ0FBQ0csRUFBRSxDQUFDLFVBQVUsRUFBRSxNQUFNO0VBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztBQUN6QyxDQUFDLENBQUM7QUFFRkwsTUFBTSxDQUFDRyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU07RUFBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUUsVUFBUyxDQUFDO0FBQUEsQ0FBRSxDQUFDIn0=\n//# sourceURL=webpack-internal:///./scripts/encherisseur.js\n");

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