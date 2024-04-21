import { Header } from "./header";
import BackButton from "./back-button";
import {
    Card,
    CardFooter,
    CardHeader
} from "@/components/ui/card";


const ErrorCard = () => {
  return (
      <Card className='w-[400px] shadow-md'>
          <CardHeader>
            <Header label="Oops! something went wrong!" title=""/>
          </CardHeader>
          <CardFooter>
             <BackButton 
             label="Back to Login"
             href="/auth/login"
             />
          </CardFooter>
      </Card>
  )
}

export default ErrorCard;