import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import CartWrapper from "./cartwrapper";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from '@next/third-parties/google'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat"
})

export const metadata: Metadata = {
  title: "SkylineCulture",
  description: "Nissan Skyline marketplace and merchandise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-main flex flex-col min-h-screen bg-white">
        <CartWrapper>
        <Header/>
        <main className="flex-grow">
            {children}
        </main>
        <Toaster position="bottom-center" toastOptions={{ duration: 2000 }} />
        <Footer/>
        </CartWrapper>
      </body>
      <GoogleAnalytics gaId="G-CTCHM9JFFN" />
    </html>
  );
}
