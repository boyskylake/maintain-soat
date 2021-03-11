import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";

import { useScript } from "../../../helpers";
import { feedDataAction } from "../../redux/actions";

import { useForm } from "react-hook-form";
import Services from "../../redux/services/services";
import { NotificationManager } from "react-notifications";
import toastr from "toastr";

function Profile() {
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);
    const { register, handleSubmit, watch, errors } = useForm();

    // const [inputs, setInputs] = useState(["ma_coop"]);
    const [coopid, setCoopid] = useState(null);
    // const [FeedMenu, setFeedMenu] = useState();

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
        const requestOptions = {
            method: "POST",
            data: JSON.stringify(data),
        };

        services
            .API("/api/v1/officer/Editprofile", requestOptions)
            .then((res) => {
                // console.log(res, res && res.rc_code, res && res.message);
                if (res && res.rc_code == "1") {
                    console.log('success')
                    // NotificationManager.success(
                    //     res && res.message,
                    //     "สำเร็จ",
                    //     5000
                    // );
                    toastr.success(res && res.message, "Success",5000);
                    // alert(res && res.message)
                } else {
                    console.log('failse')
                    // NotificationManager.error(
                    //     res && res.message,
                    //     "Error",
                    //     5000
                    // );
                    toastr.error(res && res.message, "Error",5000);
                    // alert(res && res.message)
                }
            });
    };
    console.log(
        feedData.fetchSuccess && feedData.data && feedData.data.Profile
    );
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Profile
                    <small>Version 2.0</small>
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
                                <img
                                    className="rounded-full  mx-auto flex items-center justify-center ring-4 "
                                    src={`/storage/${
                                        feedData.fetchSuccess &&
                                        feedData.data.Profile &&
                                        feedData.data.Profile.avatar
                                    }`}
                                    alt="User Image"
                                    style={{ width: "150px", height: "150px" }}
                                />
                                <br></br>
                                <h3 className="profile-username text-center">
                                    {feedData.fetchSuccess &&
                                        feedData.data.Profile &&
                                        feedData.data.Profile.name}
                                </h3>

                                <p className="text-muted text-center">
                                    {feedData.fetchSuccess &&
                                        feedData.data.Position[0] &&
                                        feedData.data.Position[0].name}
                                </p>

                                <ul className="list-group list-group-unbordered">
                                    <li className="list-group-item">
                                        <b>Name</b>{" "}
                                        <a className="pull-right">
                                            {feedData.fetchSuccess &&
                                                feedData.data.Profile &&
                                                feedData.data.Profile.name}
                                        </a>
                                    </li>
                                    <li className="list-group-item">
                                        <b>E-mail</b>{" "}
                                        <a className="pull-right">
                                            {feedData.fetchSuccess &&
                                                feedData.data.Profile &&
                                                feedData.data.Profile.email}
                                        </a>
                                    </li>
                                    <li className="list-group-item">
                                        <b>position</b>{" "}
                                        <a className="pull-right">
                                            {feedData.fetchSuccess &&
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
                            <div className="pl-10 pt-5">
                                <h3>Edit Profile</h3>
                            </div>

                            <form
                                className="form-horizontal p-10"
                                onSubmit={handleSubmit(OnSubmitEditProfile)}
                            >
                                <div className="form-group">
                                    <label
                                        htmlFor="inputName"
                                        className="col-sm-2 control-label"
                                    >
                                        Name:
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            ref={register({})}
                                            type="name"
                                            className="form-control"
                                            id="inputName"
                                            name="inputName"
                                            placeholder="Name"
                                            Value={
                                                feedData.fetchSuccess &&
                                                feedData.data.Profile &&
                                                feedData.data.Profile.name
                                            }
                                        ></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        htmlFor="inputEmail"
                                        className="col-sm-2 control-label"
                                    >
                                        E-mail:
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            ref={register({})}
                                            type="email"
                                            className="form-control"
                                            id="inputEmail"
                                            name="inputEmail"
                                            placeholder="E-mail"
                                            Value={
                                                feedData.fetchSuccess &&
                                                feedData.data.Profile &&
                                                feedData.data.Profile.email
                                            }
                                        ></input>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label
                                        htmlFor="inputEmail"
                                        className="col-sm-2 control-label"
                                    >
                                        Password:
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            ref={register({})}
                                            type="name"
                                            className="form-control"
                                            id="inputPassword"
                                            name="inputPassword"
                                            placeholder="Password"
                                            Value={
                                                feedData.fetchSuccess &&
                                                feedData.data.Profile &&
                                                feedData.data.Profile.password
                                            }
                                        ></input>
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
            </section>
        </div>
    );
}
export default Profile;
