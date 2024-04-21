import { Button } from "@/components/ui/button";
import { signOut,auth} from "@/auth";

const DriverDashboard = async () => {
  const session = await auth();
  return (
     <div>
        {JSON.stringify(session)}
     <form action={async()=>{
        'use server'
        await signOut();
     }}>
        <Button type="submit">
             Sign Out
        </Button>
    </form>
     </div>
  )
}

export default DriverDashboard;