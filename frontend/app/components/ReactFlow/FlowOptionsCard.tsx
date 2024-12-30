import { Box, Center, Text, Title } from "@mantine/core"
import { useDnD } from "./dnd/UseDnD";
import { useEffect, useState } from "react";
import { useReactFlow } from "@xyflow/react";


const FlowOptionsCard = ({title,icon,setNodes}:any) => {

  const[_,setType] = useDnD();
  
  const label = useInputLabel()

  console.log("label",label)



  const onDragStart = (event:React.DragEvent,nodeType:string) => {
    setType(nodeType)
    const data = JSON.stringify({ type: nodeType,label:`input_${label}`});
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
          setNodes((prev:any) => [...prev,{id,position,type:optionMap[title],data:{label:`input_${label}`}}] )
        
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



const useInputLabel = (): number => {
  const { getNodes } = useReactFlow();
  const [label, setLabel] = useState(0);

  useEffect(() => {
    const nodes = getNodes();
    const inputNodes = nodes.filter(node => node.type === "inputNode");
    setLabel(inputNodes.length);
  }, [getNodes]);

  return label+1;
};





export default FlowOptionsCard