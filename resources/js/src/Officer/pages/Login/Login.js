import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import { history } from "../../../helpers";
import toastr from "toastr";
import { useBodyClass, useScript } from "../../../helpers";
// import { login } from '../actions';

import { userActions } from "../../redux/actions";

const Login = () => {
    const [user, setUser] = useState();
    const [pass, setPass] = useState();

    useBodyClass("hold-transition");
    useBodyClass("skin-yellow");
    useBodyClass("sidebar-mini");
    useScript("/officer/bower_components/bootstrap/dist/js/bootstrap.min.js");

    const dispatch = useDispatch();

    const authentication = useSelector((state) => state.authentication);
    let history = useHistory();

    useEffect(() => {
        if (authentication.loggedIn) {
            history.push("/officer/home");
        }
    }, [authentication, history]);

    let handleSubmit = (e) => {
        e.preventDefault();
        // toastr.info(
        //     "Are you the 6 fingered man?\n dfmadskfmsd;flmsdflsad; \n adkfadskfl;sdk;l"
        // );
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
                        <div className="form-group has-feedback">
                            <input
                                type="email"
                                onChange={(event) =>
                                    setUser(event.target.value)
                                }
                                className="form-control"
                                placeholder="Email"
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
                            {/* <div className="col-xs-8">
                        <div className="checkbox icheck">
                            <label>
                            <input type="checkbox" /> Remember Me
                            </label>
                        </div>
                        </div> */}
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
                    {/* <div className="social-auth-links text-center">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook" /> Sign in using
                    Facebook</a>
                <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus" /> Sign in using
                    Google+</a>
                </div> */}
                    {/* /.social-auth-links */}
                    {/* <a href="#">I forgot my password</a><br />
                <a href="register.html" className="text-center">Register a new membership</a> */}
                </div>
            </div>
        </div>
    );
};

export default Login;
