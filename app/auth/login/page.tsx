'use client'
import Cardwrapper from "@/components/auth/card-wrapper";
import LoginForm from "@/components/auth/login-form";


const Page = () => {
  return (
<div>
  <Cardwrapper 
    headerLabel="Welcome Back"
    isSocial
    backButtonLabel="Don't have an account"
    backButtonHref="/auth/register"
    headerTitle="User Login"
    >
      <LoginForm/>
    </Cardwrapper>
</div>
  )
}

export default Page;