webpackHotUpdate_N_E("pages/Perfil",{

/***/ "./components/Contras.js":
/*!*******************************!*\
  !*** ./components/Contras.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contras; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "D:\\chesswebfrontend\\chessweb-frontEnd\\components\\Contras.js";
function Contras(_ref) {
  var _this = this;

  var contras = _ref.contras;
  var idperfil = localStorage.getItem('id'); //    console.log(contras)

  function getNames(id) {
    if (id === "p1") {
      return "Thiago";
    }

    if (id === "p2") {
      return "Rick";
    }

    if (id === "p3") {
      return "Joao";
    }

    if (id === "p4") {
      return "Daniel";
    }

    if (id === "p5") {
      return "Vitor";
    }
  }

  var players = Object.entries(contras);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: players.map(function (element) {
      var _key;

      console.log(element[1]);

      if (element[1][0].id_player == idperfil) {
        _key = 0;
      } else {
        _key = 1;
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PerfilWords, {
            children: [getNames(element[0]), " ", element[1][_key].vitorias, " / ", element[1][_key].derrotas, " | ", element[1][_key].empates]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 27
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 8
  }, this);
}
_c = Contras;

var _c;

$RefreshReg$(_c, "Contras");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250cmFzLmpzIl0sIm5hbWVzIjpbIkNvbnRyYXMiLCJjb250cmFzIiwiaWRwZXJmaWwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0TmFtZXMiLCJpZCIsInBsYXllcnMiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiZWxlbWVudCIsIl9rZXkiLCJjb25zb2xlIiwibG9nIiwiaWRfcGxheWVyIiwidml0b3JpYXMiLCJkZXJyb3RhcyIsImVtcGF0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxPQUFULE9BQTZCO0FBQUE7O0FBQUEsTUFBVkMsT0FBVSxRQUFWQSxPQUFVO0FBQ3hDLE1BQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLElBQXJCLENBQWpCLENBRHdDLENBRTVDOztBQUNJLFdBQVNDLFFBQVQsQ0FBa0JDLEVBQWxCLEVBQXNCO0FBQ2xCLFFBQUdBLEVBQUUsS0FBSyxJQUFWLEVBQWdCO0FBQ1osYUFBTyxRQUFQO0FBQ0g7O0FBQ0QsUUFBR0EsRUFBRSxLQUFLLElBQVYsRUFBZ0I7QUFDWixhQUFPLE1BQVA7QUFDSDs7QUFDRCxRQUFHQSxFQUFFLEtBQUssSUFBVixFQUFnQjtBQUNaLGFBQU8sTUFBUDtBQUNIOztBQUNELFFBQUdBLEVBQUUsS0FBSyxJQUFWLEVBQWdCO0FBQ1osYUFBTyxRQUFQO0FBQ0g7O0FBQ0QsUUFBR0EsRUFBRSxLQUFLLElBQVYsRUFBZ0I7QUFDWixhQUFPLE9BQVA7QUFDSDtBQUNKOztBQUNELE1BQU1DLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxPQUFQLENBQWVSLE9BQWYsQ0FBaEI7QUFDRCxzQkFDSTtBQUFBLGNBQ01NLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUN2QixVQUFJQyxJQUFKOztBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBTyxDQUFDLENBQUQsQ0FBbkI7O0FBQ0EsVUFBR0EsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXLENBQVgsRUFBY0ksU0FBZCxJQUEyQmIsUUFBOUIsRUFBd0M7QUFDcENVLFlBQUksR0FBSSxDQUFSO0FBQ0gsT0FGRCxNQUVNO0FBQ0ZBLFlBQUksR0FBRyxDQUFQO0FBQ0g7O0FBRVIsMEJBQ1E7QUFBQSwrQkFDSTtBQUFBLHVDQUFNLHFFQUFDLFdBQUQ7QUFBQSx1QkFDR1AsUUFBUSxDQUFDTSxPQUFPLENBQUMsQ0FBRCxDQUFSLENBRFgsT0FDMEJBLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0MsSUFBWCxFQUFpQkksUUFEM0MsU0FDd0RMLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0MsSUFBWCxFQUFpQkssUUFEekUsU0FDc0ZOLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0MsSUFBWCxFQUFpQk0sT0FEdkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUjtBQVNDLEtBbEJJO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0JGO0tBN0N1QmxCLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvUGVyZmlsLmVkMmUyZGEwOTgwMzA0ZWNlNDFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250cmFzICh7Y29udHJhc30pIHtcclxuICAgIGNvbnN0IGlkcGVyZmlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJylcclxuLy8gICAgY29uc29sZS5sb2coY29udHJhcylcclxuICAgIGZ1bmN0aW9uIGdldE5hbWVzKGlkKSB7XHJcbiAgICAgICAgaWYoaWQgPT09IFwicDFcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJUaGlhZ29cIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZCA9PT0gXCJwMlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlJpY2tcIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZCA9PT0gXCJwM1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkpvYW9cIlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZCA9PT0gXCJwNFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkRhbmllbFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkID09PSBcInA1XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiVml0b3JcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHBsYXllcnMgPSBPYmplY3QuZW50cmllcyhjb250cmFzKVxyXG4gICByZXR1cm4gKFxyXG4gICAgICAgPGRpdj5cclxuICAgICAgICAgICB7IHBsYXllcnMubWFwKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgIGxldCBfa2V5XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRbMV0pXHJcbiAgICAgICAgICAgICAgIGlmKGVsZW1lbnRbMV1bMF0uaWRfcGxheWVyID09IGlkcGVyZmlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICBfa2V5ID0gIDBcclxuICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgX2tleSA9IDFcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICByZXR1cm4gIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gPFBlcmZpbFdvcmRzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldE5hbWVzKGVsZW1lbnRbMF0pfSB7ZWxlbWVudFsxXVtfa2V5XS52aXRvcmlhc30gLyB7ZWxlbWVudFsxXVtfa2V5XS5kZXJyb3Rhc30gfCB7ZWxlbWVudFsxXVtfa2V5XS5lbXBhdGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QZXJmaWxXb3Jkcz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICA8L2Rpdj5cclxuICAgKVxyXG4gICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==