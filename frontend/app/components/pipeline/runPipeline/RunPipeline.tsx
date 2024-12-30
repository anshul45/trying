import { Box, Flex, Text } from "@mantine/core";
import { FaAngleRight } from "react-icons/fa6";
import Standard from "./Standard";
import ChatBot from "./ChatBot";
import OptionSelector from "../../ui/OptionSelector";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleInputNode } from "@/lib/redux/slice/toggleSlice";
import { WebSocketService, webSocketService } from '@/lib/webhook/websocket';


const RunPipeline = ({setOpenPipeline}:any) => {
  const[options,setOptions] = useState<string[]>(["STANDARD","CHATBOT"])
  const[selectedOption,setSelectedOption] = useState<string>("CHATBOT")
    const socketRef = useRef<WebSocketService | null>(null);
  
  const dispatch = useDispatch()

useEffect(() => {
      selectedOption === "STANDARD" 
      ? dispatch(toggleInputNode(true))
      : dispatch(toggleInputNode(false)) 
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
        <FaAngleRight size={25} className="cursor-pointer" onClick={() => setOpenPipeline(false)}/>
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