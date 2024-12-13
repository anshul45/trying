import { Box, Flex, Text } from "@mantine/core"
import { MdInput } from "react-icons/md"


const FlowOptionsCard = () => {
  return (
    <Box py={7} c='gray' px={23} className="border-[1px] rounded-md">
      
      <MdInput size={25} />
   
      <Text mt={5} size='xs'>Input</Text>
    </Box>
  )
}

export default FlowOptionsCard