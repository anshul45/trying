import { Box, Button, Center, Text, Title } from '@mantine/core'
import React from 'react'
import {useRouter} from "next/navigation"

const EmptyPipeline = () => {
  const router = useRouter()
  return (
    <Box mt={25}>
    <Center>
        <Title size='md'>Create a Pipeline</Title>
    </Center>
    <Center mt={12}>
    <Text className='text-[13px] font-medium'>Pipelines allow you to create powerful LLM workflows using a variety of tools.</Text>
    </Center>
    <Center>
        <Box className='border-[1px] rounded-md' mt={22} w={270}>
            <Center mt={20}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-[14px] text-[#6366F1] w-16 h-16"  xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M14 9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9h-7z"></path></svg></Center>
            <Center mt={20}><Button size='compact-xs'  className='font-thin px-3' onClick={()=> router.push("/pipeline/new")}>Create New Pipeline</Button></Center>
            <Center my={20}><Button variant='subtle' size='compact-xs' className='font-thin' >Learn More</Button></Center>
        </Box>
    </Center>
    </Box>
  )
}

export default EmptyPipeline