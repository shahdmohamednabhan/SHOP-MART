import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server";


const protectedRoutes = ['/profile' ]
const  authRoutes = ['/login','/register' ]

export default async function middleware(req:NextRequest){
const token =await getToken({req})
if(protectedRoutes.includes(req.nextUrl.pathname)){
if (token) {
    return NextResponse.next()
  } else{
    const redirectURL = new URL ('/login',process.env.BASE_URL);
    redirectURL.searchParams.set('url',req.nextUrl.pathname)
 return NextResponse.redirect(redirectURL);
}

}if(protectedRoutes.includes(req.nextUrl.pathname)){
if (token) {
     const redirectURL = new URL ('/',process.env.BASE_URL);
    redirectURL.searchParams.set('url',req.nextUrl.pathname)
 return NextResponse.redirect(redirectURL);
  } else{
        return NextResponse.next()

}

}
  
}














 