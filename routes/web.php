<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;

//Get Routes
Route::get('/', [CustomerController::class, 'index'])->name('customer.landingPage');

Route::get('/login',[CustomerController::class, 'login'])->name('customer.login');

Route::get('/formRegistration',[CustomerController::class, 'formRegistration'])->name('customer.formRegistration');

Route::get('/product',[CustomerController::class, 'product'])->name('customer.product');

Route::get('/order',[CustomerController::class, 'order'])->name('customer.order');

//Post Routes
Route::post('/register',[CustomerController::class, 'register'])->name('customer.register');

Route::post('/authentication',[CustomerController::class, 'authentication'])->name('customer.authentication');