import React from 'react'
import ReviewCard from './review-card'

const Review = () => {
  return (
    <div className='flex flex-col p-11 items-center justify-center gap-11'>
        <h1 className='2xl:text-[70px] xl:text-[60px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px] 2xl:w-[40%] xl:w-[60%] lg:w-[80%] md:w-[100%] sm:w-[100%] w-[100%] text-center font-medium'>What our awesome customers say</h1>
        <p className='2xl:w-[40%] xl:w-[50%] lg:w-[70%] md:w-[80%] sm:w-[100%] w-[100%] text-[18px] text-center font-thin text-slate-700'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s.
        </p>
        <div className='2xl:flex 2xl:flex-row  xl:flex xl:flex-row lg:flex lg:flex-col md:flex md:flex-col sm:flex sm:flex-col flex flex-col gap-11 mt-[70px] justify-around items-center'>
             <ReviewCard msg="Enrolling in this driving 
        school was the best decision! The instructors 
        are patient, knowledgeable, and made learning 
        to drive a breeze. Highly recommended!"
        rating={5}
        author="Amy Miller"
        />
             <ReviewCard
             msg=
             "Kudos to the driving school team! The lessons were not only informative but also enjoyable.I appreciate the emphasis on safety and responsible driving."
             rating={5}
             author="Cynthia Martin"
             />
             <ReviewCard
             msg=
             "Such a positive experience at this driving school! From the friendly staff to the well-structured lessons, I felt confident and well-prepared for my driving test."
             rating={4}
             author="Mildred Gonzalez"
             />
        </div>
    </div>
  )
}

export default Review