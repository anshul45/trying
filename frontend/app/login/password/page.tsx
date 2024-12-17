"use client"
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Box, Button, Center, Divider, Flex, Input, PasswordInput, Text,  Title } from '@mantine/core'
import Logo from "@/public/logo.png"
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

const LoginPassword = () => {
    const[password,setPassword]=useState<string>("")
    const router = useRouter()
    const searchParams = useSearchParams()
    const email = searchParams.get("email") || ''

    const handleLogin = async() => {
      const result = await signIn('credentials',{email,password, redirect:false});
      if (result) {
        router.push("/pipeline")    
      } else {
    
      }
    }
    return (
    <Box h='100vh' bg='#1C2536'>
      <Center>
      <Flex direction='column' justify='space-between' align="center" bg='white' my={10} h='calc(100vh - 20px)'  w={400} className='rounded-md' px={30} py={30}>
        <Image src={Logo} alt='logo' width={55}/>
        <Title size={25} fw={1}>Enter Your Password</Title>
        <Text size='sm' className='text-center'>Enter your password for VectorShift to continue to VectorShift</Text>
        <PasswordInput w="100%" size='lg' readOnly visible={true} value={email} onChange={e => setPassword(e.target.value)}  rightSectionWidth={64} rightSection={<Button className='z-50' color='#007bad' variant='transparent' onClick={()=>router.push("/login")}>Edit</Button>}/>
        <PasswordInput w="100%" size='lg' placeholder='Password*' value={password} onChange={e => setPassword(e.target.value)} />
        <Button color='#007bad' variant='transparent'>Forgot password?</Button>
        <Button w="100%" size='lg' color='#6366F1' onClick={handleLogin}>Continue</Button>
        <Flex align='center' gap={0}>
          <Text size='sm'>Don't have an account?</Text>
          <Button color='#007bad' variant='transparent' onClick={()=> router.push("/register")}>Sign up</Button>
        </Flex>
        </Flex>
      </Center>
       
    </Box>
  )
}

export default LoginPassword