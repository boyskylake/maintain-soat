import React from "react";
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
    // useScript(
    //     "/officer/bower_components/bootstrap-datepicker/js/bootstrap-datepicker.js"
    // );
    // useScript(
    //     "/officer/bower_components/bootstrap-datepicker/js/bootstrap-datepicker-thai.js"
    // );
    // useScript(
    //     "/officer/bower_components/bootstrap-datepicker/js/locales/bootstrap-datepicker.th.js"
    // );

    // <!-- bootstrap color picker -->
    useScript(
        "/officer/bower_components/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js"
    );

    // <!-- bootstrap time picker -->
    useScript("/officer/plugins/timepicker/bootstrap-timepicker.min.js");

    return (
        <footer className="main-footer">
            <div className="pull-right hidden-xs">
                <b>Version</b> 2.0.0
            </div>
            <strong>
                Copyright © 2014-2019{" "}
                <a href="https://www.soatsolution.com">Soatsolution</a>.
            </strong>{" "}
            All rights reserved.
        </footer>
    );
};

export default Footer;
