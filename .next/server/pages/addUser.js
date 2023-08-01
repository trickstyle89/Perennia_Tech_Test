"use strict";
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
exports.id = "pages/addUser";
exports.ids = ["pages/addUser"];
exports.modules = {

/***/ "./src/pages/addUser.tsx":
/*!*******************************!*\
  !*** ./src/pages/addUser.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst CREATE_CONTACT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2__.gql`\n  mutation createContact($newContact: ContactInput) {\n    createContact(newContact: $newContact) {\n      id\n      name\n      email\n      phone\n    }\n  }\n`;\nconst AddUserPage = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        phone: \"\"\n    });\n    const [addContact, { loading , error  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(CREATE_CONTACT_MUTATION);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const { data  } = await addContact({\n                variables: {\n                    newContact: {\n                        name: formData.name,\n                        email: formData.email,\n                        phone: formData.phone\n                    }\n                }\n            });\n            // Handle successful form submission\n            console.log(\"New user added:\", data.createContact);\n            // Reset the form fields\n            setFormData({\n                name: \"\",\n                email: \"\",\n                phone: \"\"\n            });\n            // Navigate back to the index page after adding a user\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Error adding user:\", error.message);\n        }\n    };\n    const handleInputChange = (event)=>{\n        const { name , value  } = event.target;\n        setFormData((prevFormData)=>({\n                ...prevFormData,\n                [name]: value\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"add-user-page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Add User\"\n            }, void 0, false, {\n                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/addUser.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                children: \"Name:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/addUser.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                name: \"name\",\n                                value: formData.name,\n                                onChange: handleInputChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/addUser.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/addUser.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Email:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/addUser.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                name: \"email\",\n                                value: formData.email,\n                                onChange: handleInputChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/addUser.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/addUser.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"phone\",\n                                children: \"Phone:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/addUser.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"phone\",\n                                name: \"phone\",\n                                value: formData.phone,\n                                onChange: handleInputChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/addUser.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/addUser.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Add User\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/addUser.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/addUser.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/addUser.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddUserPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRkVXNlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ047QUFDVztBQUNMO0FBRXhDLE1BQU1LLDBCQUEwQkgsNENBQUcsQ0FBQzs7Ozs7Ozs7O0FBU3BDLENBQUM7QUFFRCxNQUFNSSxjQUF3QixJQUFNO0lBQ2xDLE1BQU1DLFNBQVNILHNEQUFTQTtJQUV4QixNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7UUFDdkNTLE1BQU07UUFDTkMsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNLENBQUNDLFlBQVksRUFBRUMsUUFBTyxFQUFFQyxNQUFLLEVBQUUsQ0FBQyxHQUFHWiwyREFBV0EsQ0FBQ0U7SUFHckQsTUFBTVcsZUFBZSxPQUFPQyxRQUE0QztRQUN0RUEsTUFBTUMsY0FBYztRQUVwQixJQUFJO1lBQ0YsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBRyxNQUFNTixXQUFXO2dCQUNoQ08sV0FBVztvQkFDVEMsWUFBWTt3QkFDVlgsTUFBTUYsU0FBU0UsSUFBSTt3QkFDbkJDLE9BQU9ILFNBQVNHLEtBQUs7d0JBQ3JCQyxPQUFPSixTQUFTSSxLQUFLO29CQUN2QjtnQkFDRjtZQUNGO1lBRUEsb0NBQW9DO1lBQ3BDVSxRQUFRQyxHQUFHLENBQUMsbUJBQW1CSixLQUFLSyxhQUFhO1lBRWpELHdCQUF3QjtZQUN4QmYsWUFBWTtnQkFDVkMsTUFBTTtnQkFDTkMsT0FBTztnQkFDUEMsT0FBTztZQUNUO1lBRUEsc0RBQXNEO1lBQ3RETCxPQUFPa0IsSUFBSSxDQUFDO1FBQ2QsRUFBRSxPQUFPVixPQUFPO1lBQ2RPLFFBQVFQLEtBQUssQ0FBQyxzQkFBc0JBLE1BQU1XLE9BQU87UUFDbkQ7SUFDRjtJQUVBLE1BQU1DLG9CQUFvQixDQUFDVixRQUErQztRQUN4RSxNQUFNLEVBQUVQLEtBQUksRUFBRWtCLE1BQUssRUFBRSxHQUFHWCxNQUFNWSxNQUFNO1FBQ3BDcEIsWUFBWSxDQUFDcUIsZUFBa0I7Z0JBQzdCLEdBQUdBLFlBQVk7Z0JBQ2YsQ0FBQ3BCLEtBQUssRUFBRWtCO1lBQ1Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFVBQVVuQjs7a0NBQ2QsOERBQUNlOzswQ0FDQyw4REFBQ0s7Z0NBQU1DLFNBQVE7MENBQU87Ozs7OzswQ0FDdEIsOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFPQyxJQUFHO2dDQUFPOUIsTUFBSztnQ0FBT2tCLE9BQU9wQixTQUFTRSxJQUFJO2dDQUFFK0IsVUFBVWQ7Z0NBQW1CZSxRQUFROzs7Ozs7Ozs7Ozs7a0NBRXRHLDhEQUFDWDs7MENBQ0MsOERBQUNLO2dDQUFNQyxTQUFROzBDQUFROzs7Ozs7MENBQ3ZCLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBUUMsSUFBRztnQ0FBUTlCLE1BQUs7Z0NBQVFrQixPQUFPcEIsU0FBU0csS0FBSztnQ0FBRThCLFVBQVVkO2dDQUFtQmUsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUUxRyw4REFBQ1g7OzBDQUNDLDhEQUFDSztnQ0FBTUMsU0FBUTswQ0FBUTs7Ozs7OzBDQUN2Qiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQU9DLElBQUc7Z0NBQVE5QixNQUFLO2dDQUFRa0IsT0FBT3BCLFNBQVNJLEtBQUs7Z0NBQUU2QixVQUFVZDtnQ0FBbUJlLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FFekcsOERBQUNDO3dCQUFPSixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7QUFFQSxpRUFBZWpDLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qci10ZXN0Ly4vc3JjL3BhZ2VzL2FkZFVzZXIudHN4PzA5NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBncWwgfSBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgQ1JFQVRFX0NPTlRBQ1RfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZUNvbnRhY3QoJG5ld0NvbnRhY3Q6IENvbnRhY3RJbnB1dCkge1xuICAgIGNyZWF0ZUNvbnRhY3QobmV3Q29udGFjdDogJG5ld0NvbnRhY3QpIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBlbWFpbFxuICAgICAgcGhvbmVcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEFkZFVzZXJQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIHBob25lOiAnJ1xuICB9KTtcblxuICBjb25zdCBbYWRkQ29udGFjdCwgeyBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKENSRUFURV9DT05UQUNUX01VVEFUSU9OKTtcblxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYWRkQ29udGFjdCh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIG5ld0NvbnRhY3Q6IHtcbiAgICAgICAgICAgIG5hbWU6IGZvcm1EYXRhLm5hbWUsXG4gICAgICAgICAgICBlbWFpbDogZm9ybURhdGEuZW1haWwsXG4gICAgICAgICAgICBwaG9uZTogZm9ybURhdGEucGhvbmUsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gSGFuZGxlIHN1Y2Nlc3NmdWwgZm9ybSBzdWJtaXNzaW9uXG4gICAgICBjb25zb2xlLmxvZygnTmV3IHVzZXIgYWRkZWQ6JywgZGF0YS5jcmVhdGVDb250YWN0KTtcblxuICAgICAgLy8gUmVzZXQgdGhlIGZvcm0gZmllbGRzXG4gICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBob25lOiAnJ1xuICAgICAgfSk7XG5cbiAgICAgIC8vIE5hdmlnYXRlIGJhY2sgdG8gdGhlIGluZGV4IHBhZ2UgYWZ0ZXIgYWRkaW5nIGEgdXNlclxuICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIHVzZXI6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBzZXRGb3JtRGF0YSgocHJldkZvcm1EYXRhKSA9PiAoe1xuICAgICAgLi4ucHJldkZvcm1EYXRhLFxuICAgICAgW25hbWVdOiB2YWx1ZVxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLXVzZXItcGFnZVwiPlxuICAgICAgPGgxPkFkZCBVc2VyPC9oMT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtmb3JtRGF0YS5uYW1lfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj5QaG9uZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicGhvbmVcIiBuYW1lPVwicGhvbmVcIiB2YWx1ZT17Zm9ybURhdGEucGhvbmV9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBVc2VyPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRVc2VyUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZ3FsIiwidXNlTXV0YXRpb24iLCJ1c2VSb3V0ZXIiLCJDUkVBVEVfQ09OVEFDVF9NVVRBVElPTiIsIkFkZFVzZXJQYWdlIiwicm91dGVyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwiYWRkQ29udGFjdCIsImxvYWRpbmciLCJlcnJvciIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwidmFyaWFibGVzIiwibmV3Q29udGFjdCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVDb250YWN0IiwicHVzaCIsIm1lc3NhZ2UiLCJoYW5kbGVJbnB1dENoYW5nZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldkZvcm1EYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/addUser.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/addUser.tsx"));
module.exports = __webpack_exports__;

})();