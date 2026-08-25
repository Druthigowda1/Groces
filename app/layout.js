import "./globals.css";
import { Inter } from 'next/font/google';
import Header from '../components/layout/Header';
import MobileNav from '../components/layout/MobileNav';
import Footer from '../components/layout/Footer';
import SplashScreen from '../components/ui/SplashScreen';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Grocery Hub - Where Quality Meets Value",
  description: "Fresh groceries, daily essentials, household products and much more — all in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-gray-50 flex flex-col`}>
        <SplashScreen />
        <Header />
        <main className="flex-1 pb-16 md:pb-0 pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
