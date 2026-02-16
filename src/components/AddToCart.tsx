"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, Loader2, ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";

import { addToCartAction } from "@/action/addtoCart.action";
import { CardFooter } from "@/components/ui/card"; // <-- create if not exist
import { Button } from "@/components/ui/button"; // <-- create if not exist
  

export default function AddToCart({ productId }: { productId: string }) {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  async function addToCart(productId: string) {
    try {
      setLoading(true);

      const res = await addToCartAction(productId);

      if (res == null) {
        router.push('/login');
        return;
      }

      toast.success(res.message);
    } catch (err) {
      console.log("🚀 ~ addToCart ~ err:", err);
    }

    setLoading(false);
  }

  return (
    <CardFooter className="gap-2">
      <Button
        disabled={isLoading}
        onClick={() => addToCart(productId)}
        className="grow gap-2"
      >
        {isLoading ? <Loader2 className="animate-spin" /> : <ShoppingCart />}
        Add To Cart
      </Button>
    </CardFooter>
  );
}
