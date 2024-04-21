'use client';
import { useTransition } from "react";
import { Button } from "../ui/button";
import { BeatLoader } from "react-spinners";
import { adminAccept } from "@/actions/adminAction";

const AcceptForm = ({id}:{id:string}) => {
 const [isPending,startTransition] = useTransition();
 const handleSubmit = (id:string)=>{
    console.log(id);
    startTransition(async()=>{
       await adminAccept(id);
    });
 }
  return (
    <form action={()=>handleSubmit(id)}>
        <Button className='bg-green-500 text-white font-medium' type='submit'>{isPending?<BeatLoader/>:"Accept"}</Button>
    </form>
  )
}

export default AcceptForm;