import { auth } from "@/auth";
import AcceptDriverForm from "@/components/homepage/acceptDriverForm";
import AcceptForm from "@/components/homepage/acceptForm";
import NotFound from "@/components/homepage/not-found";
import RejectDriverForm from "@/components/homepage/rejectDriverForm";
import RejectForm from "@/components/homepage/rejectForm";
import Navbar from "@/components/interface/navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import { Card, CardHeader,CardContent} from "@/components/ui/card";
import { getAllLicense, getEnrollRequests, getUserById } from "@/data/user";
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
  const session = await auth();
  if(!session) return <NotFound/>;
  const license = await getEnrollRequests(session.user.id.toString());
  if(!license ) return null;
  return (
    <div className='w-full h-full flex flex-col'>
      <Navbar/>
  {license.length===0?<NotFound/>:
  <div className='w-full p-20'>
    <Card className='shadow-lg'>
      <CardHeader>
                <h1 className='font-semibold text-xl '>All Enroll Requests</h1> 
      </CardHeader>
      <CardContent>
        {
           license?.map(async(ele,index)=>{ 
            const user = await getUserById(ele.userId);
            if(!user) return null;
            return (
            <Accordion type="single" key={index} collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>License id: {ele.id}</AccordionTrigger>
              <AccordionContent className='flex flex-col gap-5'>
                    <div className='grid grid-cols-2 w-full gap-3'>
                           <DisplayCard label="Name" text={user.name?.toString()}/>
                           <DisplayCard label="Phone" text={user.phone?.toString()}/>
                           <DisplayCard label="Email" text={user.email?.toString()}/>
                           <DisplayCard label="Status" text={ele.status}/>
                    </div>
                 {ele.status==='PENDING' as Status &&  <div className='w-full flex justify-end items-center gap-3'>
                      <AcceptDriverForm userId={ele.userId} driverId={ele.driverId} />
                      <RejectDriverForm driverId={ele.driverId} />
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