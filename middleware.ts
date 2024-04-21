'use server';

import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    publicRoutes
} from '@/routes'

export const {auth} = NextAuth(authConfig);

export default auth((req)=>{
   const {nextUrl} = req;
   const isLoggedin = !!req.auth;
   const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
   const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
   const isAuthRoute = authRoutes.includes(nextUrl.pathname);
   if(isApiAuthRoute)
   {
      return;
   }
   if(isAuthRoute)
   {
        if(isLoggedin) return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl));
        return;
   }
   if(!isLoggedin && !isPublicRoute){
    return Response.redirect(new URL("/",nextUrl));
   }
   return;
})
export const config = 
{
    matcher:["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};