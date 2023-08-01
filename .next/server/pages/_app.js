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

/***/ "./src/aws-exports.js":
/*!****************************!*\
  !*** ./src/aws-exports.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst awsmobile = {\n    \"aws_appsync_graphqlEndpoint\": \"https://vejxfu24ezaghja3b6or6xyreq.appsync-api.ca-central-1.amazonaws.com/graphql\",\n    \"aws_appsync_region\": \"ca-central-1\",\n    \"aws_appsync_authenticationType\": \"API_KEY\",\n    \"aws_appsync_apiKey\": \"da2-h3vcdqsxvrc7bcvo3zhuqsms5m\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (awsmobile);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXdzLWV4cG9ydHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFlBQVk7SUFDZCwrQkFBK0I7SUFDL0Isc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyxzQkFBc0I7QUFDdEI7QUFDQSxpRUFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pyLXRlc3QvLi9zcmMvYXdzLWV4cG9ydHMuanM/NjFlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhd3Ntb2JpbGUgPSB7XG4gICAgXCJhd3NfYXBwc3luY19ncmFwaHFsRW5kcG9pbnRcIjogXCJodHRwczovL3ZlanhmdTI0ZXphZ2hqYTNiNm9yNnh5cmVxLmFwcHN5bmMtYXBpLmNhLWNlbnRyYWwtMS5hbWF6b25hd3MuY29tL2dyYXBocWxcIixcbiAgICBcImF3c19hcHBzeW5jX3JlZ2lvblwiOiBcImNhLWNlbnRyYWwtMVwiLFxuICAgIFwiYXdzX2FwcHN5bmNfYXV0aGVudGljYXRpb25UeXBlXCI6IFwiQVBJX0tFWVwiLFxuICAgIFwiYXdzX2FwcHN5bmNfYXBpS2V5XCI6IFwiZGEyLWgzdmNkcXN4dnJjN2Jjdm8zemh1cXNtczVtXCIsXG4gICAgfTtcbiAgICBleHBvcnQgZGVmYXVsdCBhd3Ntb2JpbGU7Il0sIm5hbWVzIjpbImF3c21vYmlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/aws-exports.js\n");

/***/ }),

