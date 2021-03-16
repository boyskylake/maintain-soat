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

    // useBodyClass("hold-transition");
    // useBodyClass("skin-yellow");
    // useBodyClass("sidebar-mini");
    // useScript("/officer/bower_components/bootstrap/dist/js/bootstrap.min.js");

    useEffect(() => {
        let path = new URLSearchParams(search);

        // if (!localStorage.getItem("linetoken")) {
        //     history.push("/linebot/verify?path=" + path.get("path"));
        // }

        if (userAuth.loggedIn) {
            history.push(path.get("path"));
        }
    }, [userAuth, history, search]);

    let handleSubmit = (e) => {
        e.preventDefault();

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
                    property="og:description"
                    content="บริษัทโซแอ็ท โซลูชั่น จำกัด"
                />
                <meta property="og:url" content={window.location.href} />
                <link rel="canonical" href={window.location.href} />
                <meta
                    property="og:site_name"
                    content="บริษัทโซแอ็ท โซลูชั่น จำกัด"
                />
                {/* <link
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
                /> */}
                <link rel="stylesheet" href="/officer/dist/css/style.css" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic"
                />
            </Helmet>
            <div className="min-w-screen min-h-screen bg-white flex items-center justify-center line-login">
                <div
                    className="bg-gray-500 flex overflow-hidden relative"
                    style={{ width: 539, height: 819 }}
                >
                    <div className="h-full w-full px-10 pt-6 pb-20 overflow-y-auto">
                        <button type="button" className="flex text-white mx-8">
                            <img
                                className="w-56 h-45 mx-12 mt-40"
                                src="/officer/dist/img/Linelogo.png"
                            />
                            {/* <span className="font-bold">BMT</span> */}
                            {/* <span>Connect</span> */}
                        </button>
                        <div className="max-w-md mt-4 mx-auto">
                            <form action className>
                                {/* <h1 className="font-medium mb-6 text-white text-3xl">Hi there</h1> */}
                                <div className="mb-4 mt-4 px-8 py-1 ">
                                    <input
                                        placeholder="Username"
                                        id="username"
                                        type="text"
                                        name="username"
                                        className="placeholder-gray-700 w-72 border-gray-400 py-2 px-2 rounded"
                                    />
                                </div>
                                <div className="flex flex-col mb- text-center px-8 py-3 mb-2">
                                    <input
                                        placeholder="Password"
                                        id="password"
                                        type="password"
                                        name="password"
                                        className="placeholder-gray-700 w-72 border border-gray-400 py-2 px-2 rounded"
                                    />
                                </div>
                                <button className="bg-red-500 px-8 py-3  text-white mx-24 rounded-lg ">
                                    Login
                                </button>
                                <div className="flex flex-col text-center"></div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0">
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
