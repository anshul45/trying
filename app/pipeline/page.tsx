"use client"
import { Box, Modal } from "@mantine/core";
import React, { useState } from "react";
import EmptyPipeline from "../components/pipeline/EmptyPipeline";
import Header from "../components/Header";
import { useRouter } from "next/navigation";
import PipelineMenu from "../components/pipeline/PipelineMenu";

const Pipeline = ({toggleSidebar}:any) => {
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()

  const pipelinesButton = [{title:"Run History",action: () => router.push("/pipeline/history")},{title:"Display",action: () => setShowModal(true)},{title:"New",action: () => router.push("/pipeline/new")}]

  return (<Box bg='#f1f3f4' h='100vh' p={10}>
   <Box bg='white'h='100%' className="rounded-md border-[1px]">
    <Header title='Pipelines' buttons={pipelinesButton} toggleSidebar={toggleSidebar}/>
    <EmptyPipeline/>
   </Box>
   <PipelineMenu showModal={showModal} setShowModal={setShowModal}/>
   </Box>
  );
};

export default Pipeline;
