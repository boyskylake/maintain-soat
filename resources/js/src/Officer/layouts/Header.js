// import React from "react";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useBodyClass } from "../../helpers";
import { userActions } from "../redux/actions";



import { useScript } from "../../helpers";

// import 'font-awesome/css/fontawesome.min.css';

// import { useScript } from "../../helpers";
// import { feedDataAction } from "../redux/actions";
import Services from "../redux/services/services";

const Header = () => {
    // const login = useSelector(state => state.login);
    const dispatch = useDispatch();

    // useBodyClass("hold-transition");
    // useBodyClass("skin-yellow");
    // useBodyClass("sidebar-mini");

    useScript("/officer/dist/js/pages/Officerlayoutscript.js");
    // useScript("/officer/dist/js/pages/Effect/side-menu.js");

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
        // <div>

        <div className="top-bar">
            {/* <!-- BEGIN: Breadcrumb --> */}
            <div className="-intro-x breadcrumb mr-auto hidden sm:flex">
                <a href="" className="">
                    Application
                </a>
                <i
                    data-feather="chevron-right"
                    className="breadcrumb__icon"
                ></i>
                <a href="" className="breadcrumb--active">
                    Dashboard
                </a>
            </div>
            {/* <!-- END: Breadcrumb -->
        <!-- BEGIN: Search --> */}
            <div className="intro-x relative mr-3 sm:mr-6" style={{fontFamily:'Kanit'}}>
                <div className="search hidden sm:block">
                    <input
                        type="text"
                        className="search__input input placeholder-theme-13"
                        placeholder="Search..."
                    />
                    <i className="search__icon fas fa-search"></i>
                </div>
                <a className="notification sm:hidden" href="">
                    <i data-feather="search" className="notification__icon"></i>
                </a>
                <div className="search-result">
                    <div className="search-result__content">
                        <div className="search-result__content__title">
                            Pages
                        </div>
                        <div className="mb-5">
                            <a href="" className="flex items-center">
                                <div className="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full">
                                    <i
                                        className="w-4 h-4"
                                        data-feather="inbox"
                                    ></i>
                                </div>
                                <div className="ml-3">Mail Settings</div>
                            </a>
                            <a href="" className="flex items-center mt-2">
                                <div className="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full">
                                    <i
                                        className="w-4 h-4"
                                        data-feather="users"
                                    ></i>
                                </div>
                                <div className="ml-3">Users & Permissions</div>
                            </a>
                            <a href="" className="flex items-center mt-2">
                                <div className="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full">
                                    <i
                                        className="w-4 h-4"
                                        data-feather="credit-card"
                                    ></i>
                                </div>
                                <div className="ml-3">Transactions Report</div>
                            </a>
                        </div>
                        <div className="search-result__content__title">
                            Users
                        </div>
                        <div className="mb-5">
                            <a href="" className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    {/* <img alt="Midone Laravel Admin Dashboard Starter Kit" className="rounded-full" src="{{ asset('dist/images/' . $faker['photos'][0]) }}"> */}
                                </div>
                                <div className="ml-3">nutty</div>
                                <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                                    nut@nut.com
                                </div>
                            </a>
                        </div>
                        <div className="search-result__content__title">
                            Products
                        </div>

                        <a href="" className="flex items-center mt-2">
                            <div className="w-8 h-8 image-fit">
                                {/* <img alt="Midone Laravel Admin Dashboard Starter Kit" className="rounded-full" src="{{ asset('dist/images/' . $faker['images'][0]) }}"> */}
                            </div>
                            <div className="ml-3">maintain</div>
                            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                                Order{" "}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            {/* !-- END: Search -->
        <!-- BEGIN: Notifications --> */}
            <div className="intro-x dropdown relative mr-auto sm:mr-6">
                <div href="#"className="dropdown-toggle notification notification--bullet cursor-pointer"  data-toggle="dropdown">
                    {/* <i data-feather="bell" className="notification__icon"></i> */}
                    {/* <i className="feather-bell"></i> */}
                    <i className="notification__icon fas fa-bell"></i>
                </div>
                <div className="notification-content dropdown-box mt-8 absolute top-0 left-0 sm:left-auto sm:right-0 z-20 -ml-10 sm:ml-0">
                    <div className="notification-content__box dropdown-box__content box">
                        <div className="notification-content__title">
                            Notifications
                        </div>

                        <div className="cursor-pointer relative flex items-center {{ $key ? 'mt-5' : '' }}">
                            <div className="w-12 h-12 flex-none image-fit mr-1">
                                {/* <img alt="Midone Laravel Admin Dashboard Starter Kit" className="rounded-full" src="{{ asset('dist/images/' . $faker['photos'][0]) }}"> */}
                                <div className="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="ml-2 overflow-hidden">
                                <div className="flex items-center">
                                    <a
                                        href="javascript:;"
                                        className="font-medium truncate mr-5"
                                    >
                                        nut
                                    </a>
                                    <div className="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                                        2021
                                    </div>
                                </div>
                                <div className="w-full truncate text-gray-600">
                                    สู้ๆนะจ้ะ
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // <!-- END: Notifications -->
    // <!-- BEGIN: Account Menu --> */}
            <div className="intro-x dropdown w-8 h-8 relative">
                <div  href="#" className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"  data-toggle="dropdown">
                    {/* <img alt="Midone Laravel Admin Dashboard Starter Kit" src="{{ asset('dist/images/' . $fakers[9]['photos'][0]) }}"/> */}
                    {FeedMenu && FeedMenu[1] && (
                                    <div className="pull-left image">
                                        <img
                                            src={`/storage/${FeedMenu[1].avatar}`}
                                            // className="user-image"
                                            alt="User Image"
                                        />
                                    </div>
                    )}
                </div>
                <div className="dropdown-box mt-10 absolute w-56 top-0 right-0 z-20">
                    <div className="dropdown-box__content box bg-theme-38 text-white">
                        <div className="p-4 border-b border-theme-40">
                            <div className="font-medium">
                                {FeedMenu && FeedMenu[1] && (
                                    <span className="hidden-xs">
                                        {FeedMenu[1].name}
                                    </span>
                                )}
                            </div>
                            <div className="text-xs text-theme-41">
                                {FeedMenu && FeedMenu[1] && (
                                    <span className="hidden-xs">
                                        {FeedMenu[1].role_id}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="p-2">
                            <a href=""className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md">
                                <i className=" fas fa-user w-4 h-4 mr-2"></i>
                                Profile
                            </a>
                            <a href=""className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md">
                                <i className="fas fa-edit w-4 h-4 mr-2"></i>
                                Add Account
                            </a>
                            <a href=""className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md">
                                <i className="fas fa-lock w-4 h-4 mr-2"></i>
                                Reset Password
                            </a>
                            <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md">
                                <i className="w-4 h-4 mr-2 fas fa-question-circle"></i>
                                Help
                            </a>
                        </div>
                        <div className="p-2 border-t border-theme-40">
                            <a href="#"
                                onClick={() =>dispatch(userActions.logout())} 
                                className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"
                            >
                                <i className="w-4 h-4 mr-2 fas fa-toggle-off"></i>
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* // <!-- END: Account Menu --> */}
        </div>
        // </div>
    );
};

export default Header;
