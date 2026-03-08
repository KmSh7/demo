import Footer from "./_ui/components/footer/server/Footer";
import Header from "./_ui/components/header/server/Header";
import Main from "./_ui/components/main/server/Main";
import Navbar from "./_ui/components/navbar/server/Navbar";
import "./globals.css";
import { bebasNeue, cormorantGaramond, dmMono } from "./utils/constants";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${cormorantGaramond.variable} ${dmMono.variable}`}
    >
      <body>
        <Header></Header>
        <Navbar></Navbar>
        <Main>{children}</Main>
        <Footer></Footer>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BSP1RM9HH6"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-BSP1RM9HH6');
      `}
        </Script>
      </body>
    </html>
  );
}
