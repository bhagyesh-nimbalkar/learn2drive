'use client';
import { useTransition } from "react";
import { Button } from "../ui/button";
import { BeatLoader } from "react-spinners";
import { driverAccept } from "@/actions/driverActions";

const AcceptDriverForm = ({userId,driverId}:{userId:string,driverId:string}) => {
 const [isPending,startTransition] = useTransition();
 const handleSubmit = ()=>{
    startTransition(async()=>{
       await driverAccept(userId,driverId);
    });
 }
  return (
    <form action={()=>handleSubmit()}>
        <Button className='bg-green-500 text-white font-medium' type='submit'>{isPending?<BeatLoader/>:"Accept"}</Button>
    </form>
  )
}

export default AcceptDriverForm;