import Image from 'next/image';
import { FaRegUser } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { FaChevronCircleRight } from "react-icons/fa";
import { Button } from '../ui/button';
import Link from 'next/link';
const Navbar = () => {
  return (
    <header>
     <nav className='z-50 bg-white shadow-xl w-[100%]  border-b-2 flex flex-row flex-wrap justify-around items-center top-0 fixed'>
        <ul className='hidden lg:flex  xl:gap-[50px] 2xl:gap-[70px] lg:gap-[40px] md:gap-[20px] sm:hidden gap-[20px]   font-semibold text-[20px] justify-center items-center cursor-pointer relative'>
             <li className='under'>Home</li>
             <li className='under'>About</li>
             <li className='under'>Courses</li>
             <li className='under'>News</li>
        </ul>
        <h1 className='xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px]   text-center font-extrabold uppercase '><a href='localhost:3000'>
            <Image
               src="/assets/images/1686498283671.jpeg"
               alt='logo'
               width={120}
               height={120}
            /></a></h1>
        <div className='flex justify-between gap-10'>
         <Link href='/auth/login' className='group'>
              <Button className='flex justify-center items-center gap-3 p-5'>
                 <FaRegUser className='text-lg'/>
                <h1 className='font-bold text-lg'>User Login</h1>
                <FaChevronCircleRight className='text-lg group-hover:translate-x-1 transition-all duration-500'/>
              </Button>
         </Link>
          <Link href='/auth/driver/login' className='group'>
              <Button className='flex justify-center items-center gap-3 p-5'>
                 <GiSteeringWheel className='text-lg'/>
                <h1 className='font-bold text-lg'>Driver Login</h1>
                <FaChevronCircleRight className='text-lg group-hover:translate-x-1 transition-all duration-500'/>
              </Button>
         </Link>
        </div>
     </nav>
     </header>
  )
}

export default Navbar