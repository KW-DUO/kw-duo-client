import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navBar/Navbar';
import TanstackProviders from '@/util/TanstackProviders';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KW DUO',
  description: 'Matching developers for Kwangwoon Univ.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={'font-Pretendard'}>
        <TanstackProviders>
          <Navbar />
          {children}
        </TanstackProviders>
      </body>
    </html>
  );
}
