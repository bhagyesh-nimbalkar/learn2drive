"use client";
import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps{
    label:string,
    href:string,
}
const BackButton = ({label,href}:BackButtonProps) => {
  return (
    <Button 
    className="font-normal w-full cusror-pointer"
    size="sm"
    asChild
    variant="link"
    >
         <Link href={href}>
            {label}
        </Link>
    </Button>
  )
}

export default BackButton