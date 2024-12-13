import { Box, Flex, Text, Title } from '@mantine/core'
import React from 'react'
import { BiSolidPen } from "react-icons/bi";

const PipelineCard = () => {
  return (
    <Flex w={270} h={160} justify='space-between' direction='column' className='border-2 rounded-md hover:shadow-md'>
<Box>
    <Flex align='center' px={7} py={15} c='#6366F1' bg='#e3f2fd'><BiSolidPen/><Title ml={10} size='sm'>Template</Title></Flex>
    <Text size='sm' p={7}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem doloremque tempore?</Text>
</Box>
<Text p={7} size='sm'>Created by: anshul45</Text>
            </Flex>
  )
}

export default PipelineCard