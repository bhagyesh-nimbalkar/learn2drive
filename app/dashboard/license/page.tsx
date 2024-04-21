import Navbar from "@/components/interface/navbar";
import CardLicense from "@/components/license/Card";

const LicensePage = () => {
  return (
  <div className='w-full h-full flex flex-col overflow-auto'>
       <Navbar/>
       <div className='w-full  flex justify-center items-start p-10 flex-col'>
       <h1 className='uppercase text-xl lg:text-3xl font-semibold mb-20'>Apply for driving license</h1>
        <CardLicense/>
      </div>
  </div>
  )
}
export default LicensePage;