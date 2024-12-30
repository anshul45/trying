import React, { useEffect, useState } from "react";
import { Handle, Position, useReactFlow } from "@xyflow/react";
import { Box, Select, Text, TextInput } from "@mantine/core";
import NodesHead from "../NodesHead";
import { SiOpenai } from "react-icons/si";
import type { NodeProps } from '@xyflow/react';

const OpenAINode = ({ data, id }:NodeProps) => {
  const { updateNodeData } = useReactFlow();
  const [inputValue, setInputValue] = useState<string>("");

 
  // Update node data when inputValue changes
  useEffect(() => {
    const data = {
      input: inputValue,
    };
    updateNodeData(id, data);
  }, [inputValue]);

  return (
    <Box className="border-2 rounded-md drop-shadow-sm" bg="white" px={10} py={5} w={260}>
      <NodesHead id={id} icon={<SiOpenai/>} title='OpenAI LLM'/>
      <Box px={10}>
        <TextInput
          size="compact-sm"
          label="System"
          styles={{
            input:{paddingLeft:"5px", paddingTop:"3px", paddingBottom:"3px"},
            label: { color: "grey",fontSize:"10px" },
          }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <TextInput
          size="compact-sm"
          label="Prompt"
          styles={{
            input:{paddingLeft:"5px", paddingTop:"3px", paddingBottom:"3px"},
            label: { color: "grey",fontSize:"10px" },
          }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Select
          label="Model"
          defaultValue="gpt-4"
          data={["Text", "File"]}
          styles={{
            input: { border: "none" },
            label: { color: "grey",fontSize:"10px"},
          }}
        />
        <Text className="absolute z-10 text-xs left-[17rem] top-[50%]">response</Text>
      </Box>
      <Handle
        type="source"
        style={{
          background: "white",
          border: "1px solid black",
          width: "15px",
          height: "15px",
        }}
        position={Position.Right}
        id="a"
      />

<Handle
        type="target"
        style={{
          background: "white",
          border: "1px solid black",
          width: "15px",
          height: "15px",
          top:65
        }}
        position={Position.Left}
        id="openai-prompt"
      />
<Text className="absolute z-10 text-xs right-[17rem] top-[30%]">system</Text>

<Handle
        type="target"
        style={{
          background: "white",
          border: "1px solid black",
          width: "15px",
          height: "15px",
          top:125
        }}
        position={Position.Left}
        id="openai-system"
      />

<Text className="absolute z-10 text-xs right-[17rem] top-[60%]">prompt</Text>


    </Box>
  );
};

export default OpenAINode;
