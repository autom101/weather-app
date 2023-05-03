/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/program-logic.js":
/*!*********************************!*\
  !*** ./src/js/program-logic.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getWeather = async () => {\n  const weather = await fetch(\n    \"http://api.weatherapi.com/v1/current.json?key=73de09befe32494386305144230205&q=\" +\n      \"Edmonton\" +\n      \"&aqi=no\",\n    {\n      mode: \"cors\",\n    }\n  );\n  const weatherObj = await weather.json();\n  return weatherObj;\n};\n\nconst handleFormSubmit = async (form) => {\n  const weatherData = await getWeather();\n  console.log(weatherData);\n};\n\nconst createFormSubmitListener = (form) => {\n  form.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    handleFormSubmit(form);\n  });\n};\n\nconst createFormLogic = () => {\n  const searchForm = document.querySelector(\"form\");\n  const searchIcon = document.querySelector(\".search-icon\");\n  createFormSubmitListener(searchForm);\n};\n\nconst createProgramLogic = async () => {\n  createFormLogic();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProgramLogic);\n\n\n//# sourceURL=webpack://weather-app/./src/js/program-logic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/program-logic.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;