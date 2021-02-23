import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { useScript } from "../../../../helpers";
import { feedDataAction } from "../../../redux/actions";

function Detail(
    props,
    { setCompleted, completed, setActiveStep, activeStep, step }
) {
    // function SaveorderComponent({ props }) {
    console.log(props);
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
        console.log(coopid);
        // $('#myModal').modal('show')
    };

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
        <div className="box-header">
            <div className="row">
                <div className="col-md-12">
                    <div
                        className="box box-primary"
                        style={{
                            border: "2px solid #0000008c",
                        }}
                    >
                        <div className="box-header">
                            <h3 className="box-title">สำหรับ Order สั่งซื้อ</h3>
                        </div>
                        <div className="box-body">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>วันที่สั่งซื้อ</label>
                                    <div
                                        className="input-group"
                                        style={{
                                            border: "1.5px solid #f39c12",
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
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>จำนวนวันตามสัญญา</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        style={{
                                            border: "1.5px solid #f39c12",
                                            borderRadius: 2,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>มีสัญญาจ้าง</label>
                                    <br />
                                    <input
                                        type="checkbox"
                                        className="flat-red"
                                        style={{
                                            border: "1.5px solid #f39c12",
                                            borderRadius: 2,
                                        }}
                                    />
                                    {/* <input type="text" className="form-control" /> */}
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>มูลค่างาน</label>
                                    <br />
                                    <input
                                        type="text"
                                        className="form-control"
                                        style={{
                                            border: "1.5px solid #f39c12",
                                            borderRadius: 2,
                                            textAlign: "right",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* === start */}
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group blueselect">
                        <label>ผู้ดูแล</label>
                        <select
                            className="form-control select2"
                            id="ownerjobselect"
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
                        <p>(ณ วันที่แจ้งแก้ไขงาน)</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group greenselect">
                        <label>ระบบงาน Service</label>
                        <select className="form-control select2">
                            <option></option>
                            {feedData.data &&
                                feedData.data.ucf_application &&
                                feedData.data.ucf_application.map((val, i) => {
                                    return (
                                        <option key={i} value={val.app_no}>
                                            {`[${val.app_no}]`}
                                            &nbsp;&nbsp;&nbsp;
                                            {val.application}
                                            &nbsp;&nbsp;&nbsp;
                                            {`[${val.version}]`}
                                        </option>
                                    );
                                })}
                        </select>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label>ฝ่ายงานที่ดูแล</label>
                        <input
                            readOnly={true}
                            type="text"
                            className="form-control"
                            style={{
                                border: "1.5px solid #0000008c",
                                borderRadius: 2,
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* ===== end  */}
            {/* </div> */}
            {/* ---------------------------กรอกรายละเอียด-------------------------- */}
        </div>
    );
}
export default Detail;
