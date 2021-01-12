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
/* harmony import */ var _style_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/style */ "./style/style.js");

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
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style_style__WEBPACK_IMPORTED_MODULE_1__["PerfilWords"], {
            children: [getNames(element[0]), " ", element[1][_key].vitorias, " / ", element[1][_key].derrotas, " | ", element[1][_key].empates]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 27
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250cmFzLmpzIl0sIm5hbWVzIjpbIkNvbnRyYXMiLCJjb250cmFzIiwiaWRwZXJmaWwiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0TmFtZXMiLCJpZCIsInBsYXllcnMiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiZWxlbWVudCIsIl9rZXkiLCJjb25zb2xlIiwibG9nIiwiaWRfcGxheWVyIiwidml0b3JpYXMiLCJkZXJyb3RhcyIsImVtcGF0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZSxTQUFTQSxPQUFULE9BQTZCO0FBQUE7O0FBQUEsTUFBVkMsT0FBVSxRQUFWQSxPQUFVO0FBQ3hDLE1BQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLElBQXJCLENBQWpCLENBRHdDLENBRTVDOztBQUNJLFdBQVNDLFFBQVQsQ0FBa0JDLEVBQWxCLEVBQXNCO0FBQ2xCLFFBQUdBLEVBQUUsS0FBSyxJQUFWLEVBQWdCO0FBQ1osYUFBTyxRQUFQO0FBQ0g7O0FBQ0QsUUFBR0EsRUFBRSxLQUFLLElBQVYsRUFBZ0I7QUFDWixhQUFPLE1BQVA7QUFDSDs7QUFDRCxRQUFHQSxFQUFFLEtBQUssSUFBVixFQUFnQjtBQUNaLGFBQU8sTUFBUDtBQUNIOztBQUNELFFBQUdBLEVBQUUsS0FBSyxJQUFWLEVBQWdCO0FBQ1osYUFBTyxRQUFQO0FBQ0g7O0FBQ0QsUUFBR0EsRUFBRSxLQUFLLElBQVYsRUFBZ0I7QUFDWixhQUFPLE9BQVA7QUFDSDtBQUNKOztBQUNELE1BQU1DLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxPQUFQLENBQWVSLE9BQWYsQ0FBaEI7QUFDRCxzQkFDSTtBQUFBLGNBQ01NLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUN2QixVQUFJQyxJQUFKOztBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBTyxDQUFDLENBQUQsQ0FBbkI7O0FBQ0EsVUFBR0EsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXLENBQVgsRUFBY0ksU0FBZCxJQUEyQmIsUUFBOUIsRUFBd0M7QUFDcENVLFlBQUksR0FBSSxDQUFSO0FBQ0gsT0FGRCxNQUVNO0FBQ0ZBLFlBQUksR0FBRyxDQUFQO0FBQ0g7O0FBRVIsMEJBQ1E7QUFBQSwrQkFDSTtBQUFBLHVDQUFNLHFFQUFDLHdEQUFEO0FBQUEsdUJBQ0dQLFFBQVEsQ0FBQ00sT0FBTyxDQUFDLENBQUQsQ0FBUixDQURYLE9BQzBCQSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsRUFBaUJJLFFBRDNDLFNBQ3dETCxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsRUFBaUJLLFFBRHpFLFNBQ3NGTixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLElBQVgsRUFBaUJNLE9BRHZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFI7QUFTQyxLQWxCSTtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXdCRjtLQTdDdUJsQixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1BlcmZpbC44ZDAzMDhjMzM1YmMyZjdjN2EwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQZXJmaWxXb3Jkc30gZnJvbSAnLi4vc3R5bGUvc3R5bGUnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRyYXMgKHtjb250cmFzfSkge1xyXG4gICAgY29uc3QgaWRwZXJmaWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKVxyXG4vLyAgICBjb25zb2xlLmxvZyhjb250cmFzKVxyXG4gICAgZnVuY3Rpb24gZ2V0TmFtZXMoaWQpIHtcclxuICAgICAgICBpZihpZCA9PT0gXCJwMVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRoaWFnb1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkID09PSBcInAyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiUmlja1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkID09PSBcInAzXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiSm9hb1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlkID09PSBcInA0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiRGFuaWVsXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaWQgPT09IFwicDVcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJWaXRvclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcGxheWVycyA9IE9iamVjdC5lbnRyaWVzKGNvbnRyYXMpXHJcbiAgIHJldHVybiAoXHJcbiAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgIHsgcGxheWVycy5tYXAoKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgbGV0IF9rZXlcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudFsxXSlcclxuICAgICAgICAgICAgICAgaWYoZWxlbWVudFsxXVswXS5pZF9wbGF5ZXIgPT0gaWRwZXJmaWwpIHtcclxuICAgICAgICAgICAgICAgICAgIF9rZXkgPSAgMFxyXG4gICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICBfa2V5ID0gMVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiAgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiA8UGVyZmlsV29yZHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0TmFtZXMoZWxlbWVudFswXSl9IHtlbGVtZW50WzFdW19rZXldLnZpdG9yaWFzfSAvIHtlbGVtZW50WzFdW19rZXldLmRlcnJvdGFzfSB8IHtlbGVtZW50WzFdW19rZXldLmVtcGF0ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BlcmZpbFdvcmRzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgIDwvZGl2PlxyXG4gICApXHJcbiAgICAgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9