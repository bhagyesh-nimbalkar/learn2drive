import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { db } from "./lib/db"
import {getDriverByEmail, getDriverById,getUserById} from "./data/user"
import { UserRole } from "@prisma/client"
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  pages:{
    signIn:'/auth/login',
    error:'/auth/error',
  },
  events:{
      async linkAccount({user}){
         await db.user.update({
           where:{id:user.id},
           data:{
            phoneverified:new Date(),
            emailVerified:new Date(),
          },
         });
      }
  },
  callbacks:{
     async signIn({user,account}){
        if(account?.provider==='google' || account?.provider==='discord'){
           const getDriver = await getDriverByEmail(user.email);
           if(getDriver) return false;
           return true;
        }
        const existingUser = await getUserById(user.id!);
        const existingDriver = await getDriverById(user.id!);
        if(!existingUser?.phoneverified && !existingDriver?.phoneverified)  return false;
        return true;
     },
     async session({token,session}){
       if(token.sub && session.user){
          session.user.id = token.sub;
       }
       if(token.role && session.user){
         session.user.role =token.role as UserRole;
       }
       return session;
     },
     async jwt({token}){
      if(!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      const existingDriver = await getDriverById(token.sub);
      if(!existingUser && !existingDriver) return token;
      if(existingDriver){
        token.role=existingDriver.role;
      }
      if(existingUser)
      {
          token.role = existingUser.role;
      }
      return token;
     }
  },
  adapter: PrismaAdapter(db),
  session: {strategy:'jwt'},
  ...authConfig
})