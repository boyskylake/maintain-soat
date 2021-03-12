(self["webpackChunksoat_maintain"] = self["webpackChunksoat_maintain"] || []).push([["resources_js_src_Officer_pages_Order_component_Step3Component_js"],{

/***/ "./resources/js/src/Officer/pages/Order/component/Step3Component.js":
/*!**************************************************************************!*\
  !*** ./resources/js/src/Officer/pages/Order/component/Step3Component.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers */ "./resources/js/src/helpers/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/actions */ "./resources/js/src/Officer/redux/actions/index.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/useCookies.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function Step3Component(props, _ref) {
  var setCompleted = _ref.setCompleted,
      completed = _ref.completed,
      setActiveStep = _ref.setActiveStep,
      activeStep = _ref.activeStep,
      step = _ref.step;

  var _useCookies = (0,react_cookie__WEBPACK_IMPORTED_MODULE_8__.default)(["pageone"]),
      _useCookies2 = _slicedToArray(_useCookies, 3),
      cookies = _useCookies2[0],
      setCookie = _useCookies2[1],
      removeCookie = _useCookies2[2];

  console.log(props);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var feedData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.feedData;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      confirmSubmit = _useState2[0],
      setconfirmSubmit = _useState2[1]; // const [inputs, setInputs] = useState(["ma_coop"]);


  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      coopid = _useState4[0],
      setCoopid = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      CookiePageOne = _useState6[0],
      setCookiePageOne = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      CookiePageTwo = _useState8[0],
      setCookiePageTwo = _useState8[1];

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      errors = _useForm.errors;

  var onSubmit = function onSubmit(data) {
    console.log(data);
    console.log(coopid); // $('#myModal').modal('show')
  }; // ให้ทำงานเฉพาะ สั่งซื้อเท่านั้น


  var inform_type_only_c = ["07", "31", "03"];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // console.log(cookies.pageone);
    // console.log(cookies.pageone.inform_type);
    // console.log(cookies.pagetwo.pagetwo);
    console.log(feedData.data && feedData.data);

    if (cookies.pageone && cookies.pageone.inform_type && cookies.pagetwo.pagetwo == "1") {
      setCookiePageOne(cookies.pageone);
      setCookiePageTwo(cookies.pagetwo);
      feedData();
    } else {//ยังไม่มีอะไร
    }

    function feedData() {
      return _feedData.apply(this, arguments);
    }

    function _feedData() {
      _feedData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_5__.feedDataAction.feedDataGet("/api/v1/officer/orderPage"));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _feedData.apply(this, arguments);
    }
  }, [dispatch]);
  $(function () {});

  var handleComplete = function handleComplete() {
    var newCompleted = new Set(props.completed);
    newCompleted.add(props.step);
    props.setCompleted(newCompleted);
    handleNext();
  };

  var handleNext = function handleNext() {
    var newActiveStep = props.activeStep + 1; // console.log(newActiveStep)

    props.setActiveStep(newActiveStep);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: props.completed.has(2) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "m-2 text-center py-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "py-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
          className: "far fa-check-circle fa-5x text-emerald-400"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("h3", {
        className: "text-gray-800 text-base font-medium",
        children: [" ", "\u0E17\u0E48\u0E32\u0E19\u0E44\u0E14\u0E49\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E19\u0E35\u0E49\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E21\u0E1A\u0E23\u0E39\u0E13\u0E4C\u0E41\u0E25\u0E49\u0E27"]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "box-body",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "box-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "col-xs-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h2", {
              className: "page-header",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
                src: "./dist/img/pdf.png"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {}), feedData.data && feedData.data.ma_coop && feedData.data.ma_coop.map(function (val, i) {
            if (cookies.pageone.coopid == (0,jquery__WEBPACK_IMPORTED_MODULE_6__.trim)(val.coop_id)) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                children: val.coop_name
              });
            }
          })]
        })
      })
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Step3Component);

/***/ }),

/***/ "./node_modules/react-cookie/es6/useCookies.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-cookie/es6/useCookies.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useCookies; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _CookiesContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CookiesContext */ "./node_modules/react-cookie/es6/CookiesContext.js");


function useCookies(dependencies) {
    var cookies = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_CookiesContext__WEBPACK_IMPORTED_MODULE_1__.default);
    if (!cookies) {
        throw new Error('Missing <CookiesProvider>');
    }
    var initialCookies = cookies.getAll();
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialCookies), allCookies = _a[0], setCookies = _a[1];
    var previousCookiesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(allCookies);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        function onChange() {
            var newCookies = cookies.getAll();
            if (shouldUpdate(dependencies || null, newCookies, previousCookiesRef.current)) {
                setCookies(newCookies);
            }
            previousCookiesRef.current = newCookies;
        }
        cookies.addChangeListener(onChange);
        return function () {
            cookies.removeChangeListener(onChange);
        };
    }, [cookies]);
    var setCookie = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return cookies.set.bind(cookies); }, [cookies]);
    var removeCookie = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return cookies.remove.bind(cookies); }, [cookies]);
    return [allCookies, setCookie, removeCookie];
}
function shouldUpdate(dependencies, newCookies, oldCookies) {
    if (!dependencies) {
        return true;
    }
    for (var _i = 0, dependencies_1 = dependencies; _i < dependencies_1.length; _i++) {
        var dependency = dependencies_1[_i];
        if (newCookies[dependency] !== oldCookies[dependency]) {
            return true;
        }
    }
    return false;
}


/***/ })

}]);
//# sourceMappingURL=resources_js_src_Officer_pages_Order_component_Step3Component_js.js.map