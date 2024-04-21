'use client';
import { useTransition } from "react";
import { Button } from "../ui/button";
import { BeatLoader } from "react-spinners";
import { adminAccept, adminrenewAccept } from "@/actions/adminAction";

const AcceptRenewForm = ({id}:{id:string}) => {
 const [isPending,startTransition] = useTransition();
 const handleSubmit = (id:string)=>{
    console.log(id);
    startTransition(async()=>{
       await adminrenewAccept(id);
    });
 }
  return (
    <form action={()=>handleSubmit(id)}>
        <Button className='bg-green-500 text-white font-medium' type='submit'>{isPending?<BeatLoader/>:"Accept"}</Button>
    </form>
  )
}

export default AcceptRenewForm;