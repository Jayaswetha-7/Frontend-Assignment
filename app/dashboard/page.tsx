"use client";

import React,{useState} from "react";
import Row1 from '../custom-ui/Row1'
import Row2 from '../custom-ui/Row2'
import Row3 from '../custom-ui/Row3'
import dashboardData from "../custom-ui/data/datas.json";


const Dashboard = () => {
  const [widgets, setWidgets] = useState<Widget[]>([]);

 
  return (
    <div className='h-screen w-full' >
      
        <Row1 {...dashboardData} widgets={widgets} setWidgets={setWidgets}/>
        <Row2 {...dashboardData} />
        <Row3 {...dashboardData} />
    </div>
  );
};

export default Dashboard;
