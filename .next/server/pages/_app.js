/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/apollo.js":
/*!**************************!*\
  !*** ./config/apollo.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-upload-client */ \"apollo-upload-client\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-context */ \"apollo-link-context\");\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apollo_upload_client__WEBPACK_IMPORTED_MODULE_1__]);\napollo_upload_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\nconst httpLink = (0,apollo_upload_client__WEBPACK_IMPORTED_MODULE_1__.createUploadLink)({\n    //uri: \"https://graphase.auditoriaguerrero.gob.mx/\",\n    uri: \"http://localhost:4000/\",\n    fetch: (node_fetch__WEBPACK_IMPORTED_MODULE_2___default())\n});\nconst authLink = (0,apollo_link_context__WEBPACK_IMPORTED_MODULE_3__.setContext)((_, { headers  })=>{\n    const token = localStorage.getItem(\"token\");\n    return {\n        headers: {\n            ...headers,\n            authorization: token ? `Bearer ${token}` : \"\"\n        }\n    };\n});\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    connectToDevTools: true,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache(),\n    link: authLink.concat(httpLink)\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvYXBvbGxvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTREO0FBQ0w7QUFDekI7QUFDa0I7QUFFaEQsS0FBSyxDQUFDSyxRQUFRLEdBQUdILHNFQUFnQixDQUFDLENBQUM7SUFDakMsRUFBb0Q7SUFDcERJLEdBQUcsRUFBRSxDQUF3QjtJQUM3QkgsS0FBSztBQUNQLENBQUM7QUFFRCxLQUFLLENBQUNJLFFBQVEsR0FBR0gsK0RBQVUsRUFBRUksQ0FBQyxFQUFFLENBQUMsQ0FBQ0MsT0FBTyxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQy9DLEtBQUssQ0FBQ0MsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFPO0lBQzFDLE1BQU0sQ0FBQyxDQUFDO1FBQ05ILE9BQU8sRUFBRSxDQUFDO2VBQ0xBLE9BQU87WUFDVkksYUFBYSxFQUFFSCxLQUFLLElBQUksT0FBTyxFQUFFQSxLQUFLLEtBQUssQ0FBRTtRQUMvQyxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxLQUFLLENBQUNJLE1BQU0sR0FBRyxHQUFHLENBQUNkLHdEQUFZLENBQUMsQ0FBQztJQUMvQmUsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QkMsS0FBSyxFQUFFLEdBQUcsQ0FBQ2YseURBQWE7SUFDeEJnQixJQUFJLEVBQUVWLFFBQVEsQ0FBQ1csTUFBTSxDQUFDYixRQUFRO0FBQ2hDLENBQUM7QUFFRCxpRUFBZVMsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQtY2FtaXNhcy8uL2NvbmZpZy9hcG9sbG8uanM/NjdjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IGNyZWF0ZVVwbG9hZExpbmsgfSBmcm9tIFwiYXBvbGxvLXVwbG9hZC1jbGllbnRcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xuaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gXCJhcG9sbG8tbGluay1jb250ZXh0XCI7XG5cbmNvbnN0IGh0dHBMaW5rID0gY3JlYXRlVXBsb2FkTGluayh7XG4gIC8vdXJpOiBcImh0dHBzOi8vZ3JhcGhhc2UuYXVkaXRvcmlhZ3VlcnJlcm8uZ29iLm14L1wiLFxuICB1cmk6IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL1wiLFxuICBmZXRjaFxufSk7XG5cbmNvbnN0IGF1dGhMaW5rID0gc2V0Q29udGV4dCgoXywgeyBoZWFkZXJzIH0pID0+IHtcbiAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICByZXR1cm4ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIC4uLmhlYWRlcnMsXG4gICAgICBhdXRob3JpemF0aW9uOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogXCJcIlxuICAgIH1cbiAgfTtcbn0pO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgY29ubmVjdFRvRGV2VG9vbHM6IHRydWUsXG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxuICBsaW5rOiBhdXRoTGluay5jb25jYXQoaHR0cExpbmspXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJjcmVhdGVVcGxvYWRMaW5rIiwiZmV0Y2giLCJzZXRDb250ZXh0IiwiaHR0cExpbmsiLCJ1cmkiLCJhdXRoTGluayIsIl8iLCJoZWFkZXJzIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYXV0aG9yaXphdGlvbiIsImNsaWVudCIsImNvbm5lY3RUb0RldlRvb2xzIiwiY2FjaGUiLCJsaW5rIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/apollo.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_estilos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/estilos.css */ \"./styles/estilos.css\");\n/* harmony import */ var _styles_estilos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_estilos_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/apollo */ \"./config/apollo.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_apollo__WEBPACK_IMPORTED_MODULE_5__]);\n_config_apollo__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloProvider, {\n        client: _config_apollo__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        __source: {\n            fileName: \"D:\\\\Documentos\\\\Proyectos auditoria\\\\encuesta-main\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n            ...pageProps,\n            __source: {\n                fileName: \"D:\\\\Documentos\\\\Proyectos auditoria\\\\encuesta-main\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            },\n            __self: this\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDRztBQUNIO0FBQ2lCO0FBQ1Y7U0FDNUJFLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sc0VBQ0hKLDBEQUFjO1FBQUNDLE1BQU0sRUFBRUEsc0RBQU07Ozs7Ozs7dUZBQzNCRSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7OztBQU05QixDQUFDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1jYW1pc2FzLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0ICd0YWlsd2luZGNzcy90YWlsd2luZC5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9lc3RpbG9zLmNzcydcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCJcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vY29uZmlnL2Fwb2xsbydcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0gPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cblxuICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJBcG9sbG9Qcm92aWRlciIsImNsaWVudCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/estilos.css":
/*!****************************!*\
  !*** ./styles/estilos.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "apollo-link-context":
/*!**************************************!*\
  !*** external "apollo-link-context" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-link-context");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("apollo-upload-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();