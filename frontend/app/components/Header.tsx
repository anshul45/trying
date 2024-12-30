"use client"
import { HeaderProps } from '@/lib/common/types';
import { toggleSidebar } from '@/lib/redux/slice/toggleSlice';
import { Button, Flex, Text } from '@mantine/core'
import { FC } from 'react';
import { LuPanelRightOpen } from 'react-icons/lu'
import { useDispatch } from 'react-redux'

const Header:FC<HeaderProps> = ({title,buttons}) => {
  const dispatch = useDispatch();
  return (
    <Flex py={9} px={15} bottom={10} align='center' justify='space-between' className="border-b-[1px]">
    <Flex align='center' gap={9}>
  <LuPanelRightOpen size={16} className='cursor-pointer' onClick={() => dispatch(toggleSidebar())}/>
  <Text className="font-medium text-[15px]">{title}</Text>
    </Flex>
    <Flex align='center' gap={10}>
      {buttons?.map((data:any) =>(  
        <Button variant={data.type == "node"?"transparent":"default"} className="text-xs px-3" size="compact-sm" key={data.title} onClick={data.action}>{data.title}</Button>
      ) 
      )}
    </Flex>
  </Flex>
  )
}

export default Header