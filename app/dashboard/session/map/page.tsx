import "@maptiler/sdk/dist/maptiler-sdk.css";
import MapComponent from "@/components/homepage/map";
import Navbar from "@/components/interface/navbar";

export default function MapPage() {
    return (<div className='w-full h-full flex flex-col'>
        <Navbar/>
    <div className='p-20 w-full h-[500px]'>
        <MapComponent/>
    </div>
    </div>)
}
