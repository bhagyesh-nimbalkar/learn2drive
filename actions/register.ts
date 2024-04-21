"use server";
import *  as z from 'zod';
import { RegisterSchema} from '@/schemas';
import { getDriverByEmail, getDriverByPhone, getUserByEmail, getUserByPhone } from '@/data/user';

export const register  = async (values:z.infer<typeof RegisterSchema>)=>{
    const validateFields = RegisterSchema.safeParse(values);
    if(!validateFields.success) return {error:"Invalid fields!"}
    const {phone,email} = validateFields.data;
    const existingUser = await getUserByPhone(phone);
    const existingDriver = await getDriverByPhone(phone);
    if(existingUser || existingDriver){
        return {error:"User is already exists with given mobile number"}
    }
    const existingUserbyMail = await getUserByEmail(email);
    const existingDriverbyMail = await getDriverByEmail(email);
    if(existingUserbyMail || existingDriverbyMail){
        return {error:"Email is already Exists!"};
    }
    return {sucess:"Verify Otp!"};
}