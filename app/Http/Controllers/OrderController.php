<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Product;
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
            // fetch authenticated user data
            $user = User::find($auth_user->id); 

            // Generate a string value of order ID
            $generated_id = '#' . strtoupper(Str::random(7));

            Order::create([
                    'orderID' => $generated_id,
                    'user_id' => $auth_user->id,
                    'quantity' => 0,
                    'subtotal' => 0,
                    'payment_method' => $request->payment_method,
                    'address' =>  $user->address,
                    'phone_number' => $user->phone,
                ]); 

            // Declare a summation variables
            $quantity = 0;
            $subtotal = 0.00;
            

            foreach($request->cart_id as $cart_id){
                $cart = Cart::with('product')->where('id',$cart_id)->first();
                // dd($cart);

                // Sum the total quantity and subtotal
                $quantity += $cart->quantity;
                $subtotal += $cart->subtotal;
                
                // Fetch Product Price
                $product = Product::find($cart->product_id);

                // Store in Order Detail table
                $order_details = OrderDetail::create([
                    'order_id' => $generated_id,
                    'product_id' => $cart->product_id,
                    'price' => $product->price,
                    'quantity' => $cart->quantity,
                    'subtotal' => $cart->subtotal
                ]);

                if($order_details){
                    Cart::where('id',$cart_id)->delete();
                }else{
                    dd(`Failed to delete the $cart_id in the Cart`);
                }
            } // End of a loop

            // Update the specific order in his quantity and subtotal
            $order = Order::where('orderID',$generated_id)
            ->update([
                'quantity' => $quantity,
                'subtotal' => $subtotal
            ]);

            if($order){
                return redirect()->route('customer.dashboard')->with('success','Order Added Successfully.');
            }
        
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
            $user = User::find($auth_user->id);

            // Generate a string value of order ID
            $generated_id = '#' . strtoupper(Str::random(7));

            Order::create([
                    'orderID' => $generated_id,
                    'user_id' => $auth_user->id,
                    'quantity' => 0,
                    'subtotal' => 0,
                    'payment_method' => $request->payment_method,
                    'address' =>  $user->address,
                    'phone_number' => $user->phone,
                    'referrence_number' => $request->referrence,
                    'receipt' => $fields['receipt']
                ]); 

            // Declare a summation variables
            $quantity = 0;
            $subtotal = 0.00;

            foreach($request->cart_id as $cart_id){
                $cart = Cart::with('product')->where('id',$cart_id)->first();
                // dd($cart);

                // Sum the total quantity and subtotal
                $quantity += $cart->quantity;
                $subtotal += $cart->subtotal;
                

                $product = Product::find($cart->product_id);

                $order_details = OrderDetail::create([
                    'order_id' => $generated_id,
                    'product_id' => $cart->product_id,
                    'price' => $product->price,
                    'quantity' => $cart->quantity,
                    'subtotal' => $cart->subtotal
                ]);

                if($order_details){
                    Cart::where('id',$cart_id)->delete();
                }else{
                    dd(`Failed to delete the $cart_id in the Cart`);
                }
            } //  end of loop

            // Update the specific order in his quantity and subtotal
            $order = Order::where('orderID',$generated_id)
            ->update([
                'quantity' => $quantity,
                'subtotal' => $subtotal
            ]);

            if($order){
                return redirect()->route('customer.dashboard')->with('success','Order Added Successfully.');
            }
        }
    }
}