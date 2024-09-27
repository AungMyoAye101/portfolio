import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./Provider";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Aung Myo Aye's Protfolio",
  description: "Make By Aung Myo Aye",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" max-w-8xl mx-auto">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
