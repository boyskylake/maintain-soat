import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { useScript } from "../../../../helpers";
import { feedDataAction } from "../../../redux/actions";

import Inputmask from "inputmask";

import { useCookies } from "react-cookie";

function Step2Component(
    props,
    { setCompleted, completed, setActiveStep, activeStep, step }
) {
    const [cookies, setCookie, removeCookie] = useCookies([
        "pageone",
        "pagetwo",
    ]);
    // console.log(props);
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);
    const [confirmSubmit, setconfirmSubmit] = useState(false);
    // const [inputs, setInputs] = useState(["ma_coop"]);
    const [coopid, setCoopid] = useState(null);

    const [CookiePageOne, setCookiePageOne] = useState();

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        // console.log(data);
        // console.log(coopid);
        // $('#myModal').modal('show')
    };
    useEffect(() => {
        Inputmask().mask(document.querySelectorAll("input"));
        return () => {};
    }, []);
    // ให้ทำงานเฉพาะ สั่งซื้อเท่านั้น
    const inform_type_only_c = ["07", "31", "03"];
    useEffect(() => {
        if (
            cookies.pageone &&
            cookies.pageone.inform_type &&
            inform_type_only_c.indexOf(cookies.pageone.inform_type) > 0
        ) {
            // สั่งซื้อ
            setCookiePageOne(cookies.pageone);
            removeCookie("pageone");
            feedData();
        } else {
            //
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
        <div className="mt-10 pt-10 border-t border-gray-200">
            {/* <div className="font-medium text-left">สำหรับ Order สั่งซื้อ</div> */}
            <div className="grid grid-cols-12 gap-4 row-gap-5 mt-3">
                {/* <form onSubmit={handleSubmit(onSubmit)} autoComplete="false"> */}
                {/* วันที่สั่งซื้อ */}
                <div className="intro-y col-span-12 sm:col-span-2">
                    <div className="mb-2 text-left">วันที่สั่งซื้อ</div>
                    <input
                        type="text"
                        name="purchase_date_tdate"
                        autoComplete="off"
                        data-mask="99/99/9999"
                        data-inputmask="'mask': '99/99/9999'"
                        className="input w-full border flex-1 focus:ring-4 focus:border-indigo-300 focus:outline-none active:outline-none active:border-indigo-300"
                        ref={register}
                        value={
                            cookies.pagetwo &&
                            cookies.pagetwo.purchase_date_tdate
                        }
                    />
                </div>
                {/* จำนวนวันตามสัญญา */}
                <div className="intro-y col-span-12 sm:col-span-2">
                    <div className="mb-2 text-left">จำนวนวันตามสัญญา</div>
                    <input
                        type="text"
                        name="contract_le"
                        autoComplete="off"
                        data-mask="999 วัน"
                        data-inputmask="'mask': '999 วัน'"
                        className="text-center input w-full border flex-1 focus:ring-4 focus:border-indigo-300 focus:outline-none active:outline-none active:border-indigo-300"
                        ref={register}
                        value={
                            cookies.pagetwo &&
                            cookies.pagetwo.purchase_date_tdate
                        }
                    />
                    {/* {errors.dateRevice && (
                                    <span>This field is required</span>
                                )} */}
                </div>
                {/* มีสัญญาจ้าง */}
                {/* &nbsp;&nbsp; */}
                <div className="intro-y col-span-12 sm:col-span-4">
                    <div className="mb-2 text-left">มีสัญญาจ้าง</div>
                            <input
                                type="text"
                                name="contract_no"
                                autoComplete="off"
                                // data-mask="999 วัน"
                                // data-inputmask="'mask': '999 วัน'"
                                className="input w-full border flex-1 focus:ring-4 focus:border-indigo-300 focus:outline-none active:outline-none active:border-indigo-300"
                                ref={register}
                                value={
                                    cookies.pagetwo &&
                                    cookies.pagetwo.contract_no
                                }
                            />
                        </div>
                {/* มูลค่างาน */}
                {/* &nbsp;&nbsp; */}
                <div className="intro-y col-span-12 sm:col-span-4">
                    <div className="mb-2 text-left">มูลค่างาน</div>
                            <input
                                type="text"
                                name="order_value_amount"
                                autoComplete="off"
                                // data-mask="999 วัน"
                                // data-inputmask="'mask': '999 วัน'"
                                className="input w-full border flex-1 focus:ring-4 focus:border-indigo-300 focus:outline-none active:outline-none active:border-indigo-300"
                                ref={register}
                                value={
                                    cookies.pagetwo &&
                                    cookies.pagetwo.order_value_amount
                                }
                            />
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
export default Step2Component;
