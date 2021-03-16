<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">

    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    {{-- <!-- CSRF Token --> --}}
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    {{-- <!-- Styles --> --}}
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
     <!-- Bootstrap 3.3.7 -->
     {{-- <link rel="stylesheet" href="{{ asset('officer/bower_components/bootstrap/dist/css/bootstrap.min.css') }}"> --}}
     <!-- jvectormap -->
     {{-- <link rel="stylesheet" href="{{ asset('officer/bower_components/jvectormap/jquery-jvectormap.css') }}"> --}}

    {{-- <link rel="stylesheet" href="{{ asset('officer/dist/fontawesome/css/all.min.css')}}"> --}}

    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />

    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
           {{-- <!-- Select2 --> --}}

    <link rel="stylesheet" href="{{ asset('officer/bower_components/select2/dist/css/select2.min.css') }}">

    <link rel="stylesheet" href="{{ asset('officer/dist/fontawesome/css/all.min.css')}}">
{{-- 
      <link rel="stylesheet" href="{{ asset('officer/bower_components/font-awesome/css/font-awesome.min.css') }}"> --}}



</head>

<body class="hold-transition skin-yellow sidebar-mini">

    <div id="root" class="wrapper"></div>

    {{-- <!-- Scripts --> --}}
    <script src="{{ mix('/js/manifest.js') }}"></script>
    <script src="{{ mix('/js/vendor.js') }}"></script>
    <script src="{{ mix('/js/app.js') }}"></script>
    <script src="{{ mix('') }}"></script>

    {{-- <!-- jQuery 3 --> --}}
    {{-- <script src="{{ asset('officer/bower_components/jquery/dist/jquery.min.js') }}"></script> --}}

    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

</body>

</html>
