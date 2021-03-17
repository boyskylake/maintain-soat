(self["webpackChunksoat_maintain"] = self["webpackChunksoat_maintain"] || []).push([["resources_js_src_Linebot_pages_Verify_Verify_js"],{

/***/ "./resources/js/src/Linebot/pages/Verify/Verify.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/Linebot/pages/Verify/Verify.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@line/liff'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./resources/js/src/Linebot/redux/actions/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var Verify = function Verify() {
  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useLocation)(),
      search = _useLocation.search;

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var path = new URLSearchParams(search);
    localStorage.setItem("path", path.get("path")); // ตรงนี้ต้องเอา Liff login ที่ได้จากการสร้างใน line dev มาใส่ในแถวที่ 18

    function initialize() {
      return _initialize.apply(this, arguments);
    }

    function _initialize() {
      _initialize = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@line/liff'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
                  liffId: "1655658567-YmdRmAVg"
                });

              case 2:
                // console.log(path.get("path"));
                Object(function webpackMissingModule() { var e = new Error("Cannot find module '@line/liff'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
                  if (Object(function webpackMissingModule() { var e = new Error("Cannot find module '@line/liff'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()) {
                    var accessToken = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@line/liff'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();

                    if (accessToken) {
                      localStorage.setItem("linetoken", accessToken);
                      dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_4__.userActions.getAuthUser()).then(function () {
                        history.push(path.get("path"));
                      }).catch(function () {
                        history.push("/linebot/login?path=" + localStorage.getItem("path"));
                      });
                    }
                  } else {
                    // localStorage.setItem("path", path.get("path"));
                    Object(function webpackMissingModule() { var e = new Error("Cannot find module '@line/liff'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
                      redirectUri: "https://6be7805c3720.ngrok.io/linebot/verify?path=" + path.get("path")
                    });
                  }
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _initialize.apply(this, arguments);
    }

    initialize();
  }, [dispatch, history, search]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "overlay",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
      className: "fa fa-refresh fa-spin"
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Verify);

/***/ })

}]);
//# sourceMappingURL=resources_js_src_Linebot_pages_Verify_Verify_js.js.map