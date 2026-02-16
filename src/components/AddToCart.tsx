 

// "use client";

// import { HeartIcon, Loader2, ShoppingCartIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { CardFooter } from "@/components/ui/card";
// import { useState } from "react";

// import toast from "react-hot-toast";
// import { addToCartAction } from "@/action/addtoCart.action";
// import { CartResponse } from "@/Interfaces/Cartinterfaces";

// interface AddToCartProps {
//   productId: string;
// }

// export default function AddToCart({ productId }: AddToCartProps) {
//   const [isLoading, setIsLoading] = useState(false);

//   async function addProductToCart() {
//     setIsLoading(true);

//     try {
//       const data: CartResponse = await addToCartAction(productId);

//       if (data.status === "success") {
//         toast.success(data.message || "Product added successfully!");
//       } else {
//         // 🔹 هنا نشيل أي أيقونة عند الفشل
//         toast.error(data.message || "Failed to add product!", { icon: null });
//       }
//     } catch (error) {
//       console.log("Error adding product to cart:", error);
//       toast.error("Something went wrong", { icon: null });
//     }

//     setIsLoading(false);
//   }

//   return (
//     <CardFooter className="gap-2">
//       <Button disabled={isLoading} onClick={addProductToCart} className="grow">
//         {isLoading ? <Loader2 className="animate-spin" /> : <ShoppingCartIcon />}
//         Add to cart
//       </Button>

//       <HeartIcon className="cursor-pointer hover:text-red-500 transition" />
//     </CardFooter>
//   );
// }


















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
