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

    {{-- <!-- jQuery 3 --> --}}
    <script src="{{ asset('officer/bower_components/jquery/dist/jquery.min.js') }}"></script>

    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

     {{-- <!-- jvectormap --> --}}
     <link rel="stylesheet" href="{{ asset('officer/bower_components/jvectormap/jquery-jvectormap.css') }}">

    {{-- <link href="/officer/dist/fontawesome/css/fontawesome.min.css" rel="stylesheet"> --}}
    <link rel="stylesheet" href="{{ asset('officer/dist/fontawesome/css/all.min.css')}}">
</head>

<body>
    <div id="root">
        @yield('content')
    </div>
    <!-- Scripts -->
    <script src="{{ mix('/js/manifest.js') }}"></script>
    <script src="{{ mix('/js/vendor.js') }}"></script>
    <script src="{{ mix('/js/app.js') }}"></script>

    {{-- <!-- jQuery 3 --> --}}
    {{-- <script src="{{ asset('officer/bower_components/jquery/dist/jquery.min.js') }}"></script> --}}
    

</body>

</html>
