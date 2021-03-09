import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { useScript } from "../../../../helpers";
import { feedDataAction } from "../../../redux/actions";

import { useCookies } from "react-cookie";
import { trim } from "jquery";
import Services from "../../../redux/services/services";

function Step3Component(
    props,
    { setCompleted, completed, setActiveStep, activeStep, step }
) {
    const [cookies, setCookie, removeCookie] = useCookies(["pageone"]);
    // console.log(props);
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);
    const [confirmSubmit, setconfirmSubmit] = useState(false);
    // const [inputs, setInputs] = useState(["ma_coop"]);
    const [coopid, setCoopid] = useState(null);

    const [CookiePageOne, setCookiePageOne] = useState();
    const [CookiePageTwo, setCookiePageTwo] = useState();

    const [feedPostData, setfeedPostData] = useState();

    const services = new Services();

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        // console.log(data);
        // console.log(coopid);
        // $('#myModal').modal('show')
    };

    // ให้ทำงานเฉพาะ สั่งซื้อเท่านั้น
    const inform_type_only_c = ["07", "31", "03"];

    // useEffect(() => {
    //     if(feedPostData && feedPostData.coop[0])
    //     {

    //     }
    //     return () => {

    //     }
    // }, [feedPostData])
    useEffect(() => {
        // console.log(cookies.pageone);
        // console.log(cookies.pageone.inform_type);
        // console.log(cookies.pagetwo.pagetwo);

        if (
            cookies.pageone &&
            cookies.pageone.inform_type &&
            cookies.pagetwo.status == "1"
        ) {
            // console.log(cookies.pageone, cookies.pagetwo);
            setCookiePageOne(cookies.pageone);
            setCookiePageTwo(cookies.pagetwo);
            feedData();
        } else {
            //ยังไม่มีอะไร
        }

        async function feedData() {
            await dispatch(
                feedDataAction.feedDataGet("/api/v1/officer/orderPage")
            );
            let Mybody = { coop_id: cookies.pageone && cookies.pageone.coopid };
            // console.log(JSON.stringify(Mybody))

            const requestOptions = {
                method: "POST",
                data: JSON.stringify(Mybody),
            };
            // console.log(requestOptions);
            services
                .API("/api/v1/officer/coopinfo", requestOptions)
                .then((res) => {
                    setfeedPostData(res);
                });
            // await dispatch(
            //     feedDataAction.feedDataPost("/api/v1/officer/coopinfo",Mybody)
            // );
        }
    }, [dispatch]);

    $(function () {});

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
    console.log(feedPostData);

    return (
        <Fragment>
            {props.completed.has(2) ? (
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
                    <div className="box-body">
                        <div className="box-header">
                            <div className="col-xs-12">
                                {/* <div className="row"> */}
                                <h2
                                    className="page-header"
                                    style={{
                                        borderBottom: "0px",
                                    }}
                                >
                                    {/* piclogo */}
                                    <img
                                        className="pull-left"
                                        src="./dist/img/pdf.png"
                                    />
                                    {/* name coopid&&coopname */}
                                    <h3
                                        className="pull-left"
                                        style={{
                                            paddingLeft: "400px",
                                            paddingTop: "20px",
                                        }}
                                    >
                                        {feedPostData &&
                                            feedPostData.coop[0] &&
                                            feedPostData.coop[0].coop_id}
                                        &nbsp;
                                        {feedPostData &&
                                            feedPostData.coop[0] &&
                                            feedPostData.coop[0].coop_name}
                                        <br />
                                        <small
                                            className="pull-left"
                                            style={{
                                                paddingLeft: "120px",
                                            }}
                                        >
                                            เอกสารภายในห้ามนำออกนอกบริษัทโดยเด็ดขาด
                                        </small>
                                    </h3>
                                    <h3
                                        className="pull-right"
                                        style={{
                                            paddingRight: "40px",
                                        }}
                                    >
                                        {/* Date:{cookies.pageone.receive_date} */}
                                        {/* level */}
                                        {feedPostData &&
                                            feedPostData.coop[0] &&
                                            feedPostData.coop[0].dep_des}
                                    </h3>
                                </h2>
                            </div>
                            {/* แนวตั้ง */}
                            <div className="row invoice-info">
                                <div className="col-sm-4 invoice-col">
                                    <br />
                                    <order1>
                                        <h3
                                            style={{
                                                lineHeight: "1.8",
                                                paddingLeft: "30px",
                                            }}
                                        >
                                            Tel
                                            <br />
                                            Remote Other
                                            <br />
                                            Application :
                                        </h3>
                                    </order1>
                                    <br />
                                    <order4>
                                        <h3
                                            style={{
                                                lineHeight: "1.8",
                                                paddingLeft: "30px",
                                            }}
                                        >
                                            Tel
                                            <br />
                                            Remote Other
                                            <br />
                                            Application :
                                        </h3>
                                    </order4>

                                </div>
                                <order2>
                                    <h3
                                        className="pull-right"
                                        style={{
                                            lineHeight: "1.8",
                                            paddingRight: "230px",
                                            paddingTop: "11px",
                                        }}
                                    >
                                        Order:
                                        <br />
                                        Order date:
                                    </h3>
                                </order2>
                                {/* <br /> */}
                                 {/* ////// */}
                                 <order3>
                                    <h3
                                        className="pull-right"
                                        style={{
                                            lineHeight: "1.8",
                                            paddingRight: "230px",
                                            paddingTop: "11px",
                                        }}
                                    >
                                        Order:
                                        <br />
                                        Order date:
                                    </h3>
                                </order3>
                            </div>
                            {/* ------ */}

                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
}
export default Step3Component;
