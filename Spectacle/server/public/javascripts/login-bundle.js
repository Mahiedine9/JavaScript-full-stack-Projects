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

eval("const socket = io();\nlet userlogin;\nlet userpassword;\nconst setup = () => {\n  userlogin = document.getElementById('userlogin');\n  userpassword = document.getElementById('userpassword');\n  document.getElementById('login').addEventListener('click', login);\n};\nwindow.addEventListener('DOMContentLoaded', setup);\nconst login = async () => {\n  const userData = {\n    login: userlogin.value,\n    password: userpassword.value\n  };\n  const body = JSON.stringify(userData);\n  const requestOptions = {\n    method: 'POST',\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: body\n  };\n  const response = await fetch(`/access/login`, requestOptions);\n  if (response.ok) {\n    const loggedUser = await response.json();\n    if (loggedUser.isAdmin) {\n      window.location.href = '/admin';\n    } else {\n      window.location.href = '/user';\n    }\n  } else {\n    const error = await response.json();\n    document.getElementById('problem').textContent = `erreur : ${error.message}`;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL2xvZ2luLmNsaWVudC5qcyIsIm5hbWVzIjpbInNvY2tldCIsImlvIiwidXNlcmxvZ2luIiwidXNlcnBhc3N3b3JkIiwic2V0dXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvZ2luIiwid2luZG93IiwidXNlckRhdGEiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJsb2dnZWRVc2VyIiwianNvbiIsImlzQWRtaW4iLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsInRleHRDb250ZW50IiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50LWFwcC8uL3NjcmlwdHMvbG9naW4uY2xpZW50LmpzPzBkYTIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc29ja2V0ID0gaW8oKTtcclxuXHJcblxyXG5sZXQgdXNlcmxvZ2luO1xyXG5sZXQgdXNlcnBhc3N3b3JkO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3Qgc2V0dXAgPSAoKSA9PiB7XHJcbiAgdXNlcmxvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJsb2dpbicpO1xyXG4gIHVzZXJwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VycGFzc3dvcmQnKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ2luKTtcclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHNldHVwKTtcclxuXHJcbmNvbnN0IGxvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHVzZXJEYXRhID0geyBsb2dpbiA6IHVzZXJsb2dpbi52YWx1ZSwgcGFzc3dvcmQgOiB1c2VycGFzc3dvcmQudmFsdWV9O1xyXG4gIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSk7XHJcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2QgOidQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnMgOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBib2R5IDogYm9keVxyXG4gICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FjY2Vzcy9sb2dpbmAsIHJlcXVlc3RPcHRpb25zKTtcclxuICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgIGNvbnN0IGxvZ2dlZFVzZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBpZiAobG9nZ2VkVXNlci5pc0FkbWluKXtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FkbWluJzsgXHJcbiAgICB9IFxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy91c2VyJzsgXHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvYmxlbScpLnRleHRDb250ZW50ID0gYGVycmV1ciA6ICR7ZXJyb3IubWVzc2FnZX1gO1xyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsRUFBRSxDQUFDLENBQUM7QUFHbkIsSUFBSUMsU0FBUztBQUNiLElBQUlDLFlBQVk7QUFLaEIsTUFBTUMsS0FBSyxHQUFHQSxDQUFBLEtBQU07RUFDbEJGLFNBQVMsR0FBR0csUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDO0VBQ2hESCxZQUFZLEdBQUdFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUN0REQsUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRUMsS0FBSyxDQUFDO0FBQ25FLENBQUM7QUFDREMsTUFBTSxDQUFDRixnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRUgsS0FBSyxDQUFDO0FBRWxELE1BQU1JLEtBQUssR0FBRyxNQUFBQSxDQUFBLEtBQVk7RUFDeEIsTUFBTUUsUUFBUSxHQUFHO0lBQUVGLEtBQUssRUFBR04sU0FBUyxDQUFDUyxLQUFLO0lBQUVDLFFBQVEsRUFBR1QsWUFBWSxDQUFDUTtFQUFLLENBQUM7RUFDMUUsTUFBTUUsSUFBSSxHQUFHQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0wsUUFBUSxDQUFDO0VBQ3JDLE1BQU1NLGNBQWMsR0FBRztJQUNBQyxNQUFNLEVBQUUsTUFBTTtJQUNkQyxPQUFPLEVBQUc7TUFBRSxjQUFjLEVBQUU7SUFBbUIsQ0FBQztJQUNoREwsSUFBSSxFQUFHQTtFQUNULENBQUM7RUFDdEIsTUFBTU0sUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxlQUFjLEVBQUVKLGNBQWMsQ0FBQztFQUM3RCxJQUFJRyxRQUFRLENBQUNFLEVBQUUsRUFBRTtJQUNmLE1BQU1DLFVBQVUsR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBQ3hDLElBQUlELFVBQVUsQ0FBQ0UsT0FBTyxFQUFDO01BQ3JCZixNQUFNLENBQUNnQixRQUFRLENBQUNDLElBQUksR0FBRyxRQUFRO0lBQ2pDLENBQUMsTUFDSTtNQUNIakIsTUFBTSxDQUFDZ0IsUUFBUSxDQUFDQyxJQUFJLEdBQUcsT0FBTztJQUNoQztFQUNGLENBQUMsTUFDSTtJQUNILE1BQU1DLEtBQUssR0FBRyxNQUFNUixRQUFRLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBQ25DbEIsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUNzQixXQUFXLEdBQUksWUFBV0QsS0FBSyxDQUFDRSxPQUFRLEVBQUM7RUFDOUU7QUFDRixDQUFDIiwiaWdub3JlTGlzdCI6W119\n//# sourceURL=webpack-internal:///./scripts/login.client.js\n");

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