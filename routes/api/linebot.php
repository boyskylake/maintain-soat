<?php

use Illuminate\Support\Facades\Route;

Route::group(['namespace' => 'Officer\Linebot'], function () {

    Route::post('webhooks', 'WebhookController@hooks');
    Route::post('login', 'AuthController@login');

    Route::middleware('verifylinebot')->group(function () {
        Route::post('user', 'AuthController@user');
        Route::post('profile', 'ProfileController@getProfile');
    });

});
