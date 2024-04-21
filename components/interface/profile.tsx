'use client';
import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { RiLogoutCircleFill } from "react-icons/ri";
import { SignOutUser } from '@/actions/userActions';

const Profile = ({image}:{image:string}) => {
  return (
 <div className='rounded-full w-12 h-12 border-2  cursor-pointer'>
  <Popover>
    <PopoverTrigger>
        <img
           src={image || '/assets/images/istockphoto-1130884625-612x612.jpg'}
           alt='profile'
           className=' object-fill w- w-full h-full rounded-full'
         />
  </PopoverTrigger>
    <PopoverContent className='-translate-x-5'>
        <div className='w-full flex flex-col items-center'>
           <div className='w-full justify-around p-3 flex  items-center cursor-pointer hover:bg-stone-100 rounded-xl'>
               <FaUser className='text-slate-500 text-lg'/> <h1 className='text-slate-600 font-semibold text-lg text-left'>Profile</h1>
           </div>
           <div className='w-full justify-around p-3 flex  items-center cursor-pointer hover:bg-stone-100 rounded-xl'>
               <IoMdSettings className='text-slate-500 text-lg'/> <h1 className='text-slate-600 font-semibold text-lg'>Settings</h1>
           </div>
           <div className='w-full justify-around p-3 flex  items-center cursor-pointer hover:bg-stone-100 rounded-xl'>
               <RiLogoutCircleFill className='text-slate-500 text-lg font-bold'/> 
                  <form action={async()=>{
                      await SignOutUser();
                  }}>
                      <button type="submit" className='bg-transparent border-none shadow-none text-slate-500 text-lg font-bold hover:bg-none focus-within:bg-none'>
                          Sign Out
                      </button>
                  </form>
           </div>
        </div>
    </PopoverContent>
  </Popover>
  </div>
  )
}

export default Profile