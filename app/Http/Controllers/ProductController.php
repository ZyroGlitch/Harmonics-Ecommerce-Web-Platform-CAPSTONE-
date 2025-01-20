<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function productUpload(Request $request){

        $fields = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'description' => 'required|string|max:3000',
            'image' => 'required|file|mimes:jpg,jpeg,png|max:5120' // allows 5mb file image
        ]);
        
        // dd($request);

        if($request->hasFile('image')){
            $fields['image'] = Storage::disk('public')->put('products',$request->image);

            $store = Product::create($fields);

            if($store){
                return redirect()->route('admin.adminProduct');
            }        
        }

        
    }

    public function signout(){
        return redirect()->route('guest.login');
    }
}