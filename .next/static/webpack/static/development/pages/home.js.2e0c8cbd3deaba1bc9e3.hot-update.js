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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-styled-flexboxgrid */ "./node_modules/react-styled-flexboxgrid/dist/styled-flexboxgrid.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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



var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h1(_templateObject2());
var Name = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p(_templateObject3(), function (props) {
  return props.isCurrentCharacter ? 'black' : 'gray';
});
var NameUnderline = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].hr(_templateObject4(), function (props) {
  return props.isCurrentCharacter ? '1px solid black' : 'none';
}, function (props) {
  return props.isCurrentCharacter ? '200px' : '0px';
}, Name);
var Theme = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__["Grid"])(_templateObject5());
var MarginedRow = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__["Row"])(_templateObject6());
var EmptyState = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p(_templateObject7());

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
        films: sortedFilms
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
                        films: _toConsumableArray(_this2.state.films).concat([filmData]),
                        status: 'SETTLED'
                      });

                      _this2.alphabetizeFilms(_this2.state.films);
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
//# sourceMappingURL=home.js.2e0c8cbd3deaba1bc9e3.hot-update.js.map