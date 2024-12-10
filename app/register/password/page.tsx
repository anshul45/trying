"use client"
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Box, Button, Center, Divider, Flex, Input, PasswordInput, Text,  Title } from '@mantine/core'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Logo from "../../../public/logo.png"
import Image from 'next/image';

const LoginWithEmail = () => {
    const[password,setPassword]=useState<string>("")
  return (
    <Box h='100vh' bg='#1C2536'>
      <Center>
      <Flex direction='column' justify='space-between' align="center" bg='white' my={10} h='calc(100vh - 20px)'  w={400} className='rounded-md' px={30} py={30}>
        <Image src={Logo} alt='logo' width={55}/>
        <Title size={25} fw={1}>Create Your Account</Title>
        <Text size='sm' className='text-center'>Set your password for VectorShift to continue to VectorShift</Text>       
        <Input w="100%" size='lg' color='#007bad' placeholder='Username or email address*'/>
        <Input w="100%" size='lg' color='#007bad' placeholder='Username*'/>
        <PasswordInput w="100%" size='lg' placeholder='Password*' value={password} onChange={e => setPassword(e.target.value)} />
        <Button w="100%" size='lg' color='#6366F1'>Continue</Button>
        <Flex align='center' gap={0}>
          <Text size='sm'>Already have an account?</Text>
          <Button color='#007bad' variant='transparent'>Log in</Button>
        </Flex>
      </Flex>
      </Center>
    </Box>
  )
}

export default LoginWithEmail