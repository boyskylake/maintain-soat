import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useBodyClass, useScript } from "../../../helpers";
import { userActions } from "../../redux/actions";

const Lookscreen = () => {
    const [pass, setPass] = useState();

    useBodyClass("hold-transition");
    useBodyClass("lockscreen");
    useScript("/officer/bower_components/bootstrap/dist/js/bootstrap.min.js");

    const dispatch = useDispatch();

    const authentication = useSelector((state) => state.authentication);
    let history = useHistory();

    useEffect(() => {
        if (authentication.loggedIn && authentication.refreshIn) {
            // history.goBack();
            history.push("/officer/home");
        }
        if (!authentication.refreshIn && !authentication.loggedIn) {
            history.push("/officer/login");
        }
    }, [authentication, history]);

    let handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userActions.refresh());
    };

    return (
        <div className="lockscreen-wrapper">
            <Helmet>
                <meta
                    name="description"
                    content="บริษัทโซแอ็ท โซลูชั่น จำกัด"
                />
                <meta property="og:locale" content="th_TH" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="บริษัทโซแอ็ท โซลูชั่น จำกัด"
                />
                <meta
                    property="og:description"
                    content="บริษัทโซแอ็ท โซลูชั่น จำกัด"
                />
                <meta property="og:url" content={window.location.href} />
                <link rel="canonical" href={window.location.href} />
                <meta
                    property="og:site_name"
                    content="บริษัทโซแอ็ท โซลูชั่น จำกัด"
                />
                <link
                    rel="stylesheet"
                    href="/officer/bower_components/bootstrap/dist/css/bootstrap.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/officer/bower_components/font-awesome/css/font-awesome.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/officer/bower_components/Ionicons/css/ionicons.min.css"
                />

                <link rel="stylesheet" href="/officer/dist/css/AdminLTE.css" />

                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic"
                />
            </Helmet>
            <div className="lockscreen-logo">
                <b>Soat</b>Officer
            </div>
            {/* User name */}
            <div className="lockscreen-name">John Doe</div>
            {/* START LOCK SCREEN ITEM */}
            <div className="lockscreen-item">
                {/* lockscreen image */}
                <div className="lockscreen-image">
                    <img
                        src="/officer/dist/img/user1-128x128.jpg"
                        alt="User Image"
                    />
                </div>
                {/* /.lockscreen-image */}
                {/* lockscreen credentials (contains the form) */}
                <form
                    className="lockscreen-credentials"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <div className="input-group">
                        <input
                            type="password"
                            onChange={(event) => setPass(event.target.value)}
                            className="form-control"
                            placeholder="password"
                            required
                        />
                        <div className="input-group-btn">
                            <button type="submit" className="btn">
                                <i className="fa fa-arrow-right text-muted" />
                            </button>
                        </div>
                    </div>
                </form>
                {/* /.lockscreen credentials */}
            </div>
            {/* /.lockscreen-item */}
            <div className="help-block text-center">
                Enter your password to retrieve your session
            </div>
            <div className="text-center">
                <a href="login.html">Or sign in as a different user</a>
            </div>
            <div className="lockscreen-footer text-center">
                Copyright © 2014-2016{" "}
                <b>
                    <a href="https://adminlte.io" className="text-black">
                        Almsaeed Studio
                    </a>
                </b>
                <br />
                All rights reserved
            </div>
        </div>
    );
};

export default Lookscreen;
