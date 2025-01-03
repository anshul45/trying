import { Box, Flex, Text } from "@mantine/core";
import { FaAngleRight } from "react-icons/fa6";
import Standard from "./Standard";
import ChatBot from "./ChatBot";
import OptionSelector from "../../ui/OptionSelector";
import { FC, useEffect, useRef, useState } from "react";
import { WebSocketService, webSocketService } from '@/lib/webhook/websocket';
import { RunPipelineProps } from "@/lib/common/types";
import toggleStore from "@/lib/zustand/toggleStore.ts/toggleStore";

const RunPipeline:FC<RunPipelineProps> = () => {
  const[options,setOptions] = useState<string[]>(["STANDARD","CHATBOT"])
  const[selectedOption,setSelectedOption] = useState<string>("CHATBOT")
  const socketRef = useRef<WebSocketService | null>(null);
  const {updateShowPipeline} = toggleStore()
  

useEffect(() => {
      selectedOption === "STANDARD" 
},[selectedOption])

useEffect(() => {
    const socket = webSocketService();
    socket.connect();
    socketRef.current = socket;  
    return () => {
      socket.disconnect();
    };
  }, [webSocketService]);




  return (
    <Box className=" h-full  pl-3.5 pr-2.5 bg-white">
        <Flex align='center' pt={10} gap={20}>
        <FaAngleRight size={25} className="cursor-pointer" onClick={() => updateShowPipeline()}/>
        <Text size="lg">Run Pipeline</Text>
        </Flex>
        <div className="my-5">
        <OptionSelector options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
        </div>
        {selectedOption === "CHATBOT" ?
        <ChatBot socketRef={socketRef}/>:
        <Standard socketRef={socketRef}/>
      }
    </Box>
  )
}

export default RunPipeline