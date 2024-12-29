import { Flex } from '@mantine/core'
import React from 'react'

const OptionSelector = ({options, selectedOption,setSelectedOption}:any) => {
  return (
    <Flex gap={3} className='bg-white  border-[1px] rounded-md'>
        {options?.map((option:string) => 
        <div key={option} className={`${selectedOption === option ? "bg-gray-100 text-gray-500" :""} ${selectedOption === "CHATBOT" ? "rounded-r-lg" :"rounded-l-lg"} py-1  px-2 w-full text-center cursor-pointer font-semibold`} onClick={() => setSelectedOption(option)}>{option}</div>
        )}
        
    </Flex>
  )
}

export default OptionSelector