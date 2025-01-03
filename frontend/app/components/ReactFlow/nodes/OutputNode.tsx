import React, { useEffect, useState } from 'react'
import { Handle, Position, useReactFlow } from '@xyflow/react'
import { Box, Select,  Textarea,  TextInput } from '@mantine/core'
import { MdOutput } from 'react-icons/md'
import NodesHead from './NodesHead';
import type { NodeProps } from '@xyflow/react';


const OutputNode = ({id,data}:NodeProps) => {
 const { updateNodeData } = useReactFlow();
  const[inputValue,setInputValue] = useState<string>(data?.label)


    useEffect(() => {
      const data = {
        label: inputValue,
      };
      updateNodeData(id, data);
    }, [inputValue]);

  

  return (<Box className='border-2 rounded-md drop-shadow-sm' bg='white' px={10} py={5} w={260}>
    <NodesHead id={id} icon={<MdOutput/>} title="Output"/>
    <Box px={10}>
    <TextInput size='compact-sm' label='Field Name' variant='unstyled' styles={ {label:{color:"grey"}}} value={inputValue} onChange={e =>setInputValue(e.target.value)}/>
    <Select mt={5}
      label="Type"
      defaultValue='Text'
      data={['Text', 'File', 'Audio']}
      styles={{input:{border:"none"},label:{color:"grey"}}}
    />
     {true &&<Box mb={3}>
            <Textarea
              size="compact-sm"
              label="Pipeline Run input"
              placeholder={inputValue}
              autosize
              minRows={2}
              maxRows={6}
              value=''
              styles={{
                input:{paddingLeft:"5px", paddingTop:"3px",paddingBottom:"3px"},
                label: { color: "black" },
              }}
              />
              </Box>}
    </Box>

  <Handle type='target' style={{background:"white",border:"1px solid black",  width:'15px', height:'15px'}} position={Position.Left} id='output-handle'/>
  </Box>
  )
}



export default OutputNode