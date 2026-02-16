// "use server"

// import { authOption } from "@/auth"
// import { getServerSession } from "next-auth"
// import { string } from "zod"
// import { CartRes } from "@/Interfaces/Cartinterfaces";


// export async  function deleteProductAction(proudctId:string){
// const session = await getServerSession(authOption);
// const response = await fetch ('https://ecommerce.routemisr.com/api/v1/cart'+proudctId,{
//     method:'DELETE',
//     headers :{
//         token:session?.token +
//         ''
        
//     }
// })
// const data = await response.json();
// return data;

// }

// export async  function  clearCartAction (){
// const session = await getServerSession(authOption);
// const response = await fetch ('https://ecommerce.routemisr.com/api/v1/cart', {
//     method:'DELETE',
//     headers :{
//         token:session?.token +
//         ''
        
//     }
// })
// const data = await response.json();
// return data;
 

// }


 








 

















"use server";

import { authOption } from "@/auth";
import { getServerSession } from "next-auth";
import { CartRes } from "@/Interfaces/Cartinterfaces";
 
export async function updateProductAction(
  productId: string,
  count: number
) {
  const session = await getServerSession(authOption);

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {
      method: "PUT",
      headers: {
        token: session?.token || "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        count,
      }),
    }
  );

  return await response.json();
}


export async function deleteProductAction(
  productId: string
): Promise<CartRes> {
  const session = await getServerSession(authOption);

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {
      method: "DELETE",
      headers: {
        token: session?.token || "",
      },
    }
  );

  const data = await response.json();
  return data;
}
 
export async function clearCartAction(): Promise<CartRes> {
  const session = await getServerSession(authOption);

  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/cart",
    {
      method: "DELETE",
      headers: {
        token: session?.token || "",
      },
    }
  );

  const data = await response.json();
  return data;
}







































































// "use server";

// import { authOption } from "@/auth";
// import { getServerSession } from "next-auth";
// import { CartRes } from "@/Interfaces/Cartinterfaces";

// // ✅ تحديث عدد المنتج
// export async function updateProductAction(
//   productId: string,
//   count: number
// ): Promise<CartRes> {
//   const session = await getServerSession(authOption);

//   const token = session?.user?.token || "";

//   const response = await fetch(
//     `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
//     {
//       method: "PUT",
//       headers: {
//         token,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ count }),
//     }
//   );

//   return await response.json();
// }

// // ✅ حذف منتج
// export async function deleteProductAction(productId: string): Promise<CartRes> {
//   const session = await getServerSession(authOption);
//   const token = session?.user?.token || "";

//   const response = await fetch(
//     `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
//     {
//       method: "DELETE",
//       headers: { token },
//     }
//   );

//   return await response.json();
// }

// // ✅ تفريغ الكارت بالكامل
// export async function clearCartAction(): Promise<CartRes> {
//   const session = await getServerSession(authOption);
//   const token = session?.user?.token || "";

//   const response = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
//     method: "DELETE",
//     headers: { token },
//   });

//   return await response.json();
// }
