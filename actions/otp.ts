'use server'

import { db } from "@/lib/db"
import { HashPass } from "@/validation/Hash";


interface User{
     phone:string,
     name:string,
     password:string,
     email:string,
  }
export const saveUser = async(user:User | undefined)=>{
 try{
     if(!user) return {error:"Invalid User"};
     const hashedPassword = HashPass(user.password);
      await db.user.create({
          data:{
                phone:user?.phone,
                password:hashedPassword,
                phoneverified:new Date(),
                name:user?.name,
                email:user.email,
          }
      })
      return {success:"Account Created!"};
    }catch(error){
         return {error:"Something went Wrong"};
    }
}
