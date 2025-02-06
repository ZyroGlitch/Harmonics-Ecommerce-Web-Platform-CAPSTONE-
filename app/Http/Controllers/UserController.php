<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\User;
use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rules\Password;


class UserController extends Controller
{
    public function index()
    {
        return inertia('Index');
    }

    public function login()
    {
        return inertia('Login');
    }

    public function formRegistration(){
        return inertia('Registration');
    }

    public function create()
    {
        return inertia('Registration');
    }

    public function dashboard()
    {
        $data = Product::all();
        return inertia('Dashboard',['products' => $data]);
    }

    public function order(){
        $user = auth()->user();
        $orders = Order::where('user_id',$user->id)->latest()->get();

        return inertia('Order',['orders' => $orders]);
    }

    public function showProduct($productID){
        // dd($product->productID);

        $product = Product::where('id', $productID)->first();
        return inertia('ShowProduct', ['show_product' => $product]);
    }

    public function profile(){
        $user = auth()->user();
        $data = User::find($user);

        return inertia('Profile',['user_info' => $data]);
    }

    public function cart($cart_id = null){
        // dd($cart_id);

        if($cart_id !== null){

            // dd('I entered.');
            // Direct Buy Orders
            $carts = Cart::with('product')->where('id',$cart_id)->first();

            // dd($carts);
    
            return inertia('Cart', [
                'carts' => [$carts],
            ]);
            
        }else{
            // This for clicking the cart icon
            // Fetch all carts
            $user = auth()->user();

            $carts = Cart::with('product')->where('user_id', $user->id)->latest()->paginate(5);
            // dd($carts);

            $total_amount = Cart::with('product')->where('user_id', $user->id)->sum('subtotal');
            // dd($total_amount);

            return inertia('Cart', [
                'carts' => $carts,
                'total_amount' => $total_amount
            ]);
        }
    }


    public function authentication(Request $request) 
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:8'
        ]);

        if(auth()->attempt($credentials)){
            $request->session()->regenerate();

            // Redirect based on the user's role
            $user = auth()->user(); // Get the authenticated user

            // Store user ID in session
            Session::put('user_id', $user->id);

            if ($user->role === 'Customer') {
                return redirect()->route('customer.dashboard');

            } elseif ($user->role === 'Admin') {
                return redirect()->route('admin.dashboard');
            }

            // Redirect back to login with error message
            return redirect()->back()->with('error', 'Incorrect Username or Password!');
        }
    }

    

    public function register(Request $request)
{
    $fields = $request->validate([
        'firstname' => 'required|max:50',
        'lastname' => 'required|max:50',
        'phone' => 'required|min:11|max:11|unique:users,phone',
        'address' => 'required',
        'email' => 'required|email|unique:users,email',
        'password' => [
            'required',
            'string',
            Password::min(8)
                ->letters()
                ->mixedCase()
                ->numbers()
                ->symbols(),
        ],
    ]);

    // Hash the password
    $fields['password'] = Hash::make($fields['password']);

    // Create the new customer
    $user = User::create($fields);

    if ($user) {
        // Automatically log in the user after registration
        Auth::login($user);

        // Store user ID in session (if needed)
        Session::put('id', $user->id);

        // Redirect to the customer dashboard
        return redirect('/customer/dashboard');
    } else {
        return back()->withErrors(['error' => 'Failed to register user. Please try again.']);
    }
}



    public function buyProduct(Request $request)
{
    // dd($request);
    $data = $request->validate([
        'productID' => 'required|integer',
        'price' => 'required|numeric',
        'quantity' => 'required|integer',
    ]);

    $user = auth()->user(); // Get the authenticated user

    // Check if the product exist already in the cart table
    $checkIfProductExists = Cart::where('user_id', $user->id)
    ->where('product_id',$request->productID)
    ->first();

    // dd($checkIfProductExists);


    if($checkIfProductExists){
        // Update the quantity and subtotal
        $checkIfProductExists->quantity += $request->quantity;
        $checkIfProductExists->subtotal += $request->price * $request->quantity;
        $checkIfProductExists->save();

        return redirect()->route('customer.cart', ['cart_id' => $checkIfProductExists->id]);
    }else{
        $store = Cart::create([
            // 'id' => '#' . strtoupper(Str::random(8)), // Ex. #ABC12345
            'product_id' => $data['productID'],
            'user_id' => $user->id,
            'quantity' => $data['quantity'],
            'subtotal' => $data['price'] * $data['quantity'],
        ]);

        // dd($store->id);

        if($store){
            // dd('success');
            return redirect()->route('customer.cart', ['cart_id' => $store->id]);
        }else{
            // dd('Failed');
            return redirect()->back()->withErrors(['error' => 'Failed to add product to cart']);
        }
    }
}

    public function addCart(Request $request){
        $data = $request->validate([
            'productID' => 'required|integer',
            'price' => 'required|numeric',
            'quantity' => 'required|integer',
        ]);

        $user = auth()->user();

        // Check if the product exist already in the cart table
        $checkIfProductExists = Cart::where('user_id', $user->id)
        ->where('product_id',$request->productID)
        ->first();


        if($checkIfProductExists){
            // Update the quantity and subtotal
            $checkIfProductExists->quantity += $request->quantity;
            $checkIfProductExists->subtotal += $request->price * $request->quantity;
            $checkIfProductExists->save();

            return redirect()->back()->with('success', 'Product added to cart!');
        }else{
            $store = Cart::create([
                    'product_id' => $data['productID'],
                    'user_id' => $user->id,
                    'quantity' => $data['quantity'],
                    'subtotal' => $data['price'] * $data['quantity'],
            ]);

            $store ? redirect()->back()->with('success', 'Product added to cart!') 
            : redirect()->back()->with('error', 'Failed to add product to cart!');
        }  
    }

    public function profile_update(Request $request){
        $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'phone' => 'required',
            'email' => 'required|email',
            'address' => 'required'
        ]);

        $user = auth()->user();
        $data = User::find($user->id)->first();

        $data->firstname = $request->firstname;
        $data->lastname = $request->lastname;
        $data->phone = $request->phone;
        $data->address = $request->address;
        $data->email = $request->email;
        $data->save();

        return redirect()->back()->with('success','Profile update successfully.');
    }

}