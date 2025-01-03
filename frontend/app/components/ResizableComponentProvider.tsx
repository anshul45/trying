import React, { useEffect, useMemo } from "react";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import SideBar from "./SideBar";

const PanelGroup = dynamic(() => import("react-resizable-panels").then((mod) => mod.PanelGroup), { ssr: false });
const Panel = dynamic(() => import("react-resizable-panels").then((mod) => mod.Panel), { ssr: false });
const PanelResizeHandle = dynamic(() => import("react-resizable-panels").then((mod) => mod.PanelResizeHandle), { ssr: false });

interface ProvidersProps {
  children: React.ReactNode;
}

const ResizableComponentProvider = ({ children }: ProvidersProps) => {
  const path = usePathname();

  const sidebarNotVisible = ["/login", "/login/password", "/register", "/register/password", "/"];
  const visible = useMemo(() => !sidebarNotVisible.includes(path), [path]);


  useEffect(() => {
    const handleResize = () => window.dispatchEvent(new Event("resize"));
    handleResize();
  }, []);

  return (
    <SessionProvider>
      <PanelGroup direction="horizontal">
        {visible && true && (
          <>
            <Panel defaultSizePercentage={19} minSizePercentage={19} maxSizePercentage={30}>
              <SideBar />
            </Panel>
            <PanelResizeHandle className="hover:bg-gray-500 w-1 bg-[#f1f3f4]" />
          </>
        )}
        <Panel
          defaultSizePercentage={visible && true ? 81 : 100}
          minSizePercentage={visible && true ? 70 : 100}
          maxSizePercentage={visible && true ? 81 : 100}
        >
          {children}
        </Panel>
      </PanelGroup>
    </SessionProvider>
  );
};

export default ResizableComponentProvider;
