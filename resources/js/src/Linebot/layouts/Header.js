import React from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useBodyClass } from "../../helpers";

const Header = () => {
    // const login = useSelector(state => state.login);
    // const dispatch = useDispatch();
    useBodyClass("hold-transition");
    useBodyClass("skin-yellow");
    useBodyClass("layout-top-nav");

    return (
        <Helmet>
            <meta name="description" content="บริษัทโซแอ็ท โซลูชั่น จำกัด" />
            <meta property="og:locale" content="th_TH" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="บริษัทโซแอ็ท โซลูชั่น จำกัด" />
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
    );
};

export default Header;
