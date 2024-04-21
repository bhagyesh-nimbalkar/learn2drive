"use client";

import { FcGoogle } from "react-icons/fc";
import { FaDiscord } from "react-icons/fa";
import { Button } from "../ui/button";
import {signIn} from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useTransition } from "react";



const Social = () => {
  const [isPending,startTransition] = useTransition();
  return (
    <div className='w-full flex flex-col items-center gap-y-4'>
      <Button
       size="lg"
       variant="outline"
       className="w-full flex gap-4 items-center"
       title="Google"
       disabled={isPending}
       onClick={()=>{
        startTransition(()=>{
          signIn("google",{
             callbackUrl:DEFAULT_LOGIN_REDIRECT
          })
        });
       }}
      >
      <FcGoogle fontSize="2.5vh"/>
      <h1>Continue With Google</h1>
      </Button>
      <Button
       size="lg"
       variant="outline"
       className="w-full flex gap-4 items-center "
       title="Discord"
       disabled={isPending}
       onClick={()=>{
        startTransition(()=>{
          signIn("discord",{
             callbackUrl:DEFAULT_LOGIN_REDIRECT
          })
        });
     }}
      >
          <FaDiscord className='text-blue-500' fontSize="2.5vh"/>
          <h1>Continue With Discord</h1>
      </Button>
    </div>
  )
}

export default Social