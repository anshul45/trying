"use client"
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Box, Button, Center, Divider, Flex, Input, PasswordInput, Text,  Title } from '@mantine/core'
import Logo from "@/public/logo.png"
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

const RegisterPassword = () => {
    const[password,setPassword]=useState<string>("")
    const[name,setName]=useState<string>("")
    const router = useRouter()
    const searchParams = useSearchParams()
    const email = searchParams.get("email") || ''
    const handleRegister = async() => {
      const result = await signIn('credentials',{email,name,password, redirect:false});
      if (result) {
        router.push("/dashboard")    
      } else {
    
      }
    }
  return (
    <Box h='100vh' bg='#1C2536'>
      <Center>
      <Flex direction='column' justify='space-between' align="center" bg='white' my={10} h='calc(100vh - 20px)'  w={400} className='rounded-md' px={30} py={30}>
        <Image src={Logo} alt='logo' width={55}/>
        <Title size={25} fw={1}>Create Your Account</Title>
        <Text size='sm' className='text-center'>Set your password for VectorShift to continue to VectorShift</Text>       
        <PasswordInput w="100%" size='lg'  readOnly visible={true} value={email} onChange={e => setPassword(e.target.value)} rightSectionWidth={64} rightSection={<Button className='z-50' color='#007bad' variant='transparent' onClick={()=>router.push("/login")}>Edit</Button>}/>
        <Input w="100%" size='lg' color='#007bad' placeholder='Username*' value={name} onChange={e => setName(e.target.value)}/>
        <PasswordInput w="100%" size='lg' placeholder='Password*' value={password} onChange={e => setPassword(e.target.value)} />
        <Button w="100%" size='lg' color='#6366F1' onClick={handleRegister}>Continue</Button>
        <Flex align='center' gap={0}>
          <Text size='sm'>Already have an account?</Text>
          <Button color='#007bad' variant='transparent' onClick={()=> router.push('/login')}>Log in</Button>
        </Flex>
      </Flex>
      </Center>
    </Box>
  )
}

export default RegisterPassword