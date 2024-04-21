'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiPieChart2Fill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { GiSteeringWheel } from "react-icons/gi";
import { FaIdCard } from "react-icons/fa";


const AdminComponent = () => {
  const pathname = usePathname();
  return (
    <div className='w-full h-svh flex flex-col gap-8 items-baseline'>
        <Link href='/dashboard/overview' className={`w-full ${pathname.includes('overview')?'active-bg':''} cursor-pointer rounded-lg`}>
          <li className={`w-full  flex gap-2 justify-start items-center p-2 rounded-xl cursor-pointer`}>
            <RiPieChart2Fill size="2.5vh" className='active-text' />
            <h1 className='lg:text-lg active-text text-md font-bold'>Overview</h1>
          </li>
        </Link>
        <Link href='/dashboard/users' className={`w-full rounded-lg ${pathname.includes('users')?'active-bg':''} `}>
          <li className={`w-full  flex gap-2 justify-start items-center p-2 rounded-xl cursor-pointer`}>
            <HiUsers size="2.5vh" className='active-text' />
            <h1 className='lg:text-lg active-text text-md font-bold'>Users</h1>
          </li>
        </Link>
        <Link href='/dashboard/drivers' className={`w-full rounded-lg ${pathname.includes('drivers')?'active-bg':''}`}>
          <li className={`w-full  flex gap-2 justify-start items-center p-2 rounded-xl cursor-pointer`}>
            <GiSteeringWheel size="2.5vh" className='active-text' />
            <h1 className='lg:text-lg active-text text-md font-bold'>Drivers</h1>
          </li>
        </Link>
        <Link href='/dashboard/request' className={`w-full rounded-lg ${pathname.includes('request')?'active-bg':''}`}>
          <li className={`w-full  flex gap-2 justify-start items-center p-2 rounded-xl cursor-pointer`}>
            <FaIdCard size="2.5vh" className='active-text' />
            <h1 className='lg:text-lg active-text text-md font-bold'>License Requests</h1>
          </li>
        </Link>
        <Link href='/dashboard/renew' className={`w-full rounded-lg ${pathname.includes('renew')?'active-bg':''}`}>
        <li className={`w-full  flex gap-2 justify-start items-center p-2 rounded-xl cursor-pointer`}>
          <FaIdCard size="2.5vh" className='active-text' />
          <h1 className='lg:text-lg active-text text-md font-bold'>License Renew Requests</h1>
        </li>
      </Link>
    </div>
  );
}

export default AdminComponent;