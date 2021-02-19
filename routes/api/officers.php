<?php

use Illuminate\Support\Facades\Route;

Route::group(['namespace' => 'Officer\Api'], function () {

    Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function () {
        Route::post('login', 'AuthController@login');
        Route::post('register', 'AuthController@register');
        Route::post('forget', 'AuthController@forget');
        Route::post('refresh', 'AuthController@refresh');
        Route::post('logout', 'AuthController@logout');
    });

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('user', 'Auth\AuthController@user');

        Route::get('orderPage', 'OrderPageController@editOrder');
        Route::get('Listorder', 'OrderListController@feedInform');
    });
});
