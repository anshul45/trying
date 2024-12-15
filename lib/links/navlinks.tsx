import { MdChat, MdKeyboardVoice, MdOutlineSpeed } from 'react-icons/md';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import { FaShop } from "react-icons/fa6";
import { IoFolder } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { AiFillMerge } from "react-icons/ai";
import { ReactNode } from 'react';

interface NavLink {
  title: string;
  icon: ReactNode;
}

const navLinks: NavLink[] = [{title:"Pipelines",icon:<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-[14px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M14 9v2h-3V9H8.5V7H11V1H4v6h2.5v2H4v6h2.5v2H4v6h7v-6H8.5v-2H11v-2h3v2h7V9h-7z"></path></svg>
  },{title:"Marketplace",icon:<FaShop/>},{title:"Knowledge",icon:<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-[14px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15 4h-5V3h5v1zm-1 3h-2v1h2V7zm-4 0H1v1h9V7zm2 6H1v1h11v-1zm-5-3H1v1h6v-1zm8 0h-5v1h5v-1zM8 2v3H1V2h7zM7 3H2v1h5V3z"></path></svg>},
  {title:"FIles",icon:<IoFolder/>},{title:"Automations",icon:<FaWandMagicSparkles/>},
  {title:"Chatbots",icon:<MdChat/>},{title:"Search",icon:<IoIosSearch/>},{title:"Forms",icon:<FaFileAlt/>},{title:"Voicebots",icon:<MdKeyboardVoice/>},{title:"Portals",icon:<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-[16px] text-black-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.496 4a3.49 3.49 0 0 0-3.46 3h-3.1a2 2 0 1 0 0 1h3.1a3.5 3.5 0 1 0 3.46-4zm0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg>},{title:"Evaluations",icon:<MdOutlineSpeed/>},{title:"Transformations",icon:<AiFillMerge/>},{title:"Analytics",icon:<MdAnalytics/>}]

export default navLinks;
