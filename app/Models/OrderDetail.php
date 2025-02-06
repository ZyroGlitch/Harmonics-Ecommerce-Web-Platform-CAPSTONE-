<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    protected $fillable = [
        'order_id',
        'product_id',
        'price',
        'quantity',
        'subtotal'
    ];

    // Include a model relationship
    public function product(){
        return $this->belongsTo((Product::class));
    }

    public function user(){
        return $this->belongsTo((User::class));
    }
}