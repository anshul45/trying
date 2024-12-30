import React, { useEffect, useState } from "react";
import { Handle, Position, useReactFlow } from "@xyflow/react";
import { Box, Select, Text, Textarea, TextInput } from "@mantine/core";
import { MdInput,  } from "react-icons/md";
import NodesHead from "./NodesHead";
import { checkNode } from "@/lib/flow/checkNodes";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { updateInputData } from "@/lib/redux/slice/dataSlice";
import type { NodeProps } from '@xyflow/react';



const InputNode = ({ data, id }:NodeProps) => {
  const { updateNodeData } = useReactFlow();
  const [inputValue, setInputValue] = useState<string>("input_1");
  const dispatch = useDispatch()

  console.log("data",data.label)

  checkNode(id)

  const selected = useSelector((store : RootState) => store.toggle.showInputNode)

  const inputData = useSelector((store:RootState) => store.data.inputData)

 
  // Update node data when inputValue changes
  useEffect(() => {
    const data = {
      label: inputValue,
    };
    updateNodeData(id, data);
  }, [inputValue]);

  return (
    <Box className="border-2 rounded-md drop-shadow-sm" bg="white" px={10} py={5} w={260}>
      <NodesHead id={id} icon={<MdInput/>} title='Input'/>
      <Box px={10}>
        <TextInput
          variant="unstyled"
          size="compact-sm"
          label="Field Name"
          styles={{
            label: { color: "grey" },
          }}
          //@ts-ignore
          value={data?.label}
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
        {selected &&<Box mb={3}>
        <Textarea
          size="compact-sm"
          label="Pipeline Run input"
          placeholder={inputValue}
          autosize
          minRows={2}
          maxRows={6}
          value={inputData}
          onChange={e => dispatch(updateInputData(e.target.value))}
          styles={{
            input:{paddingLeft:"5px", paddingTop:"3px",paddingBottom:"3px"},
            label: { color: "black" },
          }}
          />
          </Box>}
          <Text className="absolute z-10 text-xs left-[17rem] top-[50%]">{inputValue}</Text>
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
        id="input-handle"
      />
    </Box>
  );
};

export default InputNode;
