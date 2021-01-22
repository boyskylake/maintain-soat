<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">

    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    {{-- <!-- CSRF Token --> --}}
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    {{-- <!-- Styles --> --}}
    {{-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> --}}

    {{-- <!-- Bootstrap 3.3.7 --> --}}
    <link rel="stylesheet" href="{{ asset('officer/bower_components/bootstrap/dist/css/bootstrap.min.css') }}">
    {{-- <!-- Font Awesome --> --}}
    <link rel="stylesheet" href="{{ asset('officer/bower_components/font-awesome/css/font-awesome.min.css') }}">
    {{-- <!-- Ionicons --> --}}
    <link rel="stylesheet" href="{{ asset('officer/bower_components/Ionicons/css/ionicons.min.css') }}">
    {{-- <!-- jvectormap --> --}}
    <link rel="stylesheet" href="{{ asset('officer/bower_components/jvectormap/jquery-jvectormap.css') }}">
    {{-- <!-- daterange picker --> --}}
    <link rel="stylesheet" href="{{ asset('officer/bower_components/bootstrap-daterangepicker/daterangepicker.css') }}">
    {{-- <!-- bootstrap datepicker --> --}}
    <link rel="stylesheet"
        href="{{ asset('officer/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css') }}">
    {{-- <!-- iCheck for checkboxes and radio inputs --> --}}
    <link rel="stylesheet" href="{{ asset('officer/plugins/iCheck/all.css') }}">
    {{-- <!-- Bootstrap Color Picker --> --}}
    <link rel="stylesheet"
        href="{{ asset('officer/bower_components/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css') }}">
    {{-- <!-- Bootstrap time Picker --> --}}
    <link rel="stylesheet" href="{{ asset('officer/plugins/timepicker/bootstrap-timepicker.min.css') }}">
    {{-- <!-- Select2 --> --}}
    <link rel="stylesheet" href="{{ asset('officer/bower_components/select2/dist/css/select2.min.css') }}">
    {{-- <!-- Theme style --> --}}
    <link rel="stylesheet" href="{{ asset('officer/dist/css/AdminLTE.css') }}">
    {{-- <!-- AdminLTE Skins. Choose a skin from the css/skins
        folder instead of downloading all of them to reduce the load. --> --}}
    <link rel="stylesheet" href="{{ asset('officer/dist/css/skins/_all-skins.min.css') }}">
    {{-- <!-- Fonts --> --}}
    {{-- style --}}
    <link rel="stylesheet" href="{{ asset('officer/dist/css/style.css') }}">
    {{-- <link rel="dns-prefetch" href="//fonts.gstatic.com"> --}}
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">

</head>

<body class="hold-transition skin-yellow sidebar-mini">

    <div id="root" class="wrapper"></div>

    {{-- <!-- Scripts --> --}}
    <script src="{{ asset('js/app.js') }}"></script>
    {{-- <!-- jQuery 3 --> --}}
    <script src="{{ asset('officer/bower_components/jquery/dist/jquery.min.js') }}"></script>
    {{-- <!-- Bootstrap 3.3.7 --> --}}
    <script src="{{ asset('officer/bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>
    {{-- <!-- FastClick --> --}}
    <script src="{{ asset('officer/bower_components/fastclick/lib/fastclick.js') }}"></script>
    {{-- <!-- AdminLTE App --> --}}
    <script src="{{ asset('officer/dist/js/adminlte.min.js') }}"></script>
    {{-- <!-- Sparkline --> --}}
    <script src="{{ asset('officer/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js') }}"></script>
    {{-- <!-- jvectormap  --> --}}
    <script src="{{ asset('officer/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js') }}"></script>
    <script src="{{ asset('officer/plugins/jvectormap/jquery-jvectormap-world-mill-en.js') }}"></script>
    {{-- <!-- SlimScroll --> --}}
    <script src="{{ asset('officer/bower_components/jquery-slimscroll/jquery.slimscroll.min.js') }}"></script>
    {{-- <!-- ChartJS --> --}}
    <script src="{{ asset('officer/bower_components/chart.js/Chart.js') }}"></script>
    {{-- <!-- iCheck 1.0.1 --> --}}
    <script src="{{ asset('officer/plugins/iCheck/icheck.min.js') }}"></script>
    {{-- <!-- Select2 --> --}}
    <script src="{{ asset('officer/bower_components/select2/dist/js/select2.full.min.js') }}"></script>
    {{-- <!-- InputMask --> --}}
    <script
        src="{{ asset('officer/bower_components/inputmask/dist/inputmask/dependencyLibs/inputmask.dependencyLib.js') }}">
    </script>
    <script src="{{ asset('officer/bower_components/inputmask/dist/inputmask/inputmask.js') }}"></script>
    <script src="{{ asset('officer/bower_components/inputmask/dist/inputmask/inputmask.date.extensions.js') }}">
    </script>

    {{-- <script src="{{ asset('officer/plugins/input-mask/jquery.inputmask.js') }}"></script>
    <script src="{{ asset('officer/plugins/input-mask/jquery.inputmask.date.extensions.js') }}"></script>
    <script src="{{ asset('officer/plugins/input-mask/jquery.inputmask.extensions.js') }}"></script> --}}
    {{-- <!-- date-range-picker --> --}}
    <script src="{{ asset('officer/bower_components/moment/min/moment.min.js') }}"></script>
    <script src="{{ asset('officer/bower_components/bootstrap-daterangepicker/daterangepicker.js') }}"></script>
    {{-- <!-- bootstrap datepicker --> --}}
    <script src="{{ asset('officer/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js') }}">
    </script>
    <script src="{{ asset('officer/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker-custom.js') }}">
    </script>
    {{-- <!-- thai extension --> --}}
    <script
        src="{{ asset('officer/bower_components/bootstrap-datepicker/dist/locales/bootstrap-datepicker.th.min.js') }}"
        charset="UTF-8"></script>

    {{-- <!-- bootstrap color picker --> --}}
    <script src="{{ asset('officer/bower_components/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js') }}">
    </script>
    {{-- <!-- bootstrap time picker --> --}}
    <script src="{{ asset('officer/plugins/timepicker/bootstrap-timepicker.min.js') }}"></script>

    {{-- <script src="{{ asset('js/saveorder.js') }}"></script> --}}
    {{-- <script src="{{ asset('officer/dist/js/pages/dashboard2.js') }}"></script> --}}
    {{-- <!-- AdminLTE for demo purposes --> --}}
    {{-- <script src="{{ asset('officer/dist/js/demo.js') }}"></script> --}}

    {{-- <script src="{{ asset('officer/bower_components/bootstrap-datepicker/dist/js/locales/bootstrap-datepicker.th.min.js') }}"
    charset="UTF-8"></script> --}}

</body>

</html>
