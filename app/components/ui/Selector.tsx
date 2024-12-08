"use client"
;
import { Box, Flex, Text } from "@mantine/core";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

interface SelectorProps {
    title:string
}

const Selector:React.FC<SelectorProps> = ({title}) => {
  const [open,setOpen] = useState<boolean>(false)
 
  const data =
    title === "Platform"
      ? ['Pipeline', 'Knowledge', 'Agents', 'Automation', 'Marketplace', 'Chat', 'Evaluations', 'Forms']
      : title === "Solutions"
      ? ['Assistant', 'Automations', 'ChatBot']
      : title === "Resources"
      ? ['Tutorials', 'Docs', 'Blog', 'Discord']
      : [];

  return (
    <Box className="relative"  onMouseEnter={()=> setOpen(true)} onMouseLeave={()=> setOpen(false)}>
   <Flex align="center" pb={5}  gap={10} className={`${open ?'text-blue-400':""}`}>
    <Box>{title}</Box>
    {open ?<FaAngleUp/>: <FaAngleDown/> }
   </Flex>
    {open &&    
        <Flex direction="column" p={10}  bg="yellow"  wrap="wrap" w={data.length < 5 ? 180 : 340}   h={data.length < 4 ? 137 : 176} className={`absolute rounded-xl ${data.length > 5 ? "-left-[130px]":"-left-[40px]"}`}>
            {data.map(data => 
            <Text className="rounded-md hover:bg-gray-400" px={10} py={7} w={160} key={data}>{data}</Text>
            )}
        </Flex>

        }
        </Box>
  )
}

export default Selector