// export  default function Allorders(){
//     return<>
//     <h2>Allorders</h2>
//     </>
// }




"use client"

import { useEffect } from "react"

export default function AllOrders() {

  async function getorders() {
    const response = await fetch(
      'https://ecommerce.routemisr.com/api/v1/orders/user/' + localStorage.getItem("cartId")
    );
    const data = await response.json();
    console.log("🚀 ~ getOrders ~ data:", data);
  }

  useEffect(() => {
    getorders();
  }, []);

  return (
    <>
      <h2>Allorders</h2>
    </>
  );
}
