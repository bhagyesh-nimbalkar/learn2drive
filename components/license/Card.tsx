import React from 'react'
import { Card,CardContent, CardHeader } from '../ui/card';
import { IoIosAddCircle } from "react-icons/io";
import Link from 'next/link';
import { auth } from '@/auth';
import { Status, UserRole } from '@prisma/client';
import { redirect } from 'next/navigation';
import { MdUpdate } from "react-icons/md";
import { getLicenseByUserId} from '@/data/user';


const CardLicense = async() => {
  const session = await auth();
  if(session?.user.role === "ADMIN" as UserRole) redirect('/dashboard/overview');
  if(session?.user.role === "DRIVER" as UserRole) redirect('/dashboard/overview');
  const User = await getLicenseByUserId(session?.user.id);
  const currentDate = new Date();
  if(!session) return null;
  let expiryDate;
  if(User?.expires) expiryDate = new Date(User?.expires?.toString());
  console.log(expiryDate?.toDateString(),currentDate.toDateString());
  return (
  <div className='w-full flex flex-col lg:flex-row gap-10'>
    <Link href='/dashboard/license/apply' className={`${User?.id?'disable':''}`}>
       <Card className={`flex justify-center items-center flex-col hover:bg-stone-100 cursor-pointer`}>
           <CardHeader>
               <IoIosAddCircle size="5vh" className='text-orange-500'/>
           </CardHeader>
           <CardContent>
                <h1 className='text-lg font-semibold uppercase'>Apply for new Driving License</h1>
           </CardContent>
       </Card>
    </Link>
    <Link  href='/dashboard/license/renewl' className={`${User && expiryDate && currentDate.getMilliseconds()<expiryDate.getMilliseconds() && User.status==='ACCEPT' as Status?'':'disable'}`}>
       <Card className='flex justify-center items-center flex-col hover:bg-stone-100 cursor-pointer'>
           <CardHeader>
               <MdUpdate size="5vh" className='text-purple-500'/>
           </CardHeader>
           <CardContent>
                    <h1 className='text-lg font-semibold uppercase'>renew existing Driving License</h1>
           </CardContent>
       </Card>
    </Link>
  </div>
  )
}

export default CardLicense;