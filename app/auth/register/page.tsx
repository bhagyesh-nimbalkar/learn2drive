import Cardwrapper from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const page = async () => {
  return (
<div>
  <Cardwrapper 
    headerLabel="Create an Account"
    isSocial
    backButtonLabel="Already have account?"
    backButtonHref="/auth/login"
    headerTitle="User Registration"
    >
    <div className='flex justify-center items-center gap-2'>
    <Link href="/auth/otp">
       <Button className="p-6 text-lg flex gap-5 group">
             Continue with Phone Number 
             <FaArrowRightLong className="group-hover:translate-x-2 transition-all duration-300"/>
       </Button>
    </Link>
    </div>
    </Cardwrapper>
</div>
  )
}

export default page;