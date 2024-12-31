import { Box, Center, Text, Title } from "@mantine/core"
import { useDnD } from "./dnd/UseDnD";
import { useEffect, useState } from "react";
import { useReactFlow } from "@xyflow/react";
import { useDispatch } from "react-redux";
import { updateinputNodes } from "@/lib/redux/slice/dataSlice";


const FlowOptionsCard = ({ title, icon, setNodes }: any) => {
  const [_, setType] = useDnD();

  const optionMap = {
    Input: "inputNode",
    Output: "outputNode",
    Text: "textNode",
    OpenAI: "openAINode",
  };

  const label = useNodeLabel(optionMap[title]);

  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    setType(nodeType);
    const data = JSON.stringify({ type: nodeType, label: `input_${label}` });
    event.dataTransfer.setData("application/json", data);
    event.dataTransfer.effectAllowed = "move";
  };

 

  const handleClick = () => {
    const id = crypto.randomUUID();
    const position = { x: 100, y: 100 };

    const nodeLabel =
      title === "Input"
        ? `input_${label}`
        : title === "Output"
        ? `output_${label}`
        : title;

    setNodes((prev: any) => [
      ...prev,
      { id, position, type: optionMap[title], data: { label: nodeLabel } },
    ]);
  };

  return (
    <Box
      py={7}
      c="gray"
      px={23}
      className="border-[1px] rounded-md cursor-pointer"
      onClick={handleClick}
      onDragStart={(event) => onDragStart(event, optionMap[title])}
      draggable
    >
      <Center>
        <Title size={25}>{icon}</Title>
      </Center>
      <Center>
        <Text mt={5} size="xs">
          {title}
        </Text>
      </Center>
    </Box>
  );
};



const useNodeLabel = (nodeType: string): number => {
  const dispatch = useDispatch()
  const { getNodes } = useReactFlow();
  const [label, setLabel] = useState(0);

  useEffect(() => {
    const updateLabel = () => {
      const nodes = getNodes();
      const filteredNodes = nodes.filter((node) => node.type === nodeType);
      if(nodeType==="inputNode") {
        dispatch(updateinputNodes(filteredNodes))
      }
      setLabel(filteredNodes.length);
    };

    updateLabel();

    const nodesChangeObserver = setInterval(() => {
      updateLabel();
    }, 100);

    return () => clearInterval(nodesChangeObserver);
  }, [getNodes, nodeType]);

  return label + 1;
};


export default FlowOptionsCard