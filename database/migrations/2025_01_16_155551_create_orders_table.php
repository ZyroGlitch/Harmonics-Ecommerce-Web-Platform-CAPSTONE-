<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->string('orderID',length:8)->unique();
            $table->unsignedBigInteger('userID');
            $table->unsignedBigInteger('productID');
            $table->integer('quantity');
            $table->decimal('subtotal',10,2);
            $table->string('payment_method',length:50);
            $table->string('order_status',length:50);
            $table->timestamps();

            // Add foreign key constraint
            $table->foreign('userID')
                ->references('userID')
                ->on('users');

            $table->foreign('productID')
                ->references('productID')
                ->on('products');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};