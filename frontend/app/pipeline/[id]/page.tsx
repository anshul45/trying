"use client";

import Flow from '@/app/components/ReactFlow/Flow';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import Header from '@/app/components/Header';
import React, { useState } from 'react';
import { Box } from '@mantine/core';
import RunPipeline from '@/app/components/pipeline/runPipeline/RunPipeline';
import { IoIosPlay } from "react-icons/io";

const Page = () => {
  const [openPipeline, setOpenPipeline] = useState<boolean>(false);

  const buttons = [
    {
      title: <IoIosPlay />,
      action: () => {
        console.log("Toggling openPipeline:", !openPipeline);
        setOpenPipeline(!openPipeline);
      },
      type: "node",
    },
  ];

  return (
    <Box m={10} className="border-[1px] rounded-md relative">
      <Header title="Pipelines" buttons={buttons} />
      <Flow />
      {openPipeline && (
        <Box className="absolute w-full top-[45px] right-0 h-full  shadow-md z-50">
          <PanelGroup direction="horizontal">
            <Panel defaultSizePercentage={70} minSizePercentage={-10}>
             <Box className='-z-[990]'></Box>
            </Panel>
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
          </PanelGroup>
        </Box>
      )}
    </Box>
  );
};

export default Page;
