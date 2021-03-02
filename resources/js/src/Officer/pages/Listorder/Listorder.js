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
            order:[[0,'desc']],
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
                { data: "coop_id" },
                {
                    data: "coop_shortname",
                    orderable: false,
                },
                {
                    data: "receive_date",
                    orderable: false,
                },
                {
                    data: "namereceiver",
                    orderable: false,
                },
                {
                    data: "express_status",
                    orderable: false,
                },
                {
                    data: "name_status_des",
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
                   ดู order ทั้งหมด
                    {/* <small>advanced tables</small> */}
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
                                <h3 className="box-title">รายการ Order ทั้งหหมด</h3>
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
                                            <th>เลขที่</th>
                                            <th>เลขสหกรณ์</th>
                                            <th>สหกรณ์</th>
                                            <th>วันที่รับแจ้ง</th>
                                            <th>ผู้รับแจ้ง</th>
                                            <th>ประเภทงาน</th>
                                            <th>สถานะงาน</th>
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
