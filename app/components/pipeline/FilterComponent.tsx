import { Flex, Text } from '@mantine/core'
import React from 'react'

const FilterComponent = ({icon,title}:any) => {
  return (
    <Flex align='center' gap={10} px={15} py={10}  className='rounded-sm hover:bg-slate-100 cursor-pointer'>
        <Text c='#6366F1'>{icon}</Text>
        <Text c='#6366F1'>{title}</Text>
    </Flex>
  )
}

export default FilterComponent