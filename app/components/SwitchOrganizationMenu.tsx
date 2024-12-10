import { Box, Menu, Text } from '@mantine/core'
import React, { useState } from 'react'

const SwitchOrganizationMenu = () => {
    const[open,setOpen] = useState(false)
  return (
    <Box className='z-50' onClick={e =>{ e.stopPropagation()}}>
    <Menu shadow="md" width={200} offset={40} position='right-start' trigger='click-hover'>
            <Menu.Target>
              <Text size='sm'>Switch Organization</Text>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Label>UserName</Menu.Label>
              <Menu.Item>Personal</Menu.Item>
              <Menu.Divider/>
              <Menu.Label>Organizations</Menu.Label>
              <Menu.Divider/>
              <Menu.Item onClick={()=>  setOpen(true)}>Create Organization</Menu.Item>
            </Menu.Dropdown>
          </Menu>
    </Box>
  )
}

export default SwitchOrganizationMenu