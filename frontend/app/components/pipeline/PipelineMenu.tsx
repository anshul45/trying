import { Box, Button, Center, Checkbox, Flex, Modal, Select, Text, TextInput, Title } from '@mantine/core'
import React from 'react'
import { FiFolderPlus } from "react-icons/fi";

const PipelineMenu = ({showModal,setShowModal}:any) => {
  return (
    <Modal opened={showModal}  onClose={() => setShowModal(false)} styles={{
        content: { 
          paddingTop:"15px",
          width:"250px",
          position: "absolute",
          top: "50px", 
          right: "10px", 
          transform: "translateX(-50%)", 
        },
        header:{
          display:"none"
        }
      }}>
        <TextInput label="Search" size='xs'/>
        <Box mt={8} mx={7}>
        <Button w='100%' size='compact-md' variant='outline'>
            <Flex gap={8} align='center'>
            <FiFolderPlus/><Text size='sm'>Create Folder</Text>
            </Flex>
            </Button>
            <Flex mt={8} align='center' justify='space-between'>
                <Title size='xs'>Show Folders</Title>
                <Checkbox size='xs'/>
            </Flex>
            <Title size='xs' mt={8}>Sort Folders</Title>
            <Flex mt={8} align='center' justify='space-between'>
                <Title size='xs'>Sort Pipelines</Title>
                <Select
      placeholder="Pick value"
      data={['name','sharedUsers', 'modifiedDate']}
      size='compact-xs'
      w={115}
      styles={{input:{paddingLeft:"5px"}}}
    />
            </Flex>
        </Box>

       </Modal>
  )
}

export default PipelineMenu