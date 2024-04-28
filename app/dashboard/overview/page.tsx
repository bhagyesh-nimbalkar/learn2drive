import {auth} from "@/auth";
import NotFound from "@/components/homepage/not-found";
import CourseProgress from "@/components/interface/CourseProgress";
import Navbar from "@/components/interface/navbar";
import { getAllCourses } from "@/data/user";
import { UserRole } from "@prisma/client";

const Dashboard = async () => {
  const session = await auth();
  const courses = await getAllCourses();
  if(!session) return <NotFound/>;
  return (
   <div className='flex flex-col w-full'>
     <Navbar/>
     <div className='w-full p-20'>
      <h1 className='text-[40px]'>Welcome, <span>{session?.user?.name}</span></h1>
     </div>
     <div>
       {session.user.role==='USER' as UserRole && courses && courses?.map((ele,index)=>{
         return <CourseProgress key={index} course={ele.progress}/>
       })}
     </div>
   </div>
  )
}

export default Dashboard;