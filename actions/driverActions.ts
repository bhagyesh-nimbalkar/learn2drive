'use server';
import { db } from "@/lib/db";
import { courseFormSchema } from "@/schemas";
import { Status } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const courseformupdate = async (data: z.infer<typeof courseFormSchema>,userId:string,driverId:string)=>{
    if(!userId || !driverId || !data ) return null;
      try{
           await db.course.update({
              where:{
                  driverId,
                  userId,
              },
              data:{
                 ...data
              }
           });
      }
      catch(error){
        console.log(error);
      }
      revalidatePath('/dashboard/enrollusers');
}

export const findDrivers = async (userId:string)=>{
   try{
        const driver = await db.driver.findMany({
             take:3
        });
        if(!driver || driver.length==0) throw Error;
        const currentdate = new Date().getMinutes();
        const exdate = new Date();
        exdate.setMinutes(currentdate+3);
        await db.verificationToken.create({
            data:{
                 driverId:driver[0].id,
                 expires:exdate,
                 userId
            }
        });
      revalidatePath('/dashboard/enrollrequest');
   }
   catch(error)
   {
     console.log(error);
   }
}
export const isAccepted = async()=>{
    try{
       const decision = await db.verificationToken.findFirst({
            where:{
                 status:"ACCEPT" as Status
            }
        });
      return decision;
   }
   catch(error)
   {
     console.log(error);
   }
}
export const link = ()=>{
     
}
export const driverAccept = async(userId:string,driverId:string)=>{
    try{
         db.verificationToken.update({
            where:{
                 userId,
                 driverId,
            },
            data:{
                 status:"ACCEPT" as Status
            }
         });
         revalidatePath('/dashboard/enrollrequest');
    }
    catch(error)
    {
      console.log(error);
    }
}