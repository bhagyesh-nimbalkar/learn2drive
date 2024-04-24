import "@maptiler/sdk/dist/maptiler-sdk.css";
import MapComponent from "@/components/homepage/map";
import Navbar from "@/components/interface/navbar";
import { auth } from "@/auth";
import NotFound from "@/components/homepage/not-found";

export default async  function MapPage() {
    const session = await auth();
    if(!session) return <NotFound/>;
    return (<div className='w-full h-full flex flex-col'>
        <Navbar/>
    <div className='p-20 w-full h-[500px]'>
        <MapComponent userId={session?.user.id.toString()}/>
    </div>
    </div>)
}
