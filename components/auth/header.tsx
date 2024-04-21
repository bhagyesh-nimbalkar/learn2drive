import Image from "next/image"

interface HeaderProps{
    label:string,
    title:string,
}
export const Header = ({label,title}:HeaderProps)=>{
     return (
        <div className='flex justify-between items-center gap-5'> 
           <Image
              src="/assets/images/1686498283671.jpeg"
              alt="logo"
              width={150}
              height={150}
              className="150px lg:350px"
           />
         <div className="w-full flex flex-col gap-y-4 items-center justify-center">
         <h1 className="text-3xl font-semibold">{title}</h1> 
         <p className='text-muted-foreground text-sm'>{label}</p>
         </div>
        </div>
     )
}