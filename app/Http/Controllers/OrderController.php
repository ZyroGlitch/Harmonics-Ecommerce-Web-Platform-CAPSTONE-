<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function checkout(Request $request)
    {
        // $request->payment_method === 'cod' ?


        // dd($request);
        return inertia('Checkout',[
            'payment_method' => $request->payment_method,
            'address' => $request->address,
        ]);
    }
}