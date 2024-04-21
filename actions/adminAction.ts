'use server';

import { getLicenseByUserId } from "@/data/user";
import { db } from "@/lib/db";
import { Status } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const adminAccept = async (id:string)=>{
     await db.license.update({
        where:{
             id
        },
        data:{
             status:"ACCEPT" as Status
        }
     });
     revalidatePath('/dashboard/request');
}
export const adminrenewAccept = async (id:string)=>{
    const cdate = new Date();
    const edate = new Date(cdate);
    edate.setMonth(cdate.getMonth()+6);
     await db.license.update({
        where:{
             id
        },
        data:{
             status:"ACCEPT" as Status,
             expires:edate
        }
     });
     revalidatePath('/dashboard/request');
}
export const adminReject = async (id:string)=>{
     await db.license.update({
        where:{
             id
        },
        data:{
             status:"REJECT" as Status
        }
     });
     revalidatePath('/dashboard/request');
}
export const adminuserDelete = async (id:string)=>{
     const license = await getLicenseByUserId(id);
     if(license){
          await db.license.delete({
               where:{
                    userId:id,
               }
          });
     }
     await db.user.delete({
          where:{
               id
          }
     });
     revalidatePath('/dashboard/users');
}
export const admindriverDelete = async (id:string)=>{
     await db.driver.delete({
          where:{
               id
          }
     });
     revalidatePath('/dashboard/drivers');
}