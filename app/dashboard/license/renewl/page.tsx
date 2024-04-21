import Navbar from "@/components/interface/navbar";
import RenewForm from "@/components/license/renewForm";

const RenewPage = async() => {
  return (
 <div className='w-full h-full flex flex-col'>
    <Navbar/>
   <div className='w-full'>
            <RenewForm/>
   </div>
 </div>
  )
}

export default RenewPage;