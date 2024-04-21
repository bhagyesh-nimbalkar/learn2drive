import { auth } from '@/auth';
import NotFound from '@/components/homepage/not-found';
import HistoryCard from '@/components/interface/historyCard';
import Navbar from '@/components/interface/navbar';
import { getLicenseByUserId } from '@/data/user';
import React from 'react'

const History = async() => {
  const session = await auth();
  const User = await getLicenseByUserId(session?.user.id);
  return (
  <div className='w-full h-full flex flex-col'>
    <Navbar/>
    {User?(
    <div className='w-full h-full flex justify-center items-start p-10'>
        <HistoryCard/>
    </div>
    ):<NotFound/>}
  </div>
  )
}

export default History;