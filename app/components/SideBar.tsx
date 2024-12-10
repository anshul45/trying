import { Box, Flex } from '@mantine/core'
import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import UserMenu from './UserMenu';
import CreateModal from './CreateModal';
const SideBar = () => {
  
  return (
    <Box  bg='#f1f3f4' p={15} className='h-screen'>
        <Flex>
                <Flex justify='space-between' align='center' className='w-full' >
                <UserMenu/>
                <IoMdAdd size={18}/>
            </Flex>

        </Flex>
        <CreateModal/>
    </Box>
  )
}

export default SideBar