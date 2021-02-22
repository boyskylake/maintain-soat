<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$api_version = config('api.api_version');

Route::group(["prefix" => "{$api_version}"], function () {

    // Officer
    // Route::prefix('officer')
    //     ->group(base_path('routes/api/officers.php'));

    // LINEBot
    Route::prefix('linebot')
        ->group(base_path('routes/api/linebot.php'));
});

// Route::group(['namespace' => 'Api'], function () {
//     Route::group(['middleware' => 'auth:api'], function () {
//         Route::post('/auth/logout', 'AuthController@logout');
//         // Route::post('/auth/refresh', 'AuthController@refresh');
//         Route::post('/auth/getAuthUser', 'AuthController@getAuthUser');

//         Route::get('/orderPage', 'OrderPageController@editOrder');

//     });
//     Route::get('/refresh', 'AuthController@refresh');

//     Route::post('/auth/login', 'AuthController@login');
//     Route::post('/auth/register', 'AuthController@register');
// });



// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
