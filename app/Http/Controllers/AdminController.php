<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function dashboard(){
        return inertia('Admin/Dashboard');
    }

    public function orders(){
        return inertia('Admin/Orders');
    }

    public function adminProduct(){
        return inertia('Admin/Product');
    }

    public function salesReport(){
        return inertia('Admin/SalesReport');
    }

    public function users(){
        return inertia('Admin/Users');
    }

    public function messages(){
        return inertia('Admin/Messages');
    }

    public function signout(){
        dd("exit in the program");
    }
}