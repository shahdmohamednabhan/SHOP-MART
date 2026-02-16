 // "use client";

 
 import { useSession } from "next-auth/react";
// import { getServerSession } from "next-auth";
 
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ShoppingCartIcon, UserIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { getSession, signIn, signOut } from "next-auth/react";
import LogOut from "../LogOut";
import { authOption } from "@/auth";
import { getServerSession } from "next-auth";
//  import { date } from "zod";

export default async function Navbar() {

 const session = await getServerSession(authOption);
console.log('session',session);
  return (
    <nav className="bg-gray-100 shadow py-4">
      <div className="container mx-auto flex items-center justify-between px-4 flex-col md:flex-row ">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold text-gray-800">
          <Link href="/">ShopMart</Link>
        </h2>

        {/* Links في الوسط */}
        <div className="flex-1 flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/brands" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Brands
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Products
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/categories" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Categories
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/profile" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Profile
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem> */}

            </NavigationMenuList>
          </NavigationMenu>

        </div>

        {/* Cart + User Dropdown */}
        <div className="flex items-center space-x-4">

          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <UserIcon className="w-6 h-6 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              { session ? <>
             <DropdownMenuItem asChild>
                  <Link href="/my-orders">My Orders</Link>
                </DropdownMenuItem>
                 <LogOut/>
              </> :<>
              <DropdownMenuItem asChild>
                  <Link href="/login">Login</Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/register">Register</Link>
                   </DropdownMenuItem>
                 
              </>

              }
               </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
               {/* Cart Icon */}
          <Link href="/cart">
            <ShoppingCartIcon className="w-6 h-6" />
          </Link>

        </div>

      </div>
    </nav>
  );
}










 





































  

  