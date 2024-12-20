import React, { useEffect, useState } from "react";
import { Handle, Position, useReactFlow } from "@xyflow/react";
import { Box, Flex, Select, Text, TextInput } from "@mantine/core";
import { MdInput, MdOutlineCancel } from "react-icons/md";
import NodesHead from "./NodesHead";

const InputNode = ({ data, id }) => {
  const { updateNodeData } = useReactFlow();
  const [inputValue, setInputValue] = useState<string>("input_1");

 
  // Update node data when inputValue changes
  useEffect(() => {
    const data = {
      input: inputValue,
    };
    updateNodeData(id, data);
  }, [inputValue]);

  return (
    <Box className="border-2 rounded-md drop-shadow-sm" bg="white" px={10} py={5} w={260}>
      <NodesHead id={id} icon={<MdInput/>} title='Input'/>
      <Box px={10}>
        <TextInput
          size="compact-sm"
          label="Field Name"
          styles={{
            input: { border: "none", marginLeft: "10px" },
            label: { color: "grey" },
          }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Select
          mt={5}
          label="Type"
          defaultValue="Text"
          data={["Text", "File"]}
          styles={{
            input: { border: "none" },
            label: { color: "grey" },
          }}
        />
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
    </Box>
  );
};

export default InputNode;
