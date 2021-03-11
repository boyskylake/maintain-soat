import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
        }
    };
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);
    const [confirmSubmit, setconfirmSubmit] = useState(false);
    // const [inputs, setInputs] = useState(["ma_coop"]);
    const [coopid, setCoopid] = useState(null);
    // useScript("/officer/dist/js/pages/saveorder.js");
    useScript("/officer/dist/js/pages/saveorder.js");
    // useScript("/officer/bower_components/ckeditor/ckeditor.js");
    // useScript(
    //     "/officer/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"
    // );

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


useEffect(() => {
    Inputmask().mask(document.querySelectorAll("input"));
    return () => {

    }
}, [])
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
        if(cookies.pageone && cookies.pageone.coopid !=null)
        {
            setCoopid(cookies.pageone && cookies.pageone.coopid)
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
                // $(".select2").select2();
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
    console.log(cookies.pageone&&cookies.pageone.receive_date);
    return (
        <div className="box-body">
            <div className="box-header">
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="false">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>เลขที่รายการ</label>
                                <div
                                    className="input-group"
                                    style={{
                                        border: "1.5px solid #3c8dbc",
                                        borderRadius: 5,
                                    }}
                                >
                                    <div className="input-group-addon">
                                        <i className="fa fa-reorder" />
                                    </div>
                                    <input
                                        readOnly={true}
                                        type="text"
                                        name="inform_no"
                                        className="form-control"
                                        value=""
                                        ref={register}
                                    />
                                </div>
                            </div>
                            <div className="form-group receiver">
                                <label>ผู้รับแจ้ง</label>
                                <select
                                    name="receiver"
                                    id="receiver"
                                    className={"form-control select2"}
                                    ref={register({ required: true })}
                                    // required
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
                                                        cookies.pageone
                                                            .receiver ==
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
                                {errors.receiver?.type === "required" && (
                                        <ErrorSpan className="">
                                            {ErrorsWord.receiver.required}
                                        </ErrorSpan>
                                    )}
                            </div>

                            <div className="form-group">
                                <label>วันที่รับแจ้ง</label>
                                <div
                                    className="input-group"
                                    style={{
                                        border: "1.5px solid #3c8dbc",
                                        borderRadius: 2,
                                    }}
                                >
                                    <div className="input-group-addon">
                                        <i className="fa fa-calendar" />
                                    </div>
                                    
                                    <input
                                        type="text"
                                        name="receive_date"
                                        className="form-control"
                                        autoComplete="off"
                                        data-mask="99/99/9999"
                                        data-inputmask="'mask': '99/99/9999'"
                                        ref={register}
                                        value={cookies.pageone&&cookies.pageone.receive_date}
                                    />
                                    
                                </div>
                            </div>

                            <div className="form-group">
                                <label>
                                    <b>วันที่นัดหมาย</b>
                                </label>
                                <div
                                    className="input-group"
                                    style={{
                                        border: "1.5px solid blue",
                                        borderRadius: 2,
                                    }}
                                >
                                    <div className="input-group-addon">
                                        <i className="fa fa-calendar" />
                                    </div>
                                    <input
                                        type="text"
                                        name="appointment_date"
                                        className="form-control"
                                        data-mask="99/99/9999"
                                        data-inputmask="'mask': '99/99/9999'"
                                        ref={register}
                                        value={cookies.pageone&&cookies.pageone.start_date_tdata}
                                        autoComplete="off"
                                       
                                    />
                                </div>
                            </div>
                        </div>
                        {/* /.col */}
                        <div className="col-md-9">
                            <div className="form-group coopid">
                                <label>สหกรณ์ฯ</label>
                                <select
                                    name="coopid"
                                    id="coopid"
                                    className="form-control select2"
                                    ref={register({
                                         required: true
                                    })}
                                    // required
                                >
                                    <option></option>
                                    {feedData.data &&
                                        feedData.data.ma_coop &&
                                        feedData.data.ma_coop.map((val, i) => {
                                            if (
                                                cookies &&
                                                cookies.pageone &&
                                                cookies.pageone.coopid &&
                                                cookies.pageone.coopid ==
                                                    trim(val.coop_id)
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
                                                        cookies.pageone
                                                            .coopid ==
                                                            trim(val.coop_id)
                                                            ? true
                                                            : false
                                                    }
                                                >
                                                    {val.coop_id}{" "}
                                                    {val.coop_name}
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
                            <div className="col-md-6">
                                <div className="form-group receiver">
                                    <label>ผู้แจ้ง</label>
                                    <select
                                        name="informer"
                                        id="informer"
                                        className="form-control select2"
                                        ref={register({
                                             required: true
                                        })}
                                        // required
                                    >
                                        {/* <option></option> */}
                                        {feedData.data &&
                                            feedData.data
                                                .ucf_customer_contact &&
                                            feedData.data.ucf_customer_contact.map(
                                                (val, i) => {
                                                 if (watch("coopid") == val.id_pay_to) {
                                                    cookies &&
                                                    cookies.pageone &&
                                                    cookies.pageone.informer &&
                                                    cookies.pageone.informer ==
                                                    trim(val.contact_no)
                                                    return (
                                                        <option
                                                            key={i}
                                                            value={val.contact_no}
                                                            selected={
                                                                cookies.pageone &&
                                                                cookies.pageone.informer == trim(val.contact_no)
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
                                    {/* {" "} */}
                                    {errors.informer?.type === "required" && (
                                        <ErrorSpan className="">
                                            {/* {console.log('ddddd')} */}
                                            {ErrorsWord.informer.required}
                                        </ErrorSpan>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label>เอกสารอ้างอิง</label>
                                    <input
                                        type="text"
                                        name="ref_doc_no"
                                        className="form-control"
                                        autoComplete="off"
                                        style={{
                                            border: "1.5px solid #3c8dbc",
                                            borderRadius: 2,
                                        }}
                                        ref={register({
                                            // required: true,
                                        })}
                                    />
                                    {errors.doc_make && (
                                        <span>This field is required</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label>เวลานัดหมาย</label>
                                    <div
                                        className="input-group"
                                        style={{
                                            border: "1.5px solid blue",
                                            borderRadius: 2,
                                        }}
                                    >
                                        <div className="input-group-addon">
                                            <i className="fa fa-calendar" />
                                        </div>
                                        <input
                                            type="text"
                                            name="appointns"
                                            className="form-control pull-right"
                                            // id="Time-mask"
                                            // data-inputmask="'alias': 'HH:mm -  HH:mm'"
                                              data-mask="99:99 - 99:99"
                                              data-inputmask="'mask': '99:99 - 99:99'"
                                            // data-mask
                                            autoComplete="off"
                                            ref={register({
                                                // required: true,
                                            })}
                                        />
                                        {errors.dateRevice && (
                                            <span>This field is required</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group blueselect">
                                    <label>ผู้แก้ไข</label>
                                    <select
                                        className="form-control select2"
                                        name="editor_id"
                                    >
                                        <option></option>
                                        {feedData.data &&
                                            feedData.data.ucf_officer &&
                                            feedData.data.ucf_officer.map(
                                                (val, i) => {
                                                    return (
                                                        <option
                                                            key={i}
                                                            value={
                                                                val.officer_id
                                                            }
                                                        >
                                                            {`[${val.officer_id}]`}
                                                            &nbsp;&nbsp;&nbsp;
                                                            {val.officer_name}
                                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                            {
                                                                val.officer_full_name
                                                            }
                                                        </option>
                                                    );
                                                }
                                            )}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <b>วันที่เริ่ม</b>
                                    </label>
                                    <div
                                        className="input-group"
                                        style={{
                                            border: "1.5px solid blue",
                                            borderRadius: 2,
                                        }}
                                    >
                                        <div className="input-group-addon">
                                            <i className="fa fa-calendar" />
                                        </div>
                                        <input
                                            type="text"
                                            name="start_date_tdata"
                                            className="form-control"
                                            data-mask="99/99/9999"
                                            data-inputmask="'mask': '99/99/9999'"
                                            ref={register}
                                            value={cookies.pageone&&cookies.pageone.start_date_tdata}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <b>วันที่แล้วเสร็จ</b>
                                    </label>
                                    <div
                                        className="input-group"
                                        style={{
                                            border: "1.5px solid blue",
                                            borderRadius: 2,
                                        }}
                                    >
                                        <div className="input-group-addon">
                                            <i className="fa fa-calendar" />
                                        </div>
                                        <input
                                            type="text"
                                            name="finished_date_tdate"
                                            className="form-control"
                                            data-mask="99/99/9999"
                                            data-inputmask="'mask': '99/99/9999'"
                                            ref={register}
                                            value={cookies.pageone&&cookies.pageone.start_date_tdata}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.col */}
                    </div>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="form-group">
                                <label>วิธีการแก้ไข</label>
                                <br />
                                <label>
                                    <input
                                        type="radio"
                                        name="r3"
                                        className="flat-red"
                                        ref={register}
                                    />
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    ไม่ระบุ&nbsp;&nbsp;&nbsp;&nbsp;
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="r3"
                                        className="flat-red"
                                        ref={register}
                                    />
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    Telephone&nbsp;&nbsp;&nbsp;&nbsp;
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="r3"
                                        className="flat-red"
                                        ref={register}
                                    />
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    Modem&nbsp;&nbsp;&nbsp;&nbsp;
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="r3"
                                        className="flat-red"
                                        ref={register}
                                    />
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    Onsite&nbsp;&nbsp;&nbsp;&nbsp;
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group blueselect">
                                <label>ประเภทงาน</label>
                                <select
                                    name="inform_type"
                                    className="form-control select2"
                                    ref={register}
                                >
                                    <option></option>
                                    {feedData.data &&
                                        feedData.data.ucf_inform_type &&
                                        feedData.data.ucf_inform_type.map(
                                            (val, i) => {
                                                return (
                                                    <option
                                                        key={i}
                                                        value={val.inform_type}
                                                    >
                                                        {`[${val.inform_type}]`}
                                                        &nbsp;&nbsp;&nbsp;
                                                        {val.type_desc}
                                                    </option>
                                                );
                                            }
                                        )}
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group orangeselect">
                                <label>SA</label>
                                <select
                                    className="form-control select2"
                                    ref={register}
                                    name="sa_id"
                                >
                                    <option></option>
                                    {feedData.data &&
                                        feedData.data.ucf_officer &&
                                        feedData.data.ucf_officer.map(
                                            (val, i) => {
                                                return (
                                                    <option
                                                        key={i}
                                                        value={val.officer_id}
                                                    >
                                                        {`[${val.officer_id}]`}
                                                        &nbsp;&nbsp;&nbsp;
                                                        {val.officer_name}
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        {val.officer_full_name}
                                                    </option>
                                                );
                                            }
                                        )}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div
                        className="box box-danger"
                        id="Detail"
                        style={{
                            border: "2px solid #dd4b39",
                            display: "none",
                        }}
                    >
                        <div className="box-header">
                            <h3 className="box-title">รายละเอียด</h3>
                        </div>
                        <div className="box-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group prinkselect">
                                        <label>โปรแกรม</label>
                                        <select
                                            className="form-control select2"
                                            name="app_no"
                                            ref={register}
                                        >
                                    <option></option>
                                    {feedData.data &&
                                        feedData.data.ucf_application &&
                                        feedData.data.ucf_application.map((val, i) => {
                                            if (
                                                cookies &&
                                                cookies.pageone &&
                                                cookies.pageone.app_no &&
                                                cookies.pageone.app_no ==
                                                    trim(val.app_no)
                                            ) {
                                               //
                                            }
                                            return (
                                                <option
                                                    key={i}
                                                    value={val.app_no}
                                                    selected={
                                                        cookies.pageone &&
                                                        cookies.pageone
                                                            .app_no ==
                                                            trim(val.app_no)
                                                            ? true
                                                            : false
                                                    }
                                                >
                                                    {`[${val.app_no}]`}
                                                    &nbsp;&nbsp;&nbsp;
                                                    {val.application}
                                                    &nbsp;&nbsp;&nbsp;
                                                    {`[${val.version}]`}
                                                </option>
                                                   );
                                                }
                                            )}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>สภานะ</label>
                                        <input
                                            type="text"
                                            name="status"
                                            className="form-control"
                                            autoComplete="off"
                                            ref={register}
                                            style={{
                                                border: "1.5px solid #3c8dbc",
                                                borderRadius: 2,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group prinkselect">
                                        <label>รหัสปัญหา</label>
                                        <br />
                                        <select
                                            className="form-control select2"
                                            name="problem_no"
                                            ref={register}
                                        >
                                            <option></option>
                                            {feedData.data &&
                                                feedData.data.ucf_application &&
                                                feedData.data.ucf_application.map(
                                                    (val, i) => {
                                                        return (
                                                            <option
                                                                key={i}
                                                                value={
                                                                    val.app_no
                                                                }
                                                            >
                                                                {`[${val.app_no}]`}
                                                                &nbsp;&nbsp;&nbsp;
                                                                {
                                                                    val.application
                                                                }
                                                                &nbsp;&nbsp;&nbsp;
                                                                {`[${val.version}]`}
                                                            </option>
                                                        );
                                                    }
                                                )}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>เวลา(นาที)</label>
                                        <br />
                                        <div
                                            className="input-group"
                                            namme="estimeta_tir"
                                            style={{
                                                border: "1.5px solid #3c8dbc",
                                                borderRadius: 2,
                                            }}
                                        >
                                            <div className="input-group-addon">
                                                <i className="fa fa-calendar" />
                                            </div>
                                            <input
                                                type="text"
                                                name="estimate_tir"
                                                className="form-control"
                                                data-inputmask="'alias': 'dd/mm/yyyy'"
                                                data-mask
                                                ref={register}
                                                autoComplete="off"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>รายละเอียด :</label>
                                        {/* <div className="input-group">
                                                    <div className="input-group-addon">
                                                    <i className="fa fa-calendar" />
                                                    </div> */}
                                        {/* <textarea type="text" className="form-control"  /> */}
                                        {/* <textarea
                                            id="editor1"
                                            name="editor1"
                                            rows={10}
                                            cols={80}
                                            ref={register}
                                        /> */}
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data="<p>Hello from CKEditor 5!</p>"
                                            onReady={(editor) => {
                                                // You can store the "editor" and use when it is needed.
                                                console.log(
                                                    "Editor is ready to use!",
                                                    editor
                                                );
                                            }}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                console.log("onChange.", {
                                                    event,
                                                    editor,
                                                    data,
                                                });
                                            }}
                                            onBlur={(event, editor) => {
                                                console.log("Blur.", editor);
                                            }}
                                            onFocus={(event, editor) => {
                                                console.log("Focus.", editor);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <input
                                type="submit"
                                value="ดำเนินการต่อ"
                                // className="btn btn-block btn-primary btn-lg"
                                className="p-2 flex m-auto justify-center text-gray-800 rounded-lg w-32 bg-blue-400 shadow-sm text-base lg:text-5xl"
                                style={{width: "200px",marginLeft: "1380px" }}
                            />
                        </div>
                    </div>
                </form>
            </div>
            {/* <button class="btn btn-block btn-primary btn-lg" onClick={handleComplete}>
                ดำเนินการต่อ
            </button> */}
            {/* <button onClick={handleComplete} >
                ดำเนินการต่อ
            </button> */}
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
