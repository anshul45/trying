"use client"
import { Box, Flex, Input, Text } from '@mantine/core'
import { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import FlowOptionsCard from './FlowOptionsCard';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';

const FlowOptions = () => {
  const[searchOpen,setSearchOpen] = useState<boolean>(false);
  const[selectedOption, setSelectedOption] = useState<string>("General")
  const options = ["General","LLMs","Knowledge Base","Integrations","Data Loaders","Multi-Modal","Logic","Chat"]
  const toggleSidebar = useSelector((state:RootState) => state.sidebar.showSidebar); 
  
  return (
    <Box h={130} w={toggleSidebar?'79.18%':'98.4%'}  bg='white' px={40}  pb={22} pt={5}  className='rounded-b-md border-b-[1px] shadow-md absolute z-50'>
      <Flex gap={10} align='center'>
        {searchOpen ? 
         <IoMdClose  className='cursor-pointer' onClick={()=>setSearchOpen(!searchOpen)}/> 
        :<IoMdSearch   className='cursor-pointer pb-1' size={23} onClick={()=>setSearchOpen(!searchOpen)}/> 
        }
      {searchOpen ?
       <Input w={350} size='compact-sm'/>  :
      options?.map(data =>
      <Text px={10} pb={4} style={{borderColor:`${ selectedOption === data ? "#6366F1" : "white"}`,cursor:"pointer", borderBottom:"2px solid"}} c={`${selectedOption === data ? '#9294F5':""}`} size='sm' key={data} onClick={() => setSelectedOption(data)}>{data}</Text>
      ) 
    }
      </Flex>
      <Flex mt={8}>
        <FlowOptionsCard/>
      </Flex>
    </Box>
  )
}

export default FlowOptions