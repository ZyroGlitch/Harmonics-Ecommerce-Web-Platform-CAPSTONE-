<?php

use App\Http\Controllers\AdminController;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Middleware\CustomerMiddleware;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;


//Get Routes
Route::get('/', [UserController::class, 'index'])->name('customer.landingPage');

Route::get('/login',[UserController::class, 'login'])->name('customer.login');

Route::get('/formRegistration',[UserController::class, 'formRegistration'])->name('customer.formRegistration');

//Post Routes
Route::post('/register',[UserController::class, 'register'])->name('customer.register');

Route::post('/authentication',[UserController::class, 'authentication'])->name('customer.authentication');


// MIDDLEWARE ROUTES

// Customer Route
Route::middleware(CustomerMiddleware::class)->group(function(){
    Route::get('/product',[UserController::class, 'product'])->name('customer.product');

    Route::get('/order',[UserController::class, 'order'])->name('customer.order');
});


// Admin Route
Route::middleware(AdminMiddleware::class)->group(function(){
    Route::get('/admin',[AdminController::class,'dashboard'])->name('admin.dashboard');
});




;