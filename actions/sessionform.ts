'use server';
import { auth } from '@/auth';
import { db } from '@/lib/db';
import { SessionFormSchema } from '@/schemas';
import { revalidatePath } from 'next/cache';
import * as z from 'zod';

export const sessionform = async (values:z.infer<typeof SessionFormSchema>)=>{
    const validateFields = SessionFormSchema.safeParse(values);
    if(!validateFields.success) return {error:"Invalid fields!"}
    const session = await auth();
    await db.user.update({
        where:{
            id:session?.user.id
        },
        data:{
             formfilled:true,
        }
    });
    revalidatePath('/dashboard/session/formsession');
    return {success:"Successfully Applied!"};
}