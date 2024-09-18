import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";
import Chat from "@/components/shared/Chat";
import Topbar from "@/components/shared/Topbar";
import ConditionalCommon from "@/components/shared/ConditionalCommon";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Welcome to Clooud Gen, your trusted IT solutions partner offering comprehensive services including web development, software development, digital marketing, video editing, and more. Contact us today to bring your ideas to life!",
}; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <head>
          {/* Other head tags like meta, title */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-4CFQ9M56SJ"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4CFQ9M56SJ');
          `}
          </Script>
        </head>
      </head>
      <body className={inter.className}>
        <Topbar />
        <NavBar />
        {children}
        <Chat />
        <ScrollToTop />
        <ConditionalCommon />
        <Footer />
      </body>
    </html>
  );
}
