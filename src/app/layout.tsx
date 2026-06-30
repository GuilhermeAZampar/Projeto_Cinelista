import type { Metadata } from "next";
import "../styles/globals.css";
import Header from './Components/Header';
import Footer from './Components/Footer';


export const metadata: Metadata = {
  title: "Cinelista",
  description: "Auto explicativo"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
    
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <Footer/>
        {children}
      </body>
    </html>
  );
}
