import React, { useState } from 'react'
import { Handle, Position } from '@xyflow/react'
import { Box, Text, Textarea } from '@mantine/core'
import { MdOutlineTextSnippet } from "react-icons/md";
import NodesHead from './NodesHead';
const TextNode = ({id}) => {

  const[inputValue,setInputValue] = useState<string>("variable")

  return (<Box className='border-2 rounded-md drop-shadow-sm' bg='white' p={10} w={260}>
    <NodesHead id={id} icon={<MdOutlineTextSnippet/>} title='Text'/>
    <Textarea size='compact-sm' label='Field Name' styles={{ input:{padding:"8px"}, label:{color:"grey"}}} value={inputValue} onChange={e =>setInputValue(e.target.value)}/>
      <Text className="absolute z-10 text-xs right-[17rem] top-[50%]">{inputValue}</Text>
  <Handle type='target' style={{background:"white",border:"1px solid black",  width:'15px', height:'15px'}} position={Position.Left} id='text-target-handle'/>
  <Handle type='source' style={{background:"white",border:"1px solid black",  width:'15px', height:'15px'}} position={Position.Right} id='text-source-handle'/>
      <Text className="absolute z-10 text-xs left-[17rem] top-[50%]" onChange={e => setInputValue(e.target.value)}>{'output'}</Text>
  </Box>
  )
}

export default TextNode