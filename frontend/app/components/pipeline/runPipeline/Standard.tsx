import { updateInputData, updateOutputData } from '@/lib/redux/slice/dataSlice'
import { RootState } from '@/lib/redux/store'
import { WebSocketService } from '@/lib/webhook/websocket'
import { Box, Button, ScrollArea, Textarea, Title } from '@mantine/core'
import React, { FC, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

interface StandardProps {
  socketRef: React.RefObject<WebSocketService>;
}

const Standard:FC<StandardProps> = ({socketRef}) => {
  const dispatch = useDispatch()
  const inputData = useSelector((store:RootState) => store.data.inputData)
  const outputData = useSelector((store:RootState) => store.data.outputData)

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
        <Textarea description='input_1' placeholder='input_1' value={inputData} onChange={e => dispatch(updateInputData(e.target.value)) } />
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