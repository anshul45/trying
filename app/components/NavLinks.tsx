import { Flex, Text } from '@mantine/core'
import React from 'react'

const NavLinks = ({icon,title}:any) => {
  return (
    <Flex px={15} py={5} gap={10} align='center' className='hover:bg-[#E0E0FC] rounded-md'>
      <Text>{icon}</Text>
      <Text size='sm'>{title}</Text>
    </Flex>
  )
}

export default NavLinks