import React from "react";
import { getAllUsers } from "@/data/user";
import NotFound from "@/components/homepage/not-found";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Navbar from "@/components/interface/navbar";
import UserForm from "@/components/homepage/userForm";



export default async function Users() {
  const users = await getAllUsers();
  if(!users) return <NotFound/>;
  return (
  <div className="w-full h-full flex flex-col">
    <Navbar/>
  <div className='w-full h-full p-10'>
    <Table className='mt-20 border-2'>
      <TableCaption>A list of Users</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Profile</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((ele) => (
          <TableRow key={ele.id}>
            <TableCell className="font-medium">{ele.name}</TableCell>
            <TableCell>{ele.phone}</TableCell>
            <TableCell>{ele.email}</TableCell>
            <TableCell className="flex justify-end items-center text-right">
                <UserForm id={ele.id}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  </div>
  );
}
