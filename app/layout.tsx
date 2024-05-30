import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Henry Kobutra - Product Leader',
  description: 'Trilingual | Building AI Products',
  authors: { name: 'Henry Kobutra', url: 'https://kobutra.com' },
  creator: 'Henry Kobutra',
  keywords: [
    'Henry',
    'Henry Kobutra',
    'Kobutra',
    'Varit Kobutra',
    'product leader',
    'ai',
    'product management',
    'trilingual',
  ],

  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kobutra.com',
    siteName: 'Henry Kobutra',
    title: 'Henry Kobutra - Product Leader',
    description: 'Trilingual | Building AI Products',
    images: 'https://kobutra.com/henry_sticky_notes.jpg',
  },
  twitter: {
    creator: '@henrykobutra',
    site: '@henrykobutra',
    card: 'summary_large_image',
    images: 'https://kobutra.com/henry_sticky_notes.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
