import { AppSidebar } from "@/components/client/SideBar/AppSideBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Finman",
    default: "Home",
  },
  description: "Application for personal financal management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "mx-auto flex flex-col")}>
        <SidebarProvider>
          <AppSidebar />
          <div className="grow">
            <SidebarInset>
              <Header />
              {children}
              <Footer />
            </SidebarInset>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
