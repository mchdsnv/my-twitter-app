<?php

use Illuminate\Http\Request;
use App\Http\Controllers;

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
Route::get('user', 'AuthController@getAuthenticatedUser');
Route::resources(['posts' => PostController::class]);
Route::post('/refresh', 'AuthController@refresh');

Route::group(['middleware' => ['jwt.verify']], function() {
        //
});

Route::post('auth/signup', 'AuthController@register');
Route::post('auth/login', 'AuthController@login');
Route::post('auth/logout', 'AuthController@logout');

