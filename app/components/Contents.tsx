import { Button, Center, Flex, Text, Title } from '@mantine/core'
import React from 'react'

const Contents = () => {
  return (
        <Flex direction="column" pt={80} justify="center" align="center">
        <Title size={60}>The No-Code</Title>
        <Title size={50}>AI automations platform</Title>
        <Title size={20} mt={20}>An integrated framework of no-code, low-code, and out of the box </Title>
        <Title size={20}>generative AI solutions to build AI search engines, assistants, </Title>
        <Title size={20}>chatbots, and automations. </Title>
        <Flex mt={40}>
        <Button radius={200} w={130} h={40}>Get started</Button>
        <Button variant='transparent'>Book a demo</Button>
        </Flex>
        </Flex>
    
  )
}

export default Contents