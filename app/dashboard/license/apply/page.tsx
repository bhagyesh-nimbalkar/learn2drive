import Logo from '@/components/interface/logo';
import Navbar from '@/components/interface/navbar';
import ApplyForm from '@/components/license/apply-form';
import { Card,CardTitle,CardContent, CardHeader} from '@/components/ui/card';
import React from 'react'

const page = () => {
  return (
<div className='w-full h-full flex flex-col '>
  <Navbar/>
  <div className='w-full h-full flex justify-center items-center p-10'>
     <Card className='w-full md:w-1/2 shadow-lg border-2'>
        <CardHeader>
               <Logo w={150} h={150}/>
        </CardHeader>
        <CardTitle className='text-center text-xl'>Driving License Form</CardTitle>
        <CardContent>
              <ApplyForm/>
        </CardContent>
     </Card>
  </div>
 </div>
  )
}

export default page;