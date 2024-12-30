import { updateOutputData } from '@/lib/redux/slice/dataSlice';
import { webSocketService,WebSocketService } from '@/lib/webhook/websocket';
import { Box, Center, Divider, Flex, Input, MantineProvider, Select, Text, TextInput } from '@mantine/core';
import React, { FC, useEffect, useRef, useState } from 'react'
import { LuInfo } from "react-icons/lu";
import { LuSend } from "react-icons/lu";
import { useDispatch } from 'react-redux';

interface ChatBotProps {
  socketRef: React.RefObject<WebSocketService>;
}

const ChatBot :FC<ChatBotProps> = ({socketRef}) => {
  const[input,setInput] = useState<string>("")
  const [messages, setMessages] = useState<{ user: string; message: string }[]>([]);
  const dispatch = useDispatch()

    useEffect(() => {
      socketRef.current?.onMessage((message) => 
      {       
         const data = JSON.parse(message);

         dispatch(updateOutputData(data?.message))

      setMessages((prev) => [...(prev || []), { user: "Agent", message: data.message }])
}
      )
    },[socketRef.current?.onMessage])  

  const handleSend = () => {
    if (input.trim()) {
      socketRef.current?.sendMessage({ message: input });
      setMessages((prev) => [...(prev || []), { user: "You", message: input }]);
      setInput(""); 
    }
  }

  return (
    <Flex direction='column' justify='space-between'>
      <Box>
        <Flex align='center' gap={10}>
        <LuInfo size={20}/>
        <Text size='xs'>Supports only one input and one output. Inputs and outputs must be TEXT types.</Text>
        </Flex>
        <Flex gap={10} mt={10}>
            <Box w={'100%'}>
                <Text>Input</Text>
                <Select />
            </Box>
            <Box w={'100%'}>
                <Text>Output</Text>
                <Select/>

            </Box>
        </Flex>
        <Center mt={10} className='font-semibold text-gray-500 cursor-pointer' onClick={() => setMessages([])}>Clear chat</Center>
       <Flex direction='column' gap={15} h={233} style={{overflowY:"auto",scrollbarWidth:"thin"}} mt={5}>
        {messages.map((msg, index) => (
          <Message key={index} user={msg.user} message={msg.message} />
        ))}
        </Flex>
      </Box>
      <Box pb={10}>
        <Divider mb={7}/>
        <Flex>
        <Flex className='w-full border-[1px] pr-2' align='center'>
        <TextInput w='100%' value={input} onChange={e =>setInput(e.target.value)} styles={{input:{border:"none"}}} placeholder="Text input"/>
        <div className='cursor-pointer' onClick={handleSend}>
        <LuSend/>
        </div>
        </Flex>
         </Flex>
      </Box>
    </Flex>
  )
}


const Message = ({ user, message }: { user: string; message: string }) => {
  return (
    <Flex direction="column"  gap={3}>
      <Flex gap={10}>
        <div className='px-3 py-1 bg-[#383973] text-white font-semibold rounded-lg'>{user[0]}</div>
        <div className="font-bold text-sm pt-3 text-[#383973]">{user}</div>
      </Flex>
      <Text className='text-sm'>{message}</Text>
    </Flex>
  );
};


export default ChatBot