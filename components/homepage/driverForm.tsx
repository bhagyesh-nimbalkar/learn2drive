'use client';
import { useTransition } from "react";
import { Button } from "../ui/button";
import { BeatLoader } from "react-spinners";
import { admindriverDelete} from "@/actions/adminAction";
import { MdDelete } from "react-icons/md";

const DriverForm = ({id}:{id:string}) => {
 const [isPending,startTransition] = useTransition();
 const handleSubmit = (id:string)=>{
    startTransition(async()=>{
       await admindriverDelete(id);
    });
 }
  return (
    <form action={()=>handleSubmit(id)}>
        <Button className='bg-red-500 text-white font-medium' type='submit'>{isPending?<BeatLoader size={5}/>:<MdDelete/>}</Button>
    </form>
  )
}

export default DriverForm;