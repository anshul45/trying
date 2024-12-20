"use client"
import { Box, Flex, Input, Text } from '@mantine/core'
import { useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import FlowOptionsCard from './FlowOptionsCard';
import { MdInput } from 'react-icons/md'
import { MdOutput } from 'react-icons/md'
import { MdOutlineTextSnippet } from "react-icons/md";
import { SiOpenai } from "react-icons/si";

const FlowOptions = ({setNodes}:any) => {
  const[searchOpen,setSearchOpen] = useState<boolean>(false);
  const[selectedOption, setSelectedOption] = useState<string>("General")
  const[cardData, setCardData] = useState([])
  
  const options = ["General","LLMs","Knowledge Base","Integrations","Data Loaders","Multi-Modal","Logic","Chat"]

  const generalCards=[{icon:<MdInput/>, title:"Input"},{icon:<MdOutput/>,title:"Output"},{icon:<MdOutlineTextSnippet/>,title:"Text"}]

  const llmCards=[{icon:<SiOpenai/>,title:"OpenAI"}]

  useEffect(()=>{
    (selectedOption === 'General') ?
    setCardData(generalCards)
    : setCardData(llmCards)
  },[selectedOption])
  
  return (
    <Box h={130} w='100%'  bg='white' px={40}  pb={22} pt={5}  className='rounded-b-md border-b-[1px] shadow-md absolute z-50'>
      <Flex gap={10} align='center'>
        {searchOpen ? 
         <IoMdClose  className='cursor-pointer' onClick={()=>setSearchOpen(!searchOpen)}/> 
        :<IoMdSearch   className='cursor-pointer pb-1' size={23} onClick={()=>setSearchOpen(!searchOpen)}/> 
        }
      {searchOpen ?
       <Input w={350} size='compact-sm'/>  :
      options?.map(data =>
        <Text
        px={10}
        pb={4}
        style={{
          borderBottomWidth: "2px",
          borderBottomStyle: "solid",
          borderBottomColor: `${selectedOption === data ? "#6366F1" : "white"}`,
          cursor: "pointer",
        }}
        c={`${selectedOption === data ? '#9294F5' : ""}`}
        size="sm"
        key={data}
        onClick={() => setSelectedOption(data)}
      >
        {data}
      </Text>
      ) 
    }
      </Flex>
      <Flex mt={8} gap={10}>
        {cardData?.map(data => 
        <FlowOptionsCard key={data.title} title={data.title} icon={data.icon} setNodes={setNodes}/>
        )}
      </Flex>
    </Box>
  )
}

export default FlowOptions