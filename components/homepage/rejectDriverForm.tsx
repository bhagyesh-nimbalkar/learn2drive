'use client';
import { useTransition } from "react";
import { Button } from "../ui/button";
import { BeatLoader } from "react-spinners";
import { driverReject } from "@/actions/driverActions";

const RejectDriverForm = ({driverId}:{driverId:string}) => {
 const [isPending,startTransition] = useTransition();
 const handleSubmit = ()=>{
    startTransition(async()=>{
       await driverReject(driverId);
    });
 }
  return (
    <form action={()=>handleSubmit()}>
        <Button className='bg-red-500 text-white font-medium' type='submit'>{isPending?<BeatLoader/>:"Reject"}</Button>
    </form>
  )
}

export default RejectDriverForm;