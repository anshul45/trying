import React, { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
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
  const visible = !sidebarNotVisible.includes(path);

  const isShow = useSelector((store: RootState) => store.sidebar.showSidebar);

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);
  

  return (
    <SessionProvider>
     <PanelGroup
        direction="horizontal"
      >
        {(visible && isShow) && (
          <>
            <Panel defaultSizePercentage={19} minSizePercentage={19} maxSizePercentage={30}>
              <SideBar />
            </Panel>
            <PanelResizeHandle className="hover:bg-gray-500 w-1 bg-[#f1f3f4]" />
          </>
        )}
        <Panel
          defaultSizePercentage={(visible && isShow) ? 81 : 100}
          minSizePercentage={(visible && isShow) ? 70 : 100}
          maxSizePercentage={(visible && isShow) ? 81 : 100}
        >
          {children }
        </Panel>
      </PanelGroup>
    </SessionProvider>
  );
};

export default ResizableComponentProvider;
