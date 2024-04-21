import Image from "next/image";

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
 
    <div className='w-full h-full relative flex lg:justify-between justify-center items-center bg-blend-overlay'>
     <div className='w-[70%] h-full bg-gradient-to-br from-green-300 via-orage-300 to-purple-400 flex justify-center items-center hidden lg:flex'>
         <img
           src="/assets/images/Strong-Authentication-Hero-Graphic-Final.png"
           alt="Auth"
           className='w-full  object-cover w-1/2 hidden lg:block'
           />
          
      </div>
    <div className="lg:w-[30%] lg:bg-none flex justify-center bg-gradient-to-bl from-red-400 to-sky-200 w-full h-full items-center">
      {children}
    </div>
    </div>
  )
}

export default AuthLayout;