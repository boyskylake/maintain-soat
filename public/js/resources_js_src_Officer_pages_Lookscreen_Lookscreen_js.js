(self["webpackChunksoat_maintain"] = self["webpackChunksoat_maintain"] || []).push([["resources_js_src_Officer_pages_Lookscreen_Lookscreen_js"],{

/***/ "./resources/js/src/Officer/pages/Lookscreen/Lookscreen.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/Officer/pages/Lookscreen/Lookscreen.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers */ "./resources/js/src/helpers/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions */ "./resources/js/src/Officer/redux/actions/index.js");



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Lookscreen = function Lookscreen() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      pass = _useState2[0],
      setPass = _useState2[1];

  (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.useBodyClass)("hold-transition");
  (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.useBodyClass)("lockscreen");
  (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.useScript)("/officer/bower_components/bootstrap/dist/js/bootstrap.min.js");
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var authentication = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.authentication;
  });
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (authentication.loggedIn && authentication.refreshIn) {
      // history.goBack();
      history.push("/officer/home");
    }

    if (!authentication.refreshIn && !authentication.loggedIn) {
      history.push("/officer/login");
    }
  }, [authentication, history]);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_5__.userActions.refresh());
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "lockscreen-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
        name: "description",
        content: "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E42\u0E0B\u0E41\u0E2D\u0E47\u0E17 \u0E42\u0E0B\u0E25\u0E39\u0E0A\u0E31\u0E48\u0E19 \u0E08\u0E33\u0E01\u0E31\u0E14"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
        property: "og:locale",
        content: "th_TH"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
        property: "og:title",
        content: "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E42\u0E0B\u0E41\u0E2D\u0E47\u0E17 \u0E42\u0E0B\u0E25\u0E39\u0E0A\u0E31\u0E48\u0E19 \u0E08\u0E33\u0E01\u0E31\u0E14"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
        property: "og:description",
        content: "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E42\u0E0B\u0E41\u0E2D\u0E47\u0E17 \u0E42\u0E0B\u0E25\u0E39\u0E0A\u0E31\u0E48\u0E19 \u0E08\u0E33\u0E01\u0E31\u0E14"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
        property: "og:url",
        content: window.location.href
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("link", {
        rel: "canonical",
        href: window.location.href
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
        property: "og:site_name",
        content: "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E42\u0E0B\u0E41\u0E2D\u0E47\u0E17 \u0E42\u0E0B\u0E25\u0E39\u0E0A\u0E31\u0E48\u0E19 \u0E08\u0E33\u0E01\u0E31\u0E14"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("link", {
        rel: "stylesheet",
        href: "/officer/bower_components/bootstrap/dist/css/bootstrap.min.css"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("link", {
        rel: "stylesheet",
        href: "/officer/bower_components/font-awesome/css/font-awesome.min.css"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("link", {
        rel: "stylesheet",
        href: "/officer/bower_components/Ionicons/css/ionicons.min.css"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("link", {
        rel: "stylesheet",
        href: "/officer/dist/css/AdminLTE.css"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "lockscreen-logo",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "Soat"
      }), "Officer"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "lockscreen-name",
      children: "John Doe"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "lockscreen-item",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "lockscreen-image",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
          src: "/officer/dist/img/user1-128x128.jpg",
          alt: "User Image"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", {
        className: "lockscreen-credentials",
        onSubmit: function onSubmit(e) {
          return handleSubmit(e);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "input-group",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
            type: "password",
            onChange: function onChange(event) {
              return setPass(event.target.value);
            },
            className: "form-control",
            placeholder: "password",
            required: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "input-group-btn",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
              type: "submit",
              className: "btn",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", {
                className: "fa fa-arrow-right text-muted"
              })
            })
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "help-block text-center",
      children: "Enter your password to retrieve your session"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "text-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
        href: "login.html",
        children: "Or sign in as a different user"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "lockscreen-footer text-center",
      children: ["Copyright \xA9 2014-2016", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
          href: "https://adminlte.io",
          className: "text-black",
          children: "Almsaeed Studio"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "All rights reserved"]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Lookscreen);

/***/ })

}]);
//# sourceMappingURL=resources_js_src_Officer_pages_Lookscreen_Lookscreen_js.js.map