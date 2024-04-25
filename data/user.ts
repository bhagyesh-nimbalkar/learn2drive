import { db } from "@/lib/db";
import { Status, UserRole } from "@prisma/client";

export const getUserByPhone =  async (phone:string) =>{
    try {
        const user = await db.user.findMany({
            where:{
                phone
            }
        });
        if(user.length>1) throw Error;
        return user[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getUserByEmail =  async (email:string | null | undefined) =>{
    try {
        if(!email) return null;
        const user = await db.user.findUnique({
            where:{
                email
            }
        });
        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getDriverByEmail =  async (email:string | null | undefined) =>{
    try {
        if(!email) return null;
        const user = await db.driver.findUnique({
            where:{
                email
            }
        });
        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getDriverByPhone =  async (phone:string) =>{
    try {
        const user = await db.driver.findUnique({
            where:{
                phone
            }
        });
        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getUserById =  async (id:string | undefined) =>{
    if(id===null || id===undefined) return;
    try {
        const user = await db.user.findUnique({where:{id}});
        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getDriverById =  async (id:string) =>{
    try {
        const user = await db.driver.findUnique({where:{id}});
        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getLicenseByUserId = async(id:string | undefined)=>
{ 
    if(id===null || id===undefined) return;
    try {
        const license = await db.license.findUnique({
            where:{
                userId:id,
            }
        })
        return license;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getPhonebyLicense = async (phone:string)=>{
    try {
        const license = await db.license.findFirst({
            where:{
                 phone
            }
        });
        return license;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getPanbyLicense = async (pan:string)=>{
    try {
        const license = await db.license.findFirst({
            where:{
                 pan
            }
        });
        return license;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getaadharbyLicense = async (aadhar:string)=>{
    try {
        const license = await db.license.findFirst({
            where:{
                 aadhar
            }
        });
        return license;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getLicensebyUserId = async (userId:string | undefined)=>{
    if(userId===undefined || userId===null) return null;
    try {
        const license = await db.license.findUnique({
            where:{
                 userId
            }
        });
        return license;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getAllUsers = async ()=>{
    try {
        const users = await db.user.findMany({
            where:{
                role:"USER" as UserRole
            }
        });
        return users;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getAllDrivers = async ()=>{
    try {
        const users = await db.driver.findMany({
            where:{
                role:"DRIVER" as UserRole
            }
        });
        return users;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getAllLicense = async ()=>{
    try {
        const users = await db.license.findMany({
            where:{
                 status:"PENDING" as Status
            }
        });
        return users;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getEnrollRequests = async (driverId:string)=>{
    try {
        const users = await db.verificationToken.findMany({
            where:{
                 status:"PENDING" as Status,
                 driverId
            }
        });
        return users;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getAllRenewLicense = async ()=>{
    try {
        const users = await db.license.findMany({
            where:{
                 status:"RENEW" as Status
            }
        });
        return users;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getCourse = async(driverId:string)=>{
    try {
        const users = await db.course.findMany({
            where:{
                driverId
            }
        });
        return users;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getverificationToken = async()=>{
    try {
        const users = await db.verificationToken.findFirst();
        return users;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export const getExpiryTime = async () =>{
    try {
         const time = await db.verificationToken.findFirst();
         if(!time) return null;
         return time.expires;
    } catch (error) {
        console.log(error);
    }
}
export const getAllCourses = async()=>{
    try {
         const courses = await db.course.findMany({
            where:{
                 payment:true
            }
         });
         return courses;
   } catch (error) {
       console.log(error);
   }
}
export const isCourseAvailable = async(userId:string)=>{
    try {
         const courses = await db.course.findUnique({
            where:{
                 userId
            }
         });
         return courses;
   } catch (error) {
       console.log(error);
   }
}