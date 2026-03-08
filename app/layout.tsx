import Footer from "./_ui/components/footer/server/Footer";
import Header from "./_ui/components/header/server/Header";
import Main from "./_ui/components/main/server/Main";
import Navbar from "./_ui/components/navbar/server/Navbar";
import "./globals.css";
import { bebasNeue, cormorantGaramond, dmMono } from "./utils/constants";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${cormorantGaramond.variable} ${dmMono.variable}`}>
      <body>
        <Header></Header>
        <Navbar></Navbar>
        <Main>{children}</Main>
        <Footer></Footer>
      </body>
    </html>
  );
}
