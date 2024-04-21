"use server"
import *  as z from 'zod';
import { LoginSchema } from '@/schemas';
import { getDriverByPhone} from '@/data/user';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';


export const driverlogin  = async (values:z.infer<typeof LoginSchema>)=>{
    const validateFields = LoginSchema.safeParse(values);
    if(!validateFields.success) return {error:"Invalid fields!"}
    const {phone,password} = validateFields.data;
    console.log("Inside driver login",phone,password);
    const existingUser = await getDriverByPhone(phone);
    if(!existingUser || !existingUser.phone || !existingUser.password) {
        return {error:"Driver does not exist!"}
    }
    if(!existingUser.phoneverified) return {error:"Invalid Credentials!"}
    try{
        await signIn("credentials",{
           phone,
           password,
           redirectTo:DEFAULT_LOGIN_REDIRECT,
        })
   }catch(error){
       if(error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin":
                    return {error:"Invalid Credentials!"}
                default: 
                    return {error:"Something went wrong!"}
            }
       }
       throw error;
   }
}