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
                    {/* {feedPostData &&
                                            feedPostData.coop[0] &&
                                            feedPostData.coop[0].dep_des} */}
                    {/* <img
                                        className="pull-left"
                                        src="./dist/img/pdf.png"
                                    /> */}
                    <div className="box-body">
                        <div className="box-header">
                            <div className="book">
                                <div className="page">
                                    <table className="table-fixed w-full">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colSpan="2">
                                                    <img
                                                        className="pull-left"
                                                        src="./dist/img/pdf.png"
                                                    />
                                                </td>
                                                <td
                                                    colSpan="8"
                                                    className="text-center"
                                                >
                                                    <h3 className="text-3xl font-semibold">
                                                        {feedPostData &&
                                                            feedPostData
                                                                .coop[0] &&
                                                            feedPostData.coop[0]
                                                                .coop_id}
                                                        &nbsp;
                                                        {feedPostData &&
                                                            feedPostData
                                                                .coop[0] &&
                                                            feedPostData.coop[0]
                                                                .coop_name}
                                                    </h3>
                                                    {/* <br /> */}
                                                    <h5>
                                                        เอกสารภายใน
                                                        ห้ามนำออกนนอกบริษัทโดยเด็ดขาด
                                                    </h5>
                                                </td>
                                                <td
                                                    colSpan="3"
                                                    className="text-right"
                                                >
                                                    {/* Vipxxxx */}
                                                    <h3>
                                                        {feedPostData &&
                                                            feedPostData
                                                                .coop[0] &&
                                                            feedPostData.coop[0]
                                                                .dep_des}
                                                    </h3>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="8"></td>
                                                <td
                                                    colSpan="2"
                                                    className="text-right"
                                                >
                                                    <h4 className="text-xl font-bold">
                                                        Order NO :
                                                    </h4>
                                                </td>
                                                <td colSpan="2">
                                                    <h5>&nbsp;xx-xx-xx-xxxx</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">
                                                    <h4 className="text-xl font-bold">
                                                        Tel
                                                    </h4>
                                                </td>
                                                <td colSpan="6">
                                                    {" "}
                                                    &nbsp;{" "}
                                                    {feedPostData &&
                                                        feedPostData.coop[0] &&
                                                        feedPostData.coop[0]
                                                            .tel}
                                                </td>
                                                <td
                                                    colSpan="2"
                                                    className="text-right"
                                                >
                                                    <h4 className="text-xl font-bold">
                                                        Order Date :
                                                    </h4>
                                                </td>
                                                <td colSpan="2">
                                                    <h5>
                                                        &nbsp;
                                                        {cookies.pageone &&
                                                            cookies.pageone
                                                                .receive_date}
                                                    </h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">
                                                    <h4 className="text-xl font-bold">
                                                        Remote Other
                                                    </h4>
                                                </td>
                                                <td
                                                    colSpan="6"
                                                    className="text-xl"
                                                >
                                                    {feedPostData &&
                                                    feedPostData.coop &&
                                                    feedPostData.coop[0] &&
                                                    feedPostData.coop[0]
                                                        .remote_remark.length >=
                                                        52
                                                        ? trim(
                                                              feedPostData.coop[0].remote_remark.substr(
                                                                  0,
                                                                  52
                                                              )
                                                          )
                                                        : feedPostData &&
                                                          feedPostData.coop[0] &&
                                                          feedPostData
                                                              .coop[0] &&
                                                          feedPostData.coop[0]
                                                              .remote_remark}
                                                </td>
                                                <td
                                                    colSpan="2"
                                                    className="text-right"
                                                >
                                                    <h4 className="text-xl font-bold">
                                                        Customer Name :
                                                    </h4>
                                                </td>
                                                <td colSpan="3">
                                                    {/* <h5 className="text-1xl"> */}
                                                    {/* &nbsp; */}
                                                    {feedData.data &&
                                                        feedData.data
                                                            .ucf_customer_contact &&
                                                        feedData.data.ucf_customer_contact.map(
                                                            (val, i) => {
                                                                // console.log(cookies.pageone.informer == trim(val.contact_no))
                                                                if (
                                                                    cookies &&
                                                                    cookies.pageone &&
                                                                    cookies
                                                                        .pageone
                                                                        .informer &&
                                                                    cookies
                                                                        .pageone
                                                                        .coopid ==
                                                                        trim(
                                                                            val.id_pay_to
                                                                        ) &&
                                                                    cookies
                                                                        .pageone
                                                                        .informer ==
                                                                        trim(
                                                                            val.contact_no
                                                                        )
                                                                ) {
                                                                    return (
                                                                        <h5
                                                                            key={
                                                                                i
                                                                            }
                                                                            className="text-xl"
                                                                        >
                                                                            &nbsp;
                                                                            {
                                                                                val.contract_name
                                                                            }
                                                                        </h5>
                                                                    );
                                                                }
                                                            }
                                                        )}
                                                    {/* </h5> */}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">
                                                    <h4 className="text-xl font-bold">
                                                        Application :
                                                    </h4>
                                                </td>
                                                <td colSpan="5">
                                                    {/* {cookies.pageone &&
                                                            cookies.pageone.app_no} */}
                                                              {feedData.data &&
                                                              feedData.data.ucf_application &&
                                                              feedData.data.ucf_application.map(
                                                            ( val, i) => {
                                                                                // console.log( cookies.pageone.receiver,trim(val.officer_id))
                                                               if (cookies &&cookies.pageone 
                                                                &&cookies.pageone.app_no &&
                                                                cookies.pageone.app_no ==trim(val.app_no)) {
                                                                 return (
                                                                        <h5 key={i}
                                                                         className="text-xl">
                                                                          {val.application }
                                                                        </h5>
                                                                         
                                                                         );
                                                                         }
                                                                      }
                                                                )}
                                                 </td>
                                                <td colSpan="6"></td>
                                            </tr>
                                            <tr>
                                                <td colSpan="7"></td>
                                                <td
                                                    colSpan="3"
                                                    className="text-right"
                                                >
                                                    <h4 className=" text-xl font-bold">
                                                        Start Date :
                                                    </h4>
                                                </td>
                                                <td
                                                    colSpan="2"
                                                    className="text-left"
                                                >
                                                    <h5>
                                                        &nbsp;
                                                        {cookies.pageone &&
                                                            cookies.pageone
                                                                .start_date_tdata}
                                                    </h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan="3">
                                                    <h4 className="text-xl font-bold">
                                                        Appointment Date :
                                                    </h4>
                                                </td>
                                                <td colSpan="2">
                                                    <h5>xx-xx-xx</h5>
                                                </td>
                                                <td colSpan="1">
                                                    <h4 className="text-xl font-bold">
                                                        Estime
                                                    </h4>
                                                </td>
                                                <td colSpan="1">
                                                    <h5>xxxxxx</h5>
                                                </td>
                                                <td
                                                    colSpan="3"
                                                    className="text-right"
                                                >
                                                    <h4 className="text-xl font-bold">
                                                        Finished Date :
                                                    </h4>
                                                </td>
                                                <td colSpan="2">
                                                    <h5>
                                                        &nbsp;
                                                        {cookies.pageone &&
                                                            cookies.pageone
                                                                .finished_date_tdate}
                                                    </h5>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="table-fixed w-full">
                                        <thead>
                                            <tr className="border-2">
                                                <th
                                                    colSpan="1"
                                                    className="text-center"
                                                >
                                                    No
                                                </th>
                                                <th
                                                    colSpan="2"
                                                    className="text-center "
                                                >
                                                    Application
                                                </th>
                                                <th
                                                    colSpan="4"
                                                    className="text-center "
                                                >
                                                    Description
                                                </th>
                                                <th
                                                    colSpan="2"
                                                    className="text-center "
                                                >
                                                    Time
                                                </th>
                                                <th
                                                    colSpan="3"
                                                    className="text-center "
                                                >
                                                    Problem
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">
                                                    1
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="table-fixed w-full relative top-96 inset-x-0 mt-30">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                {/* <td colSpan="2" className="border-2">2</td> */}
                                                <td colSpan="5"></td>
                                                {/* <td colSpan="3"></td> */}
                                                <td colSpan="3">
                                                    <h4 className="text-2xl font-bold text-right">
                                                        Receiver :
                                                    </h4>
                                                </td>
                                                <td
                                                    colSpan="4"
                                                    style={{
                                                        borderBottom:
                                                            "1px solid grey",
                                                    }}
                                                ></td>
                                            </tr>
                                            <tr>
                                                <td
                                                    colSpan="2"
                                                    className="border-2"
                                                >
                                                    &nbsp;
                                                </td>
                                                <td
                                                    colSpan="3"
                                                    className="border-2"
                                                >
                                                    &nbsp;
                                                </td>
                                                <td
                                                    colSpan="3"
                                                    className="border-0"
                                                >
                                                    &nbsp;
                                                </td>
                                                <td colSpan="4">
                                                    <table className="w-full h-10">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="h-10">
                                                                <td
                                                                    colSpan="1"
                                                                    className="text-3xl font-bold"
                                                                    style={{
                                                                        borderBottom:
                                                                            "1px solid grey",
                                                                    }}
                                                                >
                                                                    {" "}
                                                                    <h5>(</h5>
                                                                </td>
                                                                <td
                                                                    colSpan="10"
                                                                    className="text-xl text-center"
                                                                    style={{
                                                                        borderBottom:
                                                                            "1px solid grey",
                                                                    }}
                                                                >
                                                                    {feedData.data &&
                                                                        feedData
                                                                            .data
                                                                            .ucf_officer &&
                                                                        feedData.data.ucf_officer.map(
                                                                            (
                                                                                val,
                                                                                i
                                                                            ) => {
                                                                                // console.log( cookies.pageone.receiver,trim(val.officer_id))
                                                                                if (
                                                                                    cookies &&
                                                                                    cookies.pageone &&
                                                                                    cookies
                                                                                        .pageone
                                                                                        .receiver &&
                                                                                    cookies
                                                                                        .pageone
                                                                                        .receiver ==
                                                                                        trim(
                                                                                            val.officer_id
                                                                                        )
                                                                                ) {
                                                                                    return (
                                                                                        <h5
                                                                                            key={
                                                                                                i
                                                                                            }
                                                                                            className="text-xl"
                                                                                        >
                                                                                            {
                                                                                                val.officer_full_name
                                                                                            }
                                                                                        </h5>
                                                                                    );
                                                                                }
                                                                            }
                                                                        )}
                                                                </td>
                                                                <td
                                                                    colSpan="1"
                                                                    className="text-3xl text-right font-bold"
                                                                    style={{
                                                                        borderBottom:
                                                                            "1px solid grey",
                                                                    }}
                                                                >
                                                                    <h5>)</h5>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    colSpan="2"
                                                    className="border-2"
                                                ></td>
                                                <td
                                                    colSpan="3"
                                                    className="border-2"
                                                ></td>
                                                <td colSpan="3">
                                                    <h4 className="text-xl font-bold text-right">
                                                        Editor :
                                                    </h4>
                                                </td>
                                                <td
                                                    colSpan="4"
                                                    style={{
                                                        borderBottom:
                                                            "1px solid grey",
                                                    }}
                                                ></td>
                                            </tr>
                                            <tr>
                                                <td
                                                    colSpan="2"
                                                    className="border-2"
                                                >
                                                    &nbsp;
                                                </td>
                                                <td
                                                    colSpan="3"
                                                    className="border-2"
                                                >
                                                    &nbsp;
                                                </td>
                                                <td
                                                    colSpan="3"
                                                    className="border-0"
                                                >
                                                    &nbsp;
                                                </td>
                                                <td colSpan="4">
                                                    <table className="w-full h-10">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="h-10">
                                                                <td
                                                                    colSpan="1"
                                                                    className="text-3xl font-bold"
                                                                    style={{
                                                                        borderBottom:
                                                                            "1px solid grey",
                                                                    }}
                                                                >
                                                                    {" "}
                                                                    <h5>(</h5>
                                                                </td>
                                                                <td
                                                                    colSpan="10"
                                                                    className="text-xl text-center"
                                                                    style={{
                                                                        borderBottom:
                                                                            "1px solid grey",
                                                                    }}
                                                                ></td>
                                                                <td
                                                                    colSpan="1"
                                                                    className="text-3xl text-right font-bold"
                                                                    style={{
                                                                        borderBottom:
                                                                            "1px solid grey",
                                                                    }}
                                                                >
                                                                    <h5>)</h5>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    colSpan="2"
                                                    className="border-2"
                                                ></td>
                                                <td
                                                    colSpan="3"
                                                    className="border-2"
                                                ></td>
                                                <td colSpan="3">
                                                    <h4 className="text-xl font-bold text-right">
                                                        Manager :
                                                    </h4>
                                                </td>
                                                <td
                                                    colSpan="4"
                                                    style={{
                                                        borderBottom:
                                                            "1px solid grey",
                                                    }}
                                                ></td>
                                            </tr>
                                            <tr>
                                                {/* <td colSpan="2" className="border-2">&nbsp;</td>
                                                <td colSpan="3" className="border-2">&nbsp;</td> */}
                                                <td colSpan="5">&nbsp;</td>
                                                <td
                                                    colSpan="3"
                                                    className="border-0"
                                                >
                                                    &nbsp;
                                                </td>
                                                <td colSpan="4">
                                                    <table className="w-full h-10">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="h-10">
                                                                <td
                                                                    colSpan="1"
                                                                    className="text-3xl font-bold"
                                                                    style={{
                                                                        borderBottom:
                                                                            "1px solid grey",
                                                                    }}
                                                                >
                                                                    {" "}
                                                                    <h5>(</h5>
                                                                </td>
                                                                <td
                                                                    colSpan="10"
                                                                    className="text-xl text-center"
                                                                    style={{
                                                                        borderBottom:
                                                                            "1px solid grey",
                                                                    }}
                                                                >
                                                                    {" "}
                                                                </td>
                                                                <td
                                                                    colSpan="1"
                                                                    className="text-3xl text-right font-bold"
                                                                    style={{
                                                                        borderBottom:
                                                                            "1px solid grey",
                                                                    }}
                                                                >
                                                                    <h5>)</h5>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br />
                                    <div className="w-full relative top-96 inset-x-0 mt-30">
                                        <div className="field rounded">
                                            <div className="leg text-3xl">
                                                {" "}
                                                CRM : Remark{" "}
                                            </div>
                                            <table className="w-full">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        {/* <td colSpan="2" className="border-2">2</td> */}
                                                        <td colSpan="2">
                                                            สิทธิ :{" "}
                                                        </td>
                                                        {/* <td colSpan="3"></td> */}
                                                        <td colSpan="2">
                                                            &nbsp;xxxxxx แต้ม
                                                        </td>
                                                        <td colSpan="2">
                                                            หัก งานด่วน*2 :
                                                        </td>
                                                        <td colSpan="2">
                                                            &nbsp;xx แต้ม
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        {/* <td colSpan="2" className="border-2">2</td> */}
                                                        <td colSpan="2">
                                                            3หัก :{" "}
                                                        </td>
                                                        {/* <td colSpan=""></td> */}
                                                        <td colSpan="2">
                                                            &nbsp;xxxxxx แต้ม
                                                        </td>
                                                        <td colSpan="2">
                                                            เหลือ :
                                                        </td>
                                                        <td colSpan="2">
                                                            &nbsp;xx แต้ม
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <table className="table-fixed w-full relative top-96 inset-x-0 mt-30">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td
                                                    colSpan="12"
                                                    className="text-xl"
                                                >
                                                    SO-AT SOLUTION COMPANY
                                                    LIMITED
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    colSpan="12"
                                                    className="text-xl"
                                                >
                                                    165/57 Ramindra Road ,
                                                    Monument Sub-District ,
                                                    Bangkhen District , Bangkok
                                                    10220
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    colSpan="4"
                                                    className="text-xl"
                                                >
                                                    :: Customercare::Tel./Fax.
                                                    0-2059-0511
                                                </td>
                                                <td
                                                    colSpan="4"
                                                    className="text-xl text-left"
                                                >
                                                    www.soatsolution.com
                                                </td>
                                                <td
                                                    colSpan="4"
                                                    className="text-xl"
                                                >
                                                    Contact us:
                                                    ssc_soat@soatsolution.com
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    colSpan="12"
                                                    className="text-xl"
                                                >
                                                    <hr />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
}
export default Step3Component;
