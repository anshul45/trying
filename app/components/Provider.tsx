"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import SideBar from "./SideBar";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";


// Dynamically import
const PanelGroup = dynamic(() => import("react-resizable-panels").then(mod => mod.PanelGroup), { ssr: false });
const Panel = dynamic(() => import("react-resizable-panels").then(mod => mod.Panel), { ssr: false });
const PanelResizeHandle = dynamic(() => import("react-resizable-panels").then(mod => mod.PanelResizeHandle), { ssr: false });

interface ProvidersProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProvidersProps) => {
  const path = usePathname();

  const sidebarNotVisible = ["/login", "/login/password", "/register", "/register/password", "/"];

  const visible = !sidebarNotVisible.includes(path);

  // Force layout recalculation on client-side render
  React.useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <SessionProvider>
      <PanelGroup
        direction="horizontal"
      >
        {visible && (
          <>
            <Panel defaultSizePercentage={19} minSizePercentage={19} maxSizePercentage={30}>
              <SideBar />
            </Panel>
            <PanelResizeHandle className="hover:bg-gray-500 w-1 bg-[#f1f3f4]" />
          </>
        )}
        <Panel
          defaultSizePercentage={visible ? 81 : 100}
          minSizePercentage={visible ? 70 : 100}
          maxSizePercentage={visible ? 81 : 100}
        >
          {children }
        </Panel>
      </PanelGroup>
    </SessionProvider>
  );
};

export default Provider;
