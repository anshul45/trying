import { Box, Center, Text, Title } from "@mantine/core"
import { useDnD } from "./dnd/UseDnD";


const FlowOptionsCard = ({title,icon,setNodes}:any) => {

  const[_,setType] = useDnD();


  const onDragStart = (event:React.DragEvent,nodeType:string) => {
    setType(nodeType)
    const data = JSON.stringify({ type: nodeType });
    event.dataTransfer.setData("application/json", data);
    event.dataTransfer.effectAllowed = 'move';
  }

  const optionMap ={
    Input:"inputNode",
    Output:"outputNode",
    Text:"textNode",
    OpenAI:"opeanAINode"
  }

      const handleClick =() => {
        const id = crypto.randomUUID();
        const position = { x: 100, y: 100 }
          setNodes((prev:any) => [...prev,{id,position,type:optionMap[title]}] )
        
      }

  return (
    <Box py={7} c='gray' px={23} className="border-[1px] rounded-md cursor-pointer" onClick={handleClick} onDragStart={(event) => onDragStart(event, optionMap[title])} draggable>
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