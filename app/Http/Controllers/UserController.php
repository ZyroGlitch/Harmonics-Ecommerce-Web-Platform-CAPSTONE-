<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Product;
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

    public function create()
    {
        return inertia('Registration');
    }

    /**
     * Store a newly created resource in storage.
     */
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


    public function dashboard()
    {
        $data = Product::all();
        return inertia('Dashboard',['products' => $data]);
    }

    public function order(){
        return inertia('Order');
    }

    public function showProduct($productID){
        // dd($product->productID);

        $product = Product::where('id', $productID)->first();
        return inertia('ShowProduct', ['show_product' => $product]);
    }

    public function buyProduct(Request $request){
        $field = $request->validate([
            'productID' => 'required|integer',
            'price' => 'required|integer',
            'quantity' => 'required|integer|min:1',
        ]);

        
        
        
    }

}