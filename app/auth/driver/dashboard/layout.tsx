import Sidebar from '@/components/interface/sidebar';
import React from 'react'

const DriverDashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
  <div className='w-full h-full'>
     {/* <Sidebar/> */}
     {children}
  </div>
  )
}

export default DriverDashboardLayout;