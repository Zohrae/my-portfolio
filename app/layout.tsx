import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fatima LAMSSANE | Full Stack Developer",
  description:
    "Portfolio of Fatima LAMSSANE - Junior Full Stack Web Developer, showcasing projects, skills, and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} antialiased
          bg-gradient-to-br from-[#F9DBBD] via-[#FFA5AB] to-[#DA627D]
          text-[#0a0a0a] dark:bg-[#450920] dark:text-[#ffffff]
          transition-colors duration-700
          overflow-x-hidden
        `}
      >
        {children}
      </body>
    </html>
  );
}
