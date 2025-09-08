'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
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
import { Checkbox } from "../../components/ui/checkbox"
import { RefreshCw } from "lucide-react"
import { MoreVertical } from "lucide-react"
import { Clock, ChevronDown } from "lucide-react";

export default function Dashboardayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
        <div className="flex flex-col p-4 h-[100%] w-[100%] bg-blue-50">
            <div className="flex justify-between ">
              <p className="text-[1.1rem] font-bold">CNAPP Dashboard</p>
                 <div className="flex space-x-3">
                 <Sheet>
          <SheetTrigger className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100">
            
            Add Widget
            <PlusIcon className="w-4 h-4" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle> 
                  Add Widget
              </SheetTitle>
              <SheetDescription className="p-3">
                     Personalise your dashboard by adding the following widget
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

        <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 flex items-center justify-center">
          <RefreshCw className="w-4 h-4 text-gray-800" />
        </button>

        <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 flex items-center justify-center" >
          <MoreVertical className="w-4 h-4 text-gray-600" />
        </button>

        <button
     
      className="flex items-center gap-1 px-3 py-1 rounded-md border border-blue-900 hover:bg-gray-100 text-sm"
    >
      <Clock className="w-5 h-5 text-blue-900" />
      <span className="text-blue-900 text-[1rem]">Last 2 days</span>
      <ChevronDown className="w-4 h-4 text-blue-900" />
    </button>
                 </div>
            </div>
        {children}
        </div>
      
    </html>
  );
}
