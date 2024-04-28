"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { courseFormSchema } from "@/schemas"
import { useState, useTransition } from "react"
import { courseformupdate } from "@/actions/driverActions"
import { BeatLoader } from "react-spinners"


interface Course{
   task:string
   completed:boolean
}
export function CourseForm({items,userId,driverId}:{items:Course[],userId:string,driverId:string}) {
  const [isPending,startTransition] = useTransition();
  const [courses,setCourses] = useState<Course[]>(items);
  const form = useForm<z.infer<typeof courseFormSchema>>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: {
      items: [],
    },
  })

  function onSubmit(data: z.infer<typeof courseFormSchema>) {
      startTransition(async ()=>{
         await courseformupdate(data,userId,driverId);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Course Progress</FormLabel>
              </div>
              {courses.map((item,index) => (
                <FormField
                  key={index}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={index}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <input type="checkbox"
                            checked={field.value?.includes({task:item.task,completed:true})}
                            onChange={() => {
                              console.log("Inside on CHange");
                              const updatedCourses = courses.map((course,ind)=> {
                                if (ind===index) {
                                   return { ...course, completed: !course.completed };
                                } else {
                                   return course;
                                }
                             });
                             setCourses(updatedCourses);
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.task}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{isPending?<BeatLoader/>:"Update Changes"}</Button>
      </form>
    </Form>
  )
}
