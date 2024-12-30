import { ReactNode } from "react";
import { WebSocketService } from "../webhook/websocket";

interface ChatBotProps {
    socketRef: React.RefObject<WebSocketService>;
  }

interface FilterComponentProps{
  icon:ReactNode,
  title:string
}

interface RunPipelineProps{
  setOpenPipeline:React.Dispatch<React.SetStateAction<boolean>>
}

interface StandardProps {
  socketRef: React.RefObject<WebSocketService>;
}

interface PipelineMenuProps{
  showModal:boolean
  setShowModal:React.Dispatch<React.SetStateAction<boolean>>
}
interface OptionSelectorProps{
  options:string[],
   selectedOption: strong,
   setSelectedOption:React.Dispatch<React.SetStateAction<string>>
}

interface NodesHeadProps{
  id : string,
  icon: ReactNode, 
  title:string
}

interface SelectorProps {
  title:string
}

interface HeaderProps{
  title:string,
  button:{title:string,action:any}
}
