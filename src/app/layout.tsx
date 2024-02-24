import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/headers/MainHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quoc Ma - Portfolio Home",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* header start */}
        <MainHeader />
        {/* header end */}
        {children}
      </body>
    </html>
  );
}
