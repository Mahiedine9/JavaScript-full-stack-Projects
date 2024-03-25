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

/***/ "./scripts/login.client.js":
/*!*********************************!*\
  !*** ./scripts/login.client.js ***!
  \*********************************/
/***/ (() => {

eval("let userlogin;\nlet userpassword;\nconst setup = () => {\n  userlogin = document.getElementById('userlogin');\n  userpassword = document.getElementById('userpassword');\n  document.getElementById('login').addEventListener('click', login);\n};\nwindow.addEventListener('DOMContentLoaded', setup);\nconst login = async () => {\n  const userData = {\n    login: userlogin.value,\n    password: userpassword.value\n  };\n  const body = JSON.stringify(userData);\n  const requestOptions = {\n    method: 'POST',\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: body\n  };\n  const response = await fetch(`/access/login`, requestOptions);\n  if (response.ok) {\n    const loggedUser = await response.json();\n    if (loggedUser.isAdmin) {\n      window.location.href = '/admin';\n    } else {\n      window.location.href = '/user';\n    }\n  } else {\n    const error = await response.json();\n    document.getElementById('problem').textContent = `erreur : ${error.message}`;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL2xvZ2luLmNsaWVudC5qcyIsIm5hbWVzIjpbInVzZXJsb2dpbiIsInVzZXJwYXNzd29yZCIsInNldHVwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2dpbiIsIndpbmRvdyIsInVzZXJEYXRhIiwidmFsdWUiLCJwYXNzd29yZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwibG9nZ2VkVXNlciIsImpzb24iLCJpc0FkbWluIiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3IiLCJ0ZXh0Q29udGVudCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC1hcHAvLi9zY3JpcHRzL2xvZ2luLmNsaWVudC5qcz8wZGEyIl0sInNvdXJjZXNDb250ZW50IjpbImxldCB1c2VybG9naW47XHJcbmxldCB1c2VycGFzc3dvcmQ7XHJcblxyXG5jb25zdCBzZXR1cCA9ICgpID0+IHtcclxuICB1c2VybG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcmxvZ2luJyk7XHJcbiAgdXNlcnBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJwYXNzd29yZCcpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9naW4pO1xyXG59XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgc2V0dXApO1xyXG5cclxuY29uc3QgbG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgdXNlckRhdGEgPSB7IGxvZ2luIDogdXNlcmxvZ2luLnZhbHVlLCBwYXNzd29yZCA6IHVzZXJwYXNzd29yZC52YWx1ZX07XHJcbiAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKTtcclxuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZCA6J1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycyA6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgOiBib2R5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYWNjZXNzL2xvZ2luYCwgcmVxdWVzdE9wdGlvbnMpO1xyXG4gIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgY29uc3QgbG9nZ2VkVXNlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGlmIChsb2dnZWRVc2VyLmlzQWRtaW4pe1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYWRtaW4nOyBcclxuICAgIH0gXHJcbiAgICBlbHNlIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3VzZXInOyBcclxuICAgIH1cclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBjb25zdCBlcnJvciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ibGVtJykudGV4dENvbnRlbnQgPSBgZXJyZXVyIDogJHtlcnJvci5tZXNzYWdlfWA7XHJcbiAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsU0FBUztBQUNiLElBQUlDLFlBQVk7QUFFaEIsTUFBTUMsS0FBSyxHQUFHQSxDQUFBLEtBQU07RUFDbEJGLFNBQVMsR0FBR0csUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDO0VBQ2hESCxZQUFZLEdBQUdFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUN0REQsUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRUMsS0FBSyxDQUFDO0FBQ25FLENBQUM7QUFDREMsTUFBTSxDQUFDRixnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRUgsS0FBSyxDQUFDO0FBRWxELE1BQU1JLEtBQUssR0FBRyxNQUFBQSxDQUFBLEtBQVk7RUFDeEIsTUFBTUUsUUFBUSxHQUFHO0lBQUVGLEtBQUssRUFBR04sU0FBUyxDQUFDUyxLQUFLO0lBQUVDLFFBQVEsRUFBR1QsWUFBWSxDQUFDUTtFQUFLLENBQUM7RUFDMUUsTUFBTUUsSUFBSSxHQUFHQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0wsUUFBUSxDQUFDO0VBQ3JDLE1BQU1NLGNBQWMsR0FBRztJQUNBQyxNQUFNLEVBQUUsTUFBTTtJQUNkQyxPQUFPLEVBQUc7TUFBRSxjQUFjLEVBQUU7SUFBbUIsQ0FBQztJQUNoREwsSUFBSSxFQUFHQTtFQUNULENBQUM7RUFDdEIsTUFBTU0sUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxlQUFjLEVBQUVKLGNBQWMsQ0FBQztFQUM3RCxJQUFJRyxRQUFRLENBQUNFLEVBQUUsRUFBRTtJQUNmLE1BQU1DLFVBQVUsR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBQ3hDLElBQUlELFVBQVUsQ0FBQ0UsT0FBTyxFQUFDO01BQ3JCZixNQUFNLENBQUNnQixRQUFRLENBQUNDLElBQUksR0FBRyxRQUFRO0lBQ2pDLENBQUMsTUFDSTtNQUNIakIsTUFBTSxDQUFDZ0IsUUFBUSxDQUFDQyxJQUFJLEdBQUcsT0FBTztJQUNoQztFQUNGLENBQUMsTUFDSTtJQUNILE1BQU1DLEtBQUssR0FBRyxNQUFNUixRQUFRLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBQ25DbEIsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUNzQixXQUFXLEdBQUksWUFBV0QsS0FBSyxDQUFDRSxPQUFRLEVBQUM7RUFDOUU7QUFDRixDQUFDIiwiaWdub3JlTGlzdCI6W119\n//# sourceURL=webpack-internal:///./scripts/login.client.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/login.client.js"]();
/******/ 	
/******/ })()
;