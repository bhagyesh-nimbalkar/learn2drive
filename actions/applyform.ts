'use server';
import { auth } from '@/auth';
import { getPanbyLicense, getPhonebyLicense, getaadharbyLicense } from '@/data/user';
import { db } from '@/lib/db';
import { ApplyFormSchema } from '@/schemas';
import { revalidatePath } from 'next/cache';
import * as z from 'zod';

export const licenseform = async (values:z.infer<typeof ApplyFormSchema>)=>{
    const validateFields = ApplyFormSchema.safeParse(values);
    if(!validateFields.success) return {error:"Invalid fields!"}
    const {dob,phone,pan,aadhar} = validateFields.data;
    const currentYear = new Date().getFullYear();
    const getDate = new Date(dob).getFullYear();
    if(currentYear - getDate < 18 ) return {error:"Age must be greater than 18."}
    const session = await auth();
    const getPhone = await getPhonebyLicense(phone);
    if(getPhone) return {error:"Phone is exists with another account."}
    const getPan = await getPanbyLicense(pan);
    if(getPan) return {error:"Pan Card is linked with another account."}
    const getAadhar = await getaadharbyLicense(aadhar);
    if(getAadhar) return {error:"Aadhar card is linked with another acccount."}
    const cdate = new Date();
    const edate = new Date(cdate);
    edate.setMonth(cdate.getMonth()+6);
    await db.user.update({
        where:{
            id:session?.user.id
        },
        data:{
             license:{
                create:{
                    ...validateFields.data,
                     expires:edate,
                }
             }
        }
    });
    revalidatePath('/dashboard/history');
    return {success:"Successfully Applied!"};
}