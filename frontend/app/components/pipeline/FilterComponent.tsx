import { FilterComponentProps } from '@/lib/common/types'
import { Flex, Text } from '@mantine/core'
import React, { FC } from 'react'

const FilterComponent:FC<FilterComponentProps> = ({icon,title}) => {
  return (
    <Flex align='center' gap={10} px={15} py={10}  className='rounded-sm hover:bg-slate-100 cursor-pointer'>
        <Text c='#6366F1'>{icon}</Text>
        <Text c='#6366F1'>{title}</Text>
    </Flex>
  )
}

export default FilterComponent