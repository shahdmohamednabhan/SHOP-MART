 
import { get } from "http"
import { authOption } from "@/auth";
import Cart from "@/components/Cart"
 


import { getServerSession } from "next-auth"
import { CartRes } from "@/Interfaces/Cartinterfaces";
export const dynamic = "force-dynamic";


export default async function CartPage() {

  const session = await getServerSession(authOption);
  console.log("SESSION:", session);


  const response = await fetch(
    'https://ecommerce.routemisr.com/api/v1/cart',
    {
      headers: {
        token: session?.token as string
      }
    }
  )

  const data :CartRes = await response.json()

  console.log('CartPage data:', data)

  return (
    <>
<Cart cartData={data.numOfCartItems == 0? null :data} />

    </>
  )
}




















 