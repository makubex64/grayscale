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

eval("/*!\n    * Start Bootstrap - Grayscale v6.0.2 (https://startbootstrap.com/themes/grayscale)\n    * Copyright 2013-2020 Start Bootstrap\n    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)\n    */\n    (function ($) {\n    \"use strict\"; // Start of use strict\n\n    // Smooth scrolling using jQuery easing\n    $('a.js-scroll-trigger[href*=\"#\"]:not([href=\"#\"])').click(function () {\n        if (\n            location.pathname.replace(/^\\//, \"\") ==\n                this.pathname.replace(/^\\//, \"\") &&\n            location.hostname == this.hostname\n        ) {\n            var target = $(this.hash);\n            target = target.length\n                ? target\n                : $(\"[name=\" + this.hash.slice(1) + \"]\");\n            if (target.length) {\n                $(\"html, body\").animate(\n                    {\n                        scrollTop: target.offset().top - 70,\n                    },\n                    1000,\n                    \"easeInOutExpo\"\n                );\n                return false;\n            }\n        }\n    });\n\n    // Closes responsive menu when a scroll trigger link is clicked\n    $(\".js-scroll-trigger\").click(function () {\n        $(\".navbar-collapse\").collapse(\"hide\");\n    });\n\n    // Activate scrollspy to add active class to navbar items on scroll\n    $(\"body\").scrollspy({\n        target: \"#mainNav\",\n        offset: 100,\n    });\n\n    // Collapse Navbar\n    var navbarCollapse = function () {\n        if ($(\"#mainNav\").offset().top > 100) {\n            $(\"#mainNav\").addClass(\"navbar-shrink\");\n        } else {\n            $(\"#mainNav\").removeClass(\"navbar-shrink\");\n        }\n    };\n    // Collapse now if page is not at top\n    navbarCollapse();\n    // Collapse the navbar when page is scrolled\n    $(window).scroll(navbarCollapse);\n})(jQuery); // End of use strict\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zY3JpcHRzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvc2NyaXB0cy5qcz9iNGRjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICAgICogU3RhcnQgQm9vdHN0cmFwIC0gR3JheXNjYWxlIHY2LjAuMiAoaHR0cHM6Ly9zdGFydGJvb3RzdHJhcC5jb20vdGhlbWVzL2dyYXlzY2FsZSlcbiAgICAqIENvcHlyaWdodCAyMDEzLTIwMjAgU3RhcnQgQm9vdHN0cmFwXG4gICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9TdGFydEJvb3RzdHJhcC9zdGFydGJvb3RzdHJhcC1ncmF5c2NhbGUvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAgICAqL1xuICAgIChmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiOyAvLyBTdGFydCBvZiB1c2Ugc3RyaWN0XG5cbiAgICAvLyBTbW9vdGggc2Nyb2xsaW5nIHVzaW5nIGpRdWVyeSBlYXNpbmdcbiAgICAkKCdhLmpzLXNjcm9sbC10cmlnZ2VyW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sIFwiXCIpID09XG4gICAgICAgICAgICAgICAgdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgXCJcIikgJiZcbiAgICAgICAgICAgIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aFxuICAgICAgICAgICAgICAgID8gdGFyZ2V0XG4gICAgICAgICAgICAgICAgOiAkKFwiW25hbWU9XCIgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyBcIl1cIik7XG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIDcwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAxMDAwLFxuICAgICAgICAgICAgICAgICAgICBcImVhc2VJbk91dEV4cG9cIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDbG9zZXMgcmVzcG9uc2l2ZSBtZW51IHdoZW4gYSBzY3JvbGwgdHJpZ2dlciBsaW5rIGlzIGNsaWNrZWRcbiAgICAkKFwiLmpzLXNjcm9sbC10cmlnZ2VyXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5uYXZiYXItY29sbGFwc2VcIikuY29sbGFwc2UoXCJoaWRlXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gQWN0aXZhdGUgc2Nyb2xsc3B5IHRvIGFkZCBhY3RpdmUgY2xhc3MgdG8gbmF2YmFyIGl0ZW1zIG9uIHNjcm9sbFxuICAgICQoXCJib2R5XCIpLnNjcm9sbHNweSh7XG4gICAgICAgIHRhcmdldDogXCIjbWFpbk5hdlwiLFxuICAgICAgICBvZmZzZXQ6IDEwMCxcbiAgICB9KTtcblxuICAgIC8vIENvbGxhcHNlIE5hdmJhclxuICAgIHZhciBuYXZiYXJDb2xsYXBzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQoXCIjbWFpbk5hdlwiKS5vZmZzZXQoKS50b3AgPiAxMDApIHtcbiAgICAgICAgICAgICQoXCIjbWFpbk5hdlwiKS5hZGRDbGFzcyhcIm5hdmJhci1zaHJpbmtcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI21haW5OYXZcIikucmVtb3ZlQ2xhc3MoXCJuYXZiYXItc2hyaW5rXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBDb2xsYXBzZSBub3cgaWYgcGFnZSBpcyBub3QgYXQgdG9wXG4gICAgbmF2YmFyQ29sbGFwc2UoKTtcbiAgICAvLyBDb2xsYXBzZSB0aGUgbmF2YmFyIHdoZW4gcGFnZSBpcyBzY3JvbGxlZFxuICAgICQod2luZG93KS5zY3JvbGwobmF2YmFyQ29sbGFwc2UpO1xufSkoalF1ZXJ5KTsgLy8gRW5kIG9mIHVzZSBzdHJpY3RcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/scripts.js\n");

/***/ })

/******/ });