import { IconButton } from '@mui/material';
import { LocalPhoneRounded } from '@mui/icons-material';
const SubCard = ({title,img}:{title:string,img:string})=>{
    return (
     <div className='p-5 relative flex flex-col gap-5 cursor-pointer'>
         <div className='h-min overflow-hidden rounded-3xl'>
            <img alt='feat_images' className='hover:scale-125 transition-all duration-500' src={img}/>
         </div>
         <h1 className='2xl:text-[40px] xl:text-[30px] lg:text-[25px] md:text-[20px] sm:text-[15px] text-[15px] font-extrabold text-slate-600'>{title}</h1>
     </div>
    )
}
const Card = () => {
  return (
<>
    <div className='flex flex-col justify-center mt-60 gap-11'>
        <div>
             <h1 className='2xl:text-[70px] xl:text-[60px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px] font-semibold text-center'>Welcome to Learn 2 Drive</h1>
        </div>
        <div>
             <h5 className='2xl:text-[25px] xl:text-[25px] lg:text-[20px] md:text-[20px] sm:text-[15px] text-[15px] text-center font-semibold'>Empower Your Drive: Unleashing Confidence and Skills with Premier Driving Education</h5>
        </div>
        <div  className='p-5 flex justify-evenly items-center transition-all duration-700 ease-in-out'>
               <SubCard title="Learning Roads" 
                img="https://images.unsplash.com/photo-1476067897447-d0c5df27b5df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               />
               <SubCard title="Basic Lessons"
                 img="https://images.unsplash.com/photo-1516862523118-a3724eb136d7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               />
               <SubCard title="Experienced Instructors"
                 img="https://plus.unsplash.com/premium_photo-1683133959080-c34cc9fb2f73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               />
        </div>
    </div>
    <div className='mt-11 p-[50px] '>
    <div className='w-[100%] flex justify-center items-center flex-col gap-11'>
       <h1 className='2xl:text-[100px] xl:text-[80px] lg:text-[70px] md:text-[50px] sm:text-[40px] text-[30px] font-extrabold text-center w-[70%]'>KickStart Your Driving Experience Now!</h1>
       <div className='pl-11 p-2 border-[1px] border-black rounded-[50px] flex gap-5 items-center'>
           <h1 className='2xl:text-[30px] xl:text-[25px] lg:text-[25px] md:text-[20px] sm:text-[15px] text-[15px] font-medium'>+123 4567 8912</h1>
           <IconButton sx={{
                padding:'15px',
                backgroundColor:'black',
                ":hover":{
                   backgroundColor:'black'
                }
           }}>
                <LocalPhoneRounded sx={{
                   color:'white',
                   fontSize:'2vw'
                }}/>
           </IconButton>
       </div>
   <div className='w-[100%] flex justify-center items-center flex-col gap-11 mt-5'>
       <p  className='2xl:text-[20px] xl:text-[20px] lg:text-[15px] md:text-[15px] sm:text-[10px] text-[10px] font-normal text-center w-[50%]'>Unlock the freedom of the open road with our premier driving school. Our expert instructors provide comprehensive and personalized training to ensure you master the skills needed to drive confidently and safely. Join us on the journey towards becoming a skilled and responsible driver.</p>
   </div>
    </div>
   </div>
</>
  )
}

export default Card;