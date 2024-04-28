import credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./schemas"
import type { NextAuthConfig } from "next-auth"
import {getDriverByPhone, getUserByPhone} from "./data/user";
import { ComparePass } from "./validation/Hash";
import Discord from 'next-auth/providers/discord';
import Google from 'next-auth/providers/google';


export default {
  providers: [
    credentials({
       async authorize(credentials){
           const validatedFields = LoginSchema.safeParse(credentials);
           if(validatedFields.success){
             const {phone,password} = validatedFields.data;
             const user = await getUserByPhone(phone);
             const driver = await getDriverByPhone(phone);
             if(!user || !user.password){
               if(!driver || !driver.password) return null;
               else {
                   const passwordMatch = await ComparePass(password,driver.password);
                   if(passwordMatch) return driver;
               }
             }
             else {
                const passwordMatch = await ComparePass(password,user.password);
                if(passwordMatch) return user;
             }
           }
          return null;
       }
    }),
    Google({
       clientId:process.env.GOOGLE_CLIENT_ID,
       clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    }),
    Discord({
      clientId:process.env.DISCORD_CLIENT_ID,
      clientSecret:process.env.DISCORD_CLIENT_SECRET,
   })
  ],
  trustHost:true,
} satisfies NextAuthConfig;