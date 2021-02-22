import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useForm } from "react-hook-form";

import { feedDataAction } from "../../redux/actions";

import "datatables.net-dt/css/jquery.dataTables.css";
$.DataTable = require("datatables.net");

function Listorder() {
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);

    // const { register, handleSubmit, watch, errors } = useForm();
    // const onSubmit = (data) => {
    //     // console.log(data);
    //     // console.log(coopid);
    // };
    let user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        // async function feedData() {
        //     await dispatch(
        //         feedDataAction.feedDataGet("/api/v1/officer/Listorder")
        //     );
        // }

        $("#example2").DataTable({
            lengthMenu: [
                [10, 25, 50, 100, -1],
                [10, 25, 50, 100, "All"],
            ],
            processing: true,
            serverSide: true,
            responsive: true,
            ajax: {
                url: "/api/v1/officer/Listorder",
                type: "POST",
                headers: {
                    Authorization: "Bearer " + user.access_token,
                },
            },
            columns: [
                { data: "inform_no" },
                { data: "coop_name" },
                {
                    data: "coop_shortname",
                    orderable: false,
                },
                {
                    data: "receiver",
                    orderable: false,
                },
                {
                    data: "receive_date",
                    orderable: false,
                },
            ],
        });

        // feedData();
    }, [user]);

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
                                {/* <table ref={main} /> */}
                                <table
                                    id="example2"
                                    className="table table-bordered table-hover"
                                >
                                    <thead>
                                        <tr>
                                            <th>inform_no</th>
                                            <th>coop_name</th>
                                            <th>coop_shortname</th>
                                            <th>receiver</th>
                                            <th>receive_date</th>
                                        </tr>

                                    </thead>
                                </table>
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
