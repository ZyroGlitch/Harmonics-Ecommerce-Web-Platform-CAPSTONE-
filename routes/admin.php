<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProductController;

Route::middleware(AdminMiddleware::class)->name('admin.')->group(function(){

    // Admin Route
    Route::get('/admin/dashboard',[AdminController::class,'dashboard'])
    ->name('dashboard');

    Route::get('/orders',[AdminController::class,'orders'])
    ->name('orders');

    Route::get('/adminProduct',[AdminController::class,'adminProduct'])
    ->name('adminProduct');

    Route::get('/salesReport',[AdminController::class,'salesReport'])
    ->name('salesReport');

    Route::get('/users',[AdminController::class,'users'])
    ->name('users');

    Route::get('/messages',[AdminController::class,'messages'])
    ->name('messages');

    Route::get('/signout',[AdminController::class,'signout'])
    ->name('signout');

    // Product Route
    Route::post('/product_upload',[ProductController::class,'productUpload'])
    ->name('productUpload');

    Route::get('/signout',[ProductController::class,'signout'])
    ->name('signout');
});



?>