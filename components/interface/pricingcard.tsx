import { TiTick } from "react-icons/ti";
import { Button } from "../ui/button";
import Link from "next/link";

const Pricingcard = ({price,duration,benefits}:{price:string,duration:string,benefits:string[]}) => {
   
  return (
<>
    <div className="w-full">
    <div className="rounded-2xl bg-white px-5 py-10 shadow-lg border-2">
      <p className="text-center text-2xl font-bold text-black">{duration} Package</p>
    
      <div className="mt-5 flex justify-center text-black">
        <div className="text-6xl font-medium">{price}</div>
        <div className="ml-2 flex flex-col">
          <p className="text-lg font-bold">₹</p>
          <p>per {duration}</p>
        </div>
      </div>
    
      <div className="ml-3 mt-8">
        <ul className="grid gap-4">
        {benefits.map((ele,index)=>{
            return  (
            <li key={index} className="flex items-center text-black gap-2">
            <div className='p-1 bg-green-500 text-white rounded-full flex justify-center items-center'>
                 <TiTick size="1vh"/>
            </div>
            {ele.toString()}
          </li>)
        })}
        </ul>
      </div>
      <div className="mt-8">
      <Link href={`/api/checkout/?amount=${price}`}>
        <Button  className="w-full rounded-lg bg-black px-3 py-2 text-base font-medium text-white hover:bg-gray-800">Subscribe</Button>
      </Link>
      </div>
    </div>
    </div>
</>
  )
}

export default Pricingcard;