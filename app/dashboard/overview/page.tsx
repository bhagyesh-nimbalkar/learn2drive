import {auth} from "@/auth";
import CourseProgress from "@/components/interface/CourseProgress";
import Navbar from "@/components/interface/navbar";
import { getAllCourses } from "@/data/user";

const Dashboard = async () => {
  const session = await auth();
  const courses = await getAllCourses();

  return (
   <div className='flex flex-col w-full'>
     <Navbar/>
     <div className='w-full p-20'>
      <h1 className='text-[40px]'>Welcome, <span>{session?.user?.name}</span></h1>
     </div>
     <div>
       {courses && courses?.map((ele,index)=>{
         return <CourseProgress key={index} course={ele.progress}/>
       })}
     </div>
   </div>
  )
}

export default Dashboard;