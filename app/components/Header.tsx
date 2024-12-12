import { toggleSidebar } from '@/lib/redux/slice/showSidebarSlice';
import { Button, Flex, Text } from '@mantine/core'
import { LuPanelRightOpen } from 'react-icons/lu'
import { useDispatch } from 'react-redux'

const Header = ({title,buttons}:any) => {
  const dispatch = useDispatch();
  return (
    <Flex py={9} px={15} bottom={10} align='center' justify='space-between' className="border-b-[1px]">
    <Flex align='center' gap={9}>
  <LuPanelRightOpen size={16} onClick={() => dispatch(toggleSidebar())}/>
  <Text className="font-medium text-[15px]">{title}</Text>
    </Flex>
    <Flex align='center' gap={10}>
      {buttons?.map((data:any) =>(  
        <Button variant="outline" className="text-xs px-3" size="compact-sm" key={data.title} onClick={data.action}>{data.title}</Button>
      ) 
      )}
    </Flex>
  </Flex>
  )
}

export default Header