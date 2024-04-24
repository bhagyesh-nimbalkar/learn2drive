import React from "react";
import {getCourse, getUserById} from "@/data/user";
import NotFound from "@/components/homepage/not-found";
import Navbar from "@/components/interface/navbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CourseForm } from "@/components/interface/courseForm";
import { auth } from "@/auth";
import { User } from "@prisma/client";

const DisplayCard = async({label,text}:{label:string,text:string | undefined})=>{
    return (
        <div className='flex gap-5'>
            <h1 className='font-semibold'>{label}:</h1>
            <h1 className={`font-medium ${text==='PENDING'?'text-yellow-500':(text==='ACCEPT'?'text-green-500':(text==='REJECT'?'text-red-500':''))}`}>{text}</h1>
        </div>
    )
  }
export default async function EnrollUser() {
  const session = await auth();
  if(!session) return null;
  const courses = await getCourse(session?.user.id.toString());
    if(!courses) return <NotFound/>;
    const users:User[] = [];
    for(let i=0;i<courses.length;i++)
      {
          const usr = await getUserById(courses[i].userId.toString());
          if(usr) users.push(usr);
      }
    return (
    <div className="w-full h-full flex flex-col">
        <Navbar/>
    <div className='w-full h-full p-10'>
    <Card className='shadow-lg'>
      <CardHeader>
                <h1 className='font-semibold text-xl '>All Enrolled Users</h1> 
      </CardHeader>
      <CardContent>
        {
           users?.map((ele,index)=>{ 
            return (
            <Accordion type="single" key={index} collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>License id: {ele.id}</AccordionTrigger>
              <AccordionContent className='flex flex-col gap-5'>
                    <div className='grid grid-cols-1 w-full gap-2'>
                           <DisplayCard label="Name" text={ele.name?.toString()}/>
                           <DisplayCard label="Phone" text={ele.phone?.toString()}/>
                           <DisplayCard label="Email" text={ele.email?.toString()}/>
                    </div>
                    <div>
                         <CourseForm items={courses[index].progress} userId={courses[index].userId} driverId={courses[index].driverId}/>
                    </div>
              </AccordionContent>
            </AccordionItem>
            </Accordion>)
           })
        }
      </CardContent>
    </Card>
        </div>
    </div>
  );
}
