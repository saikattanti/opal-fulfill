import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Opal",
  description: "Share AI powered videos with your friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${manrope.className} bg-[#171717]`}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
