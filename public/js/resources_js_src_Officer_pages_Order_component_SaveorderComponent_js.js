(self["webpackChunksoat_maintain"] = self["webpackChunksoat_maintain"] || []).push([["resources_js_src_Officer_pages_Order_component_SaveorderComponent_js"],{

/***/ "./resources/js/src/Officer/pages/Order/component/SaveorderComponent.js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/Officer/pages/Order/component/SaveorderComponent.js ***!
  \******************************************************************************/
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
/* harmony import */ var _redux_services_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/services/services */ "./resources/js/src/Officer/redux/services/services.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-cookie'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function SaveorderComponent(props, _ref) {
  var _errors$informer;

  var setCompleted = _ref.setCompleted,
      completed = _ref.completed,
      setActiveStep = _ref.setActiveStep,
      activeStep = _ref.activeStep,
      step = _ref.step;

  // function SaveorderComponent({ props }) {
  // console.log(props);
  var _useCookies = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-cookie'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(["pageone"]),
      _useCookies2 = _slicedToArray(_useCookies, 3),
      cookies = _useCookies2[0],
      setCookie = _useCookies2[1],
      removeCookie = _useCookies2[2];

  var services = new _redux_services_services__WEBPACK_IMPORTED_MODULE_6__.default();
  var ErrorsWord = {
    informer: {
      required: "กรุณาเลือกผู้รับแจ้ง",
      maxLength: ""
    }
  };
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
      setCoopid = _useState4[1]; // useScript("/officer/dist/js/pages/saveorder.js");


  (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.useScript)("/officer/dist/js/pages/saveorder.js");
  (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.useScript)("/officer/bower_components/ckeditor/ckeditor.js");
  (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.useScript)("/officer/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js");

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      errors = _useForm.errors;

  var onSubmit = function onSubmit(data) {
    // console.log(data);
    var MyBody = _objectSpread(_objectSpread({}, data), {}, {
      _token: window.Laravel.csrfToken
    });

    var requestOptions = {
      method: "POST",
      data: JSON.stringify(MyBody)
    }; // console.log(requestOptions);

    services.API("/api/v1/officer/pageone", requestOptions).then(function (res) {
      if (res.rc_code === "1") {
        //
        removeCookie('pageone');
        setCookie('pageone', JSON.stringify(res.data));
        alert('Successs'); // handle Next

        handleComplete();
      } else {
        alert("การเขื่อมต่อไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
      }
    }); //  dispatch(
    //     feedDataAction.feedDataPost("/api/v1/officer/pageone",MyBody)
    // );
    // console.log(coopid);
    // $('#myModal').modal('show')
  }; //data


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
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

    feedData();
  }, [dispatch]);
  $(function () {
    $(document.body).on("change", "#coopid", function () {
      if (coopid == null) {
        // console.log(coopid);
        document.getElementById("Detail").style.display = "block";
        $(".select2").select2();
        CKEDITOR.replace("editor1"); //bootstrap WYSIHTML5 - text editor

        $(".textarea").wysihtml5();
        document.getElementById("informer").disabled = false;
      }

      setCoopid(this.value);
    });
  });

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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: "box-body",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "box-header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("form", {
        onSubmit: handleSubmit(onSubmit),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "col-md-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                children: "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "input-group",
                style: {
                  border: "1.5px solid #3c8dbc",
                  borderRadius: 5
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "input-group-addon",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                    className: "fa fa-reorder"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                  readOnly: true,
                  type: "text",
                  name: "inform_no",
                  className: "form-control",
                  value: "",
                  ref: register
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "form-group receiver",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                children: "\u0E1C\u0E39\u0E49\u0E23\u0E31\u0E1A\u0E41\u0E08\u0E49\u0E07"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("select", {
                name: "receiver",
                className: "form-control select2",
                ref: register({
                  required: true
                }) // required
                ,
                children: feedData.data && feedData.data.ucf_officer && feedData.data.ucf_officer.map(function (val, i) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("option", {
                    value: val.officer_id,
                    children: ["[".concat(val.officer_id, "]"), "\xA0\xA0\xA0", val.officer_name, "\xA0\xA0\xA0\xA0\xA0", val.officer_full_name]
                  }, i);
                })
              }), errors.receiver && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                children: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1C\u0E39\u0E49\u0E23\u0E31\u0E1A\u0E41\u0E08\u0E49\u0E07"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                children: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E23\u0E31\u0E1A\u0E41\u0E08\u0E49\u0E07"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "input-group",
                style: {
                  border: "1.5px solid #3c8dbc",
                  borderRadius: 2
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "input-group-addon",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                    className: "fa fa-calendar"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                  type: "text",
                  name: "receive_date",
                  className: "form-control",
                  "data-provide": "datepicker",
                  "data-date-language": "th-th",
                  ref: register
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
                  children: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E19\u0E31\u0E14\u0E2B\u0E21\u0E32\u0E22"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "input-group",
                style: {
                  border: "1.5px solid blue",
                  borderRadius: 2
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  className: "input-group-addon",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                    className: "fa fa-calendar"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                  type: "text",
                  name: "appointment_date",
                  className: "form-control",
                  "data-inputmask": "'alias': 'dd/mm/yyyy'",
                  "data-mask": true,
                  ref: register
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "col-md-9",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "form-group coopid",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                children: "\u0E2A\u0E2B\u0E01\u0E23\u0E13\u0E4C\u0E2F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("select", {
                name: "coopid",
                id: "coopid",
                className: "form-control select2",
                ref: register({//  required: true
                }) // required
                ,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {}), feedData.data && feedData.data.ma_coop && feedData.data.ma_coop.map(function (val, i) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("option", {
                    value: val.coop_id,
                    children: [val.coop_id, " ", val.coop_name]
                  }, i);
                })]
              }), " ", errors.coopid && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                children: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1C\u0E39\u0E49\u0E23\u0E31\u0E1A\u0E41\u0E08\u0E49\u0E07"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "col-md-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "form-group receiver",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                  children: "\u0E1C\u0E39\u0E49\u0E41\u0E08\u0E49\u0E07"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("select", {
                  name: "informer",
                  id: "informer",
                  className: "form-control select2",
                  ref: register({//  required: true
                  }) // required
                  ,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {}), feedData.data && feedData.data.ucf_customer_contact && feedData.data.ucf_customer_contact.map(function (val, i) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("option", {
                      value: val.contact_no,
                      children: ["[".concat(val.contact_no, "]"), "\xA0\xA0\xA0", val.contract_name]
                    }, i);
                  })]
                }), " ", ((_errors$informer = errors.informer) === null || _errors$informer === void 0 ? void 0 : _errors$informer.type) === "required" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ErrorSpan, {
                  className: "",
                  children: ErrorsWord.informer.required
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                  children: "\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E2D\u0E49\u0E32\u0E07\u0E2D\u0E34\u0E07"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                  type: "text",
                  name: "doc_make",
                  className: "form-control",
                  style: {
                    border: "1.5px solid #3c8dbc",
                    borderRadius: 2
                  },
                  ref: register({// required: true,
                  })
                }), errors.doc_make && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  children: "This field is required"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                  children: "\u0E40\u0E27\u0E25\u0E32\u0E19\u0E31\u0E14\u0E2B\u0E21\u0E32\u0E22"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "input-group",
                  style: {
                    border: "1.5px solid blue",
                    borderRadius: 2
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "input-group-addon",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                      className: "fa fa-calendar"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                    type: "text",
                    name: "dateRevice",
                    className: "form-control pull-right",
                    id: "reservation",
                    ref: register({// required: true,
                    })
                  }), errors.dateRevice && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                    children: "This field is required"
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "col-md-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "form-group blueselect",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                  children: "\u0E1C\u0E39\u0E49\u0E41\u0E01\u0E49\u0E44\u0E02"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("select", {
                  className: "form-control select2",
                  name: "editor_id",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {}), feedData.data && feedData.data.ucf_officer && feedData.data.ucf_officer.map(function (val, i) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("option", {
                      value: val.officer_id,
                      children: ["[".concat(val.officer_id, "]"), "\xA0\xA0\xA0", val.officer_name, "\xA0\xA0\xA0\xA0\xA0", val.officer_full_name]
                    }, i);
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
                    children: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E23\u0E34\u0E48\u0E21"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "input-group",
                  style: {
                    border: "1.5px solid blue",
                    borderRadius: 2
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "input-group-addon",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                      className: "fa fa-calendar"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                    type: "text",
                    name: "start_date_tdata",
                    className: "form-control",
                    "data-inputmask": "'alias': 'dd/mm/yyyy'",
                    "data-mask": true,
                    ref: register
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("b", {
                    children: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E49\u0E27\u0E40\u0E2A\u0E23\u0E47\u0E08"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "input-group",
                  style: {
                    border: "1.5px solid blue",
                    borderRadius: 2
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    className: "input-group-addon",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                      className: "fa fa-calendar"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                    type: "text",
                    name: "finished_date_tdate",
                    className: "form-control",
                    "data-inputmask": "'alias': 'dd/mm/yyyy'",
                    "data-mask": true,
                    ref: register
                  })]
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "col-md-9",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                children: "\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E44\u0E02"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                  type: "radio",
                  name: "r3",
                  className: "flat-red",
                  ref: register
                }), "\xA0\xA0\xA0\xA0 \u0E44\u0E21\u0E48\u0E23\u0E30\u0E1A\u0E38\xA0\xA0\xA0\xA0"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                  type: "radio",
                  name: "r3",
                  className: "flat-red",
                  ref: register
                }), "\xA0\xA0\xA0\xA0 Telephone\xA0\xA0\xA0\xA0"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                  type: "radio",
                  name: "r3",
                  className: "flat-red",
                  ref: register
                }), "\xA0\xA0\xA0\xA0 Modem\xA0\xA0\xA0\xA0"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                  type: "radio",
                  name: "r3",
                  className: "flat-red",
                  ref: register
                }), "\xA0\xA0\xA0\xA0 Onsite\xA0\xA0\xA0\xA0"]
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "col-md-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "form-group blueselect",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                children: "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E07\u0E32\u0E19"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("select", {
                name: "inform_type",
                className: "form-control select2",
                ref: register,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {}), feedData.data && feedData.data.ucf_inform_type && feedData.data.ucf_inform_type.map(function (val, i) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("option", {
                    value: val.inform_type,
                    children: ["[".concat(val.inform_type, "]"), "\xA0\xA0\xA0", val.type_desc]
                  }, i);
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "col-md-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "form-group orangeselect",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                children: "SA"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("select", {
                className: "form-control select2",
                ref: register,
                name: "sa_id",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {}), feedData.data && feedData.data.ucf_officer && feedData.data.ucf_officer.map(function (val, i) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("option", {
                    value: val.officer_id,
                    children: ["[".concat(val.officer_id, "]"), "\xA0\xA0\xA0", val.officer_name, "\xA0\xA0\xA0\xA0\xA0", val.officer_full_name]
                  }, i);
                })]
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "box box-danger",
          id: "Detail",
          style: {
            border: "2px solid #dd4b39",
            display: "none"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "box-header",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
              className: "box-title",
              children: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "box-body",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "col-md-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "form-group prinkselect",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                    children: "\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("select", {
                    className: "form-control select2",
                    name: "app_no",
                    ref: register,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {}), feedData.data && feedData.data.ucf_application && feedData.data.ucf_application.map(function (val, i) {
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("option", {
                        value: val.app_no,
                        children: ["[".concat(val.app_no, "]"), "\xA0\xA0\xA0", val.application, "\xA0\xA0\xA0", "[".concat(val.version, "]")]
                      }, i);
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "col-md-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                    children: "\u0E2A\u0E20\u0E32\u0E19\u0E30"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                    type: "text",
                    name: "status",
                    className: "form-control",
                    ref: register,
                    style: {
                      border: "1.5px solid #3c8dbc",
                      borderRadius: 2
                    }
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "col-md-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "form-group prinkselect",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                    children: "\u0E23\u0E2B\u0E31\u0E2A\u0E1B\u0E31\u0E0D\u0E2B\u0E32"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("select", {
                    className: "form-control select2",
                    name: "problem_no",
                    ref: register,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {}), feedData.data && feedData.data.ucf_application && feedData.data.ucf_application.map(function (val, i) {
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("option", {
                        value: val.app_no,
                        children: ["[".concat(val.app_no, "]"), "\xA0\xA0\xA0", val.application, "\xA0\xA0\xA0", "[".concat(val.version, "]")]
                      }, i);
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "col-md-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                    children: "\u0E40\u0E27\u0E25\u0E32(\u0E19\u0E32\u0E17\u0E35)"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "input-group",
                    namme: "estimeta_tir",
                    style: {
                      border: "1.5px solid #3c8dbc",
                      borderRadius: 2
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                      className: "input-group-addon",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
                        className: "fa fa-calendar"
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                      type: "text",
                      name: "estimate_tir",
                      className: "form-control",
                      "data-inputmask": "'alias': 'dd/mm/yyyy'",
                      "data-mask": true,
                      ref: register
                    })]
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "row",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("label", {
                    children: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 :"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("textarea", {
                    id: "editor1",
                    name: "editor1",
                    rows: 10,
                    cols: 80,
                    ref: register
                  })]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
              type: "submit",
              className: "btn btn-block btn-primary btn-lg",
              style: {
                width: "150px",
                marginLeft: "1400px"
              }
            })]
          })]
        })]
      })
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = (SaveorderComponent);

var ErrorSpan = function ErrorSpan(_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
    className: "text-danger ".concat(className && className, " "),
    children: [" ", children && children]
  });
};

/***/ })

}]);
//# sourceMappingURL=resources_js_src_Officer_pages_Order_component_SaveorderComponent_js.js.map