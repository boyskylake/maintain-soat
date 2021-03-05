import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { useScript } from "../../../../helpers";
import { feedDataAction } from "../../../redux/actions";

import { useCookies } from "react-cookie";

function Step2Component(
    props,
    { setCompleted, completed, setActiveStep, activeStep, step }
) {
    const [cookies, setCookie, removeCookie] = useCookies([
        "pageone",
        "pagetwo",
    ]);
    console.log(props);
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);
    const [confirmSubmit, setconfirmSubmit] = useState(false);
    // const [inputs, setInputs] = useState(["ma_coop"]);
    const [coopid, setCoopid] = useState(null);

    const [CookiePageOne, setCookiePageOne] = useState();

    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
        console.log(coopid);
        // $('#myModal').modal('show')
    };

    // ให้ทำงานเฉพาะ สั่งซื้อเท่านั้น
    const inform_type_only_c = ["07", "31", "03"];
    useEffect(() => {
        // console.log(
        //     cookies.pageone,
        //     cookies.pageone &&
        //         cookies.pageone.inform_type &&
        //         inform_type_only_c.indexOf(cookies.pageone.inform_type) > 0
        // );

        if (
            cookies.pageone &&
            cookies.pageone.inform_type &&
            inform_type_only_c.indexOf(cookies.pageone.inform_type) > 0
        ) {
            setCookiePageOne(cookies.pageone);
            removeCookie("pageone");
            feedData();
        } else {
            if (cookies.pageone && cookies.pageone.coopid) {
                setCookie("pagetwo", JSON.stringify({ status: "1" }));
                handleComplete();
            } else {
                //ยังไม่มีอะไร
            }
        }
        async function feedData() {
            await dispatch(
                feedDataAction.feedDataGet("/api/v1/officer/orderPage")
            );
        }
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

    return (
        <Fragment>
            {props.completed.has(1) ? (
                <div className="m-2 text-center py-2">
                    <div className="py-2">
                        <i className="far fa-check-circle fa-5x text-emerald-400"></i>
                    </div>
                    <h3 className="text-gray-800 text-base font-medium">
                        {" "}
                        ท่านได้ดำเนินการขั้นตอนนี้เสร็จสมบรูณ์แล้ว
                    </h3>
                </div>
            ) : (
                <Fragment>
                    {props.completed.has(0) ? (
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
                                            <h3 className="box-title">
                                                สำหรับ Order สั่งซื้อ
                                            </h3>
                                        </div>
                                        <div className="box-body">
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label>
                                                        วันที่สั่งซื้อ
                                                    </label>
                                                    <div
                                                        className="input-group"
                                                        style={{
                                                            border:
                                                                "1.5px solid #f39c12",
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
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label>
                                                        จำนวนวันตามสัญญา
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        ref={register}
                                                        style={{
                                                            border:
                                                                "1.5px solid #f39c12",
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
                                                        ref={register}
                                                        style={{
                                                            border:
                                                                "1.5px solid #f39c12",
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
                                                        ref={register}
                                                        style={{
                                                            border:
                                                                "1.5px solid #f39c12",
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
                                            ref={register}
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
                                                                {
                                                                    val.officer_name
                                                                }
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                {
                                                                    val.officer_full_name
                                                                }
                                                            </option>
                                                        );
                                                    }
                                                )}
                                        </select>
                                        <p>(ณ วันที่แจ้งแก้ไขงาน)</p>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="form-group greenselect">
                                        <label>ระบบงาน Service</label>
                                        <select
                                            className="form-control select2"
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
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>ฝ่ายงานที่ดูแล</label>
                                        <input
                                            readOnly={true}
                                            type="text"
                                            className="form-control"
                                            ref={register}
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
                    ) : (
                        <Fragment>
                            <div className="m-2 text-center py-2">
                                <div className="py-2">
                                    <i className="far fa-times-circle fa-5x text-red-400"></i>
                                </div>
                                <h3 className="text-gray-800 text-base font-medium">
                                    {" "}
                                    กรุณาดำเนินการขั้นตอนก่อนหน้าตามลำดับ
                                </h3>
                            </div>
                        </Fragment>
                    )}
                </Fragment>
            )}
        </Fragment>
    );
}
export default Step2Component;
