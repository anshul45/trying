"use client"
import React from "react";

import ResizableComponentProvider from "./ResizableComponentProvider";

interface ReduxProvidersProps {
    children: React.ReactNode;
  }

const ReduxProvider = ({children}:ReduxProvidersProps) => {
    return(
        <ResizableComponentProvider>
        {children}
        </ResizableComponentProvider>
    )
}

export default ReduxProvider;