import {auth} from "@/auth";
import Navbar from "@/components/interface/navbar";

const Dashboard = async () => {
  const session = await auth();
  return (
   <div className='flex flex-col w-full'>
     <Navbar/>
     <div className='w-full p-20'>
      <h1 className='text-[40px]'>Welcome, <span>{session?.user?.name}</span></h1>
     </div>
   </div>
  )
}

export default Dashboard;