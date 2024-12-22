import { Box, Center, Flex, Text } from "@mantine/core";
import { FaAngleRight } from "react-icons/fa6";
import Standard from "./Standard";
import ChatBot from "./ChatBot";
const RunPipeline = () => {
  return (
    <Box>
        <Flex align='center' gap={20}>
        <FaAngleRight size={25}/>
        <Text size="lg">Run Pipeline</Text>
        </Flex>
        <Flex className=" rounded-md" mt={10} mx={20}>
          <Center className="px-3 py-1.5 rounded-l-md w-full">STANDARD</Center>
          <Center className="px-3 py-1.5 rounded-r-md w-full">CHATBOT</Center>
        </Flex>
        <ChatBot/>
    </Box>
  )
}

export default RunPipeline