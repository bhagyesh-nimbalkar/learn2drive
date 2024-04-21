'use server';
import {signOut} from "@/auth";
import { db } from "@/lib/db";
import { Status } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const renewUser = async (id:string)=>{
        await db.license.update({
            where:{
                id
            },
            data:{
                status:"RENEW" as Status
            }
        })
        revalidatePath('/dashboard/license');
        redirect('/dashboard/license');
}

export const SignOutUser = async ()=>{
     await signOut();
}