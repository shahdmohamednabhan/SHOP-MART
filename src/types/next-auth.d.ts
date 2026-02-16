 import NextAuth from "next-auth";
import { UserInterface } from "@/Interfaces/authinterfaces";

declare module "next-auth" {

 
  interface Session {
    user: UserInterface;
      token: string;
 
   }
   interface User{
     user: UserInterface;
     token: string;

   }

 }
import { JWT } from "next-auth/jwt"


 

declare module "next-auth/jwt" {
  interface JWT {
    user: UserInterface;
    token: string;
  }
}


 