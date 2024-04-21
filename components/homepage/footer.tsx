import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Divider } from '@mui/material';
import React from 'react'
import { FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-black flex flex-col mt-[100px]'>
        <div className='p-11 flex flex-col justify-between items-center md:flex md:flex-col md:gap-5 sm:flex sm:flex-col sm:gap-5 lg:flex lg:flex-col lg:justify-between lg:items-center  xl:flex xl:flex-row xl:justify-between xl:items-center 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:items-center border-b-stone-400'>
             <p className='text-white flex flex-col sm:flex sm:flex-row lg:flex lg:flex-row md:flex md:flex-row xl:flex xl:flex-row 2xl:flex 2xl:flex-row gap-3 justify-center items-center md:order-2 sm:order-2 order-2 2xl:order-1 xl:order-1 lg:order-2'><p className='font-semibold 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[18px] text-[15px]'>Address:</p> <address className='text-stone-300'>342/A Brooklyn St, Milson Avenue,New York</address> </p>
             <h1 className='2xl:text-[30px] xl:text-[30px] lg:text-[25px] md:text-[25px] sm:text-[20px] text-[18px] uppercase text-white font-extrabold md:order-1 sm:order-1 order-1 2xl:order-2 xl:order-2 lg:order-1'>Learn 2 Drive</h1>
             <div className='flex flex-col sm:flex sm:flex-row lg:flex lg:flex-row md:flex md:flex-row xl:flex xl:flex-row 2xl:flex 2xl:flex-row gap-5 md:order-3 sm:order-3 order-3 lg:order-3 xl:order-3 2xl:order-3'>
                 <h1 className='text-stone-300 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[18px] text-[15px]'>Follow us on social Media</h1>
                 <div className='flex gap-5 text-white'>
                    <Facebook/>
                    <Twitter/>
                    <Instagram/>
                    <LinkedIn/>
                 </div>
             </div>
        </div> 
        <Divider sx={{backgroundColor:'whitesmoke'}}/>
        <div className='p-[80px] 2xl:flex 2xl:flex-row justify-evenly items-center xl:flex xl:flex-col  xl:gap-11 lg:flex lg:flex-col lg:gap-11 md:flex md:flex-col md:gap-11 sm:flex sm:flex-col sm:gap-8 flex flex-col gap-5'>
            <div className='2xl:flex 2xl:flex-col gap-5 2xl:order-1 2xl:w-[50%] xl:order-2 xl:flex xl:flex-row xl:gap-11 xl:place-self-center xl:w-[100%] lg:order-2 lg:flex lg:flex-row lg:gap-11 lg:place-self-center lg:w-[100%] md:order-2 md:flex md:flex-row md:gap-11 md:place-self-center md:w-[100%] sm:order-2 sm:flex sm:flex-row sm:gap-11 sm:place-self-center sm:w-[100%] order-2 flex flex-row place-self-center w-[100%]'>
                <h1 className='text-white 2xl:text-[30px] xl:text-[30px] lg:text-[25px] md:text-[25px] sm:text-[20px] text-[18px] font-semibold'>About</h1>
                <p className='text-white w-[40%] 2xl:text-[15px] xl:text-[15px]  lg:text-[15px] md:text-[15px] sm:text-[15px] text-[15px]'>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                </p>
                <p className='text-white w-[40%]'>
                     When an unknown printer took a gallery of type and scrambled it to make a
                     type specimen book.
                </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-11 xl:order-1 xl:w-[80%] lg:order-1 lg:w-[80%] md:order-1 md:w-[100%] sm:order-1 sm:w-[100%] order-1 w-[100%] xl:place-self-center'>
                <h1 className='text-white 2xl:text-[70px] xl:text-[60px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px] w-[100%] text-center font-extrabold'>Premier Driving School for Confident</h1>
                <div className='w-[100%] p-1 2xl:pl-11 2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-[60%]  xl:pl-11 lg:pl-11 md:pl-11 sm:pl-8 pl-5 pr-1 bg-white rounded-[60px] flex justify-between'>
                    <input className='placeholder:text-black placeholder:font-semibold border-0 outline-none' type='email' placeholder='Enter your Email'></input>
                    <div className='bg-black rounded-full text-white 2xl:p-5 xl:p-5 lg:p-5 md:p-5 sm:p-3 p-1'>
                        <FaPaperPlane className='2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[15px] text-[15px]'/>
                    </div>
                </div>
            </div>
            <div className='w-[100%] justify-center items-center 2xl:w-[40%] 2xl:flex  2xl:flex-col flex flex-row gap-5 text-center 2xl:order-3 xl:order-3 lg:order-3 md:order-3 sm:order-3 order-3'>
                <h1 className='text-white 2xl:text-[30px] xl:text-[30px] lg:text-[25px] md:text-[25px] sm:text-[20px] text-[18px] font-semibold'>Quick Links</h1>
                <div className='2xl:flex 2xl:flex-col flex flex-row justify-evenly items-center text-white font-medium gap-5 2xl:text-[20px] xl:text-[20px] lg:text-[15px] md:text-[15px] sm:text-[15px] text-[12px]'>
                    <h1>Home</h1>
                    <h1>About</h1>
                    <h1>Courses</h1>
                    <h1>News</h1>
                    <h1>Contacts</h1>
                </div>
            </div>
        </div>
        <Divider sx={{backgroundColor:'whitesmoke'}}/>
        <div className='p-11'><p className='text-stone-300 text-center'>&copy; 2024 learn2drive All Rights Reserved</p></div>
    </div>
  )
}

export default Footer;