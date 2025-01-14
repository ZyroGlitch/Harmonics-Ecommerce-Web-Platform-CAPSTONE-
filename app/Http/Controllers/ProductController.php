<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function productUpload(Request $request){

        // dd($request);

        if($request->hasFile('image')){
            Storage::disk('public')->put('products',$request->image);
        }

        // Handle the file upload
        // $filePath = null;
        // if ($request->hasFile('file')) {
        //     $file = $request->file('file');
        //     $filePath = $file->storeAs('products', $file->getClientOriginalName(), 'public');
        // }

        $fields = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'description' => 'required|string|max:3000',
            // 'file' => 'required|file|mimes:jpg,jpeg,png|max:5120' // allows 5mb file image
        ]);

        
    }
}