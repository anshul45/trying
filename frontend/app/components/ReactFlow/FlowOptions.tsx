"use client"
import { Box, Flex, Input, Text } from '@mantine/core'
import { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import FlowOptionsCard from './FlowOptionsCard';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { MdInput } from 'react-icons/md'
import { MdOutput } from 'react-icons/md'
import { MdOutlineTextSnippet } from "react-icons/md";

const FlowOptions = ({setNodes}:any) => {
  const[searchOpen,setSearchOpen] = useState<boolean>(false);
  const[selectedOption, setSelectedOption] = useState<string>("General")
  const options = ["General","LLMs","Knowledge Base","Integrations","Data Loaders","Multi-Modal","Logic","Chat"]
  const toggleSidebar = useSelector((state:RootState) => state.sidebar.showSidebar); 

  const optionCards=[{icon:<MdInput/>, title:"Input"},{icon:<MdOutput/>,title:"Output"},{icon:<MdOutlineTextSnippet/>,title:"Text"}]
  
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
      <Flex mt={8} gap={10}>
        {optionCards.map(data => 
        <FlowOptionsCard key={data.title} title={data.title} icon={data.icon} setNodes={setNodes}/>
        )}
      </Flex>
    </Box>
  )
}

export default FlowOptions