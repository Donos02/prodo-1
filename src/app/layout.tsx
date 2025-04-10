import "~/styles/globals.css";

import { type Metadata } from "next";
import { SessionProvider } from "next-auth/react"
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Prodo Dashboard",
  description: "Modern admin dashboard with blue theme",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-bs-theme="blue-theme" className="h-full">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Material+Icons+Outlined" rel="stylesheet" />
      </head>
      <body className="font-['Noto_Sans',sans-serif] text-[14px] tracking-[0.5px] h-full">
        <SessionProvider>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
