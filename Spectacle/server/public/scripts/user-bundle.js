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

/***/ "./scripts/user.client.js":
/*!********************************!*\
  !*** ./scripts/user.client.js ***!
  \********************************/
/***/ (() => {

eval("const setup = () => {\n  getShows();\n  displayTickets();\n  document.getElementById('logout').addEventListener('click', logout);\n};\nwindow.addEventListener('DOMContentLoaded', setup);\nconst getUser = async () => {\n  try {\n    const requestOptions = {\n      method: 'GET'\n    };\n    const response = await fetch(`/user/me`, requestOptions);\n    if (response.ok) {\n      const userData = await response.json();\n      return userData;\n    } else {\n      throw new Error('Erreur lors de la récupération des informations de lutilisateur');\n    }\n  } catch (error) {\n    console.error(`Erreur : ${error.message}`);\n  }\n};\nconst getTickets = async userId => {\n  try {\n    const response = await fetch(`/user/tickets/${userId}`, {\n      method: 'GET'\n    });\n    if (response.ok) {\n      const tickets = await response.json();\n      return tickets;\n    } else {\n      throw new Error('Erreur lors de la récupération des tickets de lutilisateur');\n    }\n  } catch (error) {\n    console.error(`Erreur : ${error.message}`);\n  }\n};\nconst addTicket = async showId => {\n  try {\n    const userData = await getUser();\n    const userId = userData.id;\n    const ticketResponse = await fetch(`/user/takeTicket/${showId}/${userId}`, {\n      method: 'POST'\n    });\n    if (ticketResponse.ok) {\n      return true;\n    } else {\n      throw new Error('Erreur lors de la prise de ticket');\n    }\n  } catch (error) {\n    console.error(`Erreur : ${error.message}`);\n    return false;\n  }\n};\nconst removeTicket = async ticketId => {\n  try {\n    console.log('Ticket ID:', ticketId);\n    const userData = await getUser();\n    const userId = userData.id;\n    const requestOptions = {\n      method: 'DELETE'\n    };\n    const response = await fetch(`/user/removeTicket/${ticketId}/${userId}`, requestOptions);\n    if (response.ok) {\n      return true;\n    } else {\n      throw new Error('Erreur lors de la suppression du ticket');\n    }\n  } catch (error) {\n    console.error(`Erreur : ${error.message}`);\n    return false;\n  }\n};\nconst displayTickets = async () => {\n  const ticketList = document.getElementById('ticket-list');\n  ticketList.textContent = '';\n  try {\n    const userData = await getUser();\n    const userId = userData.id;\n    const tickets = await getTickets(userId);\n    tickets.forEach(ticket => {\n      const ticketElem = document.createElement('li');\n      ticketElem.textContent = ticket.description;\n      ticketList.appendChild(ticketElem);\n      const delButton = document.createElement('button');\n      delButton.textContent = 'buy -1';\n      delButton.className = 'del-button';\n      delButton.addEventListener('click', () => {\n        removeTicket(ticket._id);\n        displayTickets();\n      });\n      ticketElem.appendChild(delButton);\n    });\n  } catch (error) {\n    console.error(`Erreur : ${error.message}`);\n  }\n};\nconst getShows = async () => {\n  const list = document.getElementById('spectacle-list');\n  list.textContent = '';\n  const requestOptions = {\n    method: 'GET'\n  };\n  const response = await fetch('/shows/', requestOptions);\n  const shows = await response.json();\n  shows.forEach(show => list.appendChild(buildShow(show)));\n};\nconst buildShow = show => {\n  const elem = document.createElement('tr');\n  elem.className = 'show';\n  elem.appendChild(buildTD(show.description, 'description'));\n  elem.appendChild(buildTD(show.places, 'seats'));\n  const buyButton = document.createElement('button');\n  buyButton.textContent = 'buy +1';\n  buyButton.className = 'buy-button';\n  buyButton.addEventListener('click', () => {\n    addTicket(show._id);\n    displayTickets();\n  });\n  elem.appendChild(buyButton);\n  return elem;\n};\nconst buildTD = (content, className) => {\n  const TDelement = document.createElement('td');\n  TDelement.textContent = content;\n  TDelement.className = className;\n  return TDelement;\n};\nconst logout = async () => {\n  const requestOptions = {\n    method: 'GET'\n  };\n  const response = await fetch(`/access/logout`, requestOptions);\n  if (response.ok) {\n    window.location.href = '/';\n  }\n};\nconst handleError = error => {\n  if (error.redirectTo) window.location.href = error.redirectTo;else console.log(`erreur : ${error.message}`);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL3VzZXIuY2xpZW50LmpzIiwibmFtZXMiOlsic2V0dXAiLCJnZXRTaG93cyIsImRpc3BsYXlUaWNrZXRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2dvdXQiLCJ3aW5kb3ciLCJnZXRVc2VyIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJ1c2VyRGF0YSIsImpzb24iLCJFcnJvciIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJnZXRUaWNrZXRzIiwidXNlcklkIiwidGlja2V0cyIsImFkZFRpY2tldCIsInNob3dJZCIsImlkIiwidGlja2V0UmVzcG9uc2UiLCJyZW1vdmVUaWNrZXQiLCJ0aWNrZXRJZCIsImxvZyIsInRpY2tldExpc3QiLCJ0ZXh0Q29udGVudCIsImZvckVhY2giLCJ0aWNrZXQiLCJ0aWNrZXRFbGVtIiwiY3JlYXRlRWxlbWVudCIsImRlc2NyaXB0aW9uIiwiYXBwZW5kQ2hpbGQiLCJkZWxCdXR0b24iLCJjbGFzc05hbWUiLCJfaWQiLCJsaXN0Iiwic2hvd3MiLCJzaG93IiwiYnVpbGRTaG93IiwiZWxlbSIsImJ1aWxkVEQiLCJwbGFjZXMiLCJidXlCdXR0b24iLCJjb250ZW50IiwiVERlbGVtZW50IiwibG9jYXRpb24iLCJocmVmIiwiaGFuZGxlRXJyb3IiLCJyZWRpcmVjdFRvIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQtYXBwLy4vc2NyaXB0cy91c2VyLmNsaWVudC5qcz9jMjQ5Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBzZXR1cCA9ICgpID0+IHtcclxuICBnZXRTaG93cygpO1xyXG4gIGRpc3BsYXlUaWNrZXRzKCk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ291dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9nb3V0KTtcclxufVxyXG5cclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHNldHVwKTtcclxuXHJcblxyXG5jb25zdCBnZXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiAnR0VUJywgXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL3VzZXIvbWVgLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiB1c2VyRGF0YTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGluZm9ybWF0aW9ucyBkZSBsdXRpbGlzYXRldXInKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihgRXJyZXVyIDogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFRpY2tldHMgPSBhc3luYyAodXNlcklkKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC91c2VyL3RpY2tldHMvJHt1c2VySWR9YCwgeyBtZXRob2Q6ICdHRVQnIH0pOyBcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCB0aWNrZXRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gdGlja2V0cztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIHRpY2tldHMgZGUgbHV0aWxpc2F0ZXVyJyk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYEVycmV1ciA6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuY29uc3QgYWRkVGlja2V0ID0gYXN5bmMgKHNob3dJZCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IGdldFVzZXIoKTtcclxuICAgIGNvbnN0IHVzZXJJZCA9IHVzZXJEYXRhLmlkOyBcclxuICAgIGNvbnN0IHRpY2tldFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC91c2VyL3Rha2VUaWNrZXQvJHtzaG93SWR9LyR7dXNlcklkfWAsIHsgbWV0aG9kOiAnUE9TVCcgfSk7IFxyXG4gICAgaWYgKHRpY2tldFJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHJldHVybiB0cnVlOyBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgcHJpc2UgZGUgdGlja2V0Jyk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYEVycmV1ciA6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgIHJldHVybiBmYWxzZTsgXHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbmNvbnN0IHJlbW92ZVRpY2tldCA9IGFzeW5jICh0aWNrZXRJZCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZygnVGlja2V0IElEOicsIHRpY2tldElkKTtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgZ2V0VXNlcigpO1xyXG4gICAgY29uc3QgdXNlcklkID0gdXNlckRhdGEuaWQ7IFxyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsIFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC91c2VyL3JlbW92ZVRpY2tldC8ke3RpY2tldElkfS8ke3VzZXJJZH1gLCByZXF1ZXN0T3B0aW9ucyk7IFxyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHJldHVybiB0cnVlOyBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgc3VwcHJlc3Npb24gZHUgdGlja2V0Jyk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYEVycmV1ciA6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICAgIHJldHVybiBmYWxzZTsgXHJcbiAgfVxyXG59O1xyXG5cclxuXHJcblxyXG5jb25zdCBkaXNwbGF5VGlja2V0cyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB0aWNrZXRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpY2tldC1saXN0Jyk7XHJcbiAgdGlja2V0TGlzdC50ZXh0Q29udGVudCA9ICcnOyBcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgZ2V0VXNlcigpOyBcclxuICAgIGNvbnN0IHVzZXJJZCA9IHVzZXJEYXRhLmlkOyBcclxuICAgIGNvbnN0IHRpY2tldHMgPSBhd2FpdCBnZXRUaWNrZXRzKHVzZXJJZCk7IFxyXG5cclxuICAgIHRpY2tldHMuZm9yRWFjaCgodGlja2V0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRpY2tldEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICB0aWNrZXRFbGVtLnRleHRDb250ZW50ID0gdGlja2V0LmRlc2NyaXB0aW9uO1xyXG4gICAgICB0aWNrZXRMaXN0LmFwcGVuZENoaWxkKHRpY2tldEVsZW0pO1xyXG4gICAgICBjb25zdCBkZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgZGVsQnV0dG9uLnRleHRDb250ZW50ID0gJ2J1eSAtMSc7XHJcbiAgICAgIGRlbEJ1dHRvbi5jbGFzc05hbWUgPSAnZGVsLWJ1dHRvbic7XHJcbiAgICAgIGRlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgICByZW1vdmVUaWNrZXQodGlja2V0Ll9pZCk7XHJcbiAgICAgIGRpc3BsYXlUaWNrZXRzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aWNrZXRFbGVtLmFwcGVuZENoaWxkKGRlbEJ1dHRvbik7XHJcblxyXG4gICAgfSk7XHJcbiAgICAgXHJcbiAgXHJcbiAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYEVycmV1ciA6ICR7ZXJyb3IubWVzc2FnZX1gKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBnZXRTaG93cyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwZWN0YWNsZS1saXN0Jyk7XHJcbiAgbGlzdC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgIG1ldGhvZDogJ0dFVCdcclxuICB9O1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9zaG93cy8nLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgY29uc3Qgc2hvd3MgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIHNob3dzLmZvckVhY2goc2hvdyA9PiBsaXN0LmFwcGVuZENoaWxkKGJ1aWxkU2hvdyhzaG93KSkpO1xyXG59XHJcblxyXG5cclxuY29uc3QgYnVpbGRTaG93ID0gc2hvdyA9PiB7XHJcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgZWxlbS5jbGFzc05hbWUgPSAnc2hvdyc7XHJcbiAgZWxlbS5hcHBlbmRDaGlsZChidWlsZFREKHNob3cuZGVzY3JpcHRpb24sICdkZXNjcmlwdGlvbicpKTtcclxuICBlbGVtLmFwcGVuZENoaWxkKGJ1aWxkVEQoc2hvdy5wbGFjZXMsICdzZWF0cycpKTtcclxuXHJcbiAgY29uc3QgYnV5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgYnV5QnV0dG9uLnRleHRDb250ZW50ID0gJ2J1eSArMSc7XHJcbiAgYnV5QnV0dG9uLmNsYXNzTmFtZSA9ICdidXktYnV0dG9uJztcclxuICBidXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgIGFkZFRpY2tldChzaG93Ll9pZCk7XHJcbiAgICBkaXNwbGF5VGlja2V0cygpO1xyXG4gIH0pOyBcclxuXHJcbiAgZWxlbS5hcHBlbmRDaGlsZChidXlCdXR0b24pO1xyXG5cclxuICByZXR1cm4gZWxlbTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGJ1aWxkVEQgPSAoY29udGVudCwgY2xhc3NOYW1lKSA9PiB7XHJcbiAgY29uc3QgVERlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICBURGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xyXG4gIFREZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgcmV0dXJuIFREZWxlbWVudDtcclxufVxyXG5cclxuXHJcbmNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZCA6J0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYWNjZXNzL2xvZ291dGAsIHJlcXVlc3RPcHRpb25zKTtcclxuICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPSAnLyc7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVFcnJvciA9IGVycm9yID0+IHtcclxuICBpZiAoZXJyb3IucmVkaXJlY3RUbylcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPSBlcnJvci5yZWRpcmVjdFRvO1xyXG4gIGVsc2VcclxuICAgIGNvbnNvbGUubG9nKGBlcnJldXIgOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibWFwcGluZ3MiOiJBQUNBLE1BQU1BLEtBQUssR0FBR0EsQ0FBQSxLQUFNO0VBQ2xCQyxRQUFRLENBQUMsQ0FBQztFQUNWQyxjQUFjLENBQUMsQ0FBQztFQUNoQkMsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRUMsTUFBTSxDQUFDO0FBQ3JFLENBQUM7QUFJREMsTUFBTSxDQUFDRixnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRUwsS0FBSyxDQUFDO0FBR2xELE1BQU1RLE9BQU8sR0FBRyxNQUFBQSxDQUFBLEtBQVk7RUFDMUIsSUFBSTtJQUNGLE1BQU1DLGNBQWMsR0FBRztNQUNyQkMsTUFBTSxFQUFFO0lBQ1YsQ0FBQztJQUNELE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsVUFBUyxFQUFFSCxjQUFjLENBQUM7SUFDeEQsSUFBSUUsUUFBUSxDQUFDRSxFQUFFLEVBQUU7TUFDZixNQUFNQyxRQUFRLEdBQUcsTUFBTUgsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQztNQUN0QyxPQUFPRCxRQUFRO0lBQ2pCLENBQUMsTUFBTTtNQUNMLE1BQU0sSUFBSUUsS0FBSyxDQUFDLGlFQUFpRSxDQUFDO0lBQ3BGO0VBQ0YsQ0FBQyxDQUFDLE9BQU9DLEtBQUssRUFBRTtJQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBRSxZQUFXQSxLQUFLLENBQUNFLE9BQVEsRUFBQyxDQUFDO0VBQzVDO0FBQ0YsQ0FBQztBQUVELE1BQU1DLFVBQVUsR0FBRyxNQUFPQyxNQUFNLElBQUs7RUFDbkMsSUFBSTtJ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\n//# sourceURL=webpack-internal:///./scripts/user.client.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/user.client.js"]();
/******/ 	
/******/ })()
;