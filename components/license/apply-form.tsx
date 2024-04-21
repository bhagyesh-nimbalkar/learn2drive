"use client";
import {useState, useTransition} from 'react';
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { ApplyFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from 'react-phone-input-2'
import { Button } from "@/components/ui/button";
import 'react-phone-input-2/lib/style.css'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from "../ui/input";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import {BeatLoader} from 'react-spinners'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { Calendar } from '../ui/calendar';
import { cn } from '@/lib/utils';
import { licenseform } from '@/actions/applyform';
import { redirect } from 'next/navigation';



const ApplyForm = () => {
  const [Error,setError]  = useState<string | undefined>("");
  const [Success,setSuccess] = useState<string | undefined>("");
  const [isPending,startTransition] = useTransition();
  const form = useForm<z.infer<typeof ApplyFormSchema>>({
     resolver:zodResolver(ApplyFormSchema),
     defaultValues:{
       firstname:"",
       lastname:"",
       phone:"",
       address:"",
       dob:new Date(),
       aadhar:"",
       pan:"",
     }
  });
  const handleSubmit = (values:z.infer<typeof ApplyFormSchema>)=>{
    setError("");
    setSuccess("");
    startTransition(()=>{
       licenseform(values).then(async(data)=>{
          setError(data?.error);
          setSuccess(data?.success);
       })
    })
  }
  return (
    <>
        <Form {...form} >
           <form 
           onSubmit={form.handleSubmit(handleSubmit)}
           className='space-y-6'
           >
            <div className='space-y-4'>
            <FormField
                 control={form.control}
                 disabled={isPending}
                 name="firstname"
                 render={({field})=>(
                   <FormItem>
                     <FormLabel>
                          First name
                     </FormLabel>
                     <FormControl>
                          <Input 
                            {...field}
                            placeholder="John"
                            type="text"
                          />
                     </FormControl>
                     <FormMessage/>
                   </FormItem>
              )}
               />
               <FormField
                 control={form.control}
                 disabled={isPending}
                 name="lastname"
                 render={({field})=>(
                   <FormItem>
                     <FormLabel>
                          Last name
                     </FormLabel>
                     <FormControl>
                          <Input 
                            {...field}
                            placeholder="Doe"
                            type="text"
                          />
                     </FormControl>
                     <FormMessage/>
                   </FormItem>
              )}
               />
               <FormField
                 control={form.control}
                 disabled={isPending}
                 name="phone"
                 render={({field})=>(
                   <FormItem>
                     <FormLabel>
                          Phone
                     </FormLabel>
                     <FormControl>
                          <PhoneInput 
                            inputStyle={{
                               width:"100%"
                            }}
                            {...field}
                            country={'in'}
                          />
                     </FormControl>
                     <FormMessage/>
                   </FormItem>
              )}
               />
               <FormField
                 control={form.control}
                 disabled={isPending}
                 name="address"
                 render={({field})=>(
                   <FormItem>
                     <FormLabel>
                          Address
                     </FormLabel>
                     <FormControl>
                          <Input 
                            {...field}
                            placeholder="1546 Marion Drive,Tampa,Florida"
                            type="text"
                          />
                     </FormControl>
                     <FormMessage/>
                   </FormItem>
              )}
               />
               <FormField
                 control={form.control}
                 disabled={isPending}
                 name="dob"
                 render={({field})=>(
                   <FormItem className='flex flex-col'>
                     <FormLabel>
                          Date of Birth
                     </FormLabel>
                      <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[240px] pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              captionLayout='dropdown'
                              fromYear={1970}
                              toYear = {2024}
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                     <FormMessage/>
                   </FormItem>
              )}
               />
               <FormField
                 control={form.control}
                 disabled={isPending}
                 name="aadhar"
                 render={({field})=>(
                   <FormItem>
                     <FormLabel>
                          Aadhaar Number
                     </FormLabel>
                     <FormControl>
                          <Input 
                            {...field}
                            placeholder="324235343536"
                            type="text"
                          />
                     </FormControl>
                     <FormMessage/>
                   </FormItem>
              )}
               />
               <FormField
                 control={form.control}
                 disabled={isPending}
                 name="pan"
                 render={({field})=>(
                   <FormItem>
                     <FormLabel>
                          PAN Number
                     </FormLabel>
                     <FormControl>
                          <Input 
                            {...field}
                            placeholder="GIESX2434T"
                            type="text"
                          />
                     </FormControl>
                     <FormMessage/>
                   </FormItem>
              )}
               />
            </div>
            <FormError message={Error}/>
            <FormSuccess message={Success}/>
            <Button className='w-full' type="submit" disabled={isPending}>
                {isPending?<BeatLoader color="gray" className='w-30'/>:"Submit"} 
            </Button>
       </form>
        </Form>
      </>
  )
}

export default ApplyForm;