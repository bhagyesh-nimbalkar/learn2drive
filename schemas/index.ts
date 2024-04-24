import * as z from 'zod'

export const LoginSchema = z.object({
    phone: z.string(),
    password:z.string().min(1,{
        message:"Password is Required"
    })
})

export const RegisterSchema = z.object({
    name:z.string().min(1,{
        message:"Name is Required"
    }),
    phone: z.string(),
    password:z.string().min(6,{
        message:"Minimum 6 characters required"
    }),
    email:z.string().email({
        message:"Invalid Email",
    }),
})

export const ApplyFormSchema = z.object({
    firstname:z.string().min(1,{
        message:"first name is Required"
    }),
    lastname:z.string().min(1,{
        message:"last name is Required"
    }),
    phone:z.string(),
    address:z.string(),
    dob:z.date(),
    aadhar:z.string().regex(new RegExp('^[0-9]{12}$'),{
        message:"Invalid Aadhar Number."
    }),
    pan:z.string().regex(new RegExp('^[A-Z]{5}[0-9]{4}[A-Z]{1}$'),{
        message:"Invalid PAN Number."
    }),
})
export const SessionFormSchema = z.object({
    name:z.string().min(1,{
        message:"last name is Required"
    }),
    email:z.string().email(),
    phone:z.string(),
    address:z.string(),
    dob:z.date(),
    pan:z.string().regex(new RegExp('^[A-Z]{5}[0-9]{4}[A-Z]{1}$'),{
        message:"Invalid PAN Number."
    })
});
export const courseFormSchema = z.object({
    items: z.array(z.object({
      task:z.string(),
      completed:z.boolean(),
    })).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
});
  