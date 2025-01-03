"use client"
import { Box } from "@mantine/core";
import React, { useState } from "react";
import EmptyPipeline from "../components/pipeline/EmptyPipeline";
import Header from "../components/Header";
import { useRouter } from "next/navigation";
import PipelineMenu from "../components/pipeline/PipelineMenu";
import { useSession } from "next-auth/react";

const Pipeline = () => {
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()
  const session = useSession()

  const pipelinesButton = [{title:"Run History",action: () => router.push("/pipeline/history")},{title:"Display",action: () => setShowModal(true)},{title:"New",action: () => router.push("/pipeline/new")}]

  return (<Box bg='#f1f3f4' h='100vh' p={10}>
   <Box bg='white'h='100%' className="rounded-md border-[1px]">
    <Header title='Pipelines' buttons={pipelinesButton}/>
    <EmptyPipeline/>
   </Box>
   <PipelineMenu showModal={showModal} setShowModal={setShowModal}/>
   </Box>
  );
};

export default Pipeline;
