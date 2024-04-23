import React from 'react'
import Logo from './logo';
import { auth } from '@/auth';
import DashboardComponent from './userDashLinks';
import { UserRole } from '@prisma/client';
import AdminComponent from './admindashboard';
import DriverComponent from './driverDashboard';


const Sidebar = async() => {
  const session = await auth();
  if(!session) return null;
  return (
     <div className='w-full flex h-screen border-2 transition-all duration-300  flex-col  items-center'>
           <Logo w={150} h={150}/>
           <ul className='p-5 w-full'>
           {session?.user.role==='USER' as UserRole?<DashboardComponent/>:
           session.user.role==='ADMIN' as UserRole?<AdminComponent/>:
           session.user.role==='DRIVER' as UserRole?<DriverComponent/>:<></>}
           </ul>
     </div>
  )
}

export default Sidebar;