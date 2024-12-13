import Flow from '@/app/components/ReactFlow/Flow'
import Header from '@/app/components/Header'
import React from 'react'
import { Box } from '@mantine/core'

const page = () => {
  return (
    <Box m={10}   className='border-[1px] rounded-md'>
    <Header/>
    <Flow/>
    </Box>
  )
}

export default page