import { OptionSelectorProps } from '@/lib/common/types'
import { Flex } from '@mantine/core'
import React, { FC } from 'react'

const OptionSelector:FC<OptionSelectorProps> = ({options, selectedOption,setSelectedOption}) => {
  return (
    <Flex gap={3} className='bg-white  border-[1px] rounded-md'>
        {options?.map((option:string) => 
        <div key={option} className={`${selectedOption === option ? "bg-gray-100 text-gray-500" :""} ${selectedOption === "CHATBOT" ? "rounded-r-lg" :"rounded-l-lg"} py-1  px-2 w-full text-center cursor-pointer font-semibold`} onClick={() => setSelectedOption(option)}>{option}</div>
        )}
        
    </Flex>
  )
}

export default OptionSelector