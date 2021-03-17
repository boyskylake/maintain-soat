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
                        '<div class="table-report__action w-full ">' +
                        '<div class="flex justify-center items-center">' +
                        '<button href=" " title="ดู" class="font-light button rounded-8 bg-blue-200 hover:bg-blue-300 text-black w-16 mr-1 mb-2" style=" fontFamily: Kanit;"><i class="fas fa-eye"></i> <span class="hidden-xs hidden-sm"></span></button>' +
                        '<button href=" " title="แก้ไข" class="font-light button rounded-8 bg-green-200 hover:bg-green-300 text-black w-16 mr-1 mb-2" style=" fontFamily: Kanit;"><i class="fas fa-edit pl-1"></i> <span class="hidden-xs hidden-sm"></span></button>' +
                        '<button href=" " title="ลบ" class="font-light button rounded-8 bg-red-200 hover:bg-red-300 text-black w-16 mr-1 mb-2" style="fontFamily: Kanit;"><i class="fas fa-trash-alt" data-toggle="modal" data-target="#delete-confirmation-modal"></i> <span class="hidden-xs hidden-sm"></span></button></div></div>',
                },
            ],
        });

        // $("#example2").DataTable({
        //     responsive: true
        // });
    }, [user]);

    return (
        <Fragment>
         <div className="flex">
             <div className="content">
            <h2
                className="intro-y text-lg mt-10 font-light"
                style={{ fontFamily: "Kanit" }}
            >
                Order ทั้งหมด
            </h2>
            <div className="grid grid-cols-12 gap-6 mt-5 w-full">
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
                    <table
                        className="table table-report datatable -mt-2  text-center"
                        id="example2"
                        style={{ fontFamily: "Kanit" }}
                    >
                        <thead>
                            {feedData.fetching && <Lodingicon />}
                            <tr>
                                <th className="whitespace-no-wrap">เลขที่</th>
                                <th className="whitespace-no-wrap">สหกรณ์</th>
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
                    {/* BEGIN: Delete Confirmation Modal */}
                    <div className="modal" id="delete-confirmation-modal">
                    <div className="modal__content">
                        <div className="p-5 text-center">
                        <i data-feather="x-circle" className="w-16 h-16 text-theme-6 mx-auto mt-3" />
                        <div className="text-3xl mt-5">Are you sure?</div>
                        <div className="text-gray-600 mt-2">Do you really want to delete these records? This process cannot be undone.</div>
                        </div>
                        <div className="px-5 pb-8 text-center">
                        <button type="button" data-dismiss="modal" className="button w-24 border text-gray-700 mr-1">Cancel</button>
                        <button type="button" className="button w-24 bg-theme-6 text-white">Delete</button>
                        </div>
                    </div>
                    </div>
                    {/* END: Delete Confirmation Modal */}
                    </div>
                    </div>
                </div>
        </Fragment>
    );
}

export default Listorder;
