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
        Schema::create('order_details', function (Blueprint $table) {
            $table->id('id');
            $table->string('order_id',length:8);
            $table->foreignId('product_id')->constrained();
            $table->decimal('price',10,2);
            $table->integer('quantity');
            $table->decimal('subtotal',10,2);
            $table->timestamps();

            $table->foreign('order_id')
            ->references('orderID')
            ->on('orders');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_details');
    }
};