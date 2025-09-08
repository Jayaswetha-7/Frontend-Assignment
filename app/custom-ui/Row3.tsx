"use client";

import React from "react";
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
import { Progress } from "../../components/ui/progress"

const Row3 = ({ riskChart, riskChart2 }: any) => {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col gap-4 mt-5 w-full bg-blue-50 pb-8">
      <p className="font-semibold text-black">Registry Risk Assessment</p>

      <div className="flex gap-4 w-full">
        {/* Chart 1 */}
        <div className="bg-white rounded-lg w-1/3 p-4 flex flex-col shadow pb-[3%]">
          <p className="font-semibold mb-2">{riskChart.title}</p>
          <div className="flex flex-col items-center w-full  mt-4 gap-5">
            <p><span className='font-bold'>1470</span> Total Vulnerabilities</p>
             <Progress
               value={progress}
                className="w-[90%]"
                gradient="linear-gradient(to right, #22c55e, #3b82f6, #eab308, #ef4444)"
               />
             <div className="grid grid-cols-2 gap-2 w-[80%]">
                {riskChart.legends.map((legend: any, i: number) => (
                  <div key={i} className="flex items-center gap-2">
                     <span className="w-4 h-4 rounded-md" style={{ backgroundColor: legend.color }}  ></span>
                     <span>{legend.label}</span>
                   </div>
                  ))}
              </div>
          </div>
        </div>

        {/* Chart 2 */}
        <div className="bg-white rounded-lg w-1/3 p-4 flex flex-col shadow">
          <p className="font-semibold mb-2">{riskChart2.title}</p>
          <div className="flex flex-col items-center w-full  mt-4 gap-5">
            <p><span className='font-bold'>2</span> Total Images</p>
             <Progress
                 value={progress}
                 className="w-[90%]"
                 gradient="linear-gradient(to right, #7f1d1d, #ef4444, #b45309, #facc15, #9ca3af)"
              />
             <div className="grid grid-cols-2 gap-2 w-[80%]">
                {riskChart2.legends.map((legend: any, i: number) => (
                  <div key={i} className="flex items-center gap-2">
                     <span className="w-4 h-4 rounded-md" style={{ backgroundColor: legend.color }}  ></span>
                     <span>{legend.label}</span>
                   </div>
                  ))}
              </div>
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
                <SheetTitle>add</SheetTitle>
                <SheetDescription className="p-3">
                  des
                  <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList>
                      <TabsTrigger value="account">CSPM</TabsTrigger>
                      <TabsTrigger value="cwpp">CWPP</TabsTrigger>
                      <TabsTrigger value="image">Image</TabsTrigger>
                      <TabsTrigger value="ticket">Ticket</TabsTrigger>
                    </TabsList>

                    <TabsContent value="account" className="p-3 border border-gray-300 flex gap-3">
                      <Checkbox id="cspm-1" defaultChecked /> Widget 1
                    </TabsContent>

                    <TabsContent value="cwpp" className="p-3 border border-gray-300 flex gap-3">
                      <Checkbox id="cwpp-1" /> CWPP Widget
                    </TabsContent>

                    <TabsContent value="image">
                      Image Widgets
                    </TabsContent>

                    <TabsContent value="ticket">
                      Ticket Widgets
                    </TabsContent>
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

export default Row3
