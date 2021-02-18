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
        <div>
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
                    property="og:descrpition"
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

                <style type="text/css">{`
                    html, body {
                        height: unset;
                    }
                    .form-control {
                        display: block;
                        width: 100%;
                        height: 45px;
                        padding: 6px 12px;
                        font-size: 14px;
                        line-height: 1.42857143;
                        color: #555;
                        background-color: #fff;
                        background-image: none;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
                        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
                        -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
                        -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
                        -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
                        transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
                        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
                        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
                    }
                `}</style>
            </Helmet>

            <div className="container">
                <div className="header-area">
                    <div className="navbar-area">
                        <nav className="site-navbar">
                            <a href="#home" className="site-logo">
                                บริษัทโซแอ็ท โซลูชั่น จำกัด
                            </a>
                            {/* แถบด้านบน */}
                            <ul>
                                <li>
                                    <a href="https://www.soatsolution.com/home">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.soatsolution.com/home#sec-1">
                                        About us
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.soatsolution.com/home#sec-7">
                                        Services
                                    </a>
                                </li>
                            </ul>

                            <button className="nav-toggler">
                                <span></span>
                            </button>
                        </nav>
                    </div>
                </div>
                <div
                    id="login-box-body"
                    className="row col-lg-12 col-md-12 col-sm-12 col-12"
                >
                    <div className="col-lg-6 col-md-6">
                        {/* รอภาพจากป๊อป */}
                        <img
                            className="pic-login-2"
                            src="https://sv1.picz.in.th/images/2021/02/18/obsLEe.png"
                        />
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 col-12 login-form">
                        <h4>กรุณาเข้าสู่ระบบเพื่อใช้งาน !</h4>
                        <div className="form-group">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="form-group has-feedback">
                                    <input
                                        type="Email"
                                        onChange={(event) =>
                                            setUser(event.target.value)
                                        }
                                        className="form-control"
                                        placeholder="Username"
                                        required
                                        height="30"
                                    />
                                    <svg
                                        width="1.2em"
                                        height="1.2em"
                                        viewBox="0 0 16 16"
                                        className="bi bi-person-fill"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    ></svg>
                                    <span className="glyphicon glyphicon-lock form-control-feedback" />
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
                                    <div className="login-btn">
                                        <button
                                            className="btn btn-primary "
                                            type="submit"
                                        >
                                            Log in
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
