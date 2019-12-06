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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::resources(['posts' => PostController::class]);
Route::group(['middleware' => ['jwt.verify']], function() {
//    Route::resources(['posts' => PostController::class]);
//    Route::get('user', 'AuthController@getAuthenticatedUser');
});

Route::post('auth/signup', 'AuthController@register');
Route::post('auth/login', 'AuthController@login');
Route::post('auth/logout', 'AuthController@logout');
Route::get('user', 'AuthController@getAuthenticatedUser');
