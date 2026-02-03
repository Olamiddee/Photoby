import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import CustomCursor from "@/components/UI/CustomCursor";
import Header from "@/components/header/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photoby | Creative Photography Agency",
  description: "Award-winning photography agency crafting stunning visual stories for brands, events, and editorial projects. From concept to capture – we bring your vision to life with cinematic precision.",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased flex flex-col gap-32`}
      >
        {/* <CustomCursor /> */}
        <Header />
        {children}
      </body>
    </html>
  );
}
