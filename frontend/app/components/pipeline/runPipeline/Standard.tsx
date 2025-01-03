import { StandardProps } from '@/lib/common/types';
import { Box, Button, ScrollArea, Textarea, Title } from '@mantine/core';
import React, { FC, useEffect } from 'react';

const Standard: FC<StandardProps> = ({ socketRef }) => {
  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.onMessage((message) => {
        const data = JSON.parse(message);
      });
    }
  }, [socketRef, ]);
  
  const handleSend = () => {
    if (inputData.trim()) {
      socketRef.current?.sendMessage({ message: inputData });
    }
  };
  
  return (
    <Box mt={10} mx={20}>
      <ScrollArea w="100%" h={248} className="border-b-2" offsetScrollbars scrollbarSize={6}>
        <Title size={20}>Inputs</Title>
      
          <Textarea
            description=''
            placeholder=''
            value=''
          />
  
      </ScrollArea>

      <ScrollArea w="100%" h={145} offsetScrollbars scrollbarSize={6}>
        <Title size={20}>Outputs</Title>
        <Textarea description="input_1" value='' placeholder="input_1" />
      </ScrollArea>

      <Button w="100%" onClick={handleSend}>
        Run
      </Button>
    </Box>
  )


}
export default Standard
