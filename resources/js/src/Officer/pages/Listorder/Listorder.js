import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useForm } from "react-hook-form";

import { feedDataAction } from "../../redux/actions";

import "datatables.net-dt/css/jquery.dataTables.css";
$.DataTable = require("datatables.net");

function Listorder() {
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);
    const [tableloading, settableloading] = useState(true)
    // const { register, handleSubmit, watch, errors } = useForm();
    // const onSubmit = (data) => {
    //     // console.log(data);
    //     // console.log(coopid);
    // };

    useEffect(() => {
        async function feedData() {
            await dispatch(
                feedDataAction.feedDataGet("/api/v1/officer/Listorder")
            );
        }
        // $("#example2").DataTable({

        // });

        feedData();
    }, [dispatch]);

    useEffect(() => {
        if (feedData.data && feedData.data.infrom && feedData.data.infrom[0]) {
            $(document).ready(function () {
                $("#example2").DataTable();
            });
            settableloading(false)

        }
    }, [feedData]);

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <h1>
                    Data Tables
                    <small>advanced tables</small>
                </h1>
                <ol className="breadcrumb">
                    <li>
                        <a href="#">
                            <i className="fa fa-dashboard" /> Home
                        </a>
                    </li>
                    <li>
                        <a href="#">Tables</a>
                    </li>
                    <li className="active">Data tables</li>
                </ol>
            </section>
            {/* Main content */}
            <section className="content">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                            <div className="box-header">
                                <h3 className="box-title">Hover Data Table</h3>
                            </div>
                            {/* /.box-header */}
                            <div className="box-body">


                                    {!tableloading &&(
                                <table
                                    id="example2"
                                    className="display"
                                    style={{ width: "100%" }}
                                >
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>
                                    </thead>
                                    <tbody>



                                        {feedData.data &&
                                            feedData.data.infrom &&
                                            feedData.data.infrom.map(
                                                (val, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td>{val.inform_no}</td>
                                                            <td>{val.coop_shortname}</td>
                                                            <td>{val.editor_id}</td>
                                                            <td>{val.editor_id}</td>
                                                            <td>{val.editor_id}</td>
                                                            <td>{val.editor_id}</td>

                                                        </tr>
                                                    );
                                                }
                                            )}
                                            <tr>
                                            <td>Tiger Nixon</td>
                                            <td>System Architect</td>
                                            <td>Edinburgh</td>
                                            <td>61</td>
                                            <td>2011/04/25</td>
                                            <td>$320,800</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>
                                    </tfoot>
                                </table>
                                )}
                                {/* )} */}
                            </div>
                            {feedData.fetching && (
                                <div className="overlay">
                                    <i className="fa fa-refresh fa-spin" />
                                </div>
                            )}
                            {/* /.box-body */}
                        </div>
                    </div>
                    {/* /.col */}
                </div>
                {/* /.row */}
            </section>
            {/* /.content */}
        </div>
    );
}

export default Listorder;
