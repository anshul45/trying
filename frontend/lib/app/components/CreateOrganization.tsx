import { Button, Flex, Input, Modal, Text, TextInput, Title } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

const CreateOrganization = () => {
  return (
    <Modal opened={false}  title={ <Flex align='center' gap={4} >
    <Image src='' alt='.'/>
    <Title  size='lg'>Create Organization</Title>
</Flex>} onClose={()=>{}} centered>
    <TextInput label="name"/>
    <Text size='xs' c='gray'>This will serve as your org's "username". Only use lowercase letters.</Text>
    <TextInput label="Display Name"/>
    <Text size='xs' c='gray'>This will be your org's visible name. Use spaces and capitalization as needed.</Text>
    <TextInput label="Logo URL" />
    <Flex justify='flex-end' mt={20}>
    <Button variant='outline' >Create</Button>
    </Flex>
    </Modal>
  )
}

export default CreateOrganization