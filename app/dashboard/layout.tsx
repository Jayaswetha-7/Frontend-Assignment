"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "../../components/ui/sheet";
import { PlusIcon, RefreshCw, MoreVertical, Clock, ChevronDown } from "lucide-react";
import React from "react";
import { Checkbox } from "../../components/ui/checkbox";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col p-4 min-h-screen w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="text-[1.1rem] font-bold">CNAPP Dashboard</p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              <Sheet>
                <SheetTrigger className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100">
                  Add Widget
                  <PlusIcon className="w-4 h-4" />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Add Widget</SheetTitle>
                    <SheetDescription className="p-3">
                      Personalise your dashboard by adding the following widget
                      <Tabs defaultValue="account" className="w-full md:w-[400px]">
                        <TabsList className="flex flex-wrap">
                          <TabsTrigger value="account">CSPM</TabsTrigger>
                          <TabsTrigger value="cwpp">CWPP</TabsTrigger>
                          <TabsTrigger value="image">Image</TabsTrigger>
                          <TabsTrigger value="ticket">Ticket</TabsTrigger>
                        </TabsList>
                        <TabsContent
                          value="account"
                          className="p-3 border border-gray-300 flex gap-3"
                        >
                          <Checkbox id="cspm-1" defaultChecked /> Widget 1
                        </TabsContent>
                        <TabsContent value="cwpp">CWPP</TabsContent>
                        <TabsContent value="image">Image</TabsContent>
                        <TabsContent value="ticket">Ticket</TabsContent>
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

              <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 flex items-center justify-center">
                <MoreVertical className="w-4 h-4 text-gray-600" />
              </button>

              <button className="flex items-center gap-1 px-3 py-1 rounded-md border border-blue-900 hover:bg-gray-100 text-sm">
                <Clock className="w-5 h-5 text-blue-900" />
                <span className="text-blue-900 text-[1rem]">Last 2 days</span>
                <ChevronDown className="w-4 h-4 text-blue-900" />
              </button>
            </div>
          </div>

          <div className="mt-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
