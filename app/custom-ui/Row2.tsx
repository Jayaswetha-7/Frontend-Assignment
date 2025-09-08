'use client'

import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose
  } from "../../components/ui/sheet";
import { PlusIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Checkbox } from "../../components/ui/checkbox"
import Image from "next/image";
import MyImage from "../custom-ui/image/upchart.png";

  const Row2 = ({ box4, box5, box6 }: any) => {
    return (
      <div className="flex flex-col gap-4 mt-5 w-full">
          <p className='font-semibold text-black'>CWPP Dashboard</p>
         <div className="flex gap-4 w-full">
            <div className="bg-white rounded-lg w-1/3 p-4 flex flex-col shadow">
                 <p className="font-semibold mb-2">{box4.title}</p>
                   <div className="flex flex-col justify-center items-center">
                   <Image
                     src={MyImage}       
                     alt="My Image"
                     width={100}        
                     height={100}       
                     className="rounded-md w-45 h-40"
                 />
                 <p>{box4.description}</p>
                   </div>
            </div>
      <div className="bg-white rounded-lg w-1/3 p-4 flex flex-col shadow">
          <p className="font-semibold mb-2">{box5.title}</p>
             <div className="flex flex-col justify-center items-center">
                  <Image
                     src={MyImage}       
                     alt="My Image"
                     width={100}        
                     height={100}       
                     className="rounded-md w-45 h-40"
                 />
                <p>{box4.description}</p>
             </div>
         </div>

      {/* Widget Box */}
      <div className="bg-white rounded-lg w-1/3 p-4 flex flex-col shadow items-center justify-center">
        <Sheet>
          <SheetTrigger className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100">
            <PlusIcon className="w-4 h-4" />
            Add Widget
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle> 
                  {box6.title}
              </SheetTitle>
              <SheetDescription className="p-3">
                   {box6.description}
                   <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">CSPM</TabsTrigger>
    <TabsTrigger value="password">CWPP</TabsTrigger>
    <TabsTrigger value="password">Image</TabsTrigger>
    <TabsTrigger value="password">Ticket</TabsTrigger>
  </TabsList>
  <TabsContent value="account" className=" p-3 border border-gray-300 flex gap-3"> <Checkbox id="terms-2" defaultChecked /> Widget 1</TabsContent>
  <TabsContent value="account" className=" p-3 border border-gray-300 flex gap-3"> <Checkbox id="terms-2" defaultChecked /> Widget 1</TabsContent>
  <TabsContent value="password">cwpp</TabsContent>
</Tabs>
              </SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <div className="ml-auto flex gap-3">
                <SheetClose asChild>
                <button className="px-6 py-2 border border-gray-600 rounded-md bg-white text-blue-900 hover:bg-gray-100">
                  Cancel
                </button>
               </SheetClose>
                <SheetClose asChild>
                   <button className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-900">
                       Confirm
                   </button>
                </SheetClose>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      </div>
        </div>
    )
}

export default Row2
