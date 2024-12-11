"use client"
import { Button, Flex, Text } from '@mantine/core'
import React from 'react'
import Selector from './ui/Selector'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Logo from "@/public/logo.png"

const HomeHeader = () => {

  const router = useRouter()
  return (
    <Flex  justify="space-between" align="center">
      <Flex pb={5} align='center' gap={7}>
      <Image src={Logo} alt='logo'width={25} />
        <Text  className='cursor-pointer hover:text-blue-400 active:text-white'>VectorShift</Text>
      </Flex>
        <Selector title="Platform"/>
        <Selector title="Solutions"/>
        <Text pb={5} className='cursor-pointer hover:text-blue-400 active:text-white'>Enterprise</Text>
        <Text pb={5} className='cursor-pointer hover:text-blue-400 active:text-white'>Pricing</Text>
        <Selector title="Resources"/>
        <Text pb={5} className='cursor-pointer hover:text-blue-400 active:text-white'>Security</Text>
        <Text pb={5} className='cursor-pointer hover:text-blue-400 active:text-white'>Talk to Us</Text>
        <Text pb={5} className='cursor-pointer hover:text-blue-400 active:text-white' onClick={()=> router.push('/login')}>Log in</Text>
        <Button mb={5} radius={200} w={130} h={40} onClick={()=> router.push('/register')}>Get started</Button>
    </Flex>
  )
}

export default HomeHeader