import { Box, Center, Flex, Select, Text } from '@mantine/core';
import React from 'react'
import { LuInfo } from "react-icons/lu";

const ChatBot = () => {
  return (
    <Box>
        <Flex align='center' gap={5}>
        <LuInfo size={25}/>
        <Text size='xs'>Supports only one input and one output. Inputs and outputs must be TEXT types.</Text>
        </Flex>
        <Flex gap={10}>
            <Box w={'100%'}>
                <Text>Input</Text>
                <Select />
            </Box>
            <Box w={'100%'}>
                <Text>Output</Text>
                <Select/>

            </Box>
        </Flex>
        <Center>Clear chat</Center>
    </Box>
  )
}

export default ChatBot