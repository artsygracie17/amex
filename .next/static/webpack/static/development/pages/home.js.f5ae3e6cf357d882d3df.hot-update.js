webpackHotUpdate("static/development/pages/home.js",{

/***/ "./components/ResultCard.js":
/*!**********************************!*\
  !*** ./components/ResultCard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResultCard; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/gracieliu-fang/Code/amex/components/ResultCard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-size: 1rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    color: gray;\n    font-size: 1.5rem;\n    text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border-radius: 0.2rem;\n    padding: 3rem;\n    width: 15rem;\n    height: 15rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 15rem;\n    height: 15rem;\n    margin: 2rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* Third Party */



var colors = {
  lightCoffee: '#dfd9d3',
  coffee: '#bfb3a8',
  darkCoffee: '#907a67'
};
var ResultCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var ResultCardBody = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2(), colors.lightCoffee);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4(_templateObject3());
var ReleaseDate = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Title)(_templateObject4());

var ResultCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ResultCard, _React$Component);

  function ResultCard() {
    _classCallCheck(this, ResultCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResultCard).apply(this, arguments));
  }

  _createClass(ResultCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          film = _this$props.film,
          characterName = _this$props.characterName;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ResultCardContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ResultCardBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, " ", film.title, " "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ReleaseDate, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, " ", film.release_date, " ")));
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

/***/ })

})
//# sourceMappingURL=home.js.f5ae3e6cf357d882d3df.hot-update.js.map