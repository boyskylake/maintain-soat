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

        Route::get('Home', 'HomeController@allMacoop');
        Route::get('orderPage', 'OrderPageController@editOrder');
<<<<<<< HEAD

        Route::get('Listorder', 'OrderListController@feedInform');
        Route::get('listorder', 'OrderListController@feedInform');

=======
        Route::get('Listorder', 'OrderListController@feedInform');

>>>>>>> 43cf5831a644c12e1745051428ee0ef98e0e405e
    });
});
