import Image from 'next/image'
import React from 'react'

const Logo = ({w,h}:{w:number,h:number}) => {
  return (
  <div className='w-full flex justify-center items-center'>
    <Image
      src='/assets/images/1686498283671.jpeg'
      alt='logo'
      width={w}
      height={h}
      className='-translate-x-2'
    />
  </div> 
  )
}

export default Logo