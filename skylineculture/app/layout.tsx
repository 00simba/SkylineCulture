import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import CartWrapper from "./cartwrapper";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from "next";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat"
})

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SkylineCulture",
  url: "https://www.skylineculture.com",
  logo: "https://www.skylineculture.com/logo.png",
  sameAs: [
    "https://www.instagram.com/skylineculture"
  ]
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SkylineCulture",
  url: "https://www.skylineculture.com",
};

export const metadata: Metadata = {
  title: {
    default: "SkylineCulture | Marketplace, Parts, and Accessories",
    template: "%s | SkylineCulture",
  },
  description:
    "Buy and sell Nissan Skyline GT-Rs, explore genuine NISMO parts, and shop Skyline accessories and collectibles.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png"
  },
  metadataBase: new URL("https://www.skylineculture.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-main flex flex-col min-h-screen bg-black">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd)}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd)}}/>
        <CartWrapper>
          <Header />
          <main className="flex-grow bg-white">
            {children}
          </main>
          <Toaster position="bottom-center" toastOptions={{ duration: 2000 }} />
          <Footer />
        </CartWrapper>
      </body>
      <GoogleAnalytics gaId="G-CTCHM9JFFN" />
    </html>
  );
}
