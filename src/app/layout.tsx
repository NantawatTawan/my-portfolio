import type { Metadata } from "next";
// 1. Import ฟอนต์ที่เราต้องการจาก google
import { Press_Start_2P, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 2. ตั้งค่าฟอนต์แต่ละตัว
const fontDisplay = Press_Start_2P({
  subsets: ["latin"],
  weight: "400", // ฟอนต์นี้มีน้ำหนักเดียว
  variable: "--font-display", // ตั้งชื่อเป็น CSS Variable
});

const fontBody = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body", // ตั้งชื่อเป็น CSS Variable
});

export const metadata: Metadata = {
  title: "SunnyDream - Full-Stack Developer",
  description: "Portfolio of a developer creating web, mobile, and automation solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. นำ variable ของฟอนต์มาใช้งานใน className
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body className={`bg-gray-900 text-white font-body`}>
        <Navbar />
        <main className="pt-16 pb-24"> {/* เพิ่ม padding top เพื่อไม่ให้เนื้อหาถูก Navbar บัง */}
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}