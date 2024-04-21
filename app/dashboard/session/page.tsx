import { auth } from '@/auth';
import Navbar from '@/components/interface/navbar';
import Pricingcard from '@/components/interface/pricingcard';
import { getUserById } from '@/data/user';
import { redirect } from 'next/navigation';
import React from 'react'

const SessionPage = async () => {
  const session = await auth();
  const User = await getUserById(session?.user.id.toString());
  if(User && !User.formfilled) redirect('/dashboard/session/formsession');
  return (
  <div className='w-full h-full flex flex-col'>
   <Navbar/>
   <div className='w-full text-center text-4xl font-bold mt-10'>
       <h1>Select Plan</h1>
   </div>
   <div className='w-full flex-col flex md:flex-row gap-10 justify-center items-center mt-10 p-10'>
      <Pricingcard price='1000' duration="10 days" benefits={[
        '10 intensive driving lessons',
        'Expert instructors with personalized instruction',
        'Pick-up and drop-off available',
        'Progress tracking and feedback',
      ]}/>
      <Pricingcard price='3000' duration="month" benefits={[
        'Flexible scheduling to fit your calendar',
        'Pick-up and drop-off for convenience',
        'Guidance and support for theory test preparation',
        'Insurance coverage throughout your training period'
      ]}/>
    </div>
  </div>
  )
}

export default SessionPage;