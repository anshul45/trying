import React, { useState } from 'react'
import { Handle, Position } from '@xyflow/react'
import { Box, Flex, Select, Text, Textarea, TextInput } from '@mantine/core'
import { MdOutlineTextSnippet } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
const TextNode = () => {

  const[inputValue,setInputValue] = useState<string>("input_1")

  return (<Box className='border-2 rounded-md drop-shadow-sm' bg='white' p={10} w={260}>
    <Flex justify='space-between' align='center' >
      <Flex align='center' gap={4}>
      <MdOutlineTextSnippet  size={15}/>
      <Text size='sm'>Text</Text>
      </Flex>
      <MdOutlineCancel size={15} className='mb-2 cursor-pointer'/>
    </Flex>
    <Textarea size='compact-sm' label='Field Name' styles={{ input:{padding:"8px"}, label:{color:"grey"}}} value={inputValue} onChange={e =>setInputValue(e.target.value)}/>
  <Handle type='target' position={Position.Left} id='a'/>
  <Handle type='source' position={Position.Right} id='a'/>

  </Box>
  )
}

export default TextNode