"use client"
import React from 'react'
import { signIn } from 'next-auth/react'
import { Box, Button, Center, Divider, Flex, Input, Text,  Title } from '@mantine/core'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Logo from "../../public/logo.png"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Register = () => {
const router = useRouter()
  return (
    <Box h='100vh' bg='#1C2536'>
      <Center>
      <Flex direction='column' justify='space-between' align="center" bg='white' my={10} h='calc(100vh - 20px)'  w={400} className='rounded-md' px={35} py={38}>
        <Image src={Logo} alt='logo' width={55}/>
        <Title size={25} fw={1}>Create Your Account</Title>
        <Text size='sm'>Sign Up to VectorShift to continue to VectorShift.</Text>
        <Input w="100%" size='lg' color='#007bad' placeholder='Email address*'/>
        <Button w="100%" size='lg' color='#6366F1' onClick={()=> router.push('/register/password')}>Continue</Button>
        <Flex align='center' gap={0}>
          <Text size='sm'>Already have an account? </Text>
          <Button color='#007bad' variant='transparent' onClick={()=> router.push("/login")}>Log in</Button>
        </Flex>
        <Divider size='lg' color='red'  my="lg" label="OR" labelPosition="center"/>
      <Button w="100%" size='lg' color='gray' variant='outline' onClick={()=> signIn('google')}><FcGoogle className='mr-3.5 text-2xl'/> <span className='font-light text-lg'>Continue With Google</span></Button>
      <Button w="100%" size='lg' color='gray' variant='outline' onClick={()=> signIn('github')}><FaGithub className='mr-3.5 text-2xl text-black'/> <span className='font-light text-lg'>Continue With GitHub</span></Button>

      </Flex>
      </Center>
    </Box>
  )
}

export default Register