'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiPieChart2Fill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";


const DriverComponent = () => {
  const pathname = usePathname();
  return (
    <div className='w-full h-svh flex flex-col gap-8 items-baseline'>
        <Link href='/dashboard/overview' className={`w-full ${pathname.includes('overview')?'active-bg':''} cursor-pointer rounded-lg`}>
          <li className={`w-full  flex gap-2 justify-start items-center p-2 rounded-xl cursor-pointer`}>
            <RiPieChart2Fill size="2.5vh" className='active-text' />
            <h1 className='lg:text-lg active-text text-md font-bold'>Overview</h1>
          </li>
        </Link>
        <Link href='/dashboard/enrollusers' className={`w-full rounded-lg ${pathname.includes('enrollusers')?'active-bg':''} `}>
          <li className={`w-full  flex gap-2 justify-start items-center p-2 rounded-xl cursor-pointer`}>
            <HiUsers size="2.5vh" className='active-text' />
            <h1 className='lg:text-lg active-text text-md font-bold'>Enrolled Users</h1>
          </li>
        </Link>
        <Link href='/dashboard/enrollrequest' className={`w-full rounded-lg ${pathname.includes('enrollrequest')?'active-bg':''}`}>
          <li className={`w-full  flex gap-2 justify-start items-center p-2 rounded-xl cursor-pointer`}>
            <VscGitPullRequestGoToChanges size="2.5vh" className='active-text' />
            <h1 className='lg:text-lg active-text text-md font-bold'>Enroll Request</h1>
          </li>
        </Link>
    </div>
  );
}

export default DriverComponent;