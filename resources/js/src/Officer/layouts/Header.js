// import React from "react";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useBodyClass } from "../../helpers";
import { userActions } from "../redux/actions";

// import { useScript } from "../../helpers";
// import { feedDataAction } from "../redux/actions";
import Services from "../redux/services/services";

const Header = () => {
    // const login = useSelector(state => state.login);
    const dispatch = useDispatch();
    useBodyClass("hold-transition");
    useBodyClass("skin-yellow");
    useBodyClass("sidebar-mini");

    const feedData = useSelector((state) => state.feedData);
    const service = new Services();
    // const [inputs, setInputs] = useState(["ma_coop"]);
    const [coopid, setCoopid] = useState(null);
    const [FeedMenu, setFeedMenu] = useState();
    useEffect(() => {
        async function feedData() {
            // await dispatch(feedDataAction.feedDataGet("/api/v1/officer/menu"));
            service
                .API("/api/v1/officer/menu", { method: "Get" })
                .then((res) => {
                    setFeedMenu(res);
                });
        }
        feedData();
    }, [dispatch]);
    return (
        <header className="main-header">
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
                    type="text/css"
                    href="/info/scripts/fullcalendar/fullcalendar.min.css"
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
                <link
                    rel="stylesheet"
                    href="/officer/bower_components/jvectormap/jquery-jvectormap.css"
                />
                <link
                    rel="stylesheet"
                    href="/officer/bower_components/bootstrap-daterangepicker/daterangepicker.css"
                />
                <link
                    href="/officer/bower_components/bootstrap-datepicker/css/datepicker.css"
                    rel="stylesheet"
                    media="screen"
                ></link>
                {/* <link
                    rel="stylesheet"
                    href="/officer/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css"
                /> */}
                <link rel="stylesheet" href="/officer/plugins/iCheck/all.css" />
                <link
                    rel="stylesheet"
                    href="/officer/bower_components/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/officer/plugins/timepicker/bootstrap-timepicker.min.css"
                />
                <link
                    rel="stylesheet"
                    href="/officer/bower_components/select2/dist/css/select2.min.css"
                />
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
            {/* Logo */}
            <a href="index2.html" className="logo">
                {/* mini logo for sidebar mini 50x50 pixels */}
                <span className="logo-mini">
                    <b>A</b>LT
                </span>
                {/* logo for regular state and mobile devices */}
                <span className="logo-lg">
                    {/* <b>โซแอ็ทโซลูชั่น</b> จำกัด */}
                    <img
                        src="dist/img/logo.png"
                        className="logo-lg"
                        alt="Logo soat"
                    />
                </span>
            </a>
            {/* Header Navbar: style can be found in header.less */}
            <nav className="navbar navbar-static-top">
                {/* Sidebar toggle button*/}
                <a
                    href="#"
                    className="sidebar-toggle"
                    data-toggle="push-menu"
                    role="button"
                >
                    <span className="sr-only">Toggle navigation</span>
                </a>
                {/* Navbar Right Menu */}
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        {/* Messages: style can be found in dropdown.less*/}
                        <li className="dropdown messages-menu">
                            <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                            >
                                <i className="fa fa-envelope-o" />
                                <span className="label label-success">4</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="header">You have 4 messages</li>
                                <li>
                                    {/* inner menu: contains the actual data */}
                                    <ul className="menu">
                                        <li>
                                            start message
                                            <a href="#"></a>
                                        </li>
                                        {/* end message */}
                                        <li>
                                            <a href="#">
                                                <div className="pull-left">
                                                    <img
                                                        src="dist/img/user3-128x128.jpg"
                                                        className="img-circle"
                                                        alt="User Image"
                                                    />
                                                </div>
                                                <h4>
                                                    AdminLTE Design Team
                                                    <small>
                                                        <i className="fa fa-clock-o" />{" "}
                                                        2 hours
                                                    </small>
                                                </h4>
                                                <p>
                                                    Why not buy a new awesome
                                                    theme?
                                                </p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="pull-left">
                                                    <img
                                                        src="dist/img/user4-128x128.jpg"
                                                        className="img-circle"
                                                        alt="User Image"
                                                    />
                                                </div>
                                                <h4>
                                                    Developers
                                                    <small>
                                                        <i className="fa fa-clock-o" />{" "}
                                                        Today
                                                    </small>
                                                </h4>
                                                <p>
                                                    Why not buy a new awesome
                                                    theme?
                                                </p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="pull-left">
                                                    <img
                                                        src="dist/img/user3-128x128.jpg"
                                                        className="img-circle"
                                                        alt="User Image"
                                                    />
                                                </div>
                                                <h4>
                                                    Sales Department
                                                    <small>
                                                        <i className="fa fa-clock-o" />{" "}
                                                        Yesterday
                                                    </small>
                                                </h4>
                                                <p>
                                                    Why not buy a new awesome
                                                    theme?
                                                </p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="pull-left">
                                                    <img
                                                        src="dist/img/user4-128x128.jpg"
                                                        className="img-circle"
                                                        alt="User Image"
                                                    />
                                                </div>
                                                <h4>
                                                    Reviewers
                                                    <small>
                                                        <i className="fa fa-clock-o" />{" "}
                                                        2 days
                                                    </small>
                                                </h4>
                                                <p>
                                                    Why not buy a new awesome
                                                    theme?
                                                </p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer">
                                    <a href="#">See All Messages</a>
                                </li>
                            </ul>
                        </li>
                        {/* Notifications: style can be found in dropdown.less */}
                        <li className="dropdown notifications-menu">
                            <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                            >
                                <i className="fa fa-bell-o" />
                                <span className="label label-warning">10</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="header">
                                    You have 10 notifications
                                </li>
                                <li>
                                    {/* inner menu: contains the actual data */}
                                    <ul className="menu">
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-users text-aqua" />{" "}
                                                5 new members joined today
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-warning text-yellow" />{" "}
                                                Very long description here that
                                                may not fit into the page and
                                                may cause design problems
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-users text-red" />{" "}
                                                5 new members joined
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-shopping-cart text-green" />{" "}
                                                25 sales made
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-user text-red" />{" "}
                                                You changed your username
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer">
                                    <a href="#">View all</a>
                                </li>
                            </ul>
                        </li>
                        {/* Tasks: style can be found in dropdown.less */}
                        <li className="dropdown tasks-menu">
                            <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                            >
                                <i className="fa fa-flag-o" />
                                <span className="label label-danger">9</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="header">You have 9 tasks</li>
                                <li>
                                    {/* inner menu: contains the actual data */}
                                    <ul className="menu">
                                        <li>
                                            {/* Task item */}
                                            <a href="#">
                                                <h3>
                                                    Design some buttons
                                                    <small className="pull-right">
                                                        20%
                                                    </small>
                                                </h3>
                                                <div className="progress xs">
                                                    <div
                                                        className="progress-bar progress-bar-aqua"
                                                        style={{ width: "20%" }}
                                                        role="progressbar"
                                                        aria-valuenow={20}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        <span className="sr-only">
                                                            20% Complete
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        {/* end task item */}
                                        <li>
                                            {/* Task item */}
                                            <a href="#">
                                                <h3>
                                                    Create a nice theme
                                                    <small className="pull-right">
                                                        40%
                                                    </small>
                                                </h3>
                                                <div className="progress xs">
                                                    <div
                                                        className="progress-bar progress-bar-green"
                                                        style={{ width: "40%" }}
                                                        role="progressbar"
                                                        aria-valuenow={20}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        <span className="sr-only">
                                                            40% Complete
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        {/* end task item */}
                                        <li>
                                            {/* Task item */}
                                            <a href="#">
                                                <h3>
                                                    Some task I need to do
                                                    <small className="pull-right">
                                                        60%
                                                    </small>
                                                </h3>
                                                <div className="progress xs">
                                                    <div
                                                        className="progress-bar progress-bar-red"
                                                        style={{ width: "60%" }}
                                                        role="progressbar"
                                                        aria-valuenow={20}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        <span className="sr-only">
                                                            60% Complete
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        {/* end task item */}
                                        <li>
                                            {/* Task item */}
                                            <a href="#">
                                                <h3>
                                                    Make beautiful transitions
                                                    <small className="pull-right">
                                                        80%
                                                    </small>
                                                </h3>
                                                <div className="progress xs">
                                                    <div
                                                        className="progress-bar progress-bar-yellow"
                                                        style={{ width: "80%" }}
                                                        role="progressbar"
                                                        aria-valuenow={20}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        <span className="sr-only">
                                                            80% Complete
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        {/* end task item */}
                                    </ul>
                                </li>
                                <li className="footer">
                                    <a href="#">View all tasks</a>
                                </li>
                            </ul>
                        </li>
                        {/* User Account: style can be found in dropdown.less */}
                        <li className="dropdown user user-menu">
                            <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                            >
                                {/* <img
                                    src="dist/img/user2-160x160.jpg"
                                    className="user-image"
                                    alt="User Image"
                                /> */}
                                {FeedMenu && FeedMenu[1] && (
                                    <div className="pull-left image">
                                        <img
                                            src={`/storage/${FeedMenu[1].avatar}`}
                                            className="user-image"
                                            alt="User Image"
                                        />
                                    </div>
                                )}
                                {FeedMenu && FeedMenu[1] && (
                                    <span className="hidden-xs">
                                        {FeedMenu[1].name}
                                    </span>
                                )}
                                {/* <span className="hidden-xs">
                                    Alexander Pierce
                                </span> */}
                            </a>
                            <ul className="dropdown-menu">
                                {/* User image */}
                                <li className="user-header">
                                    {/* <img
                                        src="dist/img/user2-160x160.jpg"
                                        className="img-circle"
                                        alt="User Image"
                                    /> */}
                                    {FeedMenu && FeedMenu[1] && (
                                        <img
                                            src={`/storage/${FeedMenu[1].avatar}`}
                                            className="rounded-full  mx-auto flex items-center justify-center "
                                            alt="User Image"
                                            style={{ width: "100px",height: "100px" }}
                                        />
                                    )}
                                    {FeedMenu && FeedMenu[1] && (
                                        <p>
                                            {FeedMenu[1].name}

                                            <small>
                                                {FeedMenu[1].email}
                                            </small>
                                        </p>
                                    )}
                                    {/* <p>
                                        Alexander Pierce - Web Developer
                                        <small>Member since Nov. 2012</small>
                                    </p> */}
                                </li>
                                {/* Menu Body */}
                                <li className="user-body">
                                    <div className="row">
                                        <div className="col-xs-4 text-center">
                                            <a href="#">Followers</a>
                                        </div>
                                        <div className="col-xs-4 text-center">
                                            <a href="#">Sales</a>
                                        </div>
                                        <div className="col-xs-4 text-center">
                                            <a href="#">Friends</a>
                                        </div>
                                    </div>
                                    {/* /.row */}
                                </li>
                                {/* Menu Footer*/}
                                <li className="user-footer">
                                    <div className="pull-left">
                                        <a
                                            href="#"
                                            className="btn btn-default btn-info"
                                        >
                                            Profile
                                        </a>
                                    </div>
                                    <div className="pull-right">
                                        <a
                                            href="#"
                                            onClick={() =>
                                                dispatch(userActions.logout())
                                            }
                                            className="btn btn-default btn-danger"
                                        >
                                            Sign out
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        {/* Control Sidebar Toggle Button */}
                        <li>
                            <a href="#" data-toggle="control-sidebar">
                                <i className="fa fa-gears" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
