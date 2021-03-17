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

        Route::get('menu', 'MenuController@menu');
        Route::get('menumoblie', 'MenuController@menu');


        Route::get('Home', 'HomeController@allMacoop');
        Route::get('orderPage', 'OrderPageController@editOrder');

        Route::post('pageone', 'OrderPageController@page_one');
        Route::post('coopinfo', 'OrderPageController@coopinformation');
        Route::post('Listorder', 'OrderListController@feedInform');
        Route::get('Profile', 'Profile@Profile');

        Route::post('Editprofile', 'Profile@Editprofile');

        Route::post('Editpassword', 'Profile@Editpassword');

    });
});
