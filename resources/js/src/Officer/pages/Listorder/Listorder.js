import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

// import "datatables.net-dt/css/jquery.dataTables.css";

import Lodingicon from "../../components/utils/Lodingicon";

// $.DataTable = require("datatables.net");

import dt from "datatables.net";
import dtResponsive from "datatables.net-responsive-dt";
import { useState } from "react";

function Listorder() {
    // const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);

    // const { register, handleSubmit, watch, errors } = useForm();
    // const onSubmit = (data) => {
    //     // console.log(data);
    //     // console.log(coopid);
    // };

    let user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        $("#example2").DataTable({
            lengthMenu: [
                [10, 25, 50, 100, -1],
                [10, 25, 50, 100, "All"],
            ],
            order: [[0, "desc"]],
            // pagingType: "simple",
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
                // { data: "coop_id" },
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
                // {
                //     data: "express_status",
                //     orderable: false,
                // },
                {
                    data: "name_status_des",
                    orderable: false,
                },
                {
                    data: null,
                    // className: "center",
                    defaultContent:
                        '<div style="padding-right: 30px;"><a href=" " title="ลบ" class="btn btn-sm btn-danger pull-right delete style="margin-right: 5px; "><i class="fa fa-trash-o"></i><span class="hidden-xs hidden-sm"> ลบ</span></a>' +
                        '<a href=" " title="แก้ไข" class="btn btn-sm btn-warning pull-right edit" style="margin-right: 5px;"><i class="fa fa-trash-o"></i> <span class="hidden-xs hidden-sm">แก้ไข</span></a></div>' +
                        '<a href=" " title="View" class="btn btn-sm btn-primary  pull-right view" style="margin-right: 5px;"><i class="fa fa-search"></i> <span class="hidden-xs hidden-sm">View</span></a>',
                },
            ],
        });

        // $("#example2").DataTable({
        //     responsive: true
        // });
    }, [user]);

    return (
        <Fragment>
        <div className="content-wrapper">
                {/* BEGIN: Data List */}
                <div className="intro-y datatable-wrapper col-span-12 overflow-auto lg:overflow-visible">
                    <table className="table table-report datatable -mt-2 text-center" id="example2" style={{ fontFamily: "Kanit" }}>
                        <thead>
                            <tr>
                                <th className="whitespace-no-wrap">เลขที่</th>
                                <th className="whitespace-no-wrap">
                                สหกรณ์
                                </th>
                                <th className="text-center whitespace-no-wrap">
                                วันที่รับแจ้ง
                                </th>
                                <th className="text-center whitespace-no-wrap">
                                ผู้รับแจ้ง
                                </th>
                                <th className="text-center whitespace-no-wrap">
                                สถานะงาน
                                </th>
                                <th className="text-center whitespace-no-wrap">
                                Action
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
                {/* END: Data List */}
            </div>
        </Fragment>
    );
}

export default Listorder;
