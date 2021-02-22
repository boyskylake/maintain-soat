(self["webpackChunksoat_maintain"] = self["webpackChunksoat_maintain"] || []).push([["resources_js_src_Officer_pages_Login_Login_js"],{

/***/ "./resources/js/src/Officer/pages/Login/Login.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/Officer/pages/Login/Login.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers */ "./resources/js/src/helpers/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions */ "./resources/js/src/Officer/redux/actions/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




 // import { history } from "../../../helpers";


 // import { login } from '../actions';





var Login = function Login() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      pass = _useState4[0],
      setPass = _useState4[1];

  (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.useBodyClass)("hold-transition");
  (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.useBodyClass)("skin-yellow");
  (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.useBodyClass)("sidebar-mini");
  (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.useScript)("/officer/bower_components/bootstrap/dist/js/bootstrap.min.js");
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var authentication = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.authentication;
  });
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (authentication.loggedIn) {
      history.push("/officer/home");
    }
  }, [authentication, history]);

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); // toastr.info(
    //     "Are you the 6 fingered man?\n dfmadskfmsd;flmsdflsad; \n adkfadskfl;sdk;l"
    // );

    dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_5__.userActions.login(user, pass));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("meta", {
        name: "description",
        content: "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E42\u0E0B\u0E41\u0E2D\u0E47\u0E17 \u0E42\u0E0B\u0E25\u0E39\u0E0A\u0E31\u0E48\u0E19 \u0E08\u0E33\u0E01\u0E31\u0E14"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("meta", {
        property: "og:locale",
        content: "th_TH"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("meta", {
        property: "og:title",
        content: "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E42\u0E0B\u0E41\u0E2D\u0E47\u0E17 \u0E42\u0E0B\u0E25\u0E39\u0E0A\u0E31\u0E48\u0E19 \u0E08\u0E33\u0E01\u0E31\u0E14"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("meta", {
        property: "og:descrpition",
        content: "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E42\u0E0B\u0E41\u0E2D\u0E47\u0E17 \u0E42\u0E0B\u0E25\u0E39\u0E0A\u0E31\u0E48\u0E19 \u0E08\u0E33\u0E01\u0E31\u0E14"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("meta", {
        property: "og:url",
        content: window.location.href
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("link", {
        rel: "canonical",
        href: window.location.href
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("meta", {
        property: "og:site_name",
        content: "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E42\u0E0B\u0E41\u0E2D\u0E47\u0E17 \u0E42\u0E0B\u0E25\u0E39\u0E0A\u0E31\u0E48\u0E19 \u0E08\u0E33\u0E01\u0E31\u0E14"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("link", {
        rel: "stylesheet",
        href: "/officer/bower_components/bootstrap/dist/css/bootstrap.min.css"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("link", {
        rel: "stylesheet",
        href: "/officer/bower_components/font-awesome/css/font-awesome.min.css"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("link", {
        rel: "stylesheet",
        href: "/officer/bower_components/Ionicons/css/ionicons.min.css"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("link", {
        rel: "stylesheet",
        href: "/officer/plugins/iCheck/all.css"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("link", {
        rel: "stylesheet",
        href: "/officer/dist/css/AdminLTE.css"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("link", {
        rel: "stylesheet",
        href: "/officer/dist/css/skins/_all-skins.min.css"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("link", {
        rel: "stylesheet",
        href: "/officer/dist/css/style.css"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("style", {
        type: "text/css",
        children: "\n                    html, body {\n                        height: unset;\n                    }\n                    .form-control {\n                        display: block;\n                        width: 100%;\n                        height: 45px;\n                        padding: 6px 12px;\n                        font-size: 14px;\n                        line-height: 1.42857143;\n                        color: #555;\n                        background-color: #fff;\n                        background-image: none;\n                        border: 1px solid #ccc;\n                        border-radius: 4px;\n                        -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);\n                        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);\n                        -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n                        -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n                        -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n                        transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n                        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n                        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\n                    }\n                "
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "header-area",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "navbar-area",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("nav", {
            className: "site-navbar",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
              href: "#home",
              className: "site-logo",
              children: "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E42\u0E0B\u0E41\u0E2D\u0E47\u0E17 \u0E42\u0E0B\u0E25\u0E39\u0E0A\u0E31\u0E48\u0E19 \u0E08\u0E33\u0E01\u0E31\u0E14"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                  href: "https://www.soatsolution.com/home",
                  children: "Home"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                  href: "https://www.soatsolution.com/home#sec-1",
                  children: "About us"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                  href: "https://www.soatsolution.com/home#sec-7",
                  children: "Services"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              className: "nav-toggler",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {})
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        id: "login-box-body",
        className: "row col-lg-12 col-md-12 col-sm-12 col-12",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "col-lg-6 col-md-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
            className: "pic-login-2",
            src: "https://sv1.picz.in.th/images/2021/02/18/obsLEe.png"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "col-lg-5 col-md-6 col-sm-12 col-12 login-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
            children: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 !"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "form-group",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
              onSubmit: function onSubmit(e) {
                return handleSubmit(e);
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "form-group has-feedback",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "Email",
                  onChange: function onChange(event) {
                    return setUser(event.target.value);
                  },
                  className: "form-control",
                  placeholder: "Username",
                  required: true,
                  height: "30"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
                  width: "1.2em",
                  height: "1.2em",
                  viewBox: "0 0 16 16",
                  className: "bi bi-person-fill",
                  fill: "currentColor",
                  xmlns: "http://www.w3.org/2000/svg"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "glyphicon glyphicon-lock form-control-feedback"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "form-group has-feedback",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "password",
                  onChange: function onChange(event) {
                    return setPass(event.target.value);
                  },
                  className: "form-control",
                  placeholder: "Password",
                  required: true
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "glyphicon glyphicon-lock form-control-feedback"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "row",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "login-btn",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    className: "btn btn-primary ",
                    type: "submit",
                    children: "Log in"
                  })
                })
              })]
            })
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

}]);
//# sourceMappingURL=resources_js_src_Officer_pages_Login_Login_js.js.map