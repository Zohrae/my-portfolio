import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "Portfolio simple et clair",
  authors: [{ name: "Votre Nom" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="antialiased bg-white text-gray-900">
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
