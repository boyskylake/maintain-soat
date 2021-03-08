(self["webpackChunksoat_maintain"] = self["webpackChunksoat_maintain"] || []).push([["resources_js_src_Officer_pages_Profile_Profile_js"],{

/***/ "./resources/js/src/Officer/pages/Profile/Profile.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/Officer/pages/Profile/Profile.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers */ "./resources/js/src/helpers/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ "./resources/js/src/Officer/redux/actions/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Profile() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var feedData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.feedData;
  }); // const [inputs, setInputs] = useState(["ma_coop"]);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      coopid = _useState2[0],
      setCoopid = _useState2[1]; // <!-- jvectormap  -->


  (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.useScript)("/officer/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js");
  (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.useScript)("/officer/plugins/jvectormap/jquery-jvectormap-world-mill-en.js");
  (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.useScript)("/officer/dist/js/pages/dashboard2.js");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (feedData && feedData.data) {
      $(function () {
        var grahp1 = feedData.data.grahp1.map(function (val, i) {
          if (val.category_des == null) {
            return {
              label: "other",
              value: val.value
            };
          } else {
            return {
              label: val.category_des,
              value: val.value
            };
          }
        }); //-------------------------------กราฟย้อนหลังปัจจุบัน 7 ปี

        var graponeH = [];
        feedData.data.grahp2.map(function (val, i) {
          if (val.hardware == null) {
            graponeH.push(0);
          } else {
            graponeH.push(val.hardware);
          }
        });
        var graponeO = [];
        feedData.data.grahp2.map(function (val, i) {
          if (val.other == null) {
            graponeO.push(0);
          } else {
            graponeO.push(val.other);
          }
        });
        var graponeS = [];
        feedData.data.grahp2.map(function (val, i) {
          if (val.software == null) {
            graponeS.push(0);
          } else {
            graponeS.push(val.software);
          }
        });
        var graponeY = [];
        feedData.data.grahp2.map(function (val, i) {
          if (val.hardware != null) {
            graponeY.push(val.years);
          } else {
            graponeY.push(val.years);
          }
        });
        var areaChartData1 = {
          labels: graponeY,
          datasets: [{
            label: 'Hardware',
            data: graponeH
          }, {
            label: 'Software',
            data: graponeS
          }, {
            label: 'อื่นๆ',
            data: graponeO
          }]
        };
        var barChartCanvas = $('#barChart').get(0).getContext('2d');
        var barChart = new Chart(barChartCanvas);
        var barChartData = areaChartData1;
        barChartData.datasets[0].fillColor = '#f10303';
        barChartData.datasets[0].strokeColor = '#f10303';
        barChartData.datasets[0].pointColor = '#f10303';
        barChartData.datasets[1].fillColor = '#19caf3';
        barChartData.datasets[1].strokeColor = '#19caf3';
        barChartData.datasets[1].pointColor = '#19caf3';
        barChartData.datasets[2].fillColor = '#f88f58';
        barChartData.datasets[2].strokeColor = '#f88f58';
        barChartData.datasets[2].pointColor = '#f88f58';
        var barChartOptions = {
          responsive: true
        };
        barChartOptions.datasetFill = false;
        barChart.Bar(barChartData, barChartOptions); //-------------------------------กราฟย้อนหลังปัจจุบัน 7 ปี
        //-------------------------------กราฟเงินขาย

        var grapbew = [];
        feedData.data.grahp3.map(function (val, i) {
          if (val.hardware == null) {
            grapbew.push(0);
          } else {
            grapbew.push(val.hardware);
          }
        });
        var grapbew2 = [];
        feedData.data.grahp3.map(function (val, i) {
          if (val.hardware == null) {
            grapbew2.push(0);
          } else {
            grapbew2.push(val.software);
          }
        });
        var grapbew3 = [];
        feedData.data.grahp3.map(function (val, i) {
          if (val.hardware != null) {
            grapbew3.push(val.years);
          } else {
            grapbew3.push(val.years);
          }
        });
        var areaChartData = {
          labels: grapbew3,
          datasets: [{
            label: 'Software',
            fillColor: '#8d90fd',
            pointColor: '#fcff46',
            pointStrokeColor: '#c1c7d1',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: grapbew2
          }, {
            label: 'Hardware',
            fillColor: '#ffb2b2',
            pointColor: '#3effb8',
            pointStrokeColor: 'rgba(60,141,188,1)',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(60,141,188,1)',
            data: grapbew
          }]
        };
        var areaChartCanvas = $('#areaChart').get(0).getContext('2d');
        var areaChart = new Chart(areaChartCanvas);
        var areaChartOptions = {
          responsive: true
        };
        areaChart.Line(areaChartData, areaChartOptions); //-------------------------------กราฟเงินขาย

        console.log(grahp1);
        new Morris.Donut({
          element: "sales-chart",
          resize: true,
          colors: ["#f10303", "#19caf3", "#f88f58", "#f88f58"],
          data: grahp1,
          hideHover: "auto"
        }); // var bar = document.getElementById("bar-chart");
        // new Morris.Bar({
        //     element: "bar-chart",
        //     resize: true,
        //     data: feedData.data.grahp2,
        //     barColors: [ "#f10303", "#19caf3", "#f88f58"],
        //     xkey: "years",
        //     ykeys: [ "hardware" , "software", "other"],
        //     labels: [ "Hardware", "Software", "อื่นๆ"],
        //     hideHover: "auto",
        // });
      });
    }

    return function () {};
  }, [feedData]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "content-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("script", {
        src: "./bower_components/raphael/raphael.min.js"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("script", {
        src: "./bower_components/morris.js/morris.min.js"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link", {
        rel: "stylesheet",
        href: "./bower_components/morris.js/morris.css"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
      className: "content-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h1", {
        children: ["Dashboard", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
          children: "Version 2.0"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ol", {
        className: "breadcrumb",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
            href: "#",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "fa fa-dashboard"
            }), " Home"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
          className: "active",
          children: "Dashboard"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
      className: "content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "row",
        children: feedData.data && feedData.data.ma_coop && feedData.data.ma_coop.map(function (val, i) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "col-md-3 col-sm-6 col-xs-12",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "small-box bg-aqua",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "inner",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                    children: val.countcoop
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    children: "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2A\u0E2B\u0E01\u0E23\u0E13\u0E4C\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "icon",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                    className: "fa fa-folder-open"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                  href: "#",
                  className: "small-box-footer",
                  children: ["\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                    className: "fa fa-arrow-circle-right"
                  })]
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "col-md-3 col-sm-6 col-xs-12",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "small-box bg-purple",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "inner",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                    children: val.contract_remark
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                    children: "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2A\u0E31\u0E0D\u0E0D\u0E32\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "icon",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                    className: "fa fa-folder-open"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                  href: "#",
                  className: "small-box-footer",
                  children: ["\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                    className: "fa fa-arrow-circle-right"
                  })]
                })]
              })
            })]
          }, i);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "box box-default",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "box box-success",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "box-header with-border",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                  className: "box-title",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
                    children: "\u0E01\u0E23\u0E32\u0E1F\u0E22\u0E49\u0E2D\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19 7 \u0E1B\u0E35"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "box-tools pull-right",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                    type: "button",
                    className: "btn btn-box-tool",
                    "data-widget": "collapse",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                      className: "fa fa-minus"
                    })
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "box-body",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "chart",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("canvas", {
                    id: "barChart",
                    style: {
                      height: "250px"
                    }
                  })
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "box box-success",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "box-header with-border",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                  className: "box-title",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
                    children: "\u0E01\u0E23\u0E32\u0E1F\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "box-tools pull-right",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                    type: "button",
                    className: "btn btn-box-tool",
                    "data-widget": "collapse",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                      className: "fa fa-minus"
                    })
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "box-body chart-responsive",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "chart",
                  id: "sales-chart",
                  style: {
                    height: "250px"
                  }
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "col-md-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "box box-success",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "box-header with-border",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                  className: "box-title",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
                    children: "\u0E01\u0E23\u0E32\u0E1F\u0E40\u0E07\u0E34\u0E19\u0E02\u0E32\u0E22"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "box-tools pull-right",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                    type: "button",
                    className: "btn btn-box-tool",
                    "data-widget": "collapse",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                      className: "fa fa-minus"
                    })
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "box-body",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "chart",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("canvas", {
                    id: "areaChart",
                    style: {
                      height: "250px"
                    }
                  })
                })
              })]
            })
          })]
        }), feedData.fetching && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "overlay",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
            className: "fa fa-refresh fa-spin"
          })
        })]
      })]
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

}]);
//# sourceMappingURL=resources_js_src_Officer_pages_Profile_Profile_js.js.map