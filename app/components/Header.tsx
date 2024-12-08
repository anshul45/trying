import { Button, Flex, Text } from '@mantine/core'
import React from 'react'
import Selector from './ui/Selector'

const Header = () => {
  return (
    <Flex  justify="space-between" align="center">
        <Text pb={5} className='cursor-pointer hover:text-blue-400 active:text-white'>VectorShift</Text>
        <Selector title="Platform"/>
        <Selector title="Solutions"/>
        <Text pb={5} className='cursor-pointer hover:text-blue-400 active:text-white'>Enterprise</Text>
        <Text pb={5} className='cursor-pointer hover:text-blue-400 active:text-white'>Pricing</Text>
        <Selector title="Resources"/>
        <Text pb={5} className='cursor-pointer hover:text-blue-400 active:text-white'>Security</Text>
        <Text pb={5} className='cursor-pointer hover:text-blue-400 active:text-white'>Talk to Us</Text>
        <Text pb={5} className='cursor-pointer hover:text-blue-400 active:text-white'>Log in</Text>
        <Button mb={5} radius={200} w={130} h={40}>Get started</Button>
    </Flex>
  )
}

export default Header