import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";

import { useScript } from "../../../helpers";
import { feedDataAction } from "../../redux/actions";

function Home() {
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);

    // const [inputs, setInputs] = useState(["ma_coop"]);
    const [coopid, setCoopid] = useState(null);
    // <!-- jvectormap  -->
    useScript("/officer/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js");
    useScript("/officer/plugins/jvectormap/jquery-jvectormap-world-mill-en.js");
    useScript("/officer/dist/js/pages/dashboard2.js");

    useEffect(() => {
        async function feedData() {
            await dispatch(feedDataAction.feedDataGet("/api/v1/officer/Home"));
        }
        feedData();
    }, [dispatch]);

    useEffect(() => {
        if (feedData && feedData.data) {
            $(function () {
                let grahp1 = feedData.data.grahp1.map(function (val, i) {
                    if (val.category_des == null) {
                        return {
                            label: "other",
                            value: val.value,
                        };
                    } else {
                        return {
                            label: val.category_des,
                            value: val.value,
                        };
                    }
                });

//-------------------------------กราฟย้อนหลังปัจจุบัน 7 ปี
                let graponeH = [];
                feedData.data.grahp2.map(function (val, i) {
                    if (val.hardware == null) {
                        graponeH.push(0);
                    } else {
                        graponeH.push(val.hardware);
                    }

                });
                let graponeO = [];
                feedData.data.grahp2.map(function (val, i) {
                    if (val.other == null) {
                        graponeO.push(0);
                    } else {
                        graponeO.push(val.other);
                    }

                });
                let graponeS = [];
                feedData.data.grahp2.map(function (val, i) {
                    if (val.software == null) {
                        graponeS.push(0);
                    } else {
                        graponeS.push(val.software);
                    }

                });
                let graponeY = [];
                feedData.data.grahp2.map(function (val, i) {
                    if (val.hardware != null) {
                        graponeY.push(val.years);
                    } else {
                        graponeY.push(val.years);
                    }

                });


                var areaChartData1 = {
                    labels  : graponeY,
                    datasets: [

                        {
                        label               : 'Hardware',
                        data                : graponeH
                        },
                        {
                            label               : 'Software',
                            data                : graponeS
                            },
                        {
                            label               : 'อื่นๆ',
                            data                : graponeO
                            },
                    ]
                    }


                    var barChartCanvas                   = $('#barChart').get(0).getContext('2d')
                    var barChart                         = new Chart(barChartCanvas)
                    var barChartData                     = areaChartData1
                    barChartData.datasets[0].fillColor   = '#f10303'
                    barChartData.datasets[0].strokeColor = '#f10303'
                    barChartData.datasets[0].pointColor  = '#f10303'
                    barChartData.datasets[1].fillColor   = '#19caf3'
                    barChartData.datasets[1].strokeColor = '#19caf3'
                    barChartData.datasets[1].pointColor  = '#19caf3'
                    barChartData.datasets[2].fillColor   = '#f88f58'
                    barChartData.datasets[2].strokeColor = '#f88f58'
                    barChartData.datasets[2].pointColor  = '#f88f58'
                    var barChartOptions                  = {
                    responsive              : true,

                    }

                    barChartOptions.datasetFill = false
                    barChart.Bar(barChartData, barChartOptions)

//-------------------------------กราฟย้อนหลังปัจจุบัน 7 ปี

//-------------------------------กราฟเงินขาย

                let grapbew = [];
                feedData.data.grahp3.map(function (val, i) {
                    if (val.hardware == null) {
                        grapbew.push(0);
                    } else {
                        grapbew.push(val.hardware);
                    }

                });

                let grapbew2 = [];
                feedData.data.grahp3.map(function (val, i) {
                    if (val.hardware == null) {
                        grapbew2.push(0);
                    } else {
                        grapbew2.push(val.software);
                    }

                });

                let grapbew3 = [];
                feedData.data.grahp3.map(function (val, i) {
                    if (val.hardware != null) {
                        grapbew3.push(val.years);
                    } else {
                        grapbew3.push(val.years);
                    }

                });



                var areaChartData = {
                    labels  : grapbew3,
                    datasets: [
                        {
                        label               : 'Software',
                        fillColor           : '#8d90fd',
                        pointColor          : '#fcff46',
                        pointStrokeColor    : '#c1c7d1',
                        pointHighlightFill  : '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data                : grapbew2
                        },
                        {
                        label               : 'Hardware',
                        fillColor           : '#ffb2b2',
                        pointColor          : '#3effb8',
                        pointStrokeColor    : 'rgba(60,141,188,1)',
                        pointHighlightFill  : '#fff',
                        pointHighlightStroke: 'rgba(60,141,188,1)',
                        data                : grapbew
                        }
                    ]
                    }

                    var areaChartCanvas = $('#areaChart').get(0).getContext('2d')
                    var areaChart = new Chart(areaChartCanvas)

                    var areaChartOptions = {
                    responsive              : true
                    }

                    areaChart.Line(areaChartData, areaChartOptions)

                    
//-------------------------------กราฟเงินขาย


                    console.log(grahp1)
                new Morris.Donut({
                    element: "sales-chart",
                    resize: true,
                    colors: ["#f10303", "#19caf3" , "#f88f58", "#f88f58"],
                    data: grahp1,
                    hideHover: "auto",
                });

                // var bar = document.getElementById("bar-chart");
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
        return () => {};
    }, [feedData]);

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <Helmet>
                <script src="./bower_components/raphael/raphael.min.js"></script>
                <script src="./bower_components/morris.js/morris.min.js"></script>
                <link
                    rel="stylesheet"
                    href="./bower_components/morris.js/morris.css"
                ></link>
            </Helmet>
            <section className="content-header">
                <h1>
                    Dashboard
                    <small>Version 2.0</small>
                </h1>
                <ol className="breadcrumb">
                    <li>
                        <a href="#">
                            <i className="fa fa-dashboard" /> Home
                        </a>
                    </li>
                    <li className="active">Dashboard</li>
                </ol>
            </section>
            {/* Main content */}
            <section className="content">



                {/* Info boxes */}

                <div className="row">
                    {feedData.data &&
                        feedData.data.ma_coop &&
                        feedData.data.ma_coop.map((val, i) => {
                            return (
                                <div key={i}>
                                    <div className="col-md-3 col-sm-6 col-xs-12">
                                        <div className="small-box bg-aqua">
                                            <div className="inner">
                                                <h3>{val.countcoop}</h3>
                                                <p>จำนวนสหกรณ์ทั้งหมด</p>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-folder-open"></i>
                                            </div>
                                            <a
                                                href="#"
                                                className="small-box-footer"
                                            >
                                                รายละเอียด{" "}
                                                <i className="fa fa-arrow-circle-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-12">
                                        <div className="small-box bg-purple">
                                            <div className="inner">
                                                <h3>{val.contract_remark}</h3>
                                                <p>จำนวนสัญญาทั้งหมด</p>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-folder-open"></i>
                                            </div>
                                            <a
                                                href="#"
                                                className="small-box-footer"
                                            >
                                                รายละเอียด{" "}
                                                <i className="fa fa-arrow-circle-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-3 col-sm-6 col-xs-12">
                                        <div className="small-box bg-aqua">
                                            <div className="inner">
                                                <h3>{val.countcoop}</h3>
                                                <p>ยอดทั้งหมด</p>
                                            </div>
                                            <div className="icon">
                                                <i className="fa fa-folder-open"></i>
                                            </div>
                                            <a
                                                href="#"
                                                className="small-box-footer"
                                            >
                                                รายละเอียด{" "}
                                                <i className="fa fa-arrow-circle-right"></i>
                                            </a>
                                    </div>
                                </div> */}
                                </div>
                            );
                        })}
                </div>


                <div className="box box-default">




                <div className="row">

                {/* <div className="col-md-6">
                    <div className="box box-success">
                        <div className="box-header with-border">
                            <h3 className="box-title">
                                <strong>กราฟย้อนหลังปัจจุบัน 7 ปี</strong>
                            </h3>

                            <div className="box-tools pull-right">
                                <button
                                    type="button"
                                    className="btn btn-box-tool"
                                    data-widget="collapse"
                                >
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="box-body chart-responsive">
                            <div
                                className="chart"
                                id="bar-chart"
                                style={{ height: "250px" }}
                            ></div>
                        </div>
                    </div>
                </div> */}


                <div className="col-md-6">
                    <div className="box box-success">
                        <div className="box-header with-border">
                            <h3 className="box-title">
                                <strong>กราฟย้อนหลังปัจจุบัน 7 ปี</strong>
                            </h3>

                            <div className="box-tools pull-right">
                                <button
                                    type="button"
                                    className="btn btn-box-tool"
                                    data-widget="collapse"
                                >
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="chart">
                                <canvas id="barChart" style={{ height: "250px" }}></canvas>
                            </div>
                            </div>
                    </div>
                </div>




                <div className="col-md-6">
                    <div className="box box-success">
                        <div className="box-header with-border">
                            <h3 className="box-title">
                                <strong>กราฟสินค้าทั้งหมด</strong>
                            </h3>

                            <div className="box-tools pull-right">
                                <button
                                    type="button"
                                    className="btn btn-box-tool"
                                    data-widget="collapse"
                                >
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="box-body chart-responsive">
                            <div
                                className="chart"
                                id="sales-chart"
                                style={{ height: "250px" }}
                            ></div>
                        </div>
                    </div>
                </div>





                <div className="col-md-12">
                    <div className="box box-success">
                        <div className="box-header with-border">
                            <h3 className="box-title">
                                <strong>กราฟเงินขาย</strong>
                            </h3>

                            <div className="box-tools pull-right">
                                <button
                                    type="button"
                                    className="btn btn-box-tool"
                                    data-widget="collapse"
                                >
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                        </div>

                        <div className="box-body">
                            <div className="chart">
                                <canvas id="areaChart" style={{ height: "250px" }}></canvas>
                            </div>
                            </div>

                    </div>
                </div>




                </div>


                                {feedData.fetching && (
                        <div className="overlay">
                            <i className="fa fa-refresh fa-spin" />
                        </div>
                    )}

                </div>

            </section>
        </div>
    );
}
export default Home;
