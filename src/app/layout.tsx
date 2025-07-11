import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
// import MarqueeBanner from "@/components/layout/MarqueeBanner";

export const metadata: Metadata = {
  title: 'Ecommerce App',
  description: 'A modern ecommerce platform to browse and purchase products online.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="flex flex-col min-h-screen">
          {/* <MarqueeBanner /> */}
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
