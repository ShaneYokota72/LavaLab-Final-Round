import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LavaLab Final Round 💪 - Shane Yokota",
  description: "LavaLab Final Round clone project by Shane Yokota",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar />
        {/* Notification Space */}
        <div id="notification" className="absolute top-28 right-4 z-20 flex flex-col gap-4"></div>
        {children}
      </body>
    </html>
  );
}
