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

    public function authentication(Request $request){
        //  $user = User::where('email',$this->email)->first();

        // if($user && Hash::check($this->password, $user->password)){
        //     Session::put('userID',$user->userID);

        //     switch($user->role){
        //         case 'Customer':
        //             $this->redirectRoute('customer-login.dashboard');
        //             break;

        //         case 'Admin':
        //             $this->redirectRoute('admin.admin-dashboard');
        //             break;
        //     }

        // }else{
        //     session()->flash('error','Incorrect Username or Password!');

        //     $this->redirectRoute('customer.login');
        // }

        $user = Customer::where('email', $request->email)->first();

        if($user && Hash::check($request->password, $user->password)){
            Session::put('userID',$user->id);

            return redirect()->route('customers.dashboard');
        }else{
            return redirect()->route('customers.login')->with('error', 'Incorrect Username or Password!');

            session()->forget('error');
        }
    }
    
    public function create()
    {
        return inertia('Registration');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
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
        Customer::create($fields);

        return redirect()->route('customers.create')->with('message', 'Account created successfully');
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