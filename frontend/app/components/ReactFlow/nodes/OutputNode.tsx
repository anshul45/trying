import React, { useState } from 'react'
import { Handle, Position } from '@xyflow/react'
import { Box, Select,  TextInput } from '@mantine/core'
import { MdOutput } from 'react-icons/md'
import NodesHead from './NodesHead';
const OutputNode = ({id}) => {

  const[inputValue,setInputValue] = useState<string>("input_1")

  return (<Box className='border-2 rounded-md drop-shadow-sm' bg='white' px={10} py={5} w={260}>
    <NodesHead id={id} icon={<MdOutput/>} title="Output"/>
    <Box px={10}>
    <TextInput size='compact-sm' label='Field Name' styles={{input:{border:"none",marginLeft:"10px"}, label:{color:"grey"}}} value={inputValue} onChange={e =>setInputValue(e.target.value)}/>
    <Select mt={5}
      label="Type"
      defaultValue='Text'
      data={['Text', 'File', 'Audio']}
      styles={{input:{border:"none"},label:{color:"grey"}}}
    />
    </Box>

  <Handle type='target' style={{background:"white",border:"1px solid black",  width:'15px', height:'15px'}} position={Position.Left} id='a'/>
  </Box>
  )
}

export default OutputNode