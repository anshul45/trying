import React, { useEffect, useState } from "react";
import { Handle, Position, useReactFlow } from "@xyflow/react";
import { Box, Flex, Select, Text, TextInput } from "@mantine/core";
import { MdInput, MdOutlineCancel } from "react-icons/md";

const InputNode = ({ data, id, type }) => {
  const { deleteElements, updateNodeData } = useReactFlow();
  const [inputValue, setInputValue] = useState<string>("input_1");
  const [isClicked, setIsClicked] = useState(false); 

  const handleDelete = () => {
    deleteElements({ nodes: [{ id: id }], edges: [{ id: id }] });
  };

  const handleIconClick = () => {
    if (isClicked) {
      handleDelete(); // Trigger delete on the second click
    } else {
      setIsClicked(true); // Mark as clicked on the first click
      setTimeout(() => setIsClicked(false), 3000); // Reset after 3 seconds
    }
  };

  // Update node data when inputValue changes
  useEffect(() => {
    const data = {
      input: inputValue,
    };
    updateNodeData(id, data);
  }, [inputValue]);

  return (
    <Box className="border-2 rounded-md drop-shadow-sm" bg="white" px={10} py={5} w={260}>
      <Flex justify="space-between" align="center">
        <Flex align="center" gap={4}>
          <MdInput size={15} />
          <Text size="sm">Input</Text>
        </Flex>
        <MdOutlineCancel
          size={15}
          className="mb-2 cursor-pointer"
          color={isClicked ? "red" : "black"} 
          onClick={handleIconClick}
        />
      </Flex>
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
