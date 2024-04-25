import { auth } from "@/auth";
import SessionForm from "@/components/interface/SessionForm";
import Logo from "@/components/interface/logo";
import Navbar from "@/components/interface/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUserById } from "@/data/user";
import { redirect } from "next/navigation";

const FormSession = async() => {
  const session = await auth();
  const User = await getUserById(session?.user.id.toString());
  if(User && User.formfilled) redirect('/dashboard/session/map');
  return (
    <div className='flex flex-col w-full'>
         <Navbar/>
    <div className='w-full p-10 flex justify-center items-center'>
         <Card className='w-full md:w-1/2 shadow-lg border-2'>
        <CardHeader>
               <Logo w={150} h={150}/>
        </CardHeader>
        <CardTitle className='text-center text-xl'>Personal Details</CardTitle>
        <CardContent>
              <SessionForm/>
        </CardContent>
     </Card>
    </div>
    </div>
  )
}

export default FormSession;