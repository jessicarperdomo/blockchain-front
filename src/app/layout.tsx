import './globals.css';
import type { Metadata } from 'next';
import '@fontsource/inter';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ethereum App',
  description: 'Ethereum App - ADL',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-100`}>{children}</body>
    </html>
  );
}
