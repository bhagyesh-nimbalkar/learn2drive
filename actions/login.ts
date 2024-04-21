"use server"
import *  as z from 'zod';
import { LoginSchema } from '@/schemas';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
import { signIn } from '@/auth';
import {getUserByPhone } from '@/data/user';


export const login  = async (values:z.infer<typeof LoginSchema>)=>{
    const validateFields = LoginSchema.safeParse(values);
    if(!validateFields.success) return {error:"Invalid fields!"}
    const {phone,password} = validateFields.data;
    const existingUser = await getUserByPhone(phone);
    if(!existingUser || !existingUser.phone || !existingUser.password) {
        return {error:"User does not exist!"}
    }
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