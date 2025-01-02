<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;

Route::get('/', [CustomerController::class, 'index'])->name('customers.landingPage');

Route::get('/customers/login',[CustomerController::class, 'login'])->name('customers.login');

Route::post('/customers/authentication',[CustomerController::class, 'authentication'])->name('customers.authentication');

Route::resource('customers', CustomerController::class)->except('index');

Route::get('/customers/dashboard',[CustomerController::class, 'dashboard'])->name('customers.dashboard');