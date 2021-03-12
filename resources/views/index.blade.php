<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'Laravel') }}</title>

    {{-- <!-- CSRF Token --> --}}
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Styles -->
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">

    <script>
    window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>

    {{-- <link href="/officer/dist/fontawesome/css/fontawesome.min.css" rel="stylesheet"> --}}
</head>

<body>
    <div id="root">
        @yield('content')
    </div>
    <!-- Scripts -->
    <script src="{{ mix('/js/manifest.js') }}"></script>
    <script src="{{ mix('/js/vendor.js') }}"></script>
    <script src="{{ mix('/js/app.js') }}"></script>

    <script src="/officer/bower_components/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
    <script src="/officer/bower_components/bootstrap-datepicker/js/bootstrap-datepicker-thai.js"></script>
    <script src="/officer/bower_components/bootstrap-datepicker/js/locales/bootstrap-datepicker.th.js"></script>

</body>

</html>
