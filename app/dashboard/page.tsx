"use client";
import React, { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import SideBar from "../components/SideBar";

const Dashboard = () => {

  return (<>
    <PanelGroup
    autoSaveId="example"
    direction="horizontal"
    >
      <Panel defaultSizePercentage={19} minSizePercentage={19} maxSizePercentage={30} >
        <SideBar />
      </Panel>
      <PanelResizeHandle  className=" hover:bg-gray-500 w-1"  />
      <Panel defaultSizePercentage={81} >
       
      </Panel>
    </PanelGroup>
    </>
  );
};

export default Dashboard;
