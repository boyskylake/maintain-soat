import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import select2 from "select2";
import dropzone from "dropzone";

import { useScript } from "../../../../helpers";
import { feedDataAction } from "../../../redux/actions";
import Services from "../../../redux/services/services";
import { useCookies } from "react-cookie";
import { trim } from "jquery";

import Inputmask from "inputmask";

function Step1Component(
    props,
    { setCompleted, completed, setActiveStep, activeStep, step }
) {
    // function Step1Component({ props }) {
    // console.log(props);

    /////dropdown
    const [cookies, setCookie, removeCookie] = useCookies(["pageone"]);

    const services = new Services();

    const ErrorsWord = {
        informer: {
            required: "กรุณาเลือกผู้แจ้ง",
            maxLength: "",
        },
        coopid: {
            required: "กรุณาเลือกสหกรณ์",
            maxLength: "",
        },
        receiver: {
            required: "กรุณาเลือกผู้รับแจ้ง",
            maxLength: "",
        },
    };
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);
    const [confirmSubmit, setconfirmSubmit] = useState(false);
    // const [inputs, setInputs] = useState(["ma_coop"]);
    const [coopid, setCoopid] = useState(null);

    useScript("/officer/dist/js/pages/saveorder.js");

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        // console.log(data);
        let MyBody = {
            ...data,
            _token: window.Laravel.csrfToken,
        };
        const requestOptions = {
            method: "POST",
            data: JSON.stringify(MyBody),
        };
        // console.log(requestOptions);
        services.API("/api/v1/officer/pageone", requestOptions).then((res) => {
            if (res.rc_code === "1") {
                //
                removeCookie("pageone");
                setCookie("pageone", JSON.stringify(res.data));
                alert("Successs");
                // handle Next
                handleComplete();
            } else {
                alert("การเขื่อมต่อไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
            }
        });
        //  dispatch(
        //     feedDataAction.feedDataPost("/api/v1/officer/pageone",MyBody)
        // );
        // console.log(coopid);
        // $('#myModal').modal('show')
    };

    const getUploadParams = () => {
        return { url: "https://httpbin.org/post" };
    };

    const handleChangeStatus = ({ meta }, status) => {
        console.log(status, meta);
    };

    const handleSubmit1 = (files, allFiles) => {
        console.log(files.map((f) => f.meta));
        allFiles.forEach((f) => f.remove());
    };

    useEffect(() => {
        Inputmask().mask(document.querySelectorAll("input"));
        return () => {};
    }, []);
    //data
    useEffect(() => {
        // console.log(watch('coopid'))
        // if (watch('coopid') != null) {
        //     // console.log(document.getElementById("coopid").value)
        //     // if (document.getElementById("coopid").value != null) {
        //     //
        //     document.getElementById("Detail").style.display = "block";
        //     // document.getElementById("coopid").value = "block";
        // }
    }, [watch]);

    useEffect(() => {
        // console.log(coopid);
        if (cookies.pageone && cookies.pageone.coopid != null) {
            setCoopid(cookies.pageone && cookies.pageone.coopid);
            document.getElementById("Detail").style.display = "block";
        }
        // if (coopid != null) {
        //
        // }
        return () => {};
    }, [coopid]);

    $(function () {
        $(document.body).on("change", "#coopid", function () {
            if (coopid == null) {
                // console.log(coopid);
                document.getElementById("Detail").style.display = "block";
                $(".select2").select2();
                // CKEDITOR.replace("editor1");
                //bootstrap WYSIHTML5 - text editor
                // $(".textarea").wysihtml5();
                document.getElementById("informer").disabled = false;
            }

            setCoopid(this.value);
        });
    });

    const handleComplete = () => {
        const newCompleted = new Set(props.completed);
        newCompleted.add(props.step);
        props.setCompleted(newCompleted);
        handleNext();
    };
    const handleNext = () => {
        const newActiveStep = props.activeStep + 1;
        // console.log(newActiveStep)
        props.setActiveStep(newActiveStep);
    };
    // console.log(cookies.pageone && cookies.pageone.receive_date);
    return (
        <div className="mt-10 pt-10 border-t border-gray-200">
            {/* <div className="font-medium text-left">แก้ไข/บันทึก</div> */}
            <div className="grid grid-cols-12 gap-4 row-gap-5 mt-3">
                {/* <form onSubmit={handleSubmit(onSubmit)} autoComplete="false"> */}
                {/* เลขที่รายการ */}
                <div className="intro-y col-span-12 sm:col-span-3">
                    <div className="mb-2 text-left">เลขที่รายการ</div>
                    <input
                        type="text"
                        className="input w-full border flex-1 focus:ring-4 focus:border-indigo-300 focus:outline-none active:outline-none active:border-indigo-300"
                        placeholder="60xxxxxx"
                        disabled
                        name="inform_no"
                        value=""
                        ref={register}
                    />
                </div>
                {/* สหกรณ์ */}
                <div className="intro-y col-span-12 sm:col-span-8">
                    <div className="mb-2 text-left">สหกรณ์ฯ</div>
                    <select data-hide-search="true" className="select2 w-full">
                        <option></option>
                        {feedData.data &&
                            feedData.data.ma_coop &&
                            feedData.data.ma_coop.map((val, i) => {
                                if (
                                    cookies &&
                                    cookies.pageone &&
                                    cookies.pageone.coopid &&
                                    cookies.pageone.coopid == trim(val.coop_id)
                                ) {
                                    // setCoopid(
                                    //     cookies.pageone &&
                                    //         cookies.pageone.coopid
                                    // );
                                }
                                return (
                                    <option
                                        key={i}
                                        value={val.coop_id}
                                        selected={
                                            cookies.pageone &&
                                            cookies.pageone.coopid ==
                                                trim(val.coop_id)
                                                ? true
                                                : false
                                        }
                                    >
                                        {val.coop_id} {val.coop_name}
                                    </option>
                                );
                            })}
                    </select>
                    {/* {" "} */}
                    {errors.coopid?.type === "required" && (
                        <ErrorSpan className="">
                            {ErrorsWord.coopid.required}
                        </ErrorSpan>
                    )}
                </div>
                {/* ผู้รับแจ้ง */}
                <div className="intro-y col-span-12 sm:col-span-4">
                    <div className="mb-2 text-left">ผู้รับแจ้ง</div>
                    <select
                        data-hide-search="true"
                        className="select2 w-full"
                        name="receiver"
                        id="receiver"
                        ref={register({ required: true })}
                    >
                        <option></option>
                        {feedData.data &&
                            feedData.data.ucf_officer &&
                            feedData.data.ucf_officer.map((val, i) => {
                                if (
                                    cookies &&
                                    cookies.pageone &&
                                    cookies.pageone.receiver &&
                                    cookies.pageone.receiver ==
                                        trim(val.officer_id)
                                ) {
                                    // setCoopid(
                                    //     cookies.pageone &&
                                    //         cookies.pageone.coopid
                                    // );
                                }
                                return (
                                    <option
                                        key={i}
                                        value={val.officer_id}
                                        selected={
                                            cookies.pageone &&
                                            cookies.pageone.receiver ==
                                                trim(val.officer_id)
                                                ? true
                                                : false
                                        }
                                    >
                                        {`[${val.officer_id}]`}
                                        &nbsp;&nbsp;
                                        {val.officer_name}
                                        &nbsp;&nbsp;
                                        {val.officer_full_name}
                                    </option>
                                );
                            })}
                    </select>
                </div>
                {/* ผู้แจ้ง */}
                <div className="intro-y col-span-12 sm:col-span-4">
                    <div className="mb-2 text-left">ผู้แจ้ง</div>
                    <select
                        data-hide-search="true"
                        className="select2 w-full"
                        name="informer"
                        id="informer"
                        ref={register({
                            required: true,
                        })}
                    >
                        {/* <option></option> */}
                        {feedData.data &&
                            feedData.data.ucf_customer_contact &&
                            feedData.data.ucf_customer_contact.map((val, i) => {
                                if (watch("coopid") == val.id_pay_to) {
                                    cookies &&
                                        cookies.pageone &&
                                        cookies.pageone.informer &&
                                        cookies.pageone.informer ==
                                            trim(val.contact_no);
                                    return (
                                        <option
                                            key={i}
                                            value={val.contact_no}
                                            selected={
                                                cookies.pageone &&
                                                cookies.pageone.informer ==
                                                    trim(val.contact_no)
                                                    ? true
                                                    : false
                                            }
                                        >
                                            {`[${val.contact_no}]`}
                                            &nbsp;&nbsp;&nbsp;
                                            {val.contract_name}
                                        </option>
                                    );
                                } else {
                                    //
                                }
                            })}
                    </select>
                </div>
                {/* ผู้แก้ไข */}
                <div className="intro-y col-span-12 sm:col-span-4">
                    <div className="mb-2 text-left">ผู้แก้ไข</div>
                    <select
                        data-hide-search="true"
                        className="select2 w-full"
                        name="editor_id"
                        id="editor_id"
                        ref={register({
                            required: true,
                        })}
                    >
                        <option></option>
                        {feedData.data &&
                            feedData.data.ucf_officer &&
                            feedData.data.ucf_officer.map((val, i) => {
                                return (
                                    <option key={i} value={val.officer_id}>
                                        {`[${val.officer_id}]`}
                                        &nbsp;&nbsp;&nbsp;
                                        {val.officer_name}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        {val.officer_full_name}
                                    </option>
                                );
                            })}
                    </select>
                </div>
                {/* วันที่รับแจ้ง */}
                <div className="intro-y col-span-12 sm:col-span-2">
                    <div className="mb-2 text-left">วันที่รับแจ้ง</div>
                    <input
                        type="text"
                        name="receive_date"
                        autoComplete="off"
                        data-mask="99/99/9999"
                        data-inputmask="'mask': '99/99/9999'"
                        className="input w-full border flex-1 focus:ring-4 focus:border-indigo-300 focus:outline-none active:outline-none active:border-indigo-300"
                        ref={register}
                        value={cookies.pageone && cookies.pageone.receive_date}
                    />
                </div>
                {/* เวลานัดหมาย */}
                <div className="intro-y col-span-12 sm:col-span-2">
                    <div className="mb-2 text-left">เวลานัดหมาย</div>
                    <input
                        type="text"
                        name="appointns"
                        autoComplete="off"
                        data-mask="99:99 ถึง 99:99"
                        data-inputmask="'mask': '99:99 ถึง 99:99'"
                        className="text-center input w-full border flex-1 focus:ring-4 focus:border-indigo-300 focus:outline-none active:outline-none active:border-indigo-300"
                        ref={register}
                        value={cookies.pageone && cookies.pageone.receive_date}
                    />
                    {/* {errors.dateRevice && (
                                        <span>This field is required</span>
                                    )} */}
                </div>
                {/* วันที่แล้วเสร็จ */}
                <div className="intro-y col-span-12 sm:col-span-2">
                    <div className="mb-2 text-left">วันที่แล้วเสร็จ</div>
                    <input
                        type="text"
                        name="finished_date_tdate"
                        autoComplete="off"
                        data-mask="99/99/9999"
                        data-inputmask="'mask': '99/99/9999'"
                        className="text-center input w-full border flex-1 focus:ring-4 focus:border-indigo-300 focus:outline-none active:outline-none active:border-indigo-300"
                        ref={register}
                        value={
                            cookies.pageone && cookies.pageone.start_date_tdata
                        }
                    />
                    {/* {errors.dateRevice && (
                                        <span>This field is required</span>
                                    )} */}
                </div>
                {/* วิธีการแก้ไข */}
                <div className="intro-y col-span-12 sm:col-span-6">
                    <div className="mb-2 text-left">วิธีการแก้ไข</div>
                    <div className="flex flex-col sm:flex-row mt-2">
                        <div className="form-check mr-2">
                            <label>
                                <input
                                    // id="radio-switch-4"
                                    className="form-check-input"
                                    type="radio"
                                    name="r3"
                                    ref={register}
                                />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                ไม่ระบุ&nbsp;&nbsp;&nbsp;&nbsp;
                            </label>
                            <label>
                                <input
                                    // id="radio-switch-4"
                                    className="form-check-input"
                                    type="radio"
                                    name="r3"
                                    ref={register}
                                />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                Telephone&nbsp;&nbsp;&nbsp;&nbsp;
                            </label>
                            <label>
                                <input
                                    // id="radio-switch-4"
                                    className="form-check-input"
                                    type="radio"
                                    name="r3"
                                    ref={register}
                                />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                Modem&nbsp;&nbsp;&nbsp;&nbsp;
                            </label>
                            <label>
                                <input
                                    // id="radio-switch-4"
                                    className="form-check-input"
                                    type="radio"
                                    name="r3"
                                    ref={register}
                                />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                Onsite&nbsp;&nbsp;&nbsp;&nbsp;
                            </label>
                        </div>
                    </div>
                </div>
                {/* ประเภทงาน */}
                <div className="intro-y col-span-12 sm:col-span-3">
                    <div className="mb-2 text-left">ประเภทงาน</div>
                    <select
                        data-hide-search="true"
                        className="select2 w-full"
                        name="inform_type"
                        id="inform_type"
                        ref={register}
                    >
                        <option></option>
                        {feedData.data &&
                            feedData.data.ucf_inform_type &&
                            feedData.data.ucf_inform_type.map((val, i) => {
                                return (
                                    <option key={i} value={val.inform_type}>
                                        {`[${val.inform_type}]`}
                                        &nbsp;&nbsp;&nbsp;
                                        {val.type_desc}
                                    </option>
                                );
                            })}
                    </select>
                </div>
                {/* SA */}
                <div className="intro-y col-span-12 sm:col-span-3">
                    <div className="mb-2 text-left">SA</div>
                    <select
                        data-hide-search="true"
                        className="select2 w-full"
                        name="sa_id"
                        id="sa_id"
                        ref={register}
                    >
                        <option></option>
                        {feedData.data &&
                            feedData.data.ucf_officer &&
                            feedData.data.ucf_officer.map((val, i) => {
                                return (
                                    <option key={i} value={val.officer_id}>
                                        {`[${val.officer_id}]`}
                                        &nbsp;&nbsp;&nbsp;
                                        {val.officer_name}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        {val.officer_full_name}
                                    </option>
                                );
                            })}
                    </select>
                </div>
                {/* dropzone */}
                <div className="intro-y col-span-12 sm:col-span-12">
                    <div className="grid grid-cols-12 gap-6 mt-5">
                    <div className="intro-y col-span-12 lg:col-span-12">
                            <div className="intro-y box mt-5">
                                {/* <div className="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200">
                                <h2 className="font-medium text-base mr-auto">
                                    Multiple File Upload
                                </h2>
                                <div className="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0">
                                    <div className="mr-3">Show code</div>
                                    <input data-target="#multiple-file-upload" className="show-code input input--switch border" type="checkbox" />
                                </div>
                                </div> */}
                                <div className="p-5" id="multiple-file-upload">
                                <div className="preview">
                                    <form action="/file-upload" className="dropzone border-gray-200 border-dashed">
                                    <div className="fallback">
                                        <input name="file" type="file" multiple />
                                    </div>
                                    <div className="dz-message" data-dz-message>
                                        <div className="text-lg font-medium">Drop files here or click to upload.</div>
                                        <div className="text-gray-600"> This is just a demo dropzone. Selected files are <span className="font-medium">not</span> actually uploaded. </div>
                                    </div>
                                    </form>
                                </div>
                                <div className="source-code hidden">
                                    <button data-target="#copy-multiple-file-upload" className="copy-code button button--sm border flex items-center text-gray-700"> <i data-feather="file" className="w-4 h-4 mr-2" /> Copy code </button>
                                    <div className="overflow-y-auto h-64 mt-3">
                                    <pre className="source-preview" id="copy-multiple-file-upload"> <code className="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"> HTMLOpenTagform action="/file-upload" class="dropzone border-gray-200 border-dashed"HTMLCloseTag HTMLOpenTagdiv class="fallback"HTMLCloseTag HTMLOpenTaginput name="file" type="file" multiple/HTMLCloseTag HTMLOpenTag/divHTMLCloseTag HTMLOpenTagdiv class="dz-message" data-dz-messageHTMLCloseTag HTMLOpenTagdiv class="text-lg font-medium"HTMLCloseTagDrop files here or click to upload.HTMLOpenTag/divHTMLCloseTag HTMLOpenTagdiv class="text-gray-600"HTMLCloseTag This is just a demo dropzone. Selected files are HTMLOpenTagspan class="font-medium"HTMLCloseTagnotHTMLOpenTag/spanHTMLCloseTag actually uploaded. HTMLOpenTag/divHTMLCloseTag HTMLOpenTag/divHTMLCloseTag HTMLOpenTag/formHTMLCloseTag </code> </pre>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                        </div>
                    </div>

                <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                    <button
                        type="submit"
                        className="button w-36 justify-center block bg-theme-1 text-white ml-2"
                    >
                        ดำเนินการต่อ
                    </button>
                    {/* <button className="button w-24 justify-center block bg-theme-1 text-white ml-2">
                        Next
                    </button> */}
                </div>
                {/* </form> */}
            </div>
        </div>
    );
}
export default Step1Component;

const ErrorSpan = ({ children, className }) => {
    return (
        <span className={`text-red-500 text-xl ${className && className} `}>
            {" "}
            {children && children}
        </span>
    );
};
