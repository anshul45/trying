import { StandardProps } from '@/lib/common/types'
import { updateInputData, updateOutputData } from '@/lib/redux/slice/dataSlice'
import { RootState } from '@/lib/redux/store'
import { Box, Button, ScrollArea, Textarea, Title } from '@mantine/core'
import React, { FC, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useReactFlow } from "@xyflow/react";




const Standard:FC<StandardProps> = ({socketRef}) => {
  const dispatch = useDispatch()
  const inputData = useSelector((store:RootState) => store.data.inputData)
  const outputData = useSelector((store:RootState) => store.data.outputData)
  const inputNodes = useSelector((store:RootState) => store.data.inputNodes)

  const {getNodes} = useReactFlow()

   useEffect(() => {
        socketRef.current?.onMessage((message) => 
        {       
           const data = JSON.parse(message);
           dispatch(updateOutputData(data?.message))
        }
        )
      },[socketRef.current?.onMessage])  
  
    const handleSend = () => {
      if (inputData.trim()) {
        socketRef.current?.sendMessage({ message: inputData });
      }
    }

  return (
    <Box mt={10} mx={20}>
       
            <ScrollArea w='100%' h={248} className='border-b-2' offsetScrollbars scrollbarSize={6} >
        <Title size={20}>Inputs</Title>
        {inputNodes && inputNodes.map(nodes => 
        <Textarea key={nodes.id} description={nodes.data.label} placeholder={nodes.data.label} value={inputData} onChange={e => dispatch(updateInputData(e.target.value)) } />
        )}
            </ScrollArea>
        

            <ScrollArea w='100%' h={145} offsetScrollbars scrollbarSize={6}>
        <Title size={20}>Outputs</Title>
        <Textarea description='input_1' value={outputData}  placeholder='input_1'/>

            </ScrollArea> 
    
        <Button w="100%" onClick={handleSend}>Run</Button>
        
    </Box>
  )
}

export default Standard