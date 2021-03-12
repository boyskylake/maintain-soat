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
                {/* <link rel="stylesheet" href="{{ asset('officer/dist/fontawesome/css/all.min.css)}}"/> */}
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

            <div className="container shadow-2xl rounded-full py-3 px-6">
                <div className="header-area">
                    <div className="navbar-area">
                        <nav className="site-navbar">
                            <a href="#home" className="site-logo" style={{paddingLeft:"130px"}}>
                                บริษัทโซแอ็ท โซลูชั่น จำกัด
                            </a>
                            {/* แถบด้านบน */}
                            <ul style={{paddingRight:"130px"}}>
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
                            className="pic-login-2 rounded-full py-3 px-6"
                            src="./dist/img/bglogin.png"
                        />
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 col-12 login-form">
                        <h4>กรุณาเข้าสู่ระบบเพื่อใช้งาน !</h4>
                        <div className="form-group">
                            <form onSubmit={(e) => handleSubmit(e)}>

                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        {/* <label htmlFor className="text-xs font-semibold px-1"></label> */}
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                {/* <i className="fa fa-user text-gray-400 text-lg"></i> */}
                                                {/* <i className="far fa-user"></i> */}
                                                <i className="fa fa-user"></i>
                                            </div>
                                            <input
                                                type="email"
                                                onChange={(event) =>
                                                    setUser(event.target.value)
                                                }
                                                // className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                className="w-full rounded border-2 border-custom-200  bg-white p-3 focus:bg-white focus:shadow-lg focus:border-custom-400 max-w-xl "
                                                placeholder="Username"
                                                required
                                                style={{ fontSize: "15px" }}
                                            >

                                            </input>

                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-12">
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center text-3xl">
                                                {/* <i className="mdi mdi-lock-outline text-gray-400 text-lg" /> */}
                                                <i className="fa fa-lock"></i>
                                            </div>
                                            <input
                                                type="password"
                                                onChange={(event) =>
                                                    setPass(event.target.value)
                                                }
                                                className="w-full rounded border-2 border-custom-200  bg-white p-3 focus:bg-white focus:shadow-lg focus:border-custom-400 max-w-xl text-3xl"
                                                placeholder="************"
                                                required
                                                style={{ fontSize: "15px"}}
                                            >

                                            </input>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-gray-50 rounded-lg px-3 py-3 font-semibold text-3xl" type="submit">
                                        {/* text-gray-50 text-sm lg:text-lg md:text-base font-bold p-2 rounded-lg shadow  bg-custom-600 hover:bg-custom-400 hover:shadow-md hover:text-black w-5/6 hover:no-underline  */}
                                            Login
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
