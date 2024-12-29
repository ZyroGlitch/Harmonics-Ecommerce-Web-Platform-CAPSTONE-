<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;

Route::get('/', [CustomerController::class, 'index'])->name('customer.landingPage');

Route::resource('customers', CustomerController::class)->except('index');