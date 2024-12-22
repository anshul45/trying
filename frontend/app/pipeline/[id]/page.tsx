"use client"
import Flow from '@/app/components/ReactFlow/Flow'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import Header from '@/app/components/Header'
import React from 'react'
import { Box } from '@mantine/core'
import RunPipeline from '@/app/components/pipeline/runPipeline/RunPipeline'

const page = () => {
  return (
    <Box m={10}   className='border-[1px] rounded-md'>
    <Header/>
    <PanelGroup direction='horizontal' className=''>
    <Panel defaultSizePercentage={70}>
    <Flow/>
    </Panel>
    <PanelResizeHandle style={{width:"5px"}} />
    <Panel defaultSizePercentage={30}>
      <RunPipeline/>
      </Panel>

    </PanelGroup>
    </Box>
  )
}

export default page