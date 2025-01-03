"use client";
import Flow from '@/app/components/ReactFlow/Flow';
import Header from '@/app/components/Header';
import React, { useEffect, useState } from 'react';
import { Box } from '@mantine/core';
import { IoIosPlay } from "react-icons/io";
import toggleStore from '@/lib/zustand/toggleStore.ts/toggleStore';

const Page = () => {

  const {updateShowPipeline} = toggleStore()

  useEffect(() => {
    
  },[])

  const buttons = [
    {
      title: <IoIosPlay />,
      action: () => {
        updateShowPipeline()
      },
      type: "node",
    },
  ];

  return (
    <Box m={10} className="border-[1px] rounded-md ">
            <Header title="Pipelines" buttons={buttons} />
      <Flow />
    </Box>
  );
};

export default Page;
