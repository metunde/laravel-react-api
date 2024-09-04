<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HostController;
use App\Http\Controllers\VisitorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/', function(){
    return 'just so';
});

Route::apiResource('visitor', VisitorController::class);
Route::apiResource('host', HostController::class);

Route::Post('/register',[AuthController::class, 'register']);
Route::Post('/login',[AuthController::class, 'login']);
Route::Post('/logout',[AuthController::class, 'logout'])->middleware('auth:sanctum');