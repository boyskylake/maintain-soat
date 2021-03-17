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
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Profile
                    <small>Version 17.58.98</small>
                </h1>
                <ol className="breadcrumb">
                    <li>
                        <a href="#">
                            <i className="fa fa-dashboard" /> Home
                        </a>
                    </li>
                    <li className="active">Profile</li>
                </ol>
            </section>
            {/* Main content */}
            <section className="content">
                {/* Info boxes */}

                <div className="row">
                    <div className="col-md-3">
                        <div className="box box-primary">
                            <div className="box-body box-profile">
                                <div className="relative h-60">
                                    <img
                                        className="absolute h-full w-full object-cover"
                                        src="https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                                    />
                                </div>

                                <div className="relative shadow mx-auto h-64 w-64 -my-36 border-white rounded-full overflow-hidden border-4">
                                    <img
                                        className="object-cover w-full h-full"
                                        src={`/storage/${
                                            feedData.fetchSuccess &&
                                            feedData.data.Profile &&
                                            feedData.data.Profile.avatar
                                        }`}
                                        alt="User Image"
                                    />
                                </div>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <h3 className="profile-username text-center">
                                    {feedData.fetchSuccess &&
                                        feedData.data.Profile &&
                                        feedData.data.Profile.name}
                                </h3>

                                <p className="text-muted text-center">
                                    {feedData.fetchSuccess &&
                                        feedData.data.Position &&
                                        feedData.data.Position[0] &&
                                        feedData.data.Position[0].name}
                                </p>

                                <ul className="list-group list-group-unbordered">
                                    <li className="list-group-item">
                                        <b>Name</b>{" "}
                                        <a className="pull-right">
                                            {feedData.fetchSuccess &&
                                                feedData.data.Position &&
                                                feedData.data.Profile &&
                                                feedData.data.Profile.name}
                                        </a>
                                    </li>
                                    <li className="list-group-item">
                                        <b>E-mail</b>{" "}
                                        <a className="pull-right">
                                            {feedData.fetchSuccess &&
                                                feedData.data.Position &&
                                                feedData.data.Profile &&
                                                feedData.data.Profile.email}
                                        </a>
                                    </li>
                                    <li className="list-group-item">
                                        <b>position</b>{" "}
                                        <a className="pull-right">
                                            {feedData.fetchSuccess &&
                                                feedData.data.Position &&
                                                feedData.data.Position[0] &&
                                                feedData.data.Position[0].name}
                                        </a>
                                    </li>
                                </ul>

                                <a
                                    href="#"
                                    className="btn btn-primary btn-block"
                                >
                                    <b>เปลี่ยนรูป</b>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="nav-tabs-custom">
                            <ul className="nav nav-tabs">
                                <li className="active">
                                    <a href="#EditProfile" data-toggle="tab">
                                        Edit Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="#EditPassword" data-toggle="tab">
                                        Edit Password
                                    </a>
                                </li>
                            </ul>

                            <div className="tab-content">
                                <div
                                    className="active tab-pane"
                                    id="EditProfile"
                                >
                                    <EditProfile />
                                </div>

                                <div className="tab-pane" id="EditPassword">
                                    <div className="pl-10 pt-5">
                                        <h3>Edit Password</h3>
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
                                                className="col-sm-2 control-label"
                                            >
                                                Old Password:
                                            </label>
                                            <div className="col-sm-9">
                                                <div className="mt-1 relative rounded-md shadow-sm">
                                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
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
                                                        className="form-control"
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
                                                className="col-sm-2 control-label"
                                            >
                                                New Password:
                                            </label>
                                            <div className="col-sm-9">
                                                <div className="mt-1 relative rounded-md shadow-sm">
                                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
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
                                                        className="form-control"
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
                                                className="col-sm-2 control-label"
                                            >
                                                New Password (Confirm):
                                            </label>
                                            <div className="col-sm-9">
                                                <div className="mt-1 relative rounded-md shadow-sm">
                                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
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
                                                        className="form-control"
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
                                                    className="btn btn-danger"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Profile;

const ErrorSpan = ({ children, className }) => {
    return (
        <span className={`text-danger ${className && className} `}>
            {" "}
            {children && children}
        </span>
    );
};
