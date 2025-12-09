import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ElectroFusion Research Society | TIET',
  description: 'Driving Innovation in Electric Mobility and Power Systems at Thapar Institute of Engineering and Technology',
  keywords: ['Electric Vehicles', 'Power Electronics', 'Renewable Energy', 'TIET', 'Research Society'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
