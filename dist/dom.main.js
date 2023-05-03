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

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_magnify_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/magnify.svg */ \"./src/img/magnify.svg\");\n\n\nconst createWeatherDisplay = () => {\n  const weatherContainer = document.createElement(\"div\");\n  weatherContainer.classList.add(\"weather-container\");\n  weatherContainer.classList.add(\"hide\");\n\n  const weatherLeftDiv = document.createElement(\"div\");\n  weatherLeftDiv.classList.add(\"weather-left\");\n  const weatherCenterDiv = document.createElement(\"div\");\n  weatherCenterDiv.classList.add(\"weather-center\");\n  const weatherRightDiv = document.createElement(\"div\");\n  weatherRightDiv.classList.add(\"weather-right\");\n\n  const weatherRightDivExcess = document.createElement(\"div\");\n  weatherRightDivExcess.classList.add(\"weather-right-excess\");\n\n  const weatherTitle = document.createElement(\"h2\");\n  weatherTitle.classList.add(\"weather-title\");\n  weatherTitle.textContent = \"Weather\";\n\n  const timeToday = document.createElement(\"h3\");\n  timeToday.classList.add(\"weather-time\");\n  timeToday.textContent = \"Time Placeholder\";\n\n  const condition = document.createElement(\"h3\");\n  condition.classList.add(\"weather-condition\");\n  condition.textContent = \"condition Placeholder\";\n\n  const conditionIcon = document.createElement(\"img\");\n  conditionIcon.classList.add(\"weather-condition-icon\");\n  conditionIcon.alt = \"An image for a condition\";\n\n  const temperature = document.createElement(\"h3\");\n  temperature.classList.add(\"weather-temperature\");\n  temperature.textContent = \"temperature Placeholder\";\n\n  const humidity = document.createElement(\"h3\");\n  humidity.classList.add(\"weather-humidity\");\n  humidity.textContent = \"humidity Placeholder\";\n\n  const wind = document.createElement(\"h3\");\n  wind.classList.add(\"weather-wind\");\n  wind.textContent = \"wind Placeholder\";\n\n  weatherLeftDiv.appendChild(timeToday);\n  weatherLeftDiv.appendChild(condition);\n\n  weatherCenterDiv.appendChild(conditionIcon);\n\n  weatherRightDivExcess.appendChild(humidity);\n  weatherRightDivExcess.appendChild(wind);\n\n  weatherRightDiv.appendChild(temperature);\n  weatherRightDiv.appendChild(weatherRightDivExcess);\n\n  weatherContainer.appendChild(weatherTitle);\n  weatherContainer.appendChild(weatherLeftDiv);\n  weatherContainer.appendChild(weatherCenterDiv);\n  weatherContainer.appendChild(weatherRightDiv);\n\n  document.body.appendChild(weatherContainer);\n};\n\nconst createSearch = () => {\n  const searchForm = document.createElement(\"form\");\n  searchForm.setAttribute(\"action\", \"\");\n  searchForm.setAttribute(\"id\", \"search-form\");\n\n  const searchLabel = document.createElement(\"label\");\n  searchLabel.setAttribute(\"for\", \"city\");\n  searchLabel.textContent = \"City Name: \";\n\n  const searchContainer = document.createElement(\"div\");\n  searchContainer.classList.add(\"search-container\");\n\n  const searchInput = document.createElement(\"input\");\n  searchInput.setAttribute(\"id\", \"city\");\n  searchInput.setAttribute(\"name\", \"city\");\n  searchInput.setAttribute(\"maxLength\", \"85\");\n\n  const searchSubmit = document.createElement(\"button\");\n  searchSubmit.setAttribute(\"type\", \"submit\");\n\n  const searchIcon = document.createElement(\"img\");\n  searchIcon.src = _img_magnify_svg__WEBPACK_IMPORTED_MODULE_0__;\n  searchIcon.alt = \"Magnify icon from material design icons\";\n  searchIcon.classList.add(\"search-icon\");\n\n  searchSubmit.appendChild(searchIcon);\n\n  searchForm.appendChild(searchLabel);\n  searchContainer.appendChild(searchInput);\n  searchContainer.appendChild(searchSubmit);\n\n  searchForm.appendChild(searchContainer);\n\n  document.body.appendChild(searchForm);\n};\n\nconst createHeader = () => {\n  const header = document.createElement(\"h1\");\n  header.textContent = \"Weather App\";\n  document.body.appendChild(header);\n};\n\nconst createDom = () => {\n  createHeader();\n  createSearch();\n  createWeatherDisplay();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDom);\n\n\n//# sourceURL=webpack://weather-app/./src/js/dom.js?");

/***/ }),

/***/ "./src/img/magnify.svg":
/*!*****************************!*\
  !*** ./src/img/magnify.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"54ff7732bb1a5ff166c6.svg\";\n\n//# sourceURL=webpack://weather-app/./src/img/magnify.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/dom.js");
/******/ 	
/******/ })()
;