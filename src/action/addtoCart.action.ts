 
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







 