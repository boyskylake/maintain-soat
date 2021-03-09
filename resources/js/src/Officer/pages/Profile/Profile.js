import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";

import { useScript } from "../../../helpers";
import { feedDataAction } from "../../redux/actions";

function Profile() {
    const dispatch = useDispatch();
    const feedData = useSelector((state) => state.feedData);

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

                            <img className="rounded-full  mx-auto flex items-center justify-center ring-4 "
                               src={`/storage/${feedData.fetchSuccess &&
                                feedData.data.Profile &&
                                feedData.data.Profile.avatar}`}
                                alt="User Image"
                                style={{ width: "200px",height: "200px" }}
                                />

                                <h3 className="profile-username text-center">
                                    {feedData.fetchSuccess &&
                                        feedData.data.Profile &&
                                        feedData.data.Profile.name}
                                </h3>

                                <p className="text-muted text-center">
                                Software Engineer
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
                                        <a className="pull-right">-</a>
                                    </li>
                                </ul>

                                <a
                                    href="#"
                                    className="btn btn-primary btn-block"
                                >
                                    <b>Follow</b>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Profile;
