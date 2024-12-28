import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import RootProviders from "@/components/providers/RootProviders";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Budget Tracker",
  description: "Budget-tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" 
    className="dark"
     style={{
      colorScheme:"dark",
    }}
    >
      <body
        className={inter.className}
      >
        <Toaster richColors position="bottom-right"/>
       <RootProviders>
        {children}
       </RootProviders>
      </body>
    </html>
    </ClerkProvider>
  );
}
