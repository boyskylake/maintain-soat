import React, { Component } from "react";
// import { Helmet } from "react-helmet";
import { useScript } from "../../helpers";

const Footer = () => {
    // <!-- Bootstrap 3.3.7 -->
    useScript("/officer/bower_components/bootstrap/dist/js/bootstrap.min.js");
    // <!-- FastClick -->
    useScript("/officer/bower_components/fastclick/lib/fastclick.js");
    // <!-- AdminLTE App -->
    useScript("/officer/dist/js/adminlte.min.js");
    // <!-- Sparkline -->
    useScript(
        "/officer/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js"
    );
    // <!-- SlimScroll -->
    useScript(
        "/officer/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"
    );
    // <!-- ChartJS -->
    useScript("/officer/bower_components/chart.js/Chart.js");
    // <!-- iCheck 1.0.1 -->
    useScript("/officer/plugins/iCheck/icheck.min.js");
    // <!-- Select2 -->
    useScript("/officer/bower_components/select2/dist/js/select2.full.min.js");

    // <!-- date-range-picker -->
    useScript(
        "/officer/bower_components/bootstrap-daterangepicker/daterangepicker.js"
    );

    // <!-- bootstrap datepicker -->
    useScript(
        "/officer/bower_components/bootstrap-datepicker/js/bootstrap-datepicker.js"
    );
    useScript(
        "/officer/bower_components/bootstrap-datepicker/js/bootstrap-datepicker-thai.js"
    );
    useScript(
        "/officer/bower_components/bootstrap-datepicker/js/locales/bootstrap-datepicker.th.js"
    );
    // useScript(
    //     "/officer/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"
    // );
    // useScript(
    //     "/officer/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker-custom.js"
    // );
    // useScript(
    //     "/officer/bower_components/bootstrap-datepicker/dist/locales/bootstrap-datepicker.th.min.js"
    // );

    // <!-- bootstrap color picker -->
    useScript(
        "/officer/bower_components/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js"
    );
    // <!-- bootstrap time picker -->
    useScript("/officer/plugins/timepicker/bootstrap-timepicker.min.js");

    return (
        <footer className="main-footer">
            {/* <Helmet>
                <script src="/officer/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
                <script src="/officer/bower_components/fastclick/lib/fastclick.js"></script>
                <script src="/officer/dist/js/adminlte.min.js"></script>
                <script src="/officer/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js"></script>
                <script src="/officer/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
                <script src="/officer/plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
                <script src="/officer/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
                <script src="/officer/bower_components/chart.js/Chart.js"></script>
                <script src="/officer/plugins/iCheck/icheck.min.js"></script>
                <script src="/officer/bower_components/select2/dist/js/select2.full.min.js"></script>
                <script src="/officer/bower_components/bootstrap-daterangepicker/daterangepicker.js"></script>
                <script src="/officer/bower_components/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
                <script src="/officer/bower_components/bootstrap-datepicker/js/bootstrap-datepicker-thai.js"></script>
                <script src="/officer/bower_components/bootstrap-datepicker/js/locales/bootstrap-datepicker.th.js"></script>
                <script src="/officer/bower_components/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js"></script>
                <script src="/officer/plugins/timepicker/bootstrap-timepicker.min.js"></script>
            </Helmet> */}
            <div className="pull-right hidden-xs">
                <b>Version</b> 2.4.18
            </div>
            <strong>
                Copyright © 2014-2019 <a href="https://adminlte.io">AdminLTE</a>
                .
            </strong>{" "}
            All rights reserved.
        </footer>
    );
};

export default Footer;
