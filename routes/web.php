<?php

use App\Http\Controllers\OrderController;
use App\Http\Middleware\CustomerMiddleware;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;


//Get Routes
Route::middleware('guest')->group(function () {
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
});



// MIDDLEWARE ROUTES

// Customer Route
Route::middleware(['auth',CustomerMiddleware::class])->name('customer.')->group(function(){
    Route::get('/customer/dashboard',[UserController::class, 'dashboard'])
    ->name('dashboard');

    Route::get('/order',[UserController::class, 'order'])
    ->name('order');

    Route::get('/showProduct/{productID}', [UserController::class, 'showProduct'])
    ->name('showProduct');

    Route::get('/cart/{cart_id?}',[UserController::class, 'cart'])->name('cart');

    Route::post('/buyProduct', [UserController::class, 'buyProduct'])
    ->name('buyProduct');

    Route::post('/addCart', [UserController::class, 'addCart'])
    ->name('addCart');

    Route::post('cart/checkout',[OrderController::class, 'checkout'])->name('checkout');

    Route::post('/cart/checkout/store',[OrderController::class,'store_checkout'])->name(('store_checkout'));
});


require __DIR__ . '/admin.php';

;