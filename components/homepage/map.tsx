'use client';
import { useState} from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";
import { Button } from "../ui/button";
import { findDrivers, isAccepted, link, unlink } from "@/actions/driverActions";
import { BeatLoader } from "react-spinners";
import { Status } from "@prisma/client";
import { useRouter } from "next/navigation";

const Map = ({userId}:{userId:string}) => {
  const router = useRouter();
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const [searchLngLat, setSearchLngLat] = useState<google.maps.LatLngLiteral | null>(null);
  const [currentLocation, setCurrentLocation] = useState<google.maps.LatLngLiteral | null>(null);
  const [isPending,setPending] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_KEY!,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading....</div>;

  const center: google.maps.LatLngLiteral = { lat: 13, lng: 15};

  const SearchUsers = async(userId:string)=>{
     setPending(true);
     const mytimeout = setTimeout(async()=>{
        setPending(false);
        clearTimeout(mytimeout);
        await unlink();
     },1000*60);
     let totaltime = 0;
     await findDrivers(userId);
     const myinterval = setInterval(async()=>{
       const res = await isAccepted();
       if(res?.status==='ACCEPT' as Status){
         clearTimeout(mytimeout);
         clearInterval(myinterval);
         await link();
         router.push('/dashboard/session');
       }
       if(totaltime>1000*60) clearInterval(myinterval);
       totaltime += 1000*3;
     },1000*3);
  }
  
  const handleGetLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setSelectedPlace(null);
          setSearchLngLat(null);
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const onMapLoad = (map: google.maps.Map) => {
    const controlDiv = document.createElement("div");
    const controlUI = document.createElement("div");
    controlUI.innerHTML = "Get Location";
    controlUI.style.backgroundColor = "white";
    controlUI.style.color = "black";
    controlUI.style.border = "2px solid #ccc";
    controlUI.style.borderRadius = "3px";
    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    controlUI.style.cursor = "pointer";
    controlUI.style.marginBottom = "22px";
    controlUI.style.textAlign = "center";
    controlUI.style.width = "100%";
    controlUI.style.padding = "8px 0";
    controlUI.addEventListener("click", handleGetLocationClick);
    controlDiv.appendChild(controlUI);

    map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(
      controlDiv
    );
  };

  return (
<div className='flex flex-col gap-20 '>
    <div
      className="rounded-lg"
    >
      <GoogleMap
        zoom={currentLocation || selectedPlace ? 18 : 12}
        center={currentLocation || searchLngLat || center}
        mapContainerClassName="map"
        mapContainerStyle={{ width: "60%", height: "600px", margin: "auto" }}
        onLoad={onMapLoad}
      >
        {selectedPlace && <Marker position={searchLngLat!} />}
        {currentLocation && <Marker position={currentLocation} />}
      </GoogleMap>
    </div>
    {currentLocation && <form action={()=>SearchUsers(userId)}><Button type="submit" className='z-50 bottom-20 absolute text-white'>{isPending?<BeatLoader/>:"Find Nearby Drivers"}</Button></form>}
</div>
  );
};

export default Map;
