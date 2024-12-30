import { Box, Button, ScrollArea, Textarea, Title } from '@mantine/core'
import React from 'react'

const Standard = () => {
  return (
    <Box mt={10} mx={20}>
       
            <ScrollArea w='100%' h={248} className='border-b-2' offsetScrollbars scrollbarSize={6} >
        <Title size={20}>Inputs</Title>
        <Textarea description='input_1' placeholder='input_1'/>
            </ScrollArea>
        

            <ScrollArea w='100%' h={145} offsetScrollbars scrollbarSize={6}>
        <Title size={20}>Outputs</Title>
        <Textarea description='input_1'  placeholder='input_1'/>

            </ScrollArea> 
    
        <Button w="100%">Run</Button>
        
    </Box>
  )
}

export default Standard