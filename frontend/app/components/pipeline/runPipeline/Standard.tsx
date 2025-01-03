import { StandardProps } from '@/lib/common/types';
import flowStore from '@/lib/zustand/flowStore/flowStore';
import toggleStore from '@/lib/zustand/toggleStore.ts/toggleStore';
import { Box, Button, ScrollArea, Textarea, Title } from '@mantine/core';
import React, { FC, useEffect, useState } from 'react';

const Standard: FC<StandardProps> = ({ socketRef }) => {
  const { nodes, updateNodeData } = flowStore();
  const [input, setInput] = useState('');


 

  const handleChange = (id, e) => {
    const newData = { inputData: e.target.value };
    updateNodeData(id, newData);
  }

  const handleSend = () => {
    if (input.trim()) {
      socketRef.current?.sendMessage({ message: input });
    }
  };

  const inputNodes = nodes.filter(node => node.type === 'inputNode');
  const outputNodes = nodes.filter(node => node.type === 'outputNode');


  return (
    <Box mt={10} mx={20}>
      <ScrollArea w="100%" h={248} className="border-b-2" offsetScrollbars scrollbarSize={6}>
        <Title size={20}>Inputs</Title>
        {inputNodes.map(node => (
          <Textarea 
          className='my-1.5'
            key={node.id}
            description={node.data.label}
            placeholder={node.data.label}
            value={node.data.inputData || ''}
            onChange={e => handleChange(node.id, e)}
          />
        ))}
      </ScrollArea>

      <ScrollArea w="100%" h={145} offsetScrollbars scrollbarSize={6}>
        <Title size={20}>Outputs</Title>
        {outputNodes.map(node => (
          <Textarea className='my-1.5' key={node.id} description={node.data.label} value="" placeholder={node.data.label} />
        ))}
      </ScrollArea>

      <Button w="100%" onClick={handleSend}>
        Run
      </Button>
    </Box>
  );
};

export default Standard;
