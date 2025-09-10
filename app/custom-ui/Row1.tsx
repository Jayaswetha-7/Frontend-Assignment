"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend as ChartLegend,
  Chart,
  ChartData,
} from "chart.js";
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
import { PlusIcon } from "lucide-react";
import { Checkbox } from "../../components/ui/checkbox";

ChartJS.register(ArcElement, Tooltip, ChartLegend);

interface Legend {
  color: string;
  label: string;
}

interface CenterText {
  top: string;
  bottom: string;
}

interface BoxProps {
  title: string;
  data: ChartData<"doughnut">;
  legends: Legend[];
  centerText: CenterText;
  description?: string;
}

interface Row1Props {
  box1: BoxProps;
  box2: BoxProps;
  box3: BoxProps;
}

// Options (no legend)
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

// Center text plugin
const centerTextPlugin = (textTop: string, textBottom: string) => ({
  id: "centerText",
  beforeDraw: (chart: Chart<"doughnut">) => {
    const { width, height, ctx } = chart;
    ctx.save();

    ctx.font = "bold 18px sans-serif";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(textTop, width / 2, height / 2 - 10);

    ctx.font = "bold 14px sans-serif";
    ctx.fillText(textBottom, width / 2, height / 2 + 10);

    ctx.restore();
  },
});

// Risk chart rotated
const optionsRiskChart = {
  rotation: -0.5 * Math.PI,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Row1: React.FC<Row1Props> = ({ box1, box2, box3 }) => {
  return (
    <div className="flex flex-col gap-4 mt-5 w-full">
      <p className="font-semibold text-black">CSPM Executive Dashboard</p>
      <div className="flex gap-4 w-full">
        {/* Chart 1 */}
        <div className="bg-white rounded-lg w-1/3 p-4 flex flex-col shadow">
          <p className="font-semibold mb-2">{box1.title}</p>
          <div className="flex items-center w-full space-x-8">
            <div className="w-50 h-50">
              <Doughnut
                data={box1.data}
                options={options}
                plugins={[centerTextPlugin(box1.centerText.top, box1.centerText.bottom)]}
              />
            </div>
            <div className="flex flex-col text-sm space-y-2">
              {box1.legends.map((legend: Legend, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className="w-4 h-4 rounded-md"
                    style={{ backgroundColor: legend.color }}
                  ></span>
                  <span>{legend.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chart 2 */}
        <div className="bg-white rounded-lg w-1/3 p-4 flex flex-col shadow">
          <p className="font-semibold mb-2">{box2.title}</p>
          <div className="flex items-center w-full space-x-8">
            <div className="w-50 h-50">
              <Doughnut
                data={box2.data}
                options={optionsRiskChart}
                plugins={[centerTextPlugin(box2.centerText.top, box2.centerText.bottom)]}
              />
            </div>
            <div className="flex flex-col text-sm space-y-2">
              {box2.legends.map((legend: Legend, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className="w-4 h-4 rounded-md"
                    style={{ backgroundColor: legend.color }}
                  ></span>
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
                <SheetTitle>{box3.title}</SheetTitle>
                <SheetDescription className="p-3">
                  {box3.description}
                  <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList>
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
                    <TabsContent
                      value="cwpp"
                      className="p-3 border border-gray-300 flex gap-3"
                    >
                      <Checkbox id="cwpp-1" /> CWPP Widget
                    </TabsContent>
                    <TabsContent value="image">Image Widgets</TabsContent>
                    <TabsContent value="ticket">Ticket Widgets</TabsContent>
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
  );
};

export default Row1;
