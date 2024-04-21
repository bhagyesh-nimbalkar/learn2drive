'use client';
import RegisterForm from "@/components/auth/register-form";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from '@/components/ui/card';
const OtpPage = () => {
  return (
    <div>
      <Card className='min-w-[400px] w-1/3 shadow-2xl border-2'>
       <CardHeader className='flex flex-col justify-center items-center'>
       <Image
              src="/assets/images/1686498283671.jpeg"
              alt="logo"
              width={100}
              height={100}
              className="150px lg:350px "
           />
           <h1 className='font-bold text-lg'>Sign in with Mobile Number</h1>
       </CardHeader>
       <CardContent>
          <RegisterForm/>
       </CardContent>
       <CardFooter>
       </CardFooter>
    </Card>
    </div>
  )
}
export default OtpPage;