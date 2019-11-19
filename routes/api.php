<?php

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

Route::group([ 'namespace' => 'Api' ], function () {
    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('/auth/logout', 'AuthController@logout');
        Route::post('/auth/refresh', 'AuthController@refresh');
        Route::post('/auth/getAuthUser', 'AuthController@getAuthUser');
        Route::post('me', 'AuthController@me');

        Route::resource('home', 'HomeController');
    });
    
    Route::post('/auth/login', 'AuthController@login');

});



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

