 "use client";

 import { signOut } from "next-auth/react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

 
 export default function LogOut
 (){
    return<>
     <DropdownMenuItem
               className="cursor-pointer"
             onClick={() =>
    signOut({
      callbackUrl: "/", // الصفحة اللي يرجع لها بعد تسجيل الخروج
    })
  }
>
  Logout
</DropdownMenuItem>

     
    </>
 }