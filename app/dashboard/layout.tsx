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
import React, { useState, cloneElement } from "react";
import { Checkbox } from "../../components/ui/checkbox";

export default function DashboardLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  const [widgets, setWidgets] = useState<{ id: number; title: string; description: string }[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addWidget = () => {
    if (!title.trim()) return;
    setWidgets((prev) => [
      ...prev,
      { id: Date.now(), title, description },
    ]);
    setTitle("");
    setDescription("");
  };

  const removeWidget = (id: number) => {
    setWidgets((prev) => prev.filter((w) => w.id !== id));
  };
  
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col p-4 min-h-screen w-full">
          <div className="flex flex-col md:flex-row space-x-10 md:items-center md:justify-between">
            <p className="text-[1.1rem] font-bold">CNAPP Dashboard</p>
            <input
              type="text"
              placeholder="Search widgets..."
              className="md:w-[30%] w-full px-3 py-2 border rounded-md outline-none focus:ring focus:ring-blue-300"
            />

            {/* Action buttons */}
            <div className="flex flex-wrap space-x-5">
              
            <Sheet>
                <SheetTrigger className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100">
                  Add Widget
                  <PlusIcon className="w-4 h-4" />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Add Widget</SheetTitle>
                    <SheetDescription className="p-3 space-y-3">
                      <input
                        type="text"
                        placeholder="Widget Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:ring-blue-300"
                      />
                      <textarea
                        placeholder="Widget Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md outline-none focus:ring focus:ring-blue-300"
                      />
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
                        <button
                          onClick={addWidget}
                          className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-900"
                        >
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
