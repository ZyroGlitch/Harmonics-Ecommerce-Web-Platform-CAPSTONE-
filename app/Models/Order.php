<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'orderID',
        'user_id',
        'quantity',
        'subtotal',
        'payment_method',
        'address',
        'phone_number',
        'referrence_number',
        'receipt',
        'order_status'
    ];
}