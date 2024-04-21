import { auth } from "@/auth"
import { Card, CardContent, CardHeader } from "../ui/card"
import { getLicensebyUserId } from "@/data/user";
import React from "react";
import { Status } from "@prisma/client";

const DisplayCard = async({label,text}:{label:string,text:string | undefined})=>{
    return (
        <div className='flex gap-5'>
            <h1 className='font-semibold'>{label}:</h1>
            <h1 className={`font-medium ${text==='PENDING'?'text-yellow-500':(text==='ACCEPT'?'text-green-500':(text==='REJECT'?'text-red-500':''))}`}>{text}</h1>
        </div>
    )
}
const HistoryCard = async() => {
  const session = await auth();
  const License = await getLicensebyUserId(session?.user.id);
  if(!License) return null;
  console.log(License);
  const ArrayEle:{label:string,value:string | undefined | null | Date}[] = [
    {
         label:"Name",
         value:License?.firstname+" "+License?.lastname,
    },
    {
        label:"Phone",
        value:License?.phone
    },
    {
        label:"Address",
        value:License?.address
    },
    {
        label:"Pan Card No",
        value:License?.pan
    },
    {
        label:"Date of Birth",
        value:License?.dob,
    },
    {
        label:"Aadhaar No",
        value:License?.aadhar,
    },
    {
         label:"Status",
         value:License?.status as Status
    },
    {
        label:"Expires",
        value:License?.expires,
    }
]
  return (
      <Card className='shadow-lg'>
         <CardHeader>
             <h1 className='font-semibold text-xl '>Driving License Information</h1> 
         </CardHeader>
         <CardContent className='grid grid-cols-1 md:grid-cols-2 gap-14'>
            {
                ArrayEle.map((ele,index)=>{
                    return <DisplayCard key={index} label={ele.label} text={ele.value?.toString()}/>
                })
            }
         </CardContent>
      </Card>
  )
}

export default HistoryCard;