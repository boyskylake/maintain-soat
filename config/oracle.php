<?php

return [
    'oracle' => [
        'driver'         => 'oracle',
        'tns'            => env('ORA_TNS', ''),
        'host'           => env('ORA_HOST', ''),
        'port'           => env('ORA_PORT', '1521'),
        'database'       => env('ORA_DATABASE', ''),
        'username'       => env('ORA_USERNAME', ''),
        'password'       => env('ORA_PASSWORD', ''),
        'charset'        => env('ORA_CHARSET', 'AL32UTF8'),
        'prefix'         => env('ORA_PREFIX', ''),
        'prefix_schema'  => env('ORA_SCHEMA_PREFIX', ''),
        'edition'        => env('ORA_EDITION', 'ora$base'),
        'server_version' => env('ORA_SERVER_VERSION', '11g'), 
    ],
];
