webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Ranking.js":
/*!*******************************!*\
  !*** ./components/Ranking.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_testes_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_testes_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_testes_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_testes_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/style */ "./style/style.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "D:\\testes\\frontend\\components\\Ranking.js",
    _s = $RefreshSig$();




var zero = 0;

function Ranking() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      players = _useState[0],
      setPlayers = _useState[1];

  function RankingPlayers() {
    return _RankingPlayers.apply(this, arguments);
  }

  function _RankingPlayers() {
    _RankingPlayers = Object(D_testes_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_testes_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data;
      return D_testes_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('http://localhost:3333/busca');

            case 2:
              data = _context.sent;
              setPlayers(data.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _RankingPlayers.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    RankingPlayers();
  }, []);
  players.sort(function (a, b) {
    return parseFloat(b.rating) - parseFloat(a.rating);
  }); // colocando array em ordem decrescente

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["ContainerRanking"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["FontNameAndRanking"], {
      children: "Nome \xA0\xA0\xA0Rating"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), players.map(function (element, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["RenderData"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_3__["NameRanking"], {
          children: [i + 1, " ", element.name, " ", element.rating]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 29
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 25
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

_s(Ranking, "x01McZoBj85ZsH2CUHGJhkUoAXA=");

_c = Ranking;
/* harmony default export */ __webpack_exports__["default"] = (Ranking);

var _c;

$RefreshReg$(_c, "Ranking");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYW5raW5nLmpzIl0sIm5hbWVzIjpbInplcm8iLCJSYW5raW5nIiwidXNlU3RhdGUiLCJwbGF5ZXJzIiwic2V0UGxheWVycyIsIlJhbmtpbmdQbGF5ZXJzIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwidXNlRWZmZWN0Iiwic29ydCIsImEiLCJiIiwicGFyc2VGbG9hdCIsInJhdGluZyIsIm1hcCIsImVsZW1lbnQiLCJpIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLElBQUksR0FBRyxDQUFiOztBQUVBLFNBQVNDLE9BQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDZUMsc0RBQVEsQ0FBQyxFQUFELENBRHZCO0FBQUEsTUFDVEMsT0FEUztBQUFBLE1BQ0FDLFVBREE7O0FBQUEsV0FFREMsY0FGQztBQUFBO0FBQUE7O0FBQUE7QUFBQSxtUUFFaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDdUJDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSw2QkFBVixDQUR2Qjs7QUFBQTtBQUNVQyxrQkFEVjtBQUVJSix3QkFBVSxDQUFDSSxJQUFJLENBQUNBLElBQU4sQ0FBVjs7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZnQjtBQUFBO0FBQUE7O0FBTWhCQyx5REFBUyxDQUFDLFlBQU07QUFFYkosa0JBQWM7QUFDaEIsR0FIUSxFQUdQLEVBSE8sQ0FBVDtBQUlBRixTQUFPLENBQUNPLElBQVIsQ0FBYSxVQUFDQyxDQUFELEVBQUdDLENBQUg7QUFBQSxXQUFTQyxVQUFVLENBQUNELENBQUMsQ0FBQ0UsTUFBSCxDQUFWLEdBQXVCRCxVQUFVLENBQUNGLENBQUMsQ0FBQ0csTUFBSCxDQUExQztBQUFBLEdBQWIsRUFWZ0IsQ0FVa0Q7O0FBQ2xFLHNCQUNJLHFFQUFDLDZEQUFEO0FBQUEsNEJBQ0kscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUtRWCxPQUFPLENBQUNZLEdBQVIsQ0FBWSxVQUFDQyxPQUFELEVBQVNDLENBQVQsRUFBZTtBQUN2QiwwQkFDSSxxRUFBQyx1REFBRDtBQUFBLCtCQUNJLHFFQUFDLHdEQUFEO0FBQUEscUJBQ1BBLENBQUMsR0FBQyxDQURLLE9BQ0RELE9BQU8sQ0FBQ0UsSUFEUCxPQUNjRixPQUFPLENBQUNGLE1BRHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQU9ILEtBUkQsQ0FMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtCSDs7R0E3QlFiLE87O0tBQUFBLE87QUFnQ01BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU1Mzg5ZjUwNmY4OTRhODQwNDA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRhaW5lclJhbmtpbmcsIFJlbmRlckRhdGEsIEZvbnROYW1lQW5kUmFua2luZyxOYW1lUmFua2luZywgU2VwYXJhdG9yfSBmcm9tICcuLi9zdHlsZS9zdHlsZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmNvbnN0IHplcm8gPSAwO1xyXG5cclxuZnVuY3Rpb24gUmFua2luZyAoKSB7XHJcbiAgICBjb25zdCBbcGxheWVycywgc2V0UGxheWVycyBdID0gdXNlU3RhdGUoW10pXHJcbiAgICBhc3luYyBmdW5jdGlvbiBSYW5raW5nUGxheWVycyAoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL2J1c2NhJylcclxuICAgICAgICBzZXRQbGF5ZXJzKGRhdGEuZGF0YSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICBSYW5raW5nUGxheWVycygpXHJcbiAgICB9LFtdKVxyXG4gICAgcGxheWVycy5zb3J0KChhLGIpID0+IHBhcnNlRmxvYXQoYi5yYXRpbmcpIC0gcGFyc2VGbG9hdChhLnJhdGluZykpLy8gY29sb2NhbmRvIGFycmF5IGVtIG9yZGVtIGRlY3Jlc2NlbnRlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXJSYW5raW5nPlxyXG4gICAgICAgICAgICA8Rm9udE5hbWVBbmRSYW5raW5nPlxyXG4gICAgICAgICAgICAgICAgTm9tZSAmbmJzcDsmbmJzcDsmbmJzcDtSYXRpbmdcclxuICAgICAgICAgICAgPC9Gb250TmFtZUFuZFJhbmtpbmc+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBsYXllcnMubWFwKChlbGVtZW50LGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVuZGVyRGF0YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYW1lUmFua2luZz4gXHJcbiAgICAgICAgICAgICAgICAgICAge2krMX0ge2VsZW1lbnQubmFtZX0ge2VsZW1lbnQucmF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmFtZVJhbmtpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVuZGVyRGF0YT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9Db250YWluZXJSYW5raW5nPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFua2luZyJdLCJzb3VyY2VSb290IjoiIn0=