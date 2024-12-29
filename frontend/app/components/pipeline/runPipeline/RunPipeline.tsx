import { Box, Center, Flex, Text } from "@mantine/core";
import { FaAngleRight } from "react-icons/fa6";
import Standard from "./Standard";
import ChatBot from "./ChatBot";
import OptionSelector from "../../ui/OptionSelector";
import { useState } from "react";
const RunPipeline = () => {
  const[options,setOptions] = useState<string[]>(["STANDARD","CHATBOT"])
  const[selectedOption,setSelectedOption] = useState<string>("CHATBOT")
  return (
    <Box className="border-l-2 h-full px-5">
        <Flex align='center' pt={10} gap={20}>
        <FaAngleRight size={25}/>
        <Text size="lg">Run Pipeline</Text>
        </Flex>
        <div className="my-5">
        <OptionSelector options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
        </div>
        {selectedOption === "CHATBOT" ?
        <ChatBot/>:
        <Standard/>
      }
    </Box>
  )
}

export default RunPipeline