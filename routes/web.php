<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProductController;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Middleware\CustomerMiddleware;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;


Route::middleware('guest')
->group(function() {
    //Get Routes
Route::get('/', [UserController::class, 'index'])
->name('customer.landingPage');

Route::get('/login',[UserController::class, 'login'])
->name('customer.login');

Route::get('/formRegistration',[UserController::class, 'formRegistration'])
->name('customer.formRegistration');

//Post Routes
Route::post('/register',[UserController::class, 'register'])
->name('customer.register');

Route::post('/authentication',[UserController::class, 'authentication'])
->name('customer.authentication');
});

// MIDDLEWARE ROUTES

// Customer Route
Route::middleware(CustomerMiddleware::class)->group(function(){
    Route::get('/product',[UserController::class, 'product'])
    ->name('customer.product');

    Route::get('/order',[UserController::class, 'order'])
    ->name('customer.order');

    Route::get('/showProduct/{productID}', [UserController::class, 'showProduct'])
    ->name('customer.showProduct');

    Route::post('/buyProduct/{productID}', [UserController::class, 'buyProduct'])
    ->name('customer.buyProduct');
});


require __DIR__ . '/admin.php';