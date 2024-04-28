
'use client';
import { useEffect, useState } from "react";
import { Card, CardHeader,CardContent} from "../ui/card";
import { Progress } from "@/components/ui/progress"
import { Divider } from "@mui/material";
import { TiTick } from "react-icons/ti";

type Progress = {
    task:string,
    completed:boolean,
}
const SingleCell = ({ele}:{ele:Progress})=>{
     return <div className='flex w-full gap-3 p-1'>
         <div className={`p-1 ${ele.completed?'bg-green-300':'bg-stone-300'} text-white rounded-full flex justify-center items-center`}>
                 <TiTick size="2vh"/>
            </div>
         <h1 className='font-semibold text-lg text-left italic'>{ele.task}</h1>
     </div>
}
const CourseProgress = ({course}:{course:Progress[]}) => {
  let getCount = 0;
  course.forEach((ele)=>{
     if(ele.completed) getCount++;
  });
  const [progress, setProgress] = useState(13);
 
  useEffect(() => {
     setProgress(getCount);
  }, [getCount]);

  return (
    <div className='w-full h-full flex justify-center items-center'>
         <Card>
              <CardHeader className='text-xl font-bold'>Course Progress</CardHeader>
              <CardContent className='flex flex-col gap-10'>
              <div className='w-full justify-start items-center flex gap-3'>
                <Progress value={progress} className="w-[60%]" />
                <h1>{progress}%</h1>
              </div>
                <Divider/>
                <div className='flex flex-col w-full'>
                {course.map((ele,index)=>{
                    return <SingleCell key={index} ele={ele}/>;
                })}
              </div>
              </CardContent>
         </Card>
    </div>
  )
}

export default CourseProgress;