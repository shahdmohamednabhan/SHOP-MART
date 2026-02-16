 
// export async function addToCartAction(productId: string) {
//   const response = await fetch('https://ecommerce.routemisr.com/api/v1/cart', {
//     method: 'POST',
//     headers: {
//       token: 'eyJhbGc...', // truncated for brevity
//       "content-type": "application/json"
//     },
//     body: JSON.stringify({ productId })
//   });
//   const data = await response.json();
// }







// // src/action/addtoCart.action.ts
// import { CartResponse } from "@/Interfaces/Cartinterfaces";

// export async function addToCartAction(productId: string): Promise<CartResponse> {
//   const response = await fetch('https://ecommerce.routemisr.com/api/v1/cart', {
//     method: 'POST',
//     headers: {
//       token: 'eyJhbGc...', // ضع التوكن الصحيح
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ productId })
//   });

// const data: CartResponse = await response.json(); // TypeScript يتأكد أنه مطابق للـ interface
//   return data; // 🔑 مهم جدًا: إرجاع البيانات
// }






// "use server"

// // src/action/addToCart.action.ts
// import { CartResponse } from "@/Interfaces/Cartinterfaces";

// export async function addToCartAction(productId: string): Promise<CartResponse> {
//   const response = await fetch('https://ecommerce.routemisr.com/api/v1/cart', {
//     method: 'POST',
//     headers: {
//       token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YjZlMzFlY2E0NWFiOWY5MWEwZWNlMCIsIm5hbWUiOiJBZGFtIE1vaGFtZWQiLCJyb2xlIjoidXNlciIsImlhdCI6MTc3MDY1NjAwOCwiZXhwIjoxNzc4NDMyMDA4fQ.2QqS5eT7S2Qim05fo7mvnCJkvt94qSGP71mgBhtbTIY',
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ productId })
//   });

//   const data = await response.json();
//   console.log("Cart API response:", data);
  
//   // تحويل الاستجابة للـ interface المتوقع
//   const result: CartResponse = {
//     status: data.statusMsg,  // "success" أو "fail"
//     message: data.message,
//     items: data.data?.products.map((p: any) => ({
//       productId: p.product._id,
//       quantity: p.count
//     })) || []
//   };

//   return result;
// }








"use server"
 import { authOption } from "@/auth";
import { shippingAddress } from "@/Interfaces/Cartinterfaces";
import NextAuth from "next-auth";

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };

import { getServerSession } from "next-auth";

export async function CheckoutAction(cartId: string,shippingAddress:shippingAddress) {
  const session = await getServerSession(authOption);

  if (session) {
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`, {
      method: 'POST',
      body: JSON.stringify({shippingAddress }),
      headers: {
        token: session?.token as string,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    return data;
  } }

export async function addToCartAction(productId: string) {
  const session = await getServerSession(authOption);

  if (session) {
    const response = await fetch('https://ecommerce.routemisr.com/api/v1/cart', {
      method: 'POST',
      body: JSON.stringify({ productId }),
      headers: {
        token: session?.token as string,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    return data;
  } else {
    return null;
  }
}







 