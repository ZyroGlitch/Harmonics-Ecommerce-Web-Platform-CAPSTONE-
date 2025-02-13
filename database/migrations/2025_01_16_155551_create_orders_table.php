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
            $table->string('orderID',length:8)->primary()->unique();
            $table->foreignId('user_id')->constrained();
            $table->integer('quantity');
            $table->decimal('subtotal',10,2);
            $table->string('payment_method',length:50);
            $table->string('address');
            $table->string('phone_number',length:11);
            $table->string('referrence_number')->nullable();
            $table->string('receipt')->nullable();
            $table->string('order_status',length:50)->default('Processing');
            $table->timestamps();
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