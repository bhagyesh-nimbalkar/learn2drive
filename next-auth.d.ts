import { UserRole } from "@prisma/client";
import NextAuth, {type DefaultSession} from "next-auth";

export type ExtendUser = {
    role: UserRole
    name:string
    image:string 
    id:string
}

declare module 'next-auth'{
    interface Session{
        user:ExtendUser
    }
}