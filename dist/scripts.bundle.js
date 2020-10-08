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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/scripts.js":
/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\r\n    * Start Bootstrap - Grayscale v6.0.2 (https://startbootstrap.com/themes/grayscale)\r\n    * Copyright 2013-2020 Start Bootstrap\r\n    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)\r\n    */\r\n    (function ($) {\r\n    \"use strict\"; // Start of use strict\r\n\r\n    // Smooth scrolling using jQuery easing\r\n    $('a.js-scroll-trigger[href*=\"#\"]:not([href=\"#\"])').click(function () {\r\n        if (\r\n            location.pathname.replace(/^\\//, \"\") ==\r\n                this.pathname.replace(/^\\//, \"\") &&\r\n            location.hostname == this.hostname\r\n        ) {\r\n            var target = $(this.hash);\r\n            target = target.length\r\n                ? target\r\n                : $(\"[name=\" + this.hash.slice(1) + \"]\");\r\n            if (target.length) {\r\n                $(\"html, body\").animate(\r\n                    {\r\n                        scrollTop: target.offset().top - 70,\r\n                    },\r\n                    1000,\r\n                    \"easeInOutExpo\"\r\n                );\r\n                return false;\r\n            }\r\n        }\r\n    });\r\n\r\n    // Closes responsive menu when a scroll trigger link is clicked\r\n    $(\".js-scroll-trigger\").click(function () {\r\n        $(\".navbar-collapse\").collapse(\"hide\");\r\n    });\r\n\r\n    // Activate scrollspy to add active class to navbar items on scroll\r\n    $(\"body\").scrollspy({\r\n        target: \"#mainNav\",\r\n        offset: 100,\r\n    });\r\n\r\n    // Collapse Navbar\r\n    var navbarCollapse = function () {\r\n        if ($(\"#mainNav\").offset().top > 100) {\r\n            $(\"#mainNav\").addClass(\"navbar-shrink\");\r\n        } else {\r\n            $(\"#mainNav\").removeClass(\"navbar-shrink\");\r\n        }\r\n    };\r\n    // Collapse now if page is not at top\r\n    navbarCollapse();\r\n    // Collapse the navbar when page is scrolled\r\n    $(window).scroll(navbarCollapse);\r\n})(jQuery); // End of use strict\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zY3JpcHRzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvc2NyaXB0cy5qcz9iNGRjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxyXG4gICAgKiBTdGFydCBCb290c3RyYXAgLSBHcmF5c2NhbGUgdjYuMC4yIChodHRwczovL3N0YXJ0Ym9vdHN0cmFwLmNvbS90aGVtZXMvZ3JheXNjYWxlKVxyXG4gICAgKiBDb3B5cmlnaHQgMjAxMy0yMDIwIFN0YXJ0IEJvb3RzdHJhcFxyXG4gICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9TdGFydEJvb3RzdHJhcC9zdGFydGJvb3RzdHJhcC1ncmF5c2NhbGUvYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuICAgICovXHJcbiAgICAoZnVuY3Rpb24gKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiOyAvLyBTdGFydCBvZiB1c2Ugc3RyaWN0XHJcblxyXG4gICAgLy8gU21vb3RoIHNjcm9sbGluZyB1c2luZyBqUXVlcnkgZWFzaW5nXHJcbiAgICAkKCdhLmpzLXNjcm9sbC10cmlnZ2VyW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCBcIlwiKSA9PVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgXCJcIikgJiZcclxuICAgICAgICAgICAgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xyXG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICA/IHRhcmdldFxyXG4gICAgICAgICAgICAgICAgOiAkKFwiW25hbWU9XCIgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyBcIl1cIik7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wIC0gNzAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZWFzZUluT3V0RXhwb1wiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2xvc2VzIHJlc3BvbnNpdmUgbWVudSB3aGVuIGEgc2Nyb2xsIHRyaWdnZXIgbGluayBpcyBjbGlja2VkXHJcbiAgICAkKFwiLmpzLXNjcm9sbC10cmlnZ2VyXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLm5hdmJhci1jb2xsYXBzZVwiKS5jb2xsYXBzZShcImhpZGVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBY3RpdmF0ZSBzY3JvbGxzcHkgdG8gYWRkIGFjdGl2ZSBjbGFzcyB0byBuYXZiYXIgaXRlbXMgb24gc2Nyb2xsXHJcbiAgICAkKFwiYm9keVwiKS5zY3JvbGxzcHkoe1xyXG4gICAgICAgIHRhcmdldDogXCIjbWFpbk5hdlwiLFxyXG4gICAgICAgIG9mZnNldDogMTAwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ29sbGFwc2UgTmF2YmFyXHJcbiAgICB2YXIgbmF2YmFyQ29sbGFwc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQoXCIjbWFpbk5hdlwiKS5vZmZzZXQoKS50b3AgPiAxMDApIHtcclxuICAgICAgICAgICAgJChcIiNtYWluTmF2XCIpLmFkZENsYXNzKFwibmF2YmFyLXNocmlua1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI21haW5OYXZcIikucmVtb3ZlQ2xhc3MoXCJuYXZiYXItc2hyaW5rXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyBDb2xsYXBzZSBub3cgaWYgcGFnZSBpcyBub3QgYXQgdG9wXHJcbiAgICBuYXZiYXJDb2xsYXBzZSgpO1xyXG4gICAgLy8gQ29sbGFwc2UgdGhlIG5hdmJhciB3aGVuIHBhZ2UgaXMgc2Nyb2xsZWRcclxuICAgICQod2luZG93KS5zY3JvbGwobmF2YmFyQ29sbGFwc2UpO1xyXG59KShqUXVlcnkpOyAvLyBFbmQgb2YgdXNlIHN0cmljdFxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/scripts.js\n");

/***/ })

/******/ });