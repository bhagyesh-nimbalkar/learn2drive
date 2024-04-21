'use client';
import Link from 'next/link';
import React from 'react';
import { BiSolidPurchaseTag } from 'react-icons/bi';
import { RiPieChart2Fill } from 'react-icons/ri';
import { HiIdentification } from "react-icons/hi2";
import { MdManageHistory } from "react-icons/md";
import { usePathname } from 'next/navigation';


const DashboardComponent = () => {
  const pathname = usePathname();
  return (
    <div className='w-full h-svh flex flex-col gap-8 items-baseline'>
        <Link href='/dashboard/overview' className={`w-full ${pathname.includes('overview')?'active-bg':''} cursor-pointer rounded-lg`}>
          <li className={`w-full  flex gap-2 justify-start items-center p-2 rounded-xl cursor-pointer`}>
            <RiPieChart2Fill size="2.5vh" className='active-text' />
            <h1 className='lg:text-lg active-text text-md font-bold'>Overview</h1>
          </li>
        </Link>
        <Link href='/dashboard/session' className={`w-full rounded-lg ${pathname.includes('session')?'active-bg':''} `}>
          <li className={`w-full  flex gap-2 justify-start items-center p-2 rounded-xl cursor-pointer`}>
            <BiSolidPurchaseTag size="2.5vh" className='active-text' />
            <h1 className='lg:text-lg active-text text-md font-bold'>Book a Session</h1>
          </li>
        </Link>
        <Link href='/dashboard/license' className={`w-full rounded-lg ${pathname.includes('license')?'active-bg':''}`}>
          <li className={`w-full  flex gap-2 justify-start items-center p-2 rounded-xl cursor-pointer`}>
            <HiIdentification size="2.5vh" className='active-text' />
            <h1 className='lg:text-lg active-text text-md font-bold'>License</h1>
          </li>
        </Link>
        <Link href='/dashboard/history' className={`w-full rounded-lg ${pathname.includes('history')?'active-bg':''}`}>
          <li className={`w-full  flex gap-2 justify-start items-center p-2 rounded-xl cursor-pointer`}>
            <MdManageHistory size="2.5vh" className='active-text' />
            <h1 className='lg:text-lg active-text text-md font-bold'>License History</h1>
          </li>
        </Link>
    </div>
  );
};

export default DashboardComponent;
