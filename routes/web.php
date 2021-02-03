<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;

Route::get('/deploy', function () {
    Artisan::call('cache:clear');
    Artisan::call('config:cache');
});

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test', function () {
    return view('test');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

// Using For Reactjs Only middleware('auth:web')->
//  Route::get( '/officer/{any}', function () {
//      return view('officer.home');
//  })->where('any', '.*');

// Route::view('/officer/{path?}', 'officer.home')->where('path', '.*');

Route::get('/{any}', function () {
    // return view('index');
    return view('officer.home');
})->where('any', '.*');
