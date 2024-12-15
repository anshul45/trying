import React, { useState } from 'react'
import { Handle, Position } from '@xyflow/react'
import { Box, Flex, Select, Text, TextInput } from '@mantine/core'
import { MdOutput } from 'react-icons/md'
import { MdOutlineCancel } from "react-icons/md";
const OutputNode = () => {

  const[inputValue,setInputValue] = useState<string>("input_1")

  return (<Box className='border-2 rounded-md drop-shadow-sm' bg='white' px={10} py={5} w={260}>
    <Flex justify='space-between' align='center' >
      <Flex align='center' gap={4}>
      <MdOutput  size={15}/>
      <Text size='sm'>Output</Text>
      </Flex>
      <MdOutlineCancel size={15} className='mb-2 cursor-pointer'/>
    </Flex>
    <Box px={10} mt={5}>
    <TextInput size='compact-sm' label='Field Name' styles={{input:{border:"none",marginLeft:"10px"}, label:{color:"grey"}}} value={inputValue} onChange={e =>setInputValue(e.target.value)}/>
    <Select mt={5}
      label="Type"
      defaultValue='Text'
      data={['Text', 'File', 'Audio']}
      styles={{input:{border:"none"},label:{color:"grey"}}}
    />
    </Box>

  <Handle type='target' position={Position.Left} id='a'/>
  </Box>
  )
}

export default OutputNode