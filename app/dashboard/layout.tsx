import Sidebar from '@/components/interface/sidebar';
import React from 'react'

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
<div className='w-full h-screen flex overflow-hidden'>
  <div className='lg:w-[20%] hidden h-screen xl:flex '>
    <Sidebar/>
  </div>
  <div className='w-[80%] h-screen flex-1 flex overflow-y-auto'>
     {children}
  </div>
</div>
  )
}

export default DashboardLayout;