/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document). ready(()=>{\r\n\r\n//text animated \r\nvar GrayscaleSmall = document.querySelector('#GrayscaleSmall')\r\nvar text2 = GrayscaleSmall.innerHTML;\r\n\r\nGrayscaleSmall.innerHTML = \"\";\r\n\r\nvar speed = 25;\r\nvar i = 0;\r\n\r\nfunction typeWriter(){\r\n\tif (i < text2.length){\r\n\t\tGrayscaleSmall.innerHTML += text2.charAt(i);\r\n\t\ti++;\r\n\t\tsetTimeout(typeWriter, speed);\r\n\t}\r\n}\r\ntypeWriter();\r\n\r\n\r\n// fadein\r\n$(\".containerFadeIn\").hide().delay(\"slow\").fadeIn(600);\r\n$(\".js-scroll-trigger\").hide().delay(\"slow\").fadeIn(600)\r\n\r\n//scrollreveal\r\n\r\n\r\n// button toggle\r\n\t$(\"#buttonToggle\").click(()=>{\r\n\t\t$(\".textMountain\").toggle(300)\r\n\t})\r\n\t$(\".textMountain \").hide()\r\n\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2luZGV4LmpzP2VlMWMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkuIHJlYWR5KCgpPT57XHJcblxyXG4vL3RleHQgYW5pbWF0ZWQgXHJcbnZhciBHcmF5c2NhbGVTbWFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNHcmF5c2NhbGVTbWFsbCcpXHJcbnZhciB0ZXh0MiA9IEdyYXlzY2FsZVNtYWxsLmlubmVySFRNTDtcclxuXHJcbkdyYXlzY2FsZVNtYWxsLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG52YXIgc3BlZWQgPSAyNTtcclxudmFyIGkgPSAwO1xyXG5cclxuZnVuY3Rpb24gdHlwZVdyaXRlcigpe1xyXG5cdGlmIChpIDwgdGV4dDIubGVuZ3RoKXtcclxuXHRcdEdyYXlzY2FsZVNtYWxsLmlubmVySFRNTCArPSB0ZXh0Mi5jaGFyQXQoaSk7XHJcblx0XHRpKys7XHJcblx0XHRzZXRUaW1lb3V0KHR5cGVXcml0ZXIsIHNwZWVkKTtcclxuXHR9XHJcbn1cclxudHlwZVdyaXRlcigpO1xyXG5cclxuXHJcbi8vIGZhZGVpblxyXG4kKFwiLmNvbnRhaW5lckZhZGVJblwiKS5oaWRlKCkuZGVsYXkoXCJzbG93XCIpLmZhZGVJbig2MDApO1xyXG4kKFwiLmpzLXNjcm9sbC10cmlnZ2VyXCIpLmhpZGUoKS5kZWxheShcInNsb3dcIikuZmFkZUluKDYwMClcclxuXHJcbi8vc2Nyb2xscmV2ZWFsXHJcblxyXG5cclxuLy8gYnV0dG9uIHRvZ2dsZVxyXG5cdCQoXCIjYnV0dG9uVG9nZ2xlXCIpLmNsaWNrKCgpPT57XHJcblx0XHQkKFwiLnRleHRNb3VudGFpblwiKS50b2dnbGUoMzAwKVxyXG5cdH0pXHJcblx0JChcIi50ZXh0TW91bnRhaW4gXCIpLmhpZGUoKVxyXG5cclxufSkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ })

/******/ });