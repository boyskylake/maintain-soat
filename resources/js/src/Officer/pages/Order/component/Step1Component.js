import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import select2 from "select2";

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
        <div className="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200">
            {/* <div className="font-medium text-left">แก้ไข/บันทึก</div> */}
            <div className="grid grid-cols-12 gap-4 row-gap-5 mt-3">
                {/* <form onSubmit={handleSubmit(onSubmit)} autoComplete="false"> */}
                <div className="intro-y col-span-12 sm:col-span-2">
                    <div className="mb-2 text-left">เลขที่รายการ</div>
                    <input
                        type="text"
                        className="input w-full border-2 flex-1 focus:ring-4 focus:border-indigo-300 focus:outline-none active:outline-none active:border-indigo-300"
                        placeholder="60xxxxxx"
                        disabled
                        name="inform_no"
                        value=""
                        ref={register}
                    />
                </div>

                <div className="intro-y col-span-12 sm:col-span-6">
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
                <div className="intro-y col-span-12 sm:col-span-6">
                    <div className="mb-2">Subject</div>
                    <input
                        type="text"
                        className="input w-full border flex-1"
                        placeholder="Important Meeting"
                    />
                </div>
                <div className="intro-y col-span-12 sm:col-span-6">
                    <div className="mb-2">Has the Words</div>
                    <input
                        type="text"
                        className="input w-full border flex-1"
                        placeholder="Job, Work, Documentation"
                    />
                </div>
                <div className="intro-y col-span-12 sm:col-span-6">
                    <div className="mb-2">Doesn't Have</div>
                    <input
                        type="text"
                        className="input w-full border flex-1"
                        placeholder="Job, Work, Documentation"
                    />
                </div>
                <div className="intro-y col-span-12 sm:col-span-6">
                    <div className="mb-2">Size</div>
                    <select className="input w-full border flex-1">
                        <option>10</option>
                        <option>25</option>
                        <option>35</option>
                        <option>50</option>
                    </select>
                </div>
                <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                    <button className="button w-24 justify-center block bg-gray-200 text-gray-600">
                        Previous
                    </button>
                    <button className="button w-24 justify-center block bg-theme-1 text-white ml-2">
                        Next
                    </button>
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
