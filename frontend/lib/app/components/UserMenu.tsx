import { Flex, Menu, Text } from '@mantine/core'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { FaCaretRight, FaChevronDown } from 'react-icons/fa6'
import Logo from "@/public/logo.png"
import SwitchOrganizationMenu from './SwitchOrganizationMenu'
const UserMenu = () => {
  return (
    <Menu shadow="md" width={245} offset={3}>
    <Menu.Target>
          <Flex align='center' gap={7} className='hover:bg-[#E0E0FC] px-2 py-2 rounded-md cursor-pointer'>
              <Image width={25} src={Logo} alt='logo'/>
              <Text size='sm'>Personal</Text>
              <FaChevronDown size={7}/>
              </Flex>
    </Menu.Target>
    <Menu.Dropdown>
      <Menu.Item rightSection={<Flex align='center' gap={4}><Text className='border-[1px] border-[#E0E0FC] bg-[#f1f3f4] rounded-sm' px={4} size='xs'>G</Text> <Text size='xs'>then</Text> <Text className='border-[1px] border-[#E0E0FC] bg-[#f1f3f4] rounded-sm' px={4} size='xs'>S</Text></Flex>}>
        Profile
      </Menu.Item>
      <Menu.Item>
        Usage
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item rightSection={<FaCaretRight/>}>
      <SwitchOrganizationMenu/>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={() => signOut()}>
        Sign Out
      </Menu.Item>
      </Menu.Dropdown>
      </Menu>
  )
}

export default UserMenu