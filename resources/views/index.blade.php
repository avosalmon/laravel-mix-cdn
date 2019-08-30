<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel Mix CDN</title>
        <link rel="stylesheet" href="{{ asset(mix('/css/app.css')) }}">
    </head>
    <body>
        <h1>Laravel Mix CDN</h1>
        <div id="app">
            <example-component></example-component>
        </div>
        <script src="{{ asset(mix('/js/app.js')) }}"></script>
    </body>
</html>
