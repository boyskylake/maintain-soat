import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { useScript } from "../../../../helpers";
import { feedDataAction } from "../../../redux/actions";

function SaveorderComponent(
    props,
    { setCompleted, completed, setActiveStep, activeStep, step }
) {
    // function SaveorderComponent({ props }) {
    // console.log(props);


    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);
    const [confirmSubmit, setconfirmSubmit] = useState(false);
    // const [inputs, setInputs] = useState(["ma_coop"]);
    const [coopid, setCoopid] = useState(null);
    // useScript("/officer/dist/js/pages/saveorder.js");
    useScript("/officer/dist/js/pages/saveorder.js");
    useScript("/officer/bower_components/ckeditor/ckeditor.js");
    useScript(
        "/officer/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"
    );

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // console.log(coopid);
        // $('#myModal').modal('show')
    };

    //data
    useEffect(() => {
        async function feedData() {
            await dispatch(
                feedDataAction.feedDataGet("/api/v1/officer/orderPage")
            );
        }
        feedData();
    }, [dispatch]);

    $(function () {
        $(document.body).on("change", "#coopid", function () {
            if (coopid == null) {
                // console.log(coopid);

                document.getElementById("Detail").style.display = "block";
                $(".select2").select2();
                CKEDITOR.replace("editor1");
                //bootstrap WYSIHTML5 - text editor
                $(".textarea").wysihtml5();
                document.getElementById("informer").disabled = false;
            }

            setCoopid(this.value);
        });
    });

    const handleComplete = () => {
        const newCompleted = new Set(completed);
        newCompleted.add(step);
        props.setCompleted(newCompleted);
        handleNext();
    };
    const handleNext = () => {
        const newActiveStep = activeStep + 1;
        // console.log(newActiveStep)
        props.setActiveStep(newActiveStep);
    };

    return (
        <div className="box-body">
            <div className="box-header">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                                className="form-control select2"
                                ref={register({ required: true })}
                                required
                            >
                                {feedData.data &&
                                    feedData.data.ucf_officer &&
                                    feedData.data.ucf_officer.map((val, i) => {
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
                                    })}
                            </select>

                            {errors.receiver && <span>กรุณาเลือกผู้รับแจ้ง</span>}
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
                                    data-provide="datepicker"
                                    data-date-language="th-th"
                                    ref={register}
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
                                    data-inputmask="'alias': 'dd/mm/yyyy'"
                                    data-mask
                                    ref={register}
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
                                ref={register({ required: true })}
                                required
                            >
                                <option></option>
                                {feedData.data &&
                                    feedData.data.ma_coop &&
                                    feedData.data.ma_coop.map((val, i) => (
                                        <option key={i} value={val.coop_id}>
                                            {val.coop_id} {val.coop_name}
                                        </option>
                                    ))}
                            </select>  {errors.coopid && <span>กรุณาเลือกผู้รับแจ้ง</span>}
                        </div>
                        <div className="col-md-6">
                            <div className="form-group receiver">
                                <label>ผู้แจ้ง</label>
                                <select
                                    name="informer"
                                    id="informer"
                                    className="form-control select2"
                                 ref={register({ required: true })}
                                    required
                                >
                                    <option></option>
                                    {feedData.data &&
                                        feedData.data.ucf_customer_contact &&
                                        feedData.data.ucf_customer_contact.map(
                                            (val, i) => {
                                                return (
                                                    <option
                                                        key={i}
                                                        value={val.contact_no}
                                                    >
                                                        {`[${val.contact_no}]`}
                                                        &nbsp;&nbsp;&nbsp;
                                                        {val.contract_name}
                                                    </option>
                                                );
                                            }
                                        )}
                                </select> {errors.informer && <span>กรุณาเลือกผู้รับแจ้ง</span>}
                            </div>
                            <div className="form-group">
                                <label>เอกสารอ้างอิง</label>
                                <input
                                    type="text"
                                    name="doc_make"
                                    className="form-control"
                                    style={{
                                        border: "1.5px solid #3c8dbc",
                                        borderRadius: 2,
                                    }}
                                    ref={register({
                                        required: true,
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
                                        name="dateRevice"
                                        className="form-control pull-right"
                                        id="reservation"
                                        ref={register({
                                            required: true,
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
                                <select className="form-control select2">
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
                                        className="form-control"
                                        data-inputmask="'alias': 'dd/mm/yyyy'"
                                        data-mask
                                        ref={register}
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
                                        className="form-control"
                                        data-inputmask="'alias': 'dd/mm/yyyy'"
                                        data-mask
                                        ref={register}
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
                            <select className="form-control select2" ref={register}>
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
                            <select className="form-control select2" ref={register}>
                                <option></option>
                                {feedData.data &&
                                    feedData.data.ucf_officer &&
                                    feedData.data.ucf_officer.map((val, i) => {
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
                                    })}
                            </select>

                        </div>
                    </div>
                </div>
                  <div className="box box-danger"
                                id="Detail"
                                style={{
                                border: "2px solid #dd4b39",
                                display: "none",
                                }}>
                                <div className="box-header">
                                    <h3 className="box-title">รายละเอียด</h3>
                                </div>
                                 <div className="box-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group prinkselect">
                                                <label>โปรแกรม</label>
                                                <select className="form-control select2" ref={register}>
                                                    <option></option>
                                                    {feedData.data &&
                                                        feedData.data
                                                            .ucf_application &&
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
                                                <label>สภานะ</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    ref={register}
                                                    style={{
                                                        border:
                                                            "1.5px solid #3c8dbc",
                                                        borderRadius: 2,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group prinkselect">
                                                <label>รหัสปัญหา</label>
                                                <br />
                                                <select className="form-control select2" ref={register}>
                                                    <option></option>
                                                    {feedData.data &&
                                                        feedData.data
                                                            .ucf_application &&
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
                                                    style={{
                                                        border:
                                                            "1.5px solid #3c8dbc",
                                                        borderRadius: 2,
                                                    }}
                                                >
                                                    <div className="input-group-addon">
                                                        <i className="fa fa-calendar" />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        data-inputmask="'alias': 'dd/mm/yyyy'"
                                                        data-mask
                                                        ref={register}
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
                                                <textarea
                                                    id="editor1"
                                                    name="editor1"
                                                    rows={10}
                                                    cols={80}
                                                    ref={register}
                                                />

                                            </div>
                                        </div>
                                    </div>

                                     <input type="submit" />
                                    
                                </div>
                   </div></form>
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
export default SaveorderComponent;
