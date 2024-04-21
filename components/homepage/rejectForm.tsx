'use client';
import { useTransition } from "react";
import { Button } from "../ui/button";
import { BeatLoader } from "react-spinners";
import { adminReject } from "@/actions/adminAction";

const RejectForm = ({id}:{id:string}) => {
 const [isPending,startTransition] = useTransition();
 const handleSubmit = (id:string)=>{
    console.log(id);
    startTransition(async()=>{
       await adminReject(id);
    });
 }
  return (
    <form action={()=>handleSubmit(id)}>
        <Button className='bg-red-500 text-white font-medium' type='submit'>{isPending?<BeatLoader/>:"Reject"}</Button>
    </form>
  )
}

export default RejectForm;