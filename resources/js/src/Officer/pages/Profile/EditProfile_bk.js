import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";

import { useScript } from "../../../helpers";
import { feedDataAction } from "../../redux/actions";

import { useForm } from "react-hook-form";
import Services from "../../redux/services/services";
import { NotificationManager } from "react-notifications";
import toastr from "toastr";

function EditProfile() {
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);
    const { register, handleSubmit, watch, errors } = useForm();
    const [passwordeye, setpasswordeye] = useState(false);

    // const [inputs, setInputs] = useState(["ma_coop"]);
    const [coopid, setCoopid] = useState(null);
    // const [FeedMenu, setFeedMenu] = useState();

    const ErrorsWord = {
        Confirm: {
            required: "กรุณากรอกรหัสผ่าน",
            maxLength: "",
        },
        NewPassword: {
            required: "กรุณากรอกรหัสผ่าน",
            maxLength: "",
            PasswordNotMatch: "กรุณากรอกรหัสผ่านให้ตรงกัน",
        },
        OldPassword: {
            required: "กรุณากรอกรหัสผ่าน",
            maxLength: "",
        },
        inputEmail: {
            required: "กรุณากรอกอีเมล์",
            maxLength: "",
        },
        inputName: {
            required: "กรุณากรอกชื่อ",
            maxLength: "",
        },
    };

    // <!-- jvectormap  -->
    useScript("/officer/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js");
    useScript("/officer/plugins/jvectormap/jquery-jvectormap-world-mill-en.js");
    useScript("/officer/dist/js/pages/dashboard2.js");

    useEffect(() => {
        async function feedData() {
            await dispatch(
                feedDataAction.feedDataGet("/api/v1/officer/Profile")
            );
        }
        feedData();
    }, [dispatch]);

    const services = new Services();

    const OnSubmitEditProfile = (data) => {
        console.log(data);
        const requestOptions = {
            method: "POST",
            data: JSON.stringify(data),
        };

        services
            .API("/api/v1/officer/Editprofile", requestOptions)
            .then((res) => {
                console.log(res, res && res.rc_code, res && res.message);
                if (res && res.rc_code == "1") {
                    console.log("success1");
                    toastr.success(res && res.message, "Success", 5000);
                    // alert(res && res.message)
                } else {
                    console.log("failse1");
                    toastr.error(res && res.message, "Error", 5000);
                    // alert(res && res.message)
                }
            });
    };


// const EditProfile = () => {
    return (
        <div>


            <div className="text-gray-600 hover:text-yellow-500 font-black text-3xl mt-5">Edit Profile</div>




                                    <form
                                        id="pom"
                                        className="form-horizontal p-10 "
                                        style={{ fontFamily: "Kanit" }}
                                        onSubmit={handleSubmit(
                                            OnSubmitEditProfile
                                        )}
                                    >
                                        <div className="form-group">
                                            <label
                                                htmlFor="inputName"
                                                className="col-sm-2 control-label text-gray-600 hover:text-yellow-500"
                                            >
                                                Name:
                                            </label>
                                            <div className="col-sm-10">

                                                <input
                                                    ref={register({
                                                        required: true,
                                                    })}
                                                    type="name"
                                                    className="input w-2/4 border mt-2"
                                                    id="inputName"
                                                    name="inputName"
                                                    placeholder="Name"
                                                    autoComplete="off"
                                                    Value={
                                                        feedData.fetchSuccess &&
                                                        feedData.data.Profile &&
                                                        feedData.data.Profile
                                                            .name
                                                    }
                                                ></input>
                                                {errors.inputName?.type ===
                                                    "required" && (
                                                    <ErrorSpan className="">
                                                        {
                                                            ErrorsWord.inputName
                                                                .required
                                                        }
                                                    </ErrorSpan>
                                                )}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label
                                                htmlFor="inputEmail"
                                                className="col-sm-2 control-label text-gray-600 hover:text-yellow-500"
                                            >
                                                E-mail:
                                            </label>
                                            <div className="col-sm-10">
                                                <input
                                                    ref={register({
                                                        required: true,
                                                    })}
                                                    type="email"
                                                    className="input w-2/4 border mt-2"
                                                    id="inputEmail"
                                                    name="inputEmail"
                                                    placeholder="E-mail"
                                                    autoComplete="off"
                                                    Value={
                                                        feedData.fetchSuccess &&
                                                        feedData.data.Profile &&
                                                        feedData.data.Profile
                                                            .email
                                                    }
                                                ></input>
                                                {errors.inputEmail?.type ===
                                                    "required" && (
                                                    <ErrorSpan className="">
                                                        {
                                                            ErrorsWord
                                                                .inputEmail
                                                                .required
                                                        }
                                                    </ErrorSpan>
                                                )}
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-10">
                                                <button
                                                    onClick={() => {
                                                        console.log("คลิกสิ");
                                                    }}
                                                    type="submit"
                                                    className="button bg-theme-1 hover:bg-red-500 text-white mt-5"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
        </div>
    );
}
export default EditProfile;

const ErrorSpan = ({ children, className }) => {
    return (
        <span className={`text-red-500 hover: text-yellow-500 ${className && className} `}>
            {" "}
            {children && children}
        </span>
    );
};
