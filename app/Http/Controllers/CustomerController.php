<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rules\Password;


class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
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
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:8'
        ]);

        // Fetch user data
        $user = Customer::where('email', $request->email)->first();

        if ($user && Hash::check($request->password, $user->password)) {
            // Store user ID in session
            Session::put('userID', $user->userID);

            // Redirect to the appropriate dashboard
            return redirect("/product");
        } else {
            // Redirect back to login with error message
            return redirect()->route('customer.login')->with('error', 'Incorrect Username or Password!');
        }
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
            'email' => 'required|email|unique:customers,email',
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
        $stored = Customer::create($fields);

        if($stored){
            $user = Customer::where('email',$request->email)->first();

            // Store user ID in session
            Session::put('userID', $user->userID);

            // Redirect to the appropriate dashboard
            return redirect("/product");
        }else{
            dd('Error');
        }
    }

    public function product()
    {
        return inertia('Dashboard');
    }

    public function order(){
        return inertia('Order');
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $customer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Customer $customer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        //
    }
}