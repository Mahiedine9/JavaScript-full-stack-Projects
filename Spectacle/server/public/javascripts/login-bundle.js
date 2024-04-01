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

eval("const socket = io();\nlet userlogin;\nlet userpassword;\nconst setup = () => {\n  userlogin = document.getElementById('userlogin');\n  userpassword = document.getElementById('userpassword');\n  document.getElementById('login').addEventListener('click', login);\n};\nwindow.addEventListener('DOMContentLoaded', setup);\nconst login = async () => {\n  const userData = {\n    login: userlogin.value,\n    password: userpassword.value\n  };\n  const body = JSON.stringify(userData);\n  const requestOptions = {\n    method: 'POST',\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: body\n  };\n  const response = await fetch(`/access/login`, requestOptions);\n  if (response.ok) {\n    const loggedUser = await response.json();\n    if (loggedUser.isAdmin) {\n      window.location.href = '/admin';\n    } else {\n      window.location.href = '/user';\n    }\n  } else {\n    const error = await response.json();\n    document.getElementById('problem').textContent = `erreur : ${error.message}`;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL2xvZ2luLmNsaWVudC5qcyIsIm5hbWVzIjpbInNvY2tldCIsImlvIiwidXNlcmxvZ2luIiwidXNlcnBhc3N3b3JkIiwic2V0dXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvZ2luIiwid2luZG93IiwidXNlckRhdGEiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJsb2dnZWRVc2VyIiwianNvbiIsImlzQWRtaW4iLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsInRleHRDb250ZW50IiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50LWFwcC8uL3NjcmlwdHMvbG9naW4uY2xpZW50LmpzPzBkYTIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc29ja2V0ID0gaW8oKTtcclxuXHJcblxyXG5sZXQgdXNlcmxvZ2luO1xyXG5sZXQgdXNlcnBhc3N3b3JkO1xyXG5cclxuXHJcbmNvbnN0IHNldHVwID0gKCkgPT4ge1xyXG4gIHVzZXJsb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybG9naW4nKTtcclxuICB1c2VycGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcnBhc3N3b3JkJyk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2dpbik7XHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBzZXR1cCk7XHJcblxyXG5jb25zdCBsb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB1c2VyRGF0YSA9IHsgbG9naW4gOiB1c2VybG9naW4udmFsdWUsIHBhc3N3b3JkIDogdXNlcnBhc3N3b3JkLnZhbHVlfTtcclxuICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpO1xyXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kIDonUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzIDogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYm9keSA6IGJvZHlcclxuICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hY2Nlc3MvbG9naW5gLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICBjb25zdCBsb2dnZWRVc2VyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgaWYgKGxvZ2dlZFVzZXIuaXNBZG1pbil7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9hZG1pbic7IFxyXG4gICAgfSBcclxuICAgIGVsc2Uge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvdXNlcic7IFxyXG4gICAgfVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2JsZW0nKS50ZXh0Q29udGVudCA9IGBlcnJldXIgOiAke2Vycm9yLm1lc3NhZ2V9YDtcclxuICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxDQUFDO0FBR25CLElBQUlDLFNBQVM7QUFDYixJQUFJQyxZQUFZO0FBR2hCLE1BQU1DLEtBQUssR0FBR0EsQ0FBQSxLQUFNO0VBQ2xCRixTQUFTLEdBQUdHLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQztFQUNoREgsWUFBWSxHQUFHRSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUM7RUFDdERELFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVDLEtBQUssQ0FBQztBQUNuRSxDQUFDO0FBQ0RDLE1BQU0sQ0FBQ0YsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUVILEtBQUssQ0FBQztBQUVsRCxNQUFNSSxLQUFLLEdBQUcsTUFBQUEsQ0FBQSxLQUFZO0VBQ3hCLE1BQU1FLFFBQVEsR0FBRztJQUFFRixLQUFLLEVBQUdOLFNBQVMsQ0FBQ1MsS0FBSztJQUFFQyxRQUFRLEVBQUdULFlBQVksQ0FBQ1E7RUFBSyxDQUFDO0VBQzFFLE1BQU1FLElBQUksR0FBR0MsSUFBSSxDQUFDQyxTQUFTLENBQUNMLFFBQVEsQ0FBQztFQUNyQyxNQUFNTSxjQUFjLEdBQUc7SUFDQUMsTUFBTSxFQUFFLE1BQU07SUFDZEMsT0FBTyxFQUFHO01BQUUsY0FBYyxFQUFFO0lBQW1CLENBQUM7SUFDaERMLElBQUksRUFBR0E7RUFDVCxDQUFDO0VBQ3RCLE1BQU1NLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsZUFBYyxFQUFFSixjQUFjLENBQUM7RUFDN0QsSUFBSUcsUUFBUSxDQUFDRSxFQUFFLEVBQUU7SUFDZixNQUFNQyxVQUFVLEdBQUcsTUFBTUgsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUN4QyxJQUFJRCxVQUFVLENBQUNFLE9BQU8sRUFBQztNQUNyQmYsTUFBTSxDQUFDZ0IsUUFBUSxDQUFDQyxJQUFJLEdBQUcsUUFBUTtJQUNqQyxDQUFDLE1BQ0k7TUFDSGpCLE1BQU0sQ0FBQ2dCLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLE9BQU87SUFDaEM7RUFDRixDQUFDLE1BQ0k7SUFDSCxNQUFNQyxLQUFLLEdBQUcsTUFBTVIsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUNuQ2xCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDc0IsV0FBVyxHQUFJLFlBQVdELEtBQUssQ0FBQ0UsT0FBUSxFQUFDO0VBQzlFO0FBQ0YsQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==\n//# sourceURL=webpack-internal:///./scripts/login.client.js\n");

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