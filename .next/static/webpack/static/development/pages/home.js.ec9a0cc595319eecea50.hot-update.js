webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-styled-flexboxgrid */ "./node_modules/react-styled-flexboxgrid/dist/styled-flexboxgrid.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _characters_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../characters.json */ "./characters.json");
var _characters_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../characters.json */ "./characters.json", 1);
/* harmony import */ var _components_ResultCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ResultCard */ "./components/ResultCard.js");
var _jsxFileName = "/Users/gracieliu-fang/Code/amex/pages/home.js";


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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-family: 'NeueHaasUnicaPro-Regular';\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: 1.2rem;\n    margin-top: 1.2rem;\n\n    ", ":hover & {\n        color: ", ";\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n    border-radius: 10rem;\n    height: 5rem;\n    margin-top: 2rem;\n    padding: 2rem;\n    text-align: center;\n    vertical-align: middle;\n    width: 5rem;\n\n    &:hover {\n        color: ", ";\n        cursor: pointer;\n    }\n"]);

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



var colors = {
  coffee: '#bfb3a8',
  darkCoffee: '#907a67'
};
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var CharacterCard = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), colors.coffee, colors.darkCoffee);
var Name = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject3(), colors.coffee, CharacterCard, colors.darkCoffee);
var Theme = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Grid"])(_templateObject4());

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCharacterCardClick", function (event) {
      console.log('in handleclick: ', event.currentTarget.value); // update selectedCharacter state
      // fetch films that character has been in
      // update films state
    });

    _this.state = {
      selectedCharacter: {},
      films: []
    };
    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      console.log('data: ', _characters_json__WEBPACK_IMPORTED_MODULE_3__.characters);
      var handleCharacterCardClick = this.handleCharacterCardClick;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Theme, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        center: "xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, _characters_json__WEBPACK_IMPORTED_MODULE_3__.characters.map(function (char, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CharacterCard, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Name, {
          onClick: handleCharacterCardClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, " ", char.name, " ")));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        xs: 9,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, _characters_json__WEBPACK_IMPORTED_MODULE_3__.characters.map(function (char, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ResultCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }));
      }))))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/home")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=home.js.ec9a0cc595319eecea50.hot-update.js.map