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

                new Morris.Donut({
                    element: "sales-chart",
                    resize: true,
                    colors: ["#fff81f", "#f10303", "#19caf3", "#fff81f"],
                    data: grahp1,
                    hideHover: "auto",
                });

                // var bar = document.getElementById("bar-chart");
                new Morris.Bar({
                    element: "bar-chart",
                    resize: true,
                    data: feedData.data.grahp2,
                    barColors: ["#f10303", "#19caf3", "#fff81f"],
                    xkey: "years",
                    ykeys: ["software", "hardware", "other"],
                    labels: ["Software", "Hardware", "อื่นๆ"],
                    hideHover: "auto",
                });
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

                {feedData.fetching && (
                    <div className="overlay">
                        <i className="fa fa-refresh fa-spin" />
                    </div>
                )}

                <div className="col-md-6">
                    <div className="box box-success">
                        <div className="box-header with-border">
                            <h3 className="box-title">
                                <strong>กราฟรายปี</strong>
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
                                style={{ height: "300px" }}
                            ></div>
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
                                style={{ height: "300px" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home;
