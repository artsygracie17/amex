module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./characters.json":
/*!*************************!*\
  !*** ./characters.json ***!
  \*************************/
/*! exports provided: characters, default */
/***/ (function(module) {

module.exports = {"characters":[{"name":"Luke Skywalker","url":"https://swapi.co/api/people/1/"},{"name":"Darth Vader","url":"https://swapi.co/api/people/4/"},{"name":"Obi-wan Kenobi","url":"https://swapi.co/api/people/unknown/"},{"name":"R2-D2","url":"https://swapi.co/api/people/3/"}]};

/***/ }),

/***/ "./components/ResultCard.js":
/*!**********************************!*\
  !*** ./components/ResultCard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResultCard; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-styled-flexboxgrid */ "react-styled-flexboxgrid");
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/gracieliu-fang/Code/amex/components/ResultCard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    color: black;\n    display: none;\n    line-height: 1.5rem;\n    font-size: 1rem;\n    width: 40rem;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    color: gray;\n    font-size: 0.8rem;\n    margin-top: 0rem;\n    margin-bottom: 0.6rem;\n    margin-left: 3.7rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    color: black;\n    font-size: 1.3rem;\n    font-weight: lighter;\n    margin-top: 0.2rem;\n    margin-bottom: 0rem;\n    margin-left: 1rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    // margin-top: 0.5rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 1px solid lightgray;\n    padding: 0.5rem;\n    width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    margin-top: 1rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* Third Party */




var ResultCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var ResultCardBody = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var MarginedRow = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Row"])(_templateObject3());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h4(_templateObject4());
var ReleaseDate = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(Title)(_templateObject5());
var Description = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(ReleaseDate)(_templateObject6());

var ResultCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ResultCard, _React$Component);

  function ResultCard(props) {
    var _this;

    _classCallCheck(this, ResultCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResultCard).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleDescription", function () {
      _this.setState({
        viewDescription: !_this.state.viewDescription
      });
    });

    _this.state = {
      viewDescription: true
    };
    return _this;
  }

  _createClass(ResultCard, [{
    key: "render",
    value: function render() {
      var film = this.props.film;
      var toggleDescription = this.toggleDescription;
      var viewDescription = this.state.viewDescription;
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var date = new Date(film.release_date);
      var year = date.getFullYear();
      var day = date.getDate();
      var month = months[date.getMonth()];
      var dayOfWeek = daysOfWeek[date.getDay()];
      var dateString = "".concat(dayOfWeek, ", ").concat(month, " ").concat(day, " ").concat(year);
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ResultCardContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ResultCardBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MarginedRow, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "material-icons",
        style: {
          fontSize: 40
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "movie"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, " ", film.title, " ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ReleaseDate, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, " Release: ", dateString, " ")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Description, {
        onClick: toggleDescription,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "+ here"))))));
    }
  }]);

  return ResultCard;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


ResultCard.defaultProps = {
  film: {}
};
ResultCard.propTypes = {
  film: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-styled-flexboxgrid */ "react-styled-flexboxgrid");
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _characters_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../characters.json */ "./characters.json");
var _characters_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../characters.json */ "./characters.json", 1);
/* harmony import */ var _components_ResultCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ResultCard */ "./components/ResultCard.js");

var _jsxFileName = "/Users/gracieliu-fang/Code/amex/pages/home.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1.2rem;\n    margin: 5rem;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: 2rem;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    font-family: 'NeueHaasUnicaPro-Regular';\n    padding: 5rem;\n    padding-top: 1rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    border-top: ", ";\n    width: ", ";\n    transition: width 0.5s;\n\n    ", ":hover & {\n        width: 200px;\n        border-top: 1px solid black;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: 1.2rem;\n    margin-bottom: 0.2em;\n    text-align: center;\n    vertical-align: middle;\n\n    &:hover {\n        transition: color 4s easein;\n        transition: border 2s ease;\n        color: black;\n        cursor: pointer;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-size: 2.5rem;\n    margin-bottom: 2rem;\n    text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin: 0 auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* First party */



/* Third party */



var Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h1(_templateObject2());
var Name = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p(_templateObject3(), function (props) {
  return props.isCurrentCharacter ? 'black' : 'gray';
});
var NameUnderline = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.hr(_templateObject4(), function (props) {
  return props.isCurrentCharacter ? '1px solid black' : 'none';
}, function (props) {
  return props.isCurrentCharacter ? '200px' : '0px';
}, Name);
var Theme = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__["Grid"])(_templateObject5());
var MarginedRow = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__["Row"])(_templateObject6());
var EmptyState = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p(_templateObject7());

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "alphabetizeFilms", function (films) {
      var sortedFilms = films.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }

        if (a.title > b.title) {
          return 1;
        }

        return 0;
      });

      _this.setState({
        films: sortedFilms,
        status: 'SETTLED'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCharacterNameClick", function (name, reqUrl) {
      _this.setState({
        films: [],
        selectedCharacter: name,
        status: 'PENDING'
      });

      _this.fetchFilms(reqUrl);
    });

    _this.state = {
      films: [],
      selectedCharacter: '',
      status: 'SETTLED'
    };
    return _this;
  }

  _createClass(Home, [{
    key: "fetchFilms",
    value: function () {
      var _fetchFilms = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(reqUrl) {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fetch(reqUrl).then(function (res) {
                  if (!res.ok) {
                    _this2.setState({
                      status: 'SETTLED'
                    });

                    throw Error(res.status);
                  } else {
                    return res.json();
                  }
                }).then(function (data) {
                  var filmUrls = data.films;
                  filmUrls && filmUrls.map(function (url) {
                    fetch(url).then(function (res) {
                      return res.json();
                    }).then(function (filmData) {
                      _this2.setState({
                        films: _toConsumableArray(_this2.state.films).concat([filmData])
                      });

                      return _this2.state.films;
                    }).then(function (films) {
                      return _this2.alphabetizeFilms(films);
                    });
                  });
                }).catch(function (error) {
                  console.log(error);
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchFilms(_x) {
        return _fetchFilms.apply(this, arguments);
      }

      return fetchFilms;
    }()
  }, {
    key: "render",
    value: function render() {
      var handleCharacterNameClick = this.handleCharacterNameClick;
      var _this$state = this.state,
          films = _this$state.films,
          status = _this$state.status,
          selectedCharacter = _this$state.selectedCharacter;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Theme, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, " characters and films "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarginedRow, {
        start: "xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, _characters_json__WEBPACK_IMPORTED_MODULE_4__.characters.map(function (char, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          key: i,
          xs: 12,
          sm: 6,
          md: 3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Name, {
          isCurrentCharacter: char.name === selectedCharacter,
          onClick: function onClick() {
            return handleCharacterNameClick(char.name, char.url);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, char.name, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NameUnderline, {
          isCurrentCharacter: char.name === selectedCharacter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          __self: this
        })));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        start: "xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xsOffset: 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, films.length > 0 ? status === 'SETTLED' && films.map(function (film, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ResultCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
          film: film,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        })));
      }) : status === 'SETTLED' && selectedCharacter && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EmptyState, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, " Sorry, there is an error or this character is not in any films. ")))))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/home.js */"./pages/home.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-styled-flexboxgrid":
/*!*******************************************!*\
  !*** external "react-styled-flexboxgrid" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-styled-flexboxgrid");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=home.js.map