import './globals.css';

import { Inter } from 'next/font/google';
import { Header } from '@/components';

import type { Metadata } from 'next';
import { Footer } from '@/components/global';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Huecker Consulting | Transportation and Supply Chain Consulting | Expert Solutions for Efficiency and Growth',
  description: 'Transform your transportation and supply chain operations with expert consulting services from Huecker Consulting. We specialize in vendor selection, software implementation, experiential training, and custom development to help carriers and logistics companies optimize efficiency, reduce costs, and drive sustainable growth. Partner with us to navigate today\'s challenges and position your business for success.',
  keywords: ['Transportation consulting, supply chain efficiency, logistics consulting, vendor selection, software implementation, experiential training, custom development, carrier optimization, supply chain growth, transportation strategy, logistics solutions'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{marginTop: '8.5rem'}} className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
