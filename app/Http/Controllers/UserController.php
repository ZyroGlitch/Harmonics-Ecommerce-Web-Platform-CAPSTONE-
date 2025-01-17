<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Product;
use Illuminate\Http\Request;
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
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
 
        if (auth()->attempt($credentials)) {
            $request->session()->regenerate();
 
            return redirect()->intended('dashboard');
        }
 
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
        
        // $request->validate([
        //     'email' => 'required|email',
        //     'password' => 'required|string|min:8'
        // ]);

        // // Fetch user data
        // $user = User::where('email', $request->email)->first();

        // if ($user && Hash::check($request->password, $user->password)) {
        //     // Store user ID in session
        //     Session::put('id', $user->id);

        //     switch($user->role){
        //         case 'Customer':
        //             return redirect()->route('customer.product');
        //             break;

        //         case 'Admin':
        //             return redirect()->route('admin.dashboard');
        //             break;
        //     }

        // } else {
        //     // Redirect back to login with error message
        //     return redirect()->route('customer.login')->with('error', 'Incorrect Username or Password!');
        // }
    }

    public function dashboard(){
        return inertia('Dashboard');
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
            'phone' => 'required|min:11|max:11',
            'address' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => [
                'required',
                'string',
                Password::min(8)
                    ->letters()       // Requires at least one letter
                    ->mixedCase()     // Requires both uppercase and lowercase letters
                    ->numbers()       // Requires at least one number
                    ->symbols(),      // Requires at least one special character
            ],
        ]);

        // Hash the password before saving
        $fields['password'] = Hash::make($fields['password']);

        // Create the new customer
        $stored = User::create($fields);

        if($stored){
            $user = User::where('email',$fields['email'])->first();

            // Store user ID in session
            Session::put('id', $user->id);

            // Redirect to the appropriate dashboard
            return redirect("/product");
        }else{
            dd('Error');
        }
    }

    public function product()
    {
        $data = Product::all();
        return inertia('Dashboard',['products' => $data]);
    }

    public function order(){
        return inertia('Order');
    }

    public function showProduct($productID){
        // dd($product->productID);

        $product = Product::where('productID', $productID)->first();
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