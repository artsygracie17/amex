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
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-styled-flexboxgrid */ "./node_modules/react-styled-flexboxgrid/dist/styled-flexboxgrid.es.js");
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
  var data = _taggedTemplateLiteral(["\n    margin-top: 0.5rem;\n"]);

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




var ResultCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var ResultCardBody = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var MarginedRow = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_3__["Row"])(_templateObject3());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4(_templateObject4());
var ReleaseDate = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(Title)(_templateObject5());
var Description = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(ReleaseDate)(_templateObject6());

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
      viewDescription: false
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
      }, !viewDescription && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, " ", film.opening_crawl, " "))))));
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
//# sourceMappingURL=home.js.b36301d759587f0cacea.hot-update.js.map