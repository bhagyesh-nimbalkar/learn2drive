"use client";
import { Card,CardContent,CardFooter,CardHeader} from "../ui/card";
import BackButton from "./back-button";
import { Header } from "./header";
import Social from "./social";
interface CardwrapperProps {
  children:React.ReactNode,
  headerLabel:string,
  backButtonLabel:string,
  backButtonHref:string,
  isSocial?:boolean,
  headerTitle:string
};

const Cardwrapper = ({children,headerLabel,backButtonHref,backButtonLabel,isSocial,headerTitle}:CardwrapperProps) => {
  return (
    <Card className='min-w-[400px] w-1/3 shadow-2xl'>
       <CardHeader>
            <Header label={headerLabel} title={headerTitle}/>
       </CardHeader>
       <CardContent>
          {children}
       </CardContent>
  {isSocial &&
    <div className='h-0.5 relative bg-stone-200 mb-5'>
       <span className='absolute left-[45%] -translate-y-5 bg-white p-3 text-slate-600 text-sm'>OR</span>
   </div> && (
         <CardFooter>
             <Social/>
         </CardFooter>
       )}
       <CardFooter>
         <BackButton
           label={backButtonLabel}
           href={backButtonHref}
         />
       </CardFooter>
    </Card>
  )
}

export default Cardwrapper;