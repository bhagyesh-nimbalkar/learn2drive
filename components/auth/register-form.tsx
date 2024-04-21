"use client";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ConfirmationResult, RecaptchaVerifier,UserCredential,signInWithPhoneNumber} from "firebase/auth";
import {useEffect, useState, useTransition} from "react";
import { auth } from "@/firbase.config";
import PhoneInput from 'react-phone-input-2'
import { Button } from "@/components/ui/button";
import 'react-phone-input-2/lib/style.css'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Input } from "../ui/input";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { register } from "@/actions/register";
import {BeatLoader} from 'react-spinners'
import { saveUser } from "@/actions/otp";
import Link from "next/link";

interface User{
   phone:string,
   name:string,
   password:string
   email:string,
}
const RegisterForm = () => {
  const [fn,setFn] = useState<ConfirmationResult>();
  const FormSchema = z.object({
    pin: z.string().min(6, {
      message: "Your one-time password must be 6 characters.",
    }),
  })
  const [Error,setError]  = useState<string | undefined>("");
  const [Success,setSuccess] = useState<string | undefined>("");
  const [open,setOpen] = useState(false);
  const [user,setUser] = useState<User>();
  const [isPending,startTransition] = useTransition();
  const form = useForm<z.infer<typeof RegisterSchema>>({
     resolver:zodResolver(RegisterSchema),
     defaultValues:{
       name:"",
       phone:"",
       password:"",
       email:"",
     }
  });
  const form2 = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  })
  const verifyOtp = async (otp:string)=>{
      try {
        const data =  await fn?.confirm(otp);
        if(!data) return {error:"Something went wrong"};
        if(data.user) return {success:"User Verified"};
        else return {error:"Something went wrong!"};
      } catch (error) {
        return {error:"Something went wrong!"}
      }
    }
  useEffect(()=>{
  if(fn){
    setOpen(true);
  }
  else setOpen(false);
  },[fn])
  useEffect(()=>{
    const SendOtp = async ()=>{
      console.log("Inside SendOTP");
      try{
      const  recaptcha = new RecaptchaVerifier(auth,'recaptcha',{});
      const res = await signInWithPhoneNumber(auth,"+"+user?.phone,recaptcha);
      setFn(res);
      }catch(error){
        console.log(error);
      }
    }
    if(Success && Success.length>0){
      SendOtp();
    }
    },[Success,user?.phone]);
  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(()=>{
      verifyOtp(data.pin).then((data)=>{
         if(data.error){
          setOpen(false);
          setError("Something went Wrong");
         }
         else{
         startTransition(
          ()=>{
          saveUser(user).then((data)=>{
              setError(data.error)
              setSuccess(data.success)
              setOpen(false)
          })
         })
         }
      })
    })
  }
  const handleSubmit = (values:z.infer<typeof RegisterSchema>)=>{
    setError("");
    setSuccess("");
    setUser({...values});
    startTransition(()=>{
      register(values).then((data)=>{
        setError(data?.error)
        setSuccess(data?.sucess)
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
                 name="name"
                 render={({field})=>(
                   <FormItem>
                     <FormLabel>
                          Name
                     </FormLabel>
                     <FormControl>
                          <Input 
                            {...field}
                            placeholder="John Doe"
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
                 name="email"
                 render={({field})=>(
                   <FormItem>
                     <FormLabel>
                          Email
                     </FormLabel>
                     <FormControl>
                          <Input 
                            {...field}
                            placeholder="john.doe@gmail.com"
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
            <FormError message={Error}/>
            <FormSuccess message={Success}/>
            <Button className='w-full' type="submit" disabled={isPending}>
                {isPending?<BeatLoader color="gray" className='w-30'/>:"Sign up"} 
            </Button>
            <div id="recaptcha"></div>
        <Button 
          className="font-normal w-full cusror-pointer"
          size="sm"
          asChild
          variant="link"
          >
              <Link href={'/auth/login'}>
                  Already have an account?
              </Link>
          </Button>
           </form>
        </Form>
        <Dialog defaultOpen={true}  open={open} onOpenChange={()=>{
              setOpen(false);
              setFn(undefined);
              }}>
        <DialogContent className="sm:max-w-[425px]" forceMount={true}>
          <DialogHeader>
            <DialogTitle>OTP VERIFICATION</DialogTitle>
            <DialogDescription>
              We will send you a <span className='font-semibold'>One Time Password</span> on your phone number
            </DialogDescription>
          </DialogHeader>
         {fn && <Form {...form2}>
      <form onSubmit={form2.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form2.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to your phone.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='w-full' type="submit">
          {isPending?<BeatLoader/>:"Verify Otp"}
          </Button>
      </form>
    </Form>}
        </DialogContent>
      </Dialog>
      </>
  )
}

export default RegisterForm;