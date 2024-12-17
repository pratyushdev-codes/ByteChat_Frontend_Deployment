import type { Metadata } from "next";
import localFont from "next/font/local";
import {SocketProvider} from '../context/SocketProvider';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Byte Chat",
  description: "Low Latency Chat Service by Byte Stream",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SocketProvider>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
      </SocketProvider>
    </html>
  );
}
