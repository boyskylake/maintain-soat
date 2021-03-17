import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";

import { useScript } from "../../../helpers";
import { feedDataAction } from "../../redux/actions";

// steppp
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { StepButton } from "@material-ui/core";

//ประการศหน้ามาตาม Step
import Step1Component from "./component/Step1Component";
import Step2Component from "./component/Step2Component";
import Step3Component from "./component/Step3Component";
import Lodingicon from "../../components/utils/Lodingicon";

function Saveorder() {
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);
    const [confirmSubmit, setconfirmSubmit] = useState(false);
    const [coopid, setCoopid] = useState(null);

    useScript("/officer/dist/js/pages/saveorder.js");

    const { register, handleSubmit, watch, errors } = useForm();

    const [cookies, setCookie, removeCookie] = useCookies(["pageone"]);

    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState(new Set());
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();
    const totalSteps = () => {
        return getSteps().length;
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted(new Set());
        setSkipped(new Set());

        setInterval(history.push("/member/logon"), 1000);
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const skippedSteps = () => {
        return skipped.size;
    };

    function isStepComplete(step) {
        return completed.has(step);
    }
    const completedSteps = () => {
        return completed.size;
    };
    const allStepsCompleted = () => {
        return completedSteps() === totalSteps() - skippedSteps();
    };
    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };
    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? steps.findIndex((step, i) => !completed.has(i))
                : activeStep + 1;

        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    useEffect(() => {
        if (confirmSubmit) {
            console.log("Submit success");
        }
        return () => {};
    }, [confirmSubmit]);

    useEffect(() => {
        async function feedData() {
            await dispatch(
                feedDataAction.feedDataGet("/api/v1/officer/orderPage")
            );

            removeCookie("pageone");
        }
        feedData();
    }, [dispatch, removeCookie]);

    $(function () {
        $(document.body).on("change", "#coopid", function () {
            if (coopid == null) {
                document.getElementById("Detail").style.display = "block";
                $(".select2").select2();
                $(".textarea").wysihtml5();
                document.getElementById("informer").disabled = false;
            }

            setCoopid(this.value);
        });
    });

    return (
        <div>
            <div className="flex items-center mt-8"style={{fontFamily:'Kanit'}}>
                <h2 className="intro-y text-lg font-medium mr-auto">
                    บันทึกแก้ไข order
                </h2>
            </div>
            {/* BEGIN: Wizard Layout */}
            <div className="intro-y box py-10 sm:py-20 mt-5"style={{fontFamily:'Kanit'}}>
                <section className="wizard flex flex-col lg:flex-row justify-center px-5 sm:px-20">
                    <div className="intro-x lg:text-center flex items-center lg:block flex-1 z-10">
                    <Stepper alternativeLabel nonLinear activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const buttonProps = {};
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepButton
                                        onClick={handleStep(index)}
                                        completed={isStepComplete(index)}
                                        {...buttonProps}
                                    >
                                        <h1
                                            className="text-sm lg:text-lg text-gray-700 font-medium hover:font-bold"
                                            style={{
                                                fontFamily: "FontDefault",
                                            }}
                                        >
                                            {label}
                                        </h1>
                                    </StepButton>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <div> ท่านยืนยันครบทุกส่วนแล้ว</div>
                    ) : (
                        <div>
                            {getStepContent(
                                activeStep,
                                setCompleted,
                                completed,
                                setActiveStep,
                                activeStep
                            )}
                        </div>
                    )}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Saveorder;

function getSteps() {
    return ["บันทึกออเดอร์", "สำหรับ Order สั่งซื้อ", "ตรวจสอบความถูกต้อง"];
}

function getStepContent(
    step,
    setCompleted,
    completed,
    setActiveStep,
    activeStep
) {
    const data = {
        step: step,
        setCompleted: setCompleted,
        completed: completed,
        setActiveStep: setActiveStep,
        activeStep: activeStep,
    };
    switch (step) {
        case 0:
            return (
                <Step1Component
                    props={data}
                    setCompleted={setCompleted}
                    completed={completed}
                    setActiveStep={setActiveStep}
                    activeStep={activeStep}
                    step={step}
                />
                //     <Step3Component
                //     props={data}
                //     setCompleted={setCompleted}
                //     completed={completed}
                //     setActiveStep={setActiveStep}
                //     activeStep={activeStep}
                //     step={step}
                // />

                //     <Step2Component
                //     props={data}
                //     setCompleted={setCompleted}
                //     completed={completed}
                //     setActiveStep={setActiveStep}
                //     activeStep={activeStep}
                //     step={step}
                // />
            );
        case 1:
            return (
                <Step2Component
                    props={data}
                    setCompleted={setCompleted}
                    completed={completed}
                    setActiveStep={setActiveStep}
                    activeStep={activeStep}
                    step={step}
                />
            );
        case 2:
            return (
                <Step3Component
                    props={data}
                    setCompleted={setCompleted}
                    completed={completed}
                    setActiveStep={setActiveStep}
                    activeStep={activeStep}
                    step={step}
                />
            );
        case 3:
            return "Step 3: This is the bit I really care about!";
        default:
            return "Unknown step";
    }
}
