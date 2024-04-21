"use client";

import { useForm } from "react-hook-form";
import * as z from 'zod';
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useSearchParams } from "next/navigation";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/actions/login";
import { BeatLoader } from "react-spinners";

const LoginForm = () => {
  const query = useSearchParams();
  const urlError = query.get('error') === 'OAuthAccountNotLinked' ?
   'Email is already in use with different account' : '';
  const [Error,setError]  = useState<string | undefined>("");
  const [Success,setSuccess] = useState<string | undefined>("");
  const [isPending,startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
     resolver:zodResolver(LoginSchema),
     defaultValues:{
       phone:"",
       password:"",
     }
  })
  const handleSubmit = (values:z.infer<typeof LoginSchema>)=>{
    setError("");
    setSuccess("");
    startTransition(()=>{
      login(values).then((data)=>{
        setError(data?.error);
        //setSuccess(data?.success);
      })
    })
  }
  return (
        <Form {...form}>
           <form 
           onSubmit={form.handleSubmit(handleSubmit)}
           className='space-y-6'
           >
            <div className='space-y-4'>
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
                 name="password"
                 render={({field})=>(
                   <FormItem>
                     <FormLabel>
                          Password
                     </FormLabel>
                     <FormControl>
                          <Input 
                            {...field}
                            placeholder="******"
                            type="password"
                          />
                     </FormControl>
                     <FormMessage/>
                   </FormItem>
              )}
               />
            </div>
            <FormError message={Error || urlError}/>
            <FormSuccess message={Success}/>
            <Button className='w-full' type="submit" disabled={isPending}>
            {isPending?<BeatLoader color="gray" className='w-30'/>:"Sign in"} 
            </Button>
           </form>
        </Form>
  )
}

export default LoginForm;