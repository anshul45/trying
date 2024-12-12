"use client"
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
import React from "react";

import ResizableComponentProvider from "./ResizableComponentProvider";

interface ReduxProvidersProps {
    children: React.ReactNode;
  }

const ReduxProvider = ({children}:ReduxProvidersProps) => {
    return(
        <Provider store={store}>
        <ResizableComponentProvider>
        {children}
        </ResizableComponentProvider>
        </Provider>
    )
}

export default ReduxProvider;