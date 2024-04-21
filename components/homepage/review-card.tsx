import { Rating } from '@mui/material';
import React from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri';

const ReviewCard = ({msg,rating,author}:{msg:string,rating:number,author:string}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
    <div className='p-5 rounded-full bg-black translate-y-11 flex justify-center items-center'>
        <RiDoubleQuotesL className='text-white 2xl:text-[50px] xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px]'/>
    </div>
    <div className='p-[50px] bg-zinc-100 rounded-3xl flex flex-col items-center gap-11'>
        <h2 className='w-[80%] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[15px] text-[13px] text-center pt-[90px] font-medium'>
            {msg}
        </h2>
        <Rating name="half-rating-read" sx={{fontSize:'2vw'}} defaultValue={rating} precision={0.5} readOnly />
        <p className='2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[20px] sm:text-[20px] text-[20px] text-gray-800'> -{author}</p>
    </div>
</div>
  )
}

export default ReviewCard;