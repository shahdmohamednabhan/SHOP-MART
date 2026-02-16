 "use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CartRes } from "@/Interfaces/Cartinterfaces";
import { Button } from "./ui/button";
import { formatCurrency } from "@/Helpers/formatCurrency";
import {
  deleteProductAction,
  clearCartAction,updateProductAction,
} from "@/action/cartActions";
import { Loader2 } from "lucide-react";
import { number, string, ZodNumber } from "zod";
import CheckoutSession from "@/components/CheckoutSession";

 

export default function Cart({ cartData }: { cartData: CartRes | null }) {
  const [cart, setCart] = useState<CartRes | null>(cartData || null);
  const [loadingId, setLoadingId] = useState<string | null>(null);
 
  // 🗑️ حذف منتج
  async function deleteCartProducts(productId: string) {
    setLoadingId(productId);

    const response: CartRes = await deleteProductAction(productId);

    if (response.status === "success") {
      setCart(response);
    }

    setLoadingId(null);
  }

   async function updateProductCount(
  productId: string,
  count: number
) {
  if (count < 1) return;

  setLoadingId(productId);

  const response: CartRes = await updateProductAction(
    productId,
    count
  );

  if (response.status === "success") {
    setCart(response);
  }

  setLoadingId(null);
}
  
  // 🧹 تفريغ الكارت بالكامل
  async function clearCart() {
    setLoadingId("clear");

    const response: CartRes = await clearCartAction();

    if (response.status === "success") {
      setCart(null);
    }

    setLoadingId(null);
  }

  const products = cart?.data?.products || [];

  return cart && products.length > 0 ? (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container mx-auto px-6 py-10 flex-1">
        <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
        <p className="text-gray-500 mb-8">
          {cart.numOfCartItems} items in your cart
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* المنتجات */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col gap-6 mt-6">
              {products.map((item) => (
                <div
                  key={item._id}
                  className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between relative"
                >
                  {/* Loader */}
                  {loadingId === item.product.id && (
                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10 rounded-xl">
                      <Loader2 className="animate-spin w-6 h-6 text-gray-500" />
                    </div>
                  )}

                  <div className="flex items-center gap-6">
                    <Image
                      src={item.product.imageCover}
                      alt={item.product.title}
                      width={80}
                      height={80}
                      className="rounded-md"
                    />

                    <div>
                      <h2 className="font-semibold text-lg">
                        {item.product.title}
                      </h2>

                      <p className="text-gray-500 text-sm">
                        {item.product.brand?.name} ·{" "}
                        {item.product.category?.name}
                      </p>

                      <div className="font-semibold mt-2">
                        {formatCurrency(item.price)}
                      </div>

                       

                      <div className="flex items-center gap-3 mt-3">
  <button
    onClick={() =>
      updateProductCount(item.product.id, item.count - 1)
    }
    disabled={item.count === 1}
    className="w-8 h-8 border rounded-lg hover:bg-gray-100"
  >
    -
  </button>

  <span>{item.count}</span>

  <button
    onClick={() =>
      updateProductCount(item.product.id, item.count + 1)
    }
    className="w-8 h-8 border rounded-lg hover:bg-gray-100"
  >
    +
  </button>
</div>

                    </div>
                  </div>

                  {/* Remove */}
                  <div className="text-right">
                    <button
                      onClick={() =>
                        deleteCartProducts(item.product.id)
                      }
                      className="text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-xl shadow-sm h-fit sticky top-20">
            <h3 className="text-lg font-semibold mb-6">
              Order Summary
            </h3>

            <div className="flex justify-between text-gray-600 mb-3">
              <span>
                Subtotal ({cart.numOfCartItems} items)
              </span>
              <span>
                {formatCurrency(
                  cart.data.totalCartPrice || 0
                )}
              </span>
            </div>

            <div className="flex justify-between text-gray-600 mb-3">
              <span>Shipping</span>
              <span className="text-green-600 font-medium">
                Free
              </span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-semibold text-lg mb-6">
              <span>Total</span>
              <span>
                {formatCurrency(
                  cart.data.totalCartPrice || 0
                )}
              </span>
            </div>

            <Link
              href="/products"
              className="block text-center bg-gray-200 py-3 rounded-xl hover:bg-gray-300 transition"
            >
              Continue Shopping
            </Link>
            {/* <Link
  href="/checkout"
  className="block text-center bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition mt-4"
>
  Proceed to Checkout
</Link>  */}
 
  {/* <CheckoutSession cartId={cartData.cartId}/>   */}
  {cartData && (
  <CheckoutSession cartId={cartData.cartId} />
)}



          </div>
        </div>

        {/* Clear Cart */}
        <div className="text-right mt-6">
          <button
            onClick={clearCart}
            disabled={loadingId === "clear"}
            className="text-red-500 border border-red-500 px-4 py-2 rounded-xl hover:bg-red-50 transition"
          >
            {loadingId === "clear" ? (
              <>
                <Loader2 className="animate-spin w-4 h-4 inline mr-2" />
                Clearing...
              </>
            ) : (
              "Clear Cart"
            )}
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-[60vh] flex justify-center items-center flex-col">
      <h2 className="text-2xl mb-3">
        Your Cart is Empty
      </h2>
      <Button asChild>
        <Link href="/products">Add Ones</Link>
      </Button>
       
    </div>

     
  );
}




























 