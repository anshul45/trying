import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import Provider from "./components/Provider";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <ColorSchemeScript />
      </head>
      <body>
        <Provider>
       <MantineProvider>{children}</MantineProvider>
        </Provider>
      </body>
    </html>
  );
}
