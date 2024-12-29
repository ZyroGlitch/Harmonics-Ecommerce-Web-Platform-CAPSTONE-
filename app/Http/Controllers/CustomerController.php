<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
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

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Registration');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
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

        dd($request);
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