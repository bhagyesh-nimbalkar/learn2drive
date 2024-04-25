'use server';
import { courseData } from "@/data/coursedetails";
import { getExpiryTime, getverificationToken } from "@/data/user";
import { db } from "@/lib/db";
import { courseFormSchema } from "@/schemas";
import { Status } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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
export const link = async()=>{
     try {
           const token = await getverificationToken();
           if(!token) return null;
           await db.course.create({
                data:{
                     userId:token.userId,
                     driverId:token.driverId,
                     progress:courseData
                }
           });
           await unlink();
     } catch (error) {
          console.log(error);
     }
}
export const unlink = async ()=>{
     try {
          await db.verificationToken.deleteMany();
          redirect('/dashboard/overview');
    } catch (error) {
         console.log(error);
    }
}
export const driverAccept = async(userId:string,driverId:string)=>{
    console.log("Inside DriverAccept");
//     const time = await getExpiryTime();
//     const currtime = new Date();
//     if(!time) return null;
//     if(currtime.getMilliseconds()>time.getMilliseconds())
//     {
//           return null;
//     }
    try{
        await db.verificationToken.update({
            where:{
                 driverId,
            },
            data:{
                 status:"ACCEPT" as Status
            }
         });
         console.log("Hi again");
         revalidatePath('/dashboard/enrollrequest');
    }
    catch(error)
    {
      console.log(error);
    }
}
export const driverReject = async(driverId:string)=>{
     try{
          const driver = await db.driver.findMany({
               take:3
          });
          if(!driver || driver.length==0) throw Error;
          let index = driver.findIndex((ele)=>{
               return ele.id===driverId;
          });
          if(index+1<driver.length)
          {
               await db.verificationToken.update({
                    where:{
                          driverId
                    },
                    data:{
                         driverId:driver[index+1].id
                    }
               })
          }
          else return null;
     }
     catch(error)
     {
       console.log(error);
     }
}