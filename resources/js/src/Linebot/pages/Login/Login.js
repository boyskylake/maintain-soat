import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
// import liff from "@line/liff";

import { useBodyClass, useScript } from "../../../helpers";

import { userActions } from "../../redux/actions";

const Login = () => {
    const [user, setUser] = useState();
    const [pass, setPass] = useState();

    const userAuth = useSelector((state) => state.userline);

    const { search } = useLocation();
    let history = useHistory();
    const dispatch = useDispatch();

    useBodyClass("hold-transition");
    useBodyClass("skin-yellow");
    useBodyClass("sidebar-mini");
    useScript("/officer/bower_components/bootstrap/dist/js/bootstrap.min.js");

    useEffect(() => {
        let path = new URLSearchParams(search);

        if (!localStorage.getItem("linetoken")) {
            history.push("/linebot/verify?path=" + path.get("path"));
        }

        if (userAuth.loggedIn) {
            history.push(path.get("path"));
        }
    }, [userAuth, history, search]);

    let handleSubmit = (e) => {
        e.preventDefault();

        dispatch(userActions.login(user, pass));
    };

    return (
        <div className="wrapper">
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

                <link rel="stylesheet" href="/officer/plugins/iCheck/all.css" />

                <link rel="stylesheet" href="/officer/dist/css/AdminLTE.css" />
                <link
                    rel="stylesheet"
                    href="/officer/dist/css/skins/_all-skins.min.css"
                />
                <link rel="stylesheet" href="/officer/dist/css/style.css" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic"
                />
            </Helmet>
            <div className="login-box login-page">
                <div className="login-logo">
                    <img src=" "/>
                    <a href="../../index2.html">
                        <b>Soat</b>Officer
                    </a>
                </div>
                {/* /.login-logo */}
                <div className="login-box-body">
                    <p className="login-box-msg">
                        Sign in to start your session{" "}
                    </p>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {/* <img id="pictureUrl" /> */}
                        <input id="userId" hidden />
                        <input id="token" hidden />
                        <div className="form-group has-feedback">
                            <input
                                type="text"
                                onChange={(event) =>
                                    setUser(event.target.value)
                                }
                                className="form-control"
                                placeholder="Username"
                                required
                            />
                            <span className="glyphicon glyphicon-envelope form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input
                                type="password"
                                onChange={(event) =>
                                    setPass(event.target.value)
                                }
                                className="form-control"
                                placeholder="Password"
                                required
                            />
                            <span className="glyphicon glyphicon-lock form-control-feedback" />
                        </div>
                        <div className="row">
                            {/* /.col */}
                            <div className="col-xs-4">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block btn-flat"
                                >
                                    Sign In
                                </button>
                            </div>
                            {/* /.col */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
