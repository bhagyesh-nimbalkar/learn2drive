import Image from 'next/image';
import React from 'react'
import Navbar from '../interface/navbar';

const NotFound = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <Image 
          src="/assets/images/404_nothing_found_illustration_concept_vector__generated.jpg"
          alt='not-found'
          width={800}
          height={800}
        />
    </div>
  )
}

export default NotFound;