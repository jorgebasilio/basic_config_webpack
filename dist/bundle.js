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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SuperMarket = function () {
  function SuperMarket(name) {
    _classCallCheck(this, SuperMarket);

    this.name = name;
    this.aisle = [];
  }

  _createClass(SuperMarket, [{
    key: 'createAisle',
    value: function createAisle(type) {
      this.aisle.push(new Aisle(this.aisle.length + 1, type));
    }
  }, {
    key: 'viewAllAisle',
    value: function viewAllAisle() {
      this.aisle.map(function (obj) {
        console.log(obj);
      });
    }
  }]);

  return SuperMarket;
}();

var Aisle = function () {
  function Aisle(number, type) {
    _classCallCheck(this, Aisle);

    this.number = number;
    this.type = type;
    this.products = [];
  }

  _createClass(Aisle, [{
    key: 'createProduct',
    value: function createProduct(name) {
      this.products.push(new Product(name));
    }
  }]);

  return Aisle;
}();

var Product = function Product(name) {
  _classCallCheck(this, Product);

  this.name = name;
};

var superMarket = new SuperMarket();

var hallways = {
  vegetables: ['la acelga.', 'el ajo.', 'la alcachofa', 'el alcaucil', 'el apio.', 'la arveja', 'la batata', 'la berenjena'],
  vegetables2: ['la acelga.', 'el ajo.', 'la alcachofa', 'el alcaucil', 'el apio.', 'la arveja', 'la batata', 'la berenjena']
};

for (var key in hallways) {
  superMarket.createAisle(key);
  hallways[key].map(function (obj) {
    superMarket.aisle[superMarket.aisle.length - 1].createProduct(obj);
  });
}

superMarket.viewAllAisle();

/***/ })
/******/ ]);