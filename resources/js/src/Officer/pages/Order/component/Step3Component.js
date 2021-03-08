import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { useScript } from "../../../../helpers";
import { feedDataAction } from "../../../redux/actions";

import { useCookies } from "react-cookie";
import { trim } from "jquery";

function Step3Component(
    props,
    { setCompleted, completed, setActiveStep, activeStep, step }
) {
    const [cookies, setCookie, removeCookie] = useCookies(["pageone"]);
    console.log(props);
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);
    const [confirmSubmit, setconfirmSubmit] = useState(false);
    // const [inputs, setInputs] = useState(["ma_coop"]);
    const [coopid, setCoopid] = useState(null);

    const [CookiePageOne, setCookiePageOne] = useState();
    const [CookiePageTwo, setCookiePageTwo] = useState();

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        console.log(coopid);
        // $('#myModal').modal('show')
    };

    // ให้ทำงานเฉพาะ สั่งซื้อเท่านั้น
    const inform_type_only_c = ["07", "31", "03"];

    useEffect(() => {
        // console.log(cookies.pageone);
        // console.log(cookies.pageone.inform_type);
        // console.log(cookies.pagetwo.pagetwo);

        console.log(feedData.data && feedData.data);

        if (
            cookies.pageone &&
            cookies.pageone.inform_type &&
            cookies.pagetwo.pagetwo == "1"
        ) {
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
                    <p></p>
                    {feedData.data &&
                        feedData.data.ma_coop &&
                        feedData.data.ma_coop.map((val, i) => {
                            if (cookies.pageone.coopid == trim(val.coop_id)) {
                                return <p>{val.coop_name}</p>;
                            }
                        })}
                    testse
                </Fragment>
            )}
        </Fragment>
    );
}
export default Step3Component;
