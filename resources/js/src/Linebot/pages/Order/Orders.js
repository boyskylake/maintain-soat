import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { feedDataAction } from "../../redux/actions";

import "datatables.net-dt/css/jquery.dataTables.css";
$.DataTable = require("datatables.net");

const Orders = () => {
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);
    let user = localStorage.getItem("linetoken");
    useEffect(() => {
        // async function feedData() {
        //     await dispatch(
        //         feedDataAction.feedDataPost("/api/v1/linebot/order")
        //     );
        // }
        // feedData();
        $("#example2").DataTable({
            lengthMenu: [
                [10, 25, 50, 100, -1],
                [10, 25, 50, 100, "All"],
            ],
            order: [[0, "desc"]],
            processing: true,
            serverSide: true,
            responsive: true,
            ajax: {
                url: "/api/v1/linebot/order",
                type: "POST",
                headers: {
                    Authorization: "Bearer " + user,
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
            },
            columns: [
                { data: "inform_no" },
                {
                    data: "receive_date",
                    orderable: false,
                },
                {
                    data: "inform_description",
                    orderable: false,
                },
                {
                    data: "status_des",
                    orderable: false,
                },
            ],
        });

    }, [dispatch]);

    // useEffect(() => {
    //     //
    //     // เปิดมาแล้วทำตามคำสั่ง 1 ครั้ง

    //     if (feedData.fetchSuccess) {
    //         $("#example2").DataTable({
    //             serverSide: true,
    //             ajax: {
    //                 url: "/api/v1/officer/Listorder",
    //                 type: "GET",
    //                 headers: {
    //                     Authorization: "Bearer " + user.access_token,
    //                 },
    //             },
    //         });
    //     }
    // }, [feedData]);

    return (
        <div className="content-wrapper">
            <div className="container">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <h1>Orders</h1>
                </section>
                {/* <table>
                    <thead>
                        <tr>
                            <th>inform_no</th>
                            <th>coop_id</th>
                            <th>receive_date</th>
                            <th>inform_description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedData.data &&
                            feedData.data.data &&
                            feedData.data.data.map((val, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{val.inform_no}</td>
                                        <td>{val.coop_id}</td>
                                        <td>{val.receive_date}</td>
                                        <td>{val.inform_description}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table> */}
                   <table
                                    id="example2"
                                    className="table table-bordered table-hover"
                                    style={{
                                        textAlign: "center",
                                    }}
                                >
                                    <thead>
                                        <tr>
                                            <th
                                                style={{
                                                    textAlign: "center",
                                                }}
                                            >
                                                เลขที่
                                            </th>
                                            <th
                                                style={{
                                                    textAlign: "center",
                                                }}
                                            >
                                                วันที่รับแจ้ง
                                            </th>
                                            <th
                                                style={{
                                                    textAlign: "center",
                                                }}
                                            >
                                                รายละเอียด
                                            </th>
                                            <th
                                                style={{
                                                    textAlign: "center",
                                                }}
                                            >
                                                สถานะงาน
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
            </div>
            {/* /.container */}
        </div>
    );
};

export default Orders;
