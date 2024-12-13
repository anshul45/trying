"use client"
import Header from '@/app/components/Header'
import { Box, Center, Flex, TextInput, Title } from '@mantine/core'
import React from 'react'
import { useRouter } from 'next/navigation'
import FilterComponent from '@/app/components/pipeline/FilterComponent'
import { IoMdSearch } from "react-icons/io";
import { MdAssistant } from "react-icons/md";
import { MdChat } from "react-icons/md";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TbTimeline } from "react-icons/tb";
import { BsFileTextFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { ImGoogleDrive } from "react-icons/im";
import { SiGoogledocs } from "react-icons/si";
import { FaSlack } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import PipelineCard from '@/app/components/pipeline/PipelineCard'


const page = () => {
  const router = useRouter()
  const pipelinesButton = [{title:"Back to Pipelines",action: () => router.push("/pipeline")},{title:"Start Blank",action: () => router.push("/pipeline/1234")}]

  const filterOptions =[{title:"Basic",icon:<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-[14px] text-[#6366F1] w-5 h-5"  xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M14 9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9h-7z"></path></svg>},{title:"Search",icon:<IoMdSearch/>},
    {title:"Assistants",icon:<MdAssistant/>}, {title:"Chatbots",icon:<MdChat/>},{title:"Productivity",icon:<LiaLaptopCodeSolid/>},{title:"Finance / Strategy",icon:<TbTimeline/>}
    ,{title:"Content Creation",icon:<BsFileTextFill/>},{title:"Gmail",icon:<BiLogoGmail/>},{title:"Google Drive",icon:<ImGoogleDrive/>},{title:"Google Docs",icon:<SiGoogledocs/>}
    ,{title:"Slack",icon:<FaSlack/>} ,{title:"Discord",icon:<FaDiscord/>} 
  ]

  return (
    <Box>
      <Header title="Pipelines" buttons={pipelinesButton}/>
      <Box px={15} py={8.5}>
      <Title size={18}>Create Pipeline</Title>
      <Flex>
        <Box flex={0.3}>
          <TextInput size='compact-lg' mt={8} placeholder='Search' styles={{input:{paddingLeft:"5px"}}}/>
          <Box mt={7} h='80vh' className='border-[1px] rounded-md overflow-y-scroll'  p={5}>
            {filterOptions.map(data => (
          <FilterComponent key={data.title} title={data.title} icon={data.icon}/>
            ))}
          </Box>
        </Box>
        <Flex h='86vh' pt={8} flex={1.3} ml={8} wrap='wrap' gap={8} className='overflow-y-scroll'>
            <Box w={270} h={160} className='border-2 rounded-md hover:shadow-md' onClick={()=> router.push("/pipeline/123asd")}>
              <Center mt={35}><IoMdAdd size={32} color="#6366F1"/></Center>
              <Center mt={10}>
                <Title size='md' c='#6366F1'>Create Pipeline from Scratch</Title>
              </Center>
            </Box>
            <PipelineCard/>
            <PipelineCard/>
            <PipelineCard/>
            <PipelineCard/>
            <PipelineCard/>
            <PipelineCard/>
            <PipelineCard/>
            <PipelineCard/>
            <PipelineCard/>
            <PipelineCard/>
            <PipelineCard/>
            <PipelineCard/>
            <PipelineCard/>
            <PipelineCard/>
        </Flex>
      </Flex>
      </Box>
    </Box>
  )
}

export default page