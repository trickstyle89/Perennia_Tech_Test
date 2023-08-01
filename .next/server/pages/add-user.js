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
exports.id = "pages/add-user";
exports.ids = ["pages/add-user"];
exports.modules = {

/***/ "./src/pages/add-user.tsx":
/*!********************************!*\
  !*** ./src/pages/add-user.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// import { createContact } from '../graphql/mutations';\nconst CREATE_CONTACT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2__.gql`\n  mutation createContact($newContact: ContactInput) {\n    createContact(newContact: $newContact) {\n      id\n      name\n      email\n      phone\n    }\n  }\n`;\nconst AddUserPage = ()=>{\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        phone: \"\"\n    });\n    const [addContact, { loading , error  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(CREATE_CONTACT_MUTATION);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const { data  } = await addContact({\n                variables: {\n                    newContact: {\n                        name: formData.name,\n                        email: formData.email,\n                        phone: formData.phone\n                    }\n                }\n            });\n            // Handle successful form submission\n            console.log(\"New user added:\", data.createContact);\n            // Reset the form fields\n            setFormData({\n                name: \"\",\n                email: \"\",\n                phone: \"\"\n            });\n        } catch (error) {}\n    };\n    const handleInputChange = (event)=>{\n        const { name , value  } = event.target;\n        setFormData((prevFormData)=>({\n                ...prevFormData,\n                [name]: value\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"add-user-page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Add User\"\n            }, void 0, false, {\n                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/add-user.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                children: \"Name:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/add-user.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                name: \"name\",\n                                value: formData.name,\n                                onChange: handleInputChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/add-user.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/add-user.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Email:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/add-user.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                id: \"email\",\n                                name: \"email\",\n                                value: formData.email,\n                                onChange: handleInputChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/add-user.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/add-user.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"phone\",\n                                children: \"Phone:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/add-user.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"phone\",\n                                name: \"phone\",\n                                value: formData.phone,\n                                onChange: handleInputChange,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/add-user.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/add-user.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Add User\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/add-user.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/add-user.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ivanchew/Documents/GitHub/Projects/perennia-front-end-test/src/pages/add-user.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddUserPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRkLXVzZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDSjtBQUNXO0FBQzdDLHdEQUF3RDtBQUV4RCxNQUFNSSwwQkFBMEJGLDRDQUFHLENBQUM7Ozs7Ozs7OztBQVNwQyxDQUFDO0FBRUQsTUFBTUcsY0FBd0IsSUFBTTtJQUNoQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7UUFDckNPLE1BQU07UUFDTkMsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNLENBQUNDLFlBQVksRUFBRUMsUUFBTyxFQUFFQyxNQUFLLEVBQUUsQ0FBQyxHQUFHViwyREFBV0EsQ0FBQ0M7SUFHdkQsTUFBTVUsZUFBZSxPQUFPQyxRQUE0QztRQUN0RUEsTUFBTUMsY0FBYztRQUVwQixJQUFJO1lBQ0YsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBRyxNQUFNTixXQUFXO2dCQUM5Qk8sV0FBVztvQkFDUEMsWUFBWTt3QkFDUlgsTUFBTUYsU0FBU0UsSUFBSTt3QkFDbkJDLE9BQU9ILFNBQVNHLEtBQUs7d0JBQ3JCQyxPQUFPSixTQUFTSSxLQUFLO29CQUN6QjtnQkFDSjtZQUNKO1lBRUYsb0NBQW9DO1lBQ3BDVSxRQUFRQyxHQUFHLENBQUMsbUJBQW1CSixLQUFLSyxhQUFhO1lBRWhELHdCQUF3QjtZQUN4QmYsWUFBWTtnQkFDWEMsTUFBTTtnQkFDTkMsT0FBTztnQkFDUEMsT0FBTztZQUNUO1FBQ0EsRUFBRSxPQUFPRyxPQUFPLENBQ2Q7SUFDRjtJQUVKLE1BQU1VLG9CQUFvQixDQUFDUixRQUErQztRQUN4RSxNQUFNLEVBQUVQLEtBQUksRUFBRWdCLE1BQUssRUFBRSxHQUFHVCxNQUFNVSxNQUFNO1FBQ3BDbEIsWUFBWSxDQUFDbUIsZUFBa0I7Z0JBQzdCLEdBQUdBLFlBQVk7Z0JBQ2YsQ0FBQ2xCLEtBQUssRUFBRWdCO1lBQ1Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFVBQVVqQjs7a0NBQ2QsOERBQUNhOzswQ0FDQyw4REFBQ0s7Z0NBQU1DLFNBQVE7MENBQU87Ozs7OzswQ0FDdEIsOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFPQyxJQUFHO2dDQUFPNUIsTUFBSztnQ0FBT2dCLE9BQU9sQixTQUFTRSxJQUFJO2dDQUFFNkIsVUFBVWQ7Z0NBQW1CZSxRQUFROzs7Ozs7Ozs7Ozs7a0NBRXRHLDhEQUFDWDs7MENBQ0MsOERBQUNLO2dDQUFNQyxTQUFROzBDQUFROzs7Ozs7MENBQ3ZCLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBUUMsSUFBRztnQ0FBUTVCLE1BQUs7Z0NBQVFnQixPQUFPbEIsU0FBU0csS0FBSztnQ0FBRTRCLFVBQVVkO2dDQUFtQmUsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUUxRyw4REFBQ1g7OzBDQUNDLDhEQUFDSztnQ0FBTUMsU0FBUTswQ0FBUTs7Ozs7OzBDQUN2Qiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQU9DLElBQUc7Z0NBQVE1QixNQUFLO2dDQUFRZ0IsT0FBT2xCLFNBQVNJLEtBQUs7Z0NBQUUyQixVQUFVZDtnQ0FBbUJlLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FFekcsOERBQUNDO3dCQUFPSixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7QUFFQSxpRUFBZTlCLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qci10ZXN0Ly4vc3JjL3BhZ2VzL2FkZC11c2VyLnRzeD8wMjJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdxbCB9IGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuLy8gaW1wb3J0IHsgY3JlYXRlQ29udGFjdCB9IGZyb20gJy4uL2dyYXBocWwvbXV0YXRpb25zJztcblxuY29uc3QgQ1JFQVRFX0NPTlRBQ1RfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZUNvbnRhY3QoJG5ld0NvbnRhY3Q6IENvbnRhY3RJbnB1dCkge1xuICAgIGNyZWF0ZUNvbnRhY3QobmV3Q29udGFjdDogJG5ld0NvbnRhY3QpIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBlbWFpbFxuICAgICAgcGhvbmVcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEFkZFVzZXJQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGhvbmU6ICcnXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgW2FkZENvbnRhY3QsIHsgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihDUkVBVEVfQ09OVEFDVF9NVVRBVElPTik7XG5cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYWRkQ29udGFjdCh7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICBuZXdDb250YWN0OiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGZvcm1EYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBmb3JtRGF0YS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgcGhvbmU6IGZvcm1EYXRhLnBob25lLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIEhhbmRsZSBzdWNjZXNzZnVsIGZvcm0gc3VibWlzc2lvblxuICAgICAgY29uc29sZS5sb2coJ05ldyB1c2VyIGFkZGVkOicsIGRhdGEuY3JlYXRlQ29udGFjdCk7XG5cbiAgICAgICAvLyBSZXNldCB0aGUgZm9ybSBmaWVsZHNcbiAgICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBob25lOiAnJ1xuICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICBcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHNldEZvcm1EYXRhKChwcmV2Rm9ybURhdGEpID0+ICh7XG4gICAgICAuLi5wcmV2Rm9ybURhdGEsXG4gICAgICBbbmFtZV06IHZhbHVlXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtdXNlci1wYWdlXCI+XG4gICAgICA8aDE+QWRkIFVzZXI8L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17Zm9ybURhdGEuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gcmVxdWlyZWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPlBob25lOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwaG9uZVwiIG5hbWU9XCJwaG9uZVwiIHZhbHVlPXtmb3JtRGF0YS5waG9uZX0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkIFVzZXI8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFVzZXJQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJncWwiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9DT05UQUNUX01VVEFUSU9OIiwiQWRkVXNlclBhZ2UiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJhZGRDb250YWN0IiwibG9hZGluZyIsImVycm9yIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJ2YXJpYWJsZXMiLCJuZXdDb250YWN0IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUNvbnRhY3QiLCJoYW5kbGVJbnB1dENoYW5nZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldkZvcm1EYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/add-user.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/add-user.tsx"));
module.exports = __webpack_exports__;

})();