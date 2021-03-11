(self["webpackChunksoat_maintain"] = self["webpackChunksoat_maintain"] || []).push([["resources_js_src_Officer_pages_Profile_Profile_js"],{

/***/ "./resources/js/src/Officer/pages/Profile/Profile.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/Officer/pages/Profile/Profile.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers */ "./resources/js/src/helpers/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions */ "./resources/js/src/Officer/redux/actions/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _redux_services_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/services/services */ "./resources/js/src/Officer/redux/services/services.js");
/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-notifications */ "./node_modules/react-notifications/lib/index.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function Profile() {
  var _errors$inputName, _errors$inputEmail, _errors$OldPassword, _errors$NewPassword, _errors$Confirm;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var feedData = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.feedData;
  });

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      errors = _useForm.errors;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      passwordeye = _useState2[0],
      setpasswordeye = _useState2[1]; // const [inputs, setInputs] = useState(["ma_coop"]);


  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      coopid = _useState4[0],
      setCoopid = _useState4[1]; // const [FeedMenu, setFeedMenu] = useState();


  var ErrorsWord = {
    Confirm: {
      required: "กรุณากรอกรหัสผ่าน",
      maxLength: ""
    },
    NewPassword: {
      required: "กรุณากรอกรหัสผ่าน",
      maxLength: "",
      PasswordNotMatch: "กรุณากรอกรหัสผ่านให้ตรงกัน"
    },
    OldPassword: {
      required: "กรุณากรอกรหัสผ่าน",
      maxLength: ""
    },
    inputEmail: {
      required: "กรุณากรอกอีเมล์",
      maxLength: ""
    },
    inputName: {
      required: "กรุณากรอกชื่อ",
      maxLength: ""
    }
  }; // <!-- jvectormap  -->

  (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.useScript)("/officer/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js");
  (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.useScript)("/officer/plugins/jvectormap/jquery-jvectormap-world-mill-en.js");
  (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.useScript)("/officer/dist/js/pages/dashboard2.js");
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
                return dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_5__.feedDataAction.feedDataGet("/api/v1/officer/Profile"));

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
  var services = new _redux_services_services__WEBPACK_IMPORTED_MODULE_7__.default();

  var OnSubmitEditProfile = function OnSubmitEditProfile(data) {
    var requestOptions = {
      method: "POST",
      data: JSON.stringify(data)
    };
    services.API("/api/v1/officer/Editprofile", requestOptions).then(function (res) {
      if (res && res.rc_code == "1") {
        console.log("success1");
        toastr__WEBPACK_IMPORTED_MODULE_9___default().success(res && res.message, "Success", 5000); // alert(res && res.message)
      } else {
        console.log("failse1");
        toastr__WEBPACK_IMPORTED_MODULE_9___default().error(res && res.message, "Error", 5000); // alert(res && res.message)
      }
    });
  };

  var OnSubmitEditPassword = function OnSubmitEditPassword(data) {
    if (data.NewPassword == data.Confirm) {
      var requestOptions = {
        method: "POST",
        data: JSON.stringify(data)
      }; // console.log(data.NewPassword == data.Confirm);

      services.API("/api/v1/officer/Editpassword", requestOptions).then(function (res) {
        if (res && res.rc_code == "1") {
          console.log("success2");
          toastr__WEBPACK_IMPORTED_MODULE_9___default().success(res && res.message, "Success", 5000); // alert(res && res.message)
        } else {
          console.log("failse2");
          toastr__WEBPACK_IMPORTED_MODULE_9___default().error(res && res.message, "Error", 5000); // alert(res && res.message)
        }
      });
    } else {
      console.log("failse2");
      toastr__WEBPACK_IMPORTED_MODULE_9___default().error("คอนเฟิร์มรหัสผ่านไม่ถูกต้อง", "Error", 5000);
    }
  }; // console.log(
  //     feedData.fetchSuccess && feedData.data && feedData.data.Profile
  // );


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: "content-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("section", {
      className: "content-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("h1", {
        children: ["Profile", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("small", {
          children: "Version 17.58.98"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("ol", {
        className: "breadcrumb",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("a", {
            href: "#",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("i", {
              className: "fa fa-dashboard"
            }), " Home"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("li", {
          className: "active",
          children: "Profile"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("section", {
      className: "content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "col-md-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "box box-primary",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "box-body box-profile",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                className: "relative h-60",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                  className: "absolute h-full w-full object-cover",
                  src: "https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                className: "relative shadow mx-auto h-64 w-64 -my-36 border-white rounded-full overflow-hidden border-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                  className: "object-cover w-full h-full",
                  src: "/storage/".concat(feedData.fetchSuccess && feedData.data.Profile && feedData.data.Profile.avatar),
                  alt: "User Image"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", {
                className: "profile-username text-center",
                children: feedData.fetchSuccess && feedData.data.Profile && feedData.data.Profile.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
                className: "text-muted text-center",
                children: feedData.fetchSuccess && feedData.data.Position && feedData.data.Position[0] && feedData.data.Position[0].name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("ul", {
                className: "list-group list-group-unbordered",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("li", {
                  className: "list-group-item",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("b", {
                    children: "Name"
                  }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
                    className: "pull-right",
                    children: feedData.fetchSuccess && feedData.data.Position && feedData.data.Profile && feedData.data.Profile.name
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("li", {
                  className: "list-group-item",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("b", {
                    children: "E-mail"
                  }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
                    className: "pull-right",
                    children: feedData.fetchSuccess && feedData.data.Position && feedData.data.Profile && feedData.data.Profile.email
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("li", {
                  className: "list-group-item",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("b", {
                    children: "position"
                  }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
                    className: "pull-right",
                    children: feedData.fetchSuccess && feedData.data.Position && feedData.data.Position[0] && feedData.data.Position[0].name
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
                href: "#",
                className: "btn btn-primary btn-block",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("b", {
                  children: "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E23\u0E39\u0E1B"
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "col-md-9",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "nav-tabs-custom",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("ul", {
              className: "nav nav-tabs",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("li", {
                className: "active",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
                  href: "#EditProfile",
                  "data-toggle": "tab",
                  children: "Edit Profile"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
                  href: "#EditPassword",
                  "data-toggle": "tab",
                  children: "Edit Password"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "tab-content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "active tab-pane",
                id: "EditProfile",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                  className: "pl-10 pt-5",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", {
                    children: "Edit Profile"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("form", {
                  className: "form-horizontal p-10",
                  onSubmit: handleSubmit(OnSubmitEditProfile),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("label", {
                      htmlFor: "inputName",
                      className: "col-sm-2 control-label",
                      children: "Name:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                      className: "col-sm-10",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
                        ref: register({
                          required: true
                        }),
                        type: "name",
                        className: "form-control",
                        id: "inputName",
                        name: "inputName",
                        placeholder: "Name",
                        autoComplete: "off",
                        Value: feedData.fetchSuccess && feedData.data.Profile && feedData.data.Profile.name
                      }), ((_errors$inputName = errors.inputName) === null || _errors$inputName === void 0 ? void 0 : _errors$inputName.type) === "required" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ErrorSpan, {
                        className: "",
                        children: ErrorsWord.inputName.required
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("label", {
                      htmlFor: "inputEmail",
                      className: "col-sm-2 control-label",
                      children: "E-mail:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                      className: "col-sm-10",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
                        ref: register({
                          required: true
                        }),
                        type: "email",
                        className: "form-control",
                        id: "inputEmail",
                        name: "inputEmail",
                        placeholder: "E-mail",
                        autoComplete: "off",
                        Value: feedData.fetchSuccess && feedData.data.Profile && feedData.data.Profile.email
                      }), ((_errors$inputEmail = errors.inputEmail) === null || _errors$inputEmail === void 0 ? void 0 : _errors$inputEmail.type) === "required" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ErrorSpan, {
                        className: "",
                        children: ErrorsWord.inputEmail.required
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                    className: "form-group",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                      className: "col-sm-offset-2 col-sm-10",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
                        type: "submit",
                        className: "btn btn-danger",
                        children: "Submit"
                      })
                    })
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "tab-pane",
                id: "EditPassword",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                  className: "pl-10 pt-5",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", {
                    children: "Edit Password"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("form", {
                  className: "form-horizontal p-10",
                  onSubmit: handleSubmit(OnSubmitEditPassword),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("label", {
                      htmlFor: "OldPassword",
                      className: "col-sm-2 control-label",
                      children: "Old Password:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                      className: "col-sm-9",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                        className: "mt-1 relative rounded-md shadow-sm",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                          className: "absolute inset-y-0 right-0 pr-3 flex items-center",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                            onClick: function onClick() {
                              setpasswordeye(function (state) {
                                return !state;
                              });
                            },
                            className: "h-5 w-5 text-gray-400",
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("i", {
                              className: "fas fa-".concat(passwordeye ? "eye-slash" : "eye")
                            })
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
                          ref: register({
                            required: true
                          }),
                          type: passwordeye ? "text" : "password",
                          className: "form-control",
                          id: "OldPassword",
                          name: "OldPassword",
                          autoComplete: "off",
                          placeholder: "Old Password" // Value={
                          //     feedData.fetchSuccess &&
                          //     feedData.data.Profile &&
                          //     feedData.data.Profile.name
                          // }

                        })]
                      }), ((_errors$OldPassword = errors.OldPassword) === null || _errors$OldPassword === void 0 ? void 0 : _errors$OldPassword.type) === "required" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ErrorSpan, {
                        className: "",
                        children: ErrorsWord.OldPassword.required
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("label", {
                      htmlFor: "NewPassword",
                      className: "col-sm-2 control-label",
                      children: "New Password:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                      className: "col-sm-9",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
                        autoComplete: "off",
                        ref: register({
                          required: true
                        }),
                        type: passwordeye ? "text" : "password",
                        className: "form-control",
                        id: "NewPassword",
                        name: "NewPassword",
                        placeholder: "New Password" // Value={
                        //     feedData.fetchSuccess &&
                        //     feedData.data.Profile &&
                        //     feedData.data.Profile.email
                        // }

                      }), ((_errors$NewPassword = errors.NewPassword) === null || _errors$NewPassword === void 0 ? void 0 : _errors$NewPassword.type) === "required" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ErrorSpan, {
                        className: "",
                        children: ErrorsWord.NewPassword.required
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                      onClick: function onClick() {
                        setpasswordeye(function (state) {
                          return !state;
                        });
                      },
                      className: "text-gray-700  btn-show-pass z-10 h-full leading-snug font-normal text-center absolute bg-transparent rounded text-base items-center justify-center w-10 right-0 lg:right-40 xl:right-48 pr-3 py-3"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("label", {
                      htmlFor: "Confirm",
                      className: "col-sm-2 control-label",
                      children: "New Password (Confirm):"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                      className: "col-sm-9",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
                        autoComplete: "off",
                        ref: register({
                          required: true
                        }),
                        type: passwordeye ? "text" : "password",
                        className: "form-control",
                        id: "Confirm",
                        name: "Confirm",
                        placeholder: "New Password (Confirm)" // Value={
                        //     feedData.fetchSuccess &&
                        //     feedData.data.Profile &&
                        //     feedData.data.Profile.email
                        // }

                      }), ((_errors$Confirm = errors.Confirm) === null || _errors$Confirm === void 0 ? void 0 : _errors$Confirm.type) === "required" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ErrorSpan, {
                        className: "",
                        children: ErrorsWord.Confirm.required
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                      onClick: function onClick() {
                        setpasswordeye(function (state) {
                          return !state;
                        });
                      },
                      className: "text-gray-700  btn-show-pass z-10 h-full leading-snug font-normal text-center absolute bg-transparent rounded text-base items-center justify-center w-10 right-0 lg:right-40 xl:right-48 pr-3 py-3"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                    className: "form-group",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                      className: "col-sm-offset-2 col-sm-10",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
                        type: "submit",
                        className: "btn btn-danger",
                        children: "Submit"
                      })
                    })
                  })]
                })]
              })]
            })]
          })
        })]
      })
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Profile);

var ErrorSpan = function ErrorSpan(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("span", {
    className: "text-danger ".concat(className && className, " "),
    children: [" ", children && children]
  });
};

/***/ })

}]);
//# sourceMappingURL=resources_js_src_Officer_pages_Profile_Profile_js.js.map