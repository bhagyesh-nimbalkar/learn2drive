import { renewUser } from "@/actions/userActions";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";


const RenewForm = async() => 
{
  const session = await auth();
  const handleSubmit = async(id:string | undefined)=>{
     if(!id) return;
     await renewUser(id);
  }
  return (
    <div className='w-full p-20 justify-center items-center h-full'>
        <Card>
             <CardHeader>
                    Request for Renew Driving License Application
             </CardHeader>
             <CardContent>
             <form onSubmit={()=>handleSubmit(session?.user?.id.toString())}>
                    <Button className='font-medium' type='submit'>{"Request To Renew Application"}</Button>
             </form>
             </CardContent>
        </Card>
    </div>
  )
}

export default RenewForm;