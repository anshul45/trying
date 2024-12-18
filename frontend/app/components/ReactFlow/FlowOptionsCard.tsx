import { Box, Center, Text, Title } from "@mantine/core"

const FlowOptionsCard = ({title,icon,setNodes}:any) => {

  const optionMap ={
    Input:"inputNode",
    Output:"outputNode",
    Text:"textNode"
  }

      const handleClick =() => {
        const id = crypto.randomUUID();
        const position = { x: 100, y: 100 }
          setNodes((prev:any) => [...prev,{id,position,type:optionMap[title]}] )
        
      }

  return (
    <Box py={7} c='gray' px={23} className="border-[1px] rounded-md cursor-pointer" onClick={handleClick}>
      <Center>
      <Title size={25}>
        {icon}
      </Title>
      </Center>
   <Center>
      <Text mt={5} size='xs'>{title}</Text>
    </Center>
    </Box>
  )
}

export default FlowOptionsCard