"use client";

import React from "react";
import Row1 from '../custom-ui/Row1'
import Row2 from '../custom-ui/Row2'
import Row3 from '../custom-ui/Row3'
import dashboardData from "../custom-ui/data/datas.json";


const Dashboard = () => {
  
  return (
    <div className='h-screen w-full' >
      
        <Row1 {...dashboardData} />
        <Row2 {...dashboardData} />
        <Row3 {...dashboardData} />
    </div>
  );
};

export default Dashboard;
