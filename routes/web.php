<?php

use App\Http\Middleware\CustomerMiddleware;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;


//Get Routes
Route::get('/', [UserController::class, 'index'])
->name('guest.landingPage');

Route::get('/login',[UserController::class, 'login'])
->name('guest.login');

Route::get('/formRegistration',[UserController::class, 'formRegistration'])
->name('guest.formRegistration');

//Post Routes
Route::post('/register',[UserController::class, 'register'])
->name('guest.register');

Route::post('/authentication',[UserController::class, 'authentication'])
->name('guest.authentication');


// MIDDLEWARE ROUTES

// Customer Route
Route::middleware(['auth',CustomerMiddleware::class])->name('customer.')->group(function(){
    Route::get('/customer/dashboard',[UserController::class, 'dashboard'])
    ->name('dashboard');

    Route::get('/order',[UserController::class, 'order'])
    ->name('order');

    Route::get('/showProduct/{productID}', [UserController::class, 'showProduct'])
    ->name('showProduct');

    Route::post('/buyProduct/{productID}', [UserController::class, 'buyProduct'])
    ->name('buyProduct');
});


require __DIR__ . '/admin.php';




;