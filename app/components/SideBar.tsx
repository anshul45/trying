import { Box, Flex } from '@mantine/core'
import React, { useState } from 'react'
import UserMenu from './UserMenu';
import CreateModal from './CreateModal';
import NavLinks from './NavLinks';
import { IoMdAdd } from "react-icons/io";
import navLinks from '@/lib/links/navlinks';
const SideBar = () => {
  return (
    <Box  bg='#f1f3f4' p={15} className='h-screen'>
        <Flex>
                <Flex justify='space-between' align='center' className='w-full' >
                <UserMenu/>
                <IoMdAdd size={18}/>
            </Flex>

        </Flex>
        <Flex direction='column' gap={5} mt={15}>
        {
          navLinks.map(data => (
            <NavLinks key={data.title} icon={data.icon} title={data.title}/>
          ))
        }
        </Flex>
        <CreateModal/>
    </Box>
  )
}

export default SideBar