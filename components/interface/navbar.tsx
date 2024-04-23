import React from 'react'
import Profile from './profile'
import { FaBars } from "react-icons/fa6";
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import Logo from './logo';
import DashboardComponent from './userDashLinks';
import { UserRole } from '@prisma/client';
import { auth } from '@/auth';
import AdminComponent from './admindashboard';
import DriverComponent from './driverDashboard';

const Navbar = async() => {
  const session = await auth();
  if(!session) return null;
  return (
    <div className='w-full h-[90px] shadow-xl mb-5 flex justify-between items-center p-10 xl:justify-end'>
        <Sheet>
          <SheetTrigger>
                  <div className='self-start rounded-full xl:hidden hover:bg-stone-100 flex justify-center items-center p-5 cursor-pointer'>
                    <FaBars fontSize="3vh"/>
                  </div>
          </SheetTrigger>
          <SheetContent side="left">
          <div className='w-full xl:flex h-full transition-all duration-300  flex-col  items-center'>
           <Logo w={150} h={150}/>
           <ul className='p-5 w-full'>
         {session?.user.role==='USER' as UserRole?<DashboardComponent/>:
          session.user.role==='ADMIN' as UserRole?<AdminComponent/>:
          session.user.role==='DRIVER' as UserRole?<DriverComponent/>:<></>}
           </ul>
     </div>
          </SheetContent>
        </Sheet>
          <Profile image={session?.user?.image}/>
    </div>
  )
}

export default Navbar