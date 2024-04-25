
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
     return <div className='flex w-full justify-between p-5 '>
         <TiTick className={`${ele.completed?'bg-green-500':'bg-slate-500'} text-white text-lg p-3 rounded-full`}/>
         <h1 className='font-semibold text-lg italic'>{ele.task}</h1>
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
              <CardHeader>Course Progress</CardHeader>
              <CardContent>
                <Progress value={progress} className="w-[60%]" />
                <Divider/>
                {course.map((ele,index)=>{
                    return <SingleCell key={index} ele={ele}/>;
                })}
              </CardContent>
         </Card>
    </div>
  )
}

export default CourseProgress;