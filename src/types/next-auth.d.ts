 import NextAuth from "next-auth";
import { UserInterface } from "@/Interfaces/authinterfaces";

declare module "next-auth" {

 
  interface Session {
    user: UserInterface;
      token: string;

      //  session.user = token.user
      //  session.token = token.token

   }
   interface User{
     user: UserInterface;
     token: string;

   }

  // interface User extends UserInterface {}
}
import { JWT } from "next-auth/jwt"


// declare module "next-auth/jwt" {
//   interface JWT extends User{}
// }

declare module "next-auth/jwt" {
  interface JWT {
    user: UserInterface;
    token: string;
  }
}



// import NextAuth from "next-auth";
// import { UserInterface } from "@/Interfaces/authinterfaces";

// declare module "next-auth" {
//   interface Session {
//     user: UserInterface;
//     token: string;
//   }

//   interface User extends UserInterface {}
// }

// declare module "next-auth/jwt" {
//   interface JWT extends UserInterface {}
// }



