(self["webpackChunksoat_maintain"] = self["webpackChunksoat_maintain"] || []).push([["resources_js_src_Linebot_pages_Login_Login_js"],{

/***/ "./resources/js/src/Linebot/pages/Login/Login.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/Linebot/pages/Login/Login.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers */ "./resources/js/src/helpers/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./resources/js/src/Linebot/redux/actions/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




 // import liff from "@line/liff";






var Login = function Login() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      pass = _useState4[0],
      setPass = _useState4[1];

  var userAuth = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.userline;
  });

  var _useLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useLocation)(),
      search = _useLocation.search;

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(); // useBodyClass("hold-transition");
  // useBodyClass("skin-yellow");
  // useBodyClass("sidebar-mini");
  // useScript("/officer/bower_components/bootstrap/dist/js/bootstrap.min.js");

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var path = new URLSearchParams(search); // if (!localStorage.getItem("linetoken")) {
    //     history.push("/linebot/verify?path=" + path.get("path"));
    // }

    if (userAuth.loggedIn) {
      history.push(path.get("path"));
    }
  }, [userAuth, history, search]);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_4__.userActions.login(user, pass));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        name: "description",
        content: "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E42\u0E0B\u0E41\u0E2D\u0E47\u0E17 \u0E42\u0E0B\u0E25\u0E39\u0E0A\u0E31\u0E48\u0E19 \u0E08\u0E33\u0E01\u0E31\u0E14"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        property: "og:locale",
        content: "th_TH"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        property: "og:title",
        content: "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E42\u0E0B\u0E41\u0E2D\u0E47\u0E17 \u0E42\u0E0B\u0E25\u0E39\u0E0A\u0E31\u0E48\u0E19 \u0E08\u0E33\u0E01\u0E31\u0E14"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        property: "og:description",
        content: "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E42\u0E0B\u0E41\u0E2D\u0E47\u0E17 \u0E42\u0E0B\u0E25\u0E39\u0E0A\u0E31\u0E48\u0E19 \u0E08\u0E33\u0E01\u0E31\u0E14"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        property: "og:url",
        content: window.location.href
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link", {
        rel: "canonical",
        href: window.location.href
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("meta", {
        property: "og:site_name",
        content: "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E42\u0E0B\u0E41\u0E2D\u0E47\u0E17 \u0E42\u0E0B\u0E25\u0E39\u0E0A\u0E31\u0E48\u0E19 \u0E08\u0E33\u0E01\u0E31\u0E14"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link", {
        rel: "stylesheet",
        href: "/officer/dist/css/style.css"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "min-w-screen min-h-screen bg-white flex items-center justify-center line-login",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "bg-gray-500 flex overflow-hidden relative",
        style: {
          width: 539,
          height: 819
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "h-full w-full px-10 pt-6 pb-20 overflow-y-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            type: "button",
            className: "flex text-white mx-8",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "w-56 h-45 mx-12 mt-40",
              src: "/officer/dist/img/Linelogo.png"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "max-w-md mt-4 mx-auto",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
              action: true,
              className: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "mb-4 mt-4 px-8 py-1 ",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                  placeholder: "Username",
                  id: "username",
                  type: "text",
                  name: "username",
                  className: "placeholder-gray-700 w-72 border-gray-400 py-2 px-2 rounded"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "flex flex-col mb- text-center px-8 py-3 mb-2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                  placeholder: "Password",
                  id: "password",
                  type: "password",
                  name: "password",
                  className: "placeholder-gray-700 w-72 border border-gray-400 py-2 px-2 rounded"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                className: "bg-red-500 px-8 py-3  text-white mx-24 rounded-lg ",
                children: "Login"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "flex flex-col text-center"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "absolute left-1/2 transform -translate-x-1/2 bottom-0"
              })]
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

}]);
//# sourceMappingURL=resources_js_src_Linebot_pages_Login_Login_js.js.map