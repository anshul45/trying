"use client"
import { SessionProvider } from "next-auth/react"
import React from "react"
import SideBar from "./SideBar"
import { MantineProvider } from "@mantine/core"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import { usePathname } from "next/navigation"
import '@mantine/core/styles.css';

interface ProvidersProps {
    children:React.ReactNode
}

const Provider = ({children}:ProvidersProps) => {
  const path = usePathname();

  const sidebarNotVisible = ["/login","/login/password","/register","/register/password","/"];

  const visible = !sidebarNotVisible.includes(path)

  return (
    <MantineProvider>
   <SessionProvider>
    <PanelGroup
    direction="horizontal"
    >
      {visible && (<>
        <Panel defaultSizePercentage={19} minSizePercentage={19} maxSizePercentage={30} >
        <SideBar />
      </Panel>
      <PanelResizeHandle  className=" hover:bg-gray-500 w-1 bg-[#f1f3f4]"  />
      </>
      )} 
      <Panel defaultSizePercentage={visible ? 81 : 100} minSizePercentage={visible ? 70 : 100} maxSizePercentage={visible ? 81 : 100}>
    {children}
      </Panel>
    </PanelGroup>
    </SessionProvider>
    </MantineProvider>
  )
}


export default Provider