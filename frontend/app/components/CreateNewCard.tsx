import { Button, Flex, Text, Title } from '@mantine/core'
import React, { ReactNode } from 'react'

const CreateNewCard = ({title,icon}:{title:string,icon:ReactNode}) => {
      return (
    <>
    <Title size='sm' mb={5}>{title}</Title>
    <Button size='compact-sm' mb={5} ml={9} variant='outline'><Flex align='center'> <Text size='sm'>{icon}</Text> <Title ml={4} mt={2} size='xs'> Create New</Title> </Flex></Button>
    </>
  )
}

export default CreateNewCard