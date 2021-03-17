import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";

import { useScript } from "../../../helpers";
import { feedDataAction } from "../../redux/actions";

import { useForm } from "react-hook-form";
import Services from "../../redux/services/services";
import toastr from "toastr";
import EditProfile from "./EditProfile";

function Profile() {
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

    const OnSubmitEditPassword = (data) => {
        if (data.NewPassword == data.Confirm) {
            const requestOptions = {
                method: "POST",
                data: JSON.stringify(data),
            };
            console.log(data.NewPassword == data.Confirm);

            services
                .API("/api/v1/officer/Editpassword", requestOptions)
                .then((res) => {
                    if (res && res.rc_code == "1") {
                        console.log("success2");
                        toastr.success(res && res.message, "Success", 5000);
                        // alert(res && res.message)
                    } else {
                        console.log("failse2");
                        toastr.error(res && res.message, "Error", 5000);
                        // alert(res && res.message)
                    }
                });
        } else {
            console.log("failse2");
            toastr.error("คอนเฟิร์มรหัสผ่านไม่ถูกต้อง", "Error", 5000);
        }
    };

    // console.log(
    //     feedData.fetchSuccess && feedData.data && feedData.data.Profile
    // );
    return (
        <div className="app">
            {/* Main content */}
            <div className="intro-y flex items-center mt-8">
                <h2 className=" mr-auto text-gray-600 hover:text-yellow-500 font-black text-3xl">Profile Layout</h2>
            </div>

            <div className="intro-y box px-8 pt-5 mt-5" style={{ fontFamily: "Kanit" }}>
                <div className="flex flex-col lg:flex-row border-b border-gray-200 pb-5 -mx-5">
                    <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative transition duration-500 transform hover:-translate-y-1 hover:scale-110">
                            <img
                                className="rounded-full"
                                src={`/storage/${
                                    feedData.fetchSuccess &&
                                    feedData.data.Profile &&
                                    feedData.data.Profile.avatar
                                }`}
                            />
                        </div>

                        <div className="ml-5">
                            <div className="w-24 sm:w-40 truncate sm:whitespace-normal text-xl font-black text-gray-600 hover:text-yellow-500">
                                {feedData.fetchSuccess &&
                                    feedData.data.Position &&
                                    feedData.data.Profile &&
                                    feedData.data.Profile.name}
                            </div>
                            <div className="text-gray-600 hover:text-yellow-500 font-black text-3xl ">
                                {feedData.fetchSuccess &&
                                    feedData.data.Position &&
                                    feedData.data.Position[0] &&
                                    feedData.data.Position[0].name}
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-6 lg:mt-0 items-center lg:items-start flex-1 flex-col justify-center text-gray-600 px-5 border-l border-r border-gray-200 border-t lg:border-t-0 pt-5 lg:pt-0">
                        <div className="truncate sm:whitespace-normal flex items-center text-gray-600 hover:text-yellow-500 font-black">
                            <i className="w-4 h-4 mr-2 fas fa-user-tie"></i>
                            Name:{" "}
                            {feedData.fetchSuccess &&
                                feedData.data.Position &&
                                feedData.data.Profile &&
                                feedData.data.Profile.name}
                        </div>
                        <div className="truncate sm:whitespace-normal flex items-center mt-3 text-gray-600 hover:text-yellow-500 font-black">
                            <i className="w-4 h-4 mr-2 fas fa-envelope"></i>{" "}
                            E-mail:{" "}
                            {feedData.fetchSuccess &&
                                feedData.data.Position &&
                                feedData.data.Profile &&
                                feedData.data.Profile.email}
                        </div>
                        <div className="truncate sm:whitespace-normal flex items-center mt-3 text-gray-600 hover:text-yellow-500 font-black">
                            <i className="w-4 h-4 mr-2 fas fa-child"></i>{" "}
                            position:{" "}
                            {feedData.fetchSuccess &&
                                feedData.data.Position &&
                                feedData.data.Position[0] &&
                                feedData.data.Position[0].name}
                        </div>
                    </div>
                </div>
                <div className="nav-tabs flex flex-col sm:flex-row justify-center lg:justify-start">
                    <a
                        data-toggle="tab"
                        data-target="#profile"
                        href="javascript:;"
                        className="py-4 sm:mr-8 flex items-center active"
                    >
                        <i className="w-4 h-4 mr-2 far fa-address-card"></i>{" "}
                        Edit Profile
                    </a>
                    <a
                        data-toggle="tab"
                        data-target="#Password"
                        href="javascript:;"
                        className="py-4 sm:mr-8 flex items-center"
                    >
                        <i className="w-4 h-4 mr-2 fas fa-key"></i>{"    "}
                        Edit Password2
                    </a>
                </div>



                <div className="tab-content ">
                    <div className="tab-content__pane active" id="profile" >
                        <div className="m-5 p-5 w-3/4 bg-white  rounded-lg justify-center shadow-sm hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105">
                        <EditProfile />
                        </div>
                    </div>

                    <div className="tab-content__pane" id="Password">
                        <div className="m-5 p-5 w-3/4 bg-white  rounded-lg justify-center shadow-sm hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105">

                        <div className="text-gray-600 hover:text-yellow-500 font-black text-3xl mt-5">
                        Edit Password
                        </div>
                        <form
                                        className="form-horizontal p-10"
                                        onSubmit={handleSubmit(
                                            OnSubmitEditPassword
                                        )}
                                    >
                                        <div className="form-group">
                                            <label
                                                htmlFor="OldPassword"
                                                className="col-sm-2 control-label text-gray-600 hover:text-yellow-500"
                                            >
                                                Old Password:
                                            </label>
                                            <div className="col-sm-9">
                                                <div className="mt-1 relative rounded-md ">
                                                    <div className="absolute inset-y-0  right-6 pr-3 w-2/4 flex items-center">
                                                        <span
                                                            onClick={() => {
                                                                setpasswordeye(
                                                                    (state) => {
                                                                        return !state;
                                                                    }
                                                                );
                                                            }}
                                                            className="h-5 w-5 text-gray-400"
                                                        >
                                                            <i
                                                                className={`fas fa-${
                                                                    passwordeye
                                                                        ? "eye-slash"
                                                                        : "eye"
                                                                }`}
                                                            />
                                                        </span>
                                                    </div>

                                                    <input
                                                        ref={register({
                                                            required: true,
                                                        })}
                                                        type={
                                                            passwordeye
                                                                ? "text"
                                                                : "password"
                                                        }
                                                        className="input w-2/4 border mt-2"
                                                        id="OldPassword"
                                                        name="OldPassword"
                                                        autoComplete="off"
                                                        placeholder="Old Password"
                                                    ></input>
                                                </div>
                                                {errors.OldPassword?.type ===
                                                    "required" && (
                                                    <ErrorSpan className="">
                                                        {
                                                            ErrorsWord
                                                                .OldPassword
                                                                .required
                                                        }
                                                    </ErrorSpan>
                                                )}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label
                                                htmlFor="NewPassword"
                                                className="col-sm-2 control-label text-gray-600 hover:text-yellow-500"
                                            >
                                                New Password:
                                            </label>
                                            <div className="col-sm-9">
                                                <div className="mt-1 relative rounded-md ">
                                                    <div className="absolute inset-y-0  right-6 pr-3 w-2/4 flex items-center">
                                                        <span
                                                            onClick={() => {
                                                                setpasswordeye(
                                                                    (state) => {
                                                                        return !state;
                                                                    }
                                                                );
                                                            }}
                                                            className="h-5 w-5 text-gray-400"
                                                        >
                                                            <i
                                                                className={`fas fa-${
                                                                    passwordeye
                                                                        ? "eye-slash"
                                                                        : "eye"
                                                                }`}
                                                            />
                                                        </span>
                                                    </div>
                                                    <input
                                                        autoComplete="off"
                                                        ref={register({
                                                            required: true,
                                                        })}
                                                        type={
                                                            passwordeye
                                                                ? "text"
                                                                : "password"
                                                        }
                                                        className="input w-2/4 border mt-2"
                                                        id="NewPassword"
                                                        name="NewPassword"
                                                        placeholder="New Password"
                                                    ></input>
                                                </div>
                                                {errors.NewPassword?.type ===
                                                    "required" && (
                                                    <ErrorSpan className="">
                                                        {
                                                            ErrorsWord
                                                                .NewPassword
                                                                .required
                                                        }
                                                    </ErrorSpan>
                                                )}
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label
                                                htmlFor="Confirm"
                                                className="col-sm-2 control-label text-gray-600 hover:text-yellow-500"
                                            >
                                                New Password (Confirm):
                                            </label>
                                            <div className="col-sm-9">
                                                <div className="mt-1 relative rounded-md ">
                                                    <div className="absolute inset-y-0  right-6 pr-3 w-2/4 flex items-center">
                                                        <span
                                                            onClick={() => {
                                                                setpasswordeye(
                                                                    (state) => {
                                                                        return !state;
                                                                    }
                                                                );
                                                            }}
                                                            className="h-5 w-5 text-gray-400"
                                                        >
                                                            <i
                                                                className={`fas fa-${
                                                                    passwordeye
                                                                        ? "eye-slash"
                                                                        : "eye"
                                                                }`}
                                                            />
                                                        </span>
                                                    </div>
                                                    <input
                                                        autoComplete="off"
                                                        ref={register({
                                                            required: true,
                                                        })}
                                                        type={
                                                            passwordeye
                                                                ? "text"
                                                                : "password"
                                                        }
                                                        className="input w-2/4 border mt-2"
                                                        id="Confirm"
                                                        name="Confirm"
                                                        placeholder="New Password (Confirm)"
                                                    ></input>
                                                </div>
                                                {errors.Confirm?.type ===
                                                    "required" && (
                                                    <ErrorSpan className="">
                                                        {
                                                            ErrorsWord.Confirm
                                                                .required
                                                        }
                                                    </ErrorSpan>
                                                )}
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-offset-2 col-sm-10">
                                                <button
                                                    type="submit"
                                                    className="button bg-theme-1 hover:bg-red-500 text-white mt-5"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                        </div>
                    </div>


                </div>
                <br></br><br></br><br></br>




            </div>
        </div>
    );
}
export default Profile;

const ErrorSpan = ({ children, className }) => {
    return (
        <span className={`text-red-500 hover: text-yellow-500 ${className && className} `}>
            {" "}
            {children && children}
        </span>
    );
};
