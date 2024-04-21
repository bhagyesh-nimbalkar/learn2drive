import AcceptForm from "@/components/homepage/acceptForm";
import AcceptRenewForm from "@/components/homepage/acceptrenewform";
import NotFound from "@/components/homepage/not-found";
import RejectForm from "@/components/homepage/rejectForm";
import Navbar from "@/components/interface/navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import { Card, CardHeader,CardContent} from "@/components/ui/card";
import {  getAllRenewLicense } from "@/data/user";
import { Status } from "@prisma/client";


const DisplayCard = async({label,text}:{label:string,text:string | undefined})=>{
  return (
      <div className='flex gap-5'>
          <h1 className='font-semibold'>{label}:</h1>
          <h1 className={`font-medium ${text==='PENDING'?'text-yellow-500':(text==='ACCEPT'?'text-green-500':(text==='REJECT'?'text-red-500':''))}`}>{text}</h1>
      </div>
  )
}
const ReqestPage = async() => {
  const license = await getAllRenewLicense();
  if(!license ) return null;
  return (
    <div className='w-full h-full flex flex-col'>
      <Navbar/>
  {license.length===0?<NotFound/>:
  <div className='w-full p-20'>
    <Card className='shadow-lg'>
      <CardHeader>
                <h1 className='font-semibold text-xl '>All License Renew Requests</h1> 
      </CardHeader>
      <CardContent>
        {
           license?.map((ele,index)=>{ 
            return (
            <Accordion type="single" key={index} collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>License id: {ele.id}</AccordionTrigger>
              <AccordionContent className='flex flex-col gap-5'>
                    <div className='grid grid-cols-2 w-full gap-3'>
                           <DisplayCard label="Name" text={ele.firstname+" "+ele.lastname}/>
                           <DisplayCard label="Phone" text={ele.phone?.toString()}/>
                           <DisplayCard label="Address" text={ele.address?.toString()}/>
                           <DisplayCard label="PAN Number" text={ele.pan?.toString()}/>
                           <DisplayCard label="Date of Birth" text={ele.dob?.toString()}/>
                           <DisplayCard label="Aadhaar Number" text={ele.aadhar?.toString()}/>
                           <DisplayCard label="Status" text={ele.status}/>
                    </div>
                 {ele.status==='RENEW' as Status &&  <div className='w-full flex justify-end items-center gap-3'>
                      <AcceptRenewForm id={ele.id}/>
                      <RejectForm id={ele.id}/>
                </div>}
              </AccordionContent>
            </AccordionItem>
            </Accordion>)
           })
        }
      </CardContent>
    </Card>
  </div>}
    </div>
  )
}

export default ReqestPage;