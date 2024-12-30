"use client";

import Flow from '@/app/components/ReactFlow/Flow';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import Header from '@/app/components/Header';
import React, { useEffect, useState } from 'react';
import { Box } from '@mantine/core';
import RunPipeline from '@/app/components/pipeline/runPipeline/RunPipeline';
import { IoIosPlay } from "react-icons/io";
import { useDispatch } from 'react-redux';
import {toggleOutputNode } from "@/lib/redux/slice/toggleSlice";

const Page = () => {
  const [openPipeline, setOpenPipeline] = useState<boolean>(false);
  const dispatch = useDispatch()

  useEffect(() => {
    openPipeline
    ? dispatch(toggleOutputNode(true))
    : dispatch(toggleOutputNode(false)) 
  },[openPipeline])

  const buttons = [
    {
      title: <IoIosPlay />,
      action: () => {
        // console.log("Toggling openPipeline:", !openPipeline);
        setOpenPipeline(!openPipeline);
      },
      type: "node",
    },
  ];

  return (
    <Box m={10} className="border-[1px] rounded-md ">
            <Header title="Pipelines" buttons={buttons} />
          <PanelGroup direction="horizontal">
            <Panel defaultSizePercentage={70} minSizePercentage={-10}>
      <Flow />
            </Panel>
      {openPipeline && (
        <>
            <PanelResizeHandle   style={{ 
              width: "3px", 
              backgroundColor: "white", 
              borderLeft: "2px solid #6B7280" 
            }}  />
            <Panel defaultSizePercentage={30} minSizePercentage={30}>
              <Box>
              <RunPipeline setOpenPipeline={setOpenPipeline} />
              </Box>
            </Panel>
            </>
          )}
          </PanelGroup>
      
    </Box>
  );
};

export default Page;
