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
        // If the customer choose the cod payment method

        $auth_user = auth()->user();

        if($request->payment_method === 'COD'){

            foreach($request->cart_id as $cart_id){
                $cart = Cart::with('product')->where('id',$cart_id)->first();
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
                ]);

                if($store){
                    Cart::where('id',$cart_id)->delete();
                }else{
                    return redirect()->back()->with('error', 'Cart ID # ' . $cart_id . ' failed to store.');
                }
            }

            return redirect()->route('customer.dashboard')->with('success','Order Added Successfully.');
            
        }else{
            // If the customer choose either gcash or paymaya
            if(count($request->cart_id) === 1){
                $carts = Cart::with('product')->where('id',$request->cart_id)->first();

                return inertia('Checkout',[
                    'carts' => $carts,
                    'payment_method' => $request->payment_method
                ]);
            }else{
                $carts = Cart::with('product')->where('user_id',$auth_user->id)->get();

                return inertia('Checkout',[
                    'carts' => $carts,
                    'payment_method' => $request->payment_method
                ]);
                // dd($carts);
            }

            
            
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


            foreach($request->cart_id as $cart_id){
                $cart = Cart::with('product')->where('id',$cart_id)->first();
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
                    Cart::where('id',$cart_id)->delete();
                }else{
                    dd(`Failed to delete the $cart_id in the Cart`);
                }
            }
        }

        return redirect()->route('customer.dashboard')->with('success','Order Added Successfully.');

    }
}