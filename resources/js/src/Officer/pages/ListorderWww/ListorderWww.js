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
                        '<div class="table-report__action w-56  ">' + "</div>",
                },
            ],
        });

        // $("#example2").DataTable({
        //     responsive: true
        // });
    }, [user]);

    return (
        <Fragment>
            <h2
                className="intro-y text-lg mt-10 font-light"
                style={{ fontFamily: "Kanit" }}
            >
                Order ทั้งหมด
            </h2>
            <div className="grid grid-cols-12 gap-6 mt-5">
                <div className="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap items-center mt-2">
                    <button className="button text-white bg-theme-1 shadow-md mr-2">
                        Add New Product
                    </button>
                    <div className="dropdown relative">
                        <button className="dropdown-toggle button px-2 box text-gray-700">
                            <span className="w-5 h-5 flex items-center justify-center">
                                {" "}
                                <i
                                    className="w-4 h-4"
                                    data-feather="plus"
                                />{" "}
                            </span>
                        </button>
                        <div className="dropdown-box mt-10 absolute w-40 top-0 left-0 z-20">
                            <div className="dropdown-box__content box p-2">
                                <a
                                    href
                                    className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                                >
                                    {" "}
                                    <i
                                        data-feather="printer"
                                        className="w-4 h-4 mr-2"
                                    />{" "}
                                    Print{" "}
                                </a>
                                <a
                                    href
                                    className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                                >
                                    {" "}
                                    <i
                                        data-feather="file-text"
                                        className="w-4 h-4 mr-2"
                                    />{" "}
                                    Export to Excel{" "}
                                </a>
                                <a
                                    href
                                    className="flex items-center block p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                                >
                                    {" "}
                                    <i
                                        data-feather="file-text"
                                        className="w-4 h-4 mr-2"
                                    />{" "}
                                    Export to PDF{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BEGIN: Data List */}
                <div className="intro-y datatable-wrapper col-span-12 overflow-auto lg:overflow-visible">
                    <table className="table table-report datatable -mt-2  text-center "id="example2" style={{ fontFamily: "Kanit"}}>
                        <thead>
                            {feedData.fetching && <Lodingicon />}
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