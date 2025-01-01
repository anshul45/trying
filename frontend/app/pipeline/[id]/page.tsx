"use client";
import Flow from '@/app/components/ReactFlow/Flow';
import Header from '@/app/components/Header';
import React, { useEffect, useState } from 'react';
import { Box } from '@mantine/core';
import { IoIosPlay } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import {toggleOutputNode, togglePipeline } from "@/lib/redux/slice/toggleSlice";
import { RootState } from '@/lib/redux/store';

const Page = () => {
  const openPipeline = useSelector((store:RootState) => store.toggle.showPipeline)
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
        dispatch(togglePipeline())
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
