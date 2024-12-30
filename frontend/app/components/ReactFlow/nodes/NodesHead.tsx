import { Box, Flex, Text } from '@mantine/core'
import React, { FC, useState } from 'react'
import {MdOutlineCancel } from 'react-icons/md'
import {useReactFlow } from "@xyflow/react";
import { NodesHeadProps } from '@/lib/common/types';

const NodesHead:FC<NodesHeadProps> = ({id, icon, title}) => {

  const [isClicked, setIsClicked] = useState(false); 

  const {deleteElements} = useReactFlow()

 const handleDelete = () => {
    console.log("clicked",id)
    deleteElements({ nodes: [{ id }] });
  };

  const handleIconClick = () => {
    if (isClicked) {
      handleDelete(); // Trigger delete on the second click
    } else {
      setIsClicked(true); // Mark as clicked on the first click
      setTimeout(() => setIsClicked(false), 3000); // Reset after 3 seconds
    }
  };


  return (
    <Flex justify="space-between" align="center">
            <Flex align="center" gap={4}>
              <Box size={15} >
                {icon}
                </Box>
              <Text size="sm">{title}</Text>
            </Flex>
            <MdOutlineCancel
              size={15}
              className="mb-2 cursor-pointer"
              color={isClicked ? "red" : "black"} 
              onClick={handleIconClick}
            />
          </Flex>
  )
}

export default NodesHead