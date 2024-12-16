import { Modal, Title } from '@mantine/core'
import React from 'react'
import CreateNewCard from './CreateNewCard'
import { MdChat } from "react-icons/md";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { MdOutlineSpeed } from "react-icons/md";

const CreateModal = () => {
  

  const create = [{title:"PIPELINES",icon:<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-[14px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M14 9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9h-7z"></path></svg>
  },{title:"KNOWLEDGE BASES",icon:<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-[14px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15 4h-5V3h5v1zm-1 3h-2v1h2V7zm-4 0H1v1h9V7zm2 6H1v1h11v-1zm-5-3H1v1h6v-1zm8 0h-5v1h5v-1zM8 2v3H1V2h7zM7 3H2v1h5V3z"></path></svg>},{title:"CHATBOTS",icon:<MdChat/>},{title:"AUTOMATIONS",icon:<FaWandMagicSparkles/>},{title:"EVALUATIONS",icon:<MdOutlineSpeed/>}]

  return (
    <Modal opened={false} onClose={() => {}} centered  styles={{
      header: { width:"100%",height:"20px", minHeight:"20px" ,},
      close:{minHeight:"20px", height:"20px",}
    }}
  > 
    {create.map(data => (
      <CreateNewCard key={data.title} title={data.title} icon={data.icon}/>
    ))}
    </Modal>
  )
}

export default CreateModal