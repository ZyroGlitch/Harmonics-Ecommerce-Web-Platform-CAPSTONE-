<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Str;

class OrderController extends Controller
{
    public function checkout(Request $request)
    {
        // dd($request);

        if($request->payment_method === 'COD'){
            $cart = Cart::with('product')->where('id',$request->cart_id)->first();
            // dd($cart);

            $auth_user = auth()->user();

            $user = User::find($auth_user->id);

            $store = Order::create([
                'orderID' => '#' . strtoupper(Str::random(7)),
                'user_id' => $auth_user->id,
                'product_id' => $cart->product_id,
                'quantity' => $cart->quantity,
                'subtotal' => $cart->subtotal,
                'payment_method' => $request->payment_method,
                'address' => $user->address,
                'phone_number' => $user->phone,
            ]);


            if($store){
                return redirect()->route('customer.dashboard')->with('success','Order Added Successfully.');
            }else{
                return redirect()->back()->with('error','Order failed to store.');
            }


        }else{
            $carts = Cart::with('product')->where('id',$request->cart_id)->get();
            

            return inertia('Checkout',[
            'carts' => $carts,
            'payment_method' => $request->payment_method
        ]);
        }
    }

    public function store_checkout(Request $request){
        // dd($request);
        $fields = $request->validate([
            'cart_id' => 'required',
            'payment_method' => 'required',
            'referrence' => 'nullable',
            'receipt' => 'nullable'
        ]);

        if($fields){
            $fields['receipt'] = Storage::disk('public')->put('receipts',$request['receipt']);

            $auth_user = auth()->user();

            $cart = Cart::with('product')->where('id',$request->cart_id)->first();
            // dd($cart);

            $user = User::find($auth_user->id);
            
            $store = Order::create([
                'orderID' => '#' . strtoupper(Str::random(7)),
                'user_id' => $auth_user->id,
                'product_id' => $cart->product_id,
                'quantity' => $cart->quantity,
                'subtotal' => $cart->subtotal,
                'payment_method' => $request->payment_method,
                'address' => $user->address,
                'phone_number' => $user->phone,
                'referrence_number' => $request->referrence,
                'receipt' => $fields['receipt']
            ]);
            
            if($store){
                return redirect()->route('customer.dashboard')->with('success','Order Added Successfully.');
            }else{
                dd('Failed to Store the data in the database.');
                // return redirect()->back()->with('error','Order failed to store.');
            }

        }

    }
}