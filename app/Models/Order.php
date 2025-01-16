<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'orderID',
        'userID',
        'productID',
        'quantity',
        'subtotal',
        'payment_method',
        'order_status'
    ];
}