/***/ "./src/lib/apolloConfig.tsx":
/*!**********************************!*\
  !*** ./src/lib/apolloConfig.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AppSyncProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var aws_appsync_auth_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-appsync-auth-link */ \"aws-appsync-auth-link\");\n/* harmony import */ var aws_appsync_auth_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aws_appsync_auth_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/aws-exports */ \"./src/aws-exports.js\");\n\n\n\n\nconst httpLink = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.createHttpLink)({\n    uri: _aws_exports__WEBPACK_IMPORTED_MODULE_3__[\"default\"].aws_appsync_graphqlEndpoint\n});\nconst authLink = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloLink.from([\n    (0,aws_appsync_auth_link__WEBPACK_IMPORTED_MODULE_2__.createAuthLink)({\n        url: _aws_exports__WEBPACK_IMPORTED_MODULE_3__[\"default\"].aws_appsync_graphqlEndpoint,\n        region: _aws_exports__WEBPACK_IMPORTED_MODULE_3__[\"default\"].aws_appsync_region,\n        auth: {\n            type: \"API_KEY\",\n            apiKey: _aws_exports__WEBPACK_IMPORTED_MODULE_3__[\"default\"].aws_appsync_apiKey\n        }\n    }),\n    httpLink\n]);\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n    link: authLink,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()\n});\nfunction AppSyncProvider({ children  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n        client: client,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/lib/apolloConfig.tsx\",\n        lineNumber: 33,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2Fwb2xsb0NvbmZpZy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBTXdCO0FBQytCO0FBQ2I7QUFFMUMsTUFBTU8sV0FBV0gsOERBQWNBLENBQUM7SUFDOUJJLEtBQUtGLGdGQUF5QztBQUNoRDtBQUVBLE1BQU1JLFdBQVdSLDJEQUFlLENBQUM7SUFDL0JHLHFFQUFjQSxDQUFDO1FBQ2JPLEtBQUtOLGdGQUF5QztRQUM5Q08sUUFBUVAsdUVBQWdDO1FBQ3hDUyxNQUFNO1lBQ0pDLE1BQU07WUFDTkMsUUFBUVgsdUVBQWdDO1FBQzFDO0lBQ0Y7SUFDQUM7Q0FDRDtBQUVELE1BQU1ZLFNBQVMsSUFBSWxCLHdEQUFZQSxDQUFDO0lBQzlCbUIsTUFBTVY7SUFDTlcsT0FBTyxJQUFJbEIseURBQWFBO0FBQzFCO0FBRWUsU0FBU21CLGdCQUFnQixFQUFFQyxTQUFRLEVBQU8sRUFBRTtJQUN6RCxxQkFBTyw4REFBQ3ZCLDBEQUFjQTtRQUFDbUIsUUFBUUE7a0JBQVNJOzs7Ozs7QUFDMUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pyLXRlc3QvLi9zcmMvbGliL2Fwb2xsb0NvbmZpZy50c3g/OTU4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBcG9sbG9Qcm92aWRlcixcbiAgQXBvbGxvQ2xpZW50LFxuICBBcG9sbG9MaW5rLFxuICBJbk1lbW9yeUNhY2hlLFxuICBjcmVhdGVIdHRwTGluayxcbn0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBjcmVhdGVBdXRoTGluayB9IGZyb20gXCJhd3MtYXBwc3luYy1hdXRoLWxpbmtcIjtcbmltcG9ydCBhcHBTeW5jQ29uZmlnIGZyb20gXCJAL2F3cy1leHBvcnRzXCI7XG5cbmNvbnN0IGh0dHBMaW5rID0gY3JlYXRlSHR0cExpbmsoe1xuICB1cmk6IGFwcFN5bmNDb25maWcuYXdzX2FwcHN5bmNfZ3JhcGhxbEVuZHBvaW50LFxufSk7XG5cbmNvbnN0IGF1dGhMaW5rID0gQXBvbGxvTGluay5mcm9tKFtcbiAgY3JlYXRlQXV0aExpbmsoe1xuICAgIHVybDogYXBwU3luY0NvbmZpZy5hd3NfYXBwc3luY19ncmFwaHFsRW5kcG9pbnQsXG4gICAgcmVnaW9uOiBhcHBTeW5jQ29uZmlnLmF3c19hcHBzeW5jX3JlZ2lvbixcbiAgICBhdXRoOiB7XG4gICAgICB0eXBlOiBcIkFQSV9LRVlcIixcbiAgICAgIGFwaUtleTogYXBwU3luY0NvbmZpZy5hd3NfYXBwc3luY19hcGlLZXksXG4gICAgfSxcbiAgfSksXG4gIGh0dHBMaW5rLFxuXSk7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICBsaW5rOiBhdXRoTGluayxcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwU3luY1Byb3ZpZGVyKHsgY2hpbGRyZW4gfTogYW55KSB7XG4gIHJldHVybiA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PntjaGlsZHJlbn08L0Fwb2xsb1Byb3ZpZGVyPjtcbn1cbiJdLCJuYW1lcyI6WyJBcG9sbG9Qcm92aWRlciIsIkFwb2xsb0NsaWVudCIsIkFwb2xsb0xpbmsiLCJJbk1lbW9yeUNhY2hlIiwiY3JlYXRlSHR0cExpbmsiLCJjcmVhdGVBdXRoTGluayIsImFwcFN5bmNDb25maWciLCJodHRwTGluayIsInVyaSIsImF3c19hcHBzeW5jX2dyYXBocWxFbmRwb2ludCIsImF1dGhMaW5rIiwiZnJvbSIsInVybCIsInJlZ2lvbiIsImF3c19hcHBzeW5jX3JlZ2lvbiIsImF1dGgiLCJ0eXBlIiwiYXBpS2V5IiwiYXdzX2FwcHN5bmNfYXBpS2V5IiwiY2xpZW50IiwibGluayIsImNhY2hlIiwiQXBwU3luY1Byb3ZpZGVyIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/apolloConfig.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_apolloConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/apolloConfig */ \"./src/lib/apolloConfig.tsx\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ \"react-icons/ai\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"react-icons/bs\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_apolloConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"App\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"page-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatusBar, {}, void 0, false, {\n                        fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/_app.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/_app.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/_app.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\nconst StatusBar = ()=>{\n    const [time, setTime] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const updateTime = ()=>{\n            const now = new Date();\n            let hours = now.getHours();\n            const minutes = now.getMinutes();\n            const ampm = hours >= 12 ? \"PM\" : \"AM\";\n            hours = hours % 12;\n            hours = hours ? hours : 12;\n            const formattedTime = `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;\n            setTime(formattedTime);\n        };\n        updateTime();\n        const timer = setInterval(updateTime, 60000);\n        return function cleanup() {\n            clearInterval(timer);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"status-bar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"status-bar-left\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: time\n                }, void 0, false, {\n                    fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/_app.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/_app.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"notch\"\n            }, void 0, false, {\n                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/_app.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"status-bar-right\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillSignal, {}, void 0, false, {\n                            fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/_app.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/_app.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineWifi, {}, void 0, false, {\n                            fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/_app.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/_app.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsBatteryFull, {}, void 0, false, {\n                            fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/_app.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/_app.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/_app.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/_app.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUV1QjtBQUNQO0FBQ0E7QUFDYjtBQUVkLFNBQVNJLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksRUFBRTtJQUM5RCxxQkFDRSw4REFBQ0wseURBQWVBO2tCQUNkLDRFQUFDTTtZQUFLQyxXQUFVO3NCQUNkLDRFQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNFOzs7OztrQ0FDRCw4REFBQ0w7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQyxDQUFDO0FBRUQsTUFBTUksWUFBWSxJQUFNO0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWixxREFBYyxDQUFTO0lBRS9DQSxzREFBZSxDQUFDLElBQU07UUFDcEIsTUFBTWUsYUFBYSxJQUFNO1lBQ3ZCLE1BQU1DLE1BQU0sSUFBSUM7WUFDaEIsSUFBSUMsUUFBUUYsSUFBSUcsUUFBUTtZQUN4QixNQUFNQyxVQUFVSixJQUFJSyxVQUFVO1lBQzlCLE1BQU1DLE9BQU9KLFNBQVMsS0FBSyxPQUFPLElBQUk7WUFDdENBLFFBQVFBLFFBQVE7WUFDaEJBLFFBQVFBLFFBQVFBLFFBQVEsRUFBRTtZQUMxQixNQUFNSyxnQkFBZ0IsQ0FBQyxFQUFFTCxNQUFNLENBQUMsRUFDOUJFLFVBQVUsS0FBSyxDQUFDLENBQUMsRUFBRUEsUUFBUSxDQUFDLEdBQUdBLE9BQU8sQ0FDdkMsQ0FBQyxFQUFFRSxLQUFLLENBQUM7WUFDVlYsUUFBUVc7UUFDVjtRQUVBUjtRQUNBLE1BQU1TLFFBQVFDLFlBQVlWLFlBQVk7UUFFdEMsT0FBTyxTQUFTVyxVQUFVO1lBQ3hCQyxjQUFjSDtRQUNoQjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDZjtRQUFJRCxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNvQjs4QkFBR2pCOzs7Ozs7Ozs7OzswQkFFTiw4REFBQ0Y7Z0JBQUlELFdBQVU7Ozs7OzswQkFDZiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDcUI7a0NBQ0MsNEVBQUMzQix3REFBb0I7Ozs7Ozs7Ozs7a0NBRXZCLDhEQUFDMkI7a0NBQ0MsNEVBQUMzQix5REFBcUI7Ozs7Ozs7Ozs7a0NBRXhCLDhEQUFDMkI7a0NBQ0MsNEVBQUMxQix5REFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qci10ZXN0Ly4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IEFwcFN5bmNQcm92aWRlciBmcm9tIFwiQC9saWIvYXBvbGxvQ29uZmlnXCI7XG5pbXBvcnQgKiBhcyBBaUljb25zIGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0ICogYXMgQnNJY29ucyBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9tYWluLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXBwU3luY1Byb3ZpZGVyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8U3RhdHVzQmFyIC8+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L0FwcFN5bmNQcm92aWRlcj5cbiAgKTtcbn1cblxuY29uc3QgU3RhdHVzQmFyID0gKCkgPT4ge1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlVGltZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgaG91cnMgPSBub3cuZ2V0SG91cnMoKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpO1xuICAgICAgY29uc3QgYW1wbSA9IGhvdXJzID49IDEyID8gXCJQTVwiIDogXCJBTVwiO1xuICAgICAgaG91cnMgPSBob3VycyAlIDEyO1xuICAgICAgaG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7XG4gICAgICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gYCR7aG91cnN9OiR7XG4gICAgICAgIG1pbnV0ZXMgPCAxMCA/IGAwJHttaW51dGVzfWAgOiBtaW51dGVzXG4gICAgICB9ICR7YW1wbX1gO1xuICAgICAgc2V0VGltZShmb3JtYXR0ZWRUaW1lKTtcbiAgICB9O1xuXG4gICAgdXBkYXRlVGltZSgpO1xuICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZSwgNjAwMDApO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXR1cy1iYXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdHVzLWJhci1sZWZ0XCI+XG4gICAgICAgIDxwPnt0aW1lfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RjaFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXR1cy1iYXItcmlnaHRcIj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPEFpSWNvbnMuQWlGaWxsU2lnbmFsIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPEFpSWNvbnMuQWlPdXRsaW5lV2lmaSAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxCc0ljb25zLkJzQmF0dGVyeUZ1bGwgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXBwU3luY1Byb3ZpZGVyIiwiQWlJY29ucyIsIkJzSWNvbnMiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiU3RhdHVzQmFyIiwidGltZSIsInNldFRpbWUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVwZGF0ZVRpbWUiLCJub3ciLCJEYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiYW1wbSIsImZvcm1hdHRlZFRpbWUiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYW51cCIsImNsZWFySW50ZXJ2YWwiLCJwIiwic3BhbiIsIkFpRmlsbFNpZ25hbCIsIkFpT3V0bGluZVdpZmkiLCJCc0JhdHRlcnlGdWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
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

/***/ "aws-appsync-auth-link":
/*!****************************************!*\
  !*** external "aws-appsync-auth-link" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("aws-appsync-auth-link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();