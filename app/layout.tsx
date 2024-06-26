import type { Metadata } from "next";
import { Aleo } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const aAleo = Aleo({ weight: ["500"], preload : false }); // subsets: ["latin"] ,

export const metadata: Metadata = {
  title: "Jeong Dasom",
  description: "Generated by dasom for Portpolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={aAleo.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
